<template>
  <div class="container">
    <ul class="radar">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  background-color: #000;
  height: 100vh;
  width: 100vw;
}
$background: linear-gradient(180deg, #001973 0%, #0081df 100%);
$radar-color: lighten(green, 50%);
$radar-length: 18;
$radar-trail: 5;
$dot-size: 8px;
$dot-spacing: 1px;

$data: (
    0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
  ),
  (0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0),
  (0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0),
  (0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 1 1 0 0 1 0 0 1 0 0 1 1 0 0 1 0 1 0 1),
  (1 0 0 0 0 1 0 0 1 0 1 0 0 0 0 1 0 0 0 0 0 0 1 0 0 1 0 1 0 0 000 0 0 1 0 1 0 0 0 0 1 0 1 0 1),
  (0 1 1 0 0 1 0 0 1 0 0 1 1 0 0 0 1 1 0 0 0 0 1 0 0 1 0 1 0 0 1 0 1 1 1 0 0 0 1 1 0 0 1 0 1 0 1),
  (0 0 0 1 0 1 1 1 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 1 1 0 0 1 0 0 1 0 1 0 1 0 0 0 0 0 1 0 1 0 1 0 1),
  (1 0 0 1 0 1 0 0 1 0 1 0 0 1 0 1 0 0 1 0 0 0 1 0 0 1 0 1 0 0 1 0 1 0 0 1 0 0 0 0 1 0 0 0 0 0 0),
  (0 1 1 0 0 1 0 0 1 0 0 1 1 0 0 0 1 1 0 0 0 0 1 0 0 1 0 0 1 1 0 0 1 0 0 1 0 1 1 1 0 0 1 0 1 0 1);

$frames: length(nth($data, 1)) + 5;

@function box-shadow-for-frame($frame, $transparency) {
  $shadows: (); // empty list
  @for $i from 1 through $radar-length {
    $color: rgba($radar-color, 0.2 * $transparency);
    @if $frame >
      0 and
      $i <=
      length($data) and
      $frame <=
      length(nth($data, $i)) and
      nth(nth($data, $i), $frame) ==
      1
    {
      $color: rgba($radar-color, 1 * $transparency);
    }
    $shadow: -((($dot-size + $dot-spacing) * ($radar-length - $i))) 0 $color;
    $shadows: append($shadows, $shadow, comma);
  }
  @return $shadows;
}

.radar {
  margin: 0;
  padding: 0;
}

.radar li {
  border-radius: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: $radar-color;
  width: $dot-size;
  height: $dot-size;
  list-style: none;
  margin: 0;
  padding: 0;
}

@for $i from 1 through 5 {
  .radar li:nth-child(#{$i}) {
    -webkit-animation: radar-#{$i} 2s infinite steps(1, start);
    -webkit-transform: rotateZ(0deg);
    box-shadow: box-shadow-for-frame(-5 + $i, calc($i / 5));
  }

  @-webkit-keyframes radar-#{$i} {
    @for $frame from 1 through $frames {
      #{calc(100% / $frames) * $frame} {
        -webkit-transform: rotateZ((calc(360deg / $frames) * ($frame - 5 + $i)) - 90deg);
        box-shadow: box-shadow-for-frame($frame - 5 + $i, calc($i / 5));
      }
    }
  }
}
</style>
