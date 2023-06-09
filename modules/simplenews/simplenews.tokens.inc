<?php

/**
 * @file
 * Token related hook implementations.
 */

use Drupal\Component\Utility\Html;
use Drupal\Core\Render\BubbleableMetadata;
use Drupal\Core\Url;

/**
 * Implements hook_token_info().
 */
function simplenews_token_info() {
  $types['simplenews-subscriber'] = [
    'name' => t('Simplenews subscriber'),
    'description' => t('Tokens related to the newsletter recipient'),
    'needs-data' => 'simplenews_subscriber',
  ];
  $types['simplenews-newsletter'] = [
    'name' => t('Simplenews newsletter'),
    'description' => t('Tokens related to the newsletter'),
    'needs-data' => 'newsletter',
  ];

  // Tokens for simplenews subscriber.
  $subscriber['subscribe-url'] = [
    'name' => t('Subscription URL'),
    'description' => t('The URL of the page where the subscription is confirmed.'),
  ];
  $subscriber['unsubscribe-url'] = [
    'name' => t('Unsubscribe URL'),
    'description' => t('The URL of the page where the cancellation of the subscription is confirmed.'),
  ];
  $subscriber['manage-url'] = [
    'name' => t('Manage URL'),
    'description' => t('The URL of the page where the subscribers can manage their newsletter subscriptions.'),
  ];
  $subscriber['combined-url'] = [
    'name' => t('Combined confirmation URL'),
    'description' => t('The URL of the page where subscribers can confirm their subscription changes.'),
  ];
  $subscriber['mail'] = [
    'name' => t('Subscriber email'),
    'description' => t('The email address of the newsletter receiver.'),
  ];

  $subscriber['user'] = [
    'name' => t('Corresponding user'),
    'description' => t('The user object that corresponds to this subscriber. This is not set for anonymous subscribers.'),
    'type' => 'user',
  ];

  // Tokens for simplenews newsletter.
  $newsletter['name'] = [
    'name' => t('Newsletter'),
    'description' => t('The name of the newsletter.'),
  ];
  $newsletter['url'] = [
    'name' => t('Newsletter URL'),
    'description' => t('The URL of the page listing the issues of this newsletter.'),
  ];

  return [
    'types' => $types,
    'tokens' => [
      'simplenews-subscriber' => $subscriber,
      'simplenews-newsletter' => $newsletter,
    ],
  ];
}

/**
 * Implements hook_tokens().
 */
function simplenews_tokens($type, $tokens, $data, $options, BubbleableMetadata $bubbleable_metadata) {
  $replacements = [];
  $sanitize = !empty($options['sanitize']);

  switch ($type) {
    case 'simplenews-subscriber':
      if (!isset($data['simplenews_subscriber'])) {
        return;
      }
      /** @var \Drupal\simplenews\Entity\Subscriber $subscriber */
      $subscriber = $data['simplenews_subscriber'];
      $newsletter = isset($data['newsletter']) ? $data['newsletter'] : NULL;
      $language = $subscriber->getLangcode();

      $url_arguments = ['absolute' => TRUE, 'langcode' => $language];

      foreach ($tokens as $name => $original) {
        $route_parameters = ['snid' => $subscriber->id(), 'timestamp' => \Drupal::time()->getRequestTime()];
        switch ($name) {
          case 'subscribe-url':
            $hash = simplenews_generate_hash($subscriber->getMail(), 'add');
            $bubbleable_metadata->setCacheMaxAge(0);
            $route_parameters += [
              'action' => 'add',
              'newsletter_id' => $newsletter->id(),
              'hash' => $hash,
            ];
            $replacements[$original] = Url::fromRoute('simplenews.newsletter_confirm_subscription', $route_parameters, $url_arguments)->toString();
            break;

          case 'unsubscribe-url':
            if (!$subscriber->id()) {
              // Temporary test subscriber.
              $replacements[$original] = t('No unsubscribe link for test subscribers.');
              break;
            }
            $hash = simplenews_generate_hash($subscriber->getMail(), 'remove');
            $bubbleable_metadata->setCacheMaxAge(0);
            $route_parameters += [
              'action' => 'remove',
              'newsletter_id' => $newsletter->id(),
              'hash' => $hash,
            ];
            $replacements[$original] = Url::fromRoute('simplenews.newsletter_confirm_subscription', $route_parameters, $url_arguments)->toString();
            break;

          case 'combined-url':
            $hash = simplenews_generate_hash($subscriber->getMail(), 'combined' . serialize($subscriber->getChanges()));
            $bubbleable_metadata->setCacheMaxAge(0);
            $route_parameters += ['hash' => $hash];
            $replacements[$original] = Url::fromRoute('simplenews.newsletter_confirm_combined', $route_parameters, $url_arguments)->toString();
            break;

          case 'manage-url':
            $hash = simplenews_generate_hash($subscriber->getMail(), 'manage');
            $bubbleable_metadata->setCacheMaxAge(0);
            $route_parameters += ['hash' => $hash];
            $replacements[$original] = Url::fromRoute('simplenews.newsletter_subscriptions_arguments', $route_parameters, $url_arguments)->toString();
            break;

          case 'mail':
            $replacements[$original] = Html::escape($subscriber->getMail());
            break;
        }
      }

      if (($user_tokens = \Drupal::token()->findWithPrefix($tokens, 'user')) && !empty($subscriber->uid)) {
        $replacements += \Drupal::token()->generate('user', $user_tokens, ['user' => $subscriber->getUser()], $options, $bubbleable_metadata);
      }

      break;

    case 'simplenews-newsletter':
      if (!isset($data['newsletter'])) {
        return;
      }
      $newsletter = $data['newsletter'];
      foreach ($tokens as $name => $original) {
        switch ($name) {
          case 'name':
            if (isset($newsletter->name)) {
              $replacements[$original] = $sanitize ? Html::escape($newsletter->name) : $newsletter->name;
            }
            else {
              $replacements[$original] = t('Unassigned newsletter');
            }
            break;

          case 'url':
            $replacements[$original] = $newsletter->url();
            break;
        }
      }
      break;
  }

  return $replacements;
}
