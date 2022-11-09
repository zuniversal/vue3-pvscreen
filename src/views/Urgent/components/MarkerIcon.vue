<template>
  <div
    :class="{icon, selected, gray }"
  />
</template>

<script setup>
import { ref, defineProps, defineEmits, } from 'vue'

const props = defineProps({
  selected: {
    type: Boolean,
    required: false,
  },
  error: {
    type: Boolean,
    required: false,
  },
  gray: {
    type: Boolean,
    required: false,
  },
})

const { selected, error, gray } = props;
const type = error ? `${props.type}-error` : props.type;
const icon = `icon-marker-${type}`;
</script>

<style lang='less'>
@import '../../mixins.less';

.icon {
  width: 38px;
  height: 38px;
  background-size: 100% 100%;
  user-select: none;
}

:global(.amap-marker.selected) .icon {
  width: 94px;
  height: 94px;
  position: relative;
  right: 28px;
  bottom: 28px;
}

:global {
  .icon-marker {
    &-people {
      .screen-bg('people');
      &.selected {
        .screen-bg('people_s');
      }
      &.gray {
        .screen-bg('people_gray');
      }
    }
    &-vehicle {
      .screen-bg('vehicle');
      &.selected {
        .screen-bg('vehicle_s');
      }
      &.gray {
        .screen-bg('vehicle_gray');
      }
    }
    &-customer {
      .screen-bg('customer');
      &.selected {
        .screen-bg('customer_s');
      }
    }
    &-customer-error {
      .screen-bg('customer_0');
      &.selected {
        .screen-bg('customer_0_s');
      }
    }
  }
  .amap-marker.selected {
    .icon-marker {
      &-people {
        .screen-bg('people_s');
        &.gray {
          .screen-bg('people_gray');
        }
      }
      &-vehicle {
        .screen-bg('vehicle_s');
        &.gray {
          .screen-bg('vehicle_gray');
        }
      }
      &-customer {
        .screen-bg('customer_s');
      }
      &-customer-error {
        .screen-bg('customer_0_s');
      }
    }
  }
}
</style>