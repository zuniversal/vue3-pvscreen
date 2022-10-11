import { animate, createProperty } from '@/utils';

export const isDev = process.env.NODE_ENV === 'development';

const { protocol = 'http:', hostname } = window.location;
const proxyPrefix = {
  'http:': '',
  'https:': '/screen',
}[protocol];

export const TEST_URL =  proxyPrefix + `/api`;
export const PROXY_URL = `/api`;
export const BASE_URL = isDev ? PROXY_URL : TEST_URL;
export const URL = `${BASE_URL}`;

export const LOGIN = '/login';
export const noRedirectLoginPath = [];

export const PRIMARY = '#00B460';
export const DANGER = 'red';
export const WARN = '#f50';
export const INFO = '#108ee9';
export const SUB = 'cyan';

export const tagColorMap = {
  0: DANGER,
  1: PRIMARY,
  2: WARN,
  3: INFO,
  4: SUB,
};

export const SELECT_TXT = '请选择';
export const INPUT_TXT = '请输入';
export const WORD = '关键字';
export const REQUIRE = '字段必填！';

export const SIZE = 10;
export const PAGE = 1;

export const CHECK_TXT = 'ON';
export const UN_CHECK_TXT = 'OFF';
export const TIME_ZERO = ' 00:00:00';

const animations = [
  'bounce',
  'flash',
  'rubberBand',
  'shake',
  'headShake',
  'swing',
  'tada',
  'wobble',
  'jello',
  'bounceIn',
  'bounceInDown',
  'bounceInLeft',
  'bounceInRight',
  'bounceOut',
  'bounceOutDown',
  'bounceOutLeft',
  'bounceOutLeft',
  'bounceOutUp',
  'fadeIn',
  'fadeInDown',
  'fadeInDownBig',
  'fadeInLeft',
  'fadeInLeftBig',
  'fadeInRight',
  'fadeInRightBig',
  'fadeInUp',
  'fadeInUpBig',
  'fadeOut',
  'fadeOutDown',
  'fadeOutDownBig',
  'fadeOutLeft',
  'fadeOutLeftBig',
  'fadeOutRight',
  'fadeOutRightBig',
  'fadeOutUp',
  'fadeOutUpBig',
  'flipInX',
  'flipInY',
  'flipOutX',
  'flipOutY',
  'lightSpeedIn',
  'lightSpeedOut',
  'rotateIn',
  'rotateInDownLeft',
  'rotateInDownRight',
  'rotateInUpLeft',
  'rotateInUpRight',
  'rotateOut',
  'rotateOutDownLeft',
  'rotateOutDownRight',
  'rotateOutUpLeft',
  'rotateOutUpRight',
  'hinge',
  'jackInTheBox',
  'rollIn',
  'rollOut',
  'zoomIn',
  'zoomInDown',
  'zoomInLeft',
  'zoomInRight',
  'zoomInUp',
  'zoomOut',
  'zoomOutDown',
  'zoomOutLeft',
  'zoomOutRight',
  'zoomOutUp',
  'slideInDown',
  'slideInLeft',
  'slideInRight',
  'slideInUp',
  'slideOutDown',
  'slideOutLeft',
  'slideOutRight',
  'slideOutUp',
];

export const ANIMATE = createProperty(animations, animate);
