<?php
/**
 * Created by PhpStorm.
 * User: marcn
 * Date: 24/04/2018
 * Time: 1:49 PM
 */

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;

class PublicEventEmitter implements ShouldBroadcastNow
{
  public $name, $payload;
  private $channel;

  public function __construct(string $name, $payload = null, $channel = 'Global')
  {
    $this->name = $name;
    $this->payload = $payload;
    $this->channel = $channel;
  }

  public function broadcastOn()
  {
    return new Channel($this->channel);
  }
}
