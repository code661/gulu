<template>
  <div class="col"
    :class="colClasses"
    :style="colStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
let validator = value => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach(key => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};

export default {
  data() {
    return {
      gutter: 0
    };
  },
  props: {
    span: {
      type: [String, Number]
    },
    offset: {
      type: [String, Number]
    },
    pad: { type: Object, validator },
    narrowPc: { type: Object, validator },
    pc: { type: Object, validator },
    widePc: { type: Object, validator },
    ultraWidePc: { type: Object, validator }
  },
  methods: {
    createColClass(obj = {}, prefixStr = "") {
      let tempArray = [];
      if (obj.span) {
        tempArray.push(`${prefixStr}col-${obj.span}`);
      }
      if (obj.offset || obj.offset == 0) {
        tempArray.push(`${prefixStr}offset-${obj.offset}`);
      }
      return tempArray;
    }
  },
  computed: {
    colStyle() {
      let { gutter } = this;
      return {
        paddingLeft: gutter / 2 + "px",
        paddingRight: gutter / 2 + "px"
      };
    },
    colClasses() {
      let { createColClass, span, offset, pad, narrowPc, pc, widePc, ultraWidePc } = this;
      return [
        ...createColClass({ span, offset }, ""),
        ...createColClass(pad, "pad-"),
        ...createColClass(narrowPc, "narrowPc-"),
        ...createColClass(pc, "pc-"),
        ...createColClass(widePc, "widePc-"),
        ...createColClass(ultraWidePc, "ultraWidePc-")
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: (calc($n / 24)) * 100%;
    }
  }

  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: (calc($n / 24)) * 100%;
    }
  }
  @media (min-width: 576px) {
    $class-prefix: pad-col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: (calc($n / 24)) * 100%;
      }
    }

    $class-prefix: pad-offset-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: (calc($n / 24)) * 100%;
      }
    }
  }

  @media (min-width: 768px) {
    $class-prefix: narrowPc-col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: (calc($n / 24)) * 100%;
      }
    }

    $class-prefix: narrowPc-offset-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: (calc($n / 24)) * 100%;
      }
    }
  }

  @media (min-width: 992px) {
    $class-prefix: pc-col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: (calc($n / 24)) * 100%;
      }
    }

    $class-prefix: pc-offset-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: (calc($n / 24)) * 100%;
      }
    }
  }

  @media (min-width: 1200px) {
    $class-prefix: widePc-col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: (calc($n / 24)) * 100%;
      }
    }

    $class-prefix: widePc-offset-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: (calc($n / 24)) * 100%;
      }
    }
  }

  @media (min-width: 1600px) {
    $class-prefix: ultraWidePc-col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: (calc($n / 24)) * 100%;
      }
    }

    $class-prefix: ultraWidePc-offset-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: (calc($n / 24)) * 100%;
      }
    }
  }
}
</style>


