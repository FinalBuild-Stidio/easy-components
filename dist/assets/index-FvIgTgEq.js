import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import * as React from 'react';
import React__default, { useLayoutEffect, useEffect, useContext, createRef, forwardRef, createContext, createElement, useMemo as useMemo$1, useRef, useImperativeHandle, useState as useState$1, Children } from 'react';
import classNames from 'classnames';
import ResizeObserver$1 from 'rc-resize-observer';
import omit from 'rc-util/lib/omit';
import raf from 'rc-util/lib/raf';
import { warning } from 'rc-util/lib/warning';
import canUseDom from 'rc-util/lib/Dom/canUseDom';
import { updateCSS, removeCSS } from 'rc-util/lib/Dom/dynamicCSS';
import { inputToRGB, rgbToHsv, rgbToHex, TinyColor } from '@ctrl/tinycolor';
import CSSMotion, { Provider, CSSMotionList } from 'rc-motion';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import RCPicker, { PickerPanel, RangePicker as RangePicker$1 } from 'rc-picker';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import pickAttrs from 'rc-util/lib/pickAttrs';
import RcCheckbox from 'rc-checkbox';
import { supportRef, composeRef } from 'rc-util/lib/ref';
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import RcTabs from 'rc-tabs';
import toArray$2 from 'rc-util/lib/Children/toArray';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RcCollapse from 'rc-collapse';
import RcDrawer from 'rc-drawer';
import FieldForm, { FormProvider as FormProvider$1, useForm as useForm$1, FieldContext, ListContext as ListContext$1, Field, List as List$1, useWatch } from 'rc-field-form';
import scrollIntoView from 'scroll-into-view-if-needed';
import useState from 'rc-util/lib/hooks/useState';
import isVisible from 'rc-util/lib/Dom/isVisible';
import { useEvent, supportNodeRef, useComposeRef } from 'rc-util';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Tooltip$1 from '@mui/material/Tooltip';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CircularProgress from '@mui/material/CircularProgress';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchIcon from '@mui/icons-material/Search';
import { LoadingButton } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import RcInputNumber from 'rc-input-number';
import RcMenu, { Divider, Item as Item$2, useFullPath, SubMenu as SubMenu$1, ItemGroup } from 'rc-menu';
import ListIcon from '@mui/icons-material/List';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { render, unmount } from 'rc-util/lib/React/render';
import InfoIcon from '@mui/icons-material/Info';
import Dialog, { Panel } from 'rc-dialog';
import { isStyleSupport } from 'rc-util/lib/Dom/styleChecker';
import Button$1 from '@mui/material/Button';
import RcTooltip, { Popup } from 'rc-tooltip';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CheckIcon from '@mui/icons-material/Check';
import RcSteps from 'rc-steps';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Circle as Circle$1 } from 'rc-progress';
import RcSwitch from 'rc-switch';
import { genTable, genVirtualTable, INTERNAL_HOOKS, EXPAND_COLUMN, Summary } from 'rc-table';
import { convertChildrenToColumns } from 'rc-table/lib/hooks/useColumns/index.js';
import Backdrop from '@mui/material/Backdrop';
import RcPagination from 'rc-pagination';
import Pagination$1 from 'rc-pagination/lib/locale/en_US';
import RcSelect, { Option, OptGroup } from 'rc-select';
import KeyCode from 'rc-util/lib/KeyCode';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ScheduleIcon from '@mui/icons-material/Schedule';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import RcTree, { TreeNode } from 'rc-tree';
import { conductExpandParent } from 'rc-tree/lib/util';
import { convertDataToEntities, convertTreeToData } from 'rc-tree/lib/utils/treeUtil';
import ArticleIcon from '@mui/icons-material/Article';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FolderIcon from '@mui/icons-material/Folder';
import useMemo from 'rc-util/lib/hooks/useMemo';
import { merge as merge$1 } from 'rc-util/lib/utils/set';
import isEqual from 'rc-util/lib/isEqual';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import copy from 'copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import CalendarLocale from 'rc-picker/lib/locale/en_US';
import { serialize, compile, stringify } from 'stylis';
import InputIcon from '@mui/icons-material/Input';
import RcTextArea from 'rc-textarea';
import RcInput from 'rc-input';

function throttleByAnimationFrame(fn) {
  let requestId;
  const later = (args) => () => {
    requestId = null;
    fn(...args);
  };
  const throttled = (...args) => {
    if (requestId == null) {
      requestId = raf(later(args));
    }
  };
  throttled.cancel = () => {
    raf.cancel(requestId);
    requestId = null;
  };
  return throttled;
}

const defaultGetPrefixCls = (suffixCls, customizePrefixCls) => {
  if (customizePrefixCls) {
    return customizePrefixCls;
  }
  return suffixCls ? `ipass-${suffixCls}` : "ipass";
};
const ConfigContext = React.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls
});

var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

const SPLIT = "%";
class Entity {
  constructor(instanceId) {
    /** @private Internal cache map. Do not access this directly */
    this.cache = /* @__PURE__ */ new Map();
    this.instanceId = instanceId;
  }
  get(keys) {
    return this.cache.get(keys.join(SPLIT)) || null;
  }
  update(keys, valueFn) {
    const path = keys.join(SPLIT);
    const prevValue = this.cache.get(path);
    const nextValue = valueFn(prevValue);
    if (nextValue === null) {
      this.cache.delete(path);
    } else {
      this.cache.set(path, nextValue);
    }
  }
}

const ATTR_TOKEN = "data-token-hash";
const ATTR_MARK = "data-css-hash";
const CSS_IN_JS_INSTANCE = "__cssinjs_instance__";
class Keyframes {
  constructor(name, style) {
    this._keyframe = true;
    this.name = name;
    this.style = style;
  }
  getName(hashId = "") {
    return hashId ? `${hashId}-${this.name}` : this.name;
  }
}
function createCache() {
  const cssinjsInstanceId = Math.random().toString(12).slice(2);
  if (typeof document !== "undefined" && document.head && document.body) {
    const styles = document.body.querySelectorAll(`style[${ATTR_MARK}]`) || [];
    const { firstChild } = document.head;
    Array.from(styles).forEach((style) => {
      style[CSS_IN_JS_INSTANCE] = style[CSS_IN_JS_INSTANCE] || cssinjsInstanceId;
      if (style[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
        document.head.insertBefore(style, firstChild);
      }
    });
    const styleHash = {};
    Array.from(document.querySelectorAll(`style[${ATTR_MARK}]`)).forEach(
      (style) => {
        const hash = style.getAttribute(ATTR_MARK);
        if (styleHash[hash]) {
          if (style[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
            style.parentNode?.removeChild(style);
          }
        } else {
          styleHash[hash] = true;
        }
      }
    );
  }
  return new Entity(cssinjsInstanceId);
}
const StyleContext = React.createContext({
  hashPriority: "low",
  cache: createCache(),
  defaultCache: true
});

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const fullClone$1 = {
  ...React
};
const { useInsertionEffect: useInsertionEffect$1 } = fullClone$1;
const useInsertionEffectPolyfill = (renderEffect, effect, deps) => {
  React.useMemo(renderEffect, deps);
  useIsomorphicLayoutEffect(() => effect(true), deps);
};
const useCompatibleInsertionEffect = useInsertionEffect$1 ? (renderEffect, effect, deps) => useInsertionEffect$1(() => {
  renderEffect();
  return effect();
}, deps) : useInsertionEffectPolyfill;

const fullClone = {
  ...React
};
const { useInsertionEffect } = fullClone;
const useCleanupRegister = (deps) => {
  const effectCleanups = [];
  let cleanupFlag = false;
  function register(fn) {
    if (cleanupFlag) {
      return;
    }
    effectCleanups.push(fn);
  }
  React.useEffect(() => {
    cleanupFlag = false;
    return () => {
      cleanupFlag = true;
      if (effectCleanups.length) {
        effectCleanups.forEach((fn) => fn());
      }
    };
  }, deps);
  return register;
};
const useRun = () => {
  return function(fn) {
    fn();
  };
};
const useEffectCleanupRegister = typeof useInsertionEffect !== "undefined" ? useCleanupRegister : useRun;

function useGlobalCache(prefix, keyPath, cacheFn, onCacheRemove, onCacheEffect) {
  const { cache: globalCache } = React.useContext(StyleContext);
  const fullPath = [prefix, ...keyPath];
  const deps = fullPath.join("_");
  const register = useEffectCleanupRegister([deps]);
  const buildCache = (updater) => {
    globalCache.update(fullPath, (prevCache) => {
      const [times = 0, cache] = prevCache || [];
      let tmpCache = cache;
      const mergedCache = tmpCache || cacheFn();
      const data = [times, mergedCache];
      return updater ? updater(data) : data;
    });
  };
  React.useMemo(
    () => {
      buildCache();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [deps]
    /* eslint-enable */
  );
  let cacheEntity = globalCache.get(fullPath);
  const cacheContent = cacheEntity[1];
  useCompatibleInsertionEffect(
    () => {
      onCacheEffect?.(cacheContent);
    },
    (polyfill) => {
      buildCache(([times, cache]) => {
        if (polyfill && times === 0) {
          onCacheEffect?.(cacheContent);
        }
        return [times + 1, cache];
      });
      return () => {
        globalCache.update(fullPath, (prevCache) => {
          const [times = 0, cache] = prevCache || [];
          const nextCount = times - 1;
          if (nextCount === 0) {
            register(() => onCacheRemove?.(cache, false));
            return null;
          }
          return [times - 1, cache];
        });
      };
    },
    [deps]
  );
  return cacheContent;
}

const ATTR_CACHE_MAP = "data-ipass-cssinjs-cache-path";
const CSS_FILE_STYLE = "_FILE_STYLE__";
let cachePathMap;
let fromCSSFile = true;
function prepare() {
  if (!cachePathMap) {
    cachePathMap = {};
    if (canUseDom()) {
      const div = document.createElement("div");
      div.className = ATTR_CACHE_MAP;
      div.style.position = "fixed";
      div.style.visibility = "hidden";
      div.style.top = "-9999px";
      document.body.appendChild(div);
      let content = getComputedStyle(div).content || "";
      content = content.replace(/^"/, "").replace(/"$/, "");
      content.split(";").forEach((item) => {
        const [path, hash] = item.split(":");
        cachePathMap[path] = hash;
      });
      const inlineMapStyle = document.querySelector(`style[${ATTR_CACHE_MAP}]`);
      if (inlineMapStyle) {
        fromCSSFile = false;
        inlineMapStyle.parentNode?.removeChild(inlineMapStyle);
      }
      document.body.removeChild(div);
    }
  }
}
function existPath(path) {
  prepare();
  return !!cachePathMap[path];
}
function getStyleAndHash(path) {
  const hash = cachePathMap[path];
  let styleStr = null;
  if (hash && canUseDom()) {
    if (fromCSSFile) {
      styleStr = CSS_FILE_STYLE;
    } else {
      const style = document.querySelector(
        `style[${ATTR_MARK}="${cachePathMap[path]}"]`
      );
      if (style) {
        styleStr = style.innerHTML;
      } else {
        delete cachePathMap[path];
      }
    }
  }
  return [styleStr, hash];
}

function sameDerivativeOption(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      return false;
    }
  }
  return true;
}
class ThemeCache {
  static {
    this.MAX_CACHE_SIZE = 20;
  }
  static {
    this.MAX_CACHE_OFFSET = 5;
  }
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
    this.keys = [];
    this.cacheCallTimes = 0;
  }
  size() {
    return this.keys.length;
  }
  internalGet(derivativeOption, updateCallTimes = false) {
    let cache = { map: this.cache };
    derivativeOption.forEach((derivative) => {
      if (!cache) {
        cache = void 0;
      } else {
        cache = cache?.map?.get(derivative);
      }
    });
    if (cache?.value && updateCallTimes) {
      cache.value[1] = this.cacheCallTimes++;
    }
    return cache?.value;
  }
  get(derivativeOption) {
    return this.internalGet(derivativeOption, true)?.[0];
  }
  has(derivativeOption) {
    return !!this.internalGet(derivativeOption);
  }
  set(derivativeOption, value) {
    if (!this.has(derivativeOption)) {
      if (this.size() + 1 > ThemeCache.MAX_CACHE_SIZE + ThemeCache.MAX_CACHE_OFFSET) {
        const [targetKey] = this.keys.reduce(
          (result, key) => {
            const [, callTimes] = result;
            if (this.internalGet(key)[1] < callTimes) {
              return [key, this.internalGet(key)[1]];
            }
            return result;
          },
          [this.keys[0], this.cacheCallTimes]
        );
        this.delete(targetKey);
      }
      this.keys.push(derivativeOption);
    }
    let cache = this.cache;
    derivativeOption.forEach((derivative, index) => {
      if (index === derivativeOption.length - 1) {
        cache.set(derivative, { value: [value, this.cacheCallTimes++] });
      } else {
        const cacheValue = cache.get(derivative);
        if (!cacheValue) {
          cache.set(derivative, { map: /* @__PURE__ */ new Map() });
        } else if (!cacheValue.map) {
          cacheValue.map = /* @__PURE__ */ new Map();
        }
        cache = cache.get(derivative).map;
      }
    });
  }
  deleteByPath(currentCache, derivatives) {
    const cache = currentCache.get(derivatives[0]);
    if (derivatives.length === 1) {
      if (!cache.map) {
        currentCache.delete(derivatives[0]);
      } else {
        currentCache.set(derivatives[0], { map: cache.map });
      }
      return cache.value?.[0];
    }
    const result = this.deleteByPath(cache.map, derivatives.slice(1));
    if ((!cache.map || cache.map.size === 0) && !cache.value) {
      currentCache.delete(derivatives[0]);
    }
    return result;
  }
  delete(derivativeOption) {
    if (this.has(derivativeOption)) {
      this.keys = this.keys.filter(
        (item) => !sameDerivativeOption(item, derivativeOption)
      );
      return this.deleteByPath(this.cache, derivativeOption);
    }
    return void 0;
  }
}

let uuid$1 = 0;
class Theme {
  constructor(derivatives) {
    this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
    this.id = uuid$1;
    if (derivatives.length === 0) {
      warning(
        derivatives.length > 0,
        "Theme should have at least one derivative function."
      );
    }
    uuid$1 += 1;
  }
  getDerivativeToken(token) {
    return this.derivatives.reduce(
      (result, derivative) => derivative(token, result),
      void 0
    );
  }
}

const cacheThemes = new ThemeCache();
function createTheme(derivatives) {
  const derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
  if (!cacheThemes.has(derivativeArr)) {
    cacheThemes.set(derivativeArr, new Theme(derivativeArr));
  }
  return cacheThemes.get(derivativeArr);
}

const EMPTY_OVERRIDE = {};
const hashPrefix = "css";
const tokenKeys = /* @__PURE__ */ new Map();
function recordCleanToken(tokenKey) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
}
function removeStyleTags(key, instanceId) {
  if (typeof document !== "undefined") {
    const styles = document.querySelectorAll(`style[${ATTR_TOKEN}="${key}"]`);
    styles.forEach((style) => {
      if (style[CSS_IN_JS_INSTANCE] === instanceId) {
        style.parentNode?.removeChild(style);
      }
    });
  }
}
const TOKEN_THRESHOLD = 0;
function cleanTokenStyle(tokenKey, instanceId) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
  const tokenKeyList = Array.from(tokenKeys.keys());
  const cleanableKeyList = tokenKeyList.filter((key) => {
    const count = tokenKeys.get(key) || 0;
    return count <= 0;
  });
  if (tokenKeyList.length - cleanableKeyList.length > TOKEN_THRESHOLD) {
    cleanableKeyList.forEach((key) => {
      removeStyleTags(key, instanceId);
      tokenKeys.delete(key);
    });
  }
}
const getComputedToken$1 = (originToken, overrideToken, theme, format) => {
  const derivativeToken = theme.getDerivativeToken(originToken);
  let mergedDerivativeToken = {
    ...derivativeToken,
    ...overrideToken
  };
  if (format) {
    mergedDerivativeToken = format(mergedDerivativeToken);
  }
  return mergedDerivativeToken;
};
function useCacheToken(theme, tokens, option = {}) {
  const {
    cache: { instanceId }
  } = useContext(StyleContext);
  const {
    salt = "",
    override = EMPTY_OVERRIDE,
    formatToken,
    getComputedToken: compute
  } = option;
  const mergedToken = React.useMemo(
    () => Object.assign({}, ...tokens),
    [tokens]
  );
  const tokenStr = React.useMemo(
    () => flattenToken(mergedToken),
    [mergedToken]
  );
  const overrideTokenStr = React.useMemo(
    () => flattenToken(override),
    [override]
  );
  const cachedToken = useGlobalCache(
    "token",
    [salt, theme.id, tokenStr, overrideTokenStr],
    () => {
      const mergedDerivativeToken = compute ? compute(mergedToken, override, theme) : getComputedToken$1(mergedToken, override, theme, formatToken);
      const tokenKey = token2key(mergedDerivativeToken, salt);
      mergedDerivativeToken._tokenKey = tokenKey;
      recordCleanToken(tokenKey);
      const hashId = `${hashPrefix}-${murmur2(tokenKey)}`;
      mergedDerivativeToken._hashId = hashId;
      return [mergedDerivativeToken, hashId];
    },
    (cache) => {
      cleanTokenStyle(cache[0]._tokenKey, instanceId);
    }
  );
  return cachedToken;
}

const flattenTokenCache = /* @__PURE__ */ new WeakMap();
function flattenToken(token) {
  let str = flattenTokenCache.get(token) || "";
  if (!str) {
    Object.keys(token).forEach((key) => {
      const value = token[key];
      str += key;
      if (value instanceof Theme) {
        str += value.id;
      } else if (value && typeof value === "object") {
        str += flattenToken(value);
      } else {
        str += value;
      }
    });
    flattenTokenCache.set(token, str);
  }
  return str;
}
function token2key(token, salt) {
  return murmur2(`${salt}_${flattenToken(token)}`);
}
const randomSelectorKey = `random-${Date.now()}-${Math.random()}`.replace(
  /\./g,
  ""
);
const checkContent = "_bAmBoO_";
function supportSelector(styleStr, handleElement, supportCheck) {
  if (canUseDom()) {
    updateCSS(styleStr, randomSelectorKey);
    const ele = document.createElement("div");
    ele.style.position = "fixed";
    ele.style.left = "0";
    ele.style.top = "0";
    handleElement?.(ele);
    document.body.appendChild(ele);
    const support = supportCheck ? supportCheck(ele) : getComputedStyle(ele).content?.includes(checkContent);
    ele.parentNode?.removeChild(ele);
    removeCSS(randomSelectorKey);
    return support;
  }
  return false;
}
let canLayer = void 0;
function supportLayer() {
  if (canLayer === void 0) {
    canLayer = supportSelector(
      `@layer ${randomSelectorKey} { .${randomSelectorKey} { content: "${checkContent}"!important; } }`,
      (ele) => {
        ele.className = randomSelectorKey;
      }
    );
  }
  return canLayer;
}

const isClientSide = canUseDom();
const SKIP_CHECK = "_skip_check_";
const MULTI_VALUE = "_multi_value_";
function uniqueHash(path, styleStr) {
  return murmur2(`${path.join("%")}${styleStr}`);
}
function Empty$1() {
  return null;
}
function normalizeStyle(styleStr) {
  const serialized = serialize(compile(styleStr), stringify);
  return serialized.replace(/\{%%%\:[^;];}/g, ";");
}
function isCompoundCSSProperty(value) {
  return typeof value === "object" && value && (SKIP_CHECK in value || MULTI_VALUE in value);
}
function injectSelectorHash(key, hashId, hashPriority) {
  if (!hashId) {
    return key;
  }
  const hashClassName = `.${hashId}`;
  const hashSelector = hashPriority === "low" ? `:where(${hashClassName})` : hashClassName;
  const keys = key.split(",").map((k) => {
    const fullPath = k.trim().split(/\s+/);
    let firstPath = fullPath[0] || "";
    const htmlElement = firstPath.match(/^\w+/)?.[0] || "";
    firstPath = `${htmlElement}${hashSelector}${firstPath.slice(
      htmlElement.length
    )}`;
    return [firstPath, ...fullPath.slice(1)].join(" ");
  });
  return keys.join(",");
}
const parseStyle = (interpolation, config = {}, { root, injectHash, parentSelectors } = {
  root: true,
  parentSelectors: []
}) => {
  const {
    hashId,
    layer,
    path,
    hashPriority,
    transformers = [],
    linters = []
  } = config;
  let styleStr = "";
  let effectStyle = {};
  function parseKeyframes(keyframes) {
    const animationName = keyframes.getName(hashId);
    if (!effectStyle[animationName]) {
      const [parsedStr] = parseStyle(keyframes.style, config, {
        root: false,
        parentSelectors
      });
      effectStyle[animationName] = `@keyframes ${keyframes.getName(
        hashId
      )}${parsedStr}`;
    }
  }
  function flattenList(list, fullList = []) {
    list.forEach((item) => {
      if (Array.isArray(item)) {
        flattenList(item, fullList);
      } else if (item) {
        fullList.push(item);
      }
    });
    return fullList;
  }
  const flattenStyleList = flattenList(
    Array.isArray(interpolation) ? interpolation : [interpolation]
  );
  flattenStyleList.forEach((originStyle) => {
    const style = typeof originStyle === "string" && !root ? {} : originStyle;
    if (typeof style === "string") {
      styleStr += `${style}
`;
    } else if (style._keyframe) {
      parseKeyframes(style);
    } else {
      const mergedStyle = transformers.reduce(
        (prev, trans) => trans?.visit?.(prev) || prev,
        style
      );
      Object.keys(mergedStyle).forEach((key) => {
        const value = mergedStyle[key];
        if (typeof value === "object" && value && (key !== "animationName" || !value._keyframe) && !isCompoundCSSProperty(value)) {
          let subInjectHash = false;
          let mergedKey = key.trim();
          let nextRoot = false;
          if ((root || injectHash) && hashId) {
            if (mergedKey.startsWith("@")) {
              subInjectHash = true;
            } else {
              mergedKey = injectSelectorHash(key, hashId, hashPriority);
            }
          } else if (root && !hashId && (mergedKey === "&" || mergedKey === "")) {
            mergedKey = "";
            nextRoot = true;
          }
          const [parsedStr, childEffectStyle] = parseStyle(
            value,
            config,
            {
              root: nextRoot,
              injectHash: subInjectHash,
              parentSelectors: [...parentSelectors, mergedKey]
            }
          );
          effectStyle = {
            ...effectStyle,
            ...childEffectStyle
          };
          styleStr += `${mergedKey}${parsedStr}`;
        } else {
          const appendStyle = (cssKey, cssValue) => {
            const styleName = cssKey.replace(
              /[A-Z]/g,
              (match) => `-${match.toLowerCase()}`
            );
            let formatValue = cssValue;
            if (!unitlessKeys[cssKey] && typeof formatValue === "number" && formatValue !== 0) {
              formatValue = `${formatValue}px`;
            }
            if (cssKey === "animationName" && cssValue?._keyframe) {
              parseKeyframes(cssValue);
              formatValue = cssValue.getName(hashId);
            }
            styleStr += `${styleName}:${formatValue};`;
          };
          const actualValue = value?.value ?? value;
          if (typeof value === "object" && value?.[MULTI_VALUE] && Array.isArray(actualValue)) {
            actualValue.forEach((item) => {
              appendStyle(key, item);
            });
          } else {
            appendStyle(key, actualValue);
          }
        }
      });
    }
  });
  if (!root) {
    styleStr = `{${styleStr}}`;
  } else if (layer && supportLayer()) {
    const layerCells = layer.split(",");
    const layerName = layerCells[layerCells.length - 1].trim();
    styleStr = `@layer ${layerName} {${styleStr}}`;
    if (layerCells.length > 1) {
      styleStr = `@layer ${layer}{%%%:%}${styleStr}`;
    }
  }
  return [styleStr, effectStyle];
};
function useStyleRegister(info, styleFn) {
  const { token, path, hashId, layer, nonce, clientOnly, order = 0 } = info;
  const {
    autoClear,
    mock,
    defaultCache,
    hashPriority,
    container,
    ssrInline,
    transformers,
    linters,
    cache
  } = React__default.useContext(StyleContext);
  const tokenKey = token._tokenKey;
  const fullPath = [tokenKey, ...path];
  let isMergedClientSide = isClientSide;
  const [cachedStyleStr, cachedTokenKey, cachedStyleId] = useGlobalCache(
    "style",
    fullPath,
    // Create cache if needed
    () => {
      const cachePath = fullPath.join("|");
      if (existPath(cachePath)) {
        const [inlineCacheStyleStr, styleHash] = getStyleAndHash(cachePath);
        if (inlineCacheStyleStr) {
          return [
            inlineCacheStyleStr,
            tokenKey,
            styleHash,
            {},
            clientOnly,
            order
          ];
        }
      }
      const styleObj = styleFn();
      const [parsedStyle, effectStyle] = parseStyle(styleObj, {
        hashId,
        hashPriority,
        layer,
        path: path.join("-"),
        transformers,
        linters
      });
      const styleStr = normalizeStyle(parsedStyle);
      const styleId = uniqueHash(fullPath, styleStr);
      return [styleStr, tokenKey, styleId, effectStyle, clientOnly, order];
    },
    // Remove cache if no need
    ([, , styleId], fromHMR) => {
      if ((fromHMR || autoClear) && isClientSide) {
        removeCSS(styleId, { mark: ATTR_MARK });
      }
    },
    // Effect: Inject style here
    ([styleStr, _, styleId, effectStyle]) => {
      if (isMergedClientSide && styleStr !== CSS_FILE_STYLE) {
        const mergedCSSConfig = {
          mark: ATTR_MARK,
          prepend: "queue",
          attachTo: container,
          priority: order
        };
        const nonceStr = typeof nonce === "function" ? nonce() : nonce;
        if (nonceStr) {
          mergedCSSConfig.csp = { nonce: nonceStr };
        }
        const style = updateCSS(styleStr, styleId, mergedCSSConfig);
        style[CSS_IN_JS_INSTANCE] = cache.instanceId;
        style.setAttribute(ATTR_TOKEN, tokenKey);
        Object.keys(effectStyle).forEach((effectKey) => {
          updateCSS(
            normalizeStyle(effectStyle[effectKey]),
            `_effect-${effectKey}`,
            mergedCSSConfig
          );
        });
      }
    }
  );
  return (node) => {
    let styleNode;
    if (!ssrInline || isMergedClientSide || !defaultCache) {
      styleNode = /* @__PURE__ */ jsx(Empty$1, {});
    } else {
      styleNode = /* @__PURE__ */ jsx(
        "style",
        {
          ...{
            [ATTR_TOKEN]: cachedTokenKey,
            [ATTR_MARK]: cachedStyleId
          },
          dangerouslySetInnerHTML: { __html: cachedStyleStr }
        }
      );
    }
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      styleNode,
      node
    ] });
  };
}

const PresetColors = [
  "blue",
  "purple",
  "cyan",
  "green",
  "magenta",
  "pink",
  "red",
  "orange",
  "yellow",
  "volcano",
  "geekblue",
  "lime",
  "gold"
];

const hueStep$1 = 2;
const saturationStep$1 = 0.16;
const saturationStep2$1 = 0.05;
const brightnessStep1$1 = 0.05;
const brightnessStep2$1 = 0.15;
const lightColorCount$1 = 5;
const darkColorCount$1 = 4;
const darkColorMap$1 = [
  { index: 7, opacity: 0.15 },
  { index: 6, opacity: 0.25 },
  { index: 5, opacity: 0.3 },
  { index: 5, opacity: 0.45 },
  { index: 5, opacity: 0.65 },
  { index: 5, opacity: 0.85 },
  { index: 4, opacity: 0.9 },
  { index: 3, opacity: 0.95 },
  { index: 2, opacity: 0.97 },
  { index: 1, opacity: 0.98 }
];
function toHsv$1({ r, g, b }) {
  const hsv = rgbToHsv(r, g, b);
  return { h: hsv.h * 360, s: hsv.s, v: hsv.v };
}
function toHex$1({ r, g, b }) {
  return `#${rgbToHex(r, g, b, false)}`;
}
function mix$1(rgb1, rgb2, amount) {
  const p = amount / 100;
  const rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}
function getHue$1(hsv, i, light) {
  let hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep$1 * i : Math.round(hsv.h) + hueStep$1 * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep$1 * i : Math.round(hsv.h) - hueStep$1 * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation$1(hsv, i, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  let saturation;
  if (light) {
    saturation = hsv.s - saturationStep$1 * i;
  } else if (i === darkColorCount$1) {
    saturation = hsv.s + saturationStep$1;
  } else {
    saturation = hsv.s + saturationStep2$1 * i;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i === lightColorCount$1 && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}
function getValue$1(hsv, i, light) {
  let value;
  if (light) {
    value = hsv.v + brightnessStep1$1 * i;
  } else {
    value = hsv.v - brightnessStep2$1 * i;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}
function generate$1(color, opts = {}) {
  const patterns = [];
  const pColor = inputToRGB(color);
  for (let i = lightColorCount$1; i > 0; i -= 1) {
    const hsv = toHsv$1(pColor);
    const colorString = toHex$1(
      inputToRGB({
        h: getHue$1(hsv, i, true),
        s: getSaturation$1(hsv, i, true),
        v: getValue$1(hsv, i, true)
      })
    );
    patterns.push(colorString);
  }
  patterns.push(toHex$1(pColor));
  for (let i = 1; i <= darkColorCount$1; i += 1) {
    const hsv = toHsv$1(pColor);
    const colorString = toHex$1(
      inputToRGB({
        h: getHue$1(hsv, i),
        s: getSaturation$1(hsv, i),
        v: getValue$1(hsv, i)
      })
    );
    patterns.push(colorString);
  }
  if (opts.theme === "dark") {
    return darkColorMap$1.map(({ index, opacity }) => {
      const darkColorString = toHex$1(
        mix$1(
          inputToRGB(opts.backgroundColor || "#141414"),
          inputToRGB(patterns[index]),
          opacity * 100
        )
      );
      return darkColorString;
    });
  }
  return patterns;
}

const genControlHeight = (token) => {
  const { controlHeight } = token;
  return {
    controlHeightSM: controlHeight * 0.75,
    controlHeightXS: controlHeight * 0.5,
    controlHeightLG: controlHeight * 1.25
  };
};

function genSizeMapToken$1(token) {
  const { sizeUnit, sizeStep } = token;
  return {
    sizeXXL: sizeUnit * (sizeStep + 8),
    // 48
    sizeXL: sizeUnit * (sizeStep + 4),
    // 32
    sizeLG: sizeUnit * (sizeStep + 2),
    // 24
    sizeMD: sizeUnit * (sizeStep + 1),
    // 20
    sizeMS: sizeUnit * sizeStep,
    // 16
    size: sizeUnit * sizeStep,
    // 16
    sizeSM: sizeUnit * (sizeStep - 1),
    // 12
    sizeXS: sizeUnit * (sizeStep - 2),
    // 8
    sizeXXS: sizeUnit * (sizeStep - 3)
    // 4
  };
}

const defaultPresetColors = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
};
const seedToken = {
  // preset color palettes
  ...defaultPresetColors,
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: false,
  // Motion
  motion: true
};

function genColorMapToken(seed, { generateColorPalettes, generateNeutralColorPalettes }) {
  const {
    colorSuccess: colorSuccessBase,
    colorWarning: colorWarningBase,
    colorError: colorErrorBase,
    colorInfo: colorInfoBase,
    colorPrimary: colorPrimaryBase,
    colorBgBase,
    colorTextBase
  } = seed;
  const primaryColors = generateColorPalettes(colorPrimaryBase);
  const successColors = generateColorPalettes(colorSuccessBase);
  const warningColors = generateColorPalettes(colorWarningBase);
  const errorColors = generateColorPalettes(colorErrorBase);
  const infoColors = generateColorPalettes(colorInfoBase);
  const neutralColors = generateNeutralColorPalettes(colorBgBase, colorTextBase);
  const colorLink = seed.colorLink || seed.colorInfo;
  const linkColors = generateColorPalettes(colorLink);
  return {
    ...neutralColors,
    colorPrimaryBg: primaryColors[1],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],
    colorSuccessBg: successColors[1],
    colorSuccessBgHover: successColors[2],
    colorSuccessBorder: successColors[3],
    colorSuccessBorderHover: successColors[4],
    colorSuccessHover: successColors[4],
    colorSuccess: successColors[6],
    colorSuccessActive: successColors[7],
    colorSuccessTextHover: successColors[8],
    colorSuccessText: successColors[9],
    colorSuccessTextActive: successColors[10],
    colorErrorBg: errorColors[1],
    colorErrorBgHover: errorColors[2],
    colorErrorBorder: errorColors[3],
    colorErrorBorderHover: errorColors[4],
    colorErrorHover: errorColors[5],
    colorError: errorColors[6],
    colorErrorActive: errorColors[7],
    colorErrorTextHover: errorColors[8],
    colorErrorText: errorColors[9],
    colorErrorTextActive: errorColors[10],
    colorWarningBg: warningColors[1],
    colorWarningBgHover: warningColors[2],
    colorWarningBorder: warningColors[3],
    colorWarningBorderHover: warningColors[4],
    colorWarningHover: warningColors[4],
    colorWarning: warningColors[6],
    colorWarningActive: warningColors[7],
    colorWarningTextHover: warningColors[8],
    colorWarningText: warningColors[9],
    colorWarningTextActive: warningColors[10],
    colorInfoBg: infoColors[1],
    colorInfoBgHover: infoColors[2],
    colorInfoBorder: infoColors[3],
    colorInfoBorderHover: infoColors[4],
    colorInfoHover: infoColors[4],
    colorInfo: infoColors[6],
    colorInfoActive: infoColors[7],
    colorInfoTextHover: infoColors[8],
    colorInfoText: infoColors[9],
    colorInfoTextActive: infoColors[10],
    colorLinkHover: linkColors[4],
    colorLink: linkColors[6],
    colorLinkActive: linkColors[7],
    colorBgMask: new TinyColor("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  };
}

const genRadius = (radiusBase) => {
  let radiusLG = radiusBase;
  let radiusSM = radiusBase;
  let radiusXS = radiusBase;
  let radiusOuter = radiusBase;
  if (radiusBase < 6 && radiusBase >= 5) {
    radiusLG = radiusBase + 1;
  } else if (radiusBase < 16 && radiusBase >= 6) {
    radiusLG = radiusBase + 2;
  } else if (radiusBase >= 16) {
    radiusLG = 16;
  }
  if (radiusBase < 7 && radiusBase >= 5) {
    radiusSM = 4;
  } else if (radiusBase < 8 && radiusBase >= 7) {
    radiusSM = 5;
  } else if (radiusBase < 14 && radiusBase >= 8) {
    radiusSM = 6;
  } else if (radiusBase < 16 && radiusBase >= 14) {
    radiusSM = 7;
  } else if (radiusBase >= 16) {
    radiusSM = 8;
  }
  if (radiusBase < 6 && radiusBase >= 2) {
    radiusXS = 1;
  } else if (radiusBase >= 6) {
    radiusXS = 2;
  }
  if (radiusBase > 4 && radiusBase < 8) {
    radiusOuter = 4;
  } else if (radiusBase >= 8) {
    radiusOuter = 6;
  }
  return {
    borderRadius: radiusBase,
    borderRadiusXS: radiusXS,
    borderRadiusSM: radiusSM,
    borderRadiusLG: radiusLG,
    borderRadiusOuter: radiusOuter
  };
};

function genCommonMapToken(token) {
  const { motionUnit, motionBase, borderRadius, lineWidth } = token;
  return {
    // motion
    motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
    motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
    motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
    // line
    lineWidthBold: lineWidth + 1,
    // radius
    ...genRadius(borderRadius)
  };
}

const getAlphaColor$2 = (baseColor, alpha) => new TinyColor(baseColor).setAlpha(alpha).toRgbString();
const getSolidColor$1 = (baseColor, brightness) => {
  const instance = new TinyColor(baseColor);
  return instance.darken(brightness).toHexString();
};

const generateColorPalettes$1 = (baseColor) => {
  const colors = generate$1(baseColor);
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[4],
    6: colors[5],
    7: colors[6],
    8: colors[4],
    9: colors[5],
    10: colors[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
};
const generateNeutralColorPalettes$1 = (bgBaseColor, textBaseColor) => {
  const colorBgBase = bgBaseColor || "#fff";
  const colorTextBase = textBaseColor || "#000";
  return {
    colorBgBase,
    colorTextBase,
    colorText: getAlphaColor$2(colorTextBase, 0.88),
    colorTextSecondary: getAlphaColor$2(colorTextBase, 0.65),
    colorTextTertiary: getAlphaColor$2(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor$2(colorTextBase, 0.25),
    colorFill: getAlphaColor$2(colorTextBase, 0.15),
    colorFillSecondary: getAlphaColor$2(colorTextBase, 0.06),
    colorFillTertiary: getAlphaColor$2(colorTextBase, 0.04),
    colorFillQuaternary: getAlphaColor$2(colorTextBase, 0.02),
    colorBgLayout: getSolidColor$1(colorBgBase, 4),
    colorBgContainer: getSolidColor$1(colorBgBase, 0),
    colorBgElevated: getSolidColor$1(colorBgBase, 0),
    colorBgSpotlight: getAlphaColor$2(colorTextBase, 0.85),
    colorBorder: getSolidColor$1(colorBgBase, 15),
    colorBorderSecondary: getSolidColor$1(colorBgBase, 6)
  };
};

function getFontSizes(base) {
  const fontSizes = new Array(10).fill(null).map((_, index) => {
    const i = index - 1;
    const baseSize = base * 2.71828 ** (i / 5);
    const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
    return Math.floor(intSize / 2) * 2;
  });
  fontSizes[1] = base;
  return fontSizes.map((size) => {
    const height = size + 8;
    return {
      size,
      lineHeight: height / size
    };
  });
}

const genFontMapToken = (fontSize) => {
  const fontSizePairs = getFontSizes(fontSize);
  const fontSizes = fontSizePairs.map((pair) => pair.size);
  const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);
  return {
    fontSizeSM: fontSizes[0],
    fontSize: fontSizes[1],
    fontSizeLG: fontSizes[2],
    fontSizeXL: fontSizes[3],
    fontSizeHeading1: fontSizes[6],
    fontSizeHeading2: fontSizes[5],
    fontSizeHeading3: fontSizes[4],
    fontSizeHeading4: fontSizes[3],
    fontSizeHeading5: fontSizes[2],
    lineHeight: lineHeights[1],
    lineHeightLG: lineHeights[2],
    lineHeightSM: lineHeights[0],
    lineHeightHeading1: lineHeights[6],
    lineHeightHeading2: lineHeights[5],
    lineHeightHeading3: lineHeights[4],
    lineHeightHeading4: lineHeights[3],
    lineHeightHeading5: lineHeights[2]
  };
};

function derivative$2(token) {
  const colorPalettes = Object.keys(defaultPresetColors).map((colorKey) => {
    const colors = generate$1(token[colorKey]);
    return new Array(10).fill(1).reduce((prev, _, i) => {
      prev[`${colorKey}-${i + 1}`] = colors[i];
      prev[`${colorKey}${i + 1}`] = colors[i];
      return prev;
    }, {});
  }).reduce((prev, cur) => {
    prev = {
      ...prev,
      ...cur
    };
    return prev;
  }, {});
  return {
    ...token,
    ...colorPalettes,
    // Colors
    ...genColorMapToken(token, {
      generateColorPalettes: generateColorPalettes$1,
      generateNeutralColorPalettes: generateNeutralColorPalettes$1
    }),
    // Font
    ...genFontMapToken(token.fontSize),
    // Size
    ...genSizeMapToken$1(token),
    // Height
    ...genControlHeight(token),
    // Others
    ...genCommonMapToken(token)
  };
}

const defaultTheme = createTheme(derivative$2);
const defaultConfig = {
  token: seedToken,
  hashed: true
};
const DesignTokenContext = React__default.createContext(defaultConfig);

function isStableColor(color) {
  return color >= 0 && color <= 255;
}
function getAlphaColor$1(frontColor, backgroundColor) {
  const { r: fR, g: fG, b: fB, a: originAlpha } = new TinyColor(frontColor).toRgb();
  if (originAlpha < 1) {
    return frontColor;
  }
  const { r: bR, g: bG, b: bB } = new TinyColor(backgroundColor).toRgb();
  for (let fA = 0.01; fA <= 1; fA += 0.01) {
    const r = Math.round((fR - bR * (1 - fA)) / fA);
    const g = Math.round((fG - bG * (1 - fA)) / fA);
    const b = Math.round((fB - bB * (1 - fA)) / fA);
    if (isStableColor(r) && isStableColor(g) && isStableColor(b)) {
      return new TinyColor({ r, g, b, a: Math.round(fA * 100) / 100 }).toRgbString();
    }
  }
  return new TinyColor({ r: fR, g: fG, b: fB, a: 1 }).toRgbString();
}

function formatToken(derivativeToken) {
  const { override, ...restToken } = derivativeToken;
  const overrideTokens = { ...override };
  Object.keys(seedToken).forEach((token) => {
    delete overrideTokens[token];
  });
  const mergedToken = {
    ...restToken,
    ...overrideTokens
  };
  const screenXS = 480;
  const screenSM = 576;
  const screenMD = 768;
  const screenLG = 992;
  const screenXL = 1200;
  const screenXXL = 1600;
  if (mergedToken.motion === false) {
    const fastDuration = "0s";
    mergedToken.motionDurationFast = fastDuration;
    mergedToken.motionDurationMid = fastDuration;
    mergedToken.motionDurationSlow = fastDuration;
  }
  const aliasToken = {
    ...mergedToken,
    // ============== Background ============== //
    colorFillContent: mergedToken.colorFillSecondary,
    colorFillContentHover: mergedToken.colorFill,
    colorFillAlter: mergedToken.colorFillQuaternary,
    colorBgContainerDisabled: mergedToken.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: mergedToken.colorBgContainer,
    colorSplit: getAlphaColor$1(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: mergedToken.colorTextQuaternary,
    colorTextDisabled: mergedToken.colorTextQuaternary,
    colorTextHeading: mergedToken.colorText,
    colorTextLabel: mergedToken.colorTextSecondary,
    colorTextDescription: mergedToken.colorTextTertiary,
    colorTextLightSolid: mergedToken.colorWhite,
    colorHighlight: mergedToken.colorError,
    colorBgTextHover: mergedToken.colorFillSecondary,
    colorBgTextActive: mergedToken.colorFill,
    colorIcon: mergedToken.colorTextTertiary,
    colorIconHover: mergedToken.colorText,
    colorErrorOutline: getAlphaColor$1(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
    colorWarningOutline: getAlphaColor$1(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
    // Font
    fontSizeIcon: mergedToken.fontSizeSM,
    // Line
    lineWidthFocus: mergedToken.lineWidth * 4,
    // Control
    lineWidth: mergedToken.lineWidth,
    controlOutlineWidth: mergedToken.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: mergedToken.controlHeight / 2,
    controlItemBgHover: mergedToken.colorFillTertiary,
    controlItemBgActive: mergedToken.colorPrimaryBg,
    controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
    controlItemBgActiveDisabled: mergedToken.colorFill,
    controlTmpOutline: mergedToken.colorFillQuaternary,
    controlOutline: getAlphaColor$1(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
    lineType: mergedToken.lineType,
    borderRadius: mergedToken.borderRadius,
    borderRadiusXS: mergedToken.borderRadiusXS,
    borderRadiusSM: mergedToken.borderRadiusSM,
    borderRadiusLG: mergedToken.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: mergedToken.sizeXXS,
    paddingXS: mergedToken.sizeXS,
    paddingSM: mergedToken.sizeSM,
    padding: mergedToken.size,
    paddingMD: mergedToken.sizeMD,
    paddingLG: mergedToken.sizeLG,
    paddingXL: mergedToken.sizeXL,
    paddingContentHorizontalLG: mergedToken.sizeLG,
    paddingContentVerticalLG: mergedToken.sizeMS,
    paddingContentHorizontal: mergedToken.sizeMS,
    paddingContentVertical: mergedToken.sizeSM,
    paddingContentHorizontalSM: mergedToken.size,
    paddingContentVerticalSM: mergedToken.sizeXS,
    marginXXS: mergedToken.sizeXXS,
    marginXS: mergedToken.sizeXS,
    marginSM: mergedToken.sizeSM,
    margin: mergedToken.size,
    marginMD: mergedToken.sizeMD,
    marginLG: mergedToken.sizeLG,
    marginXL: mergedToken.sizeXL,
    marginXXL: mergedToken.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS,
    screenXSMin: screenXS,
    screenXSMax: screenSM - 1,
    screenSM,
    screenSMMin: screenSM,
    screenSMMax: screenMD - 1,
    screenMD,
    screenMDMin: screenMD,
    screenMDMax: screenLG - 1,
    screenLG,
    screenLGMin: screenLG,
    screenLGMax: screenXL - 1,
    screenXL,
    screenXLMin: screenXL,
    screenXLMax: screenXXL - 1,
    screenXXL,
    screenXXLMin: screenXXL,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new TinyColor("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new TinyColor("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new TinyColor("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)",
    // Override AliasToken
    ...overrideTokens
  };
  return aliasToken;
}

const getComputedToken = (originToken, overrideToken, theme) => {
  const derivativeToken = theme.getDerivativeToken(originToken);
  const { override, ...components } = overrideToken;
  let mergedDerivativeToken = {
    ...derivativeToken,
    override
  };
  mergedDerivativeToken = formatToken(mergedDerivativeToken);
  if (components) {
    Object.entries(components).forEach(([key, value]) => {
      const { theme: componentTheme, ...componentTokens } = value;
      let mergedComponentToken = componentTokens;
      if (componentTheme) {
        mergedComponentToken = getComputedToken(
          {
            ...mergedDerivativeToken,
            ...componentTokens
          },
          {
            override: componentTokens
          },
          componentTheme
        );
      }
      mergedDerivativeToken[key] = mergedComponentToken;
    });
  }
  return mergedDerivativeToken;
};
function useToken$1() {
  const {
    token: rootDesignToken,
    hashed,
    theme,
    components
  } = React__default.useContext(DesignTokenContext);
  const salt = `${hashed || ""}`;
  const mergedTheme = theme || defaultTheme;
  const [token, hashId] = useCacheToken(
    mergedTheme,
    [seedToken, rootDesignToken],
    {
      salt,
      override: { override: rootDesignToken, ...components },
      getComputedToken,
      // formatToken will not be consumed after 1.15.0 with getComputedToken.
      // But token will break if @/hooks/cssinjs/theme is under 1.15.0 without it
      formatToken
    }
  );
  return [mergedTheme, token, hashed ? hashId : ""];
}

const operationUnit = (token) => ({
  // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
  // And Typography use this to generate link style which should not do this.
  color: token.colorLink,
  textDecoration: "none",
  outline: "none",
  cursor: "pointer",
  transition: `color ${token.motionDurationSlow}`,
  "&:focus, &:hover": {
    color: token.colorLinkHover
  },
  "&:active": {
    color: token.colorLinkActive
  }
});

const roundedArrow = (width, innerRadius, outerRadius, bgColor, boxShadow) => {
  const unitWidth = width / 2;
  const ax = 0;
  const ay = unitWidth;
  const bx = outerRadius * 1 / Math.sqrt(2);
  const by = unitWidth - outerRadius * (1 - 1 / Math.sqrt(2));
  const cx = unitWidth - innerRadius * (1 / Math.sqrt(2));
  const cy = outerRadius * (Math.sqrt(2) - 1) + innerRadius * (1 / Math.sqrt(2));
  const dx = 2 * unitWidth - cx;
  const dy = cy;
  const ex = 2 * unitWidth - bx;
  const ey = by;
  const fx = 2 * unitWidth - ax;
  const fy = ay;
  const shadowWidth = unitWidth * Math.sqrt(2) + outerRadius * (Math.sqrt(2) - 2);
  const polygonOffset = outerRadius * (Math.sqrt(2) - 1);
  return {
    pointerEvents: "none",
    width,
    height: width,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width,
      height: width / 2,
      background: bgColor,
      clipPath: {
        _multi_value_: true,
        value: [
          `polygon(${polygonOffset}px 100%, 50% ${polygonOffset}px, ${2 * unitWidth - polygonOffset}px 100%, ${polygonOffset}px 100%)`,
          `path('M ${ax} ${ay} A ${outerRadius} ${outerRadius} 0 0 0 ${bx} ${by} L ${cx} ${cy} A ${innerRadius} ${innerRadius} 0 0 1 ${dx} ${dy} L ${ex} ${ey} A ${outerRadius} ${outerRadius} 0 0 0 ${fx} ${fy} Z')`
        ]
      },
      content: '""'
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: shadowWidth,
      height: shadowWidth,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: true,
        value: `0 0 ${innerRadius}px 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow,
      zIndex: 0,
      background: "transparent"
    }
  };
};

const textEllipsis = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
};
const resetComponent = (token) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: token.colorText,
  fontSize: token.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: token.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: token.fontFamily
});
const resetIcon = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
});
const clearFix = () => ({
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    display: "table",
    clear: "both",
    content: '""'
  }
});
const genLinkStyle = (token) => ({
  a: {
    color: token.colorLink,
    textDecoration: token.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${token.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: token.colorLinkHover
    },
    "&:active": {
      color: token.colorLinkActive
    },
    [`&:active,
  &:hover`]: {
      textDecoration: token.linkHoverDecoration,
      outline: 0
    },
    "&:focus": {
      textDecoration: token.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: token.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
});
const genCommonStyle = (token, componentPrefixCls) => {
  const { fontFamily, fontSize } = token;
  const rootPrefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
  return {
    [rootPrefixSelector]: {
      fontFamily,
      fontSize,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [rootPrefixSelector]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
};
const genFocusOutline = (token) => ({
  outline: `${token.lineWidthFocus}px solid ${token.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
});
const genFocusStyle = (token) => ({
  "&:focus-visible": {
    ...genFocusOutline(token)
  }
});

const enableStatistic = typeof CSSINJS_STATISTIC !== "undefined";
let recording = true;
function merge(...objs) {
  if (!enableStatistic) {
    return Object.assign({}, ...objs);
  }
  recording = false;
  const ret = {};
  objs.forEach((obj) => {
    const keys = Object.keys(obj);
    keys.forEach((key) => {
      Object.defineProperty(ret, key, {
        configurable: true,
        enumerable: true,
        get: () => obj[key]
      });
    });
  });
  recording = true;
  return ret;
}
const statistic = {};
function noop$1() {
}
function statisticToken(token) {
  let tokenKeys;
  let proxy = token;
  let flush = noop$1;
  if (enableStatistic) {
    tokenKeys = /* @__PURE__ */ new Set();
    proxy = new Proxy(token, {
      get(obj, prop) {
        if (recording) {
          tokenKeys.add(prop);
        }
        return obj[prop];
      }
    });
    flush = (componentName, componentToken) => {
      statistic[componentName] = {
        global: Array.from(tokenKeys),
        component: {
          ...statistic[componentName]?.component,
          ...componentToken
        }
      };
    };
  }
  return { token: proxy, keys: tokenKeys, flush };
}

function genComponentStyleHook(componentName, styleFn, getDefaultToken, options = {}) {
  const cells = Array.isArray(componentName) ? componentName : [componentName, componentName];
  const [component] = cells;
  const concatComponent = cells.join("-");
  return (prefixCls) => {
    const [theme, token, hashId] = useToken$1();
    const { getPrefixCls, csp } = useContext(ConfigContext);
    const rootPrefixCls = getPrefixCls();
    const sharedConfig = {
      theme,
      token,
      hashId,
      nonce: () => csp?.nonce,
      clientOnly: options.clientOnly,
      // ipass customized lib is always at top of styles
      order: options.order || -999
    };
    useStyleRegister(
      { ...sharedConfig, clientOnly: false, path: ["Shared", rootPrefixCls] },
      () => [
        {
          // Link
          "&": genLinkStyle(token)
        }
      ]
    );
    return [
      // @ts-ignore
      useStyleRegister(
        { ...sharedConfig, path: [concatComponent, prefixCls] },
        () => {
          const { token: proxyToken, flush } = statisticToken(token);
          const customComponentToken = { ...token[component] };
          if (options.deprecatedTokens) {
            const { deprecatedTokens } = options;
            deprecatedTokens.forEach(([oldTokenKey, newTokenKey]) => {
              if (customComponentToken?.[oldTokenKey] || customComponentToken?.[newTokenKey]) {
                customComponentToken[newTokenKey] ??= customComponentToken?.[oldTokenKey];
              }
            });
          }
          const defaultComponentToken = typeof getDefaultToken === "function" ? getDefaultToken(merge(proxyToken, customComponentToken ?? {})) : getDefaultToken;
          const mergedComponentToken = { ...defaultComponentToken, ...customComponentToken };
          const componentCls = `.${prefixCls}`;
          const mergedToken = merge(
            proxyToken,
            {
              componentCls,
              prefixCls,
              ipassCls: `.${rootPrefixCls}`
            },
            mergedComponentToken
          );
          const styleInterpolation = styleFn(mergedToken, {
            hashId,
            prefixCls,
            rootPrefixCls,
            overrideComponentToken: customComponentToken
          });
          flush(component, mergedComponentToken);
          return [
            options.resetStyle === false ? null : genCommonStyle(token, prefixCls),
            styleInterpolation
          ];
        }
      ),
      hashId
    ];
  };
}
const genSubStyleComponent = (componentName, styleFn, getDefaultToken, options) => {
  const useStyle = genComponentStyleHook(componentName, styleFn, getDefaultToken, {
    resetStyle: false,
    // Sub Style should default after root one
    order: -998,
    ...options
  });
  const StyledComponent = ({
    prefixCls
  }) => {
    useStyle(prefixCls);
    return null;
  };
  return StyledComponent;
};

function genPresetColor(token, genCss) {
  return PresetColors.reduce((prev, colorKey) => {
    const lightColor = token[`${colorKey}1`];
    const lightBorderColor = token[`${colorKey}3`];
    const darkColor = token[`${colorKey}6`];
    const textColor = token[`${colorKey}7`];
    return {
      ...prev,
      ...genCss(colorKey, { lightColor, lightBorderColor, darkColor, textColor })
    };
  }, {});
}

const genSharedAffixStyle = (token) => {
  const { componentCls } = token;
  return {
    [componentCls]: {
      position: "fixed",
      zIndex: token.zIndexPopup
    }
  };
};
const useStyle$z = genComponentStyleHook("Affix", (token) => {
  const affixToken = merge(token, {
    zIndexPopup: token.zIndexBase + 10
  });
  return [genSharedAffixStyle(affixToken)];
});

function getTargetRect(target) {
  return target !== window ? target.getBoundingClientRect() : { top: 0, bottom: window.innerHeight };
}
function getFixedTop(placeholderRect, targetRect, offsetTop) {
  if (offsetTop !== void 0 && targetRect.top > placeholderRect.top - offsetTop) {
    return offsetTop + targetRect.top;
  }
  return void 0;
}
function getFixedBottom(placeholderRect, targetRect, offsetBottom) {
  if (offsetBottom !== void 0 && targetRect.bottom < placeholderRect.bottom + offsetBottom) {
    const targetBottomOffset = window.innerHeight - targetRect.bottom;
    return offsetBottom + targetBottomOffset;
  }
  return void 0;
}

const TRIGGER_EVENTS = [
  "resize",
  "scroll",
  "touchstart",
  "touchmove",
  "touchend",
  "pageshow",
  "load"
];
function getDefaultTarget() {
  return typeof window !== "undefined" ? window : null;
}
class InternalAffix extends React__default.Component {
  constructor() {
    super(...arguments);
    this.state = {
      status: 0,
      lastAffix: false,
      prevTarget: null
    };
    this.placeholderNodeRef = createRef();
    this.fixedNodeRef = createRef();
    this.timer = null;
    this.addListeners = () => {
      const targetFunc = this.getTargetFunc();
      const target = targetFunc?.();
      const { prevTarget } = this.state;
      if (prevTarget !== target) {
        TRIGGER_EVENTS.forEach((eventName) => {
          prevTarget?.removeEventListener(eventName, this.lazyUpdatePosition);
          target?.addEventListener(eventName, this.lazyUpdatePosition);
        });
        this.updatePosition();
        this.setState({ prevTarget: target });
      }
    };
    this.removeListeners = () => {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      const { prevTarget } = this.state;
      const targetFunc = this.getTargetFunc();
      const newTarget = targetFunc?.();
      TRIGGER_EVENTS.forEach((eventName) => {
        newTarget?.removeEventListener(eventName, this.lazyUpdatePosition);
        prevTarget?.removeEventListener(eventName, this.lazyUpdatePosition);
      });
      this.updatePosition.cancel();
      this.lazyUpdatePosition.cancel();
    };
    this.getOffsetTop = () => {
      const { offsetBottom, offsetTop } = this.props;
      return offsetBottom === void 0 && offsetTop === void 0 ? 0 : offsetTop;
    };
    this.getOffsetBottom = () => this.props.offsetBottom;
    this.measure = () => {
      const { status, lastAffix } = this.state;
      const { onChange } = this.props;
      const targetFunc = this.getTargetFunc();
      if (status !== 1 || !this.fixedNodeRef.current || !this.placeholderNodeRef.current || !targetFunc) {
        return;
      }
      const offsetTop = this.getOffsetTop();
      const offsetBottom = this.getOffsetBottom();
      const targetNode = targetFunc();
      if (targetNode) {
        const newState = {
          status: 0
          /* None */
        };
        const placeholderRect = getTargetRect(this.placeholderNodeRef.current);
        if (placeholderRect.top === 0 && placeholderRect.left === 0 && placeholderRect.width === 0 && placeholderRect.height === 0) {
          return;
        }
        const targetRect = getTargetRect(targetNode);
        const fixedTop = getFixedTop(placeholderRect, targetRect, offsetTop);
        const fixedBottom = getFixedBottom(placeholderRect, targetRect, offsetBottom);
        if (fixedTop !== void 0) {
          newState.affixStyle = {
            position: "fixed",
            top: fixedTop,
            width: placeholderRect.width,
            height: placeholderRect.height
          };
          newState.placeholderStyle = {
            width: placeholderRect.width,
            height: placeholderRect.height
          };
        } else if (fixedBottom !== void 0) {
          newState.affixStyle = {
            position: "fixed",
            bottom: fixedBottom,
            width: placeholderRect.width,
            height: placeholderRect.height
          };
          newState.placeholderStyle = {
            width: placeholderRect.width,
            height: placeholderRect.height
          };
        }
        newState.lastAffix = !!newState.affixStyle;
        if (onChange && lastAffix !== newState.lastAffix) {
          onChange(newState.lastAffix);
        }
        this.setState(newState);
      }
    };
    this.prepareMeasure = () => {
      this.setState({
        status: 1,
        affixStyle: void 0,
        placeholderStyle: void 0
      });
    };
    this.updatePosition = throttleByAnimationFrame(() => {
      this.prepareMeasure();
    });
    this.lazyUpdatePosition = throttleByAnimationFrame(() => {
      const targetFunc = this.getTargetFunc();
      const { affixStyle } = this.state;
      if (targetFunc && affixStyle) {
        const offsetTop = this.getOffsetTop();
        const offsetBottom = this.getOffsetBottom();
        const targetNode = targetFunc();
        if (targetNode && this.placeholderNodeRef.current) {
          const targetRect = getTargetRect(targetNode);
          const placeholderRect = getTargetRect(this.placeholderNodeRef.current);
          const fixedTop = getFixedTop(placeholderRect, targetRect, offsetTop);
          const fixedBottom = getFixedBottom(placeholderRect, targetRect, offsetBottom);
          if (fixedTop !== void 0 && affixStyle.top === fixedTop || fixedBottom !== void 0 && affixStyle.bottom === fixedBottom) {
            return;
          }
        }
      }
      this.prepareMeasure();
    });
  }
  static {
    this.contextType = ConfigContext;
  }
  getTargetFunc() {
    const { getTargetContainer } = this.context;
    const { target } = this.props;
    if (target !== void 0) {
      return target;
    }
    return getTargetContainer ?? getDefaultTarget;
  }
  // Event handler
  componentDidMount() {
    this.timer = setTimeout(this.addListeners);
  }
  componentDidUpdate(prevProps) {
    this.addListeners();
    if (prevProps.offsetTop !== this.props.offsetTop || prevProps.offsetBottom !== this.props.offsetBottom) {
      this.updatePosition();
    }
    this.measure();
  }
  componentWillUnmount() {
    this.removeListeners();
  }
  // =================== Render ===================
  render() {
    const { affixStyle, placeholderStyle } = this.state;
    const { affixPrefixCls, rootClassName, children } = this.props;
    const className = classNames(affixStyle && rootClassName, {
      [affixPrefixCls]: !!affixStyle
    });
    let props = omit(this.props, [
      "prefixCls",
      "offsetTop",
      "offsetBottom",
      "target",
      "onChange",
      "affixPrefixCls",
      "rootClassName"
    ]);
    return /* @__PURE__ */ jsx(ResizeObserver$1, { onResize: this.updatePosition, children: /* @__PURE__ */ jsxs("div", { ...props, ref: this.placeholderNodeRef, children: [
      affixStyle && /* @__PURE__ */ jsx("div", { style: placeholderStyle, "aria-hidden": "true" }),
      /* @__PURE__ */ jsx("div", { className, ref: this.fixedNodeRef, style: affixStyle, children: /* @__PURE__ */ jsx(ResizeObserver$1, { onResize: this.updatePosition, children }) })
    ] }) });
  }
}
const Affix = forwardRef((props, ref) => {
  const { prefixCls: customizePrefixCls, rootClassName } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const affixPrefixCls = getPrefixCls("affix", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$z(affixPrefixCls);
  const AffixProps = {
    ...props,
    affixPrefixCls,
    rootClassName: classNames(rootClassName, hashId)
  };
  return wrapSSR(/* @__PURE__ */ jsx(InternalAffix, { ...AffixProps, ref }));
});

const inverseColors = PresetColors.map((color) => `${color}-inverse`);
function isPresetColor(color, includeInverse = true) {
  if (includeInverse) {
    return [...inverseColors, ...PresetColors].includes(color);
  }
  return PresetColors.includes(color);
}

const { isValidElement } = React;
function isFragment(child) {
  return child && isValidElement(child) && child.type === React.Fragment;
}
function replaceElement(element, replacement, props) {
  if (!isValidElement(element)) {
    return replacement;
  }
  return React.cloneElement(
    element,
    typeof props === "function" ? props(element.props || {}) : props
  );
}
function cloneElement(element, props) {
  return replaceElement(element, element, props);
}

function noop() {
}
React.createContext({});
const devUseWarning = () => {
  const noopWarning = () => {
  };
  noopWarning.deprecated = noop;
  return noopWarning;
};

const ValidateMessagesContext = createContext(void 0);

const locale$1 = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};

const locale = {
  lang: {
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"],
    ...CalendarLocale
  },
  timePickerLocale: {
    ...locale$1
  }
};

const typeTemplate = "${label} is not a valid ${type}";
const localeValues = {
  locale: "en",
  Pagination: Pagination$1,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh"
  },
  ColorPicker: {
    presetEmpty: "Empty"
  }
};

let runtimeLocale = {
  ...localeValues.Modal
};
let localeList = [];
const generateLocale = () => localeList.reduce(
  (merged, locale) => ({ ...merged, ...locale }),
  localeValues.Modal
);
function changeConfirmLocale(newLocale) {
  if (newLocale) {
    const cloneLocale = { ...newLocale };
    localeList.push(cloneLocale);
    runtimeLocale = generateLocale();
    return () => {
      localeList = localeList.filter((locale) => locale !== cloneLocale);
      runtimeLocale = generateLocale();
    };
  }
  runtimeLocale = {
    ...localeValues.Modal
  };
}
function getConfirmLocale() {
  return runtimeLocale;
}

const LocaleContext = createContext(void 0);

const useLocale = (componentName, defaultLocale) => {
  const fullLocale = React.useContext(LocaleContext);
  const getLocale = React.useMemo(() => {
    const locale = defaultLocale || localeValues[componentName];
    const localeFromContext = fullLocale?.[componentName] ?? {};
    return {
      ...typeof locale === "function" ? locale() : locale,
      ...localeFromContext || {}
    };
  }, [componentName, defaultLocale, fullLocale]);
  const getLocaleCode = React.useMemo(() => {
    const localeCode = fullLocale?.locale;
    if (fullLocale?.exist && !localeCode) {
      return localeValues.locale;
    }
    return localeCode;
  }, [fullLocale]);
  return [getLocale, getLocaleCode];
};

const MARK = "internalMark";
const LocaleProvider = (props) => {
  const { locale = {}, children, _IPASS_MARK__ } = props;
  React.useEffect(() => {
    const clearLocale = changeConfirmLocale(locale && locale.Modal);
    return clearLocale;
  }, [locale]);
  const getMemoizedContextValue = React.useMemo(
    () => ({ ...locale, exist: true }),
    [locale]
  );
  return /* @__PURE__ */ jsx(LocaleContext.Provider, { value: getMemoizedContextValue, children });
};

const hueStep = 2;
const saturationStep = 0.16;
const saturationStep2 = 0.05;
const brightnessStep1 = 0.05;
const brightnessStep2 = 0.15;
const lightColorCount = 5;
const darkColorCount = 4;
const darkColorMap = [
  { index: 7, opacity: 0.15 },
  { index: 6, opacity: 0.25 },
  { index: 5, opacity: 0.3 },
  { index: 5, opacity: 0.45 },
  { index: 5, opacity: 0.65 },
  { index: 5, opacity: 0.85 },
  { index: 4, opacity: 0.9 },
  { index: 3, opacity: 0.95 },
  { index: 2, opacity: 0.97 },
  { index: 1, opacity: 0.98 }
];
function toHsv({ r, g, b }) {
  const hsv = rgbToHsv(r, g, b);
  return { h: hsv.h * 360, s: hsv.s, v: hsv.v };
}
function toHex({ r, g, b }) {
  return `#${rgbToHex(r, g, b, false)}`;
}
function mix(rgb1, rgb2, amount) {
  const p = amount / 100;
  const rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}
function getHue(hsv, i, light) {
  let hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  let saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}
function getValue(hsv, i, light) {
  let value;
  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}
function generate(color, opts = {}) {
  const patterns = [];
  const pColor = inputToRGB(color);
  for (let i = lightColorCount; i > 0; i -= 1) {
    const hsv = toHsv(pColor);
    const colorString = toHex(
      inputToRGB({
        h: getHue(hsv, i, true),
        s: getSaturation(hsv, i, true),
        v: getValue(hsv, i, true)
      })
    );
    patterns.push(colorString);
  }
  patterns.push(toHex(pColor));
  for (let i = 1; i <= darkColorCount; i += 1) {
    const hsv = toHsv(pColor);
    const colorString = toHex(
      inputToRGB({
        h: getHue(hsv, i),
        s: getSaturation(hsv, i),
        v: getValue(hsv, i)
      })
    );
    patterns.push(colorString);
  }
  if (opts.theme === "dark") {
    return darkColorMap.map(({ index, opacity }) => {
      const darkColorString = toHex(
        mix(
          inputToRGB(opts.backgroundColor || "#141414"),
          inputToRGB(patterns[index]),
          opacity * 100
        )
      );
      return darkColorString;
    });
  }
  return patterns;
}

const dynamicStyleMark = `-ipass-${Date.now()}-${Math.random()}`;
function getStyle$2(globalPrefixCls, theme) {
  const variables = {};
  const formatColor = (color, updater) => {
    let clone = color.clone();
    clone = updater?.(clone) || clone;
    return clone.toRgbString();
  };
  const fillColor = (colorVal, type) => {
    const baseColor = new TinyColor(colorVal);
    const colorPalettes = generate(baseColor.toRgbString());
    variables[`${type}-color`] = formatColor(baseColor);
    variables[`${type}-color-disabled`] = colorPalettes[1];
    variables[`${type}-color-hover`] = colorPalettes[4];
    variables[`${type}-color-active`] = colorPalettes[6];
    variables[`${type}-color-outline`] = baseColor.clone().setAlpha(0.2).toRgbString();
    variables[`${type}-color-deprecated-bg`] = colorPalettes[0];
    variables[`${type}-color-deprecated-border`] = colorPalettes[2];
  };
  if (theme.primaryColor) {
    fillColor(theme.primaryColor, "primary");
    const primaryColor = new TinyColor(theme.primaryColor);
    const primaryColors = generate(primaryColor.toRgbString());
    primaryColors.forEach((color, index) => {
      variables[`primary-${index + 1}`] = color;
    });
    variables["primary-color-deprecated-l-35"] = formatColor(primaryColor, (c) => c.lighten(35));
    variables["primary-color-deprecated-l-20"] = formatColor(primaryColor, (c) => c.lighten(20));
    variables["primary-color-deprecated-t-20"] = formatColor(primaryColor, (c) => c.tint(20));
    variables["primary-color-deprecated-t-50"] = formatColor(primaryColor, (c) => c.tint(50));
    variables["primary-color-deprecated-f-12"] = formatColor(
      primaryColor,
      (c) => c.setAlpha(c.getAlpha() * 0.12)
    );
    const primaryActiveColor = new TinyColor(primaryColors[0]);
    variables["primary-color-active-deprecated-f-30"] = formatColor(
      primaryActiveColor,
      (c) => c.setAlpha(c.getAlpha() * 0.3)
    );
    variables["primary-color-active-deprecated-d-02"] = formatColor(
      primaryActiveColor,
      (c) => c.darken(2)
    );
  }
  if (theme.successColor) {
    fillColor(theme.successColor, "success");
  }
  if (theme.warningColor) {
    fillColor(theme.warningColor, "warning");
  }
  if (theme.errorColor) {
    fillColor(theme.errorColor, "error");
  }
  if (theme.infoColor) {
    fillColor(theme.infoColor, "info");
  }
  const cssList = Object.keys(variables).map(
    (key) => `--${globalPrefixCls}-${key}: ${variables[key]};`
  );
  return `
  :root {
    ${cssList.join("\n")}
  }
  `.trim();
}
function registerTheme(globalPrefixCls, theme) {
  const style = getStyle$2(globalPrefixCls, theme);
  if (canUseDom()) {
    updateCSS(style, `${dynamicStyleMark}-dynamic-theme`);
  }
}

const DisabledContext = React.createContext(false);
const DisabledContextProvider = ({ children, disabled }) => {
  const originDisabled = React.useContext(DisabledContext);
  return /* @__PURE__ */ jsx(DisabledContext.Provider, { value: disabled ?? originDisabled, children });
};

const SizeContext = React.createContext("medium");
const SizeContextProvider = ({ children, size }) => {
  const originSize = React.useContext(SizeContext);
  return /* @__PURE__ */ jsx(SizeContext.Provider, { value: size || originSize, children });
};

function useConfig() {
  const componentDisabled = useContext(DisabledContext);
  const componentSize = useContext(SizeContext);
  return {
    componentDisabled,
    componentSize
  };
}

function useTheme(theme, parentTheme) {
  const themeConfig = theme || {};
  const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? defaultConfig : parentTheme;
  return useMemo(
    () => {
      if (!theme) {
        return parentTheme;
      }
      const mergedComponents = {
        ...parentThemeConfig.components
      };
      Object.keys(theme.components || {}).forEach((componentName) => {
        mergedComponents[componentName] = {
          ...mergedComponents[componentName],
          ...theme.components[componentName]
        };
      });
      return {
        ...parentThemeConfig,
        ...themeConfig,
        token: {
          ...parentThemeConfig.token,
          ...themeConfig.token
        },
        components: mergedComponents
      };
    },
    [themeConfig, parentThemeConfig],
    (prev, next) => prev.some((prevTheme, index) => {
      const nextTheme = next[index];
      return !isEqual(prevTheme, nextTheme, true);
    })
  );
}

function MotionWrapper(props) {
  const { children } = props;
  const [, token] = useToken$1();
  const { motion } = token;
  const needWrapMotionProviderRef = React.useRef(false);
  needWrapMotionProviderRef.current = needWrapMotionProviderRef.current || motion === false;
  if (needWrapMotionProviderRef.current) {
    return /* @__PURE__ */ jsx(Provider, { motion, children });
  }
  return children;
}

React.memo(({ dropdownMatchSelectWidth }) => {
  const warning = devUseWarning();
  warning.deprecated(
    dropdownMatchSelectWidth === void 0,
    "dropdownMatchSelectWidth",
    "popupMatchSelectWidth"
  );
  return null;
});
const PropWarning = () => null;

const PASSED_PROPS = [
  "getTargetContainer",
  "getPopupContainer",
  "renderEmpty",
  "pageHeader",
  "input",
  "pagination",
  "form",
  "select"
];
const defaultPrefixCls = "ipass";
let globalPrefixCls;
let globalTheme;
function getGlobalPrefixCls() {
  return globalPrefixCls || defaultPrefixCls;
}
function isLegacyTheme(theme) {
  return Object.keys(theme).some((key) => key.endsWith("Color"));
}
const setGlobalConfig = ({
  prefixCls,
  theme
}) => {
  if (prefixCls !== void 0) {
    globalPrefixCls = prefixCls;
  }
  if (theme) {
    if (isLegacyTheme(theme)) {
      registerTheme(getGlobalPrefixCls(), theme);
    } else {
      globalTheme = theme;
    }
  }
};
const globalConfig = () => ({
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    return suffixCls ? `${getGlobalPrefixCls()}-${suffixCls}` : getGlobalPrefixCls();
  },
  getRootPrefixCls: () => {
    if (globalPrefixCls) {
      return globalPrefixCls;
    }
    return getGlobalPrefixCls();
  },
  getTheme: () => globalTheme
});
const ProviderChildren = (props) => {
  const {
    children,
    csp: customCsp,
    autoInsertSpaceInButton,
    alert,
    anchor,
    form,
    locale,
    componentSize,
    space,
    virtual,
    dropdownMatchSelectWidth,
    popupMatchSelectWidth,
    popupOverflow,
    legacyLocale,
    parentContext,
    theme,
    componentDisabled,
    segmented,
    statistic,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    menu,
    pagination,
    input,
    empty,
    radio,
    rate,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    wave
    // warning: warningConfig,
  } = props;
  const getPrefixCls = React.useCallback(
    (suffixCls, customizePrefixCls) => {
      const { prefixCls } = props;
      if (customizePrefixCls) {
        return customizePrefixCls;
      }
      const mergedPrefixCls = prefixCls || parentContext.getPrefixCls("");
      return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
    },
    [parentContext.getPrefixCls, props.prefixCls]
  );
  const csp = customCsp || parentContext.csp;
  const mergedTheme = useTheme(theme, parentContext.theme);
  const baseConfig = {
    csp,
    autoInsertSpaceInButton,
    alert,
    anchor,
    locale: locale || legacyLocale,
    space,
    virtual,
    popupMatchSelectWidth: popupMatchSelectWidth ?? dropdownMatchSelectWidth,
    popupOverflow,
    getPrefixCls,
    theme: mergedTheme,
    segmented,
    statistic,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    input,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    menu,
    pagination,
    empty,
    radio,
    rate,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    wave
    // warning: warningConfig,
  };
  const config = {
    ...parentContext
  };
  Object.keys(baseConfig).forEach((key) => {
    if (baseConfig[key] !== void 0) {
      config[key] = baseConfig[key];
    }
  });
  PASSED_PROPS.forEach((propName) => {
    const propValue = props[propName];
    if (propValue) {
      config[propName] = propValue;
    }
  });
  const memoedConfig = useMemo(
    () => config,
    config,
    (prevConfig, currentConfig) => {
      const prevKeys = Object.keys(prevConfig);
      const currentKeys = Object.keys(currentConfig);
      return prevKeys.length !== currentKeys.length || prevKeys.some((key) => prevConfig[key] !== currentConfig[key]);
    }
  );
  let childNode = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PropWarning, { dropdownMatchSelectWidth }),
    children
  ] });
  const validateMessages = React.useMemo(
    () => merge$1(
      localeValues.Form?.defaultValidateMessages || {},
      memoedConfig.locale?.Form?.defaultValidateMessages || {},
      memoedConfig.form?.validateMessages || {},
      form?.validateMessages || {}
    ),
    [memoedConfig, form?.validateMessages]
  );
  if (Object.keys(validateMessages).length > 0) {
    childNode = /* @__PURE__ */ jsx(ValidateMessagesContext.Provider, { value: validateMessages, children: childNode });
  }
  if (locale) {
    childNode = /* @__PURE__ */ jsx(LocaleProvider, { locale, _IPASS_MARK__: MARK, children: childNode });
  }
  if (componentSize) {
    childNode = /* @__PURE__ */ jsx(SizeContextProvider, { size: componentSize, children: childNode });
  }
  childNode = /* @__PURE__ */ jsx(MotionWrapper, { children: childNode });
  const memoTheme = React.useMemo(() => {
    const { algorithm, token, components, ...rest } = mergedTheme || {};
    const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? createTheme(algorithm) : defaultTheme;
    const parsedComponents = {};
    Object.entries(components || {}).forEach(([componentName, componentToken]) => {
      const parsedToken = {
        ...componentToken
      };
      if ("algorithm" in parsedToken) {
        if (parsedToken.algorithm === true) {
          parsedToken.theme = themeObj;
        } else if (Array.isArray(parsedToken.algorithm) || typeof parsedToken.algorithm === "function") {
          parsedToken.theme = createTheme(parsedToken.algorithm);
        }
        delete parsedToken.algorithm;
      }
      parsedComponents[componentName] = parsedToken;
    });
    return {
      ...rest,
      theme: themeObj,
      token: {
        ...seedToken,
        ...token
      },
      components: parsedComponents
    };
  }, [mergedTheme]);
  if (theme) {
    childNode = /* @__PURE__ */ jsx(DesignTokenContext.Provider, { value: memoTheme, children: childNode });
  }
  if (componentDisabled !== void 0) {
    childNode = /* @__PURE__ */ jsx(DisabledContextProvider, { disabled: componentDisabled, children: childNode });
  }
  return /* @__PURE__ */ jsx(ConfigContext.Provider, { value: memoedConfig, children: childNode });
};
const ConfigProvider = (props) => {
  const context = React.useContext(ConfigContext);
  const locale = React.useContext(LocaleContext);
  return /* @__PURE__ */ jsx(ProviderChildren, { parentContext: context, legacyLocale: locale, ...props });
};
ConfigProvider.ConfigContext = ConfigContext;
ConfigProvider.SizeContext = SizeContext;
ConfigProvider.config = setGlobalConfig;
ConfigProvider.useConfig = useConfig;
Object.defineProperty(ConfigProvider, "SizeContext", {
  get: () => {
    return SizeContext;
  }
});

const statusProcessing = new Keyframes("statusProcessing", {
  "0%": { transform: "scale(0.8)", opacity: 0.5 },
  "100%": { transform: "scale(2.4)", opacity: 0 }
});
const zoomBadgeIn = new Keyframes("zoomBadgeIn", {
  "0%": { transform: "scale(0) translate(50%, -50%)", opacity: 0 },
  "100%": { transform: "scale(1) translate(50%, -50%)" }
});
const zoomBadgeOut = new Keyframes("zoomBadgeOut", {
  "0%": { transform: "scale(1) translate(50%, -50%)" },
  "100%": { transform: "scale(0) translate(50%, -50%)", opacity: 0 }
});
const noWrapperZoomBadgeIn = new Keyframes("noWrapperZoomBadgeIn", {
  "0%": { transform: "scale(0)", opacity: 0 },
  "100%": { transform: "scale(1)" }
});
const noWrapperZoomBadgeOut = new Keyframes("noWrapperZoomBadgeOut", {
  "0%": { transform: "scale(1)" },
  "100%": { transform: "scale(0)", opacity: 0 }
});
const badgeLoadingCircle = new Keyframes("badgeLoadingCircle", {
  "0%": { transformOrigin: "50%" },
  "100%": {
    transform: "translate(50%, -50%) rotate(360deg)",
    transformOrigin: "50%"
  }
});
const genSharedBadgeStyle = (token) => {
  const {
    componentCls,
    iconCls,
    ipassCls,
    badgeShadowSize,
    motionDurationSlow,
    textFontSize,
    textFontSizeSM,
    statusSize,
    dotSize,
    textFontWeight,
    indicatorHeight,
    indicatorHeightSM,
    marginXS
  } = token;
  const numberPrefixCls = `${ipassCls}-scroll-number`;
  const colorPreset = genPresetColor(token, (colorKey, { darkColor }) => ({
    [`&${componentCls} ${componentCls}-color-${colorKey}`]: {
      background: darkColor,
      [`&:not(${componentCls}-count)`]: {
        color: darkColor
      }
    }
  }));
  return {
    [componentCls]: {
      ...resetComponent(token),
      position: "relative",
      display: "inline-block",
      width: "fit-content",
      lineHeight: 1,
      [`${componentCls}-count`]: {
        zIndex: token.indicatorZIndex,
        minWidth: indicatorHeight,
        height: indicatorHeight,
        color: token.badgeTextColor,
        fontWeight: textFontWeight,
        fontSize: textFontSize,
        lineHeight: `${indicatorHeight}px`,
        whiteSpace: "nowrap",
        textAlign: "center",
        background: token.badgeColor,
        borderRadius: indicatorHeight / 2,
        boxShadow: `0 0 0 ${badgeShadowSize}px ${token.badgeShadowColor}`,
        transition: `background ${token.motionDurationMid}`,
        a: {
          color: token.badgeTextColor
        },
        "a:hover": {
          color: token.badgeTextColor
        },
        "a:hover &": {
          background: token.badgeColorHover
        }
      },
      [`${componentCls}-count-sm`]: {
        minWidth: indicatorHeightSM,
        height: indicatorHeightSM,
        fontSize: textFontSizeSM,
        lineHeight: `${indicatorHeightSM}px`,
        borderRadius: indicatorHeightSM / 2
      },
      [`${componentCls}-multiple-words`]: {
        padding: `0 ${token.paddingXS}px`,
        bdi: {
          unicodeBidi: "plaintext"
        }
      },
      [`${componentCls}-dot`]: {
        zIndex: token.indicatorZIndex,
        width: dotSize,
        minWidth: dotSize,
        height: dotSize,
        background: token.badgeColor,
        borderRadius: "100%",
        boxShadow: `0 0 0 ${badgeShadowSize}px ${token.badgeShadowColor}`
      },
      [`${componentCls}-dot${numberPrefixCls}`]: {
        transition: `background ${motionDurationSlow}`
      },
      [`${componentCls}-count, ${componentCls}-dot, ${numberPrefixCls}-custom-component`]: {
        position: "absolute",
        top: 0,
        insetInlineEnd: 0,
        transform: "translate(50%, -50%)",
        transformOrigin: "100% 0%",
        [`&${iconCls}-spin`]: {
          animationName: badgeLoadingCircle,
          animationDuration: "1s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear"
        }
      },
      [`&${componentCls}-status`]: {
        lineHeight: "inherit",
        verticalAlign: "baseline",
        [`${componentCls}-status-dot`]: {
          position: "relative",
          top: -1,
          // Magic number, but seems better experience
          display: "inline-block",
          width: statusSize,
          height: statusSize,
          verticalAlign: "middle",
          borderRadius: "50%"
        },
        [`${componentCls}-status-success`]: {
          backgroundColor: token.colorSuccess
        },
        [`${componentCls}-status-processing`]: {
          overflow: "visible",
          color: token.colorPrimary,
          backgroundColor: token.colorPrimary,
          "&::after": {
            position: "absolute",
            top: 0,
            insetInlineStart: 0,
            width: "100%",
            height: "100%",
            borderWidth: badgeShadowSize,
            borderStyle: "solid",
            borderColor: "inherit",
            borderRadius: "50%",
            animationName: statusProcessing,
            animationDuration: token.badgeProcessingDuration,
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
            content: '""'
          }
        },
        [`${componentCls}-status-default`]: {
          backgroundColor: token.colorTextPlaceholder
        },
        [`${componentCls}-status-error`]: {
          backgroundColor: token.colorError
        },
        [`${componentCls}-status-warning`]: {
          backgroundColor: token.colorWarning
        },
        [`${componentCls}-status-text`]: {
          marginInlineStart: marginXS,
          color: token.colorText,
          fontSize: token.fontSize
        }
      },
      ...colorPreset,
      [`${componentCls}-zoom-appear, ${componentCls}-zoom-enter`]: {
        animationName: zoomBadgeIn,
        animationDuration: token.motionDurationSlow,
        animationTimingFunction: token.motionEaseOutBack,
        animationFillMode: "both"
      },
      [`${componentCls}-zoom-leave`]: {
        animationName: zoomBadgeOut,
        animationDuration: token.motionDurationSlow,
        animationTimingFunction: token.motionEaseOutBack,
        animationFillMode: "both"
      },
      [`&${componentCls}-not-a-wrapper`]: {
        [`${componentCls}-zoom-appear, ${componentCls}-zoom-enter`]: {
          animationName: noWrapperZoomBadgeIn,
          animationDuration: token.motionDurationSlow,
          animationTimingFunction: token.motionEaseOutBack
        },
        [`${componentCls}-zoom-leave`]: {
          animationName: noWrapperZoomBadgeOut,
          animationDuration: token.motionDurationSlow,
          animationTimingFunction: token.motionEaseOutBack
        },
        [`&:not(${componentCls}-status)`]: {
          verticalAlign: "middle"
        },
        [`${numberPrefixCls}-custom-component, ${componentCls}-count`]: {
          transform: "none"
        },
        [`${numberPrefixCls}-custom-component, ${numberPrefixCls}`]: {
          position: "relative",
          top: "auto",
          display: "block",
          transformOrigin: "50% 50%"
        }
      },
      [`${numberPrefixCls}`]: {
        overflow: "hidden",
        [`${numberPrefixCls}-only`]: {
          position: "relative",
          display: "inline-block",
          height: indicatorHeight,
          transition: `all ${token.motionDurationSlow} ${token.motionEaseOutBack}`,
          WebkitTransformStyle: "preserve-3d",
          WebkitBackfaceVisibility: "hidden",
          [`> p${numberPrefixCls}-only-unit`]: {
            height: indicatorHeight,
            margin: 0,
            WebkitTransformStyle: "preserve-3d",
            WebkitBackfaceVisibility: "hidden"
          }
        },
        [`${numberPrefixCls}-symbol`]: { verticalAlign: "top" }
      },
      // ====================== RTL =======================
      "&-rtl": {
        direction: "rtl",
        [`${componentCls}-count, ${componentCls}-dot, ${numberPrefixCls}-custom-component`]: {
          transform: "translate(-50%, -50%)"
        }
      }
    }
  };
};
const prepareToken$3 = (token) => {
  const { fontSize, lineHeight, lineWidth, marginXS, colorBorderBg } = token;
  const badgeFontHeight = Math.round(fontSize * lineHeight);
  const badgeShadowSize = lineWidth;
  const badgeTextColor = token.colorBgContainer;
  const badgeColor = token.colorError;
  const badgeColorHover = token.colorErrorHover;
  const badgeToken = merge(token, {
    badgeFontHeight,
    badgeShadowSize,
    badgeTextColor,
    badgeColor,
    badgeColorHover,
    badgeShadowColor: colorBorderBg,
    badgeProcessingDuration: "1.2s",
    badgeRibbonOffset: marginXS,
    // Follow token just by Design. Not related with token
    badgeRibbonCornerTransform: "scaleY(0.75)",
    badgeRibbonCornerFilter: `brightness(75%)`
  });
  return badgeToken;
};
const prepareComponentToken$2 = (token) => {
  const { fontSize, lineHeight, fontSizeSM, lineWidth } = token;
  return {
    indicatorZIndex: "auto",
    indicatorHeight: Math.round(fontSize * lineHeight) - 2 * lineWidth,
    indicatorHeightSM: fontSize,
    dotSize: fontSizeSM / 2,
    textFontSize: fontSizeSM,
    textFontSizeSM: fontSizeSM,
    textFontWeight: "normal",
    statusSize: fontSizeSM / 2
  };
};
const useStyle$y = genComponentStyleHook(
  "Badge",
  (token) => {
    const badgeToken = prepareToken$3(token);
    return [genSharedBadgeStyle(badgeToken)];
  },
  prepareComponentToken$2
);

const genRibbonStyle = (token) => {
  const { ipassCls, badgeFontHeight, marginXS, badgeRibbonOffset } = token;
  const ribbonPrefixCls = `${ipassCls}-ribbon`;
  const ribbonWrapperPrefixCls = `${ipassCls}-ribbon-wrapper`;
  const statusRibbonPreset = genPresetColor(token, (colorKey, { darkColor }) => ({
    [`&${ribbonPrefixCls}-color-${colorKey}`]: {
      background: darkColor,
      color: darkColor
    }
  }));
  return {
    [`${ribbonWrapperPrefixCls}`]: { position: "relative" },
    [`${ribbonPrefixCls}`]: {
      ...resetComponent(token),
      position: "absolute",
      top: marginXS,
      padding: `0 ${token.paddingXS}px`,
      color: token.colorPrimary,
      lineHeight: `${badgeFontHeight}px`,
      whiteSpace: "nowrap",
      backgroundColor: token.colorPrimary,
      borderRadius: token.borderRadiusSM,
      [`${ribbonPrefixCls}-text`]: { color: token.colorTextLightSolid },
      [`${ribbonPrefixCls}-corner`]: {
        position: "absolute",
        top: "100%",
        width: badgeRibbonOffset,
        height: badgeRibbonOffset,
        color: "currentcolor",
        border: `${badgeRibbonOffset / 2}px solid`,
        transform: token.badgeRibbonCornerTransform,
        transformOrigin: "top",
        filter: token.badgeRibbonCornerFilter
      },
      ...statusRibbonPreset,
      [`&${ribbonPrefixCls}-placement-end`]: {
        insetInlineEnd: -badgeRibbonOffset,
        borderEndEndRadius: 0,
        [`${ribbonPrefixCls}-corner`]: {
          insetInlineEnd: 0,
          borderInlineEndColor: "transparent",
          borderBlockEndColor: "transparent"
        }
      },
      [`&${ribbonPrefixCls}-placement-start`]: {
        insetInlineStart: -badgeRibbonOffset,
        borderEndStartRadius: 0,
        [`${ribbonPrefixCls}-corner`]: {
          insetInlineStart: 0,
          borderBlockEndColor: "transparent",
          borderInlineStartColor: "transparent"
        }
      },
      // ====================== RTL =======================
      "&-rtl": {
        direction: "rtl"
      }
    }
  };
};
const useStyle$x = genComponentStyleHook(
  ["Badge", "Ribbon"],
  (token) => {
    const badgeToken = prepareToken$3(token);
    return [genRibbonStyle(badgeToken)];
  },
  prepareComponentToken$2
);

const Ribbon = (props) => {
  const {
    className,
    prefixCls: customizePrefixCls,
    style,
    color,
    children,
    text,
    placement = "end",
    rootClassName
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("ribbon", customizePrefixCls);
  const colorInPreset = isPresetColor(color, false);
  const ribbonCls = classNames(
    prefixCls,
    `${prefixCls}-placement-${placement}`,
    {
      [`${prefixCls}-color-${color}`]: colorInPreset
    },
    className
  );
  const [wrapSSR, hashId] = useStyle$x(prefixCls);
  const colorStyle = {};
  const cornerColorStyle = {};
  if (color && !colorInPreset) {
    colorStyle.background = color;
    cornerColorStyle.color = color;
  }
  return wrapSSR(
    /* @__PURE__ */ jsxs("div", { className: classNames(`${prefixCls}-wrapper`, rootClassName, hashId), children: [
      children,
      /* @__PURE__ */ jsxs("div", { className: classNames(ribbonCls, hashId), style: { ...colorStyle, ...style }, children: [
        /* @__PURE__ */ jsx("span", { className: `${prefixCls}-text`, children: text }),
        /* @__PURE__ */ jsx("div", { className: `${prefixCls}-corner`, style: cornerColorStyle })
      ] })
    ] })
  );
};

function UnitNumber({ prefixCls, value, current, offset = 0 }) {
  let style;
  if (offset) {
    style = {
      position: "absolute",
      top: `${offset}00%`,
      left: 0
    };
  }
  return /* @__PURE__ */ jsx(
    "span",
    {
      style,
      className: classNames(`${prefixCls}-only-unit`, {
        current
      }),
      children: value
    }
  );
}
function getOffset(start, end, unit) {
  let index = start;
  let offset = 0;
  while ((index + 10) % 10 !== end) {
    index += unit;
    offset += unit;
  }
  return offset;
}
function SingleNumber(props) {
  const { prefixCls, count: originCount, value: originValue } = props;
  const value = Number(originValue);
  const count = Math.abs(originCount);
  const [prevValue, setPrevValue] = React.useState(value);
  const [prevCount, setPrevCount] = React.useState(count);
  const onTransitionEnd = () => {
    setPrevValue(value);
    setPrevCount(count);
  };
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onTransitionEnd();
    }, 1e3);
    return () => {
      clearTimeout(timeout);
    };
  }, [value]);
  let unitNodes;
  let offsetStyle;
  if (prevValue === value || Number.isNaN(value) || Number.isNaN(prevValue)) {
    unitNodes = [/* @__PURE__ */ createElement(UnitNumber, { ...props, key: value, current: true })];
    offsetStyle = {
      transition: "none"
    };
  } else {
    unitNodes = [];
    const end = value + 10;
    const unitNumberList = [];
    for (let index = value; index <= end; index += 1) {
      unitNumberList.push(index);
    }
    const prevIndex = unitNumberList.findIndex((n) => n % 10 === prevValue);
    unitNodes = unitNumberList.map((n, index) => {
      const singleUnit = n % 10;
      return /* @__PURE__ */ createElement(
        UnitNumber,
        {
          ...props,
          key: n,
          value: singleUnit,
          offset: index - prevIndex,
          current: index === prevIndex
        }
      );
    });
    const unit = prevCount < count ? 1 : -1;
    offsetStyle = {
      transform: `translateY(${-getOffset(prevValue, value, unit)}00%)`
    };
  }
  return /* @__PURE__ */ jsx("span", { className: `${prefixCls}-only`, style: offsetStyle, onTransitionEnd, children: unitNodes });
}

const ScrollNumber = React.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    count,
    className,
    motionClassName,
    style,
    title,
    show,
    component: Component = "sup",
    children,
    ...restProps
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("scroll-number", customizePrefixCls);
  const newProps = {
    ...restProps,
    "data-show": show,
    style,
    className: classNames(prefixCls, className, motionClassName),
    title
  };
  let numberNodes = count;
  if (count && Number(count) % 1 === 0) {
    const numberList = String(count).split("");
    numberNodes = /* @__PURE__ */ jsx("bdi", { children: numberList.map((num, i) => /* @__PURE__ */ jsx(
      SingleNumber,
      {
        prefixCls,
        count: Number(count),
        value: num
      },
      numberList.length - i
    )) });
  }
  if (style && style.borderColor) {
    newProps.style = {
      ...style,
      boxShadow: `0 0 0 1px ${style.borderColor} inset`
    };
  }
  if (children) {
    return cloneElement(children, (oriProps) => ({
      className: classNames(`${prefixCls}-custom-component`, oriProps?.className, motionClassName)
    }));
  }
  return /* @__PURE__ */ jsx(Component, { ...newProps, ref, children: numberNodes });
});

const InternalBadge = (props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    scrollNumberPrefixCls: customizeScrollNumberPrefixCls,
    children,
    status,
    text,
    color,
    count = null,
    overflowCount = 99,
    dot = false,
    size = "default",
    title,
    offset,
    style,
    className,
    rootClassName,
    classNames: classNames$1,
    styles,
    showZero = false,
    ...restProps
  } = props;
  const { getPrefixCls, badge } = React.useContext(ConfigContext);
  const direction = "ltr";
  const prefixCls = getPrefixCls("badge", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$y(prefixCls);
  const numberedDisplayCount = count > overflowCount ? `${overflowCount}+` : count;
  const isZero = numberedDisplayCount === "0" || numberedDisplayCount === 0;
  const ignoreCount = count === null || isZero && !showZero;
  const hasStatus = (status !== null && status !== void 0 || color !== null && color !== void 0) && ignoreCount;
  const showAsDot = dot && !isZero;
  const mergedCount = showAsDot ? "" : numberedDisplayCount;
  const isHidden = useMemo$1(() => {
    const isEmpty = mergedCount === null || mergedCount === void 0 || mergedCount === "";
    return (isEmpty || isZero && !showZero) && !showAsDot;
  }, [mergedCount, isZero, showZero, showAsDot]);
  const countRef = useRef(count);
  if (!isHidden) {
    countRef.current = count;
  }
  const livingCount = countRef.current;
  const displayCountRef = useRef(mergedCount);
  if (!isHidden) {
    displayCountRef.current = mergedCount;
  }
  const displayCount = displayCountRef.current;
  const isDotRef = useRef(showAsDot);
  if (!isHidden) {
    isDotRef.current = showAsDot;
  }
  const mergedStyle = useMemo$1(() => {
    if (!offset) {
      return { ...badge?.style, ...style };
    }
    const offsetStyle = { marginTop: offset[1] };
    {
      offsetStyle.right = -parseInt(offset[0], 10);
    }
    return { ...offsetStyle, ...badge?.style, ...style };
  }, [direction, offset, style, badge?.style]);
  const titleNode = title ?? (typeof livingCount === "string" || typeof livingCount === "number" ? livingCount : void 0);
  const statusTextNode = isHidden || !text ? null : /* @__PURE__ */ jsx("span", { className: `${prefixCls}-status-text`, children: text });
  const displayNode = !livingCount || typeof livingCount !== "object" ? void 0 : cloneElement(livingCount, (oriProps) => ({
    style: { ...mergedStyle, ...oriProps.style }
  }));
  const isInternalColor = isPresetColor(color, false);
  classNames(classNames$1?.indicator, badge?.classNames?.indicator, {
    [`${prefixCls}-status-dot`]: hasStatus,
    [`${prefixCls}-status-${status}`]: !!status,
    [`${prefixCls}-color-${color}`]: isInternalColor
  });
  const badgeClassName = classNames(
    prefixCls,
    {
      [`${prefixCls}-status`]: hasStatus,
      [`${prefixCls}-not-a-wrapper`]: !children,
      [`${prefixCls}-rtl`]: direction === "rtl"
    },
    className,
    rootClassName,
    badge?.className,
    badge?.classNames?.root,
    classNames$1?.root,
    hashId
  );
  if (!children && hasStatus) {
    return null;
  }
  return wrapSSR(
    /* @__PURE__ */ jsxs(
      "span",
      {
        ref,
        ...restProps,
        className: badgeClassName,
        style: { ...badge?.styles?.root, ...styles?.root },
        children: [
          children,
          /* @__PURE__ */ jsx(
            CSSMotion,
            {
              visible: !isHidden,
              motionName: `${prefixCls}-zoom`,
              motionAppear: false,
              motionDeadline: 1e3,
              children: ({ className: motionClassName, ref: scrollNumberRef }) => {
                const scrollNumberPrefixCls = getPrefixCls(
                  "scroll-number",
                  customizeScrollNumberPrefixCls
                );
                const isDot = isDotRef.current;
                const scrollNumberCls = classNames(classNames$1?.indicator, badge?.classNames?.indicator, {
                  [`${prefixCls}-dot`]: isDot,
                  [`${prefixCls}-count`]: !isDot,
                  [`${prefixCls}-count-sm`]: size === "small",
                  [`${prefixCls}-multiple-words`]: !isDot && displayCount && displayCount.toString().length > 1,
                  [`${prefixCls}-status-${status}`]: !!status,
                  [`${prefixCls}-color-${color}`]: isInternalColor
                });
                let scrollNumberStyle = {
                  ...styles?.indicator,
                  ...badge?.styles?.indicator,
                  ...mergedStyle
                };
                if (color && !isInternalColor) {
                  scrollNumberStyle = scrollNumberStyle || {};
                  scrollNumberStyle.background = color;
                }
                return /* @__PURE__ */ jsx(
                  ScrollNumber,
                  {
                    prefixCls: scrollNumberPrefixCls,
                    show: !isHidden,
                    motionClassName,
                    className: scrollNumberCls,
                    count: displayCount,
                    title: titleNode,
                    style: scrollNumberStyle,
                    ref: scrollNumberRef,
                    children: displayNode
                  },
                  "scrollNumber"
                );
              }
            }
          ),
          statusTextNode
        ]
      }
    )
  );
};
const Badge = React.forwardRef(InternalBadge);
Badge.Ribbon = Ribbon;

const FormContext = React.createContext({
  labelAlign: "right",
  vertical: false,
  itemRef: () => {
  }
});
const NoStyleItemContext = React.createContext(null);
const FormProvider = (props) => {
  const providerProps = omit(props, ["prefixCls"]);
  return /* @__PURE__ */ jsx(FormProvider$1, { ...providerProps });
};
const FormItemPrefixContext = React.createContext({
  prefixCls: ""
});
const FormItemInputContext = React.createContext({});
const NoFormStyle = ({ children, status, override }) => {
  const formItemInputContext = useContext(FormItemInputContext);
  const newFormItemInputContext = useMemo$1(() => {
    const newContext = { ...formItemInputContext };
    if (override) {
      delete newContext.isFormItemInput;
    }
    if (status) {
      delete newContext.status;
      delete newContext.hasFeedback;
      delete newContext.feedbackIcon;
    }
    return newContext;
  }, [status, override, formItemInputContext]);
  return /* @__PURE__ */ jsx(FormItemInputContext.Provider, { value: newFormItemInputContext, children });
};

const useSize = (customSize) => {
  const size = React__default.useContext(SizeContext);
  const mergedSize = React__default.useMemo(() => {
    if (!customSize) {
      return size;
    }
    if (typeof customSize === "string") {
      return customSize ?? size;
    }
    if (customSize instanceof Function) {
      return customSize(size);
    }
    return size;
  }, [customSize, size]);
  return mergedSize;
};

const RadioGroupContext = React.createContext(null);
const RadioGroupContextProvider = RadioGroupContext.Provider;
const RadioOptionTypeContext = React.createContext(null);
const RadioOptionTypeContextProvider = RadioOptionTypeContext.Provider;

const genWaveStyle = (token) => {
  const { componentCls, colorPrimary } = token;
  return {
    [componentCls]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${colorPrimary})`,
      boxShadow: `0 0 0 0 currentcolor`,
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [
          `box-shadow 0.4s ${token.motionEaseOutCirc}`,
          `opacity 2s ${token.motionEaseOutCirc}`
        ].join(","),
        "&-active": {
          boxShadow: `0 0 0 6px currentcolor`,
          opacity: 0
        },
        "&.wave-quick": {
          transition: [
            `box-shadow 0.3s ${token.motionEaseInOut}`,
            `opacity 0.35s ${token.motionEaseInOut}`
          ].join(",")
        }
      }
    }
  };
};
const useStyle$w = genComponentStyleHook("Wave", (token) => [genWaveStyle(token)]);

function isNotGrey(color) {
  const match = (color || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }
  return true;
}
function isValidWaveColor(color) {
  return color && color !== "#fff" && color !== "#ffffff" && color !== "rgb(255, 255, 255)" && color !== "rgba(255, 255, 255, 1)" && isNotGrey(color) && !/rgba\((?:\d*, ){3}0\)/.test(color) && // any transparent rgba color
  color !== "transparent";
}
function getTargetWaveColor(node) {
  const { borderTopColor, borderColor, backgroundColor } = getComputedStyle(node);
  if (isValidWaveColor(borderTopColor)) {
    return borderTopColor;
  }
  if (isValidWaveColor(borderColor)) {
    return borderColor;
  }
  if (isValidWaveColor(backgroundColor)) {
    return backgroundColor;
  }
  return null;
}

const TARGET_CLS = "ipass-wave-target";

function validateNum(value) {
  return Number.isNaN(value) ? 0 : value;
}
const WaveEffect = (props) => {
  const { className, target, component } = props;
  const divRef = React.useRef(null);
  const [color, setWaveColor] = React.useState(null);
  const [borderRadius, setBorderRadius] = React.useState([]);
  const [left, setLeft] = React.useState(0);
  const [top, setTop] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [enabled, setEnabled] = React.useState(false);
  const waveStyle = {
    left,
    top,
    width,
    height,
    borderRadius: borderRadius.map((radius) => `${radius}px`).join(" ")
  };
  if (color) {
    waveStyle["--wave-color"] = color;
  }
  function syncPos() {
    const nodeStyle = getComputedStyle(target);
    setWaveColor(getTargetWaveColor(target));
    const isStatic = nodeStyle.position === "static";
    const { borderLeftWidth, borderTopWidth } = nodeStyle;
    setLeft(isStatic ? target.offsetLeft : validateNum(-parseFloat(borderLeftWidth)));
    setTop(isStatic ? target.offsetTop : validateNum(-parseFloat(borderTopWidth)));
    setWidth(target.offsetWidth);
    setHeight(target.offsetHeight);
    const {
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius
    } = nodeStyle;
    setBorderRadius(
      [
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomRightRadius,
        borderBottomLeftRadius
      ].map((radius) => validateNum(parseFloat(radius)))
    );
  }
  React.useEffect(() => {
    if (target) {
      const id = raf(() => {
        syncPos();
        setEnabled(true);
      });
      let resizeObserver;
      if (typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver(syncPos);
        resizeObserver.observe(target);
      }
      return () => {
        raf.cancel(id);
        resizeObserver?.disconnect();
      };
    }
  }, []);
  if (!enabled) {
    return null;
  }
  const isSmallComponent = (component === "Checkbox" || component === "Radio") && target?.classList.contains(TARGET_CLS);
  return /* @__PURE__ */ jsx(
    CSSMotion,
    {
      visible: true,
      motionAppear: true,
      motionName: "wave-motion",
      motionDeadline: 5e3,
      onAppearEnd: (_, event) => {
        if (event.deadline || event.propertyName === "opacity") {
          const holder = divRef.current?.parentElement;
          unmount(holder).then(() => {
            holder?.remove();
          });
        }
        return false;
      },
      children: ({ className: motionClassName }) => /* @__PURE__ */ jsx(
        "div",
        {
          ref: divRef,
          className: classNames(
            className,
            {
              "wave-quick": isSmallComponent
            },
            motionClassName
          ),
          style: waveStyle
        }
      )
    }
  );
};
const showWaveEffect = (target, info) => {
  const { component } = info;
  if (component === "Checkbox" && !target.querySelector("input")?.checked) {
    return;
  }
  const holder = document.createElement("div");
  holder.style.position = "absolute";
  holder.style.left = "0px";
  holder.style.top = "0px";
  target?.insertBefore(holder, target?.firstChild);
  render(/* @__PURE__ */ jsx(WaveEffect, { ...info, target }), holder);
};

function useWave(nodeRef, className, component) {
  const { wave } = React.useContext(ConfigContext);
  const [, token, hashId] = useToken$1();
  const showWave = useEvent((event) => {
    const node = nodeRef.current;
    if (wave?.disabled || !node) {
      return;
    }
    const targetNode = node.querySelector(`.${TARGET_CLS}`) || node;
    const { showEffect } = wave || {};
    (showEffect || showWaveEffect)(targetNode, { className, token, component, event, hashId });
  });
  const rafId = React.useRef();
  const showDebounceWave = (event) => {
    raf.cancel(rafId.current);
    rafId.current = raf(() => {
      showWave(event);
    });
  };
  return showDebounceWave;
}

const Wave = (props) => {
  const { children, disabled, component } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const containerRef = useRef(null);
  const prefixCls = getPrefixCls("wave");
  const [, hashId] = useStyle$w(prefixCls);
  const showWave = useWave(containerRef, classNames(prefixCls, hashId), component);
  React__default.useEffect(() => {
    const node = containerRef.current;
    if (!node || node.nodeType !== 1 || disabled) {
      return;
    }
    const onClick = (e) => {
      if (!isVisible(e.target) || // No need wave
      !node.getAttribute || node.getAttribute("disabled") || node.disabled || node.className.includes("disabled") || node.className.includes("-leave")) {
        return;
      }
      showWave(e);
    };
    node.addEventListener("click", onClick, true);
    return () => {
      node.removeEventListener("click", onClick, true);
    };
  }, [disabled]);
  if (!React__default.isValidElement(children)) {
    return children ?? null;
  }
  const ref = supportRef(children) ? composeRef(children.ref, containerRef) : containerRef;
  return cloneElement(children, { ref });
};

const getGroupRadioStyle = (token) => {
  const { componentCls, ipassCls } = token;
  const groupPrefixCls = `${componentCls}-group`;
  return {
    [groupPrefixCls]: {
      ...resetComponent(token),
      display: "inline-block",
      fontSize: 0,
      [`${ipassCls}-badge ${ipassCls}-badge-count`]: {
        zIndex: 1
      },
      [`> ${ipassCls}-badge:not(:first-child) > ${ipassCls}-button-wrapper`]: {
        borderInlineStart: "none"
      }
    }
  };
};
const getRadioBasicStyle = (token) => {
  const {
    componentCls,
    wrapperMarginInlineEnd,
    colorPrimary,
    radioSize,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOutCirc,
    colorBgContainer,
    colorBorder,
    lineWidth,
    dotSize,
    colorBgContainerDisabled,
    colorTextDisabled,
    paddingXS,
    dotColorDisabled,
    lineType,
    radioDotDisabledSize,
    wireframe,
    colorWhite
  } = token;
  const radioInnerPrefixCls = `${componentCls}-inner`;
  return {
    [`${componentCls}-wrapper`]: {
      ...resetComponent(token),
      display: "inline-flex",
      alignItems: "baseline",
      marginInlineStart: 0,
      marginInlineEnd: wrapperMarginInlineEnd,
      cursor: "pointer",
      "&-disabled": {
        cursor: "not-allowed",
        color: token.colorTextDisabled
      },
      "&::after": {
        display: "inline-block",
        width: 0,
        overflow: "hidden",
        content: '"\\a0"'
      },
      // hashId 在 wrapper 上，只能鋪平
      [`${componentCls}-checked::after`]: {
        position: "absolute",
        insetBlockStart: 0,
        insetInlineStart: 0,
        width: "100%",
        height: "100%",
        border: `${lineWidth}px ${lineType} ${colorPrimary}`,
        borderRadius: "50%",
        visibility: "hidden",
        content: '""'
      },
      [componentCls]: {
        ...resetComponent(token),
        position: "relative",
        display: "inline-block",
        outline: "none",
        cursor: "pointer",
        alignSelf: "center",
        borderRadius: "50%"
      },
      [`${componentCls}-wrapper:hover &,
        &:hover ${radioInnerPrefixCls}`]: {
        borderColor: colorPrimary
      },
      [`${componentCls}-input:focus-visible + ${radioInnerPrefixCls}`]: {
        ...genFocusOutline(token)
      },
      [`${componentCls}:hover::after, ${componentCls}-wrapper:hover &::after`]: {
        visibility: "visible"
      },
      [`${componentCls}-inner`]: {
        "&::after": {
          boxSizing: "border-box",
          position: "absolute",
          insetBlockStart: "50%",
          insetInlineStart: "50%",
          display: "block",
          width: radioSize,
          height: radioSize,
          marginBlockStart: radioSize / -2,
          marginInlineStart: radioSize / -2,
          backgroundColor: wireframe ? colorPrimary : colorWhite,
          borderBlockStart: 0,
          borderInlineStart: 0,
          borderRadius: radioSize,
          transform: "scale(0)",
          opacity: 0,
          transition: `all ${motionDurationSlow} ${motionEaseInOutCirc}`,
          content: '""'
        },
        boxSizing: "border-box",
        position: "relative",
        insetBlockStart: 0,
        insetInlineStart: 0,
        display: "block",
        width: radioSize,
        height: radioSize,
        backgroundColor: colorBgContainer,
        borderColor: colorBorder,
        borderStyle: "solid",
        borderWidth: lineWidth,
        borderRadius: "50%",
        transition: `all ${motionDurationMid}`
      },
      [`${componentCls}-input`]: {
        position: "absolute",
        inset: 0,
        zIndex: 1,
        cursor: "pointer",
        opacity: 0
      },
      // 選中狀態
      [`${componentCls}-checked`]: {
        [radioInnerPrefixCls]: {
          borderColor: colorPrimary,
          backgroundColor: wireframe ? colorBgContainer : colorPrimary,
          "&::after": {
            transform: `scale(${dotSize / radioSize})`,
            opacity: 1,
            transition: `all ${motionDurationSlow} ${motionEaseInOutCirc}`
          }
        }
      },
      [`${componentCls}-disabled`]: {
        cursor: "not-allowed",
        [radioInnerPrefixCls]: {
          backgroundColor: colorBgContainerDisabled,
          borderColor: colorBorder,
          cursor: "not-allowed",
          "&::after": {
            backgroundColor: dotColorDisabled
          }
        },
        [`${componentCls}-input`]: {
          cursor: "not-allowed"
        },
        [`${componentCls}-disabled + span`]: {
          color: colorTextDisabled,
          cursor: "not-allowed"
        },
        [`&${componentCls}-checked`]: {
          [radioInnerPrefixCls]: {
            "&::after": {
              transform: `scale(${radioDotDisabledSize / radioSize})`
            }
          }
        }
      },
      [`span${componentCls} + *`]: {
        paddingInlineStart: paddingXS,
        paddingInlineEnd: paddingXS
      }
    }
  };
};
const getRadioButtonStyle = (token) => {
  const {
    buttonColor,
    controlHeight,
    componentCls,
    lineWidth,
    lineType,
    colorBorder,
    motionDurationSlow,
    motionDurationMid,
    buttonPaddingInline,
    fontSize,
    buttonBg,
    fontSizeLG,
    controlHeightLG,
    controlHeightSM,
    paddingXS,
    borderRadius,
    borderRadiusSM,
    borderRadiusLG,
    buttonCheckedBg,
    buttonSolidCheckedColor,
    colorTextDisabled,
    colorBgContainerDisabled,
    buttonCheckedBgDisabled,
    buttonCheckedColorDisabled,
    colorPrimary,
    colorPrimaryHover,
    colorPrimaryActive,
    buttonSolidCheckedBg,
    buttonSolidCheckedHoverBg,
    buttonSolidCheckedActiveBg
  } = token;
  return {
    [`${componentCls}-button-wrapper`]: {
      position: "relative",
      display: "inline-block",
      height: controlHeight,
      margin: 0,
      paddingInline: buttonPaddingInline,
      paddingBlock: 0,
      color: buttonColor,
      fontSize,
      lineHeight: `${controlHeight - lineWidth * 2}px`,
      background: buttonBg,
      border: `${lineWidth}px ${lineType} ${colorBorder}`,
      // strange align fix for chrome but works
      // https://gw.alipayobjects.com/zos/rmsportal/VFTfKXJuogBAXcvfAUWJ.gif
      borderBlockStartWidth: lineWidth + 0.02,
      borderInlineStartWidth: 0,
      borderInlineEndWidth: lineWidth,
      cursor: "pointer",
      transition: [
        `color ${motionDurationMid}`,
        `background ${motionDurationMid}`,
        `box-shadow ${motionDurationMid}`
      ].join(","),
      a: {
        color: buttonColor
      },
      [`> ${componentCls}-button`]: {
        position: "absolute",
        insetBlockStart: 0,
        insetInlineStart: 0,
        zIndex: -1,
        width: "100%",
        height: "100%"
      },
      "&:not(:first-child)": {
        "&::before": {
          position: "absolute",
          insetBlockStart: -lineWidth,
          insetInlineStart: -lineWidth,
          display: "block",
          boxSizing: "content-box",
          width: 1,
          height: "100%",
          paddingBlock: lineWidth,
          paddingInline: 0,
          backgroundColor: colorBorder,
          transition: `background-color ${motionDurationSlow}`,
          content: '""'
        }
      },
      "&:first-child": {
        borderInlineStart: `${lineWidth}px ${lineType} ${colorBorder}`,
        borderStartStartRadius: borderRadius,
        borderEndStartRadius: borderRadius
      },
      "&:last-child": {
        borderStartEndRadius: borderRadius,
        borderEndEndRadius: borderRadius
      },
      "&:first-child:last-child": {
        borderRadius
      },
      [`${componentCls}-group-large &`]: {
        height: controlHeightLG,
        fontSize: fontSizeLG,
        lineHeight: `${controlHeightLG - lineWidth * 2}px`,
        "&:first-child": {
          borderStartStartRadius: borderRadiusLG,
          borderEndStartRadius: borderRadiusLG
        },
        "&:last-child": {
          borderStartEndRadius: borderRadiusLG,
          borderEndEndRadius: borderRadiusLG
        }
      },
      [`${componentCls}-group-small &`]: {
        height: controlHeightSM,
        paddingInline: paddingXS - lineWidth,
        paddingBlock: 0,
        lineHeight: `${controlHeightSM - lineWidth * 2}px`,
        "&:first-child": {
          borderStartStartRadius: borderRadiusSM,
          borderEndStartRadius: borderRadiusSM
        },
        "&:last-child": {
          borderStartEndRadius: borderRadiusSM,
          borderEndEndRadius: borderRadiusSM
        }
      },
      "&:hover": {
        position: "relative",
        color: colorPrimary
      },
      "&:has(:focus-visible)": {
        ...genFocusOutline(token)
      },
      [`${componentCls}-inner, input[type='checkbox'], input[type='radio']`]: {
        width: 0,
        height: 0,
        opacity: 0,
        pointerEvents: "none"
      },
      [`&-checked:not(${componentCls}-button-wrapper-disabled)`]: {
        zIndex: 1,
        color: colorPrimary,
        background: buttonCheckedBg,
        borderColor: colorPrimary,
        "&::before": {
          backgroundColor: colorPrimary
        },
        "&:first-child": {
          borderColor: colorPrimary
        },
        "&:hover": {
          color: colorPrimaryHover,
          borderColor: colorPrimaryHover,
          "&::before": {
            backgroundColor: colorPrimaryHover
          }
        },
        "&:active": {
          color: colorPrimaryActive,
          borderColor: colorPrimaryActive,
          "&::before": {
            backgroundColor: colorPrimaryActive
          }
        }
      },
      [`${componentCls}-group-solid &-checked:not(${componentCls}-button-wrapper-disabled)`]: {
        color: buttonSolidCheckedColor,
        background: buttonSolidCheckedBg,
        borderColor: buttonSolidCheckedBg,
        "&:hover": {
          color: buttonSolidCheckedColor,
          background: buttonSolidCheckedHoverBg,
          borderColor: buttonSolidCheckedHoverBg
        },
        "&:active": {
          color: buttonSolidCheckedColor,
          background: buttonSolidCheckedActiveBg,
          borderColor: buttonSolidCheckedActiveBg
        }
      },
      "&-disabled": {
        color: colorTextDisabled,
        backgroundColor: colorBgContainerDisabled,
        borderColor: colorBorder,
        cursor: "not-allowed",
        "&:first-child, &:hover": {
          color: colorTextDisabled,
          backgroundColor: colorBgContainerDisabled,
          borderColor: colorBorder
        }
      },
      [`&-disabled${componentCls}-button-wrapper-checked`]: {
        color: buttonCheckedColorDisabled,
        backgroundColor: buttonCheckedBgDisabled,
        borderColor: colorBorder,
        boxShadow: "none"
      }
    }
  };
};
const getDotSize = (radioSize) => {
  const dotPadding = 4;
  return radioSize - dotPadding * 2;
};
const useStyle$v = genComponentStyleHook(
  "Radio",
  (token) => {
    const { controlOutline, controlOutlineWidth, radioSize } = token;
    const radioFocusShadow = `0 0 0 ${controlOutlineWidth}px ${controlOutline}`;
    const radioButtonFocusShadow = radioFocusShadow;
    const radioDotDisabledSize = getDotSize(radioSize);
    const radioToken = merge(token, {
      radioDotDisabledSize,
      radioFocusShadow,
      radioButtonFocusShadow
    });
    return [
      getGroupRadioStyle(radioToken),
      getRadioBasicStyle(radioToken),
      getRadioButtonStyle(radioToken)
    ];
  },
  (token) => {
    const {
      wireframe,
      padding,
      marginXS,
      lineWidth,
      fontSizeLG,
      colorText,
      colorBgContainer,
      colorTextDisabled,
      controlItemBgActiveDisabled,
      colorTextLightSolid,
      colorPrimary,
      colorPrimaryHover,
      colorPrimaryActive
    } = token;
    const dotPadding = 4;
    const radioSize = fontSizeLG;
    const radioDotSize = wireframe ? getDotSize(radioSize) : radioSize - (dotPadding + lineWidth) * 2;
    return {
      // Radio
      radioSize,
      dotSize: radioDotSize,
      dotColorDisabled: colorTextDisabled,
      // Radio buttons
      buttonSolidCheckedColor: colorTextLightSolid,
      buttonSolidCheckedBg: colorPrimary,
      buttonSolidCheckedHoverBg: colorPrimaryHover,
      buttonSolidCheckedActiveBg: colorPrimaryActive,
      buttonBg: colorBgContainer,
      buttonCheckedBg: colorBgContainer,
      buttonColor: colorText,
      buttonCheckedBgDisabled: controlItemBgActiveDisabled,
      buttonCheckedColorDisabled: colorTextDisabled,
      buttonPaddingInline: padding - lineWidth,
      wrapperMarginInlineEnd: marginXS
    };
  }
);

const InternalRadio = (props, ref) => {
  const groupContext = React.useContext(RadioGroupContext);
  const radioOptionTypeContext = React.useContext(RadioOptionTypeContext);
  const { getPrefixCls, radio } = React.useContext(ConfigContext);
  const innerRef = React.useRef(null);
  const mergedRef = composeRef(ref, innerRef);
  const { isFormItemInput } = React.useContext(FormItemInputContext);
  const onChange = (e) => {
    props.onChange?.(e);
    groupContext?.onChange?.(e);
  };
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    children,
    style,
    ...restProps
  } = props;
  const radioPrefixCls = getPrefixCls("radio", customizePrefixCls);
  const isButtonType = (groupContext?.optionType || radioOptionTypeContext) === "button";
  const prefixCls = isButtonType ? `${radioPrefixCls}-button` : radioPrefixCls;
  const [wrapSSR, hashId] = useStyle$v(radioPrefixCls);
  const radioProps = { ...restProps };
  const disabled = React.useContext(DisabledContext);
  if (groupContext) {
    radioProps.name = groupContext.name;
    radioProps.onChange = onChange;
    radioProps.checked = props.value === groupContext.value;
    radioProps.disabled = radioProps.disabled ?? groupContext.disabled;
  }
  radioProps.disabled = radioProps.disabled ?? disabled;
  const wrapperClassString = classNames(
    `${prefixCls}-wrapper`,
    {
      [`${prefixCls}-wrapper-checked`]: radioProps.checked,
      [`${prefixCls}-wrapper-disabled`]: radioProps.disabled,
      [`${prefixCls}-wrapper-in-form-item`]: isFormItemInput
    },
    radio?.className,
    className,
    rootClassName,
    hashId
  );
  return wrapSSR(
    /* @__PURE__ */ jsx(Wave, { component: "Radio", disabled: radioProps.disabled, children: /* @__PURE__ */ jsxs(
      "label",
      {
        className: wrapperClassString,
        style: { ...radio?.style, ...style },
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        children: [
          /* @__PURE__ */ jsx(
            RcCheckbox,
            {
              ...radioProps,
              className: classNames(radioProps.className, !isButtonType && TARGET_CLS),
              type: "radio",
              prefixCls,
              ref: mergedRef
            }
          ),
          children !== void 0 ? /* @__PURE__ */ jsx("span", { children }) : null
        ]
      }
    ) })
  );
};
const Radio$1 = React.forwardRef(InternalRadio);

const RadioGroup = React.forwardRef((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const [value, setValue] = useMergedState(props.defaultValue, {
    value: props.value
  });
  const onRadioChange = (ev) => {
    const lastValue = value;
    const val = ev.target.value;
    if (!("value" in props)) {
      setValue(val);
    }
    const { onChange } = props;
    if (onChange && val !== lastValue) {
      onChange(ev);
    }
  };
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    options,
    buttonStyle = "outline",
    disabled,
    children,
    size: customizeSize,
    style,
    id,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur
  } = props;
  const prefixCls = getPrefixCls("radio", customizePrefixCls);
  const groupPrefixCls = `${prefixCls}-group`;
  const [wrapSSR, hashId] = useStyle$v(prefixCls);
  let childrenToRender = children;
  if (options && options.length > 0) {
    childrenToRender = options.map((option) => {
      if (typeof option === "string" || typeof option === "number") {
        return /* @__PURE__ */ jsx(
          Radio$1,
          {
            prefixCls,
            disabled,
            value: option,
            checked: value === option,
            children: option
          },
          option.toString()
        );
      }
      return /* @__PURE__ */ jsx(
        Radio$1,
        {
          prefixCls,
          disabled: option.disabled || disabled,
          value: option.value,
          checked: value === option.value,
          title: option.title,
          style: option.style,
          children: option.label
        },
        `radio-group-value-options-${option.value}`
      );
    });
  }
  const mergedSize = useSize(customizeSize);
  const classString = classNames(
    groupPrefixCls,
    `${groupPrefixCls}-${buttonStyle}`,
    {
      [`${groupPrefixCls}-${mergedSize}`]: mergedSize
    },
    className,
    rootClassName,
    hashId
  );
  return wrapSSR(
    /* @__PURE__ */ jsx(
      "div",
      {
        ...pickAttrs(props, { aria: true, data: true }),
        className: classString,
        style,
        onMouseEnter,
        onMouseLeave,
        onFocus,
        onBlur,
        id,
        ref,
        children: /* @__PURE__ */ jsx(
          RadioGroupContextProvider,
          {
            value: {
              onChange: onRadioChange,
              value,
              disabled: props.disabled,
              name: props.name,
              optionType: props.optionType
            },
            children: childrenToRender
          }
        )
      }
    )
  );
});
const Group$2 = React.memo(RadioGroup);

const RadioButton = (props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const { prefixCls: customizePrefixCls, ...radioProps } = props;
  const prefixCls = getPrefixCls("radio", customizePrefixCls);
  return /* @__PURE__ */ jsx(RadioOptionTypeContextProvider, { value: "button", children: /* @__PURE__ */ jsx(Radio$1, { prefixCls, ...radioProps, type: "radio", ref }) });
};
const Button = React.forwardRef(RadioButton);

const Radio = Radio$1;
Radio.Button = Button;
Radio.Group = Group$2;
Radio.__IPASS_RADIO = true;

const getCollapsedHeight = () => ({ height: 0, opacity: 0 });
const getRealHeight = (node) => {
  const { scrollHeight } = node;
  return { height: scrollHeight, opacity: 1 };
};
const getCurrentHeight = (node) => ({ height: node ? node.offsetHeight : 0 });
const skipOpacityTransition = (_, event) => event?.deadline === true || event.propertyName === "height";
const initCollapseMotion = (rootCls = "ipass") => ({
  motionName: `${rootCls}-motion-collapse`,
  onAppearStart: getCollapsedHeight,
  onEnterStart: getCollapsedHeight,
  onAppearActive: getRealHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  onAppearEnd: skipOpacityTransition,
  onEnterEnd: skipOpacityTransition,
  onLeaveEnd: skipOpacityTransition,
  motionDeadline: 500
});
const getTransitionName = (rootPrefixCls, motion, transitionName) => {
  if (transitionName !== void 0) {
    return transitionName;
  }
  return `${rootPrefixCls}-${motion}`;
};

function withPureRenderTheme(Component) {
  return function PureRenderThemeComponent(props) {
    return /* @__PURE__ */ jsx(
      ConfigProvider,
      {
        theme: {
          token: {
            motion: false,
            zIndexPopupBase: 0
          }
        },
        children: /* @__PURE__ */ jsx(Component, { ...props })
      }
    );
  };
}
function genPurePanel(Component, defaultPrefixCls, getDropdownCls, postProps) {
  function PurePanel(props) {
    const { prefixCls: customizePrefixCls, style } = props;
    const holderRef = React.useRef(null);
    const [popupHeight, setPopupHeight] = React.useState(0);
    const [popupWidth, setPopupWidth] = React.useState(0);
    const [open, setOpen] = useMergedState(false, {
      value: props.open
    });
    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls(defaultPrefixCls || "select", customizePrefixCls);
    React.useEffect(() => {
      setOpen(true);
      if (typeof ResizeObserver !== "undefined") {
        const resizeObserver = new ResizeObserver((entries) => {
          const element = entries[0].target;
          setPopupHeight(element.offsetHeight + 8);
          setPopupWidth(element.offsetWidth);
        });
        const interval = setInterval(() => {
          const dropdownCls = getDropdownCls ? `.${getDropdownCls(prefixCls)}` : `.${prefixCls}-dropdown`;
          const popup = holderRef.current?.querySelector(dropdownCls);
          if (popup) {
            clearInterval(interval);
            resizeObserver.observe(popup);
          }
        }, 10);
        return () => {
          clearInterval(interval);
          resizeObserver.disconnect();
        };
      }
    }, []);
    let mergedProps = {
      ...props,
      style: {
        ...style,
        margin: 0
      },
      open,
      visible: open,
      getPopupContainer: () => holderRef.current
    };
    if (postProps) {
      mergedProps = postProps(mergedProps);
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref: holderRef,
        style: {
          paddingBottom: popupHeight,
          position: "relative",
          minWidth: popupWidth
        },
        children: /* @__PURE__ */ jsx(Component, { ...mergedProps })
      }
    );
  }
  return withPureRenderTheme(PurePanel);
}

function getStatusClassNames(prefixCls, status, hasFeedback) {
  return classNames({
    [`${prefixCls}-status-success`]: status === "success",
    [`${prefixCls}-status-warning`]: status === "warning",
    [`${prefixCls}-status-error`]: status === "error",
    [`${prefixCls}-status-validating`]: status === "validating",
    [`${prefixCls}-has-feedback`]: hasFeedback
  });
}
const getMergedStatus = (contextStatus, customStatus) => customStatus || contextStatus;

const genSharedEmptyStyle = (token) => {
  const { componentCls, margin, marginXS, marginXL, fontSize, lineHeight } = token;
  return {
    [componentCls]: {
      marginInline: marginXS,
      fontSize,
      lineHeight,
      textAlign: "center",
      [`${componentCls}-description`]: {
        color: token.colorTextDisabled
      },
      // 原來 &-footer 沒有父子結構，現在為了外層承擔我們的hashId，改成父子結果
      [`${componentCls}-footer`]: {
        marginTop: margin
      }
    }
  };
};
const useStyle$u = genComponentStyleHook("Empty", (token) => {
  const { componentCls, controlHeightLG } = token;
  const emptyToken = merge(token, {
    emptyImgCls: `${componentCls}-img`,
    emptyImgHeight: controlHeightLG * 2.5,
    emptyImgHeightMD: controlHeightLG,
    emptyImgHeightSM: controlHeightLG * 0.875
  });
  return [genSharedEmptyStyle(emptyToken)];
});

const Empty = ({
  className,
  rootClassName,
  prefixCls: customizePrefixCls,
  description,
  children,
  imageStyle,
  style,
  ...restProps
}) => {
  const { getPrefixCls, empty } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("empty", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$u(prefixCls);
  const [locale] = useLocale("Empty");
  const des = typeof description !== "undefined" ? description : locale?.description;
  return wrapSSR(
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: classNames(
          hashId,
          prefixCls,
          empty?.className,
          className,
          rootClassName
        ),
        style: { ...empty?.style, ...style },
        ...restProps,
        children: [
          des && /* @__PURE__ */ jsx("div", { className: `${prefixCls}-description`, children: des }),
          children && /* @__PURE__ */ jsx("div", { className: `${prefixCls}-footer`, children })
        ]
      }
    )
  );
};

const DefaultRenderEmpty = (props) => {
  const { componentName } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls("empty");
  switch (componentName) {
    case "Table":
    case "List":
      return /* @__PURE__ */ jsx(Empty, {});
    case "Select":
      return /* @__PURE__ */ jsx(Empty, { className: `${prefix}-small` });
    default:
      return /* @__PURE__ */ jsx(Empty, {});
  }
};

const genSpaceCompactStyle = (token) => {
  const { componentCls } = token;
  return {
    [componentCls]: {
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
};

const genSpaceStyle = (token) => {
  const { componentCls } = token;
  return {
    [componentCls]: {
      display: "inline-flex",
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${componentCls}-item:empty`]: {
        display: "none"
      }
    }
  };
};
const genSpaceGapStyle = (token) => {
  const { componentCls } = token;
  return {
    [componentCls]: {
      "&-gap-row-small": {
        rowGap: token.spaceGapSmallSize
      },
      "&-gap-row-medium": {
        rowGap: token.spaceGapMediumSize
      },
      "&-gap-row-large": {
        rowGap: token.spaceGapLargeSize
      },
      "&-gap-col-small": {
        columnGap: token.spaceGapSmallSize
      },
      "&-gap-col-medium": {
        columnGap: token.spaceGapMediumSize
      },
      "&-gap-col-large": {
        columnGap: token.spaceGapLargeSize
      }
    }
  };
};
const useStyle$t = genComponentStyleHook(
  "Space",
  (token) => {
    const spaceToken = merge(token, {
      spaceGapSmallSize: token.paddingXS,
      spaceGapMediumSize: token.padding,
      spaceGapLargeSize: token.paddingLG
    });
    return [
      genSpaceStyle(spaceToken),
      genSpaceGapStyle(spaceToken),
      genSpaceCompactStyle(spaceToken)
    ];
  },
  () => ({}),
  {
    // Space component don't apply extra font style    resetStyle: false,
  }
);

const SpaceCompactItemContext = React.createContext(
  null
);
const useCompactItemContext = (prefixCls) => {
  const compactItemContext = React.useContext(SpaceCompactItemContext);
  const compactItemClassnames = React.useMemo(() => {
    if (!compactItemContext) {
      return "";
    }
    const { isFirstItem, isLastItem } = compactItemContext;
    const separator = "-";
    return classNames(`${prefixCls}-compact${separator}item`, {
      [`${prefixCls}-compact${separator}first-item`]: isFirstItem,
      [`${prefixCls}-compact${separator}last-item`]: isLastItem
    });
  }, [prefixCls, compactItemContext]);
  return {
    compactSize: compactItemContext?.compactSize,
    compactItemClassnames
  };
};
const NoCompactStyle = ({ children }) => /* @__PURE__ */ jsx(SpaceCompactItemContext.Provider, { value: null, children });
const CompactItem = ({
  children,
  ...otherProps
}) => /* @__PURE__ */ jsx(SpaceCompactItemContext.Provider, { value: otherProps, children });
const Compact = (props) => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const {
    size,
    direction,
    block,
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    children,
    ...restProps
  } = props;
  const mergedSize = useSize((ctx) => size ?? ctx);
  const prefixCls = getPrefixCls("space-compact", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$t(prefixCls);
  const clx = classNames(
    prefixCls,
    hashId,
    {
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-vertical`]: direction === "vertical"
    },
    className,
    rootClassName
  );
  const compactItemContext = React.useContext(SpaceCompactItemContext);
  const childNodes = toArray$2(children);
  const nodes = React.useMemo(
    () => childNodes.map((child, i) => {
      const key = child && child.key || `${prefixCls}-item-${i}`;
      return /* @__PURE__ */ jsx(
        CompactItem,
        {
          compactSize: mergedSize,
          isFirstItem: i === 0 && (!compactItemContext || compactItemContext?.isFirstItem),
          isLastItem: i === childNodes.length - 1 && (!compactItemContext || compactItemContext?.isLastItem),
          children: child
        },
        key
      );
    }),
    [size, childNodes, compactItemContext]
  );
  if (childNodes.length === 0) {
    return null;
  }
  return wrapSSR(
    /* @__PURE__ */ jsx("div", { className: clx, ...restProps, children: nodes })
  );
};

function compactItemBorder(token, parentCls, options) {
  const { focusElCls, focus, borderElCls } = options;
  const childCombinator = borderElCls ? "> *" : "";
  const hoverEffects = ["hover", focus ? "focus" : null, "active"].filter(Boolean).map((n) => `&:${n} ${childCombinator}`).join(",");
  return {
    [`&-item:not(${parentCls}-last-item)`]: {
      marginInlineEnd: -token.lineWidth
    },
    "&-item": {
      [hoverEffects]: {
        zIndex: 2
      },
      ...focusElCls ? {
        [`&${focusElCls}`]: {
          zIndex: 2
        }
      } : {},
      [`&[disabled] ${childCombinator}`]: {
        zIndex: 0
      }
    }
  };
}
function compactItemBorderRadius(prefixCls, parentCls, options) {
  const { borderElCls } = options;
  const childCombinator = borderElCls ? `> ${borderElCls}` : "";
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
      borderRadius: 0
    },
    [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function genCompactItemStyle(token, options = { focus: true }) {
  const { componentCls } = token;
  const compactCls = `${componentCls}-compact`;
  return {
    [compactCls]: {
      ...compactItemBorder(token, compactCls, options),
      ...compactItemBorderRadius(componentCls, compactCls, options)
    }
  };
}

const initMotionCommon = (duration) => ({
  animationDuration: duration,
  animationFillMode: "both"
});
const initMotionCommonLeave = (duration) => ({
  animationDuration: duration,
  animationFillMode: "both"
});
const initMotion = (motionCls, inKeyframes, outKeyframes, duration, sameLevel = false) => {
  const sameLevelPrefix = sameLevel ? "&" : "";
  return {
    [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: {
      ...initMotionCommon(duration),
      animationPlayState: "paused"
    },
    [`${sameLevelPrefix}${motionCls}-leave`]: {
      ...initMotionCommonLeave(duration),
      animationPlayState: "paused"
    },
    [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
      animationName: inKeyframes,
      animationPlayState: "running"
    },
    [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
      animationName: outKeyframes,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
};

const fadeIn = new Keyframes("ipassFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
});
const fadeOut = new Keyframes("ipassFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
});
const initFadeMotion = (token, sameLevel = false) => {
  const { ipassCls } = token;
  const motionCls = `${ipassCls}-fade`;
  const sameLevelPrefix = sameLevel ? "&" : "";
  return [
    initMotion(motionCls, fadeIn, fadeOut, token.motionDurationMid, sameLevel),
    {
      [`
        ${sameLevelPrefix}${motionCls}-enter,
        ${sameLevelPrefix}${motionCls}-appear
      `]: {
        opacity: 0,
        animationTimingFunction: "linear"
      },
      [`${sameLevelPrefix}${motionCls}-leave`]: {
        animationTimingFunction: "linear"
      }
    }
  ];
};

const moveDownIn = new Keyframes("ipassMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveDownOut = new Keyframes("ipassMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveLeftIn = new Keyframes("ipassMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveLeftOut = new Keyframes("ipassMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveRightIn = new Keyframes("ipassMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveRightOut = new Keyframes("ipassMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveUpIn = new Keyframes("ipassMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveUpOut = new Keyframes("ipassMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveMotion = {
  "move-up": {
    inKeyframes: moveUpIn,
    outKeyframes: moveUpOut
  },
  "move-down": {
    inKeyframes: moveDownIn,
    outKeyframes: moveDownOut
  },
  "move-left": {
    inKeyframes: moveLeftIn,
    outKeyframes: moveLeftOut
  },
  "move-right": {
    inKeyframes: moveRightIn,
    outKeyframes: moveRightOut
  }
};
const initMoveMotion = (token, motionName) => {
  const { ipassCls } = token;
  const motionCls = `${ipassCls}-${motionName}`;
  const { inKeyframes, outKeyframes } = moveMotion[motionName];
  return [
    initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid),
    {
      [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
        opacity: 0,
        animationTimingFunction: token.motionEaseOutCirc
      },
      [`${motionCls}-leave`]: {
        animationTimingFunction: token.motionEaseInOutCirc
      }
    }
  ];
};

const slideUpIn = new Keyframes("ipassSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
});
const slideUpOut = new Keyframes("ipassSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
});
const slideDownIn = new Keyframes("ipassSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
});
const slideDownOut = new Keyframes("ipassSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
});
const slideLeftIn = new Keyframes("ipassSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
});
const slideLeftOut = new Keyframes("ipassSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
});
const slideRightIn = new Keyframes("ipassSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
});
const slideRightOut = new Keyframes("ipassSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
});
const slideMotion = {
  "slide-up": {
    inKeyframes: slideUpIn,
    outKeyframes: slideUpOut
  },
  "slide-down": {
    inKeyframes: slideDownIn,
    outKeyframes: slideDownOut
  },
  "slide-left": {
    inKeyframes: slideLeftIn,
    outKeyframes: slideLeftOut
  },
  "slide-right": {
    inKeyframes: slideRightIn,
    outKeyframes: slideRightOut
  }
};
const initSlideMotion = (token, motionName) => {
  const { ipassCls } = token;
  const motionCls = `${ipassCls}-${motionName}`;
  const { inKeyframes, outKeyframes } = slideMotion[motionName];
  return [
    initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid),
    {
      [`
      ${motionCls}-enter,
      ${motionCls}-appear
    `]: {
        transform: "scale(0)",
        transformOrigin: "0% 0%",
        opacity: 0,
        animationTimingFunction: token.motionEaseOutQuint,
        [`&-prepare`]: {
          transform: "scale(1)"
        }
      },
      [`${motionCls}-leave`]: {
        animationTimingFunction: token.motionEaseInQuint
      }
    }
  ];
};

const zoomIn = new Keyframes("ipassZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
});
const zoomOut = new Keyframes("ipassZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
});
const zoomBigIn = new Keyframes("ipassZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
});
const zoomBigOut = new Keyframes("ipassZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
});
const zoomUpIn = new Keyframes("ipassZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
});
const zoomUpOut = new Keyframes("ipassZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
});
const zoomLeftIn = new Keyframes("ipassZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
});
const zoomLeftOut = new Keyframes("ipassZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
});
const zoomRightIn = new Keyframes("ipassZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
});
const zoomRightOut = new Keyframes("ipassZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
});
const zoomDownIn = new Keyframes("ipassZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
});
const zoomDownOut = new Keyframes("ipassZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
});
const zoomMotion = {
  zoom: {
    inKeyframes: zoomIn,
    outKeyframes: zoomOut
  },
  "zoom-big": {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  "zoom-big-fast": {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  "zoom-left": {
    inKeyframes: zoomLeftIn,
    outKeyframes: zoomLeftOut
  },
  "zoom-right": {
    inKeyframes: zoomRightIn,
    outKeyframes: zoomRightOut
  },
  "zoom-up": {
    inKeyframes: zoomUpIn,
    outKeyframes: zoomUpOut
  },
  "zoom-down": {
    inKeyframes: zoomDownIn,
    outKeyframes: zoomDownOut
  }
};
const initZoomMotion = (token, motionName) => {
  const { ipassCls } = token;
  const motionCls = `${ipassCls}-${motionName}`;
  const { inKeyframes, outKeyframes } = zoomMotion[motionName];
  return [
    initMotion(
      motionCls,
      inKeyframes,
      outKeyframes,
      motionName === "zoom-big-fast" ? token.motionDurationFast : token.motionDurationMid
    ),
    {
      [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
        transform: "scale(0)",
        opacity: 0,
        animationTimingFunction: token.motionEaseOutCirc,
        "&-prepare": {
          transform: "none"
        }
      },
      [`${motionCls}-leave`]: {
        animationTimingFunction: token.motionEaseInOutCirc
      }
    }
  ];
};

const genCollapseMotion = (token) => ({
  [token.componentCls]: {
    // For common/openAnimation
    [`${token.ipassCls}-motion-collapse-legacy`]: {
      overflow: "hidden",
      "&-active": {
        transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
      }
    },
    [`${token.ipassCls}-motion-collapse`]: {
      overflow: "hidden",
      transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
    }
  }
});

const genItemStyle = (token) => {
  const { optionHeight, optionFontSize, optionLineHeight, optionPadding } = token;
  return {
    position: "relative",
    display: "block",
    minHeight: optionHeight,
    padding: optionPadding,
    color: token.colorText,
    fontWeight: "normal",
    fontSize: optionFontSize,
    lineHeight: optionLineHeight,
    boxSizing: "border-box"
  };
};
const genSingleStyle$1 = (token) => {
  const { ipassCls, componentCls } = token;
  const selectItemCls = `${componentCls}-item`;
  const slideUpEnterActive = `&${ipassCls}-slide-up-enter${ipassCls}-slide-up-enter-active`;
  const slideUpAppearActive = `&${ipassCls}-slide-up-appear${ipassCls}-slide-up-appear-active`;
  const slideUpLeaveActive = `&${ipassCls}-slide-up-leave${ipassCls}-slide-up-leave-active`;
  const dropdownPlacementCls = `${componentCls}-dropdown-placement-`;
  return [
    {
      [`${componentCls}-dropdown`]: {
        // ========================== Popup ==========================
        ...resetComponent(token),
        position: "absolute",
        top: -9999,
        zIndex: token.zIndexPopup,
        boxSizing: "border-box",
        padding: token.paddingXXS,
        overflow: "hidden",
        fontSize: token.fontSize,
        // Fix select render lag of long text in chrome        fontVariant: 'initial',
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        outline: "none",
        boxShadow: token.boxShadowSecondary,
        [`
          ${slideUpEnterActive}${dropdownPlacementCls}bottomLeft,
          ${slideUpAppearActive}${dropdownPlacementCls}bottomLeft
        `]: {
          animationName: slideUpIn
        },
        [`
          ${slideUpEnterActive}${dropdownPlacementCls}topLeft,
          ${slideUpAppearActive}${dropdownPlacementCls}topLeft,
          ${slideUpEnterActive}${dropdownPlacementCls}topRight,
          ${slideUpAppearActive}${dropdownPlacementCls}topRight
        `]: {
          animationName: slideDownIn
        },
        [`${slideUpLeaveActive}${dropdownPlacementCls}bottomLeft`]: {
          animationName: slideUpOut
        },
        [`
          ${slideUpLeaveActive}${dropdownPlacementCls}topLeft,
          ${slideUpLeaveActive}${dropdownPlacementCls}topRight
        `]: {
          animationName: slideDownOut
        },
        "&-hidden": {
          display: "none"
        },
        [`${selectItemCls}`]: {
          ...genItemStyle(token),
          cursor: "pointer",
          transition: `background ${token.motionDurationSlow} ease`,
          borderRadius: token.borderRadiusSM,
          // =========== Group ============
          "&-group": {
            color: token.colorTextDescription,
            fontSize: token.fontSizeSM,
            cursor: "default"
          },
          // =========== Option ===========
          "&-option": {
            display: "flex",
            "&-content": {
              flex: "auto",
              ...textEllipsis
            },
            "&-state": {
              flex: "none",
              display: "flex",
              alignItems: "center"
            },
            [`&-active:not(${selectItemCls}-option-disabled)`]: {
              backgroundColor: token.optionActiveBg
            },
            [`&-selected:not(${selectItemCls}-option-disabled)`]: {
              color: token.optionSelectedColor,
              fontWeight: token.optionSelectedFontWeight,
              backgroundColor: token.optionSelectedBg,
              [`${selectItemCls}-option-state`]: {
                color: token.colorPrimary
              }
            },
            "&-disabled": {
              [`&${selectItemCls}-option-selected`]: {
                backgroundColor: token.colorBgContainerDisabled
              },
              color: token.colorTextDisabled,
              cursor: "not-allowed"
            },
            "&-grouped": {
              paddingInlineStart: token.controlPaddingHorizontal * 2
            }
          }
        }
      }
    },
    // Follow code may reuse in other components
    initSlideMotion(token, "slide-up"),
    initSlideMotion(token, "slide-down"),
    initMoveMotion(token, "move-up"),
    initMoveMotion(token, "move-down")
  ];
};

const FIXED_ITEM_MARGIN = 2;
const getSelectItemStyle = ({
  multipleSelectItemHeight,
  selectHeight,
  lineWidth: borderWidth
}) => {
  const selectItemDist = (selectHeight - multipleSelectItemHeight) / 2 - borderWidth;
  const selectItemMargin = Math.ceil(selectItemDist / 2);
  return [selectItemDist, selectItemMargin];
};
function genSizeStyle$3(token, suffix) {
  const { componentCls, iconCls } = token;
  const selectOverflowPrefixCls = `${componentCls}-selection-overflow`;
  const selectItemHeight = token.multipleSelectItemHeight;
  const [selectItemDist] = getSelectItemStyle(token);
  const suffixCls = suffix ? `${componentCls}-${suffix}` : "";
  return {
    [`${componentCls}-multiple${suffixCls}`]: {
      fontSize: token.fontSize,
      /**
       * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
       * may update to redesign with its align logic.
       */
      // =========================== Overflow ===========================
      [selectOverflowPrefixCls]: {
        position: "relative",
        display: "flex",
        flex: "auto",
        flexWrap: "wrap",
        maxWidth: "100%",
        "&-item": {
          flex: "none",
          alignSelf: "center",
          maxWidth: "100%",
          display: "inline-flex"
        }
      },
      // ========================= Selector =========================
      [`${componentCls}-selector`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        height: "100%",
        // Multiple is little different that horizontal is follow the vertical
        padding: `${selectItemDist - FIXED_ITEM_MARGIN}px ${FIXED_ITEM_MARGIN * 2}px`,
        borderRadius: token.borderRadius,
        [`${componentCls}-show-search&`]: {
          cursor: "text"
        },
        [`${componentCls}-disabled&`]: {
          background: token.multipleSelectorBgDisabled,
          cursor: "not-allowed"
        },
        "&:after": {
          display: "inline-block",
          width: 0,
          margin: `${FIXED_ITEM_MARGIN}px 0`,
          lineHeight: `${selectItemHeight}px`,
          visibility: "hidden",
          content: '"\\a0"'
        }
      },
      [`
        &${componentCls}-show-arrow ${componentCls}-selector,
        &${componentCls}-allow-clear ${componentCls}-selector
      `]: {
        paddingInlineEnd: token.fontSizeIcon + token.controlPaddingHorizontal
      },
      // ======================== Selections ========================
      [`${componentCls}-selection-item`]: {
        display: "flex",
        alignSelf: "center",
        flex: "none",
        boxSizing: "border-box",
        maxWidth: "100%",
        height: selectItemHeight,
        marginTop: FIXED_ITEM_MARGIN,
        marginBottom: FIXED_ITEM_MARGIN,
        lineHeight: `${selectItemHeight - token.lineWidth * 2}px`,
        background: token.multipleItemBg,
        border: `${token.lineWidth}px ${token.lineType} ${token.multipleItemBorderColor}`,
        borderRadius: token.borderRadiusSM,
        cursor: "default",
        transition: `font-size ${token.motionDurationSlow}, line-height ${token.motionDurationSlow}, height ${token.motionDurationSlow}`,
        marginInlineEnd: FIXED_ITEM_MARGIN * 2,
        paddingInlineStart: token.paddingXS,
        paddingInlineEnd: token.paddingXS / 2,
        [`${componentCls}-disabled&`]: {
          color: token.multipleItemColorDisabled,
          borderColor: token.multipleItemBorderColorDisabled,
          cursor: "not-allowed"
        },
        // It's ok not to do this, but 24px makes bottom narrow in view should adjust
        "&-content": {
          display: "inline-block",
          marginInlineEnd: token.paddingXS / 2,
          overflow: "hidden",
          whiteSpace: "pre",
          // fix whitespace wrapping. custom tags display all whitespace within.
          textOverflow: "ellipsis"
        },
        "&-remove": {
          ...resetIcon(),
          display: "inline-flex",
          alignItems: "center",
          color: token.colorIcon,
          fontWeight: "bold",
          fontSize: 10,
          lineHeight: "inherit",
          cursor: "pointer",
          [`> ${iconCls}`]: {
            verticalAlign: "-0.2em"
          },
          "&:hover": {
            color: token.colorIconHover
          }
        }
      },
      // ========================== Input ==========================
      [`${selectOverflowPrefixCls}-item + ${selectOverflowPrefixCls}-item`]: {
        [`${componentCls}-selection-search`]: {
          marginInlineStart: 0
        }
      },
      [`${selectOverflowPrefixCls}-item-suffix`]: {
        height: "100%"
      },
      [`${componentCls}-selection-search`]: {
        display: "inline-flex",
        position: "relative",
        maxWidth: "100%",
        marginInlineStart: token.inputPaddingHorizontalBase - selectItemDist,
        [`
          &-input,
          &-mirror
        `]: {
          height: selectItemHeight,
          fontFamily: token.fontFamily,
          lineHeight: `${selectItemHeight}px`,
          transition: `all ${token.motionDurationSlow}`
        },
        "&-input": {
          width: "100%",
          minWidth: 4.1
          // fix search cursor missing
        },
        "&-mirror": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: "auto",
          zIndex: 999,
          whiteSpace: "pre",
          // fix whitespace wrapping caused width calculation bug
          visibility: "hidden"
        }
      },
      // ======================= Placeholder =======================
      [`${componentCls}-selection-placeholder`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: token.inputPaddingHorizontalBase,
        insetInlineEnd: token.inputPaddingHorizontalBase,
        transform: "translateY(-50%)",
        transition: `all ${token.motionDurationSlow}`
      }
    }
  };
}
const genMultipleStyle = (token) => {
  const { componentCls } = token;
  const smallToken = merge(token, {
    selectHeight: token.controlHeightSM,
    multipleSelectItemHeight: token.controlHeightXS,
    borderRadius: token.borderRadiusSM,
    borderRadiusSM: token.borderRadiusXS
  });
  const largeToken = merge(token, {
    fontSize: token.fontSizeLG,
    selectHeight: token.controlHeightLG,
    multipleSelectItemHeight: token.multipleItemHeightLG,
    borderRadius: token.borderRadiusLG,
    borderRadiusSM: token.borderRadius
  });
  const [, smSelectItemMargin] = getSelectItemStyle(token);
  return [
    genSizeStyle$3(token),
    // ======================== Small ========================
    genSizeStyle$3(smallToken, "sm"),
    // Padding
    {
      [`${componentCls}-multiple${componentCls}-sm`]: {
        [`${componentCls}-selection-placeholder`]: {
          insetInline: token.controlPaddingHorizontalSM - token.lineWidth
        },
        [`${componentCls}-selection-search`]: {
          marginInlineStart: smSelectItemMargin
        }
      }
    },
    // ======================== Large ========================
    genSizeStyle$3(largeToken, "lg")
  ];
};

function genSizeStyle$2(token, suffix) {
  const { componentCls, inputPaddingHorizontalBase, borderRadius } = token;
  const selectHeightWithoutBorder = token.controlHeight - token.lineWidth * 2;
  const selectionItemPadding = Math.ceil(token.fontSize * 1.25);
  const suffixCls = suffix ? `${componentCls}-${suffix}` : "";
  return {
    [`${componentCls}-single${suffixCls}`]: {
      fontSize: token.fontSize,
      height: token.controlHeight,
      // ========================= Selector =========================
      [`${componentCls}-selector`]: {
        ...resetComponent(token),
        display: "flex",
        borderRadius,
        [`${componentCls}-selection-search`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: inputPaddingHorizontalBase,
          insetInlineEnd: inputPaddingHorizontalBase,
          bottom: 0,
          "&-input": {
            width: "100%"
          }
        },
        [`
          ${componentCls}-selection-item,
          ${componentCls}-selection-placeholder
        `]: {
          padding: 0,
          lineHeight: `${selectHeightWithoutBorder}px`,
          transition: `all ${token.motionDurationSlow}, visibility 0s`,
          alignSelf: "center"
        },
        [`${componentCls}-selection-placeholder`]: {
          transition: "none",
          pointerEvents: "none"
        },
        // For common baseline align
        [[
          "&:after",
          /* For '' value baseline align */
          `${componentCls}-selection-item:empty:after`,
          /* For undefined value baseline align */
          `${componentCls}-selection-placeholder:empty:after`
        ].join(",")]: {
          display: "inline-block",
          width: 0,
          visibility: "hidden",
          content: '"\\a0"'
        }
      },
      [`
        &${componentCls}-show-arrow ${componentCls}-selection-item,
        &${componentCls}-show-arrow ${componentCls}-selection-placeholder
      `]: {
        paddingInlineEnd: selectionItemPadding
      },
      // Opacity selection if open
      [`&${componentCls}-open ${componentCls}-selection-item`]: {
        color: token.colorTextPlaceholder
      },
      // ========================== Input ==========================
      // We only change the style of non-customize input which is only support by `combobox` mode.
      // Not customize
      [`&:not(${componentCls}-customize-input)`]: {
        [`${componentCls}-selector`]: {
          width: "100%",
          height: "100%",
          padding: `0 ${inputPaddingHorizontalBase}px`,
          [`${componentCls}-selection-search-input`]: {
            height: selectHeightWithoutBorder
          },
          "&:after": {
            lineHeight: `${selectHeightWithoutBorder}px`
          }
        }
      },
      [`&${componentCls}-customize-input`]: {
        [`${componentCls}-selector`]: {
          "&:after": {
            display: "none"
          },
          [`${componentCls}-selection-search`]: {
            position: "static",
            width: "100%"
          },
          [`${componentCls}-selection-placeholder`]: {
            position: "absolute",
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${inputPaddingHorizontalBase}px`,
            "&:after": {
              display: "none"
            }
          }
        }
      }
    }
  };
}
function genSingleStyle(token) {
  const { componentCls } = token;
  const inputPaddingHorizontalSM = token.controlPaddingHorizontalSM - token.lineWidth;
  return [
    genSizeStyle$2(token),
    // ======================== Small ========================
    // Shared
    genSizeStyle$2(
      merge(token, {
        controlHeight: token.controlHeightSM,
        borderRadius: token.borderRadiusSM
      }),
      "sm"
    ),
    // padding
    {
      [`${componentCls}-single${componentCls}-sm`]: {
        [`&:not(${componentCls}-customize-input)`]: {
          [`${componentCls}-selection-search`]: {
            insetInlineStart: inputPaddingHorizontalSM,
            insetInlineEnd: inputPaddingHorizontalSM
          },
          [`${componentCls}-selector`]: {
            padding: `0 ${inputPaddingHorizontalSM}px`
          },
          // With arrow should provides `padding-right` to show the arrow
          [`&${componentCls}-show-arrow ${componentCls}-selection-search`]: {
            insetInlineEnd: inputPaddingHorizontalSM + token.fontSize * 1.5
          },
          [`
            &${componentCls}-show-arrow ${componentCls}-selection-item,
            &${componentCls}-show-arrow ${componentCls}-selection-placeholder
          `]: {
            paddingInlineEnd: token.fontSize * 1.5
          }
        }
      }
    },
    // ======================== Large ========================
    // Shared
    genSizeStyle$2(
      merge(token, {
        controlHeight: token.singleItemHeightLG,
        fontSize: token.fontSizeLG,
        borderRadius: token.borderRadiusLG
      }),
      "lg"
    )
  ];
}

const genSelectorStyle = (token) => {
  const { componentCls, selectorBg } = token;
  return {
    position: "relative",
    backgroundColor: selectorBg,
    border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
    transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
    input: {
      cursor: "pointer"
    },
    [`${componentCls}-show-search&`]: {
      cursor: "text",
      input: {
        cursor: "auto",
        color: "inherit",
        height: "100%"
      }
    },
    [`${componentCls}-disabled&`]: {
      color: token.colorTextDisabled,
      background: token.colorBgContainerDisabled,
      cursor: "not-allowed",
      [`${componentCls}-multiple&`]: {
        background: token.multipleSelectorBgDisabled
      },
      input: {
        cursor: "not-allowed"
      }
    }
  };
};
const genStatusStyle$1 = (rootSelectCls, token, overwriteDefaultBorder = false) => {
  const { componentCls, borderHoverColor, outlineColor, ipassCls } = token;
  const overwriteStyle = overwriteDefaultBorder ? {
    [`${componentCls}-selector`]: {
      borderColor: borderHoverColor
    }
  } : {};
  return {
    [rootSelectCls]: {
      [`&:not(${componentCls}-disabled):not(${componentCls}-customize-input):not(${ipassCls}-pagination-size-changer)`]: {
        ...overwriteStyle,
        [`${componentCls}-focused& ${componentCls}-selector`]: {
          borderColor: borderHoverColor,
          boxShadow: `0 0 0 ${token.controlOutlineWidth}px ${outlineColor}`,
          outline: 0
        },
        [`&:hover ${componentCls}-selector`]: {
          borderColor: borderHoverColor
        }
      }
    }
  };
};
const getSearchInputWithoutBorderStyle = (token) => {
  const { componentCls } = token;
  return {
    [`${componentCls}-selection-search-input`]: {
      margin: 0,
      padding: 0,
      background: "transparent",
      border: "none",
      outline: "none",
      appearance: "none",
      fontFamily: "inherit",
      "&::-webkit-search-cancel-button": {
        display: "none",
        "-webkit-appearance": "none"
      }
    }
  };
};
const genBaseStyle$7 = (token) => {
  const { ipassCls, componentCls, inputPaddingHorizontalBase, iconCls } = token;
  return {
    [componentCls]: {
      ...resetComponent(token),
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      [`&:not(${componentCls}-customize-input) ${componentCls}-selector`]: {
        ...genSelectorStyle(token),
        ...getSearchInputWithoutBorderStyle(token)
      },
      // [`&:not(&-disabled):hover ${selectCls}-selector`]: {
      //   ...genHoverStyle(token),
      // },
      // ======================== Selection ========================
      [`${componentCls}-selection-item`]: {
        flex: 1,
        fontWeight: "normal",
        position: "relative",
        userSelect: "none",
        ...textEllipsis,
        [`> ${ipassCls}-typography`]: {
          display: "inline"
        }
      },
      // ======================= Placeholder =======================
      [`${componentCls}-selection-placeholder`]: {
        ...textEllipsis,
        flex: 1,
        color: token.colorTextPlaceholder,
        pointerEvents: "none"
      },
      // ========================== Arrow ==========================
      [`${componentCls}-arrow`]: {
        ...resetIcon(),
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: inputPaddingHorizontalBase,
        height: token.fontSizeIcon,
        marginTop: -token.fontSizeIcon / 2,
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        lineHeight: 1,
        textAlign: "center",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        [iconCls]: {
          verticalAlign: "top",
          transition: `transform ${token.motionDurationSlow}`,
          "> svg": {
            verticalAlign: "top"
          },
          [`&:not(${componentCls}-suffix)`]: {
            pointerEvents: "auto"
          }
        },
        [`${componentCls}-disabled &`]: {
          cursor: "not-allowed"
        },
        "> *:not(:last-child)": {
          marginInlineEnd: 8
          // FIXME: magic
        }
      },
      // ========================== Clear ==========================
      [`${componentCls}-clear`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: inputPaddingHorizontalBase,
        zIndex: 1,
        display: "inline-block",
        width: token.fontSizeIcon * 2,
        height: token.fontSizeIcon * 2,
        marginTop: -token.fontSizeIcon,
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        fontStyle: "normal",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "none",
        background: token.clearBg,
        cursor: "pointer",
        opacity: 0,
        transition: `color ${token.motionDurationMid} ease, opacity ${token.motionDurationSlow} ease`,
        textRendering: "auto",
        "&:before": {
          display: "block"
        },
        "&:hover": {
          color: token.colorTextTertiary
        }
      },
      "&:hover": {
        [`${componentCls}-clear`]: {
          opacity: 1
        }
      }
    },
    // ========================= Feedback ==========================
    [`${componentCls}-has-feedback`]: {
      [`${componentCls}-clear`]: {
        insetInlineEnd: inputPaddingHorizontalBase + token.fontSize + token.paddingXS
      }
    }
  };
};
const genSelectStyle = (token) => {
  const { componentCls } = token;
  return [
    {
      [componentCls]: {
        // ==================== BorderLess ====================
        [`&-borderless ${componentCls}-selector`]: {
          backgroundColor: `transparent !important`,
          borderColor: `transparent !important`,
          boxShadow: `none !important`
        },
        // ==================== In Form ====================
        [`&${componentCls}-in-form-item`]: {
          width: "100%"
        }
      }
    },
    // =====================================================
    // ==                       LTR                       ==
    // =====================================================
    // Base
    genBaseStyle$7(token),
    // Single
    genSingleStyle(token),
    // Multiple
    genMultipleStyle(token),
    // Dropdown
    genSingleStyle$1(token),
    // =====================================================
    // ==                     Status                      ==
    // =====================================================
    genStatusStyle$1(
      componentCls,
      merge(token, {
        borderHoverColor: token.colorPrimaryHover,
        outlineColor: token.controlOutline
      })
    ),
    genStatusStyle$1(
      `${componentCls}-status-error`,
      merge(token, {
        borderHoverColor: token.colorErrorHover,
        outlineColor: token.colorErrorOutline
      }),
      true
    ),
    genStatusStyle$1(
      `${componentCls}-status-warning`,
      merge(token, {
        borderHoverColor: token.colorWarningHover,
        outlineColor: token.colorWarningOutline
      }),
      true
    ),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    genCompactItemStyle(token, {
      borderElCls: `${componentCls}-selector`,
      focusElCls: `${componentCls}-focused`
    })
  ];
};
const useStyle$s = genComponentStyleHook(
  "Select",
  (token, { rootPrefixCls }) => {
    const selectToken = merge(token, {
      rootPrefixCls,
      inputPaddingHorizontalBase: token.paddingSM - 1,
      multipleSelectItemHeight: token.multipleItemHeight,
      selectHeight: token.controlHeight
    });
    return [genSelectStyle(selectToken)];
  },
  (token) => {
    const {
      fontSize,
      lineHeight,
      controlHeight,
      controlPaddingHorizontal,
      zIndexPopupBase,
      colorText,
      fontWeightStrong,
      controlItemBgActive,
      controlItemBgHover,
      colorBgContainer,
      colorFillSecondary,
      controlHeightLG,
      controlHeightSM,
      colorBgContainerDisabled,
      colorTextDisabled
    } = token;
    return {
      zIndexPopup: zIndexPopupBase + 50,
      optionSelectedColor: colorText,
      optionSelectedFontWeight: fontWeightStrong,
      optionSelectedBg: controlItemBgActive,
      optionActiveBg: controlItemBgHover,
      optionPadding: `${(controlHeight - fontSize * lineHeight) / 2}px ${controlPaddingHorizontal}px`,
      optionFontSize: fontSize,
      optionLineHeight: lineHeight,
      optionHeight: controlHeight,
      selectorBg: colorBgContainer,
      clearBg: colorBgContainer,
      singleItemHeightLG: controlHeightLG,
      multipleItemBg: colorFillSecondary,
      multipleItemBorderColor: "transparent",
      multipleItemHeight: controlHeightSM,
      multipleItemHeightLG: controlHeight,
      multipleSelectorBgDisabled: colorBgContainerDisabled,
      multipleItemColorDisabled: colorTextDisabled,
      multipleItemBorderColorDisabled: "transparent"
    };
  }
);

const getBuiltInPlacements = (popupOverflow) => {
  const htmlRegion = popupOverflow === "scroll" ? "scroll" : "visible";
  const sharedConfig = {
    overflow: {
      adjustX: true,
      adjustY: true,
      shiftY: true
    },
    htmlRegion,
    dynamicInset: true
  };
  return {
    bottomLeft: {
      ...sharedConfig,
      points: ["tl", "bl"],
      offset: [0, 4]
    },
    bottomRight: {
      ...sharedConfig,
      points: ["tr", "br"],
      offset: [0, 4]
    },
    topLeft: {
      ...sharedConfig,
      points: ["bl", "tl"],
      offset: [0, -4]
    },
    topRight: {
      ...sharedConfig,
      points: ["br", "tr"],
      offset: [0, -4]
    }
  };
};
function useBuiltinPlacements(buildInPlacements, popupOverflow) {
  return buildInPlacements || getBuiltInPlacements(popupOverflow);
}

function useShowArrow(suffixIcon, showArrow) {
  return showArrow !== void 0 ? showArrow : suffixIcon !== null;
}

function useIcons({
  suffixIcon,
  clearIcon,
  menuItemSelectedIcon,
  removeIcon,
  loading,
  multiple,
  hasFeedback,
  prefixCls,
  showSuffixIcon,
  feedbackIcon,
  showArrow,
  componentName
}) {
  const mergedClearIcon = clearIcon ?? /* @__PURE__ */ jsx(CloseIcon, {});
  const getSuffixIconNode = (arrowIcon) => {
    if (suffixIcon === null && !hasFeedback && !showArrow) {
      return null;
    }
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      showSuffixIcon !== false && arrowIcon,
      hasFeedback && feedbackIcon
    ] });
  };
  let mergedSuffixIcon = null;
  if (suffixIcon !== void 0) {
    mergedSuffixIcon = getSuffixIconNode(suffixIcon);
  } else if (loading) {
    mergedSuffixIcon = getSuffixIconNode(/* @__PURE__ */ jsx(CircularProgress, {}));
  } else {
    const iconCls = `${prefixCls}-suffix`;
    mergedSuffixIcon = ({ open, showSearch }) => {
      if (open && showSearch) {
        return getSuffixIconNode(/* @__PURE__ */ jsx(SearchIcon, { className: iconCls }));
      }
      return getSuffixIconNode(/* @__PURE__ */ jsx(ExpandMoreIcon, { className: iconCls }));
    };
  }
  let mergedItemIcon = null;
  if (menuItemSelectedIcon !== void 0) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = /* @__PURE__ */ jsx(CheckIcon, {});
  } else {
    mergedItemIcon = null;
  }
  let mergedRemoveIcon = null;
  if (removeIcon !== void 0) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = /* @__PURE__ */ jsx(CloseIcon, {});
  }
  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon
  };
}

const SECRET_COMBOBOX_MODE_DO_NOT_USE = "SECRET_COMBOBOX_MODE_DO_NOT_USE";
const InternalSelect = ({
  prefixCls: customizePrefixCls,
  bordered = true,
  className,
  rootClassName,
  getPopupContainer,
  popupClassName,
  dropdownClassName,
  listHeight = 256,
  placement,
  listItemHeight = 24,
  size: customizeSize,
  disabled: customDisabled,
  notFoundContent,
  status: customStatus,
  builtinPlacements,
  dropdownMatchSelectWidth,
  popupMatchSelectWidth,
  style,
  allowClear,
  ...props
}, ref) => {
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    renderEmpty,
    virtual,
    popupMatchSelectWidth: contextPopupMatchSelectWidth,
    popupOverflow,
    select
  } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("select", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const { compactSize, compactItemClassnames } = useCompactItemContext(prefixCls);
  const [wrapSSR, hashId] = useStyle$s(prefixCls);
  const mode = React.useMemo(() => {
    const { mode: m } = props;
    if (m === "combobox") {
      return void 0;
    }
    if (m === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
      return "combobox";
    }
    return m;
  }, [props.mode]);
  const isMultiple = mode === "multiple" || mode === "tags";
  const showSuffixIcon = useShowArrow(props.suffixIcon, props.showArrow);
  const mergedPopupMatchSelectWidth = popupMatchSelectWidth ?? dropdownMatchSelectWidth ?? contextPopupMatchSelectWidth;
  const {
    status: contextStatus,
    hasFeedback,
    isFormItemInput,
    feedbackIcon
  } = React.useContext(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  let mergedNotFound;
  if (notFoundContent !== void 0) {
    mergedNotFound = notFoundContent;
  } else if (mode === "combobox") {
    mergedNotFound = null;
  } else {
    mergedNotFound = renderEmpty?.("Select") || /* @__PURE__ */ jsx(DefaultRenderEmpty, { componentName: "Select" });
  }
  const { suffixIcon, itemIcon, removeIcon, clearIcon } = useIcons({
    ...props,
    multiple: isMultiple,
    hasFeedback,
    feedbackIcon,
    showSuffixIcon,
    prefixCls,
    showArrow: props.showArrow,
    componentName: "Select"
  });
  const mergedAllowClear = allowClear === true ? { clearIcon } : allowClear;
  const selectProps = omit(props, [
    "suffixIcon",
    "itemIcon"
  ]);
  const rcSelectRtlDropdownClassName = classNames(
    popupClassName || dropdownClassName,
    rootClassName,
    hashId
  );
  const mergedSize = useSize((ctx) => customizeSize ?? compactSize ?? ctx);
  const disabled = React.useContext(DisabledContext);
  const mergedDisabled = customDisabled ?? disabled;
  const mergedClassName = classNames(
    {
      [`${prefixCls}-lg`]: mergedSize === "large",
      [`${prefixCls}-sm`]: mergedSize === "small",
      [`${prefixCls}-borderless`]: !bordered,
      [`${prefixCls}-in-form-item`]: isFormItemInput
    },
    getStatusClassNames(prefixCls, mergedStatus, hasFeedback),
    compactItemClassnames,
    select?.className,
    className,
    rootClassName,
    hashId
  );
  const memoPlacement = React.useMemo(() => {
    if (placement !== void 0) {
      return placement;
    }
    return "bottomLeft";
  }, [placement]);
  const mergedBuiltinPlacements = useBuiltinPlacements(builtinPlacements, popupOverflow);
  return wrapSSR(
    /* @__PURE__ */ jsx(
      RcSelect,
      {
        ref,
        virtual,
        showSearch: select?.showSearch,
        ...selectProps,
        style: { ...select?.style, ...style },
        dropdownMatchSelectWidth: mergedPopupMatchSelectWidth,
        builtinPlacements: mergedBuiltinPlacements,
        transitionName: getTransitionName(rootPrefixCls, "slide-up", props.transitionName),
        listHeight,
        listItemHeight,
        mode,
        prefixCls,
        placement: memoPlacement,
        direction: "ltr",
        suffixIcon,
        menuItemSelectedIcon: itemIcon,
        removeIcon,
        allowClear: mergedAllowClear,
        notFoundContent: mergedNotFound,
        className: mergedClassName,
        getPopupContainer: getPopupContainer || getContextPopupContainer,
        dropdownClassName: rcSelectRtlDropdownClassName,
        disabled: mergedDisabled
      }
    )
  );
};
const Select = React.forwardRef(InternalSelect);
const PurePanel$7 = genPurePanel(Select);
Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
Select.Option = Option;
Select.OptGroup = OptGroup;
Select._InternalPanelDoNotUseOrYouWillBeFired = PurePanel$7;

const YearSelectOffset = 10;
const YearSelectTotal = 20;
function YearSelect(props) {
  const { fullscreen, validRange, generateConfig, locale, prefixCls, value, onChange, divRef } = props;
  const year = generateConfig.getYear(value || generateConfig.getNow());
  let start = year - YearSelectOffset;
  let end = start + YearSelectTotal;
  if (validRange) {
    start = generateConfig.getYear(validRange[0]);
    end = generateConfig.getYear(validRange[1]) + 1;
  }
  const suffix = locale && locale.year === "年" ? "年" : "";
  const options = [];
  for (let index = start; index < end; index++) {
    options.push({ label: `${index}${suffix}`, value: index });
  }
  return /* @__PURE__ */ jsx(
    Select,
    {
      size: fullscreen ? void 0 : "small",
      options,
      value: year,
      className: `${prefixCls}-year-select`,
      onChange: (numYear) => {
        let newDate = generateConfig.setYear(value, numYear);
        if (validRange) {
          const [startDate, endDate] = validRange;
          const newYear = generateConfig.getYear(newDate);
          const newMonth = generateConfig.getMonth(newDate);
          if (newYear === generateConfig.getYear(endDate) && newMonth > generateConfig.getMonth(endDate)) {
            newDate = generateConfig.setMonth(newDate, generateConfig.getMonth(endDate));
          }
          if (newYear === generateConfig.getYear(startDate) && newMonth < generateConfig.getMonth(startDate)) {
            newDate = generateConfig.setMonth(newDate, generateConfig.getMonth(startDate));
          }
        }
        onChange(newDate);
      },
      getPopupContainer: () => divRef.current
    }
  );
}
function MonthSelect(props) {
  const { prefixCls, fullscreen, validRange, value, generateConfig, locale, onChange, divRef } = props;
  const month = generateConfig.getMonth(value || generateConfig.getNow());
  let start = 0;
  let end = 11;
  if (validRange) {
    const [rangeStart, rangeEnd] = validRange;
    const currentYear = generateConfig.getYear(value);
    if (generateConfig.getYear(rangeEnd) === currentYear) {
      end = generateConfig.getMonth(rangeEnd);
    }
    if (generateConfig.getYear(rangeStart) === currentYear) {
      start = generateConfig.getMonth(rangeStart);
    }
  }
  const months = locale.shortMonths || generateConfig.locale.getShortMonths(locale.locale);
  const options = [];
  for (let index = start; index <= end; index += 1) {
    options.push({
      label: months[index],
      value: index
    });
  }
  return /* @__PURE__ */ jsx(
    Select,
    {
      size: fullscreen ? void 0 : "small",
      className: `${prefixCls}-month-select`,
      value: month,
      options,
      onChange: (newMonth) => {
        onChange(generateConfig.setMonth(value, newMonth));
      },
      getPopupContainer: () => divRef.current
    }
  );
}
function ModeSwitch(props) {
  const { prefixCls, locale, mode, fullscreen, onModeChange } = props;
  return /* @__PURE__ */ jsxs(
    Group$2,
    {
      onChange: ({ target: { value } }) => {
        onModeChange(value);
      },
      value: mode,
      size: fullscreen ? void 0 : "small",
      className: `${prefixCls}-mode-switch`,
      children: [
        /* @__PURE__ */ jsx(Button, { value: "month", children: locale.month }),
        /* @__PURE__ */ jsx(Button, { value: "year", children: locale.year })
      ]
    }
  );
}
function CalendarHeader(props) {
  const { prefixCls, fullscreen, mode, onChange, onModeChange } = props;
  const divRef = React.useRef(null);
  const formItemInputContext = useContext(FormItemInputContext);
  const mergedFormItemInputContext = useMemo$1(
    () => ({
      ...formItemInputContext,
      isFormItemInput: false
    }),
    [formItemInputContext]
  );
  const sharedProps = {
    ...props,
    fullscreen,
    divRef
  };
  return /* @__PURE__ */ jsxs("div", { className: `${prefixCls}-header`, ref: divRef, children: [
    /* @__PURE__ */ jsxs(FormItemInputContext.Provider, { value: mergedFormItemInputContext, children: [
      /* @__PURE__ */ jsx(
        YearSelect,
        {
          ...sharedProps,
          onChange: (v) => {
            onChange(v, "year");
          }
        }
      ),
      mode === "month" && /* @__PURE__ */ jsx(
        MonthSelect,
        {
          ...sharedProps,
          onChange: (v) => {
            onChange(v, "month");
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx(ModeSwitch, { ...sharedProps, onModeChange })
  ] });
}

const genPlaceholderStyle = (color) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color,
    userSelect: "none"
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
});
const genHoverStyle = (token) => ({
  borderColor: token.hoverBorderColor
});
const genActiveStyle = (token) => ({
  borderColor: token.activeBorderColor,
  boxShadow: token.activeShadow,
  outline: 0
});
const genDisabledStyle = (token) => ({
  color: token.colorTextDisabled,
  backgroundColor: token.colorBgContainerDisabled,
  borderColor: token.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "&:hover": {
    ...genHoverStyle(merge(token, { hoverBorderColor: token.colorBorder }))
  }
});
const genInputLargeStyle = (token) => {
  const { paddingBlockLG, fontSizeLG, lineHeightLG, borderRadiusLG, paddingInlineLG } = token;
  return {
    padding: `${paddingBlockLG}px ${paddingInlineLG}px`,
    fontSize: fontSizeLG,
    lineHeight: lineHeightLG,
    borderRadius: borderRadiusLG
  };
};
const genInputSmallStyle = (token) => ({
  padding: `${token.paddingBlockSM}px ${token.paddingInlineSM}px`,
  borderRadius: token.borderRadiusSM
});
const genStatusStyle = (token, parentCls) => {
  const {
    componentCls,
    colorError,
    colorWarning,
    errorActiveShadow,
    warningActiveShadow,
    colorErrorBorderHover,
    colorWarningBorderHover
  } = token;
  return {
    [`&-status-error:not(${parentCls}-disabled):not(${parentCls}-borderless)${parentCls}`]: {
      borderColor: colorError,
      "&:hover": {
        borderColor: colorErrorBorderHover
      },
      "&:focus, &-focused": {
        ...genActiveStyle(
          merge(token, {
            activeBorderColor: colorError,
            activeShadow: errorActiveShadow
          })
        )
      },
      [`${componentCls}-prefix, ${componentCls}-suffix`]: {
        color: colorError
      }
    },
    [`&-status-warning:not(${parentCls}-disabled):not(${parentCls}-borderless)${parentCls}`]: {
      borderColor: colorWarning,
      "&:hover": {
        borderColor: colorWarningBorderHover
      },
      "&:focus, &-focused": {
        ...genActiveStyle(
          merge(token, {
            activeBorderColor: colorWarning,
            activeShadow: warningActiveShadow
          })
        )
      },
      [`${componentCls}-prefix, ${componentCls}-suffix`]: {
        color: colorWarning
      }
    }
  };
};
const genBasicInputStyle = (token) => ({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${token.paddingBlock}px ${token.paddingInline}px`,
  color: token.colorText,
  fontSize: token.fontSize,
  lineHeight: token.lineHeight,
  backgroundColor: token.colorBgContainer,
  backgroundImage: "none",
  borderWidth: token.lineWidth,
  borderStyle: token.lineType,
  borderColor: token.colorBorder,
  borderRadius: token.borderRadius,
  transition: `all ${token.motionDurationMid}`,
  ...genPlaceholderStyle(token.colorTextPlaceholder),
  "&:hover": {
    ...genHoverStyle(token)
  },
  "&:focus, &-focused": {
    ...genActiveStyle(token)
  },
  "&-disabled, &[disabled]": {
    ...genDisabledStyle(token)
  },
  "&-borderless": {
    "&, &:hover, &:focus, &-focused, &-disabled, &[disabled]": {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none"
    }
  },
  // Reset height for `textarea`s
  "textarea&": {
    maxWidth: "100%",
    // prevent textarea resize from coming out of its container
    height: "auto",
    minHeight: token.controlHeight,
    lineHeight: token.lineHeight,
    verticalAlign: "bottom",
    transition: `all ${token.motionDurationSlow}, height 0s`,
    resize: "vertical"
  },
  // Size
  "&-lg": {
    ...genInputLargeStyle(token)
  },
  "&-sm": {
    ...genInputSmallStyle(token)
  }
});
const genInputGroupStyle = (token) => {
  const { componentCls, ipassCls } = token;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    [`&[class*='col-']`]: {
      paddingInlineEnd: token.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${componentCls}, &-lg > ${componentCls}-group-addon`]: {
      ...genInputLargeStyle(token)
    },
    [`&-sm ${componentCls}, &-sm > ${componentCls}-group-addon`]: {
      ...genInputSmallStyle(token)
    },
    [`&-lg ${ipassCls}-select-single ${ipassCls}-select-selector`]: {
      height: token.controlHeightLG
    },
    [`&-sm ${ipassCls}-select-single ${ipassCls}-select-selector`]: {
      height: token.controlHeightSM
    },
    [`> ${componentCls}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${componentCls}-group`]: {
      [`&-addon, &-wrap`]: {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${token.paddingInline}px`,
        color: token.colorText,
        fontWeight: "normal",
        fontSize: token.fontSize,
        textAlign: "center",
        backgroundColor: token.colorFillAlter,
        border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
        borderRadius: token.borderRadius,
        transition: `all ${token.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${ipassCls}-select`]: {
          margin: `-${token.paddingBlock + 1}px -${token.paddingInline}px`,
          [`&${ipassCls}-select-single:not(${ipassCls}-select-customize-input):not(${ipassCls}-pagination-size-changer)`]: {
            [`${ipassCls}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${token.lineWidth}px ${token.lineType} transparent`,
              boxShadow: "none"
            }
          },
          "&-open, &-focused": {
            [`${ipassCls}-select-selector`]: {
              color: token.colorPrimary
            }
          }
        },
        [`${ipassCls}-cascader-picker`]: {
          margin: `-9px -${token.paddingInline}px`,
          backgroundColor: "transparent",
          [`${ipassCls}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    },
    [`${componentCls}`]: {
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${componentCls}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${componentCls}:first-child, ${componentCls}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${ipassCls}-select ${ipassCls}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${componentCls}-affix-wrapper`]: {
      [`&:not(:first-child) ${componentCls}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${componentCls}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${componentCls}:last-child, ${componentCls}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${ipassCls}-select ${ipassCls}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${componentCls}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${componentCls}-search &`]: {
          borderStartStartRadius: token.borderRadius,
          borderEndStartRadius: token.borderRadius
        }
      },
      [`&:not(:first-child), ${componentCls}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${componentCls}-group-compact`]: {
      display: "block",
      ...clearFix(),
      [`${componentCls}-group-addon, ${componentCls}-group-wrap, > ${componentCls}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: token.lineWidth,
          "&:hover": {
            zIndex: 1
          },
          "&:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-block",
        float: "none",
        verticalAlign: "top",
        borderRadius: 0
      },
      [`
        & > ${componentCls}-affix-wrapper,
        & > ${componentCls}-number-affix-wrapper,
        & > ${ipassCls}-picker-range
      `]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: -token.lineWidth,
        borderInlineEndWidth: token.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [`${componentCls}`]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${ipassCls}-select > ${ipassCls}-select-selector,
      & > ${ipassCls}-select-auto-complete ${componentCls},
      & > ${ipassCls}-cascader-picker ${componentCls},
      & > ${componentCls}-group-wrapper ${componentCls}`]: {
        borderInlineEndWidth: token.lineWidth,
        borderRadius: 0,
        "&:hover": {
          zIndex: 1
        },
        "&:focus": {
          zIndex: 1
        }
      },
      [`& > ${ipassCls}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${ipassCls}-select > ${ipassCls}-select-arrow`]: {
        zIndex: 1
      },
      [`& > *:first-child,
      & > ${ipassCls}-select:first-child > ${ipassCls}-select-selector,
      & > ${ipassCls}-select-auto-complete:first-child ${componentCls},
      & > ${ipassCls}-cascader-picker:first-child ${componentCls}`]: {
        borderStartStartRadius: token.borderRadius,
        borderEndStartRadius: token.borderRadius
      },
      [`& > *:last-child,
      & > ${ipassCls}-select:last-child > ${ipassCls}-select-selector,
      & > ${ipassCls}-cascader-picker:last-child ${componentCls},
      & > ${ipassCls}-cascader-picker-focused:last-child ${componentCls}`]: {
        borderInlineEndWidth: token.lineWidth,
        borderStartEndRadius: token.borderRadius,
        borderEndEndRadius: token.borderRadius
      },
      [`& > ${ipassCls}-select-auto-complete ${componentCls}`]: {
        verticalAlign: "top"
      },
      [`${componentCls}-group-wrapper + ${componentCls}-group-wrapper`]: {
        marginInlineStart: -token.lineWidth,
        [`${componentCls}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${componentCls}-group-wrapper:not(:last-child)`]: {
        [`&${componentCls}-search > ${componentCls}-group`]: {
          [`& > ${componentCls}-group-addon > ${componentCls}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${componentCls}`]: {
            borderStartStartRadius: token.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: token.borderRadius
          }
        }
      }
    }
  };
};
const genInputStyle = (token) => {
  const { componentCls, controlHeightSM, lineWidth } = token;
  const FIXED_CHROME_COLOR_HEIGHT = 16;
  const colorSmallPadding = (controlHeightSM - lineWidth * 2 - FIXED_CHROME_COLOR_HEIGHT) / 2;
  return {
    [componentCls]: {
      ...resetComponent(token),
      ...genBasicInputStyle(token),
      ...genStatusStyle(token, componentCls),
      '&[type="color"]': {
        height: token.controlHeight,
        [`&${componentCls}-lg`]: {
          height: token.controlHeightLG
        },
        [`&${componentCls}-sm`]: {
          height: controlHeightSM,
          paddingTop: colorSmallPadding,
          paddingBottom: colorSmallPadding
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        "-webkit-appearance": "none"
      }
    }
  };
};
const genAllowClearStyle = (token) => {
  const { componentCls } = token;
  return {
    // ========================= Input =========================
    [`${componentCls}-clear-icon`]: {
      lineHeight: 0,
      margin: 0,
      color: token.colorTextQuaternary,
      fontSize: token.fontSizeIcon,
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${token.motionDurationSlow}`,
      "&:hover": {
        color: token.colorTextTertiary
      },
      "&:active": {
        color: token.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${token.inputAffixPadding}px`
      }
    }
  };
};
const genAffixStyle = (token) => {
  const {
    componentCls,
    inputAffixPadding,
    colorTextDescription,
    motionDurationSlow,
    colorIcon,
    colorIconHover,
    iconCls
  } = token;
  return {
    [`${componentCls}-affix-wrapper`]: {
      ...genBasicInputStyle(token),
      display: "inline-flex",
      [`&:not(${componentCls}-affix-wrapper-disabled):hover`]: {
        ...genHoverStyle(token),
        zIndex: 1,
        [`${componentCls}-search-with-button &`]: {
          zIndex: 0
        }
      },
      "&-focused, &:focus": {
        zIndex: 1
      },
      "&-disabled": {
        [`${componentCls}[disabled]`]: {
          background: "transparent"
        }
      },
      [`> input${componentCls}`]: {
        padding: 0,
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        "&::-ms-reveal": {
          display: "none"
        },
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [`${componentCls}`]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: token.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: colorTextDescription
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: token.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: inputAffixPadding
        },
        "&-suffix": {
          marginInlineStart: inputAffixPadding
        }
      },
      ...genAllowClearStyle(token),
      // Password
      [`${iconCls}${componentCls}-password-icon`]: {
        color: colorIcon,
        cursor: "pointer",
        transition: `all ${motionDurationSlow}`,
        "&:hover": {
          color: colorIconHover
        }
      },
      // status
      ...genStatusStyle(token, `${componentCls}-affix-wrapper`)
    }
  };
};
const genGroupStyle = (token) => {
  const { componentCls, colorError, colorWarning, borderRadiusLG, borderRadiusSM } = token;
  return {
    [`${componentCls}-group`]: {
      // Style for input-group: input with label, with button or dropdown...
      ...resetComponent(token),
      ...genInputGroupStyle(token),
      "&-wrapper": {
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        // Size
        "&-lg": {
          [`${componentCls}-group-addon`]: {
            borderRadius: borderRadiusLG,
            fontSize: token.fontSizeLG
          }
        },
        "&-sm": {
          [`${componentCls}-group-addon`]: {
            borderRadius: borderRadiusSM
          }
        },
        // Status
        "&-status-error": {
          [`${componentCls}-group-addon`]: {
            color: colorError,
            borderColor: colorError
          }
        },
        "&-status-warning": {
          [`${componentCls}-group-addon`]: {
            color: colorWarning,
            borderColor: colorWarning
          }
        },
        "&-disabled": {
          [`${componentCls}-group-addon`]: {
            ...genDisabledStyle(token)
          }
        },
        // Fix the issue of using icons in Space Compact mode
        [`&:not(${componentCls}-compact-first-item):not(${componentCls}-compact-last-item)${componentCls}-compact-item`]: {
          [`${componentCls}, ${componentCls}-group-addon`]: {
            borderRadius: 0
          }
        },
        [`&:not(${componentCls}-compact-last-item)${componentCls}-compact-first-item`]: {
          [`${componentCls}, ${componentCls}-group-addon`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        [`&:not(${componentCls}-compact-first-item)${componentCls}-compact-last-item`]: {
          [`${componentCls}, ${componentCls}-group-addon`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        }
      }
    }
  };
};
const genSearchInputStyle = (token) => {
  const { componentCls, ipassCls } = token;
  const searchPrefixCls = `${componentCls}-search`;
  return {
    [searchPrefixCls]: {
      [`${componentCls}`]: {
        "&:hover, &:focus": {
          borderColor: token.colorPrimaryHover,
          [`+ ${componentCls}-group-addon ${searchPrefixCls}-button:not(${ipassCls}-btn-primary)`]: {
            borderInlineStartColor: token.colorPrimaryHover
          }
        }
      },
      [`${componentCls}-affix-wrapper`]: {
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      [`${componentCls}-lg`]: {
        lineHeight: token.lineHeightLG - 2e-4
      },
      [`> ${componentCls}-group`]: {
        [`> ${componentCls}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${searchPrefixCls}-button`]: {
            paddingTop: 0,
            paddingBottom: 0,
            borderStartStartRadius: 0,
            borderStartEndRadius: token.borderRadius,
            borderEndEndRadius: token.borderRadius,
            borderEndStartRadius: 0,
            boxShadow: "none"
          },
          [`${searchPrefixCls}-button:not(${ipassCls}-btn-primary)`]: {
            color: token.colorTextDescription,
            "&:hover": {
              color: token.colorPrimaryHover
            },
            "&:active": {
              color: token.colorPrimaryActive
            },
            [`&${ipassCls}-btn-loading::before`]: {
              insetInlineStart: 0,
              insetInlineEnd: 0,
              insetBlockStart: 0,
              insetBlockEnd: 0
            }
          }
        }
      },
      [`${searchPrefixCls}-button`]: {
        height: token.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`&-large ${searchPrefixCls}-button`]: {
        height: token.controlHeightLG
      },
      [`&-small ${searchPrefixCls}-button`]: {
        height: token.controlHeightSM
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${componentCls}-compact-item`]: {
        [`&:not(${componentCls}-compact-last-item)`]: {
          [`${componentCls}-group-addon`]: {
            [`${componentCls}-search-button`]: {
              marginInlineEnd: -token.lineWidth,
              borderRadius: 0
            }
          }
        },
        [`&:not(${componentCls}-compact-first-item)`]: {
          [`${componentCls},${componentCls}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${componentCls}-group-addon ${componentCls}-search-button,
        > ${componentCls},
        ${componentCls}-affix-wrapper`]: {
          "&:hover,&:focus,&:active": {
            zIndex: 2
          }
        },
        [`> ${componentCls}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
};
const genTextAreaStyle = (token) => {
  const { componentCls, paddingLG } = token;
  const textareaPrefixCls = `${componentCls}-textarea`;
  return {
    [textareaPrefixCls]: {
      position: "relative",
      "&-show-count": {
        [`> ${componentCls}`]: {
          height: "100%"
        },
        [`${componentCls}-data-count`]: {
          position: "absolute",
          bottom: -token.fontSize * token.lineHeight,
          insetInlineEnd: 0,
          color: token.colorTextDescription,
          whiteSpace: "nowrap",
          pointerEvents: "none"
        }
      },
      "&-allow-clear": {
        [`> ${componentCls}`]: {
          paddingInlineEnd: paddingLG
        }
      },
      [`&-affix-wrapper${textareaPrefixCls}-has-feedback`]: {
        [`${componentCls}`]: {
          paddingInlineEnd: paddingLG
        }
      },
      [`&-affix-wrapper${componentCls}-affix-wrapper`]: {
        padding: 0,
        [`> textarea${componentCls}`]: {
          fontSize: "inherit",
          border: "none",
          outline: "none",
          "&:focus": {
            boxShadow: "none !important"
          }
        },
        [`${componentCls}-suffix`]: {
          margin: 0,
          "> *:not(:last-child)": {
            marginInline: 0
          },
          // Clear Icon
          [`${componentCls}-clear-icon`]: {
            position: "absolute",
            insetInlineEnd: token.paddingXS,
            insetBlockStart: token.paddingXS
          },
          // Feedback Icon
          [`${textareaPrefixCls}-suffix`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: token.paddingInline,
            bottom: 0,
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            margin: "auto",
            pointerEvents: "none"
          }
        }
      }
    }
  };
};
function initInputToken(token) {
  return merge(token, {
    inputAffixPadding: token.paddingXXS
  });
}
const initComponentToken$1 = (token) => {
  const {
    controlHeight,
    fontSize,
    lineHeight,
    lineWidth,
    controlHeightSM,
    controlHeightLG,
    fontSizeLG,
    lineHeightLG,
    paddingSM,
    controlPaddingHorizontalSM,
    controlPaddingHorizontal,
    colorFillAlter,
    colorPrimaryHover,
    controlOutlineWidth,
    controlOutline,
    colorErrorOutline,
    colorWarningOutline
  } = token;
  return {
    paddingBlock: Math.max(
      Math.round((controlHeight - fontSize * lineHeight) / 2 * 10) / 10 - lineWidth,
      0
    ),
    paddingBlockSM: Math.max(
      Math.round((controlHeightSM - fontSize * lineHeight) / 2 * 10) / 10 - lineWidth,
      0
    ),
    paddingBlockLG: Math.ceil((controlHeightLG - fontSizeLG * lineHeightLG) / 2 * 10) / 10 - lineWidth,
    paddingInline: paddingSM - lineWidth,
    paddingInlineSM: controlPaddingHorizontalSM - lineWidth,
    paddingInlineLG: controlPaddingHorizontal - lineWidth,
    addonBg: colorFillAlter,
    activeBorderColor: colorPrimaryHover,
    hoverBorderColor: colorPrimaryHover,
    activeShadow: `0 0 0 ${controlOutlineWidth}px ${controlOutline}`,
    errorActiveShadow: `0 0 0 ${controlOutlineWidth}px ${colorErrorOutline}`,
    warningActiveShadow: `0 0 0 ${controlOutlineWidth}px ${colorWarningOutline}`
  };
};
const useStyle$r = genComponentStyleHook(
  "Input",
  (token) => {
    const inputToken = merge(token, initInputToken(token));
    return [
      genInputStyle(inputToken),
      genTextAreaStyle(inputToken),
      genAffixStyle(inputToken),
      genGroupStyle(inputToken),
      genSearchInputStyle(inputToken),
      // =====================================================
      // ==             Space Compact                       ==
      // =====================================================
      genCompactItemStyle(inputToken)
    ];
  },
  initComponentToken$1
);

const genPikerPadding = (token, inputHeight, fontSize, paddingHorizontal) => {
  const { lineHeight } = token;
  const fontHeight = Math.floor(fontSize * lineHeight) + 2;
  const paddingTop = Math.max((inputHeight - fontHeight) / 2, 0);
  const paddingBottom = Math.max(inputHeight - fontHeight - paddingTop, 0);
  return {
    padding: `${paddingTop}px ${paddingHorizontal}px ${paddingBottom}px`
  };
};
const genPickerCellInnerStyle = (token) => {
  const {
    componentCls,
    pickerCellCls,
    pickerCellInnerCls,
    cellHeight,
    motionDurationSlow,
    borderRadiusSM,
    motionDurationMid,
    cellHoverBg,
    lineWidth,
    lineType,
    colorPrimary,
    cellActiveWithRangeBg,
    colorTextLightSolid,
    controlHeightSM,
    cellRangeBorderColor,
    pickerCellBorderGap,
    cellHoverWithRangeBg,
    cellWidth,
    colorTextDisabled,
    cellBgDisabled
  } = token;
  return {
    "&::before": {
      position: "absolute",
      top: "50%",
      insetInlineStart: 0,
      insetInlineEnd: 0,
      zIndex: 1,
      height: cellHeight,
      transform: "translateY(-50%)",
      transition: `all ${motionDurationSlow}`,
      content: '""'
    },
    // >>> Default
    [pickerCellInnerCls]: {
      position: "relative",
      zIndex: 2,
      display: "inline-block",
      minWidth: cellHeight,
      height: cellHeight,
      lineHeight: `${cellHeight}px`,
      borderRadius: borderRadiusSM,
      transition: `background ${motionDurationMid}, border ${motionDurationMid}`
    },
    [`&-range-hover-start, &-range-hover-end`]: {
      [pickerCellInnerCls]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    // >>> Hover
    [`&:hover:not(${pickerCellCls}-in-view),
    &:hover:not(${pickerCellCls}-selected):not(${pickerCellCls}-range-start):not(${pickerCellCls}-range-end):not(${pickerCellCls}-range-hover-start):not(${pickerCellCls}-range-hover-end)`]: {
      [pickerCellInnerCls]: {
        background: cellHoverBg
      }
    },
    // >>> Today
    [`&-in-view${pickerCellCls}-today ${pickerCellInnerCls}`]: {
      "&::before": {
        position: "absolute",
        top: 0,
        insetInlineEnd: 0,
        bottom: 0,
        insetInlineStart: 0,
        zIndex: 1,
        border: `${lineWidth}px ${lineType} ${colorPrimary}`,
        borderRadius: borderRadiusSM,
        content: '""'
      }
    },
    // >>> In Range
    [`&-in-view${pickerCellCls}-in-range`]: {
      position: "relative",
      "&::before": {
        background: cellActiveWithRangeBg
      }
    },
    // >>> Selected
    [`&-in-view${pickerCellCls}-selected ${pickerCellInnerCls},
      &-in-view${pickerCellCls}-range-start ${pickerCellInnerCls},
      &-in-view${pickerCellCls}-range-end ${pickerCellInnerCls}`]: {
      color: colorTextLightSolid,
      background: colorPrimary
    },
    [`&-in-view${pickerCellCls}-range-start:not(${pickerCellCls}-range-start-single),
      &-in-view${pickerCellCls}-range-end:not(${pickerCellCls}-range-end-single)`]: {
      "&::before": {
        background: cellActiveWithRangeBg
      }
    },
    [`&-in-view${pickerCellCls}-range-start::before`]: {
      insetInlineStart: "50%"
    },
    [`&-in-view${pickerCellCls}-range-end::before`]: {
      insetInlineEnd: "50%"
    },
    // >>> Range Hover
    [`&-in-view${pickerCellCls}-range-hover-start:not(${pickerCellCls}-in-range):not(${pickerCellCls}-range-start):not(${pickerCellCls}-range-end),
      &-in-view${pickerCellCls}-range-hover-end:not(${pickerCellCls}-in-range):not(${pickerCellCls}-range-start):not(${pickerCellCls}-range-end),
      &-in-view${pickerCellCls}-range-hover-start${pickerCellCls}-range-start-single,
      &-in-view${pickerCellCls}-range-hover-start${pickerCellCls}-range-start${pickerCellCls}-range-end${pickerCellCls}-range-end-near-hover,
      &-in-view${pickerCellCls}-range-hover-end${pickerCellCls}-range-start${pickerCellCls}-range-end${pickerCellCls}-range-start-near-hover,
      &-in-view${pickerCellCls}-range-hover-end${pickerCellCls}-range-end-single,
      &-in-view${pickerCellCls}-range-hover:not(${pickerCellCls}-in-range)`]: {
      "&::after": {
        position: "absolute",
        top: "50%",
        zIndex: 0,
        height: controlHeightSM,
        borderTop: `${lineWidth}px dashed ${cellRangeBorderColor}`,
        borderBottom: `${lineWidth}px dashed ${cellRangeBorderColor}`,
        transform: "translateY(-50%)",
        transition: `all ${motionDurationSlow}`,
        content: '""'
      }
    },
    // Add space for stash
    [`&-range-hover-start::after,
      &-range-hover-end::after,
      &-range-hover::after`]: {
      insetInlineEnd: 0,
      insetInlineStart: pickerCellBorderGap
    },
    // Hover with in range
    [`&-in-view${pickerCellCls}-in-range${pickerCellCls}-range-hover::before,
      &-in-view${pickerCellCls}-in-range${pickerCellCls}-range-hover-start::before,
      &-in-view${pickerCellCls}-in-range${pickerCellCls}-range-hover-end::before,
      &-in-view${pickerCellCls}-range-start${pickerCellCls}-range-hover::before,
      &-in-view${pickerCellCls}-range-end${pickerCellCls}-range-hover::before,
      &-in-view${pickerCellCls}-range-start:not(${pickerCellCls}-range-start-single)${pickerCellCls}-range-hover-start::before,
      &-in-view${pickerCellCls}-range-end:not(${pickerCellCls}-range-end-single)${pickerCellCls}-range-hover-end::before,
      ${componentCls}-panel
      > :not(${componentCls}-date-panel)
      &-in-view${pickerCellCls}-in-range${pickerCellCls}-range-hover-start::before,
      ${componentCls}-panel
      > :not(${componentCls}-date-panel)
      &-in-view${pickerCellCls}-in-range${pickerCellCls}-range-hover-end::before`]: {
      background: cellHoverWithRangeBg
    },
    // range start border-radius
    [`&-in-view${pickerCellCls}-range-start:not(${pickerCellCls}-range-start-single):not(${pickerCellCls}-range-end) ${pickerCellInnerCls}`]: {
      borderStartStartRadius: borderRadiusSM,
      borderEndStartRadius: borderRadiusSM,
      borderStartEndRadius: 0,
      borderEndEndRadius: 0
    },
    // range end border-radius
    [`&-in-view${pickerCellCls}-range-end:not(${pickerCellCls}-range-end-single):not(${pickerCellCls}-range-start) ${pickerCellInnerCls}`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      borderStartEndRadius: borderRadiusSM,
      borderEndEndRadius: borderRadiusSM
    },
    [`&-range-hover${pickerCellCls}-range-end::after`]: {
      insetInlineStart: "50%"
    },
    // Edge start
    [`tr > &-in-view${pickerCellCls}-range-hover:first-child::after,
      tr > &-in-view${pickerCellCls}-range-hover-end:first-child::after,
      &-in-view${pickerCellCls}-start${pickerCellCls}-range-hover-edge-start${pickerCellCls}-range-hover-edge-start-near-range::after,
      &-in-view${pickerCellCls}-range-hover-edge-start:not(${pickerCellCls}-range-hover-edge-start-near-range)::after,
      &-in-view${pickerCellCls}-range-hover-start::after`]: {
      insetInlineStart: (cellWidth - cellHeight) / 2,
      borderInlineStart: `${lineWidth}px dashed ${cellRangeBorderColor}`,
      borderStartStartRadius: borderRadiusSM,
      borderEndStartRadius: borderRadiusSM
    },
    // Edge end
    [`tr > &-in-view${pickerCellCls}-range-hover:last-child::after,
      tr > &-in-view${pickerCellCls}-range-hover-start:last-child::after,
      &-in-view${pickerCellCls}-end${pickerCellCls}-range-hover-edge-end${pickerCellCls}-range-hover-edge-end-near-range::after,
      &-in-view${pickerCellCls}-range-hover-edge-end:not(${pickerCellCls}-range-hover-edge-end-near-range)::after,
      &-in-view${pickerCellCls}-range-hover-end::after`]: {
      insetInlineEnd: (cellWidth - cellHeight) / 2,
      borderInlineEnd: `${lineWidth}px dashed ${cellRangeBorderColor}`,
      borderStartEndRadius: borderRadiusSM,
      borderEndEndRadius: borderRadiusSM
    },
    // >>> Disabled
    "&-disabled": {
      color: colorTextDisabled,
      pointerEvents: "none",
      [pickerCellInnerCls]: {
        background: "transparent"
      },
      "&::before": {
        background: cellBgDisabled
      }
    },
    [`&-disabled${pickerCellCls}-today ${pickerCellInnerCls}::before`]: {
      borderColor: colorTextDisabled
    }
  };
};
const genPanelStyle = (token) => {
  const {
    componentCls,
    pickerCellCls,
    pickerCellInnerCls,
    pickerYearMonthCellWidth,
    pickerControlIconSize,
    cellWidth,
    paddingSM,
    paddingXS,
    paddingXXS,
    colorBgContainer,
    lineWidth,
    lineType,
    borderRadiusLG,
    colorPrimary,
    colorTextHeading,
    colorSplit,
    pickerControlIconBorderWidth,
    colorIcon,
    textHeight,
    motionDurationMid,
    colorIconHover,
    fontWeightStrong,
    cellHeight,
    pickerCellPaddingVertical,
    colorTextDisabled,
    colorText,
    fontSize,
    cellHoverWithRangeBg,
    motionDurationSlow,
    withoutTimeCellHeight,
    pickerQuarterPanelContentHeight,
    colorLink,
    colorLinkActive,
    colorLinkHover,
    cellRangeBorderColor,
    borderRadiusSM,
    colorTextLightSolid,
    cellHoverBg,
    timeColumnHeight,
    timeColumnWidth,
    timeCellHeight,
    controlItemBgActive,
    marginXXS,
    pickerDatePanelPaddingHorizontal
  } = token;
  const pickerPanelWidth = cellWidth * 7 + pickerDatePanelPaddingHorizontal * 2;
  const commonHoverCellFixedDistance = (pickerPanelWidth - paddingXS * 2) / 3 - pickerYearMonthCellWidth - paddingSM;
  const quarterHoverCellFixedDistance = (pickerPanelWidth - paddingXS * 2) / 4 - pickerYearMonthCellWidth;
  return {
    [componentCls]: {
      "&-panel": {
        display: "inline-flex",
        flexDirection: "column",
        textAlign: "center",
        background: colorBgContainer,
        border: `${lineWidth}px ${lineType} ${colorSplit}`,
        borderRadius: borderRadiusLG,
        outline: "none",
        "&-focused": {
          borderColor: colorPrimary
        }
      },
      // ========================================================
      // =                     Shared Panel                     =
      // ========================================================
      [`&-decade-panel,
        &-year-panel,
        &-quarter-panel,
        &-month-panel,
        &-week-panel,
        &-date-panel,
        &-time-panel`]: {
        display: "flex",
        flexDirection: "column",
        width: pickerPanelWidth
      },
      // ======================= Header =======================
      "&-header": {
        display: "flex",
        padding: `0 ${paddingXS}px`,
        color: colorTextHeading,
        borderBottom: `${lineWidth}px ${lineType} ${colorSplit}`,
        "> *": {
          flex: "none"
        },
        button: {
          padding: 0,
          color: colorIcon,
          lineHeight: `${textHeight}px`,
          background: "transparent",
          border: 0,
          cursor: "pointer",
          transition: `color ${motionDurationMid}`,
          fontSize: "inherit"
        },
        "> button": {
          minWidth: "1.6em",
          fontSize,
          "&:hover": {
            color: colorIconHover
          }
        },
        "&-view": {
          flex: "auto",
          fontWeight: fontWeightStrong,
          lineHeight: `${textHeight}px`,
          button: {
            color: "inherit",
            fontWeight: "inherit",
            verticalAlign: "top",
            "&:not(:first-child)": {
              marginInlineStart: paddingXS
            },
            "&:hover": {
              color: colorPrimary
            }
          }
        }
      },
      // Arrow button
      [`&-prev-icon,
        &-next-icon,
        &-super-prev-icon,
        &-super-next-icon`]: {
        position: "relative",
        display: "inline-block",
        width: pickerControlIconSize,
        height: pickerControlIconSize,
        "&::before": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          display: "inline-block",
          width: pickerControlIconSize,
          height: pickerControlIconSize,
          border: `0 solid currentcolor`,
          borderBlockStartWidth: pickerControlIconBorderWidth,
          borderBlockEndWidth: 0,
          borderInlineStartWidth: pickerControlIconBorderWidth,
          borderInlineEndWidth: 0,
          content: '""'
        }
      },
      [`&-super-prev-icon,
        &-super-next-icon`]: {
        "&::after": {
          position: "absolute",
          top: Math.ceil(pickerControlIconSize / 2),
          insetInlineStart: Math.ceil(pickerControlIconSize / 2),
          display: "inline-block",
          width: pickerControlIconSize,
          height: pickerControlIconSize,
          border: "0 solid currentcolor",
          borderBlockStartWidth: pickerControlIconBorderWidth,
          borderBlockEndWidth: 0,
          borderInlineStartWidth: pickerControlIconBorderWidth,
          borderInlineEndWidth: 0,
          content: '""'
        }
      },
      [`&-prev-icon,
        &-super-prev-icon`]: {
        transform: "rotate(-45deg)"
      },
      [`&-next-icon,
        &-super-next-icon`]: {
        transform: "rotate(135deg)"
      },
      // ======================== Body ========================
      "&-content": {
        width: "100%",
        tableLayout: "fixed",
        borderCollapse: "collapse",
        "th, td": {
          position: "relative",
          minWidth: cellHeight,
          fontWeight: "normal"
        },
        th: {
          height: cellHeight + pickerCellPaddingVertical * 2,
          color: colorText,
          verticalAlign: "middle"
        }
      },
      "&-cell": {
        padding: `${pickerCellPaddingVertical}px 0`,
        color: colorTextDisabled,
        cursor: "pointer",
        // In view
        "&-in-view": {
          color: colorText
        },
        ...genPickerCellInnerStyle(token)
      },
      // DatePanel only
      [`&-date-panel ${componentCls}-cell-in-view${componentCls}-cell-in-range${componentCls}-cell-range-hover-start ${pickerCellInnerCls},
        &-date-panel ${componentCls}-cell-in-view${componentCls}-cell-in-range${componentCls}-cell-range-hover-end ${pickerCellInnerCls}`]: {
        "&::after": {
          position: "absolute",
          top: 0,
          bottom: 0,
          zIndex: -1,
          background: cellHoverWithRangeBg,
          transition: `all ${motionDurationSlow}`,
          content: '""'
        }
      },
      [`&-date-panel
        ${componentCls}-cell-in-view${componentCls}-cell-in-range${componentCls}-cell-range-hover-start
        ${pickerCellInnerCls}::after`]: {
        insetInlineEnd: -(cellWidth - cellHeight) / 2,
        insetInlineStart: 0
      },
      [`&-date-panel ${componentCls}-cell-in-view${componentCls}-cell-in-range${componentCls}-cell-range-hover-end ${pickerCellInnerCls}::after`]: {
        insetInlineEnd: 0,
        insetInlineStart: -(cellWidth - cellHeight) / 2
      },
      // Hover with range start & end
      [`&-range-hover${componentCls}-range-start::after`]: {
        insetInlineEnd: "50%"
      },
      [`&-decade-panel,
        &-year-panel,
        &-quarter-panel,
        &-month-panel`]: {
        [`${componentCls}-content`]: {
          height: withoutTimeCellHeight * 4
        },
        [pickerCellInnerCls]: {
          padding: `0 ${paddingXS}px`
        }
      },
      "&-quarter-panel": {
        [`${componentCls}-content`]: {
          height: pickerQuarterPanelContentHeight
        },
        // Quarter Panel Special Style
        [`${componentCls}-cell-range-hover-start::after`]: {
          insetInlineStart: quarterHoverCellFixedDistance,
          borderInlineStart: `${lineWidth}px dashed ${cellRangeBorderColor}`,
          [`${componentCls}-panel-rtl &`]: {
            insetInlineEnd: quarterHoverCellFixedDistance,
            borderInlineEnd: `${lineWidth}px dashed ${cellRangeBorderColor}`
          }
        },
        [`${componentCls}-cell-range-hover-end::after`]: {
          insetInlineEnd: quarterHoverCellFixedDistance,
          borderInlineEnd: `${lineWidth}px dashed ${cellRangeBorderColor}`,
          [`${componentCls}-panel-rtl &`]: {
            insetInlineStart: quarterHoverCellFixedDistance,
            borderInlineStart: `${lineWidth}px dashed ${cellRangeBorderColor}`
          }
        }
      },
      // ======================== Footer ========================
      [`&-panel ${componentCls}-footer`]: {
        borderTop: `${lineWidth}px ${lineType} ${colorSplit}`
      },
      "&-footer": {
        width: "min-content",
        minWidth: "100%",
        lineHeight: `${textHeight - 2 * lineWidth}px`,
        textAlign: "center",
        "&-extra": {
          padding: `0 ${paddingSM}px`,
          lineHeight: `${textHeight - 2 * lineWidth}px`,
          textAlign: "start",
          "&:not(:last-child)": {
            borderBottom: `${lineWidth}px ${lineType} ${colorSplit}`
          }
        }
      },
      "&-now": {
        textAlign: "start"
      },
      "&-today-btn": {
        color: colorLink,
        "&:hover": {
          color: colorLinkHover
        },
        "&:active": {
          color: colorLinkActive
        },
        [`&${componentCls}-today-btn-disabled`]: {
          color: colorTextDisabled,
          cursor: "not-allowed"
        }
      },
      // ========================================================
      // =                       Special                        =
      // ========================================================
      // ===================== Decade Panel =====================
      "&-decade-panel": {
        [pickerCellInnerCls]: {
          padding: `0 ${paddingXS / 2}px`
        },
        [`${componentCls}-cell::before`]: {
          display: "none"
        }
      },
      // ============= Year & Quarter & Month Panel =============
      [`&-year-panel,
        &-quarter-panel,
        &-month-panel`]: {
        [`${componentCls}-body`]: {
          padding: `0 ${paddingXS}px`
        },
        [pickerCellInnerCls]: {
          width: pickerYearMonthCellWidth
        },
        [`${componentCls}-cell-range-hover-start::after`]: {
          borderStartStartRadius: borderRadiusSM,
          borderEndStartRadius: borderRadiusSM,
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
          [`${componentCls}-panel-rtl &`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0,
            borderStartEndRadius: borderRadiusSM,
            borderEndEndRadius: borderRadiusSM
          }
        },
        [`${componentCls}-cell-range-hover-end::after`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
          borderStartEndRadius: borderRadiusSM,
          borderEndEndRadius: borderRadiusSM,
          [`${componentCls}-panel-rtl &`]: {
            borderStartStartRadius: borderRadiusSM,
            borderEndStartRadius: borderRadiusSM,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        }
      },
      [`&-year-panel,
        &-month-panel`]: {
        [`${componentCls}-cell-range-hover-start::after`]: {
          insetInlineStart: commonHoverCellFixedDistance,
          borderInlineStart: `${lineWidth}px dashed ${cellRangeBorderColor}`,
          [`${componentCls}-panel-rtl &`]: {
            insetInlineEnd: commonHoverCellFixedDistance,
            borderInlineEnd: `${lineWidth}px dashed ${cellRangeBorderColor}`
          }
        },
        [`${componentCls}-cell-range-hover-end::after`]: {
          insetInlineEnd: commonHoverCellFixedDistance,
          borderInlineEnd: `${lineWidth}px dashed ${cellRangeBorderColor}`,
          [`${componentCls}-panel-rtl &`]: {
            insetInlineStart: commonHoverCellFixedDistance,
            borderInlineStart: `${lineWidth}px dashed ${cellRangeBorderColor}`
          }
        }
      },
      // ====================== Week Panel ======================
      "&-week-panel": {
        [`${componentCls}-body`]: {
          padding: `${paddingXS}px ${paddingSM}px`
        },
        // Clear cell style
        [`${componentCls}-cell`]: {
          [`&:hover ${pickerCellInnerCls},
            &-selected ${pickerCellInnerCls},
            ${pickerCellInnerCls}`]: {
            background: "transparent !important"
          }
        },
        "&-row": {
          td: {
            "&:before": {
              transition: `background ${motionDurationMid}`
            },
            "&:first-child:before": {
              borderStartStartRadius: borderRadiusSM,
              borderEndStartRadius: borderRadiusSM
            },
            "&:last-child:before": {
              borderStartEndRadius: borderRadiusSM,
              borderEndEndRadius: borderRadiusSM
            }
          },
          [`&:hover td`]: {
            "&:before": {
              background: cellHoverBg
            }
          },
          [`&-range-start td,
            &-range-end td,
            &-selected td`]: {
            // Rise priority to override hover style
            [`&${pickerCellCls}`]: {
              "&:before": {
                background: colorPrimary
              },
              [`&${componentCls}-cell-week`]: {
                color: new TinyColor(colorTextLightSolid).setAlpha(0.5).toHexString()
              },
              [pickerCellInnerCls]: {
                color: colorTextLightSolid
              }
            }
          },
          [`&-range-hover td:before`]: {
            background: controlItemBgActive
          }
        }
      },
      // ====================== Date Panel ======================
      "&-date-panel": {
        [`${componentCls}-body`]: {
          padding: `${paddingXS}px ${pickerDatePanelPaddingHorizontal}px`
        },
        [`${componentCls}-content`]: {
          width: cellWidth * 7,
          th: {
            width: cellWidth,
            boxSizing: "border-box",
            padding: 0
          }
        }
      },
      // ==================== Datetime Panel ====================
      "&-datetime-panel": {
        display: "flex",
        [`${componentCls}-time-panel`]: {
          borderInlineStart: `${lineWidth}px ${lineType} ${colorSplit}`
        },
        [`${componentCls}-date-panel,
          ${componentCls}-time-panel`]: {
          transition: `opacity ${motionDurationSlow}`
        },
        // Keyboard
        "&-active": {
          [`${componentCls}-date-panel,
            ${componentCls}-time-panel`]: {
            opacity: 0.3,
            "&-active": {
              opacity: 1
            }
          }
        }
      },
      // ====================== Time Panel ======================
      "&-time-panel": {
        width: "auto",
        minWidth: "auto",
        direction: "ltr",
        [`${componentCls}-content`]: {
          display: "flex",
          flex: "auto",
          height: timeColumnHeight
        },
        "&-column": {
          flex: "1 0 auto",
          width: timeColumnWidth,
          margin: `${paddingXXS}px 0`,
          padding: 0,
          overflowY: "hidden",
          textAlign: "start",
          listStyle: "none",
          transition: `background ${motionDurationMid}`,
          overflowX: "hidden",
          "&::after": {
            display: "block",
            height: timeColumnHeight - timeCellHeight,
            content: '""'
          },
          "&:not(:first-child)": {
            borderInlineStart: `${lineWidth}px ${lineType} ${colorSplit}`
          },
          "&-active": {
            background: new TinyColor(controlItemBgActive).setAlpha(0.2).toHexString()
          },
          "&:hover": {
            overflowY: "auto"
          },
          "> li": {
            margin: 0,
            padding: 0,
            [`&${componentCls}-time-panel-cell`]: {
              marginInline: marginXXS,
              [`${componentCls}-time-panel-cell-inner`]: {
                display: "block",
                width: timeColumnWidth - 2 * marginXXS,
                height: timeCellHeight,
                margin: 0,
                paddingBlock: 0,
                paddingInlineEnd: 0,
                paddingInlineStart: (timeColumnWidth - timeCellHeight) / 2,
                color: colorText,
                lineHeight: `${timeCellHeight}px`,
                borderRadius: borderRadiusSM,
                cursor: "pointer",
                transition: `background ${motionDurationMid}`,
                "&:hover": {
                  background: cellHoverBg
                }
              },
              "&-selected": {
                [`${componentCls}-time-panel-cell-inner`]: {
                  background: controlItemBgActive
                }
              },
              "&-disabled": {
                [`${componentCls}-time-panel-cell-inner`]: {
                  color: colorTextDisabled,
                  background: "transparent",
                  cursor: "not-allowed"
                }
              }
            }
          }
        }
      },
      [`&-datetime-panel ${componentCls}-time-panel-column:after`]: {
        height: timeColumnHeight - timeCellHeight + paddingXXS * 2
      }
    }
  };
};
const genPickerStatusStyle = (token) => {
  const {
    componentCls,
    colorBgContainer,
    colorError,
    errorActiveShadow,
    colorWarning,
    warningActiveShadow
  } = token;
  return {
    [`${componentCls}:not(${componentCls}-disabled)`]: {
      [`&${componentCls}-status-error`]: {
        "&, &:not([disabled]):hover": {
          backgroundColor: colorBgContainer,
          borderColor: colorError
        },
        [`&${componentCls}-focused, &:focus`]: {
          ...genActiveStyle(
            merge(token, {
              activeBorderColor: colorError,
              activeShadow: errorActiveShadow
            })
          )
        },
        [`${componentCls}-active-bar`]: {
          background: colorError
        }
      },
      [`&${componentCls}-status-warning`]: {
        "&, &:not([disabled]):hover": {
          backgroundColor: colorBgContainer,
          borderColor: colorWarning
        },
        [`&${componentCls}-focused, &:focus`]: {
          ...genActiveStyle(
            merge(token, {
              activeBorderColor: colorWarning,
              activeShadow: warningActiveShadow
            })
          )
        },
        [`${componentCls}-active-bar`]: {
          background: colorWarning
        }
      }
    }
  };
};
const genPickerStyle = (token) => {
  const {
    componentCls,
    ipassCls,
    controlHeight,
    fontSize,
    paddingInline,
    colorBgContainer,
    lineWidth,
    lineType,
    colorBorder,
    borderRadius,
    motionDurationMid,
    colorBgContainerDisabled,
    colorTextDisabled,
    colorTextPlaceholder,
    controlHeightLG,
    fontSizeLG,
    controlHeightSM,
    paddingInlineSM,
    paddingXS,
    marginXS,
    colorTextDescription,
    lineWidthBold,
    lineHeight,
    colorPrimary,
    motionDurationSlow,
    zIndexPopup,
    paddingXXS,
    paddingSM,
    textHeight,
    cellActiveWithRangeBg,
    colorPrimaryBorder,
    sizePopupArrow,
    borderRadiusXS,
    borderRadiusOuter,
    colorBgElevated,
    borderRadiusLG,
    boxShadowSecondary,
    borderRadiusSM,
    colorSplit,
    cellHoverBg,
    presetsWidth,
    presetsMaxWidth,
    boxShadowPopoverArrow,
    colorTextQuaternary
  } = token;
  return [
    {
      [componentCls]: {
        ...resetComponent(token),
        ...genPikerPadding(token, controlHeight, fontSize, paddingInline),
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        background: colorBgContainer,
        lineHeight: 1,
        border: `${lineWidth}px ${lineType} ${colorBorder}`,
        borderRadius,
        transition: `border ${motionDurationMid}, box-shadow ${motionDurationMid}`,
        "&:hover, &-focused": {
          ...genHoverStyle(token)
        },
        "&-focused": {
          ...genActiveStyle(token)
        },
        [`&${componentCls}-disabled`]: {
          background: colorBgContainerDisabled,
          borderColor: colorBorder,
          cursor: "not-allowed",
          [`${componentCls}-suffix`]: {
            color: colorTextQuaternary
          }
        },
        [`&${componentCls}-borderless`]: {
          backgroundColor: "transparent !important",
          borderColor: "transparent !important",
          boxShadow: "none !important"
        },
        // ======================== Input =========================
        [`${componentCls}-input`]: {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          width: "100%",
          "> input": {
            ...genBasicInputStyle(token),
            flex: "auto",
            // Fix Firefox flex not correct:
            minWidth: 1,
            height: "auto",
            padding: 0,
            background: "transparent",
            border: 0,
            borderRadius: 0,
            fontFamily: "inherit",
            "&:focus": {
              boxShadow: "none"
            },
            "&[disabled]": {
              background: "transparent"
            }
          },
          "&:hover": {
            [`${componentCls}-clear`]: {
              opacity: 1
            }
          },
          "&-placeholder": {
            "> input": {
              color: colorTextPlaceholder
            }
          }
        },
        // Size
        "&-large": {
          ...genPikerPadding(token, controlHeightLG, fontSizeLG, paddingInline),
          [`${componentCls}-input > input`]: {
            fontSize: fontSizeLG
          }
        },
        "&-small": {
          ...genPikerPadding(token, controlHeightSM, fontSize, paddingInlineSM)
        },
        [`${componentCls}-suffix`]: {
          display: "flex",
          flex: "none",
          alignSelf: "center",
          marginInlineStart: paddingXS / 2,
          color: colorTextDisabled,
          lineHeight: 1,
          pointerEvents: "none",
          "> *": {
            verticalAlign: "top",
            "&:not(:last-child)": {
              marginInlineEnd: marginXS
            }
          }
        },
        [`${componentCls}-clear`]: {
          position: "absolute",
          top: "50%",
          insetInlineEnd: 0,
          color: colorTextDisabled,
          lineHeight: 1,
          background: colorBgContainer,
          transform: "translateY(-50%)",
          cursor: "pointer",
          opacity: 0,
          transition: `opacity ${motionDurationMid}, color ${motionDurationMid}`,
          "> *": {
            verticalAlign: "top"
          },
          "&:hover": {
            color: colorTextDescription
          }
        },
        [`${componentCls}-separator`]: {
          position: "relative",
          display: "inline-block",
          width: "1.25rem",
          height: "1.25rem",
          color: colorTextDisabled,
          fontSize: "1.25rem",
          verticalAlign: "top",
          cursor: "default",
          [`${componentCls}-focused &`]: {
            color: colorTextDescription
          },
          [`${componentCls}-range-separator &`]: {
            [`${componentCls}-disabled &`]: {
              cursor: "not-allowed"
            }
          }
        },
        // ======================== Range =========================
        "&-range": {
          position: "relative",
          display: "inline-flex",
          // Clear
          [`${componentCls}-clear`]: {
            insetInlineEnd: paddingInline
          },
          "&:hover": {
            [`${componentCls}-clear`]: {
              opacity: 1
            }
          },
          // Active bar
          [`${componentCls}-active-bar`]: {
            bottom: -lineWidth,
            height: lineWidthBold,
            marginInlineStart: paddingInline,
            background: colorPrimary,
            opacity: 0,
            transition: `all ${motionDurationSlow} ease-out`,
            pointerEvents: "none"
          },
          [`&${componentCls}-focused`]: {
            [`${componentCls}-active-bar`]: {
              opacity: 1
            }
          },
          [`${componentCls}-range-separator`]: {
            alignItems: "center",
            padding: `0 ${paddingXS}px`,
            lineHeight: 1
          },
          [`&${componentCls}-small`]: {
            [`${componentCls}-clear`]: {
              insetInlineEnd: paddingInlineSM
            },
            [`${componentCls}-active-bar`]: {
              marginInlineStart: paddingInlineSM
            }
          }
        },
        // ======================= Dropdown =======================
        "&-dropdown": {
          ...resetComponent(token),
          ...genPanelStyle(token),
          position: "absolute",
          // Fix incorrect position of picker popup
          top: -9999,
          left: {
            _skip_check_: true,
            value: -9999
          },
          zIndex: zIndexPopup,
          [`&${componentCls}-dropdown-hidden`]: {
            display: "none"
          },
          [`&${componentCls}-dropdown-placement-bottomLeft`]: {
            [`${componentCls}-range-arrow`]: {
              top: 0,
              display: "block",
              transform: "translateY(-100%)"
            }
          },
          [`&${componentCls}-dropdown-placement-topLeft`]: {
            [`${componentCls}-range-arrow`]: {
              bottom: 0,
              display: "block",
              transform: "translateY(100%) rotate(180deg)"
            }
          },
          [`&${ipassCls}-slide-up-enter${ipassCls}-slide-up-enter-active${componentCls}-dropdown-placement-topLeft,
          &${ipassCls}-slide-up-enter${ipassCls}-slide-up-enter-active${componentCls}-dropdown-placement-topRight,
          &${ipassCls}-slide-up-appear${ipassCls}-slide-up-appear-active${componentCls}-dropdown-placement-topLeft,
          &${ipassCls}-slide-up-appear${ipassCls}-slide-up-appear-active${componentCls}-dropdown-placement-topRight`]: {
            animationName: slideDownIn
          },
          [`&${ipassCls}-slide-up-enter${ipassCls}-slide-up-enter-active${componentCls}-dropdown-placement-bottomLeft,
          &${ipassCls}-slide-up-enter${ipassCls}-slide-up-enter-active${componentCls}-dropdown-placement-bottomRight,
          &${ipassCls}-slide-up-appear${ipassCls}-slide-up-appear-active${componentCls}-dropdown-placement-bottomLeft,
          &${ipassCls}-slide-up-appear${ipassCls}-slide-up-appear-active${componentCls}-dropdown-placement-bottomRight`]: {
            animationName: slideUpIn
          },
          [`&${ipassCls}-slide-up-leave${ipassCls}-slide-up-leave-active${componentCls}-dropdown-placement-topLeft,
          &${ipassCls}-slide-up-leave${ipassCls}-slide-up-leave-active${componentCls}-dropdown-placement-topRight`]: {
            animationName: slideDownOut
          },
          [`&${ipassCls}-slide-up-leave${ipassCls}-slide-up-leave-active${componentCls}-dropdown-placement-bottomLeft,
          &${ipassCls}-slide-up-leave${ipassCls}-slide-up-leave-active${componentCls}-dropdown-placement-bottomRight`]: {
            animationName: slideUpOut
          },
          // Time picker with additional style
          [`${componentCls}-panel > ${componentCls}-time-panel`]: {
            paddingTop: paddingXXS
          },
          // ======================== Ranges ========================
          [`${componentCls}-ranges`]: {
            marginBottom: 0,
            padding: `${paddingXXS}px ${paddingSM}px`,
            overflow: "hidden",
            lineHeight: `${textHeight - 2 * lineWidth - paddingXS / 2}px`,
            textAlign: "start",
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
            "> li": {
              display: "inline-block"
            },
            [`${componentCls}-preset > ${ipassCls}-tag-blue`]: {
              color: colorPrimary,
              background: cellActiveWithRangeBg,
              borderColor: colorPrimaryBorder,
              cursor: "pointer"
            },
            [`${componentCls}-ok`]: {
              marginInlineStart: "auto"
            }
          },
          [`${componentCls}-range-wrapper`]: {
            display: "flex",
            position: "relative"
          },
          [`${componentCls}-range-arrow`]: {
            position: "absolute",
            zIndex: 1,
            display: "none",
            marginInlineStart: paddingInline * 1.5,
            transition: `left ${motionDurationSlow} ease-out`,
            ...roundedArrow(
              sizePopupArrow,
              borderRadiusXS,
              borderRadiusOuter,
              colorBgElevated,
              boxShadowPopoverArrow
            )
          },
          [`${componentCls}-panel-container`]: {
            overflow: "hidden",
            verticalAlign: "top",
            background: colorBgElevated,
            borderRadius: borderRadiusLG,
            boxShadow: boxShadowSecondary,
            transition: `margin ${motionDurationSlow}`,
            // ======================== Layout ========================
            [`${componentCls}-panel-layout`]: {
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "stretch"
            },
            // ======================== Preset ========================
            [`${componentCls}-presets`]: {
              display: "flex",
              flexDirection: "column",
              minWidth: presetsWidth,
              maxWidth: presetsMaxWidth,
              ul: {
                height: 0,
                flex: "auto",
                listStyle: "none",
                overflow: "auto",
                margin: 0,
                padding: paddingXS,
                borderInlineEnd: `${lineWidth}px ${lineType} ${colorSplit}`,
                li: {
                  ...textEllipsis,
                  borderRadius: borderRadiusSM,
                  paddingInline: paddingXS,
                  paddingBlock: (controlHeightSM - Math.round(fontSize * lineHeight)) / 2,
                  cursor: "pointer",
                  transition: `all ${motionDurationSlow}`,
                  "+ li": {
                    marginTop: marginXS
                  },
                  "&:hover": {
                    background: cellHoverBg
                  }
                }
              }
            },
            // ======================== Panels ========================
            [`${componentCls}-panels`]: {
              display: "inline-flex",
              flexWrap: "nowrap",
              direction: "ltr",
              [`${componentCls}-panel`]: {
                borderWidth: `0 0 ${lineWidth}px`
              },
              "&:last-child": {
                [`${componentCls}-panel`]: {
                  borderWidth: 0
                }
              }
            },
            [`${componentCls}-panel`]: {
              verticalAlign: "top",
              background: "transparent",
              borderRadius: 0,
              borderWidth: 0,
              [`${componentCls}-content,
            table`]: {
                textAlign: "center"
              },
              "&-focused": {
                borderColor: colorBorder
              }
            }
          }
        },
        "&-dropdown-range": {
          padding: `${sizePopupArrow * 2 / 3}px 0`,
          "&-hidden": {
            display: "none"
          }
        }
      }
    },
    // Follow code may reuse in other components
    initSlideMotion(token, "slide-up"),
    initSlideMotion(token, "slide-down"),
    initMoveMotion(token, "move-up"),
    initMoveMotion(token, "move-down")
  ];
};
const initPickerPanelToken = (token) => {
  const { componentCls, controlHeightLG, paddingXXS, padding } = token;
  return {
    pickerCellCls: `${componentCls}-cell`,
    pickerCellInnerCls: `${componentCls}-cell-inner`,
    pickerYearMonthCellWidth: controlHeightLG * 1.5,
    pickerQuarterPanelContentHeight: controlHeightLG * 1.4,
    pickerCellPaddingVertical: paddingXXS + paddingXXS / 2,
    pickerCellBorderGap: 2,
    // Magic for gap between cells
    pickerControlIconSize: 7,
    pickerControlIconBorderWidth: 1.5,
    pickerDatePanelPaddingHorizontal: padding + paddingXXS / 2
    // 18 in normal
  };
};
const initPanelComponentToken = (token) => ({
  cellHoverBg: token.controlItemBgHover,
  cellActiveWithRangeBg: token.controlItemBgActive,
  cellHoverWithRangeBg: new TinyColor(token.colorPrimary).lighten(35).toHexString(),
  cellRangeBorderColor: new TinyColor(token.colorPrimary).lighten(20).toHexString(),
  cellBgDisabled: token.colorBgContainerDisabled,
  timeColumnWidth: token.controlHeightLG * 1.4,
  timeColumnHeight: 28 * 8,
  timeCellHeight: 28,
  cellWidth: token.controlHeightSM * 1.5,
  cellHeight: token.controlHeightSM,
  textHeight: token.controlHeightLG,
  withoutTimeCellHeight: token.controlHeightLG * 1.65
});
const useStyle$q = genComponentStyleHook(
  "DatePicker",
  (token) => {
    const pickerToken = merge(initInputToken(token), initPickerPanelToken(token));
    return [
      genPickerStyle(pickerToken),
      genPickerStatusStyle(pickerToken),
      // =====================================================
      // ==             Space Compact                       ==
      // =====================================================
      genCompactItemStyle(token, {
        focusElCls: `${token.componentCls}-focused`
      })
    ];
  },
  (token) => ({
    ...initComponentToken$1(token),
    ...initPanelComponentToken(token),
    presetsWidth: 120,
    presetsMaxWidth: 200,
    zIndexPopup: token.zIndexPopupBase + 50
  })
);

const genCalendarStyles = (token) => {
  const { calendarCls, componentCls, fullBg, fullPanelBg, itemActiveBg } = token;
  return {
    [calendarCls]: {
      ...genPanelStyle(token),
      ...resetComponent(token),
      background: fullBg,
      [`${calendarCls}-header`]: {
        display: "flex",
        justifyContent: "flex-end",
        padding: `${token.paddingSM}px 0`,
        [`${calendarCls}-year-select`]: {
          minWidth: token.yearControlWidth
        },
        [`${calendarCls}-month-select`]: {
          minWidth: token.monthControlWidth,
          marginInlineStart: token.marginXS
        },
        [`${calendarCls}-mode-switch`]: {
          marginInlineStart: token.marginXS
        }
      }
    },
    [`${calendarCls} ${componentCls}-panel`]: {
      background: fullPanelBg,
      border: 0,
      borderTop: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`,
      borderRadius: 0,
      [`${componentCls}-month-panel, ${componentCls}-date-panel`]: {
        width: "auto"
      },
      [`${componentCls}-body`]: {
        padding: `${token.paddingXS}px 0`
      },
      [`${componentCls}-content`]: {
        width: "100%"
      }
    },
    [`${calendarCls}-mini`]: {
      borderRadius: token.borderRadiusLG,
      [`${calendarCls}-header`]: {
        paddingInlineEnd: token.paddingXS,
        paddingInlineStart: token.paddingXS
      },
      [`${componentCls}-panel`]: {
        borderRadius: `0 0 ${token.borderRadiusLG}px ${token.borderRadiusLG}px`
      },
      [`${componentCls}-content`]: {
        height: token.miniContentHeight,
        th: {
          height: "auto",
          padding: 0,
          lineHeight: `${token.weekHeight}px`
        }
      },
      [`${componentCls}-cell::before`]: {
        pointerEvents: "none"
      }
    },
    [`${calendarCls}${calendarCls}-full`]: {
      [`${componentCls}-panel`]: {
        display: "block",
        width: "100%",
        textAlign: "end",
        background: fullBg,
        border: 0,
        [`${componentCls}-body`]: {
          "th, td": {
            padding: 0
          },
          th: {
            height: "auto",
            paddingInlineEnd: token.paddingSM,
            paddingBottom: token.paddingXXS,
            lineHeight: `${token.weekHeight}px`
          }
        }
      },
      [`${componentCls}-cell`]: {
        "&::before": {
          display: "none"
        },
        "&:hover": {
          [`${calendarCls}-date`]: {
            background: token.controlItemBgHover
          }
        },
        [`${calendarCls}-date-today::before`]: {
          display: "none"
        },
        // >>> Selected
        [`&-in-view${componentCls}-cell-selected`]: {
          [`${calendarCls}-date, ${calendarCls}-date-today`]: {
            background: itemActiveBg
          }
        },
        "&-selected, &-selected:hover": {
          [`${calendarCls}-date, ${calendarCls}-date-today`]: {
            [`${calendarCls}-date-value`]: {
              color: token.colorPrimary
            }
          }
        }
      },
      [`${calendarCls}-date`]: {
        display: "block",
        width: "auto",
        height: "auto",
        margin: `0 ${token.marginXS / 2}px`,
        padding: `${token.paddingXS / 2}px ${token.paddingXS}px 0`,
        border: 0,
        borderTop: `${token.lineWidthBold}px ${token.lineType} ${token.colorSplit}`,
        borderRadius: 0,
        transition: `background ${token.motionDurationSlow}`,
        "&-value": {
          lineHeight: `${token.dateValueHeight}px`,
          transition: `color ${token.motionDurationSlow}`
        },
        "&-content": {
          position: "static",
          width: "auto",
          height: token.dateContentHeight,
          overflowY: "auto",
          color: token.colorText,
          lineHeight: token.lineHeight,
          textAlign: "start"
        },
        "&-today": {
          borderColor: token.colorPrimary,
          [`${calendarCls}-date-value`]: {
            color: token.colorText
          }
        }
      }
    },
    [`@media only screen and (max-width: ${token.screenXS}px) `]: {
      [`${calendarCls}`]: {
        [`${calendarCls}-header`]: {
          display: "block",
          [`${calendarCls}-year-select`]: {
            width: "50%"
          },
          [`${calendarCls}-month-select`]: {
            width: `calc(50% - ${token.paddingXS}px)`
          },
          [`${calendarCls}-mode-switch`]: {
            width: "100%",
            marginTop: token.marginXS,
            marginInlineStart: 0,
            "> label": {
              width: "50%",
              textAlign: "center"
            }
          }
        }
      }
    }
  };
};
const useStyle$p = genComponentStyleHook(
  "Calendar",
  (token) => {
    const calendarCls = `${token.componentCls}-calendar`;
    const calendarToken = merge(
      token,
      initPickerPanelToken(token),
      initPanelComponentToken(token),
      {
        calendarCls,
        pickerCellInnerCls: `${token.componentCls}-cell-inner`,
        dateValueHeight: token.controlHeightSM,
        weekHeight: token.controlHeightSM * 0.75,
        dateContentHeight: (token.fontSizeSM * token.lineHeightSM + token.marginXS) * 3 + token.lineWidth * 2
      }
    );
    return [genCalendarStyles(calendarToken)];
  },
  (token) => ({
    fullBg: token.colorBgContainer,
    fullPanelBg: token.colorBgContainer,
    itemActiveBg: token.controlItemBgActive,
    yearControlWidth: 80,
    monthControlWidth: 70,
    miniContentHeight: 256
  })
);

function generateCalendar(generateConfig) {
  function isSameYear(date1, date2) {
    return date1 && date2 && generateConfig.getYear(date1) === generateConfig.getYear(date2);
  }
  function isSameMonth(date1, date2) {
    return isSameYear(date1, date2) && generateConfig.getMonth(date1) === generateConfig.getMonth(date2);
  }
  function isSameDate(date1, date2) {
    return isSameMonth(date1, date2) && generateConfig.getDate(date1) === generateConfig.getDate(date2);
  }
  const Calendar = (props) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      style,
      dateFullCellRender,
      dateCellRender,
      monthFullCellRender,
      monthCellRender,
      cellRender,
      fullCellRender,
      headerRender,
      value,
      defaultValue,
      disabledDate,
      mode,
      validRange,
      fullscreen = true,
      onChange,
      onPanelChange,
      onSelect
    } = props;
    const { getPrefixCls, calendar } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("picker", customizePrefixCls);
    const calendarPrefixCls = `${prefixCls}-calendar`;
    const [wrapSSR, hashId] = useStyle$p(prefixCls);
    const today = generateConfig.getNow();
    const [mergedValue, setMergedValue] = useMergedState(() => value || generateConfig.getNow(), {
      defaultValue,
      value
    });
    const [mergedMode, setMergedMode] = useMergedState("month", {
      value: mode
    });
    const panelMode = React.useMemo(
      () => mergedMode === "year" ? "month" : "date",
      [mergedMode]
    );
    const mergedDisabledDate = React.useCallback(
      (date) => {
        const notInRange = validRange ? generateConfig.isAfter(validRange[0], date) || generateConfig.isAfter(date, validRange[1]) : false;
        return notInRange || !!disabledDate?.(date);
      },
      [disabledDate, validRange]
    );
    const triggerPanelChange = (date, newMode) => {
      onPanelChange?.(date, newMode);
    };
    const triggerChange = (date) => {
      setMergedValue(date);
      if (!isSameDate(date, mergedValue)) {
        if (panelMode === "date" && !isSameMonth(date, mergedValue) || panelMode === "month" && !isSameYear(date, mergedValue)) {
          triggerPanelChange(date, mergedMode);
        }
        onChange?.(date);
      }
    };
    const triggerModeChange = (newMode) => {
      setMergedMode(newMode);
      triggerPanelChange(mergedValue, newMode);
    };
    const onInternalSelect = (date, source) => {
      triggerChange(date);
      onSelect?.(date, { source });
    };
    const getDefaultLocale = () => {
      const { locale: locale$1 } = props;
      const result = {
        ...locale,
        ...locale$1
      };
      result.lang = {
        ...result.lang,
        ...(locale$1 || {}).lang
      };
      return result;
    };
    const dateRender = React.useCallback(
      (date, info) => {
        if (fullCellRender) {
          return fullCellRender(date, info);
        }
        if (dateFullCellRender) {
          return dateFullCellRender(date);
        }
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: classNames(`${prefixCls}-cell-inner`, `${calendarPrefixCls}-date`, {
              [`${calendarPrefixCls}-date-today`]: isSameDate(today, date)
            }),
            children: [
              /* @__PURE__ */ jsx("div", { className: `${calendarPrefixCls}-date-value`, children: String(generateConfig.getDate(date)).padStart(2, "0") }),
              /* @__PURE__ */ jsx("div", { className: `${calendarPrefixCls}-date-content`, children: cellRender ? cellRender(date, info) : dateCellRender && dateCellRender(date) })
            ]
          }
        );
      },
      [dateFullCellRender, dateCellRender, cellRender, fullCellRender]
    );
    const monthRender = React.useCallback(
      (date, info) => {
        if (fullCellRender) {
          return fullCellRender(date, info);
        }
        if (monthFullCellRender) {
          return monthFullCellRender(date);
        }
        const months = info.locale.shortMonths || generateConfig.locale.getShortMonths(info.locale.locale);
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: classNames(`${prefixCls}-cell-inner`, `${calendarPrefixCls}-date`, {
              [`${calendarPrefixCls}-date-today`]: isSameMonth(today, date)
            }),
            children: [
              /* @__PURE__ */ jsx("div", { className: `${calendarPrefixCls}-date-value`, children: months[generateConfig.getMonth(date)] }),
              /* @__PURE__ */ jsx("div", { className: `${calendarPrefixCls}-date-content`, children: cellRender ? cellRender(date, info) : monthCellRender && monthCellRender(date) })
            ]
          }
        );
      },
      [monthFullCellRender, monthCellRender, cellRender, fullCellRender]
    );
    const [contextLocale] = useLocale("Calendar", getDefaultLocale);
    const mergedCellRender = (current, info) => {
      if (info.type === "date") {
        return dateRender(current, info);
      }
      if (info.type === "month") {
        return monthRender(current, {
          ...info,
          locale: contextLocale?.lang
        });
      }
    };
    return wrapSSR(
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: classNames(
            calendarPrefixCls,
            {
              [`${calendarPrefixCls}-full`]: fullscreen,
              [`${calendarPrefixCls}-mini`]: !fullscreen
            },
            calendar?.className,
            className,
            rootClassName,
            hashId
          ),
          style: { ...calendar?.style, ...style },
          children: [
            headerRender ? headerRender({
              value: mergedValue,
              type: mergedMode,
              onChange: (nextDate) => {
                onInternalSelect(nextDate, "customize");
              },
              onTypeChange: triggerModeChange
            }) : /* @__PURE__ */ jsx(
              CalendarHeader,
              {
                prefixCls: calendarPrefixCls,
                value: mergedValue,
                generateConfig,
                mode: mergedMode,
                fullscreen,
                locale: contextLocale?.lang,
                validRange,
                onChange: onInternalSelect,
                onModeChange: triggerModeChange
              }
            ),
            /* @__PURE__ */ jsx(
              PickerPanel,
              {
                value: mergedValue,
                prefixCls,
                locale: contextLocale?.lang,
                generateConfig,
                cellRender: mergedCellRender,
                onSelect: (nextDate) => {
                  onInternalSelect(nextDate, panelMode);
                },
                mode: panelMode,
                picker: panelMode,
                disabledDate: mergedDisabledDate,
                hideHeader: true
              }
            )
          ]
        }
      )
    );
  };
  return Calendar;
}

const Calendar = generateCalendar(dayjsGenerateConfig);
Calendar.generateCalendar = generateCalendar;

const Element = (props) => {
  const { prefixCls, className, style, size, shape } = props;
  const sizeCls = classNames({
    [`${prefixCls}-lg`]: size === "large",
    [`${prefixCls}-sm`]: size === "small"
  });
  const shapeCls = classNames({
    [`${prefixCls}-circle`]: shape === "circle",
    [`${prefixCls}-square`]: shape === "square",
    [`${prefixCls}-round`]: shape === "round"
  });
  const sizeStyle = React.useMemo(
    () => typeof size === "number" ? {
      width: size,
      height: size,
      lineHeight: `${size}px`
    } : {},
    [size]
  );
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: classNames(prefixCls, sizeCls, shapeCls, className),
      style: { ...sizeStyle, ...style }
    }
  );
};

const skeletonClsLoading = new Keyframes(`ant-skeleton-loading`, {
  "0%": {
    backgroundPosition: "100% 50%"
  },
  "100%": {
    backgroundPosition: "0 50%"
  }
});
const genSkeletonElementCommonSize = (size) => ({
  height: size,
  lineHeight: `${size}px`
});
const genSkeletonElementAvatarSize = (size) => ({
  width: size,
  ...genSkeletonElementCommonSize(size)
});
const genSkeletonColor = (token) => ({
  background: token.skeletonLoadingBackground,
  backgroundSize: "400% 100%",
  animationName: skeletonClsLoading,
  animationDuration: token.skeletonLoadingMotionDuration,
  animationTimingFunction: "ease",
  animationIterationCount: "infinite"
});
const genSkeletonElementInputSize = (size) => ({
  width: size * 5,
  minWidth: size * 5,
  ...genSkeletonElementCommonSize(size)
});
const genSkeletonElementAvatar = (token) => {
  const { skeletonAvatarCls, gradientFromColor, controlHeight, controlHeightLG, controlHeightSM } = token;
  return {
    [`${skeletonAvatarCls}`]: {
      display: "inline-block",
      verticalAlign: "top",
      background: gradientFromColor,
      ...genSkeletonElementAvatarSize(controlHeight)
    },
    [`${skeletonAvatarCls}${skeletonAvatarCls}-circle`]: {
      borderRadius: "50%"
    },
    [`${skeletonAvatarCls}${skeletonAvatarCls}-lg`]: {
      ...genSkeletonElementAvatarSize(controlHeightLG)
    },
    [`${skeletonAvatarCls}${skeletonAvatarCls}-sm`]: {
      ...genSkeletonElementAvatarSize(controlHeightSM)
    }
  };
};
const genSkeletonElementInput = (token) => {
  const {
    controlHeight,
    borderRadiusSM,
    skeletonInputCls,
    controlHeightLG,
    controlHeightSM,
    gradientFromColor
  } = token;
  return {
    [`${skeletonInputCls}`]: {
      display: "inline-block",
      verticalAlign: "top",
      background: gradientFromColor,
      borderRadius: borderRadiusSM,
      ...genSkeletonElementInputSize(controlHeight)
    },
    [`${skeletonInputCls}-lg`]: {
      ...genSkeletonElementInputSize(controlHeightLG)
    },
    [`${skeletonInputCls}-sm`]: {
      ...genSkeletonElementInputSize(controlHeightSM)
    }
  };
};
const genSkeletonElementImageSize = (size) => ({
  width: size,
  ...genSkeletonElementCommonSize(size)
});
const genSkeletonElementImage = (token) => {
  const { skeletonImageCls, imageSizeBase, gradientFromColor, borderRadiusSM } = token;
  return {
    [`${skeletonImageCls}`]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "top",
      background: gradientFromColor,
      borderRadius: borderRadiusSM,
      ...genSkeletonElementImageSize(imageSizeBase * 2),
      [`${skeletonImageCls}-path`]: {
        fill: "#bfbfbf"
      },
      [`${skeletonImageCls}-svg`]: {
        ...genSkeletonElementImageSize(imageSizeBase),
        maxWidth: imageSizeBase * 4,
        maxHeight: imageSizeBase * 4
      },
      [`${skeletonImageCls}-svg${skeletonImageCls}-svg-circle`]: {
        borderRadius: "50%"
      }
    },
    [`${skeletonImageCls}${skeletonImageCls}-circle`]: {
      borderRadius: "50%"
    }
  };
};
const genSkeletonElementButtonShape = (token, size, buttonCls) => {
  const { skeletonButtonCls } = token;
  return {
    [`${buttonCls}${skeletonButtonCls}-circle`]: {
      width: size,
      minWidth: size,
      borderRadius: "50%"
    },
    [`${buttonCls}${skeletonButtonCls}-round`]: {
      borderRadius: size
    }
  };
};
const genSkeletonElementButtonSize = (size) => ({
  width: size * 2,
  minWidth: size * 2,
  ...genSkeletonElementCommonSize(size)
});
const genSkeletonElementButton = (token) => {
  const {
    borderRadiusSM,
    skeletonButtonCls,
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    gradientFromColor
  } = token;
  return {
    [`${skeletonButtonCls}`]: {
      display: "inline-block",
      verticalAlign: "top",
      background: gradientFromColor,
      borderRadius: borderRadiusSM,
      width: controlHeight * 2,
      minWidth: controlHeight * 2,
      ...genSkeletonElementButtonSize(controlHeight)
    },
    ...genSkeletonElementButtonShape(token, controlHeight, skeletonButtonCls),
    [`${skeletonButtonCls}-lg`]: {
      ...genSkeletonElementButtonSize(controlHeightLG)
    },
    ...genSkeletonElementButtonShape(token, controlHeightLG, `${skeletonButtonCls}-lg`),
    [`${skeletonButtonCls}-sm`]: {
      ...genSkeletonElementButtonSize(controlHeightSM)
    },
    ...genSkeletonElementButtonShape(token, controlHeightSM, `${skeletonButtonCls}-sm`)
  };
};
const genBaseStyle$6 = (token) => {
  const {
    componentCls,
    skeletonAvatarCls,
    skeletonTitleCls,
    skeletonParagraphCls,
    skeletonButtonCls,
    skeletonInputCls,
    skeletonImageCls,
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    gradientFromColor,
    padding,
    marginSM,
    borderRadius,
    titleHeight,
    blockRadius,
    paragraphLiHeight,
    controlHeightXS,
    paragraphMarginTop
  } = token;
  return {
    [`${componentCls}`]: {
      display: "table",
      width: "100%",
      [`${componentCls}-header`]: {
        display: "table-cell",
        paddingInlineEnd: padding,
        verticalAlign: "top",
        // Avatar
        [`${skeletonAvatarCls}`]: {
          display: "inline-block",
          verticalAlign: "top",
          background: gradientFromColor,
          ...genSkeletonElementAvatarSize(controlHeight)
        },
        [`${skeletonAvatarCls}-circle`]: {
          borderRadius: "50%"
        },
        [`${skeletonAvatarCls}-lg`]: {
          ...genSkeletonElementAvatarSize(controlHeightLG)
        },
        [`${skeletonAvatarCls}-sm`]: {
          ...genSkeletonElementAvatarSize(controlHeightSM)
        }
      },
      [`${componentCls}-content`]: {
        display: "table-cell",
        width: "100%",
        verticalAlign: "top",
        // Title
        [`${skeletonTitleCls}`]: {
          width: "100%",
          height: titleHeight,
          background: gradientFromColor,
          borderRadius: blockRadius,
          [`+ ${skeletonParagraphCls}`]: {
            marginBlockStart: controlHeightSM
          }
        },
        // paragraph
        [`${skeletonParagraphCls}`]: {
          padding: 0,
          "> li": {
            width: "100%",
            height: paragraphLiHeight,
            listStyle: "none",
            background: gradientFromColor,
            borderRadius: blockRadius,
            "+ li": {
              marginBlockStart: controlHeightXS
            }
          }
        },
        [`${skeletonParagraphCls}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
          width: "61%"
        }
      },
      [`&-round ${componentCls}-content`]: {
        [`${skeletonTitleCls}, ${skeletonParagraphCls} > li`]: {
          borderRadius
        }
      }
    },
    [`${componentCls}-with-avatar ${componentCls}-content`]: {
      // Title
      [`${skeletonTitleCls}`]: {
        marginBlockStart: marginSM,
        [`+ ${skeletonParagraphCls}`]: {
          marginBlockStart: paragraphMarginTop
        }
      }
    },
    // Skeleton element
    [`${componentCls}${componentCls}-element`]: {
      display: "inline-block",
      width: "auto",
      ...genSkeletonElementButton(token),
      ...genSkeletonElementAvatar(token),
      ...genSkeletonElementInput(token),
      ...genSkeletonElementImage(token)
    },
    // Skeleton Block Button, Input
    [`${componentCls}${componentCls}-block`]: {
      width: "100%",
      [`${skeletonButtonCls}`]: {
        width: "100%"
      },
      [`${skeletonInputCls}`]: {
        width: "100%"
      }
    },
    // With active animation
    [`${componentCls}${componentCls}-active`]: {
      [`
        ${skeletonTitleCls},
        ${skeletonParagraphCls} > li,
        ${skeletonAvatarCls},
        ${skeletonButtonCls},
        ${skeletonInputCls},
        ${skeletonImageCls}
      `]: {
        ...genSkeletonColor(token)
      }
    }
  };
};
const useStyle$o = genComponentStyleHook(
  "Skeleton",
  (token) => {
    const { componentCls } = token;
    const skeletonToken = merge(token, {
      skeletonAvatarCls: `${componentCls}-avatar`,
      skeletonTitleCls: `${componentCls}-title`,
      skeletonParagraphCls: `${componentCls}-paragraph`,
      skeletonButtonCls: `${componentCls}-button`,
      skeletonInputCls: `${componentCls}-input`,
      skeletonImageCls: `${componentCls}-image`,
      imageSizeBase: token.controlHeight * 1.5,
      borderRadius: 100,
      // Large number to make capsule shape
      skeletonLoadingBackground: `linear-gradient(90deg, ${token.gradientFromColor} 25%, ${token.gradientToColor} 37%, ${token.gradientFromColor} 63%)`,
      skeletonLoadingMotionDuration: "1.4s"
    });
    return [genBaseStyle$6(skeletonToken)];
  },
  (token) => {
    const { colorFillContent, colorFill } = token;
    const gradientFromColor = colorFillContent;
    const gradientToColor = colorFill;
    return {
      color: gradientFromColor,
      colorGradientEnd: gradientToColor,
      gradientFromColor,
      gradientToColor,
      titleHeight: token.controlHeight / 2,
      blockRadius: token.borderRadiusSM,
      paragraphMarginTop: token.marginLG + token.marginXXS,
      paragraphLiHeight: token.controlHeight / 2
    };
  },
  {
    deprecatedTokens: [
      ["color", "gradientFromColor"],
      ["colorGradientEnd", "gradientToColor"]
    ]
  }
);

const SkeletonAvatar = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    active,
    shape = "circle",
    size = "default"
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$o(prefixCls);
  const otherProps = omit(props, ["prefixCls", "className"]);
  const cls = classNames(
    prefixCls,
    `${prefixCls}-element`,
    {
      [`${prefixCls}-active`]: active
    },
    className,
    rootClassName,
    hashId
  );
  return wrapSSR(
    /* @__PURE__ */ jsx("div", { className: cls, children: /* @__PURE__ */ jsx(Element, { prefixCls: `${prefixCls}-avatar`, shape, size, ...otherProps }) })
  );
};

const SkeletonButton = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    active,
    block = false,
    size = "default"
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$o(prefixCls);
  const otherProps = omit(props, ["prefixCls"]);
  const cls = classNames(
    prefixCls,
    `${prefixCls}-element`,
    {
      [`${prefixCls}-active`]: active,
      [`${prefixCls}-block`]: block
    },
    className,
    rootClassName,
    hashId
  );
  return wrapSSR(
    /* @__PURE__ */ jsx("div", { className: cls, children: /* @__PURE__ */ jsx(Element, { prefixCls: `${prefixCls}-button`, size, ...otherProps }) })
  );
};

const path = "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z";
const SkeletonImage = (props) => {
  const { prefixCls: customizePrefixCls, className, rootClassName, style, active } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$o(prefixCls);
  const cls = classNames(
    prefixCls,
    `${prefixCls}-element`,
    {
      [`${prefixCls}-active`]: active
    },
    className,
    rootClassName,
    hashId
  );
  return wrapSSR(
    /* @__PURE__ */ jsx("div", { className: cls, children: /* @__PURE__ */ jsx("div", { className: classNames(`${prefixCls}-image`, className), style, children: /* @__PURE__ */ jsx(
      "svg",
      {
        viewBox: "0 0 1098 1024",
        xmlns: "http://www.w3.org/2000/svg",
        className: `${prefixCls}-image-svg`,
        children: /* @__PURE__ */ jsx("path", { d: path, className: `${prefixCls}-image-path` })
      }
    ) }) })
  );
};

const SkeletonInput = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    active,
    block,
    size = "default"
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$o(prefixCls);
  const otherProps = omit(props, ["prefixCls"]);
  const cls = classNames(
    prefixCls,
    `${prefixCls}-element`,
    {
      [`${prefixCls}-active`]: active,
      [`${prefixCls}-block`]: block
    },
    className,
    rootClassName,
    hashId
  );
  return wrapSSR(
    /* @__PURE__ */ jsx("div", { className: cls, children: /* @__PURE__ */ jsx(Element, { prefixCls: `${prefixCls}-input`, size, ...otherProps }) })
  );
};

const SkeletonNode = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    active,
    children
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$o(prefixCls);
  const cls = classNames(
    prefixCls,
    `${prefixCls}-element`,
    {
      [`${prefixCls}-active`]: active
    },
    hashId,
    className,
    rootClassName
  );
  const content = children ?? /* @__PURE__ */ jsx(AutoGraphIcon, {});
  return wrapSSR(
    /* @__PURE__ */ jsx("div", { className: cls, children: /* @__PURE__ */ jsx("div", { className: classNames(`${prefixCls}-image`, className), style, children: content }) })
  );
};

const Paragraph$1 = (props) => {
  const getWidth = (index) => {
    const { width, rows: rows2 = 2 } = props;
    if (Array.isArray(width)) {
      return width[index];
    }
    if (rows2 - 1 === index) {
      return width;
    }
    return void 0;
  };
  const { prefixCls, className, style, rows } = props;
  const rowList = [...Array(rows)].map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ jsx("li", { style: { width: getWidth(index) } }, index)
  ));
  return /* @__PURE__ */ jsx("ul", { className: classNames(prefixCls, className), style, children: rowList });
};

const Title$1 = ({ prefixCls, className, width, style }) => /* @__PURE__ */ jsx("h3", { className: classNames(prefixCls, className), style: { width, ...style } });

function getComponentProps(prop) {
  if (prop && typeof prop === "object") {
    return prop;
  }
  return {};
}
function getAvatarBasicProps(hasTitle, hasParagraph) {
  if (hasTitle && !hasParagraph) {
    return { size: "large", shape: "square" };
  }
  return { size: "large", shape: "circle" };
}
function getTitleBasicProps(hasAvatar, hasParagraph) {
  if (!hasAvatar && hasParagraph) {
    return { width: "38%" };
  }
  if (hasAvatar && hasParagraph) {
    return { width: "50%" };
  }
  return {};
}
function getParagraphBasicProps(hasAvatar, hasTitle) {
  const basicProps = {};
  if (!hasAvatar || !hasTitle) {
    basicProps.width = "61%";
  }
  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }
  return basicProps;
}
const Skeleton = (props) => {
  const {
    prefixCls: customizePrefixCls,
    loading,
    className,
    rootClassName,
    style,
    children,
    avatar = false,
    title = true,
    paragraph = true,
    active,
    round
  } = props;
  const { getPrefixCls, skeleton } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$o(prefixCls);
  if (loading || !("loading" in props)) {
    const hasAvatar = !!avatar;
    const hasTitle = !!title;
    const hasParagraph = !!paragraph;
    let avatarNode;
    if (hasAvatar) {
      const avatarProps = {
        prefixCls: `${prefixCls}-avatar`,
        ...getAvatarBasicProps(hasTitle, hasParagraph),
        ...getComponentProps(avatar)
      };
      avatarNode = /* @__PURE__ */ jsx("div", { className: `${prefixCls}-header`, children: /* @__PURE__ */ jsx(Element, { ...avatarProps }) });
    }
    let contentNode;
    if (hasTitle || hasParagraph) {
      let $title;
      if (hasTitle) {
        const titleProps = {
          prefixCls: `${prefixCls}-title`,
          ...getTitleBasicProps(hasAvatar, hasParagraph),
          ...getComponentProps(title)
        };
        $title = /* @__PURE__ */ jsx(Title$1, { ...titleProps });
      }
      let paragraphNode;
      if (hasParagraph) {
        const paragraphProps = {
          prefixCls: `${prefixCls}-paragraph`,
          ...getParagraphBasicProps(hasAvatar, hasTitle),
          ...getComponentProps(paragraph)
        };
        paragraphNode = /* @__PURE__ */ jsx(Paragraph$1, { ...paragraphProps });
      }
      contentNode = /* @__PURE__ */ jsxs("div", { className: `${prefixCls}-content`, children: [
        $title,
        paragraphNode
      ] });
    }
    const cls = classNames(
      prefixCls,
      {
        [`${prefixCls}-with-avatar`]: hasAvatar,
        [`${prefixCls}-active`]: active,
        [`${prefixCls}-round`]: round
      },
      skeleton?.className,
      className,
      rootClassName,
      hashId
    );
    return wrapSSR(
      /* @__PURE__ */ jsxs("div", { className: cls, style: { ...skeleton?.style, ...style }, children: [
        avatarNode,
        contentNode
      ] })
    );
  }
  return typeof children !== "undefined" ? children : null;
};
Skeleton.Button = SkeletonButton;
Skeleton.Avatar = SkeletonAvatar;
Skeleton.Input = SkeletonInput;
Skeleton.Image = SkeletonImage;
Skeleton.Node = SkeletonNode;

const motion = {
  motionAppear: false,
  motionEnter: true,
  motionLeave: true
};
function useAnimateConfig(prefixCls, animated = {
  inkBar: true,
  tabPane: false
}) {
  let mergedAnimated;
  if (animated === false) {
    mergedAnimated = {
      inkBar: false,
      tabPane: false
    };
  } else if (animated === true) {
    mergedAnimated = {
      inkBar: true,
      tabPane: true
    };
  } else {
    mergedAnimated = {
      inkBar: true,
      ...typeof animated === "object" ? animated : {}
    };
  }
  if (mergedAnimated.tabPane) {
    mergedAnimated.tabPaneMotion = {
      ...motion,
      motionName: getTransitionName(prefixCls, "switch")
    };
  }
  return mergedAnimated;
}

function filter$1(items) {
  return items.filter((item) => item);
}
function useLegacyItems$1(items, children) {
  if (items) {
    return items;
  }
  const childrenItems = toArray$2(children).map((node) => {
    if (React.isValidElement(node)) {
      const { key, props } = node;
      const { tab, ...restProps } = props || {};
      const item = {
        key: String(key),
        ...restProps,
        label: tab
      };
      return item;
    }
    return null;
  });
  return filter$1(childrenItems);
}

const genMotionStyle$1 = (token) => {
  const { componentCls, motionDurationSlow } = token;
  return [
    {
      [componentCls]: {
        [`${componentCls}-switch`]: {
          "&-appear, &-enter": {
            transition: "none",
            "&-start": {
              opacity: 0
            },
            "&-active": {
              opacity: 1,
              transition: `opacity ${motionDurationSlow}`
            }
          },
          "&-leave": {
            position: "absolute",
            transition: "none",
            inset: 0,
            "&-start": {
              opacity: 1
            },
            "&-active": {
              opacity: 0,
              transition: `opacity ${motionDurationSlow}`
            }
          }
        }
      }
    },
    // Follow code may reuse in other components
    [initSlideMotion(token, "slide-up"), initSlideMotion(token, "slide-down")]
  ];
};

const genCardStyle$1 = (token) => {
  const {
    componentCls,
    tabsCardPadding,
    cardBg,
    cardGutter,
    colorBorderSecondary,
    itemSelectedColor
  } = token;
  return {
    [`${componentCls}-card`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        [`${componentCls}-tab`]: {
          margin: 0,
          padding: tabsCardPadding,
          background: cardBg,
          border: `${token.lineWidth}px ${token.lineType} ${colorBorderSecondary}`,
          transition: `all ${token.motionDurationSlow} ${token.motionEaseInOut}`
        },
        [`${componentCls}-tab-active`]: {
          color: itemSelectedColor,
          background: token.colorBgContainer
        },
        [`${componentCls}-ink-bar`]: {
          visibility: "hidden"
        }
      },
      // ========================== Top & Bottom ==========================
      [`&${componentCls}-top, &${componentCls}-bottom`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab + ${componentCls}-tab`]: {
            marginLeft: {
              _skip_check_: true,
              value: `${cardGutter}px`
            }
          }
        }
      },
      [`&${componentCls}-top`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            borderRadius: `${token.borderRadiusLG}px ${token.borderRadiusLG}px 0 0`
          },
          [`${componentCls}-tab-active`]: {
            borderBottomColor: token.colorBgContainer
          }
        }
      },
      [`&${componentCls}-bottom`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            borderRadius: `0 0 ${token.borderRadiusLG}px ${token.borderRadiusLG}px`
          },
          [`${componentCls}-tab-active`]: {
            borderTopColor: token.colorBgContainer
          }
        }
      },
      // ========================== Left & Right ==========================
      [`&${componentCls}-left, &${componentCls}-right`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab + ${componentCls}-tab`]: {
            marginTop: `${cardGutter}px`
          }
        }
      },
      [`&${componentCls}-left`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            borderRadius: {
              _skip_check_: true,
              value: `${token.borderRadiusLG}px 0 0 ${token.borderRadiusLG}px`
            }
          },
          [`${componentCls}-tab-active`]: {
            borderRightColor: {
              _skip_check_: true,
              value: token.colorBgContainer
            }
          }
        }
      },
      [`&${componentCls}-right`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            borderRadius: {
              _skip_check_: true,
              value: `0 ${token.borderRadiusLG}px ${token.borderRadiusLG}px 0`
            }
          },
          [`${componentCls}-tab-active`]: {
            borderLeftColor: {
              _skip_check_: true,
              value: token.colorBgContainer
            }
          }
        }
      }
    }
  };
};
const genDropdownStyle = (token) => {
  const { componentCls, itemHoverColor, dropdownEdgeChildVerticalPadding } = token;
  return {
    [`${componentCls}-dropdown`]: {
      ...resetComponent(token),
      position: "absolute",
      top: -9999,
      left: {
        _skip_check_: true,
        value: -9999
      },
      zIndex: token.zIndexPopup,
      display: "block",
      "&-hidden": {
        display: "none"
      },
      [`${componentCls}-dropdown-menu`]: {
        maxHeight: token.tabsDropdownHeight,
        margin: 0,
        padding: `${dropdownEdgeChildVerticalPadding}px 0`,
        overflowX: "hidden",
        overflowY: "auto",
        textAlign: {
          _skip_check_: true,
          value: "left"
        },
        listStyleType: "none",
        backgroundColor: token.colorBgContainer,
        backgroundClip: "padding-box",
        borderRadius: token.borderRadiusLG,
        outline: "none",
        boxShadow: token.boxShadowSecondary,
        "&-item": {
          ...textEllipsis,
          display: "flex",
          alignItems: "center",
          minWidth: token.tabsDropdownWidth,
          margin: 0,
          padding: `${token.paddingXXS}px ${token.paddingSM}px`,
          color: token.colorText,
          fontWeight: "normal",
          fontSize: token.fontSize,
          lineHeight: token.lineHeight,
          cursor: "pointer",
          transition: `all ${token.motionDurationSlow}`,
          "> span": {
            flex: 1,
            whiteSpace: "nowrap"
          },
          "&-remove": {
            flex: "none",
            marginLeft: {
              _skip_check_: true,
              value: token.marginSM
            },
            color: token.colorTextDescription,
            fontSize: token.fontSizeSM,
            background: "transparent",
            border: 0,
            cursor: "pointer",
            "&:hover": {
              color: itemHoverColor
            }
          },
          "&:hover": {
            background: token.controlItemBgHover
          },
          "&-disabled": {
            "&, &:hover": {
              color: token.colorTextDisabled,
              background: "transparent",
              cursor: "not-allowed"
            }
          }
        }
      }
    }
  };
};
const genPositionStyle = (token) => {
  const {
    componentCls,
    margin,
    colorBorderSecondary,
    horizontalMargin,
    verticalItemPadding,
    verticalItemMargin
  } = token;
  return {
    // ========================== Top & Bottom ==========================
    [`${componentCls}-top, ${componentCls}-bottom`]: {
      flexDirection: "column",
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        margin: horizontalMargin,
        "&::before": {
          position: "absolute",
          right: {
            _skip_check_: true,
            value: 0
          },
          left: {
            _skip_check_: true,
            value: 0
          },
          borderBottom: `${token.lineWidth}px ${token.lineType} ${colorBorderSecondary}`,
          content: "''"
        },
        [`${componentCls}-ink-bar`]: {
          height: token.lineWidthBold,
          "&-animated": {
            transition: `width ${token.motionDurationSlow}, left ${token.motionDurationSlow},
            right ${token.motionDurationSlow}`
          }
        },
        [`${componentCls}-nav-wrap`]: {
          "&::before, &::after": {
            top: 0,
            bottom: 0,
            width: token.controlHeight
          },
          "&::before": {
            left: {
              _skip_check_: true,
              value: 0
            },
            boxShadow: token.boxShadowTabsOverflowLeft
          },
          "&::after": {
            right: {
              _skip_check_: true,
              value: 0
            },
            boxShadow: token.boxShadowTabsOverflowRight
          },
          [`&${componentCls}-nav-wrap-ping-left::before`]: {
            opacity: 1
          },
          [`&${componentCls}-nav-wrap-ping-right::after`]: {
            opacity: 1
          }
        }
      }
    },
    [`${componentCls}-top`]: {
      [`> ${componentCls}-nav,
        > div > ${componentCls}-nav`]: {
        "&::before": {
          bottom: 0
        },
        [`${componentCls}-ink-bar`]: {
          bottom: 0
        }
      }
    },
    [`${componentCls}-bottom`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        order: 1,
        marginTop: `${margin}px`,
        marginBottom: 0,
        "&::before": {
          top: 0
        },
        [`${componentCls}-ink-bar`]: {
          top: 0
        }
      },
      [`> ${componentCls}-content-holder, > div > ${componentCls}-content-holder`]: {
        order: 0
      }
    },
    // ========================== Left & Right ==========================
    [`${componentCls}-left, ${componentCls}-right`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        flexDirection: "column",
        minWidth: token.controlHeight * 1.25,
        // >>>>>>>>>>> Tab
        [`${componentCls}-tab`]: {
          padding: verticalItemPadding,
          textAlign: "center"
        },
        [`${componentCls}-tab + ${componentCls}-tab`]: {
          margin: verticalItemMargin
        },
        // >>>>>>>>>>> Nav
        [`${componentCls}-nav-wrap`]: {
          flexDirection: "column",
          "&::before, &::after": {
            right: {
              _skip_check_: true,
              value: 0
            },
            left: {
              _skip_check_: true,
              value: 0
            },
            height: token.controlHeight
          },
          "&::before": {
            top: 0,
            boxShadow: token.boxShadowTabsOverflowTop
          },
          "&::after": {
            bottom: 0,
            boxShadow: token.boxShadowTabsOverflowBottom
          },
          [`&${componentCls}-nav-wrap-ping-top::before`]: {
            opacity: 1
          },
          [`&${componentCls}-nav-wrap-ping-bottom::after`]: {
            opacity: 1
          }
        },
        // >>>>>>>>>>> Ink Bar
        [`${componentCls}-ink-bar`]: {
          width: token.lineWidthBold,
          "&-animated": {
            transition: `height ${token.motionDurationSlow}, top ${token.motionDurationSlow}`
          }
        },
        [`${componentCls}-nav-list, ${componentCls}-nav-operations`]: {
          flex: "1 0 auto",
          // fix safari scroll problem
          flexDirection: "column"
        }
      }
    },
    [`${componentCls}-left`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        [`${componentCls}-ink-bar`]: {
          right: {
            _skip_check_: true,
            value: 0
          }
        }
      },
      [`> ${componentCls}-content-holder, > div > ${componentCls}-content-holder`]: {
        marginLeft: {
          _skip_check_: true,
          value: `-${token.lineWidth}px`
        },
        borderLeft: {
          _skip_check_: true,
          value: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`
        },
        [`> ${componentCls}-content > ${componentCls}-tabpane`]: {
          paddingLeft: {
            _skip_check_: true,
            value: token.paddingLG
          }
        }
      }
    },
    [`${componentCls}-right`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        order: 1,
        [`${componentCls}-ink-bar`]: {
          left: {
            _skip_check_: true,
            value: 0
          }
        }
      },
      [`> ${componentCls}-content-holder, > div > ${componentCls}-content-holder`]: {
        order: 0,
        marginRight: {
          _skip_check_: true,
          value: -token.lineWidth
        },
        borderRight: {
          _skip_check_: true,
          value: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`
        },
        [`> ${componentCls}-content > ${componentCls}-tabpane`]: {
          paddingRight: {
            _skip_check_: true,
            value: token.paddingLG
          }
        }
      }
    }
  };
};
const genSizeStyle$1 = (token) => {
  const {
    componentCls,
    cardPaddingSM,
    cardPaddingLG,
    horizontalItemPaddingSM,
    horizontalItemPaddingLG
  } = token;
  return {
    [componentCls]: {
      "&-small": {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: horizontalItemPaddingSM,
            fontSize: token.titleFontSizeSM
          }
        }
      },
      "&-large": {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: horizontalItemPaddingLG,
            fontSize: token.titleFontSizeLG
          }
        }
      }
    },
    [`${componentCls}-card`]: {
      [`&${componentCls}-small`]: {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: cardPaddingSM
          }
        },
        [`&${componentCls}-bottom`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: `0 0 ${token.borderRadius}px ${token.borderRadius}px`
          }
        },
        [`&${componentCls}-top`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: `${token.borderRadius}px ${token.borderRadius}px 0 0`
          }
        },
        [`&${componentCls}-right`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: {
              _skip_check_: true,
              value: `0 ${token.borderRadius}px ${token.borderRadius}px 0`
            }
          }
        },
        [`&${componentCls}-left`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: {
              _skip_check_: true,
              value: `${token.borderRadius}px 0 0 ${token.borderRadius}px`
            }
          }
        }
      },
      [`&${componentCls}-large`]: {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: cardPaddingLG
          }
        }
      }
    }
  };
};
const genTabStyle = (token) => {
  const {
    componentCls,
    itemActiveColor,
    itemHoverColor,
    iconCls,
    tabsHorizontalItemMargin,
    horizontalItemPadding,
    itemSelectedColor,
    itemColor
  } = token;
  const tabCls = `${componentCls}-tab`;
  return {
    [tabCls]: {
      position: "relative",
      WebkitTouchCallout: "none",
      WebkitTapHighlightColor: "transparent",
      display: "inline-flex",
      alignItems: "center",
      padding: horizontalItemPadding,
      fontSize: token.titleFontSize,
      background: "transparent",
      border: 0,
      outline: "none",
      cursor: "pointer",
      color: itemColor,
      "&-btn, &-remove": {
        "&:focus:not(:focus-visible), &:active": {
          color: itemActiveColor
        },
        ...genFocusStyle(token)
      },
      "&-btn": {
        outline: "none",
        transition: "all 0.3s"
      },
      "&-remove": {
        flex: "none",
        marginRight: {
          _skip_check_: true,
          value: -token.marginXXS
        },
        marginLeft: {
          _skip_check_: true,
          value: token.marginXS
        },
        color: token.colorTextDescription,
        fontSize: token.fontSizeSM,
        background: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        transition: `all ${token.motionDurationSlow}`,
        "&:hover": {
          color: token.colorTextHeading
        }
      },
      "&:hover": {
        color: itemHoverColor
      },
      [`&${tabCls}-active ${tabCls}-btn`]: {
        color: itemSelectedColor,
        textShadow: token.tabsActiveTextShadow
      },
      [`&${tabCls}-disabled`]: {
        color: token.colorTextDisabled,
        cursor: "not-allowed"
      },
      [`&${tabCls}-disabled ${tabCls}-btn, &${tabCls}-disabled ${componentCls}-remove`]: {
        "&:focus, &:active": {
          color: token.colorTextDisabled
        }
      },
      [`& ${tabCls}-remove ${iconCls}`]: {
        margin: 0
      },
      [iconCls]: {
        marginRight: {
          _skip_check_: true,
          value: token.marginSM
        }
      }
    },
    [`${tabCls} + ${tabCls}`]: {
      margin: {
        _skip_check_: true,
        value: tabsHorizontalItemMargin
      }
    }
  };
};
const genTabsStyle = (token) => {
  const {
    componentCls,
    tabsCardPadding,
    cardHeight,
    cardGutter,
    itemHoverColor,
    itemActiveColor,
    colorBorderSecondary
  } = token;
  return {
    [componentCls]: {
      ...resetComponent(token),
      display: "flex",
      // ========================== Navigation ==========================
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        position: "relative",
        display: "flex",
        flex: "none",
        alignItems: "center",
        [`${componentCls}-nav-wrap`]: {
          position: "relative",
          display: "flex",
          flex: "auto",
          alignSelf: "stretch",
          overflow: "hidden",
          whiteSpace: "nowrap",
          transform: "translate(0)",
          // Fix chrome render bug
          // >>>>> Ping shadow
          "&::before, &::after": {
            position: "absolute",
            zIndex: 1,
            opacity: 0,
            transition: `opacity ${token.motionDurationSlow}`,
            content: "''",
            pointerEvents: "none"
          }
        },
        [`${componentCls}-nav-list`]: {
          position: "relative",
          display: "flex",
          transition: `opacity ${token.motionDurationSlow}`
        },
        // >>>>>>>> Operations
        [`${componentCls}-nav-operations`]: {
          display: "flex",
          alignSelf: "stretch"
        },
        [`${componentCls}-nav-operations-hidden`]: {
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none"
        },
        [`${componentCls}-nav-more`]: {
          position: "relative",
          padding: tabsCardPadding,
          background: "transparent",
          border: 0,
          color: token.colorText,
          "&::after": {
            position: "absolute",
            right: {
              _skip_check_: true,
              value: 0
            },
            bottom: 0,
            left: {
              _skip_check_: true,
              value: 0
            },
            height: token.controlHeightLG / 8,
            transform: "translateY(100%)",
            content: "''"
          }
        },
        [`${componentCls}-nav-add`]: {
          minWidth: cardHeight,
          marginLeft: {
            _skip_check_: true,
            value: cardGutter
          },
          padding: `0 ${token.paddingXS}px`,
          background: "transparent",
          border: `${token.lineWidth}px ${token.lineType} ${colorBorderSecondary}`,
          borderRadius: `${token.borderRadiusLG}px ${token.borderRadiusLG}px 0 0`,
          outline: "none",
          cursor: "pointer",
          color: token.colorText,
          transition: `all ${token.motionDurationSlow} ${token.motionEaseInOut}`,
          "&:hover": {
            color: itemHoverColor
          },
          "&:active, &:focus:not(:focus-visible)": {
            color: itemActiveColor
          },
          ...genFocusStyle(token)
        }
      },
      [`${componentCls}-extra-content`]: {
        flex: "none"
      },
      // ============================ InkBar ============================
      [`${componentCls}-ink-bar`]: {
        position: "absolute",
        background: token.inkBarColor,
        pointerEvents: "none"
      },
      // ============================= Tabs =============================
      ...genTabStyle(token),
      // =========================== TabPanes ===========================
      [`${componentCls}-content`]: {
        position: "relative",
        width: "100%"
      },
      [`${componentCls}-content-holder`]: {
        flex: "auto",
        minWidth: 0,
        minHeight: 0
      },
      [`${componentCls}-tabpane`]: {
        outline: "none",
        "&-hidden": {
          display: "none"
        }
      }
    },
    [`${componentCls}-centered`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        [`${componentCls}-nav-wrap`]: {
          [`&:not([class*='${componentCls}-nav-wrap-ping'])`]: {
            justifyContent: "center"
          }
        }
      }
    }
  };
};
const useStyle$n = genComponentStyleHook(
  "Tabs",
  (token) => {
    const tabsToken = merge(token, {
      // `cardPadding` is empty by default, so we could calculate with dynamic `cardHeight`
      tabsCardPadding: token.cardPadding || `${(token.cardHeight - Math.round(token.fontSize * token.lineHeight)) / 2 - token.lineWidth}px ${token.padding}px`,
      dropdownEdgeChildVerticalPadding: token.paddingXXS,
      tabsActiveTextShadow: "0 0 0.25px currentcolor",
      tabsDropdownHeight: 200,
      tabsDropdownWidth: 120,
      tabsHorizontalItemMargin: `0 0 0 ${token.horizontalItemGutter}px`,
      tabsHorizontalItemMarginRTL: `0 0 0 ${token.horizontalItemGutter}px`
    });
    return [
      genSizeStyle$1(tabsToken),
      genPositionStyle(tabsToken),
      genDropdownStyle(tabsToken),
      genCardStyle$1(tabsToken),
      genTabsStyle(tabsToken),
      genMotionStyle$1(tabsToken)
    ];
  },
  (token) => {
    const cardHeight = token.controlHeightLG;
    return {
      zIndexPopup: token.zIndexPopupBase + 50,
      cardBg: token.colorFillAlter,
      cardHeight,
      // Initialize with empty string, because cardPadding will be calculated with cardHeight by default.
      cardPadding: ``,
      cardPaddingSM: `${token.paddingXXS * 1.5}px ${token.padding}px`,
      cardPaddingLG: `${token.paddingXS}px ${token.padding}px ${token.paddingXXS * 1.5}px`,
      titleFontSize: token.fontSize,
      titleFontSizeLG: token.fontSizeLG,
      titleFontSizeSM: token.fontSize,
      inkBarColor: token.colorPrimary,
      horizontalMargin: `0 0 ${token.margin}px 0`,
      horizontalItemGutter: 32,
      // Fixed Value
      // Initialize with empty string, because horizontalItemMargin will be calculated with horizontalItemGutter by default.
      horizontalItemMargin: ``,
      horizontalItemMarginRTL: ``,
      horizontalItemPadding: `${token.paddingSM}px 0`,
      horizontalItemPaddingSM: `${token.paddingXS}px 0`,
      horizontalItemPaddingLG: `${token.padding}px 0`,
      verticalItemPadding: `${token.paddingXS}px ${token.paddingLG}px`,
      verticalItemMargin: `${token.margin}px 0 0 0`,
      itemColor: token.colorText,
      itemSelectedColor: token.colorPrimary,
      itemHoverColor: token.colorPrimaryHover,
      itemActiveColor: token.colorPrimaryActive,
      cardGutter: token.marginXXS / 2
    };
  }
);

const TabPane = () => null;

const Tabs = (props) => {
  const {
    type,
    className,
    rootClassName,
    size: customSize,
    onEdit,
    hideAdd,
    centered,
    addIcon,
    popupClassName,
    children,
    items,
    animated,
    style,
    indicatorSize,
    ...otherProps
  } = props;
  const { prefixCls: customizePrefixCls, moreIcon = /* @__PURE__ */ jsx(MoreHorizIcon, {}) } = otherProps;
  const { tabs, getPrefixCls, getPopupContainer } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("tabs", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$n(prefixCls);
  let editable;
  if (type === "editable-card") {
    editable = {
      onEdit: (editType, { key, event }) => {
        onEdit?.(editType === "add" ? event : key, editType);
      },
      removeIcon: /* @__PURE__ */ jsx(CloseIcon, {}),
      addIcon: addIcon || /* @__PURE__ */ jsx(AddIcon, {}),
      showAdd: hideAdd !== true
    };
  }
  const rootPrefixCls = getPrefixCls();
  const mergedItems = useLegacyItems$1(items, children);
  const mergedAnimated = useAnimateConfig(prefixCls, animated);
  const size = useSize(customSize);
  const mergedStyle = { ...tabs?.style, ...style };
  return wrapSSR(
    /* @__PURE__ */ jsx(
      RcTabs,
      {
        direction: "ltr",
        getPopupContainer,
        moreTransitionName: `${rootPrefixCls}-slide-up`,
        ...otherProps,
        items: mergedItems,
        className: classNames(
          {
            [`${prefixCls}-${size}`]: size,
            [`${prefixCls}-card`]: ["card", "editable-card"].includes(type),
            [`${prefixCls}-editable-card`]: type === "editable-card",
            [`${prefixCls}-centered`]: centered
          },
          tabs?.className,
          className,
          rootClassName,
          hashId
        ),
        popupClassName: classNames(popupClassName, hashId),
        style: mergedStyle,
        editable,
        moreIcon,
        prefixCls,
        animated: mergedAnimated,
        indicatorSize: indicatorSize ?? tabs?.indicatorSize
      }
    )
  );
};
Tabs.TabPane = TabPane;

const Grid$1 = ({ prefixCls, className, hoverable = true, ...props }) => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefix = getPrefixCls("card", prefixCls);
  const classString = classNames(`${prefix}-grid`, className, {
    [`${prefix}-grid-hoverable`]: hoverable
  });
  return /* @__PURE__ */ jsx("div", { ...props, className: classString });
};

const genCardHeadStyle = (token) => {
  const { ipassCls, componentCls, headerHeight, cardPaddingBase, tabsMarginBottom } = token;
  return {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: headerHeight,
    marginBottom: -1,
    // Fix card grid overflow bug: https://gw.alipayobjects.com/zos/rmsportal/XonYxBikwpgbqIQBeuhk.png
    padding: `0 ${cardPaddingBase}px`,
    color: token.colorTextHeading,
    fontWeight: token.fontWeightStrong,
    fontSize: token.headerFontSize,
    background: token.headerBg,
    borderBottom: `${token.lineWidth}px ${token.lineType} ${token.colorBorderSecondary}`,
    borderRadius: `${token.borderRadiusLG}px ${token.borderRadiusLG}px 0 0`,
    ...clearFix(),
    "&-wrapper": {
      width: "100%",
      display: "flex",
      alignItems: "center"
    },
    "&-title": {
      display: "inline-block",
      flex: 1,
      ...textEllipsis,
      [`
          > ${componentCls}-typography,
          > ${componentCls}-typography-edit-content
        `]: {
        insetInlineStart: 0,
        marginTop: 0,
        marginBottom: 0
      }
    },
    [`${ipassCls}-tabs-top`]: {
      clear: "both",
      marginBottom: tabsMarginBottom,
      color: token.colorText,
      fontWeight: "normal",
      fontSize: token.fontSize,
      "&-bar": {
        borderBottom: `${token.lineWidth}px ${token.lineType} ${token.colorBorderSecondary}`
      }
    }
  };
};
const genCardGridStyle = (token) => {
  const { cardPaddingBase, colorBorderSecondary, cardShadow, lineWidth } = token;
  return {
    width: "33.33%",
    padding: cardPaddingBase,
    border: 0,
    borderRadius: 0,
    boxShadow: `
      ${lineWidth}px 0 0 0 ${colorBorderSecondary},
      0 ${lineWidth}px 0 0 ${colorBorderSecondary},
      ${lineWidth}px ${lineWidth}px 0 0 ${colorBorderSecondary},
      ${lineWidth}px 0 0 0 ${colorBorderSecondary} inset,
      0 ${lineWidth}px 0 0 ${colorBorderSecondary} inset;
    `,
    transition: `all ${token.motionDurationMid}`,
    "&-hoverable:hover": {
      position: "relative",
      zIndex: 1,
      boxShadow: cardShadow
    }
  };
};
const genCardActionsStyle = (token) => {
  const {
    componentCls,
    iconCls,
    actionsLiMargin,
    cardActionsIconSize,
    colorBorderSecondary,
    actionsBg
  } = token;
  return {
    margin: 0,
    padding: 0,
    listStyle: "none",
    background: actionsBg,
    borderTop: `${token.lineWidth}px ${token.lineType} ${colorBorderSecondary}`,
    display: "flex",
    borderRadius: `0 0 ${token.borderRadiusLG}px ${token.borderRadiusLG}px `,
    ...clearFix(),
    "& > li": {
      margin: actionsLiMargin,
      color: token.colorTextDescription,
      textAlign: "center",
      "> span": {
        position: "relative",
        display: "block",
        minWidth: token.cardActionsIconSize * 2,
        fontSize: token.fontSize,
        lineHeight: token.lineHeight,
        cursor: "pointer",
        "&:hover": {
          color: token.colorPrimary,
          transition: `color ${token.motionDurationMid}`
        },
        [`a:not(${componentCls}-btn), > ${iconCls}`]: {
          display: "inline-block",
          width: "100%",
          color: token.colorTextDescription,
          lineHeight: `${token.fontSize * token.lineHeight}px`,
          transition: `color ${token.motionDurationMid}`,
          "&:hover": {
            color: token.colorPrimary
          }
        },
        [`> ${iconCls}`]: {
          fontSize: cardActionsIconSize,
          lineHeight: `${cardActionsIconSize * token.lineHeight}px`
        }
      },
      "&:not(:last-child)": {
        borderInlineEnd: `${token.lineWidth}px ${token.lineType} ${colorBorderSecondary}`
      }
    }
  };
};
const genCardMetaStyle = (token) => ({
  margin: `-${token.marginXXS}px 0`,
  display: "flex",
  ...clearFix(),
  "&-avatar": {
    paddingInlineEnd: token.padding
  },
  "&-detail": {
    overflow: "hidden",
    flex: 1,
    "> div:not(:last-child)": {
      marginBottom: token.marginXS
    }
  },
  "&-title": {
    color: token.colorTextHeading,
    fontWeight: token.fontWeightStrong,
    fontSize: token.fontSizeLG,
    ...textEllipsis
  },
  "&-description": {
    color: token.colorTextDescription
  }
});
const genCardTypeInnerStyle = (token) => {
  const { componentCls, cardPaddingBase, colorFillAlter } = token;
  return {
    [`${componentCls}-head`]: {
      padding: `0 ${cardPaddingBase}px`,
      background: colorFillAlter,
      "&-title": {
        fontSize: token.fontSize
      }
    },
    [`${componentCls}-body`]: {
      padding: `${token.padding}px ${cardPaddingBase}px`
    }
  };
};
const genCardLoadingStyle = (token) => {
  const { componentCls } = token;
  return {
    overflow: "hidden",
    [`${componentCls}-body`]: {
      userSelect: "none"
    }
  };
};
const genCardStyle = (token) => {
  const {
    ipassCls,
    componentCls,
    cardShadow,
    cardHeadPadding,
    colorBorderSecondary,
    boxShadowTertiary,
    cardPaddingBase,
    extraColor
  } = token;
  return {
    [componentCls]: {
      ...resetComponent(token),
      position: "relative",
      background: token.colorBgContainer,
      borderRadius: token.borderRadiusLG,
      [`&:not(${componentCls}-bordered)`]: {
        boxShadow: boxShadowTertiary
      },
      [`${componentCls}-head`]: genCardHeadStyle(token),
      [`${componentCls}-extra`]: {
        // https://stackoverflow.com/a/22429853/3040605
        marginInlineStart: "auto",
        color: extraColor,
        fontWeight: "normal",
        fontSize: token.fontSize
      },
      [`${componentCls}-body`]: {
        padding: cardPaddingBase,
        borderRadius: ` 0 0 ${token.borderRadiusLG}px ${token.borderRadiusLG}px`,
        ...clearFix()
      },
      [`${componentCls}-grid`]: genCardGridStyle(token),
      [`${componentCls}-cover`]: {
        "> *": {
          display: "block",
          width: "100%"
        },
        [`img, img + ${ipassCls}-image-mask`]: {
          borderRadius: `${token.borderRadiusLG}px ${token.borderRadiusLG}px 0 0`
        }
      },
      [`${componentCls}-actions`]: genCardActionsStyle(token),
      [`${componentCls}-meta`]: genCardMetaStyle(token)
    },
    [`${componentCls}-bordered`]: {
      border: `${token.lineWidth}px ${token.lineType} ${colorBorderSecondary}`,
      [`${componentCls}-cover`]: {
        marginTop: -1,
        marginInlineStart: -1,
        marginInlineEnd: -1
      }
    },
    [`${componentCls}-hoverable`]: {
      cursor: "pointer",
      transition: `box-shadow ${token.motionDurationMid}, border-color ${token.motionDurationMid}`,
      "&:hover": {
        borderColor: "transparent",
        boxShadow: cardShadow
      }
    },
    [`${componentCls}-contain-grid`]: {
      borderRadius: `${token.borderRadiusLG}px ${token.borderRadiusLG}px 0 0 `,
      [`${componentCls}-body`]: {
        display: "flex",
        flexWrap: "wrap"
      },
      [`&:not(${componentCls}-loading) ${componentCls}-body`]: {
        marginBlockStart: -token.lineWidth,
        marginInlineStart: -token.lineWidth,
        padding: 0
      }
    },
    [`${componentCls}-contain-tabs`]: {
      [`> ${componentCls}-head`]: {
        [`${componentCls}-head-title, ${componentCls}-extra`]: {
          paddingTop: cardHeadPadding
        }
      }
    },
    [`${componentCls}-type-inner`]: genCardTypeInnerStyle(token),
    [`${componentCls}-loading`]: genCardLoadingStyle(token)
  };
};
const genCardSizeStyle = (token) => {
  const { componentCls, cardPaddingSM, headerHeightSM, headerFontSizeSM } = token;
  return {
    [`${componentCls}-small`]: {
      [`> ${componentCls}-head`]: {
        minHeight: headerHeightSM,
        padding: `0 ${cardPaddingSM}px`,
        fontSize: headerFontSizeSM,
        [`> ${componentCls}-head-wrapper`]: {
          [`> ${componentCls}-extra`]: {
            fontSize: token.fontSize
          }
        }
      },
      [`> ${componentCls}-body`]: {
        padding: cardPaddingSM
      }
    },
    [`${componentCls}-small${componentCls}-contain-tabs`]: {
      [`> ${componentCls}-head`]: {
        [`${componentCls}-head-title, ${componentCls}-extra`]: {
          minHeight: headerHeightSM,
          paddingTop: 0,
          display: "flex",
          alignItems: "center"
        }
      }
    }
  };
};
const useStyle$m = genComponentStyleHook(
  "Card",
  (token) => {
    const cardToken = merge(token, {
      cardShadow: token.boxShadowCard,
      cardHeadPadding: token.padding,
      cardPaddingBase: token.paddingLG,
      cardActionsIconSize: token.fontSize,
      cardPaddingSM: 12
      // Fixed padding.
    });
    return [
      // Style
      genCardStyle(cardToken),
      // Size
      genCardSizeStyle(cardToken)
    ];
  },
  (token) => ({
    headerBg: "transparent",
    headerFontSize: token.fontSizeLG,
    headerFontSizeSM: token.fontSize,
    headerHeight: token.fontSizeLG * token.lineHeightLG + token.padding * 2,
    headerHeightSM: token.fontSize * token.lineHeight + token.paddingXS * 2,
    actionsBg: token.colorBgContainer,
    actionsLiMargin: `${token.paddingSM}px 0`,
    tabsMarginBottom: -token.padding - token.lineWidth,
    extraColor: token.colorText
  })
);

function getAction(actions) {
  return actions.map((action, index) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ jsx("li", { style: { width: `${100 / actions.length}%` }, children: /* @__PURE__ */ jsx("span", { children: action }) }, `action-${index}`)
  ));
}
const Card$1 = React.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    extra,
    headStyle = {},
    bodyStyle = {},
    title,
    loading,
    bordered = true,
    size: customizeSize,
    type,
    cover,
    actions,
    tabList,
    children,
    activeTabKey,
    defaultActiveTabKey,
    tabBarExtraContent,
    hoverable,
    tabProps = {},
    ...others
  } = props;
  const { getPrefixCls, card } = React.useContext(ConfigContext);
  const onTabChange = (key) => {
    props.onTabChange?.(key);
  };
  const isContainGrid = React.useMemo(() => {
    let containGrid = false;
    React.Children.forEach(children, (element) => {
      if (element && element.type && element.type === Grid$1) {
        containGrid = true;
      }
    });
    return containGrid;
  }, [children]);
  const prefixCls = getPrefixCls("card", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$m(prefixCls);
  const loadingBlock = /* @__PURE__ */ jsx(Skeleton, { loading: true, active: true, paragraph: { rows: 4 }, title: false, children });
  const hasActiveTabKey = activeTabKey !== void 0;
  const extraProps = {
    ...tabProps,
    [hasActiveTabKey ? "activeKey" : "defaultActiveKey"]: hasActiveTabKey ? activeTabKey : defaultActiveTabKey,
    tabBarExtraContent
  };
  let head;
  const mergedSize = useSize(customizeSize);
  const tabSize = !mergedSize || mergedSize === "default" ? "large" : mergedSize;
  const tabs = tabList ? /* @__PURE__ */ jsx(
    Tabs,
    {
      size: tabSize,
      ...extraProps,
      className: `${prefixCls}-head-tabs`,
      onChange: onTabChange,
      items: tabList.map(({ tab, ...item }) => ({ label: tab, ...item }))
    }
  ) : null;
  if (title || extra || tabs) {
    head = /* @__PURE__ */ jsxs("div", { className: `${prefixCls}-head`, style: headStyle, children: [
      /* @__PURE__ */ jsxs("div", { className: `${prefixCls}-head-wrapper`, children: [
        title && /* @__PURE__ */ jsx("div", { className: `${prefixCls}-head-title`, children: title }),
        extra && /* @__PURE__ */ jsx("div", { className: `${prefixCls}-extra`, children: extra })
      ] }),
      tabs
    ] });
  }
  const coverDom = cover ? /* @__PURE__ */ jsx("div", { className: `${prefixCls}-cover`, children: cover }) : null;
  const body = /* @__PURE__ */ jsx("div", { className: `${prefixCls}-body`, style: bodyStyle, children: loading ? loadingBlock : children });
  const actionDom = actions && actions.length ? /* @__PURE__ */ jsx("ul", { className: `${prefixCls}-actions`, children: getAction(actions) }) : null;
  const divProps = omit(others, ["onTabChange"]);
  const classString = classNames(
    prefixCls,
    card?.className,
    {
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-bordered`]: bordered,
      [`${prefixCls}-hoverable`]: hoverable,
      [`${prefixCls}-contain-grid`]: isContainGrid,
      [`${prefixCls}-contain-tabs`]: tabList && tabList.length,
      [`${prefixCls}-${mergedSize}`]: mergedSize,
      [`${prefixCls}-type-${type}`]: !!type
    },
    className,
    rootClassName,
    hashId
  );
  const mergedStyle = { ...card?.style, ...style };
  return wrapSSR(
    /* @__PURE__ */ jsxs("div", { ref, ...divProps, className: classString, style: mergedStyle, children: [
      head,
      coverDom,
      body,
      actionDom
    ] })
  );
});

const Meta$1 = (props) => {
  const { prefixCls: customizePrefixCls, className, avatar, title, description, ...others } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("card", customizePrefixCls);
  const classString = classNames(`${prefixCls}-meta`, className);
  const avatarDom = avatar ? /* @__PURE__ */ jsx("div", { className: `${prefixCls}-meta-avatar`, children: avatar }) : null;
  const titleDom = title ? /* @__PURE__ */ jsx("div", { className: `${prefixCls}-meta-title`, children: title }) : null;
  const descriptionDom = description ? /* @__PURE__ */ jsx("div", { className: `${prefixCls}-meta-description`, children: description }) : null;
  const MetaDetail = titleDom || descriptionDom ? /* @__PURE__ */ jsxs("div", { className: `${prefixCls}-meta-detail`, children: [
    titleDom,
    descriptionDom
  ] }) : null;
  return /* @__PURE__ */ jsxs("div", { ...others, className: classString, children: [
    avatarDom,
    MetaDetail
  ] });
};

const Card = Card$1;
Card.Grid = Grid$1;
Card.Meta = Meta$1;

const GroupContext = React__default.createContext(null);

const genCheckboxStyle = (token) => {
  const { checkboxCls } = token;
  const wrapperCls = `${checkboxCls}-wrapper`;
  return [
    // ===================== Basic =====================
    {
      // Group
      [`${checkboxCls}-group`]: {
        ...resetComponent(token),
        display: "inline-flex",
        flexWrap: "wrap",
        columnGap: token.marginXS,
        // Group > Grid
        [`> ${token.ipassCls}-row`]: {
          flex: 1
        }
      },
      // Wrapper
      [wrapperCls]: {
        ...resetComponent(token),
        display: "inline-flex",
        alignItems: "baseline",
        cursor: "pointer",
        // Fix checkbox & radio in flex align #30260
        "&:after": {
          display: "inline-block",
          width: 0,
          overflow: "hidden",
          content: "'\\a0'"
        },
        // Checkbox near checkbox
        [`& + ${wrapperCls}`]: {
          marginInlineStart: 0
        },
        [`&${wrapperCls}-in-form-item`]: {
          'input[type="checkbox"]': {
            width: 14,
            // FIXME: magic
            height: 14
            // FIXME: magic
          }
        }
      },
      // Wrapper > Checkbox
      [checkboxCls]: {
        ...resetComponent(token),
        position: "relative",
        whiteSpace: "nowrap",
        lineHeight: 1,
        cursor: "pointer",
        borderRadius: token.borderRadiusSM,
        // To make alignment right when `controlHeight` is changed
        alignSelf: "center",
        // Wrapper > Checkbox > input
        [`${checkboxCls}-input`]: {
          position: "absolute",
          // Since baseline align will get additional space offset,
          // we need to move input to top to make it align with text.
          inset: 0,
          zIndex: 1,
          cursor: "pointer",
          opacity: 0,
          margin: 0,
          [`&:focus-visible + ${checkboxCls}-inner`]: {
            ...genFocusOutline(token)
          }
        },
        // Wrapper > Checkbox > inner
        [`${checkboxCls}-inner`]: {
          boxSizing: "border-box",
          position: "relative",
          top: 0,
          insetInlineStart: 0,
          display: "block",
          width: token.checkboxSize,
          height: token.checkboxSize,
          backgroundColor: token.colorBgContainer,
          border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
          borderRadius: token.borderRadiusSM,
          borderCollapse: "separate",
          transition: `all ${token.motionDurationSlow}`,
          "&:after": {
            boxSizing: "border-box",
            position: "absolute",
            top: "50%",
            insetInlineStart: "21.5%",
            display: "table",
            width: token.checkboxSize / 14 * 5,
            height: token.checkboxSize / 14 * 8,
            border: `${token.lineWidthBold}px solid ${token.colorWhite}`,
            borderTop: 0,
            borderInlineStart: 0,
            transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
            opacity: 0,
            content: '""',
            transition: `all ${token.motionDurationFast} ${token.motionEaseInBack}, opacity ${token.motionDurationFast}`
          }
        },
        // Wrapper > Checkbox + Text
        "& + span": {
          paddingInlineStart: token.paddingXS,
          paddingInlineEnd: token.paddingXS
        }
      }
    },
    // ===================== Hover =====================
    {
      // Wrapper & Wrapper > Checkbox
      [`
        ${wrapperCls}:not(${wrapperCls}-disabled),
        ${checkboxCls}:not(${checkboxCls}-disabled)
      `]: {
        [`&:hover ${checkboxCls}-inner`]: {
          borderColor: token.colorPrimary
        }
      },
      [`${wrapperCls}:not(${wrapperCls}-disabled)`]: {
        [`&:hover ${checkboxCls}-checked:not(${checkboxCls}-disabled) ${checkboxCls}-inner`]: {
          backgroundColor: token.colorPrimaryHover,
          borderColor: "transparent"
        },
        [`&:hover ${checkboxCls}-checked:not(${checkboxCls}-disabled):after`]: {
          borderColor: token.colorPrimaryHover
        }
      }
    },
    // ==================== Checked ====================
    {
      // Wrapper > Checkbox
      [`${checkboxCls}-checked`]: {
        [`${checkboxCls}-inner`]: {
          backgroundColor: token.colorPrimary,
          borderColor: token.colorPrimary,
          "&:after": {
            opacity: 1,
            transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
            transition: `all ${token.motionDurationMid} ${token.motionEaseOutBack} ${token.motionDurationFast}`
          }
        }
      },
      [`
        ${wrapperCls}-checked:not(${wrapperCls}-disabled),
        ${checkboxCls}-checked:not(${checkboxCls}-disabled)
      `]: {
        [`&:hover ${checkboxCls}-inner`]: {
          backgroundColor: token.colorPrimaryHover,
          borderColor: "transparent"
        }
      }
    },
    // ================= Indeterminate =================
    {
      [checkboxCls]: {
        "&-indeterminate": {
          // Wrapper > Checkbox > inner
          [`${checkboxCls}-inner`]: {
            backgroundColor: token.colorBgContainer,
            borderColor: token.colorBorder,
            "&:after": {
              top: "50%",
              insetInlineStart: "50%",
              width: token.fontSizeLG / 2,
              height: token.fontSizeLG / 2,
              backgroundColor: token.colorPrimary,
              border: 0,
              transform: "translate(-50%, -50%) scale(1)",
              opacity: 1,
              content: '""'
            }
          }
        }
      }
    },
    // ==================== Disable ====================
    {
      // Wrapper
      [`${wrapperCls}-disabled`]: {
        cursor: "not-allowed"
      },
      // Wrapper > Checkbox
      [`${checkboxCls}-disabled`]: {
        // Wrapper > Checkbox > input
        [`&, ${checkboxCls}-input`]: {
          cursor: "not-allowed",
          // Disabled for native input to enable Tooltip event handler
          pointerEvents: "none"
        },
        // Wrapper > Checkbox > inner
        [`${checkboxCls}-inner`]: {
          background: token.colorBgContainerDisabled,
          borderColor: token.colorBorder,
          "&:after": {
            borderColor: token.colorTextDisabled
          }
        },
        "&:after": {
          display: "none"
        },
        "& + span": {
          color: token.colorTextDisabled
        },
        [`&${checkboxCls}-indeterminate ${checkboxCls}-inner::after`]: {
          background: token.colorTextDisabled
        }
      }
    }
  ];
};
function getStyle$1(prefixCls, token) {
  const checkboxToken = merge(token, {
    checkboxCls: `.${prefixCls}`,
    checkboxSize: token.controlInteractiveSize
  });
  return [genCheckboxStyle(checkboxToken)];
}
const useStyle$l = genComponentStyleHook("Checkbox", (token, { prefixCls }) => [
  getStyle$1(prefixCls, token)
]);

const InternalCheckbox = (props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    children,
    indeterminate = false,
    style,
    onMouseEnter,
    onMouseLeave,
    skipGroup = false,
    disabled,
    ...restProps
  } = props;
  const { getPrefixCls, checkbox } = React.useContext(ConfigContext);
  const checkboxGroup = React.useContext(GroupContext);
  const { isFormItemInput } = React.useContext(FormItemInputContext);
  const contextDisabled = React.useContext(DisabledContext);
  const mergedDisabled = (checkboxGroup?.disabled || disabled) ?? contextDisabled;
  const prevValue = React.useRef(restProps.value);
  React.useEffect(() => {
    checkboxGroup?.registerValue(restProps.value);
  }, []);
  React.useEffect(() => {
    if (skipGroup) {
      return;
    }
    if (restProps.value !== prevValue.current) {
      checkboxGroup?.cancelValue(prevValue.current);
      checkboxGroup?.registerValue(restProps.value);
      prevValue.current = restProps.value;
    }
    return () => checkboxGroup?.cancelValue(restProps.value);
  }, [restProps.value]);
  const prefixCls = getPrefixCls("checkbox", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$l(prefixCls);
  const checkboxProps = { ...restProps };
  if (checkboxGroup && !skipGroup) {
    checkboxProps.onChange = (...args) => {
      if (restProps.onChange) {
        restProps.onChange(...args);
      }
      if (checkboxGroup.toggleOption) {
        checkboxGroup.toggleOption({ label: children, value: restProps.value });
      }
    };
    checkboxProps.name = checkboxGroup.name;
    checkboxProps.checked = checkboxGroup.value.includes(restProps.value);
  }
  const classString = classNames(
    `${prefixCls}-wrapper`,
    {
      [`${prefixCls}-wrapper-checked`]: checkboxProps.checked,
      [`${prefixCls}-wrapper-disabled`]: mergedDisabled,
      [`${prefixCls}-wrapper-in-form-item`]: isFormItemInput
    },
    checkbox?.className,
    className,
    rootClassName,
    hashId
  );
  const checkboxClass = classNames(
    {
      [`${prefixCls}-indeterminate`]: indeterminate
    },
    TARGET_CLS,
    hashId
  );
  const ariaChecked = indeterminate ? "mixed" : void 0;
  return wrapSSR(
    /* @__PURE__ */ jsx(Wave, { component: "Checkbox", disabled: mergedDisabled, children: /* @__PURE__ */ jsxs(
      "label",
      {
        className: classString,
        style: { ...checkbox?.style, ...style },
        onMouseEnter,
        onMouseLeave,
        children: [
          /* @__PURE__ */ jsx(
            RcCheckbox,
            {
              "aria-checked": ariaChecked,
              ...checkboxProps,
              prefixCls,
              className: checkboxClass,
              disabled: mergedDisabled,
              ref
            }
          ),
          children !== void 0 && /* @__PURE__ */ jsx("span", { children })
        ]
      }
    ) })
  );
};
const Checkbox$1 = React.forwardRef(InternalCheckbox);

const InternalGroup = (props, ref) => {
  const {
    defaultValue,
    children,
    options = [],
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    onChange,
    ...restProps
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const [value, setValue] = React.useState(
    restProps.value || defaultValue || []
  );
  const [registeredValues, setRegisteredValues] = React.useState([]);
  React.useEffect(() => {
    if ("value" in restProps) {
      setValue(restProps.value || []);
    }
  }, [restProps.value]);
  const memoOptions = React.useMemo(
    () => options.map((option) => {
      if (typeof option === "string" || typeof option === "number") {
        return { label: option, value: option };
      }
      return option;
    }),
    [options]
  );
  const cancelValue = (val) => {
    setRegisteredValues((prevValues) => prevValues.filter((v) => v !== val));
  };
  const registerValue = (val) => {
    setRegisteredValues((prevValues) => [...prevValues, val]);
  };
  const toggleOption = (option) => {
    const optionIndex = value.indexOf(option.value);
    const newValue = [...value];
    if (optionIndex === -1) {
      newValue.push(option.value);
    } else {
      newValue.splice(optionIndex, 1);
    }
    if (!("value" in restProps)) {
      setValue(newValue);
    }
    onChange?.(
      newValue.filter((val) => registeredValues.includes(val)).sort((a, b) => {
        const indexA = memoOptions.findIndex((opt) => opt.value === a);
        const indexB = memoOptions.findIndex((opt) => opt.value === b);
        return indexA - indexB;
      })
    );
  };
  const prefixCls = getPrefixCls("checkbox", customizePrefixCls);
  const groupPrefixCls = `${prefixCls}-group`;
  const [wrapSSR, hashId] = useStyle$l(prefixCls);
  const domProps = omit(restProps, ["value", "disabled"]);
  const childrenNode = options.length ? memoOptions.map((option) => /* @__PURE__ */ jsx(
    Checkbox$1,
    {
      prefixCls,
      disabled: "disabled" in option ? option.disabled : restProps.disabled,
      value: option.value,
      checked: value.includes(option.value),
      onChange: option.onChange,
      className: `${groupPrefixCls}-item`,
      style: option.style,
      title: option.title,
      children: option.label
    },
    option.value.toString()
  )) : children;
  const context = {
    toggleOption,
    value,
    disabled: restProps.disabled,
    name: restProps.name,
    registerValue,
    cancelValue
  };
  const classString = classNames(
    groupPrefixCls,
    className,
    rootClassName,
    hashId
  );
  return wrapSSR(
    /* @__PURE__ */ jsx("div", { className: classString, style, ...domProps, ref, children: /* @__PURE__ */ jsx(GroupContext.Provider, { value: context, children: childrenNode }) })
  );
};
const CheckboxGroup = React.forwardRef(InternalGroup);
const Group$1 = React.memo(CheckboxGroup);

const Checkbox = Checkbox$1;
Checkbox.Group = Group$1;
Checkbox.__IPASS_CHECKBOX = true;

const RowContext = createContext({});

const genGridRowStyle = (token) => {
  const { componentCls } = token;
  return {
    // Grid system
    [componentCls]: {
      display: "flex",
      flexFlow: "row wrap",
      minWidth: 0,
      "&::before, &::after": {
        display: "flex"
      },
      "&-no-wrap": {
        flexWrap: "nowrap"
      },
      // The origin of the X-axis
      "&-start": {
        justifyContent: "flex-start"
      },
      // The center of the X-axis
      "&-center": {
        justifyContent: "center"
      },
      // The opposite of the X-axis
      "&-end": {
        justifyContent: "flex-end"
      },
      "&-space-between": {
        justifyContent: "space-between"
      },
      "&-space-around": {
        justifyContent: "space-around"
      },
      "&-space-evenly": {
        justifyContent: "space-evenly"
      },
      // Align at the top
      "&-top": {
        alignItems: "flex-start"
      },
      // Align at the center
      "&-medium": {
        alignItems: "center"
      },
      "&-bottom": {
        alignItems: "flex-end"
      }
    }
  };
};
const genGridColStyle = (token) => {
  const { componentCls } = token;
  return {
    // Grid system
    [componentCls]: {
      position: "relative",
      maxWidth: "100%",
      // Prevent columns from collapsing when empty
      minHeight: 1
    }
  };
};
const genLoopGridColumnsStyle = (token, sizeCls) => {
  const { componentCls, gridColumns } = token;
  const gridColumnsStyle = {};
  for (let i = gridColumns; i >= 0; i--) {
    if (i === 0) {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = {
        display: "none"
      };
      gridColumnsStyle[`${componentCls}-push-${i}`] = {
        insetInlineStart: "auto"
      };
      gridColumnsStyle[`${componentCls}-pull-${i}`] = {
        insetInlineEnd: "auto"
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: "auto"
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: "auto"
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineStart: 0
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: 0
      };
    } else {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = [
        // Form set `display: flex` on Col which will override `display: block`.
        // Let's get it from css variable to support override.
        {
          ["--ipass-display"]: "block",
          // Fallback to display if variable not support
          display: "block"
        },
        {
          display: "var(--ipass-display)",
          flex: `0 0 ${i / gridColumns * 100}%`,
          maxWidth: `${i / gridColumns * 100}%`
        }
      ];
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: i
      };
    }
  }
  return gridColumnsStyle;
};
const genGridStyle = (token, sizeCls) => genLoopGridColumnsStyle(token, sizeCls);
const genGridMediaStyle = (token, screenSize, sizeCls) => ({
  [`@media (min-width: ${screenSize}px)`]: {
    ...genGridStyle(token, sizeCls)
  }
});
const useRowStyle = genComponentStyleHook("Grid", (token) => [genGridRowStyle(token)]);
const useColStyle = genComponentStyleHook("Grid", (token) => {
  const gridToken = merge(token, {
    gridColumns: 24
    // Row is divided into 24 parts in Grid
  });
  const gridMediaSizesMap = {
    "-sm": gridToken.screenSMMin,
    "-md": gridToken.screenMDMin,
    "-lg": gridToken.screenLGMin,
    "-xl": gridToken.screenXLMin,
    "-xxl": gridToken.screenXXLMin
  };
  return [
    genGridColStyle(gridToken),
    genGridStyle(gridToken, ""),
    genGridStyle(gridToken, "-xs"),
    Object.keys(gridMediaSizesMap).map(
      (key) => genGridMediaStyle(gridToken, gridMediaSizesMap[key], key)
    ).reduce((pre, cur) => ({ ...pre, ...cur }), {})
  ];
});

function parseFlex(flex) {
  if (typeof flex === "number") {
    return `${flex} ${flex} auto`;
  }
  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }
  return flex;
}
const sizes = ["xs", "sm", "md", "lg", "xl", "xxl"];
const Col = React.forwardRef((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const { gutter, wrap } = React.useContext(RowContext);
  const {
    prefixCls: customizePrefixCls,
    span,
    order,
    offset,
    push,
    pull,
    className,
    children,
    flex,
    style,
    ...others
  } = props;
  const prefixCls = getPrefixCls("col", customizePrefixCls);
  const [wrapSSR, hashId] = useColStyle(prefixCls);
  let sizeClassObj = {};
  sizes.forEach((size) => {
    let sizeProps = {};
    const propSize = props[size];
    if (typeof propSize === "number") {
      sizeProps.span = propSize;
    } else if (typeof propSize === "object") {
      sizeProps = propSize || {};
    }
    delete others[size];
    sizeClassObj = {
      ...sizeClassObj,
      [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== void 0,
      [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
      [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
      [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
      [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
      [`${prefixCls}-${size}-flex-${sizeProps.flex}`]: sizeProps.flex || sizeProps.flex === "auto"
    };
  });
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${span}`]: span !== void 0,
      [`${prefixCls}-order-${order}`]: order,
      [`${prefixCls}-offset-${offset}`]: offset,
      [`${prefixCls}-push-${push}`]: push,
      [`${prefixCls}-pull-${pull}`]: pull
    },
    className,
    sizeClassObj,
    hashId
  );
  const mergedStyle = {};
  if (gutter && gutter[0] > 0) {
    const horizontalGutter = gutter[0] / 2;
    mergedStyle.paddingLeft = horizontalGutter;
    mergedStyle.paddingRight = horizontalGutter;
  }
  if (flex) {
    mergedStyle.flex = parseFlex(flex);
    if (wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0;
    }
  }
  return wrapSSR(
    /* @__PURE__ */ jsx("div", { ...others, style: { ...mergedStyle, ...style }, className: classes, ref, children })
  );
});

function useForceUpdate() {
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);
  return forceUpdate;
}

const responsiveArray = ["xxl", "xl", "lg", "md", "sm", "xs"];
const getResponsiveMap = (token) => ({
  xs: `(max-width: ${token.screenXSMax}px)`,
  sm: `(min-width: ${token.screenSM}px)`,
  md: `(min-width: ${token.screenMD}px)`,
  lg: `(min-width: ${token.screenLG}px)`,
  xl: `(min-width: ${token.screenXL}px)`,
  xxl: `(min-width: ${token.screenXXL}px)`
});
const validateBreakpoints = (token) => {
  const indexableToken = token;
  const revBreakpoints = [...responsiveArray].reverse();
  revBreakpoints.forEach((breakpoint, i) => {
    const breakpointUpper = breakpoint.toUpperCase();
    const screenMin = `screen${breakpointUpper}Min`;
    const screen = `screen${breakpointUpper}`;
    if (!(indexableToken[screenMin] <= indexableToken[screen])) {
      throw new Error(
        `${screenMin}<=${screen} fails : !(${indexableToken[screenMin]}<=${indexableToken[screen]})`
      );
    }
    if (i < revBreakpoints.length - 1) {
      const screenMax = `screen${breakpointUpper}Max`;
      if (!(indexableToken[screen] <= indexableToken[screenMax])) {
        throw new Error(
          `${screen}<=${screenMax} fails : !(${indexableToken[screen]}<=${indexableToken[screenMax]})`
        );
      }
      const nextBreakpointUpperMin = revBreakpoints[i + 1].toUpperCase();
      const nextScreenMin = `screen${nextBreakpointUpperMin}Min`;
      if (!(indexableToken[screenMax] <= indexableToken[nextScreenMin])) {
        throw new Error(
          `${screenMax}<=${nextScreenMin} fails : !(${indexableToken[screenMax]}<=${indexableToken[nextScreenMin]})`
        );
      }
    }
  });
  return token;
};
function useResponsiveObserver() {
  const [, token] = useToken$1();
  const responsiveMap = getResponsiveMap(validateBreakpoints(token));
  return React__default.useMemo(() => {
    const subscribers = /* @__PURE__ */ new Map();
    let subUid = -1;
    let screens = {};
    return {
      matchHandlers: {},
      dispatch(pointMap) {
        screens = pointMap;
        subscribers.forEach((func) => func(screens));
        return subscribers.size >= 1;
      },
      subscribe(func) {
        if (!subscribers.size)
          this.register();
        subUid += 1;
        subscribers.set(subUid, func);
        func(screens);
        return subUid;
      },
      unsubscribe(paramToken) {
        subscribers.delete(paramToken);
        if (!subscribers.size)
          this.unregister();
      },
      unregister() {
        Object.keys(responsiveMap).forEach((screen) => {
          const matchMediaQuery = responsiveMap[screen];
          const handler = this.matchHandlers[matchMediaQuery];
          handler?.mql.removeListener(handler?.listener);
        });
        subscribers.clear();
      },
      register() {
        Object.keys(responsiveMap).forEach((screen) => {
          const matchMediaQuery = responsiveMap[screen];
          const listener = ({ matches }) => {
            this.dispatch({
              ...screens,
              [screen]: matches
            });
          };
          const mql = window.matchMedia(matchMediaQuery);
          mql.addListener(listener);
          this.matchHandlers[matchMediaQuery] = {
            mql,
            listener
          };
          listener(mql);
        });
      },
      responsiveMap
    };
  }, [token]);
}
const matchScreen = (screens, screenSizes) => {
  if (screenSizes && typeof screenSizes === "object") {
    for (let i = 0; i < responsiveArray.length; i++) {
      const breakpoint = responsiveArray[i];
      if (screens[breakpoint] && screenSizes[breakpoint] !== void 0) {
        return screenSizes[breakpoint];
      }
    }
  }
};

function useBreakpoint$1(refreshOnChange = true) {
  const screensRef = useRef({});
  const forceUpdate = useForceUpdate();
  const responsiveObserver = useResponsiveObserver();
  useIsomorphicLayoutEffect(() => {
    const token = responsiveObserver.subscribe((supportScreens) => {
      screensRef.current = supportScreens;
      if (refreshOnChange) {
        forceUpdate();
      }
    });
    return () => responsiveObserver.unsubscribe(token);
  }, []);
  return screensRef.current;
}

function useMergePropByScreen(oriProp, screen) {
  const [prop, setProp] = React.useState(typeof oriProp === "string" ? oriProp : "");
  const calcMergeAlignOrJustify = () => {
    if (typeof oriProp === "string") {
      setProp(oriProp);
    }
    if (typeof oriProp !== "object") {
      return;
    }
    for (let i = 0; i < responsiveArray.length; i++) {
      const breakpoint = responsiveArray[i];
      if (!screen[breakpoint]) {
        continue;
      }
      const curVal = oriProp[breakpoint];
      if (curVal !== void 0) {
        setProp(curVal);
        return;
      }
    }
  };
  React.useEffect(() => {
    calcMergeAlignOrJustify();
  }, [JSON.stringify(oriProp), screen]);
  return prop;
}
const Row$1 = React.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    justify,
    align,
    className,
    style,
    children,
    gutter = 0,
    wrap,
    ...others
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const [screens, setScreens] = React.useState({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true
  });
  const [curScreens, setCurScreens] = React.useState({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false
  });
  const mergeAlign = useMergePropByScreen(align, curScreens);
  const mergeJustify = useMergePropByScreen(justify, curScreens);
  const gutterRef = React.useRef(gutter);
  const responsiveObserver = useResponsiveObserver();
  React.useEffect(() => {
    const token = responsiveObserver.subscribe((screen) => {
      setCurScreens(screen);
      const currentGutter = gutterRef.current || 0;
      if (!Array.isArray(currentGutter) && typeof currentGutter === "object" || Array.isArray(currentGutter) && (typeof currentGutter[0] === "object" || typeof currentGutter[1] === "object")) {
        setScreens(screen);
      }
    });
    return () => responsiveObserver.unsubscribe(token);
  }, []);
  const getGutter = () => {
    const results = [void 0, void 0];
    const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, void 0];
    normalizedGutter.forEach((g, index) => {
      if (typeof g === "object") {
        for (let i = 0; i < responsiveArray.length; i++) {
          const breakpoint = responsiveArray[i];
          if (screens[breakpoint] && g[breakpoint] !== void 0) {
            results[index] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index] = g;
      }
    });
    return results;
  };
  const prefixCls = getPrefixCls("row", customizePrefixCls);
  const [wrapSSR, hashId] = useRowStyle(prefixCls);
  const gutters = getGutter();
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-no-wrap`]: wrap === false,
      [`${prefixCls}-${mergeJustify}`]: mergeJustify,
      [`${prefixCls}-${mergeAlign}`]: mergeAlign
    },
    className,
    hashId
  );
  const rowStyle = {};
  const horizontalGutter = gutters[0] != null && gutters[0] > 0 ? gutters[0] / -2 : void 0;
  if (horizontalGutter) {
    rowStyle.marginLeft = horizontalGutter;
    rowStyle.marginRight = horizontalGutter;
  }
  [, rowStyle.rowGap] = gutters;
  const [gutterH, gutterV] = gutters;
  const rowContext = React.useMemo(
    () => ({ gutter: [gutterH, gutterV], wrap }),
    [gutterH, gutterV, wrap]
  );
  return wrapSSR(
    /* @__PURE__ */ jsx(RowContext.Provider, { value: rowContext, children: /* @__PURE__ */ jsx("div", { ...others, className: classes, style: { ...rowStyle, ...style }, ref, children }) })
  );
});

function useBreakpoint() {
  return useBreakpoint$1();
}
const Grid = { useBreakpoint };

const CollapsePanel = React.forwardRef((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const { prefixCls: customizePrefixCls, className, showArrow = true } = props;
  const prefixCls = getPrefixCls("collapse", customizePrefixCls);
  const collapsePanelClassName = classNames(
    {
      [`${prefixCls}-no-arrow`]: !showArrow
    },
    className
  );
  return /* @__PURE__ */ jsx(
    RcCollapse.Panel,
    {
      ref,
      ...props,
      prefixCls,
      className: collapsePanelClassName
    }
  );
});

const genBaseStyle$5 = (token) => {
  const {
    componentCls,
    contentBg,
    padding,
    headerBg,
    headerPadding,
    collapseHeaderPaddingSM,
    collapseHeaderPaddingLG,
    collapsePanelBorderRadius,
    lineWidth,
    lineType,
    colorBorder,
    colorText,
    colorTextHeading,
    colorTextDisabled,
    fontSize,
    fontSizeLG,
    lineHeight,
    marginSM,
    paddingSM,
    paddingLG,
    paddingXS,
    motionDurationSlow,
    fontSizeIcon,
    contentPadding
  } = token;
  const borderBase = `${lineWidth}px ${lineType} ${colorBorder}`;
  return {
    [componentCls]: {
      ...resetComponent(token),
      backgroundColor: headerBg,
      border: borderBase,
      borderBottom: 0,
      borderRadius: `${collapsePanelBorderRadius}px`,
      [`& > ${componentCls}-item`]: {
        borderBottom: borderBase,
        [`&:last-child`]: {
          [`
            &,
            & > ${componentCls}-header`]: {
            borderRadius: `0 0 ${collapsePanelBorderRadius}px ${collapsePanelBorderRadius}px`
          }
        },
        [`> ${componentCls}-header`]: {
          position: "relative",
          // Compatibility, should remove in next version
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "flex-start",
          padding: headerPadding,
          color: colorTextHeading,
          lineHeight,
          cursor: "pointer",
          transition: `all ${motionDurationSlow}, visibility 0s`,
          [`> ${componentCls}-header-text`]: {
            flex: "auto"
          },
          "&:focus": {
            outline: "none"
          },
          // >>>>> Arrow
          [`${componentCls}-expand-icon`]: {
            height: fontSize * lineHeight,
            display: "flex",
            alignItems: "center",
            paddingInlineEnd: marginSM
          },
          [`${componentCls}-arrow`]: {
            ...resetIcon(),
            fontSize: fontSizeIcon,
            svg: {
              transition: `transform ${motionDurationSlow}`
            }
          },
          // >>>>> Text
          [`${componentCls}-header-text`]: {
            marginInlineEnd: "auto"
          }
        },
        [`${componentCls}-header-collapsible-only`]: {
          cursor: "default",
          [`${componentCls}-header-text`]: {
            flex: "none",
            cursor: "pointer"
          }
        },
        [`${componentCls}-icon-collapsible-only`]: {
          cursor: "default",
          [`${componentCls}-expand-icon`]: {
            cursor: "pointer"
          }
        }
      },
      [`${componentCls}-content`]: {
        color: colorText,
        backgroundColor: contentBg,
        borderTop: borderBase,
        [`& > ${componentCls}-content-box`]: {
          padding: contentPadding
        },
        [`&-hidden`]: {
          display: "none"
        }
      },
      [`&-small`]: {
        [`> ${componentCls}-item`]: {
          [`> ${componentCls}-header`]: {
            padding: collapseHeaderPaddingSM,
            paddingInlineStart: paddingXS,
            [`> ${componentCls}-expand-icon`]: {
              // Arrow offset
              marginInlineStart: paddingSM - paddingXS
            }
          },
          [`> ${componentCls}-content > ${componentCls}-content-box`]: {
            padding: paddingSM
          }
        }
      },
      [`&-large`]: {
        [`> ${componentCls}-item`]: {
          fontSize: fontSizeLG,
          [`> ${componentCls}-header`]: {
            padding: collapseHeaderPaddingLG,
            paddingInlineStart: padding,
            [`> ${componentCls}-expand-icon`]: {
              height: fontSizeLG * lineHeight,
              // Arrow offset
              marginInlineStart: paddingLG - padding
            }
          },
          [`> ${componentCls}-content > ${componentCls}-content-box`]: {
            padding: paddingLG
          }
        }
      },
      [`${componentCls}-item:last-child`]: {
        [`> ${componentCls}-content`]: {
          borderRadius: `0 0 ${collapsePanelBorderRadius}px ${collapsePanelBorderRadius}px`
        }
      },
      [`& ${componentCls}-item-disabled > ${componentCls}-header`]: {
        [`
          &,
          & > .arrow
        `]: {
          color: colorTextDisabled,
          cursor: "not-allowed"
        }
      },
      // ========================== Icon Position ==========================
      [`&${componentCls}-icon-position-end`]: {
        [`& > ${componentCls}-item`]: {
          [`> ${componentCls}-header`]: {
            [`${componentCls}-expand-icon`]: {
              order: 1,
              paddingInlineEnd: 0,
              paddingInlineStart: marginSM
            }
          }
        }
      }
    }
  };
};
const genArrowStyle = (token) => {
  const { componentCls } = token;
  const fixedSelector = `> ${componentCls}-item > ${componentCls}-header ${componentCls}-arrow svg`;
  return {
    [`${componentCls}-rtl`]: {
      [fixedSelector]: {
        transform: `rotate(180deg)`
      }
    }
  };
};
const genBorderlessStyle = (token) => {
  const {
    componentCls,
    headerBg,
    paddingXXS,
    colorBorder
  } = token;
  return {
    [`${componentCls}-borderless`]: {
      backgroundColor: headerBg,
      border: 0,
      [`> ${componentCls}-item`]: {
        borderBottom: `1px solid ${colorBorder}`
      },
      [`
        > ${componentCls}-item:last-child,
        > ${componentCls}-item:last-child ${componentCls}-header
      `]: {
        borderRadius: 0
      },
      [`> ${componentCls}-item:last-child`]: {
        borderBottom: 0
      },
      [`> ${componentCls}-item > ${componentCls}-content`]: {
        backgroundColor: "transparent",
        borderTop: 0
      },
      [`> ${componentCls}-item > ${componentCls}-content > ${componentCls}-content-box`]: {
        paddingTop: paddingXXS
      }
    }
  };
};
const genGhostStyle = (token) => {
  const { componentCls, paddingSM } = token;
  return {
    [`${componentCls}-ghost`]: {
      backgroundColor: "transparent",
      border: 0,
      [`> ${componentCls}-item`]: {
        borderBottom: 0,
        [`> ${componentCls}-content`]: {
          backgroundColor: "transparent",
          border: 0,
          [`> ${componentCls}-content-box`]: {
            paddingBlock: paddingSM
          }
        }
      }
    }
  };
};
const useStyle$k = genComponentStyleHook(
  "Collapse",
  (token) => {
    const collapseToken = merge(token, {
      collapseHeaderPaddingSM: `${token.paddingXS}px ${token.paddingSM}px`,
      collapseHeaderPaddingLG: `${token.padding}px ${token.paddingLG}px`,
      collapsePanelBorderRadius: token.borderRadiusLG
    });
    return [
      genBaseStyle$5(collapseToken),
      genBorderlessStyle(collapseToken),
      genGhostStyle(collapseToken),
      genArrowStyle(collapseToken),
      genCollapseMotion(collapseToken)
    ];
  },
  (token) => ({
    headerPadding: `${token.paddingSM}px ${token.padding}px`,
    headerBg: token.colorFillAlter,
    contentPadding: `${token.padding}px 16px`,
    // Fixed Value
    contentBg: token.colorBgContainer
  })
);

const Collapse = React.forwardRef((props, ref) => {
  const { getPrefixCls, collapse } = React.useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    bordered = true,
    ghost,
    size: customizeSize,
    expandIconPosition = "start",
    children,
    expandIcon
  } = props;
  const mergedSize = useSize((ctx) => customizeSize ?? ctx ?? "middle");
  const prefixCls = getPrefixCls("collapse", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const [wrapSSR, hashId] = useStyle$k(prefixCls);
  const mergedExpandIconPosition = React.useMemo(() => {
    if (expandIconPosition === "left") {
      return "start";
    }
    return expandIconPosition === "right" ? "end" : expandIconPosition;
  }, [expandIconPosition]);
  const renderExpandIcon = (panelProps = {}) => {
    const icon = expandIcon ? expandIcon(panelProps) : /* @__PURE__ */ jsx(ArrowForwardIosIcon, { rotate: panelProps.isActive ? 90 : void 0 });
    return cloneElement(icon, () => ({
      className: classNames(
        icon.props.className,
        `${prefixCls}-arrow`
      )
    }));
  };
  const collapseClassName = classNames(
    `${prefixCls}-icon-position-${mergedExpandIconPosition}`,
    {
      [`${prefixCls}-borderless`]: !bordered,
      [`${prefixCls}-ghost`]: !!ghost,
      [`${prefixCls}-${mergedSize}`]: mergedSize !== "medium"
    },
    collapse?.className,
    className,
    rootClassName,
    hashId
  );
  const openMotion = {
    ...initCollapseMotion(rootPrefixCls),
    motionAppear: false,
    leavedClassName: `${prefixCls}-content-hidden`
  };
  const items = React.useMemo(
    () => children ? toArray$2(children).map((child, index) => {
      if (child.props?.disabled) {
        const key = child.key ?? String(index);
        const { disabled, collapsible } = child.props;
        const childProps = {
          ...omit(child.props, ["disabled"]),
          key,
          collapsible: collapsible ?? (disabled ? "disabled" : void 0)
        };
        return cloneElement(child, childProps);
      }
      return child;
    }) : null,
    [children]
  );
  return wrapSSR(
    /* @__PURE__ */ jsx(
      RcCollapse,
      {
        ref,
        openMotion,
        ...omit(props, ["rootClassName"]),
        expandIcon: renderExpandIcon,
        prefixCls,
        className: collapseClassName,
        style: { ...collapse?.style, ...style },
        children: items
      }
    )
  );
});
const Collapse$1 = Object.assign(Collapse, { Panel: CollapsePanel });

function getPlaceholder(locale, picker, customizePlaceholder) {
  if (customizePlaceholder !== void 0) {
    return customizePlaceholder;
  }
  if (picker === "year" && locale.lang.yearPlaceholder) {
    return locale.lang.yearPlaceholder;
  }
  if (picker === "quarter" && locale.lang.quarterPlaceholder) {
    return locale.lang.quarterPlaceholder;
  }
  if (picker === "month" && locale.lang.monthPlaceholder) {
    return locale.lang.monthPlaceholder;
  }
  if (picker === "week" && locale.lang.weekPlaceholder) {
    return locale.lang.weekPlaceholder;
  }
  if (picker === "time" && locale.timePickerLocale.placeholder) {
    return locale.timePickerLocale.placeholder;
  }
  return locale.lang.placeholder;
}
function getRangePlaceholder(locale, picker, customizePlaceholder) {
  if (customizePlaceholder !== void 0) {
    return customizePlaceholder;
  }
  if (picker === "year" && locale.lang.yearPlaceholder) {
    return locale.lang.rangeYearPlaceholder;
  }
  if (picker === "quarter" && locale.lang.quarterPlaceholder) {
    return locale.lang.rangeQuarterPlaceholder;
  }
  if (picker === "month" && locale.lang.monthPlaceholder) {
    return locale.lang.rangeMonthPlaceholder;
  }
  if (picker === "week" && locale.lang.weekPlaceholder) {
    return locale.lang.rangeWeekPlaceholder;
  }
  if (picker === "time" && locale.timePickerLocale.placeholder) {
    return locale.timePickerLocale.rangePlaceholder;
  }
  return locale.lang.rangePlaceholder;
}
function transPlacement2DropdownAlign(placement) {
  const overflow = {
    adjustX: 1,
    adjustY: 1
  };
  switch (placement) {
    case "bottomLeft": {
      return {
        points: ["tl", "bl"],
        offset: [0, 4],
        overflow
      };
    }
    case "bottomRight": {
      return {
        points: ["tr", "br"],
        offset: [0, 4],
        overflow
      };
    }
    case "topLeft": {
      return {
        points: ["bl", "tl"],
        offset: [0, -4],
        overflow
      };
    }
    case "topRight": {
      return {
        points: ["br", "tr"],
        offset: [0, -4],
        overflow
      };
    }
    default: {
      return {
        points: ["tl", "bl"],
        offset: [0, 4],
        overflow
      };
    }
  }
}
function toArray$1(list) {
  if (!list) {
    return [];
  }
  return Array.isArray(list) ? list : [list];
}
function getTimeProps(props) {
  const { format, picker, showHour, showMinute, showSecond, use12Hours } = props;
  const firstFormat = toArray$1(format)[0];
  const showTimeObj = { ...props };
  if (format && Array.isArray(format)) {
    showTimeObj.format = firstFormat;
  }
  if (firstFormat && typeof firstFormat === "string") {
    if (!firstFormat.includes("s") && showSecond === void 0) {
      showTimeObj.showSecond = false;
    }
    if (!firstFormat.includes("m") && showMinute === void 0) {
      showTimeObj.showMinute = false;
    }
    if (!firstFormat.includes("H") && !firstFormat.includes("h") && !firstFormat.includes("K") && !firstFormat.includes("k") && showHour === void 0) {
      showTimeObj.showHour = false;
    }
    if ((firstFormat.includes("a") || firstFormat.includes("A")) && use12Hours === void 0) {
      showTimeObj.use12Hours = true;
    }
  }
  if (picker === "time") {
    return showTimeObj;
  }
  if (typeof firstFormat === "function") {
    delete showTimeObj.format;
  }
  return {
    showTime: showTimeObj
  };
}
function mergeAllowClear(allowClear, clearIcon, defaultClearIcon) {
  if (allowClear === false) {
    return false;
  }
  const defaults = { clearIcon: clearIcon ?? defaultClearIcon };
  return typeof allowClear === "object" ? { ...defaults, ...allowClear } : defaults;
}

function PickerButton(props) {
  return /* @__PURE__ */ jsx(Button$1, { size: "small", color: "primary", ...props });
}

const Components = { button: PickerButton };

function generateRangePicker(generateConfig) {
  const RangePicker = forwardRef((props, ref) => {
    const {
      prefixCls: customizePrefixCls,
      getPopupContainer: customGetPopupContainer,
      className,
      placement,
      size: customizeSize,
      disabled: customDisabled,
      bordered = true,
      placeholder,
      popupClassName,
      dropdownClassName,
      status: customStatus,
      clearIcon,
      allowClear,
      rootClassName,
      ...restProps
    } = props;
    const innerRef = React.useRef(null);
    const { getPrefixCls, getPopupContainer } = useContext(ConfigContext);
    const prefixCls = getPrefixCls("picker", customizePrefixCls);
    const { compactSize, compactItemClassnames } = useCompactItemContext(prefixCls);
    const { format, showTime, picker } = props;
    const rootPrefixCls = getPrefixCls();
    const [wrapSSR, hashId] = useStyle$q(prefixCls);
    const additionalOverrideProps = {
      ...showTime ? getTimeProps({ format, picker, ...showTime }) : {},
      ...picker === "time" ? getTimeProps({ format, ...props, picker }) : {}
    };
    const mergedSize = useSize((ctx) => customizeSize ?? compactSize ?? ctx);
    const disabled = React.useContext(DisabledContext);
    const mergedDisabled = customDisabled ?? disabled;
    const formItemContext = useContext(FormItemInputContext);
    const { hasFeedback, status: contextStatus, feedbackIcon } = formItemContext;
    const suffixNode = /* @__PURE__ */ jsxs(Fragment, { children: [
      picker === "time" ? /* @__PURE__ */ jsx(ScheduleIcon, {}) : /* @__PURE__ */ jsx(EventNoteIcon, {}),
      hasFeedback && feedbackIcon
    ] });
    useImperativeHandle(ref, () => ({
      focus: () => innerRef.current?.focus(),
      blur: () => innerRef.current?.blur()
    }));
    const [contextLocale] = useLocale("Calendar", locale);
    const locale$1 = { ...contextLocale, ...props.locale };
    return wrapSSR(
      /* @__PURE__ */ jsx(
        RangePicker$1,
        {
          separator: /* @__PURE__ */ jsx("span", { "aria-label": "to", className: `${prefixCls}-separator`, children: /* @__PURE__ */ jsx(TrendingFlatIcon, {}) }),
          disabled: mergedDisabled,
          ref: innerRef,
          dropdownAlign: transPlacement2DropdownAlign(placement),
          placeholder: getRangePlaceholder(locale$1, picker, placeholder),
          suffixIcon: suffixNode,
          prevIcon: /* @__PURE__ */ jsx("span", { className: `${prefixCls}-prev-icon` }),
          nextIcon: /* @__PURE__ */ jsx("span", { className: `${prefixCls}-next-icon` }),
          superPrevIcon: /* @__PURE__ */ jsx("span", { className: `${prefixCls}-super-prev-icon` }),
          superNextIcon: /* @__PURE__ */ jsx("span", { className: `${prefixCls}-super-next-icon` }),
          transitionName: `${rootPrefixCls}-slide-up`,
          ...restProps,
          ...additionalOverrideProps,
          className: classNames(
            {
              [`${prefixCls}-${mergedSize}`]: mergedSize,
              [`${prefixCls}-borderless`]: !bordered
            },
            getStatusClassNames(prefixCls, getMergedStatus(contextStatus, customStatus), hasFeedback),
            hashId,
            compactItemClassnames,
            className,
            rootClassName
          ),
          locale: locale$1.lang,
          prefixCls,
          getPopupContainer: customGetPopupContainer || getPopupContainer,
          generateConfig,
          components: Components,
          direction: "ltr",
          dropdownClassName: classNames(hashId, popupClassName || dropdownClassName, rootClassName),
          allowClear: mergeAllowClear(allowClear, clearIcon, /* @__PURE__ */ jsx(CloseIcon, {}))
        }
      )
    );
  });
  return RangePicker;
}

function generatePicker$1(generateConfig) {
  function getPicker(picker, displayName) {
    const consumerName = displayName === "TimePicker" ? "timePicker" : "datePicker";
    const Picker = forwardRef(
      (props, ref) => {
        const {
          prefixCls: customizePrefixCls,
          getPopupContainer: customizeGetPopupContainer,
          style,
          className,
          rootClassName,
          size: customizeSize,
          bordered = true,
          placement,
          placeholder,
          popupClassName,
          dropdownClassName,
          disabled: customDisabled,
          status: customStatus,
          clearIcon,
          allowClear,
          ...restProps
        } = props;
        const {
          getPrefixCls,
          getPopupContainer,
          // Consume different styles according to different names
          [consumerName]: consumerStyle
        } = useContext(ConfigContext);
        const prefixCls = getPrefixCls("picker", customizePrefixCls);
        const { compactSize, compactItemClassnames } = useCompactItemContext(prefixCls);
        const innerRef = React.useRef(null);
        const { format, showTime } = props;
        const [wrapSSR, hashId] = useStyle$q(prefixCls);
        useImperativeHandle(ref, () => ({
          focus: () => innerRef.current?.focus(),
          blur: () => innerRef.current?.blur()
        }));
        const additionalProps = {
          showToday: true
        };
        let additionalOverrideProps = {};
        if (picker) {
          additionalOverrideProps.picker = picker;
        }
        const mergedPicker = picker || props.picker;
        additionalOverrideProps = {
          ...additionalOverrideProps,
          ...showTime ? getTimeProps({ format, picker: mergedPicker, ...showTime }) : {},
          ...mergedPicker === "time" ? getTimeProps({ format, ...props, picker: mergedPicker }) : {}
        };
        const rootPrefixCls = getPrefixCls();
        const mergedSize = useSize((ctx) => customizeSize ?? compactSize ?? ctx);
        const disabled = React.useContext(DisabledContext);
        const mergedDisabled = customDisabled ?? disabled;
        const formItemContext = useContext(FormItemInputContext);
        const { hasFeedback, status: contextStatus, feedbackIcon } = formItemContext;
        const suffixNode = /* @__PURE__ */ jsxs(Fragment, { children: [
          mergedPicker === "time" ? /* @__PURE__ */ jsx(ScheduleIcon, {}) : /* @__PURE__ */ jsx(EventNoteIcon, {}),
          hasFeedback && feedbackIcon
        ] });
        const [contextLocale] = useLocale("DatePicker", locale);
        const locale$1 = { ...contextLocale, ...props.locale };
        return wrapSSR(
          /* @__PURE__ */ jsx(
            RCPicker,
            {
              ref: innerRef,
              placeholder: getPlaceholder(locale$1, mergedPicker, placeholder),
              suffixIcon: suffixNode,
              dropdownAlign: transPlacement2DropdownAlign(placement),
              prevIcon: /* @__PURE__ */ jsx("span", { className: `${prefixCls}-prev-icon` }),
              nextIcon: /* @__PURE__ */ jsx("span", { className: `${prefixCls}-next-icon` }),
              superPrevIcon: /* @__PURE__ */ jsx("span", { className: `${prefixCls}-super-prev-icon` }),
              superNextIcon: /* @__PURE__ */ jsx("span", { className: `${prefixCls}-super-next-icon` }),
              transitionName: `${rootPrefixCls}-slide-up`,
              ...additionalProps,
              ...restProps,
              ...additionalOverrideProps,
              locale: locale$1.lang,
              className: classNames(
                {
                  [`${prefixCls}-${mergedSize}`]: mergedSize,
                  [`${prefixCls}-borderless`]: !bordered
                },
                getStatusClassNames(
                  prefixCls,
                  getMergedStatus(contextStatus, customStatus),
                  hasFeedback
                ),
                hashId,
                compactItemClassnames,
                consumerStyle?.className,
                className,
                rootClassName
              ),
              style: { ...consumerStyle?.style, ...style },
              prefixCls,
              getPopupContainer: customizeGetPopupContainer || getPopupContainer,
              generateConfig,
              components: Components,
              direction: "ltr",
              disabled: mergedDisabled,
              dropdownClassName: classNames(
                hashId,
                rootClassName,
                popupClassName || dropdownClassName
              ),
              allowClear: mergeAllowClear(allowClear, clearIcon, /* @__PURE__ */ jsx(CloseIcon, {}))
            }
          )
        );
      }
    );
    if (displayName) {
      Picker.displayName = displayName;
    }
    return Picker;
  }
  const DatePicker = getPicker();
  const WeekPicker = getPicker("week", "WeekPicker");
  const MonthPicker = getPicker("month", "MonthPicker");
  const YearPicker = getPicker("year", "YearPicker");
  const TimePicker = getPicker("time", "TimePicker");
  const QuarterPicker = getPicker("quarter", "QuarterPicker");
  return { DatePicker, WeekPicker, MonthPicker, YearPicker, TimePicker, QuarterPicker };
}

function generatePicker(generateConfig) {
  const { DatePicker, WeekPicker, MonthPicker, YearPicker, TimePicker, QuarterPicker } = generatePicker$1(generateConfig);
  const RangePicker = generateRangePicker(generateConfig);
  const MergedDatePicker = DatePicker;
  MergedDatePicker.WeekPicker = WeekPicker;
  MergedDatePicker.MonthPicker = MonthPicker;
  MergedDatePicker.YearPicker = YearPicker;
  MergedDatePicker.RangePicker = RangePicker;
  MergedDatePicker.TimePicker = TimePicker;
  MergedDatePicker.QuarterPicker = QuarterPicker;
  return MergedDatePicker;
}

const DatePicker = generatePicker(dayjsGenerateConfig);
function postPureProps(props) {
  const dropdownAlign = transPlacement2DropdownAlign(props.placement);
  dropdownAlign.overflow.adjustY = false;
  dropdownAlign.overflow.adjustX = false;
  return {
    ...props,
    dropdownAlign
  };
}
const PurePanel$6 = genPurePanel(DatePicker, "picker", null, postPureProps);
DatePicker._InternalPanelDoNotUseOrYouWillBeFired = PurePanel$6;
const PureRangePanel = genPurePanel(DatePicker.RangePicker, "picker", null, postPureProps);
DatePicker._InternalRangePanelDoNotUseOrYouWillBeFired = PureRangePanel;
DatePicker.generatePicker = generatePicker;

const DEFAULT_COLUMN_MAP = {
  xxl: 3,
  xl: 3,
  lg: 3,
  md: 3,
  sm: 2,
  xs: 1
};

const DescriptionsContext = React__default.createContext({});

const transChildren2Items = (childNodes) => toArray$2(childNodes).map((node) => ({ ...node?.props }));
function useItems$1(screens, items, children) {
  const mergedItems = React.useMemo(
    () => (
      // Take `items` first or convert `children` into items
      items || transChildren2Items(children)
    ),
    [items, children]
  );
  const responsiveItems = React.useMemo(
    () => mergedItems.map(({ span, ...restItem }) => ({
      ...restItem,
      span: typeof span === "number" ? span : matchScreen(screens, span)
    })),
    [mergedItems, screens]
  );
  return responsiveItems;
}

function getFilledItem(rowItem, rowRestCol, span) {
  let clone = rowItem;
  let exceed = false;
  if (span === void 0 || span > rowRestCol) {
    clone = {
      ...rowItem,
      span: rowRestCol
    };
    exceed = span !== void 0;
  }
  return [clone, exceed];
}
function getCalcRows(rowItems, mergedColumn) {
  const rows = [];
  let tmpRow = [];
  let rowRestCol = mergedColumn;
  let exceed = false;
  rowItems.filter((n) => n).forEach((rowItem, index) => {
    const span = rowItem?.span;
    const mergedSpan = span || 1;
    if (index === rowItems.length - 1) {
      const [item, itemExceed] = getFilledItem(rowItem, rowRestCol, span);
      exceed = exceed || itemExceed;
      tmpRow.push(item);
      rows.push(tmpRow);
      return;
    }
    if (mergedSpan < rowRestCol) {
      rowRestCol -= mergedSpan;
      tmpRow.push(rowItem);
    } else {
      const [item, itemExceed] = getFilledItem(rowItem, rowRestCol, mergedSpan);
      exceed = exceed || itemExceed;
      tmpRow.push(item);
      rows.push(tmpRow);
      rowRestCol = mergedColumn;
      tmpRow = [];
    }
  });
  return [rows, exceed];
}
const useRow = (mergedColumn, items) => {
  const [rows, exceed] = useMemo$1(() => getCalcRows(items, mergedColumn), [items, mergedColumn]);
  return rows;
};

const DescriptionsItem = ({ children }) => children;

function notEmpty(val) {
  return val !== void 0 && val !== null;
}
const Cell = (props) => {
  const {
    itemPrefixCls,
    component,
    span,
    className,
    style,
    labelStyle,
    contentStyle,
    bordered,
    label,
    content,
    colon
  } = props;
  const Component = component;
  if (bordered) {
    return /* @__PURE__ */ jsxs(
      Component,
      {
        className: classNames(
          {
            [`${itemPrefixCls}-item-label`]: notEmpty(label),
            [`${itemPrefixCls}-item-content`]: notEmpty(content)
          },
          className
        ),
        style,
        colSpan: span,
        children: [
          notEmpty(label) && /* @__PURE__ */ jsx("span", { style: labelStyle, children: label }),
          notEmpty(content) && /* @__PURE__ */ jsx("span", { style: contentStyle, children: content })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsx(
    Component,
    {
      className: classNames(`${itemPrefixCls}-item`, className),
      style,
      colSpan: span,
      children: /* @__PURE__ */ jsxs("div", { className: `${itemPrefixCls}-item-container`, children: [
        (label || label === 0) && /* @__PURE__ */ jsx(
          "span",
          {
            className: classNames(`${itemPrefixCls}-item-label`, {
              [`${itemPrefixCls}-item-no-colon`]: !colon
            }),
            style: labelStyle,
            children: label
          }
        ),
        (content || content === 0) && /* @__PURE__ */ jsx("span", { className: classNames(`${itemPrefixCls}-item-content`), style: contentStyle, children: content })
      ] })
    }
  );
};

function renderCells(items, { colon, prefixCls, bordered }, {
  component,
  type,
  showLabel,
  showContent,
  labelStyle: rootLabelStyle,
  contentStyle: rootContentStyle
}) {
  return items.map(
    ({
      label,
      children,
      prefixCls: itemPrefixCls = prefixCls,
      className,
      style,
      labelStyle,
      contentStyle,
      span = 1,
      key
    }, index) => {
      if (typeof component === "string") {
        return /* @__PURE__ */ jsx(
          Cell,
          {
            className,
            style,
            labelStyle: { ...rootLabelStyle, ...labelStyle },
            contentStyle: { ...rootContentStyle, ...contentStyle },
            span,
            colon,
            component,
            itemPrefixCls,
            bordered,
            label: showLabel ? label : null,
            content: showContent ? children : null
          },
          `${type}-${key || index}`
        );
      }
      return [
        /* @__PURE__ */ jsx(
          Cell,
          {
            className,
            style: { ...rootLabelStyle, ...style, ...labelStyle },
            span: 1,
            colon,
            component: component[0],
            itemPrefixCls,
            bordered,
            label
          },
          `label-${key || index}`
        ),
        /* @__PURE__ */ jsx(
          Cell,
          {
            className,
            style: { ...rootContentStyle, ...style, ...contentStyle },
            span: span * 2 - 1,
            component: component[1],
            itemPrefixCls,
            bordered,
            content: children
          },
          `content-${key || index}`
        )
      ];
    }
  );
}
const Row = (props) => {
  const descContext = React.useContext(DescriptionsContext);
  const { prefixCls, vertical, row, index, bordered } = props;
  if (vertical) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("tr", { className: `${prefixCls}-row`, children: renderCells(row, props, {
        component: "th",
        type: "label",
        showLabel: true,
        ...descContext
      }) }, `label-${index}`),
      /* @__PURE__ */ jsx("tr", { className: `${prefixCls}-row`, children: renderCells(row, props, {
        component: "td",
        type: "content",
        showContent: true,
        ...descContext
      }) }, `content-${index}`)
    ] });
  }
  return /* @__PURE__ */ jsx("tr", { className: `${prefixCls}-row`, children: renderCells(row, props, {
    component: bordered ? ["th", "td"] : "td",
    type: "item",
    showLabel: true,
    showContent: true,
    ...descContext
  }) }, index);
};

const genBorderedStyle$3 = (token) => {
  const { componentCls, labelBg } = token;
  return {
    [`&${componentCls}-bordered`]: {
      [`> ${componentCls}-view`]: {
        border: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`,
        "> table": {
          tableLayout: "auto",
          borderCollapse: "collapse"
        },
        [`${componentCls}-row`]: {
          borderBottom: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`,
          "&:last-child": {
            borderBottom: "none"
          },
          [`> ${componentCls}-item-label, > ${componentCls}-item-content`]: {
            padding: `${token.padding}px ${token.paddingLG}px`,
            borderInlineEnd: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`,
            "&:last-child": {
              borderInlineEnd: "none"
            }
          },
          [`> ${componentCls}-item-label`]: {
            color: token.colorTextSecondary,
            backgroundColor: labelBg,
            "&::after": {
              display: "none"
            }
          }
        }
      },
      [`&${componentCls}-middle`]: {
        [`${componentCls}-row`]: {
          [`> ${componentCls}-item-label, > ${componentCls}-item-content`]: {
            padding: `${token.paddingSM}px ${token.paddingLG}px`
          }
        }
      },
      [`&${componentCls}-small`]: {
        [`${componentCls}-row`]: {
          [`> ${componentCls}-item-label, > ${componentCls}-item-content`]: {
            padding: `${token.paddingXS}px ${token.padding}px`
          }
        }
      }
    }
  };
};
const genDescriptionStyles = (token) => {
  const {
    componentCls,
    extraColor,
    itemPaddingBottom,
    colonMarginRight,
    colonMarginLeft,
    titleMarginBottom
  } = token;
  return {
    [componentCls]: {
      ...resetComponent(token),
      ...genBorderedStyle$3(token),
      [`&-rtl`]: {
        direction: "rtl"
      },
      [`${componentCls}-header`]: {
        display: "flex",
        alignItems: "center",
        marginBottom: titleMarginBottom
      },
      [`${componentCls}-title`]: {
        ...textEllipsis,
        flex: "auto",
        color: token.colorText,
        fontWeight: token.fontWeightStrong,
        fontSize: token.fontSizeLG,
        lineHeight: token.lineHeightLG
      },
      [`${componentCls}-extra`]: {
        marginInlineStart: "auto",
        color: extraColor,
        fontSize: token.fontSize
      },
      [`${componentCls}-view`]: {
        width: "100%",
        borderRadius: token.borderRadiusLG,
        table: {
          width: "100%",
          tableLayout: "fixed"
        }
      },
      [`${componentCls}-row`]: {
        "> th, > td": {
          paddingBottom: itemPaddingBottom
        },
        "&:last-child": {
          borderBottom: "none"
        }
      },
      [`${componentCls}-item-label`]: {
        color: token.colorTextTertiary,
        fontWeight: "normal",
        fontSize: token.fontSize,
        lineHeight: token.lineHeight,
        textAlign: `start`,
        "&::after": {
          content: '":"',
          position: "relative",
          top: -0.5,
          // magic for position
          marginInline: `${colonMarginLeft}px ${colonMarginRight}px`
        },
        [`&${componentCls}-item-no-colon::after`]: {
          content: '""'
        }
      },
      [`${componentCls}-item-no-label`]: {
        "&::after": {
          margin: 0,
          content: '""'
        }
      },
      [`${componentCls}-item-content`]: {
        display: "table-cell",
        flex: 1,
        color: token.colorText,
        fontSize: token.fontSize,
        lineHeight: token.lineHeight,
        wordBreak: "break-word",
        overflowWrap: "break-word"
      },
      [`${componentCls}-item`]: {
        paddingBottom: 0,
        verticalAlign: "top",
        "&-container": {
          display: "flex",
          [`${componentCls}-item-label`]: {
            display: "inline-flex",
            alignItems: "baseline"
          },
          [`${componentCls}-item-content`]: {
            display: "inline-flex",
            alignItems: "baseline"
          }
        }
      },
      "&-middle": {
        [`${componentCls}-row`]: {
          "> th, > td": {
            paddingBottom: token.paddingSM
          }
        }
      },
      "&-small": {
        [`${componentCls}-row`]: {
          "> th, > td": {
            paddingBottom: token.paddingXS
          }
        }
      }
    }
  };
};
const useStyle$j = genComponentStyleHook(
  "Descriptions",
  (token) => {
    const descriptionToken = merge(token, {});
    return [genDescriptionStyles(descriptionToken)];
  },
  (token) => ({
    labelBg: token.colorFillAlter,
    titleMarginBottom: token.fontSizeSM * token.lineHeightSM,
    itemPaddingBottom: token.padding,
    colonMarginRight: token.marginXS,
    colonMarginLeft: token.marginXXS / 2,
    extraColor: token.colorText
  })
);

const Descriptions = (props) => {
  const {
    prefixCls: customizePrefixCls,
    title,
    extra,
    column,
    colon = true,
    bordered,
    layout,
    children,
    className,
    rootClassName,
    style,
    size: customizeSize,
    labelStyle,
    contentStyle,
    items,
    ...restProps
  } = props;
  const { getPrefixCls, descriptions } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("descriptions", customizePrefixCls);
  const screens = useBreakpoint$1();
  const mergedColumn = React.useMemo(() => {
    if (typeof column === "number") {
      return column;
    }
    return matchScreen(screens, {
      ...DEFAULT_COLUMN_MAP,
      ...column
    }) ?? 3;
  }, [screens, column]);
  const mergedItems = useItems$1(screens, items, children);
  const mergedSize = useSize(customizeSize);
  const rows = useRow(mergedColumn, mergedItems);
  const [wrapSSR, hashId] = useStyle$j(prefixCls);
  const contextValue = React.useMemo(
    () => ({ labelStyle, contentStyle }),
    [labelStyle, contentStyle]
  );
  return wrapSSR(
    /* @__PURE__ */ jsx(DescriptionsContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: classNames(
          prefixCls,
          descriptions?.className,
          {
            [`${prefixCls}-${mergedSize}`]: mergedSize && mergedSize !== "default",
            [`${prefixCls}-bordered`]: !!bordered
          },
          className,
          rootClassName,
          hashId
        ),
        style: { ...descriptions?.style, ...style },
        ...restProps,
        children: [
          (title || extra) && /* @__PURE__ */ jsxs("div", { className: `${prefixCls}-header`, children: [
            title && /* @__PURE__ */ jsx("div", { className: `${prefixCls}-title`, children: title }),
            extra && /* @__PURE__ */ jsx("div", { className: `${prefixCls}-extra`, children: extra })
          ] }),
          /* @__PURE__ */ jsx("div", { className: `${prefixCls}-view`, children: /* @__PURE__ */ jsx("table", { children: /* @__PURE__ */ jsx("tbody", { children: rows.map((row, index) => /* @__PURE__ */ jsx(
            Row,
            {
              index,
              colon,
              prefixCls,
              vertical: layout === "vertical",
              bordered,
              row
            },
            index
          )) }) }) })
        ]
      }
    ) })
  );
};
Descriptions.Item = DescriptionsItem;

function useInnerClosable(closable, closeIcon, defaultClosable) {
  if (typeof closable === "boolean") {
    return closable;
  }
  if (closeIcon === void 0) {
    return !!defaultClosable;
  }
  return closeIcon !== false && closeIcon !== null;
}
function useClosable(closable, closeIcon, customCloseIconRender, defaultCloseIcon = /* @__PURE__ */ jsx(CloseIcon, {}), defaultClosable = false) {
  const mergedClosable = useInnerClosable(closable, closeIcon, defaultClosable);
  if (!mergedClosable) {
    return [false, null];
  }
  const mergedCloseIcon = typeof closeIcon === "boolean" || closeIcon === void 0 || closeIcon === null ? defaultCloseIcon : closeIcon;
  return [true, customCloseIconRender ? customCloseIconRender(mergedCloseIcon) : mergedCloseIcon];
}

const DrawerPanel = (props) => {
  const {
    prefixCls,
    title,
    footer,
    extra,
    closeIcon,
    closable,
    onClose,
    headerStyle,
    drawerStyle,
    bodyStyle,
    footerStyle,
    children
  } = props;
  const customCloseIconRender = React.useCallback(
    (icon) => /* @__PURE__ */ jsx("button", { type: "button", onClick: onClose, "aria-label": "Close", className: `${prefixCls}-close`, children: icon }),
    [onClose]
  );
  const [mergedClosable, mergedCloseIcon] = useClosable(
    closable,
    closeIcon,
    customCloseIconRender,
    void 0,
    true
  );
  const headerNode = React.useMemo(() => {
    if (!title && !mergedClosable) {
      return null;
    }
    return /* @__PURE__ */ jsxs(
      "div",
      {
        style: headerStyle,
        className: classNames(`${prefixCls}-header`, {
          [`${prefixCls}-header-close-only`]: mergedClosable && !title && !extra
        }),
        children: [
          /* @__PURE__ */ jsxs("div", { className: `${prefixCls}-header-title`, children: [
            mergedCloseIcon,
            title && /* @__PURE__ */ jsx("div", { className: `${prefixCls}-title`, children: title })
          ] }),
          extra && /* @__PURE__ */ jsx("div", { className: `${prefixCls}-extra`, children: extra })
        ]
      }
    );
  }, [mergedClosable, mergedCloseIcon, extra, headerStyle, prefixCls, title]);
  const footerNode = React.useMemo(() => {
    if (!footer) {
      return null;
    }
    const footerClassName = `${prefixCls}-footer`;
    return /* @__PURE__ */ jsx("div", { className: footerClassName, style: footerStyle, children: footer });
  }, [footer, footerStyle, prefixCls]);
  return /* @__PURE__ */ jsxs("div", { className: `${prefixCls}-wrapper-body`, style: drawerStyle, children: [
    headerNode,
    /* @__PURE__ */ jsx("div", { className: `${prefixCls}-body`, style: bodyStyle, children }),
    footerNode
  ] });
};

const genMotionStyle = (token) => {
  const { componentCls, motionDurationSlow } = token;
  const sharedPanelMotion = {
    "&-enter, &-appear, &-leave": {
      "&-start": {
        transition: "none"
      },
      "&-active": {
        transition: `all ${motionDurationSlow}`
      }
    }
  };
  return {
    [componentCls]: {
      // ======================== Mask ========================
      [`${componentCls}-mask-motion`]: {
        "&-enter, &-appear, &-leave": {
          "&-active": {
            transition: `all ${motionDurationSlow}`
          }
        },
        "&-enter, &-appear": {
          opacity: 0,
          "&-active": {
            opacity: 1
          }
        },
        "&-leave": {
          opacity: 1,
          "&-active": {
            opacity: 0
          }
        }
      },
      // ======================= Panel ========================
      [`${componentCls}-panel-motion`]: {
        // Left
        "&-left": [
          sharedPanelMotion,
          {
            "&-enter, &-appear": {
              "&-start": {
                transform: "translateX(-100%) !important"
              },
              "&-active": {
                transform: "translateX(0)"
              }
            },
            "&-leave": {
              transform: "translateX(0)",
              "&-active": {
                transform: "translateX(-100%)"
              }
            }
          }
        ],
        // Right
        "&-right": [
          sharedPanelMotion,
          {
            "&-enter, &-appear": {
              "&-start": {
                transform: "translateX(100%) !important"
              },
              "&-active": {
                transform: "translateX(0)"
              }
            },
            "&-leave": {
              transform: "translateX(0)",
              "&-active": {
                transform: "translateX(100%)"
              }
            }
          }
        ],
        // Top
        "&-top": [
          sharedPanelMotion,
          {
            "&-enter, &-appear": {
              "&-start": {
                transform: "translateY(-100%) !important"
              },
              "&-active": {
                transform: "translateY(0)"
              }
            },
            "&-leave": {
              transform: "translateY(0)",
              "&-active": {
                transform: "translateY(-100%)"
              }
            }
          }
        ],
        // Bottom
        "&-bottom": [
          sharedPanelMotion,
          {
            "&-enter, &-appear": {
              "&-start": {
                transform: "translateY(100%) !important"
              },
              "&-active": {
                transform: "translateY(0)"
              }
            },
            "&-leave": {
              transform: "translateY(0)",
              "&-active": {
                transform: "translateY(100%)"
              }
            }
          }
        ]
      }
    }
  };
};

const genDrawerStyle = (token) => {
  const {
    componentCls,
    zIndexPopup,
    colorBgMask,
    colorBgElevated,
    motionDurationSlow,
    motionDurationMid,
    padding,
    paddingLG,
    fontSizeLG,
    lineHeightLG,
    lineWidth,
    lineType,
    colorSplit,
    marginSM,
    colorIcon,
    colorIconHover,
    colorText,
    fontWeightStrong,
    footerPaddingBlock,
    footerPaddingInline
  } = token;
  const wrapperCls = `${componentCls}-content-wrapper`;
  return {
    [componentCls]: {
      position: "fixed",
      inset: 0,
      zIndex: zIndexPopup,
      pointerEvents: "none",
      "&-pure": {
        position: "relative",
        background: colorBgElevated,
        [`&${componentCls}-left`]: {
          boxShadow: token.boxShadowDrawerLeft
        },
        [`&${componentCls}-right`]: {
          boxShadow: token.boxShadowDrawerRight
        },
        [`&${componentCls}-top`]: {
          boxShadow: token.boxShadowDrawerUp
        },
        [`&${componentCls}-bottom`]: {
          boxShadow: token.boxShadowDrawerDown
        }
      },
      "&-inline": {
        position: "absolute"
      },
      // ====================== Mask ======================
      [`${componentCls}-mask`]: {
        position: "absolute",
        inset: 0,
        zIndex: zIndexPopup,
        background: colorBgMask,
        pointerEvents: "auto"
      },
      // ==================== Content =====================
      [wrapperCls]: {
        position: "absolute",
        zIndex: zIndexPopup,
        maxWidth: "100vw",
        transition: `all ${motionDurationSlow}`,
        "&-hidden": {
          display: "none"
        }
      },
      // Placement
      [`&-left > ${wrapperCls}`]: {
        top: 0,
        bottom: 0,
        left: {
          _skip_check_: true,
          value: 0
        },
        boxShadow: token.boxShadowDrawerLeft
      },
      [`&-right > ${wrapperCls}`]: {
        top: 0,
        right: {
          _skip_check_: true,
          value: 0
        },
        bottom: 0,
        boxShadow: token.boxShadowDrawerRight
      },
      [`&-top > ${wrapperCls}`]: {
        top: 0,
        insetInline: 0,
        boxShadow: token.boxShadowDrawerUp
      },
      [`&-bottom > ${wrapperCls}`]: {
        bottom: 0,
        insetInline: 0,
        boxShadow: token.boxShadowDrawerDown
      },
      [`${componentCls}-content`]: {
        width: "100%",
        height: "100%",
        overflow: "auto",
        background: colorBgElevated,
        pointerEvents: "auto"
      },
      // ===================== Panel ======================
      [`${componentCls}-wrapper-body`]: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%"
      },
      // Header
      [`${componentCls}-header`]: {
        display: "flex",
        flex: 0,
        alignItems: "center",
        padding: `${padding}px ${paddingLG}px`,
        fontSize: fontSizeLG,
        lineHeight: lineHeightLG,
        borderBottom: `${lineWidth}px ${lineType} ${colorSplit}`,
        "&-title": {
          display: "flex",
          flex: 1,
          alignItems: "center",
          minWidth: 0,
          minHeight: 0
        }
      },
      [`${componentCls}-extra`]: {
        flex: "none"
      },
      [`${componentCls}-close`]: {
        display: "inline-block",
        marginInlineEnd: marginSM,
        color: colorIcon,
        fontWeight: fontWeightStrong,
        fontSize: fontSizeLG,
        fontStyle: "normal",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "none",
        textDecoration: "none",
        background: "transparent",
        border: 0,
        outline: 0,
        cursor: "pointer",
        transition: `color ${motionDurationMid}`,
        textRendering: "auto",
        "&:focus, &:hover": {
          color: colorIconHover,
          textDecoration: "none"
        }
      },
      [`${componentCls}-title`]: {
        flex: 1,
        margin: 0,
        color: colorText,
        fontWeight: token.fontWeightStrong,
        fontSize: fontSizeLG,
        lineHeight: lineHeightLG
      },
      // Body
      [`${componentCls}-body`]: {
        flex: 1,
        minWidth: 0,
        minHeight: 0,
        padding: paddingLG,
        overflow: "auto"
      },
      // Footer
      [`${componentCls}-footer`]: {
        flexShrink: 0,
        padding: `${footerPaddingBlock}px ${footerPaddingInline}px`,
        borderTop: `${lineWidth}px ${lineType} ${colorSplit}`
      }
    }
  };
};
const useStyle$i = genComponentStyleHook(
  "Drawer",
  (token) => {
    const drawerToken = merge(token, {});
    return [genDrawerStyle(drawerToken), genMotionStyle(drawerToken)];
  },
  (token) => ({
    zIndexPopup: token.zIndexPopupBase,
    footerPaddingBlock: token.paddingXS,
    footerPaddingInline: token.padding
  })
);

const defaultPushState = { distance: 180 };
const Drawer = (props) => {
  const {
    rootClassName,
    width,
    height,
    size = "default",
    mask = true,
    push = defaultPushState,
    open,
    afterOpenChange,
    onClose,
    prefixCls: customizePrefixCls,
    getContainer: customizeGetContainer,
    style,
    className,
    // Deprecated
    visible,
    afterVisibleChange,
    ...rest
  } = props;
  const { getPopupContainer, getPrefixCls, drawer } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("drawer", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$i(prefixCls);
  const getContainer = (
    // 有可能为 false，所以不能直接判断
    customizeGetContainer === void 0 && getPopupContainer ? () => getPopupContainer(document.body) : customizeGetContainer
  );
  const drawerClassName = classNames(
    {
      "no-mask": !mask
    },
    rootClassName,
    hashId
  );
  const mergedWidth = React.useMemo(
    () => width ?? (size === "large" ? 736 : 378),
    [width, size]
  );
  const mergedHeight = React.useMemo(
    () => height ?? (size === "large" ? 736 : 378),
    [height, size]
  );
  const maskMotion = {
    motionName: getTransitionName(prefixCls, "mask-motion"),
    motionAppear: true,
    motionEnter: true,
    motionLeave: true,
    motionDeadline: 500
  };
  const panelMotion = (motionPlacement) => ({
    motionName: getTransitionName(prefixCls, `panel-motion-${motionPlacement}`),
    motionAppear: true,
    motionEnter: true,
    motionLeave: true,
    motionDeadline: 500
  });
  return wrapSSR(
    /* @__PURE__ */ jsx(NoCompactStyle, { children: /* @__PURE__ */ jsx(NoFormStyle, { status: true, override: true, children: /* @__PURE__ */ jsx(
      RcDrawer,
      {
        prefixCls,
        onClose,
        maskMotion,
        motion: panelMotion,
        ...rest,
        open: open ?? visible,
        mask,
        push,
        width: mergedWidth,
        height: mergedHeight,
        style: { ...drawer?.style, ...style },
        className: classNames(drawer?.className, className),
        rootClassName: drawerClassName,
        getContainer,
        afterOpenChange: afterOpenChange ?? afterVisibleChange,
        children: /* @__PURE__ */ jsx(DrawerPanel, { prefixCls, ...rest, onClose })
      }
    ) }) })
  );
};
const PurePanel$5 = (props) => {
  const {
    prefixCls: customizePrefixCls,
    style,
    className,
    placement = "right",
    ...restProps
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("drawer", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$i(prefixCls);
  const cls = classNames(
    prefixCls,
    `${prefixCls}-pure`,
    `${prefixCls}-${placement}`,
    hashId,
    className
  );
  return wrapSSR(
    /* @__PURE__ */ jsx("div", { className: cls, style, children: /* @__PURE__ */ jsx(DrawerPanel, { prefixCls, ...restProps }) })
  );
};
Drawer._InternalPanelDoNotUseOrYouWillBeFired = PurePanel$5;

function useDebounce(value) {
  const [cacheValue, setCacheValue] = React.useState(value);
  React.useEffect(() => {
    const timeout = setTimeout(
      () => {
        setCacheValue(value);
      },
      value.length ? 0 : 10
    );
    return () => {
      clearTimeout(timeout);
    };
  }, [value]);
  return cacheValue;
}

const genFormValidateMotionStyle = (token) => {
  const { componentCls } = token;
  const helpCls = `${componentCls}-show-help`;
  const helpItemCls = `${componentCls}-show-help-item`;
  return {
    [helpCls]: {
      // Explain holder
      transition: `opacity ${token.motionDurationSlow} ${token.motionEaseInOut}`,
      "&-appear, &-enter": {
        opacity: 0,
        "&-active": {
          opacity: 1
        }
      },
      "&-leave": {
        opacity: 1,
        "&-active": {
          opacity: 0
        }
      },
      // Explain
      [helpItemCls]: {
        overflow: "hidden",
        transition: `height ${token.motionDurationSlow} ${token.motionEaseInOut},
                     opacity ${token.motionDurationSlow} ${token.motionEaseInOut},
                     transform ${token.motionDurationSlow} ${token.motionEaseInOut} !important`,
        [`&${helpItemCls}-appear, &${helpItemCls}-enter`]: {
          transform: `translateY(-5px)`,
          opacity: 0,
          [`&-active`]: {
            transform: "translateY(0)",
            opacity: 1
          }
        },
        [`&${helpItemCls}-leave-active`]: {
          transform: `translateY(-5px)`
        }
      }
    }
  };
};

const resetForm = (token) => ({
  legend: {
    display: "block",
    width: "100%",
    marginBottom: token.marginLG,
    padding: 0,
    color: token.colorTextDescription,
    fontSize: token.fontSizeLG,
    lineHeight: "inherit",
    border: 0,
    borderBottom: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`
  },
  label: {
    fontSize: token.fontSize
  },
  'input[type="search"]': {
    boxSizing: "border-box"
  },
  // Position radios and checkboxes better
  'input[type="radio"], input[type="checkbox"]': {
    lineHeight: "normal"
  },
  'input[type="file"]': {
    display: "block"
  },
  // Make range inputs behave like textual form controls
  'input[type="range"]': {
    display: "block",
    width: "100%"
  },
  // Make multiple select elements height not fixed
  "select[multiple], select[size]": {
    height: "auto"
  },
  // Focus for file, radio, and checkbox
  [`input[type='file']:focus,
  input[type='radio']:focus,
  input[type='checkbox']:focus`]: {
    outline: 0,
    boxShadow: `0 0 0 ${token.controlOutlineWidth}px ${token.controlOutline}`
  },
  // Adjust output element
  output: {
    display: "block",
    paddingTop: 15,
    color: token.colorText,
    fontSize: token.fontSize,
    lineHeight: token.lineHeight
  }
});
const genFormSize = (token, height) => {
  const { formItemCls } = token;
  return {
    [formItemCls]: {
      [`${formItemCls}-label > label`]: {
        height
      },
      [`${formItemCls}-control-input`]: {
        minHeight: height
      }
    }
  };
};
const genFormStyle = (token) => {
  const { componentCls } = token;
  return {
    [token.componentCls]: {
      ...resetComponent(token),
      ...resetForm(token),
      [`${componentCls}-text`]: {
        display: "inline-block",
        paddingInlineEnd: token.paddingSM
      },
      // ================================================================
      // =                             Size                             =
      // ================================================================
      "&-small": {
        ...genFormSize(token, token.controlHeightSM)
      },
      "&-large": {
        ...genFormSize(token, token.controlHeightLG)
      }
    }
  };
};
const genFormItemStyle = (token) => {
  const {
    formItemCls,
    iconCls,
    componentCls,
    rootPrefixCls,
    labelRequiredMarkColor,
    labelColor,
    labelFontSize,
    labelHeight,
    labelColonMarginInlineStart,
    labelColonMarginInlineEnd,
    itemMarginBottom
  } = token;
  return {
    [formItemCls]: {
      ...resetComponent(token),
      marginBottom: itemMarginBottom,
      verticalAlign: "top",
      "&-with-help": {
        transition: "none"
      },
      [`&-hidden,
        &-hidden.${rootPrefixCls}-row`]: {
        display: "none"
      },
      "&-has-warning": {
        [`${formItemCls}-split`]: {
          color: token.colorError
        }
      },
      "&-has-error": {
        [`${formItemCls}-split`]: {
          color: token.colorWarning
        }
      },
      // ==============================================================
      // =                            Label                           =
      // ==============================================================
      [`${formItemCls}-label`]: {
        flexGrow: 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textAlign: "end",
        verticalAlign: "middle",
        "&-left": {
          textAlign: "start"
        },
        "&-wrap": {
          overflow: "unset",
          lineHeight: `${token.lineHeight} - 0.25em`,
          whiteSpace: "unset"
        },
        "> label": {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          maxWidth: "100%",
          height: labelHeight,
          color: labelColor,
          fontSize: labelFontSize,
          [`> ${iconCls}`]: {
            fontSize: token.fontSize,
            verticalAlign: "top"
          },
          // Required mark
          [`&${formItemCls}-required:not(${formItemCls}-required-mark-optional)::before`]: {
            display: "inline-block",
            marginInlineEnd: token.marginXXS,
            color: labelRequiredMarkColor,
            fontSize: token.fontSize,
            fontFamily: "SimSun, sans-serif",
            lineHeight: 1,
            content: '"*"',
            [`${componentCls}-hide-required-mark &`]: {
              display: "none"
            }
          },
          // Optional mark
          [`${formItemCls}-optional`]: {
            display: "inline-block",
            marginInlineStart: token.marginXXS,
            color: token.colorTextDescription,
            [`${componentCls}-hide-required-mark &`]: {
              display: "none"
            }
          },
          // Optional mark
          [`${formItemCls}-tooltip`]: {
            color: token.colorTextDescription,
            cursor: "help",
            writingMode: "horizontal-tb",
            marginInlineStart: token.marginXXS
          },
          "&::after": {
            content: '":"',
            position: "relative",
            marginBlock: 0,
            marginInlineStart: labelColonMarginInlineStart,
            marginInlineEnd: labelColonMarginInlineEnd
          },
          [`&${formItemCls}-no-colon::after`]: {
            content: '"\\a0"'
          }
        }
      },
      // ==============================================================
      // =                            Input                           =
      // ==============================================================
      [`${formItemCls}-control`]: {
        ["--ipass-display"]: "flex",
        flexDirection: "column",
        flexGrow: 1,
        [`&:first-child:not([class^="'${rootPrefixCls}-col-'"]):not([class*="' ${rootPrefixCls}-col-'"])`]: {
          width: "100%"
        },
        "&-input": {
          position: "relative",
          display: "flex",
          alignItems: "center",
          minHeight: token.controlHeight,
          "&-content": {
            flex: "auto",
            maxWidth: "100%"
          }
        }
      },
      // ==============================================================
      // =                           Explain                          =
      // ==============================================================
      [formItemCls]: {
        "&-explain, &-extra": {
          clear: "both",
          color: token.colorTextDescription,
          fontSize: token.fontSize,
          lineHeight: token.lineHeight
        },
        "&-explain-connected": {
          width: "100%"
        },
        "&-extra": {
          minHeight: token.controlHeightSM,
          transition: `color ${token.motionDurationMid} ${token.motionEaseOut}`
          // sync input color transition
        },
        "&-explain": {
          "&-error": {
            color: token.colorError
          },
          "&-warning": {
            color: token.colorWarning
          }
        }
      },
      [`&-with-help ${formItemCls}-explain`]: {
        height: "auto",
        opacity: 1
      },
      // ==============================================================
      // =                        Feedback Icon                       =
      // ==============================================================
      [`${formItemCls}-feedback-icon`]: {
        fontSize: token.fontSize,
        textAlign: "center",
        visibility: "visible",
        animationName: zoomIn,
        animationDuration: token.motionDurationMid,
        animationTimingFunction: token.motionEaseOutBack,
        pointerEvents: "none",
        "&-success": {
          color: token.colorSuccess
        },
        "&-error": {
          color: token.colorError
        },
        "&-warning": {
          color: token.colorWarning
        },
        "&-validating": {
          color: token.colorPrimary
        }
      }
    }
  };
};
const genHorizontalStyle = (token) => {
  const { componentCls, formItemCls } = token;
  return {
    [`${componentCls}-horizontal`]: {
      [`${formItemCls}-label`]: {
        flexGrow: 0
      },
      [`${formItemCls}-control`]: {
        flex: "1 1 0",
        minWidth: 0
      },
      // Do not change this to `ant-col-24`! `-24` match all the responsive rules
      [`${formItemCls}-label[class$='-24'], ${formItemCls}-label[class*='-24 ']`]: {
        [`& + ${formItemCls}-control`]: {
          minWidth: "unset"
        }
      }
    }
  };
};
const genInlineStyle = (token) => {
  const { componentCls, formItemCls } = token;
  return {
    [`${componentCls}-inline`]: {
      display: "flex",
      flexWrap: "wrap",
      [formItemCls]: {
        flex: "none",
        marginInlineEnd: token.margin,
        marginBottom: 0,
        "&-row": {
          flexWrap: "nowrap"
        },
        [`> ${formItemCls}-label,
        > ${formItemCls}-control`]: {
          display: "inline-block",
          verticalAlign: "top"
        },
        [`> ${formItemCls}-label`]: {
          flex: "none"
        },
        [`${componentCls}-text`]: {
          display: "inline-block"
        },
        [`${formItemCls}-has-feedback`]: {
          display: "inline-block"
        }
      }
    }
  };
};
const makeVerticalLayoutLabel = (token) => ({
  padding: token.verticalLabelPadding,
  margin: token.verticalLabelMargin,
  whiteSpace: "initial",
  textAlign: "start",
  "> label": {
    margin: 0,
    "&::after": {
      visibility: "hidden"
    }
  }
});
const makeVerticalLayout = (token) => {
  const { componentCls, formItemCls, rootPrefixCls } = token;
  return {
    [`${formItemCls} ${formItemCls}-label`]: makeVerticalLayoutLabel(token),
    [componentCls]: {
      [formItemCls]: {
        flexWrap: "wrap",
        [`${formItemCls}-label, ${formItemCls}-control`]: {
          // When developer pass `xs: { span }`,
          // It should follow the `xs` screen config
          [`&:not([class*=" ${rootPrefixCls}-col-xs"])`]: {
            flex: "0 0 100%",
            maxWidth: "100%"
          }
        }
      }
    }
  };
};
const genVerticalStyle = (token) => {
  const { componentCls, formItemCls, rootPrefixCls } = token;
  return {
    [`${componentCls}-vertical`]: {
      [formItemCls]: {
        "&-row": {
          flexDirection: "column"
        },
        "&-label > label": {
          height: "auto"
        },
        [`${componentCls}-item-control`]: {
          width: "100%"
        }
      }
    },
    [`${componentCls}-vertical ${formItemCls}-label,
      .${rootPrefixCls}-col-24${formItemCls}-label,
      .${rootPrefixCls}-col-xl-24${formItemCls}-label`]: makeVerticalLayoutLabel(token),
    [`@media (max-width: ${token.screenXSMax}px)`]: [
      makeVerticalLayout(token),
      {
        [componentCls]: {
          [`.${rootPrefixCls}-col-xs-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
        }
      }
    ],
    [`@media (max-width: ${token.screenSMMax}px)`]: {
      [componentCls]: {
        [`.${rootPrefixCls}-col-sm-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
      }
    },
    [`@media (max-width: ${token.screenMDMax}px)`]: {
      [componentCls]: {
        [`.${rootPrefixCls}-col-md-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
      }
    },
    [`@media (max-width: ${token.screenLGMax}px)`]: {
      [componentCls]: {
        [`.${rootPrefixCls}-col-lg-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
      }
    }
  };
};
const prepareToken$2 = (token, rootPrefixCls) => {
  const formToken = merge(token, {
    formItemCls: `${token.componentCls}-item`,
    rootPrefixCls
  });
  return formToken;
};
const useStyle$h = genComponentStyleHook(
  "Form",
  (token, { rootPrefixCls }) => {
    const formToken = prepareToken$2(token, rootPrefixCls);
    return [
      genFormStyle(formToken),
      genFormItemStyle(formToken),
      genFormValidateMotionStyle(formToken),
      genHorizontalStyle(formToken),
      genInlineStyle(formToken),
      genVerticalStyle(formToken),
      genCollapseMotion(formToken),
      zoomIn
    ];
  },
  (token) => ({
    labelRequiredMarkColor: token.colorError,
    labelColor: token.colorTextHeading,
    labelFontSize: token.fontSize,
    labelHeight: token.controlHeight,
    labelColonMarginInlineStart: token.marginXXS / 2,
    labelColonMarginInlineEnd: token.marginXS,
    itemMarginBottom: token.marginLG,
    verticalLabelPadding: `0 0 ${token.paddingXS}px`,
    verticalLabelMargin: 0
  }),
  {
    // Let From style before the Grid
    order: -1e3
  }
);

const EMPTY_LIST$1 = [];
function toErrorEntity(error, prefix, errorStatus, index = 0) {
  return {
    key: typeof error === "string" ? error : `${prefix}-${index}`,
    error,
    errorStatus
  };
}
const ErrorList = ({
  help,
  helpStatus,
  errors = EMPTY_LIST$1,
  warnings = EMPTY_LIST$1,
  className: rootClassName,
  fieldId,
  onVisibleChanged
}) => {
  const { prefixCls } = React.useContext(FormItemPrefixContext);
  const baseClassName = `${prefixCls}-item-explain`;
  const [, hashId] = useStyle$h(prefixCls);
  const collapseMotion = useMemo$1(() => initCollapseMotion(prefixCls), [prefixCls]);
  const debounceErrors = useDebounce(errors);
  const debounceWarnings = useDebounce(warnings);
  const fullKeyList = React.useMemo(() => {
    if (help !== void 0 && help !== null) {
      return [toErrorEntity(help, "help", helpStatus)];
    }
    return [
      ...debounceErrors.map((error, index) => toErrorEntity(error, "error", "error", index)),
      ...debounceWarnings.map(
        (warning, index) => toErrorEntity(warning, "warning", "warning", index)
      )
    ];
  }, [help, helpStatus, debounceErrors, debounceWarnings]);
  const helpProps = {};
  if (fieldId) {
    helpProps.id = `${fieldId}_help`;
  }
  return /* @__PURE__ */ jsx(
    CSSMotion,
    {
      motionDeadline: collapseMotion.motionDeadline,
      motionName: `${prefixCls}-show-help`,
      visible: !!fullKeyList.length,
      onVisibleChanged,
      children: (holderProps) => {
        const { className: holderClassName, style: holderStyle } = holderProps;
        return /* @__PURE__ */ jsx(
          "div",
          {
            ...helpProps,
            className: classNames(baseClassName, holderClassName, rootClassName, hashId),
            style: holderStyle,
            role: "alert",
            children: /* @__PURE__ */ jsx(
              CSSMotionList,
              {
                keys: fullKeyList,
                ...initCollapseMotion(prefixCls),
                motionName: `${prefixCls}-show-help-item`,
                component: false,
                children: (itemProps) => {
                  const {
                    key,
                    error,
                    errorStatus,
                    className: itemClassName,
                    style: itemStyle
                  } = itemProps;
                  return /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: classNames(itemClassName, {
                        [`${baseClassName}-${errorStatus}`]: errorStatus
                      }),
                      style: itemStyle,
                      children: error
                    },
                    key
                  );
                }
              }
            )
          }
        );
      }
    }
  );
};

const formItemNameBlackList = ["parentNode"];
const defaultItemNamePrefixCls = "form_item";
function toArray(candidate) {
  if (candidate === void 0 || candidate === false)
    return [];
  return Array.isArray(candidate) ? candidate : [candidate];
}
function getFieldId(namePath, formName) {
  if (!namePath.length) {
    return void 0;
  }
  const mergedId = namePath.join("_");
  if (formName) {
    return `${formName}_${mergedId}`;
  }
  const isIllegalName = formItemNameBlackList.includes(mergedId);
  return isIllegalName ? `${defaultItemNamePrefixCls}_${mergedId}` : mergedId;
}
function getStatus(errors, warnings, meta, defaultValidateStatus, hasFeedback, validateStatus) {
  let status = defaultValidateStatus;
  if (validateStatus !== void 0) {
    status = validateStatus;
  } else if (meta.validating) {
    status = "validating";
  } else if (errors.length) {
    status = "error";
  } else if (warnings.length) {
    status = "warning";
  } else if (meta.touched || hasFeedback && meta.validated) {
    status = "success";
  }
  return status;
}

function toNamePathStr(name) {
  const namePath = toArray(name);
  return namePath.join("_");
}
function useForm(form) {
  const [rcForm] = useForm$1();
  const itemsRef = React.useRef({});
  const wrapForm = React.useMemo(
    () => form ?? {
      ...rcForm,
      __INTERNAL__: {
        itemRef: (name) => (node) => {
          const namePathStr = toNamePathStr(name);
          if (node) {
            itemsRef.current[namePathStr] = node;
          } else {
            delete itemsRef.current[namePathStr];
          }
        }
      },
      scrollToField: (name, options = {}) => {
        const namePath = toArray(name);
        const fieldId = getFieldId(namePath, wrapForm.__INTERNAL__.name);
        const node = fieldId ? document.getElementById(fieldId) : null;
        if (node) {
          scrollIntoView(node, {
            scrollMode: "if-needed",
            block: "nearest",
            ...options
          });
        }
      },
      getFieldInstance: (name) => {
        const namePathStr = toNamePathStr(name);
        return itemsRef.current[namePathStr];
      }
    },
    [form, rcForm]
  );
  return [wrapForm];
}

const InternalForm = (props, ref) => {
  const contextDisabled = React.useContext(DisabledContext);
  const { getPrefixCls, form: contextForm } = React.useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    size,
    disabled = contextDisabled,
    form,
    colon,
    labelAlign,
    labelWrap,
    labelCol,
    wrapperCol,
    hideRequiredMark,
    layout = "horizontal",
    scrollToFirstError,
    requiredMark,
    onFinishFailed,
    name,
    style,
    feedbackIcons,
    ...restFormProps
  } = props;
  const mergedSize = useSize(size);
  const contextValidateMessages = React.useContext(ValidateMessagesContext);
  const mergedRequiredMark = useMemo$1(() => {
    if (requiredMark !== void 0) {
      return requiredMark;
    }
    if (contextForm && contextForm.requiredMark !== void 0) {
      return contextForm.requiredMark;
    }
    if (hideRequiredMark) {
      return false;
    }
    return true;
  }, [hideRequiredMark, requiredMark, contextForm]);
  const mergedColon = colon ?? contextForm?.colon;
  const prefixCls = getPrefixCls("form", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$h(prefixCls);
  const formClassName = classNames(
    prefixCls,
    `${prefixCls}-${layout}`,
    {
      [`${prefixCls}-hide-required-mark`]: mergedRequiredMark === false,
      [`${prefixCls}-${mergedSize}`]: mergedSize
    },
    hashId,
    contextForm?.className,
    className,
    rootClassName
  );
  const [wrapForm] = useForm(form);
  const { __INTERNAL__ } = wrapForm;
  __INTERNAL__.name = name;
  const formContextValue = useMemo$1(
    () => ({
      name,
      labelAlign,
      labelCol,
      labelWrap,
      wrapperCol,
      vertical: layout === "vertical",
      colon: mergedColon,
      requiredMark: mergedRequiredMark,
      itemRef: __INTERNAL__.itemRef,
      form: wrapForm,
      feedbackIcons
    }),
    [
      name,
      labelAlign,
      labelCol,
      wrapperCol,
      layout,
      mergedColon,
      mergedRequiredMark,
      wrapForm,
      feedbackIcons
    ]
  );
  React.useImperativeHandle(ref, () => wrapForm);
  const scrollToField = (options, fieldName) => {
    if (options) {
      let defaultScrollToFirstError = { block: "nearest" };
      if (typeof options === "object") {
        defaultScrollToFirstError = options;
      }
      wrapForm.scrollToField(fieldName, defaultScrollToFirstError);
    }
  };
  const onInternalFinishFailed = (errorInfo) => {
    onFinishFailed?.(errorInfo);
    if (errorInfo.errorFields.length) {
      const fieldName = errorInfo.errorFields[0].name;
      if (scrollToFirstError !== void 0) {
        scrollToField(scrollToFirstError, fieldName);
        return;
      }
      if (contextForm && contextForm.scrollToFirstError !== void 0) {
        scrollToField(contextForm.scrollToFirstError, fieldName);
      }
    }
  };
  return wrapSSR(
    /* @__PURE__ */ jsx(DisabledContextProvider, { disabled, children: /* @__PURE__ */ jsx(SizeContextProvider, { size: mergedSize, children: /* @__PURE__ */ jsx(
      FormProvider,
      {
        ...{
          // This is not list in API, we pass with spread
          validateMessages: contextValidateMessages
        },
        children: /* @__PURE__ */ jsx(FormContext.Provider, { value: formContextValue, children: /* @__PURE__ */ jsx(
          FieldForm,
          {
            id: name,
            ...restFormProps,
            name,
            onFinishFailed: onInternalFinishFailed,
            form: wrapForm,
            style: { ...contextForm?.style, ...style },
            className: formClassName
          }
        ) })
      }
    ) }) })
  );
};
const Form$1 = React.forwardRef(InternalForm);

function useChildren(children) {
  if (typeof children === "function") {
    return children;
  }
  const childList = toArray$2(children);
  return childList.length <= 1 ? childList[0] : childList;
}

const useFormItemStatus = () => {
  const { status, errors = [], warnings = [] } = useContext(FormItemInputContext);
  return { status, errors, warnings };
};
useFormItemStatus.Context = FormItemInputContext;

function useFrameState(defaultValue) {
  const [value, setValue] = React.useState(defaultValue);
  const frameRef = useRef(null);
  const batchRef = useRef([]);
  const destroyRef = useRef(false);
  React.useEffect(() => {
    destroyRef.current = false;
    return () => {
      destroyRef.current = true;
      raf.cancel(frameRef.current);
      frameRef.current = null;
    };
  }, []);
  function setFrameValue(updater) {
    if (destroyRef.current) {
      return;
    }
    if (frameRef.current === null) {
      batchRef.current = [];
      frameRef.current = raf(() => {
        frameRef.current = null;
        setValue((prevValue) => {
          let current = prevValue;
          batchRef.current.forEach((func) => {
            current = func(current);
          });
          return current;
        });
      });
    }
    batchRef.current.push(updater);
  }
  return [value, setFrameValue];
}

function useItemRef() {
  const { itemRef } = React.useContext(FormContext);
  const cacheRef = React.useRef({});
  function getRef(name, children) {
    const childrenRef = children && typeof children === "object" && children.ref;
    const nameStr = name.join("_");
    if (cacheRef.current.name !== nameStr || cacheRef.current.originRef !== childrenRef) {
      cacheRef.current.name = nameStr;
      cacheRef.current.originRef = childrenRef;
      cacheRef.current.ref = composeRef(itemRef(name), childrenRef);
    }
    return cacheRef.current.ref;
  }
  return getRef;
}

const FormItemInput = (props) => {
  const {
    prefixCls,
    status,
    wrapperCol,
    children,
    errors,
    warnings,
    _internalItemRender: formItemRender,
    extra,
    help,
    fieldId,
    marginBottom,
    onErrorVisibleChanged
  } = props;
  const baseClassName = `${prefixCls}-item`;
  const formContext = React.useContext(FormContext);
  const mergedWrapperCol = wrapperCol || formContext.wrapperCol || {};
  const className = classNames(`${baseClassName}-control`, mergedWrapperCol.className);
  const subFormContext = React.useMemo(() => ({ ...formContext }), [formContext]);
  delete subFormContext.labelCol;
  delete subFormContext.wrapperCol;
  const inputDom = /* @__PURE__ */ jsx("div", { className: `${baseClassName}-control-input`, children: /* @__PURE__ */ jsx("div", { className: `${baseClassName}-control-input-content`, children }) });
  const formItemContext = React.useMemo(() => ({ prefixCls, status }), [prefixCls, status]);
  const errorListDom = marginBottom !== null || errors.length || warnings.length ? /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexWrap: "nowrap" }, children: [
    /* @__PURE__ */ jsx(FormItemPrefixContext.Provider, { value: formItemContext, children: /* @__PURE__ */ jsx(
      ErrorList,
      {
        fieldId,
        errors,
        warnings,
        help,
        helpStatus: status,
        className: `${baseClassName}-explain-connected`,
        onVisibleChanged: onErrorVisibleChanged
      }
    ) }),
    !!marginBottom && /* @__PURE__ */ jsx("div", { style: { width: 0, height: marginBottom } })
  ] }) : null;
  const extraProps = {};
  if (fieldId) {
    extraProps.id = `${fieldId}_extra`;
  }
  const extraDom = extra ? /* @__PURE__ */ jsx("div", { ...extraProps, className: `${baseClassName}-extra`, children: extra }) : null;
  const dom = formItemRender && formItemRender.mark === "pro_table_render" && formItemRender.render ? formItemRender.render(props, { input: inputDom, errorList: errorListDom, extra: extraDom }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    inputDom,
    errorListDom,
    extraDom
  ] });
  return /* @__PURE__ */ jsx(FormContext.Provider, { value: subFormContext, children: /* @__PURE__ */ jsx(Col, { ...mergedWrapperCol, className, children: dom }) });
};

function toTooltipProps(tooltip) {
  if (!tooltip) {
    return null;
  }
  if (typeof tooltip === "object" && !React.isValidElement(tooltip)) {
    return tooltip;
  }
  return {
    title: tooltip
  };
}
const FormItemLabel = ({
  prefixCls,
  label,
  htmlFor,
  labelCol,
  labelAlign,
  colon,
  required,
  requiredMark,
  tooltip
}) => {
  const [formLocale] = useLocale("Form");
  const {
    vertical,
    labelAlign: contextLabelAlign,
    labelCol: contextLabelCol,
    labelWrap,
    colon: contextColon
  } = React.useContext(FormContext);
  if (!label) {
    return null;
  }
  const mergedLabelCol = labelCol || contextLabelCol || {};
  const mergedLabelAlign = labelAlign || contextLabelAlign;
  const labelClsBasic = `${prefixCls}-item-label`;
  const labelColClassName = classNames(
    labelClsBasic,
    mergedLabelAlign === "left" && `${labelClsBasic}-left`,
    mergedLabelCol.className,
    {
      [`${labelClsBasic}-wrap`]: !!labelWrap
    }
  );
  let labelChildren = label;
  const computedColon = colon === true || contextColon !== false && colon !== false;
  const haveColon = computedColon && !vertical;
  if (haveColon && typeof label === "string" && label.trim() !== "") {
    labelChildren = label.replace(/[:|：]\s*$/, "");
  }
  const tooltipProps = toTooltipProps(tooltip);
  if (tooltipProps) {
    const { icon = /* @__PURE__ */ jsx(HelpOutlineIcon, {}), ...restTooltipProps } = tooltipProps;
    const tooltipNode = /* @__PURE__ */ jsx(Tooltip$1, { ...restTooltipProps, children: React.cloneElement(icon, { className: `${prefixCls}-item-tooltip`, title: "" }) });
    labelChildren = /* @__PURE__ */ jsxs(Fragment, { children: [
      labelChildren,
      tooltipNode
    ] });
  }
  const isOptionalMark = requiredMark === "optional";
  const isRenderMark = typeof requiredMark === "function";
  if (isRenderMark) {
    labelChildren = requiredMark(labelChildren, { required: !!required });
  } else if (isOptionalMark && !required) {
    labelChildren = /* @__PURE__ */ jsxs(Fragment, { children: [
      labelChildren,
      /* @__PURE__ */ jsx("span", { className: `${prefixCls}-item-optional`, title: "", children: formLocale?.optional || localeValues.Form?.optional })
    ] });
  }
  const labelClassName = classNames({
    [`${prefixCls}-item-required`]: required,
    [`${prefixCls}-item-required-mark-optional`]: isOptionalMark || isRenderMark,
    [`${prefixCls}-item-no-colon`]: !computedColon
  });
  return /* @__PURE__ */ jsx(Col, { ...mergedLabelCol, className: labelColClassName, children: /* @__PURE__ */ jsx(
    "label",
    {
      htmlFor,
      className: labelClassName,
      title: typeof label === "string" ? label : "",
      children: labelChildren
    }
  ) });
};

const iconMap = {
  success: CheckCircleOutlineIcon,
  warning: ErrorOutlineIcon,
  error: CloseIcon,
  validating: CircularProgress
};
function StatusProvider({
  children,
  errors,
  warnings,
  hasFeedback,
  validateStatus,
  prefixCls,
  meta,
  noStyle
}) {
  const itemPrefixCls = `${prefixCls}-item`;
  const { feedbackIcons } = React.useContext(FormContext);
  const mergedValidateStatus = getStatus(
    errors,
    warnings,
    meta,
    null,
    !!hasFeedback,
    validateStatus
  );
  const {
    isFormItemInput: parentIsFormItemInput,
    status: parentStatus,
    hasFeedback: parentHasFeedback,
    feedbackIcon: parentFeedbackIcon
  } = React.useContext(FormItemInputContext);
  const formItemStatusContext = React.useMemo(() => {
    let feedbackIcon;
    if (hasFeedback) {
      const customIcons = hasFeedback !== true && hasFeedback.icons || feedbackIcons;
      const customIconNode = mergedValidateStatus && customIcons?.({ status: mergedValidateStatus, errors, warnings })?.[mergedValidateStatus];
      const IconNode = mergedValidateStatus && iconMap[mergedValidateStatus];
      feedbackIcon = customIconNode !== false && IconNode ? /* @__PURE__ */ jsx(
        "span",
        {
          className: classNames(
            `${itemPrefixCls}-feedback-icon`,
            `${itemPrefixCls}-feedback-icon-${mergedValidateStatus}`
          ),
          children: customIconNode || /* @__PURE__ */ jsx(IconNode, {})
        }
      ) : null;
    }
    const context = {
      status: mergedValidateStatus || "",
      errors,
      warnings,
      hasFeedback: !!hasFeedback,
      feedbackIcon,
      isFormItemInput: true
    };
    if (noStyle) {
      context.status = (mergedValidateStatus ?? parentStatus) || "";
      context.isFormItemInput = parentIsFormItemInput;
      context.hasFeedback = !!(hasFeedback ?? parentHasFeedback);
      context.feedbackIcon = hasFeedback !== void 0 ? context.feedbackIcon : parentFeedbackIcon;
    }
    return context;
  }, [mergedValidateStatus, hasFeedback, noStyle, parentIsFormItemInput, parentStatus]);
  return /* @__PURE__ */ jsx(FormItemInputContext.Provider, { value: formItemStatusContext, children });
}

function ItemHolder(props) {
  const {
    prefixCls,
    className,
    rootClassName,
    style,
    help,
    errors,
    warnings,
    validateStatus,
    meta,
    hasFeedback,
    hidden,
    children,
    fieldId,
    required,
    isRequired,
    onSubItemMetaChange,
    ...restProps
  } = props;
  const itemPrefixCls = `${prefixCls}-item`;
  const { requiredMark } = React.useContext(FormContext);
  const itemRef = React.useRef(null);
  const debounceErrors = useDebounce(errors);
  const debounceWarnings = useDebounce(warnings);
  const hasHelp = help !== void 0 && help !== null;
  const hasError = !!(hasHelp || errors.length || warnings.length);
  const isOnScreen = !!itemRef.current && isVisible(itemRef.current);
  const [marginBottom, setMarginBottom] = React.useState(null);
  useIsomorphicLayoutEffect(() => {
    if (hasError && itemRef.current) {
      const itemStyle = getComputedStyle(itemRef.current);
      setMarginBottom(parseInt(itemStyle.marginBottom, 10));
    }
  }, [hasError, isOnScreen]);
  const onErrorVisibleChanged = (nextVisible) => {
    if (!nextVisible) {
      setMarginBottom(null);
    }
  };
  const getValidateState = (isDebounce = false) => {
    const _errors = isDebounce ? debounceErrors : meta.errors;
    const _warnings = isDebounce ? debounceWarnings : meta.warnings;
    return getStatus(_errors, _warnings, meta, "", !!hasFeedback, validateStatus);
  };
  const mergedValidateStatus = getValidateState();
  const itemClassName = classNames(itemPrefixCls, className, rootClassName, {
    [`${itemPrefixCls}-with-help`]: hasHelp || debounceErrors.length || debounceWarnings.length,
    // Status
    [`${itemPrefixCls}-has-feedback`]: mergedValidateStatus && hasFeedback,
    [`${itemPrefixCls}-has-success`]: mergedValidateStatus === "success",
    [`${itemPrefixCls}-has-warning`]: mergedValidateStatus === "warning",
    [`${itemPrefixCls}-has-error`]: mergedValidateStatus === "error",
    [`${itemPrefixCls}-is-validating`]: mergedValidateStatus === "validating",
    [`${itemPrefixCls}-hidden`]: hidden
  });
  return /* @__PURE__ */ jsxs("div", { className: itemClassName, style, ref: itemRef, children: [
    /* @__PURE__ */ jsxs(
      Row$1,
      {
        className: `${itemPrefixCls}-row`,
        ...omit(restProps, [
          "_internalItemRender",
          "colon",
          "dependencies",
          "extra",
          "fieldKey",
          "getValueFromEvent",
          "getValueProps",
          "htmlFor",
          "id",
          // It is deprecated because `htmlFor` is its replacement.
          "initialValue",
          "isListField",
          "label",
          "labelAlign",
          "labelCol",
          "labelWrap",
          "messageVariables",
          "name",
          "normalize",
          "noStyle",
          "preserve",
          "requiredMark",
          "rules",
          "shouldUpdate",
          "trigger",
          "tooltip",
          "validateFirst",
          "validateTrigger",
          "valuePropName",
          "wrapperCol",
          "validateDebounce"
        ]),
        children: [
          /* @__PURE__ */ jsx(
            FormItemLabel,
            {
              htmlFor: fieldId,
              ...props,
              requiredMark,
              required: required ?? isRequired,
              prefixCls
            }
          ),
          /* @__PURE__ */ jsx(
            FormItemInput,
            {
              ...props,
              ...meta,
              errors: debounceErrors,
              warnings: debounceWarnings,
              prefixCls,
              status: mergedValidateStatus,
              help,
              marginBottom,
              onErrorVisibleChanged,
              children: /* @__PURE__ */ jsx(NoStyleItemContext.Provider, { value: onSubItemMetaChange, children: /* @__PURE__ */ jsx(
                StatusProvider,
                {
                  prefixCls,
                  meta,
                  errors: meta.errors,
                  warnings: meta.warnings,
                  hasFeedback,
                  validateStatus: mergedValidateStatus,
                  children
                }
              ) })
            }
          )
        ]
      }
    ),
    !!marginBottom && /* @__PURE__ */ jsx(
      "div",
      {
        className: `${itemPrefixCls}-margin-offset`,
        style: {
          marginBottom: -marginBottom
        }
      }
    )
  ] });
}

const NAME_SPLIT = "__SPLIT__";
const MemoInput = React.memo(
  ({ children }) => children,
  (prev, next) => prev.value === next.value && prev.update === next.update && prev.childProps.length === next.childProps.length && prev.childProps.every((value, index) => value === next.childProps[index])
);
function genEmptyMeta() {
  return {
    errors: [],
    warnings: [],
    touched: false,
    validating: false,
    name: [],
    validated: false
  };
}
function InternalFormItem(props) {
  const {
    name,
    noStyle,
    className,
    dependencies,
    prefixCls: customizePrefixCls,
    shouldUpdate,
    rules,
    children,
    required,
    label,
    messageVariables,
    trigger = "onChange",
    validateTrigger,
    hidden,
    help
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const { name: formName } = React.useContext(FormContext);
  const mergedChildren = useChildren(children);
  const isRenderProps = typeof mergedChildren === "function";
  const notifyParentMetaChange = React.useContext(NoStyleItemContext);
  const { validateTrigger: contextValidateTrigger } = React.useContext(FieldContext);
  const mergedValidateTrigger = validateTrigger !== void 0 ? validateTrigger : contextValidateTrigger;
  const hasName = !(name === void 0 || name === null);
  const prefixCls = getPrefixCls("form", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$h(prefixCls);
  const warning = devUseWarning();
  const listContext = React.useContext(ListContext$1);
  const fieldKeyPathRef = React.useRef();
  const [subFieldErrors, setSubFieldErrors] = useFrameState({});
  const [meta, setMeta] = useState(() => genEmptyMeta());
  const onMetaChange = (nextMeta) => {
    const keyInfo = listContext?.getKey(nextMeta.name);
    setMeta(nextMeta.destroy ? genEmptyMeta() : nextMeta, true);
    if (noStyle && help !== false && notifyParentMetaChange) {
      let namePath = nextMeta.name;
      if (!nextMeta.destroy) {
        if (keyInfo !== void 0) {
          const [fieldKey, restPath] = keyInfo;
          namePath = [fieldKey, ...restPath];
          fieldKeyPathRef.current = namePath;
        }
      } else {
        namePath = fieldKeyPathRef.current || namePath;
      }
      notifyParentMetaChange(nextMeta, namePath);
    }
  };
  const onSubItemMetaChange = (subMeta, uniqueKeys) => {
    setSubFieldErrors((prevSubFieldErrors) => {
      const clone = {
        ...prevSubFieldErrors
      };
      const mergedNamePath = [...subMeta.name.slice(0, -1), ...uniqueKeys];
      const mergedNameKey = mergedNamePath.join(NAME_SPLIT);
      if (subMeta.destroy) {
        delete clone[mergedNameKey];
      } else {
        clone[mergedNameKey] = subMeta;
      }
      return clone;
    });
  };
  const [mergedErrors, mergedWarnings] = React.useMemo(() => {
    const errorList = [...meta.errors];
    const warningList = [...meta.warnings];
    Object.values(subFieldErrors).forEach((subFieldError) => {
      errorList.push(...subFieldError.errors || []);
      warningList.push(...subFieldError.warnings || []);
    });
    return [errorList, warningList];
  }, [subFieldErrors, meta.errors, meta.warnings]);
  const getItemRef = useItemRef();
  function renderLayout(baseChildren, fieldId, isRequired) {
    if (noStyle && !hidden) {
      return /* @__PURE__ */ jsx(
        StatusProvider,
        {
          prefixCls,
          hasFeedback: props.hasFeedback,
          validateStatus: props.validateStatus,
          meta,
          errors: mergedErrors,
          warnings: mergedWarnings,
          noStyle: true,
          children: baseChildren
        }
      );
    }
    return /* @__PURE__ */ jsx(
      ItemHolder,
      {
        ...props,
        className: classNames(className, hashId),
        prefixCls,
        fieldId,
        isRequired,
        errors: mergedErrors,
        warnings: mergedWarnings,
        meta,
        onSubItemMetaChange,
        children: baseChildren
      },
      "row"
    );
  }
  if (!hasName && !isRenderProps && !dependencies) {
    return wrapSSR(renderLayout(mergedChildren));
  }
  let variables = {};
  if (typeof label === "string") {
    variables.label = label;
  } else if (name) {
    variables.label = String(name);
  }
  if (messageVariables) {
    variables = { ...variables, ...messageVariables };
  }
  return wrapSSR(
    /* @__PURE__ */ jsx(
      Field,
      {
        ...props,
        messageVariables: variables,
        trigger,
        validateTrigger: mergedValidateTrigger,
        onMetaChange,
        children: (control, renderMeta, oriContext) => {
          const context = oriContext;
          const mergedName = toArray(name).length && renderMeta ? renderMeta.name : [];
          const fieldId = getFieldId(mergedName, formName);
          const isRequired = required !== void 0 ? required : !!(rules && rules.some((rule) => {
            if (rule && typeof rule === "object" && rule.required && !rule.warningOnly) {
              return true;
            }
            if (typeof rule === "function") {
              const ruleEntity = rule(context);
              return ruleEntity && ruleEntity.required && !ruleEntity.warningOnly;
            }
            return false;
          }));
          const mergedControl = {
            ...control
          };
          let childNode = null;
          if (Array.isArray(mergedChildren) && hasName) {
            childNode = mergedChildren;
          } else if (isRenderProps && (!(shouldUpdate || dependencies) || hasName)) ; else if (dependencies && !isRenderProps && !hasName) ; else if (isValidElement(mergedChildren)) {
            warning(
              mergedChildren.props.defaultValue === void 0,
              "usage",
              "`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead."
            );
            const childProps = { ...mergedChildren.props, ...mergedControl };
            if (!childProps.id) {
              childProps.id = fieldId;
            }
            if (help || mergedErrors.length > 0 || mergedWarnings.length > 0 || props.extra) {
              const describedbyArr = [];
              if (help || mergedErrors.length > 0) {
                describedbyArr.push(`${fieldId}_help`);
              }
              if (props.extra) {
                describedbyArr.push(`${fieldId}_extra`);
              }
              childProps["aria-describedby"] = describedbyArr.join(" ");
            }
            if (mergedErrors.length > 0) {
              childProps["aria-invalid"] = "true";
            }
            if (isRequired) {
              childProps["aria-required"] = "true";
            }
            if (supportRef(mergedChildren)) {
              childProps.ref = getItemRef(mergedName, mergedChildren);
            }
            const triggers = /* @__PURE__ */ new Set([
              ...toArray(trigger),
              ...toArray(mergedValidateTrigger)
            ]);
            triggers.forEach((eventName) => {
              childProps[eventName] = (...args) => {
                mergedControl[eventName]?.(...args);
                mergedChildren.props[eventName]?.(...args);
              };
            });
            const watchingChildProps = [
              childProps["aria-required"],
              childProps["aria-invalid"],
              childProps["aria-describedby"]
            ];
            childNode = /* @__PURE__ */ jsx(
              MemoInput,
              {
                value: mergedControl[props.valuePropName || "value"],
                update: mergedChildren,
                childProps: watchingChildProps,
                children: cloneElement(mergedChildren, childProps)
              }
            );
          } else if (isRenderProps && (shouldUpdate || dependencies) && !hasName) {
            childNode = mergedChildren(context);
          } else {
            warning(
              !mergedName.length,
              "usage",
              "`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead."
            );
            childNode = mergedChildren;
          }
          return renderLayout(childNode, fieldId, isRequired);
        }
      }
    )
  );
}
const FormItem = InternalFormItem;
FormItem.useStatus = useFormItemStatus;

const FormList = ({
  prefixCls: customizePrefixCls,
  children,
  ...props
}) => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("form", customizePrefixCls);
  const contextValue = React.useMemo(
    () => ({
      prefixCls,
      status: "error"
    }),
    [prefixCls]
  );
  return /* @__PURE__ */ jsx(List$1, { ...props, children: (fields, operation, meta) => /* @__PURE__ */ jsx(FormItemPrefixContext.Provider, { value: contextValue, children: children(
    fields.map((field) => ({ ...field, fieldKey: field.key })),
    operation,
    {
      errors: meta.errors,
      warnings: meta.warnings
    }
  ) }) });
};

function useFormInstance() {
  const { form } = useContext(FormContext);
  return form;
}

const Form = Form$1;
Form.Item = FormItem;
Form.List = FormList;
Form.ErrorList = ErrorList;
Form.useForm = useForm;
Form.useFormInstance = useFormInstance;
Form.useWatch = useWatch;
Form.Provider = FormProvider;
Form.create = () => {
};

const Group = (props) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const { prefixCls: customizePrefixCls, className } = props;
  const prefixCls = getPrefixCls("input-group", customizePrefixCls);
  const inputPrefixCls = getPrefixCls("input");
  const [wrapSSR, hashId] = useStyle$r(inputPrefixCls);
  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-lg`]: props.size === "large",
      [`${prefixCls}-sm`]: props.size === "small",
      [`${prefixCls}-compact`]: props.compact
    },
    hashId,
    className
  );
  const formItemContext = useContext(FormItemInputContext);
  const groupFormItemContext = useMemo$1(
    () => ({
      ...formItemContext,
      isFormItemInput: false
    }),
    [formItemContext]
  );
  return wrapSSR(
    /* @__PURE__ */ jsx(
      "span",
      {
        className: cls,
        style: props.style,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        onFocus: props.onFocus,
        onBlur: props.onBlur,
        children: /* @__PURE__ */ jsx(FormItemInputContext.Provider, { value: groupFormItemContext, children: props.children })
      }
    )
  );
};

function useRemovePasswordTimeout(inputRef, triggerOnMount) {
  const removePasswordTimeoutRef = useRef([]);
  const removePasswordTimeout = () => {
    removePasswordTimeoutRef.current.push(
      setTimeout(() => {
        if (inputRef.current?.input && inputRef.current?.input.getAttribute("type") === "Password" && inputRef.current?.input.hasAttribute("value")) {
          inputRef.current?.input.removeAttribute("value");
        }
      })
    );
  };
  useEffect(() => {
    if (triggerOnMount) {
      removePasswordTimeout();
    }
    return () => removePasswordTimeoutRef.current.forEach((timer) => {
      if (timer) {
        clearTimeout(timer);
      }
    });
  }, []);
  return removePasswordTimeout;
}

function hasPrefixSuffix(props) {
  return !!(props.prefix || props.suffix || props.allowClear);
}

function triggerFocus(element, option) {
  if (!element) {
    return;
  }
  element.focus(option);
  const { cursor } = option || {};
  if (cursor) {
    const len = element.value.length;
    switch (cursor) {
      case "start":
        element.setSelectionRange(0, 0);
        break;
      case "end":
        element.setSelectionRange(len, len);
        break;
      default:
        element.setSelectionRange(0, len);
        break;
    }
  }
}
const Input$1 = forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    bordered = true,
    status: customStatus,
    size: customSize,
    disabled: customDisabled,
    onBlur,
    onFocus,
    suffix,
    allowClear,
    addonAfter,
    addonBefore,
    className,
    style,
    styles,
    rootClassName,
    onChange,
    classNames: classes,
    ...rest
  } = props;
  const { getPrefixCls, input } = React__default.useContext(ConfigContext);
  const prefixCls = getPrefixCls("input", customizePrefixCls);
  const inputRef = useRef(null);
  const [wrapSSR, hashId] = useStyle$r(prefixCls);
  const { compactSize, compactItemClassnames } = useCompactItemContext(prefixCls);
  const mergedSize = useSize((ctx) => customSize ?? compactSize ?? ctx);
  const disabled = React__default.useContext(DisabledContext);
  const mergedDisabled = customDisabled ?? disabled;
  const { status: contextStatus, hasFeedback, feedbackIcon } = useContext(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  const inputHasPrefixSuffix = hasPrefixSuffix(props) || !!hasFeedback;
  useRef(inputHasPrefixSuffix);
  const removePasswordTimeout = useRemovePasswordTimeout(inputRef, true);
  const handleBlur = (e) => {
    removePasswordTimeout();
    onBlur?.(e);
  };
  const handleFocus = (e) => {
    removePasswordTimeout();
    onFocus?.(e);
  };
  const handleChange = (e) => {
    removePasswordTimeout();
    onChange?.(e);
  };
  const suffixNode = (hasFeedback || suffix) && /* @__PURE__ */ jsxs(Fragment, { children: [
    suffix,
    hasFeedback && feedbackIcon
  ] });
  let mergedAllowClear;
  if (typeof allowClear === "object" && allowClear?.clearIcon) {
    mergedAllowClear = allowClear;
  } else if (allowClear) {
    mergedAllowClear = { clearIcon: /* @__PURE__ */ jsx(CloseIcon, {}) };
  }
  return wrapSSR(
    /* @__PURE__ */ jsx(
      RcInput,
      {
        ref: composeRef(ref, inputRef),
        prefixCls,
        autoComplete: input?.autoComplete,
        ...rest,
        disabled: mergedDisabled,
        onBlur: handleBlur,
        onFocus: handleFocus,
        style: { ...input?.style, ...style },
        styles: { ...input?.styles, ...styles },
        suffix: suffixNode,
        allowClear: mergedAllowClear,
        className: classNames(className, rootClassName, compactItemClassnames, input?.className),
        onChange: handleChange,
        addonAfter: addonAfter && /* @__PURE__ */ jsx(NoCompactStyle, { children: /* @__PURE__ */ jsx(NoFormStyle, { override: true, status: true, children: addonAfter }) }),
        addonBefore: addonBefore && /* @__PURE__ */ jsx(NoCompactStyle, { children: /* @__PURE__ */ jsx(NoFormStyle, { override: true, status: true, children: addonBefore }) }),
        classNames: {
          ...classes,
          ...input?.classNames,
          input: classNames(
            {
              [`${prefixCls}-sm`]: mergedSize === "small",
              [`${prefixCls}-lg`]: mergedSize === "large",
              [`${prefixCls}-borderless`]: !bordered
            },
            !inputHasPrefixSuffix && getStatusClassNames(prefixCls, mergedStatus),
            classes?.input,
            input?.classNames?.input,
            hashId
          )
        },
        classes: {
          affixWrapper: classNames(
            {
              [`${prefixCls}-affix-wrapper-sm`]: mergedSize === "small",
              [`${prefixCls}-affix-wrapper-lg`]: mergedSize === "large",
              [`${prefixCls}-affix-wrapper-borderless`]: !bordered
            },
            getStatusClassNames(`${prefixCls}-affix-wrapper`, mergedStatus, hasFeedback),
            hashId
          ),
          wrapper: classNames(
            hashId
          ),
          group: classNames(
            {
              [`${prefixCls}-group-wrapper-sm`]: mergedSize === "small",
              [`${prefixCls}-group-wrapper-lg`]: mergedSize === "large",
              [`${prefixCls}-group-wrapper-disabled`]: mergedDisabled
            },
            getStatusClassNames(`${prefixCls}-group-wrapper`, mergedStatus, hasFeedback),
            hashId
          )
        }
      }
    )
  );
});

const defaultIconRender = (visible) => visible ? /* @__PURE__ */ jsx(VisibilityIcon, {}) : /* @__PURE__ */ jsx(VisibilityOffIcon, {});
const ActionMap = {
  click: "onClick",
  hover: "onMouseOver"
};
const Password = React.forwardRef((props, ref) => {
  const { visibilityToggle = true } = props;
  const visibilityControlled = typeof visibilityToggle === "object" && visibilityToggle.visible !== void 0;
  const [visible, setVisible] = useState$1(
    () => visibilityControlled ? visibilityToggle.visible : false
  );
  const inputRef = useRef(null);
  React.useEffect(() => {
    if (visibilityControlled) {
      setVisible(visibilityToggle.visible);
    }
  }, [visibilityControlled, visibilityToggle]);
  const removePasswordTimeout = useRemovePasswordTimeout(inputRef);
  const onVisibleChange = () => {
    const { disabled } = props;
    if (disabled) {
      return;
    }
    if (visible) {
      removePasswordTimeout();
    }
    setVisible((prevState) => {
      const newState = !prevState;
      if (typeof visibilityToggle === "object") {
        visibilityToggle.onVisibleChange?.(newState);
      }
      return newState;
    });
  };
  const getIcon = (prefixCls2) => {
    const { action = "click", iconRender = defaultIconRender } = props;
    const iconTrigger = ActionMap[action] || "";
    const icon = iconRender(visible);
    const iconProps = {
      [iconTrigger]: onVisibleChange,
      className: `${prefixCls2}-icon`,
      key: "PasswordIcon",
      onMouseDown: (e) => {
      },
      onMouseUp: (e) => {
      }
    };
    return React.cloneElement(React.isValidElement(icon) ? icon : /* @__PURE__ */ jsx("span", { children: icon }), iconProps);
  };
  const {
    className,
    prefixCls: customizePrefixCls,
    inputPrefixCls: customizeInputPrefixCls,
    size,
    ...restProps
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const inputPrefixCls = getPrefixCls("input", customizeInputPrefixCls);
  const prefixCls = getPrefixCls("input-password", customizePrefixCls);
  const suffixIcon = visibilityToggle && getIcon(prefixCls);
  const inputClassName = classNames(prefixCls, className, {
    [`${prefixCls}-${size}`]: !!size
  });
  const omittedProps = {
    ...omit(restProps, ["suffix", "iconRender", "visibilityToggle"]),
    type: visible ? "text" : "password",
    className: inputClassName,
    prefixCls: inputPrefixCls,
    suffix: suffixIcon
  };
  if (size) {
    omittedProps.size = size;
  }
  return /* @__PURE__ */ jsx(Input$1, { ref: composeRef(ref, inputRef), ...omittedProps });
});

const Search = React.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    inputPrefixCls: customizeInputPrefixCls,
    className,
    size: customizeSize,
    suffix,
    enterButton = false,
    addonAfter,
    loading,
    disabled,
    onSearch: customOnSearch,
    onChange: customOnChange,
    onCompositionStart,
    onCompositionEnd,
    ...restProps
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const composedRef = React.useRef(false);
  const prefixCls = getPrefixCls("input-search", customizePrefixCls);
  const inputPrefixCls = getPrefixCls("input", customizeInputPrefixCls);
  const { compactSize } = useCompactItemContext(prefixCls);
  const size = useSize((ctx) => customizeSize ?? compactSize ?? ctx);
  const inputRef = React.useRef(null);
  const onChange = (e) => {
    if (e && e.target && e.type === "click" && customOnSearch) {
      customOnSearch(e.target.value, e, {
        source: "clear"
      });
    }
    if (customOnChange) {
      customOnChange(e);
    }
  };
  const onMouseDown = (e) => {
    if (document.activeElement === inputRef.current?.input) {
      e.preventDefault();
    }
  };
  const onSearch = (e) => {
    if (customOnSearch) {
      customOnSearch(inputRef.current?.input?.value, e, {
        source: "input"
      });
    }
  };
  const onPressEnter = (e) => {
    if (composedRef.current || loading) {
      return;
    }
    onSearch(e);
  };
  const searchIcon = typeof enterButton === "boolean" ? /* @__PURE__ */ jsx(SearchIcon, {}) : null;
  const btnClassName = `${prefixCls}-button`;
  let button;
  button = /* @__PURE__ */ jsx(
    LoadingButton,
    {
      className: btnClassName,
      color: enterButton ? "primary" : void 0,
      size,
      disabled,
      onMouseDown,
      onClick: onSearch,
      loading,
      startIcon: searchIcon,
      children: enterButton
    },
    "enterButton"
  );
  if (addonAfter) {
    button = [
      button,
      cloneElement(addonAfter, {
        key: "addonAfter"
      })
    ];
  }
  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-${size}`]: !!size,
      [`${prefixCls}-with-button`]: !!enterButton
    },
    className
  );
  const handleOnCompositionStart = (e) => {
    composedRef.current = true;
    onCompositionStart?.(e);
  };
  const handleOnCompositionEnd = (e) => {
    composedRef.current = false;
    onCompositionEnd?.(e);
  };
  return /* @__PURE__ */ jsx(
    Input$1,
    {
      ref: composeRef(inputRef, ref),
      onPressEnter,
      ...restProps,
      size,
      onCompositionStart: handleOnCompositionStart,
      onCompositionEnd: handleOnCompositionEnd,
      prefixCls: inputPrefixCls,
      addonAfter: button,
      suffix,
      onChange,
      className: cls,
      disabled
    }
  );
});

const TextArea = forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    bordered = true,
    size: customizeSize,
    disabled: customDisabled,
    status: customStatus,
    allowClear,
    showCount,
    classNames: classes,
    rootClassName,
    className,
    ...rest
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const mergedSize = useSize(customizeSize);
  const disabled = React.useContext(DisabledContext);
  const mergedDisabled = customDisabled ?? disabled;
  const {
    status: contextStatus,
    hasFeedback,
    feedbackIcon
  } = React.useContext(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  const innerRef = React.useRef(null);
  React.useImperativeHandle(ref, () => ({
    resizableTextArea: innerRef.current?.resizableTextArea,
    focus: (option) => {
      triggerFocus(innerRef.current?.resizableTextArea?.textArea, option);
    },
    blur: () => innerRef.current?.blur()
  }));
  const prefixCls = getPrefixCls("input", customizePrefixCls);
  let mergedAllowClear;
  if (typeof allowClear === "object" && allowClear?.clearIcon) {
    mergedAllowClear = allowClear;
  } else if (allowClear) {
    mergedAllowClear = { clearIcon: /* @__PURE__ */ jsx(CloseIcon, {}) };
  }
  const [wrapSSR, hashId] = useStyle$r(prefixCls);
  return wrapSSR(
    /* @__PURE__ */ jsx(
      RcTextArea,
      {
        ...rest,
        disabled: mergedDisabled,
        allowClear: mergedAllowClear,
        className: classNames(className, rootClassName),
        classes: {
          affixWrapper: classNames(
            `${prefixCls}-textarea-affix-wrapper`,
            {
              [`${prefixCls}-affix-wrapper-borderless`]: !bordered,
              [`${prefixCls}-affix-wrapper-sm`]: mergedSize === "small",
              [`${prefixCls}-affix-wrapper-lg`]: mergedSize === "large",
              [`${prefixCls}-textarea-show-count`]: showCount
            },
            getStatusClassNames(`${prefixCls}-affix-wrapper`, mergedStatus),
            hashId
          )
        },
        classNames: {
          ...classes,
          textarea: classNames(
            {
              [`${prefixCls}-borderless`]: !bordered,
              [`${prefixCls}-sm`]: mergedSize === "small",
              [`${prefixCls}-lg`]: mergedSize === "large"
            },
            getStatusClassNames(prefixCls, mergedStatus),
            hashId,
            classes?.textarea
          )
        },
        prefixCls,
        suffix: hasFeedback && /* @__PURE__ */ jsx("span", { className: `${prefixCls}-textarea-suffix`, children: feedbackIcon }),
        showCount,
        ref: innerRef
      }
    )
  );
});

const Input = Input$1;
Input.Group = Group;
Input.Search = Search;
Input.TextArea = TextArea;
Input.Password = Password;

const genRadiusStyle$1 = ({ componentCls, borderRadiusSM, borderRadiusLG }, size) => {
  const borderRadius = size === "lg" ? borderRadiusLG : borderRadiusSM;
  return {
    [`&-${size}`]: {
      [`${componentCls}-handler-wrap`]: {
        borderStartEndRadius: borderRadius,
        borderEndEndRadius: borderRadius
      },
      [`${componentCls}-handler-up`]: {
        borderStartEndRadius: borderRadius
      },
      [`${componentCls}-handler-down`]: {
        borderEndEndRadius: borderRadius
      }
    }
  };
};
const genInputNumberStyles = (token) => {
  const {
    componentCls,
    lineWidth,
    lineType,
    colorBorder,
    borderRadius,
    fontSizeLG,
    controlHeightLG,
    controlHeightSM,
    colorError,
    paddingInlineSM,
    colorTextDescription,
    motionDurationMid,
    handleHoverColor,
    paddingInline,
    paddingBlock,
    handleBg,
    handleActiveBg,
    colorTextDisabled,
    borderRadiusSM,
    borderRadiusLG,
    controlWidth,
    handleVisible,
    handleBorderColor
  } = token;
  return [
    {
      [componentCls]: {
        ...resetComponent(token),
        ...genBasicInputStyle(token),
        ...genStatusStyle(token, componentCls),
        display: "inline-block",
        width: controlWidth,
        margin: 0,
        padding: 0,
        border: `${lineWidth}px ${lineType} ${colorBorder}`,
        borderRadius,
        "&-lg": {
          padding: 0,
          fontSize: fontSizeLG,
          borderRadius: borderRadiusLG,
          [`input${componentCls}-input`]: {
            height: controlHeightLG - 2 * lineWidth
          }
        },
        "&-sm": {
          padding: 0,
          borderRadius: borderRadiusSM,
          [`input${componentCls}-input`]: {
            height: controlHeightSM - 2 * lineWidth,
            padding: `0 ${paddingInlineSM}px`
          }
        },
        "&:hover": {
          ...genHoverStyle(token)
        },
        "&-focused": {
          ...genActiveStyle(token)
        },
        // ===================== Out Of Range =====================
        "&-out-of-range": {
          [`${componentCls}-input-wrap`]: {
            input: {
              color: colorError
            }
          }
        },
        // Style for input-group: input with label, with button or dropdown...
        "&-group": {
          ...resetComponent(token),
          ...genInputGroupStyle(token),
          "&-wrapper": {
            display: "inline-block",
            textAlign: "start",
            verticalAlign: "top",
            [`${componentCls}-affix-wrapper`]: {
              width: "100%"
            },
            // Size
            "&-lg": {
              [`${componentCls}-group-addon`]: {
                borderRadius: borderRadiusLG,
                fontSize: token.fontSizeLG
              }
            },
            "&-sm": {
              [`${componentCls}-group-addon`]: {
                borderRadius: borderRadiusSM
              }
            },
            [`${componentCls}-wrapper-disabled > ${componentCls}-group-addon`]: {
              ...genDisabledStyle(token)
            }
          }
        },
        [`&-disabled ${componentCls}-input`]: {
          cursor: "not-allowed"
        },
        [componentCls]: {
          "&-input": {
            ...resetComponent(token),
            width: "100%",
            padding: `${paddingBlock}px ${paddingInline}px`,
            textAlign: "start",
            backgroundColor: "transparent",
            border: 0,
            borderRadius,
            outline: 0,
            transition: `all ${motionDurationMid} linear`,
            appearance: "textfield",
            fontSize: "inherit",
            ...genPlaceholderStyle(token.colorTextPlaceholder),
            '&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button': {
              margin: 0,
              /* stylelint-disable-next-line property-no-vendor-prefix */
              webkitAppearance: "none",
              appearance: "none"
            }
          }
        }
      }
    },
    // Handler
    {
      [componentCls]: {
        [`&:hover ${componentCls}-handler-wrap, &-focused ${componentCls}-handler-wrap`]: {
          opacity: 1
        },
        [`${componentCls}-handler-wrap`]: {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineEnd: 0,
          width: token.handleWidth,
          height: "100%",
          background: handleBg,
          borderStartStartRadius: 0,
          borderStartEndRadius: borderRadius,
          borderEndEndRadius: borderRadius,
          borderEndStartRadius: 0,
          opacity: handleVisible === true ? 1 : 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          transition: `opacity ${motionDurationMid} linear ${motionDurationMid}`,
          // Fix input number inside Menu makes icon too large
          // We arise the selector priority by nest selector here
          [`${componentCls}-handler`]: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "auto",
            height: "40%",
            [`
              ${componentCls}-handler-up-inner,
              ${componentCls}-handler-down-inner
            `]: {
              marginInlineEnd: 0,
              fontSize: token.handleFontSize
            }
          }
        },
        [`${componentCls}-handler`]: {
          height: "50%",
          overflow: "hidden",
          color: colorTextDescription,
          fontWeight: "bold",
          lineHeight: 0,
          textAlign: "center",
          cursor: "pointer",
          borderInlineStart: `${lineWidth}px ${lineType} ${handleBorderColor}`,
          transition: `all ${motionDurationMid} linear`,
          "&:active": {
            background: handleActiveBg
          },
          // Hover
          "&:hover": {
            height: `60%`,
            [`
              ${componentCls}-handler-up-inner,
              ${componentCls}-handler-down-inner
            `]: {
              color: handleHoverColor
            }
          },
          "&-up-inner, &-down-inner": {
            ...resetIcon(),
            color: colorTextDescription,
            transition: `all ${motionDurationMid} linear`,
            userSelect: "none"
          }
        },
        [`${componentCls}-handler-up`]: {
          borderStartEndRadius: borderRadius
        },
        [`${componentCls}-handler-down`]: {
          borderBlockStart: `${lineWidth}px ${lineType} ${handleBorderColor}`,
          borderEndEndRadius: borderRadius
        },
        ...genRadiusStyle$1(token, "lg"),
        ...genRadiusStyle$1(token, "sm"),
        // Disabled
        "&-disabled, &-readonly": {
          [`${componentCls}-handler-wrap`]: {
            display: "none"
          },
          [`${componentCls}-input`]: {
            color: "inherit"
          }
        },
        [`
          ${componentCls}-handler-up-disabled,
          ${componentCls}-handler-down-disabled
        `]: {
          cursor: "not-allowed"
        },
        [`
          ${componentCls}-handler-up-disabled:hover &-handler-up-inner,
          ${componentCls}-handler-down-disabled:hover &-handler-down-inner
        `]: {
          color: colorTextDisabled
        }
      }
    },
    // Border-less
    {
      [`${componentCls}-borderless`]: {
        borderColor: "transparent",
        boxShadow: "none",
        [`${componentCls}-handler-down`]: {
          borderBlockStartWidth: 0
        }
      }
    }
  ];
};
const genAffixWrapperStyles = (token) => {
  const {
    componentCls,
    paddingBlock,
    paddingInline,
    inputAffixPadding,
    controlWidth,
    borderRadiusLG,
    borderRadiusSM
  } = token;
  return {
    [`${componentCls}-affix-wrapper`]: {
      ...genBasicInputStyle(token),
      ...genStatusStyle(token, `${componentCls}-affix-wrapper`),
      // or number handler will cover form status
      position: "relative",
      display: "inline-flex",
      width: controlWidth,
      padding: 0,
      paddingInlineStart: paddingInline,
      "&-lg": {
        borderRadius: borderRadiusLG
      },
      "&-sm": {
        borderRadius: borderRadiusSM
      },
      [`&:not(${componentCls}-affix-wrapper-disabled):hover`]: {
        ...genHoverStyle(token),
        zIndex: 1
      },
      "&-focused, &:focus": {
        zIndex: 1
      },
      [`&-disabled > ${componentCls}-disabled`]: {
        background: "transparent"
      },
      [`> div${componentCls}`]: {
        width: "100%",
        border: "none",
        outline: "none",
        [`&${componentCls}-focused`]: {
          boxShadow: "none !important"
        }
      },
      [`input${componentCls}-input`]: {
        padding: `${paddingBlock}px 0`
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [`${componentCls}-handler-wrap`]: {
        zIndex: 2
      },
      [componentCls]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          pointerEvents: "none"
        },
        "&-prefix": {
          marginInlineEnd: inputAffixPadding
        },
        "&-suffix": {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineEnd: 0,
          zIndex: 1,
          height: "100%",
          marginInlineEnd: paddingInline,
          marginInlineStart: inputAffixPadding
        }
      }
    }
  };
};
const useStyle$g = genComponentStyleHook(
  "InputNumber",
  (token) => {
    const inputNumberToken = merge(token, initInputToken(token));
    return [
      genInputNumberStyles(inputNumberToken),
      genAffixWrapperStyles(inputNumberToken),
      // =====================================================
      // ==             Space Compact                       ==
      // =====================================================
      genCompactItemStyle(inputNumberToken)
    ];
  },
  (token) => ({
    ...initComponentToken$1(token),
    controlWidth: 90,
    handleWidth: token.controlHeightSM - token.lineWidth * 2,
    handleFontSize: token.fontSize / 2,
    handleVisible: "auto",
    handleActiveBg: token.colorFillAlter,
    handleBg: token.colorBgContainer,
    handleHoverColor: token.colorPrimary,
    handleBorderColor: token.colorBorder
  })
);

const InputNumber = React.forwardRef((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const inputRef = React.useRef(null);
  React.useImperativeHandle(ref, () => inputRef.current);
  const {
    className,
    rootClassName,
    size: customizeSize,
    disabled: customDisabled,
    prefixCls: customizePrefixCls,
    addonBefore,
    addonAfter,
    prefix,
    bordered = true,
    readOnly,
    status: customStatus,
    controls,
    ...others
  } = props;
  const prefixCls = getPrefixCls("input-number", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$g(prefixCls);
  const { compactSize, compactItemClassnames } = useCompactItemContext(prefixCls);
  let upIcon = /* @__PURE__ */ jsx(ExpandLessIcon, { className: `${prefixCls}-handler-up-inner` });
  let downIcon = /* @__PURE__ */ jsx(ExpandMoreIcon, { className: `${prefixCls}-handler-down-inner` });
  const controlsTemp = typeof controls === "boolean" ? controls : void 0;
  if (typeof controls === "object") {
    upIcon = typeof controls.upIcon === "undefined" ? upIcon : /* @__PURE__ */ jsx("span", { className: `${prefixCls}-handler-up-inner`, children: controls.upIcon });
    downIcon = typeof controls.downIcon === "undefined" ? downIcon : /* @__PURE__ */ jsx("span", { className: `${prefixCls}-handler-down-inner`, children: controls.downIcon });
  }
  const {
    hasFeedback,
    status: contextStatus,
    isFormItemInput,
    feedbackIcon
  } = React.useContext(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  const mergedSize = useSize((ctx) => customizeSize ?? compactSize ?? ctx);
  const disabled = React.useContext(DisabledContext);
  const mergedDisabled = customDisabled ?? disabled;
  const inputNumberClass = classNames(
    {
      [`${prefixCls}-lg`]: mergedSize === "large",
      [`${prefixCls}-sm`]: mergedSize === "small",
      [`${prefixCls}-borderless`]: !bordered,
      [`${prefixCls}-in-form-item`]: isFormItemInput
    },
    getStatusClassNames(prefixCls, mergedStatus),
    compactItemClassnames,
    hashId
  );
  const element = /* @__PURE__ */ jsx(
    RcInputNumber,
    {
      ref: inputRef,
      disabled: mergedDisabled,
      className: classNames(className, rootClassName),
      upHandler: upIcon,
      downHandler: downIcon,
      prefixCls,
      readOnly,
      controls: controlsTemp,
      prefix,
      suffix: hasFeedback && feedbackIcon,
      addonAfter: addonAfter && /* @__PURE__ */ jsx(NoCompactStyle, { children: /* @__PURE__ */ jsx(NoFormStyle, { override: true, status: true, children: addonAfter }) }),
      addonBefore: addonBefore && /* @__PURE__ */ jsx(NoCompactStyle, { children: /* @__PURE__ */ jsx(NoFormStyle, { override: true, status: true, children: addonBefore }) }),
      classNames: {
        input: inputNumberClass
      },
      classes: {
        affixWrapper: classNames(
          getStatusClassNames(`${prefixCls}-affix-wrapper`, mergedStatus, hasFeedback),
          {
            [`${prefixCls}-affix-wrapper-sm`]: mergedSize === "small",
            [`${prefixCls}-affix-wrapper-lg`]: mergedSize === "large",
            [`${prefixCls}-affix-wrapper-borderless`]: !bordered
          },
          hashId
        ),
        wrapper: classNames(
          {
            [`${prefixCls}-wrapper-disabled`]: mergedDisabled
          },
          hashId
        ),
        group: classNames(
          {
            [`${prefixCls}-group-wrapper-sm`]: mergedSize === "small",
            [`${prefixCls}-group-wrapper-lg`]: mergedSize === "large"
          },
          getStatusClassNames(`${prefixCls}-group-wrapper`, mergedStatus, hasFeedback),
          hashId
        )
      },
      ...others
    }
  );
  return wrapSSR(element);
});
const TypedInputNumber = InputNumber;
const PureInputNumber = (props) => /* @__PURE__ */ jsx(ConfigProvider, { theme: { components: { InputNumber: { handleVisible: true } } }, children: /* @__PURE__ */ jsx(InputNumber, { ...props }) });
TypedInputNumber._InternalPanelDoNotUseOrYouWillBeFired = PureInputNumber;

const genLayoutLightStyle = (token) => {
  const { componentCls, bodyBg, lightSiderBg, lightTriggerBg, lightTriggerColor } = token;
  return {
    [`${componentCls}-sider-light`]: {
      background: lightSiderBg,
      [`${componentCls}-sider-trigger`]: {
        color: lightTriggerColor,
        background: lightTriggerBg
      },
      [`${componentCls}-sider-zero-width-trigger`]: {
        color: lightTriggerColor,
        background: lightTriggerBg,
        border: `1px solid ${bodyBg}`,
        // Safe to modify to any other color
        borderInlineStart: 0
      }
    }
  };
};

const genLayoutStyle = (token) => {
  const {
    ipassCls,
    // .ipass
    componentCls,
    // .ipass-layout
    colorText,
    triggerColor,
    footerBg,
    triggerBg,
    headerHeight,
    headerPadding,
    headerColor,
    footerPadding,
    triggerHeight,
    zeroTriggerHeight,
    zeroTriggerWidth,
    motionDurationMid,
    motionDurationSlow,
    fontSize,
    borderRadius,
    bodyBg,
    headerBg,
    siderBg
  } = token;
  return {
    [componentCls]: {
      display: "flex",
      flex: "auto",
      flexDirection: "column",
      /* fix firefox can't set height smaller than content on flex item */
      minHeight: 0,
      background: bodyBg,
      "&, *": {
        boxSizing: "border-box"
      },
      [`&${componentCls}-has-sider`]: {
        flexDirection: "row",
        [`> ${componentCls}, > ${componentCls}-content`]: {
          // https://segmentfault.com/a/1190000019498300
          width: 0
        }
      },
      [`${componentCls}-header, &${componentCls}-footer`]: {
        flex: "0 0 auto"
      },
      [`${componentCls}-sider`]: {
        position: "relative",
        // fix firefox can't set width smaller than content on flex item
        minWidth: 0,
        background: siderBg,
        transition: `all ${motionDurationMid}, background 0s`,
        "&-children": {
          height: "100%",
          // Hack for fixing margin collapse bug          // solution from https://stackoverflow.com/a/33132624/3040605
          marginTop: -0.1,
          paddingTop: 0.1,
          [`${ipassCls}-menu${ipassCls}-menu-inline-collapsed`]: {
            width: "auto"
          }
        },
        "&-has-trigger": {
          paddingBottom: triggerHeight
        },
        "&-right": {
          order: 1
        },
        "&-trigger": {
          position: "fixed",
          bottom: 0,
          zIndex: 1,
          height: triggerHeight,
          color: triggerColor,
          lineHeight: `${triggerHeight}px`,
          textAlign: "center",
          background: triggerBg,
          cursor: "pointer",
          transition: `all ${motionDurationMid}`
        },
        "&-zero-width": {
          "> *": {
            overflow: "hidden"
          },
          "&-trigger": {
            position: "absolute",
            top: headerHeight,
            insetInlineEnd: -zeroTriggerWidth,
            zIndex: 1,
            width: zeroTriggerWidth,
            height: zeroTriggerHeight,
            color: triggerColor,
            fontSize: token.fontSizeXL,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: siderBg,
            borderStartStartRadius: 0,
            borderStartEndRadius: borderRadius,
            borderEndEndRadius: borderRadius,
            borderEndStartRadius: 0,
            cursor: "pointer",
            transition: `background ${motionDurationSlow} ease`,
            "&::after": {
              position: "absolute",
              inset: 0,
              background: "transparent",
              transition: `all ${motionDurationSlow}`,
              content: '""'
            },
            "&:hover::after": {
              background: `rgba(255, 255, 255, 0.2)`
            },
            "&-right": {
              insetInlineStart: -zeroTriggerWidth,
              borderStartStartRadius: borderRadius,
              borderStartEndRadius: 0,
              borderEndEndRadius: 0,
              borderEndStartRadius: borderRadius
            }
          }
        }
      },
      // Light
      ...genLayoutLightStyle(token)
    },
    // ==================== Header ====================
    [`${componentCls}-header`]: {
      height: headerHeight,
      padding: headerPadding,
      color: headerColor,
      lineHeight: `${headerHeight}px`,
      background: headerBg,
      // Other components/menu/style/index.less line:686
      // Integration with header element so menu items have the same height
      [`${ipassCls}-menu`]: {
        lineHeight: "inherit"
      }
    },
    // ==================== Footer ====================
    [`${componentCls}-footer`]: {
      padding: footerPadding,
      color: colorText,
      fontSize,
      background: footerBg
    },
    // =================== Content ====================
    [`${componentCls}-content`]: {
      flex: "auto",
      // fix firefox can't set height smaller than content on flex item
      minHeight: 0
    }
  };
};
const useStyle$f = genComponentStyleHook(
  "Layout",
  (token) => [genLayoutStyle(token)],
  (token) => {
    const {
      colorBgLayout,
      controlHeight,
      controlHeightLG,
      colorText,
      controlHeightSM,
      marginXXS,
      colorTextLightSolid,
      colorBgContainer
    } = token;
    const paddingInline = controlHeightLG * 1.25;
    return {
      // Deprecated
      colorBgHeader: "#001529",
      colorBgBody: colorBgLayout,
      colorBgTrigger: "#002140",
      bodyBg: colorBgLayout,
      headerBg: "#001529",
      headerHeight: controlHeight * 2,
      headerPadding: `0 ${paddingInline}px`,
      headerColor: colorText,
      footerPadding: `${controlHeightSM}px ${paddingInline}px`,
      footerBg: colorBgLayout,
      siderBg: "#001529",
      triggerHeight: controlHeightLG + marginXXS * 2,
      triggerBg: "#002140",
      triggerColor: colorTextLightSolid,
      zeroTriggerWidth: controlHeightLG,
      zeroTriggerHeight: controlHeightLG,
      lightSiderBg: colorBgContainer,
      lightTriggerBg: colorBgContainer,
      lightTriggerColor: colorText
    };
  },
  {
    deprecatedTokens: [
      ["colorBgBody", "bodyBg"],
      ["colorBgHeader", "headerBg"],
      ["colorBgTrigger", "triggerBg"]
    ]
  }
);

const LayoutContext = React.createContext({
  siderHook: {
    addSider: () => null,
    removeSider: () => null
  }
});
function generator({ suffixCls, tagName, displayName }) {
  return (BasicComponent) => {
    const Adapter = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(BasicComponent, { ref, suffixCls, tagName, ...props }));
    return Adapter;
  };
}
const Basic = React.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    suffixCls,
    className,
    tagName: TagName,
    ...others
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("layout", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$f(prefixCls);
  const prefixWithSuffixCls = suffixCls ? `${prefixCls}-${suffixCls}` : prefixCls;
  return wrapSSR(
    /* @__PURE__ */ jsx(
      TagName,
      {
        className: classNames(customizePrefixCls || prefixWithSuffixCls, className, hashId),
        ref,
        ...others
      }
    )
  );
});
const BasicLayout = React.forwardRef((props, ref) => {
  const [siders, setSiders] = React.useState([]);
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    children,
    hasSider,
    tagName: Tag,
    style,
    ...others
  } = props;
  const passedProps = omit(others, ["suffixCls"]);
  const { getPrefixCls, layout } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("layout", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$f(prefixCls);
  const classString = classNames(
    prefixCls,
    {
      [`${prefixCls}-has-sider`]: typeof hasSider === "boolean" ? hasSider : siders.length > 0
    },
    layout?.className,
    className,
    rootClassName,
    hashId
  );
  const contextValue = React.useMemo(
    () => ({
      siderHook: {
        addSider: (id) => {
          setSiders((prev) => [...prev, id]);
        },
        removeSider: (id) => {
          setSiders((prev) => prev.filter((currentId) => currentId !== id));
        }
      }
    }),
    []
  );
  return wrapSSR(
    /* @__PURE__ */ jsx(LayoutContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(
      Tag,
      {
        ref,
        className: classString,
        style: { ...layout?.style, ...style },
        ...passedProps,
        children
      }
    ) })
  );
});
const Layout$1 = generator({
  tagName: "div",
  displayName: "Layout"
})(BasicLayout);
const Header = generator({
  suffixCls: "header",
  tagName: "header",
  displayName: "Header"
})(Basic);
const Footer$1 = generator({
  suffixCls: "footer",
  tagName: "footer",
  displayName: "Footer"
})(Basic);
const Content = generator({
  suffixCls: "content",
  tagName: "main",
  displayName: "Content"
})(Basic);

const isNumeric = (value) => !isNaN(parseFloat(value)) && isFinite(value);

const dimensionMaxMap = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px"
};
const SiderContext = React.createContext({});
const generateId = /* @__PURE__ */ (() => {
  let i = 0;
  return (prefix = "") => {
    i += 1;
    return `${prefix}${i}`;
  };
})();
const Sider = React.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    trigger,
    children,
    defaultCollapsed = false,
    theme = "dark",
    style = {},
    collapsible = false,
    reverseArrow = false,
    width = 200,
    collapsedWidth = 80,
    zeroWidthTriggerStyle,
    breakpoint,
    onCollapse,
    onBreakpoint,
    ...otherProps
  } = props;
  const { siderHook } = useContext(LayoutContext);
  const [collapsed, setCollapsed] = useState$1(
    "collapsed" in props ? props.collapsed : defaultCollapsed
  );
  const [below, setBelow] = useState$1(false);
  useEffect(() => {
    if ("collapsed" in props) {
      setCollapsed(props.collapsed);
    }
  }, [props.collapsed]);
  const handleSetCollapsed = (value, type) => {
    if (!("collapsed" in props)) {
      setCollapsed(value);
    }
    onCollapse?.(value, type);
  };
  const responsiveHandlerRef = useRef();
  responsiveHandlerRef.current = (mql) => {
    setBelow(mql.matches);
    onBreakpoint?.(mql.matches);
    if (collapsed !== mql.matches) {
      handleSetCollapsed(mql.matches, "responsive");
    }
  };
  useEffect(() => {
    function responsiveHandler(mql2) {
      return responsiveHandlerRef.current(mql2);
    }
    let mql;
    if (typeof window !== "undefined") {
      const { matchMedia } = window;
      if (matchMedia && breakpoint && breakpoint in dimensionMaxMap) {
        mql = matchMedia(`(max-width: ${dimensionMaxMap[breakpoint]})`);
        try {
          mql.addEventListener("change", responsiveHandler);
        } catch (error) {
          mql.addListener(responsiveHandler);
        }
        responsiveHandler(mql);
      }
    }
    return () => {
      try {
        mql?.removeEventListener("change", responsiveHandler);
      } catch (error) {
        mql?.removeListener(responsiveHandler);
      }
    };
  }, [breakpoint]);
  useEffect(() => {
    const uniqueId = generateId("ipass-sider-");
    siderHook.addSider(uniqueId);
    return () => siderHook.removeSider(uniqueId);
  }, []);
  const toggle = () => {
    handleSetCollapsed(!collapsed, "clickTrigger");
  };
  const { getPrefixCls } = useContext(ConfigContext);
  const renderSider = () => {
    const prefixCls = getPrefixCls("layout-sider", customizePrefixCls);
    const divProps = omit(otherProps, ["collapsed"]);
    const rawWidth = collapsed ? collapsedWidth : width;
    const siderWidth = isNumeric(rawWidth) ? `${rawWidth}px` : String(rawWidth);
    const zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? /* @__PURE__ */ jsx(
      "span",
      {
        onClick: toggle,
        className: classNames(
          `${prefixCls}-zero-width-trigger`,
          `${prefixCls}-zero-width-trigger-${reverseArrow ? "right" : "left"}`
        ),
        style: zeroWidthTriggerStyle,
        children: trigger || /* @__PURE__ */ jsx(ListIcon, {})
      }
    ) : null;
    const iconObj = {
      expanded: reverseArrow ? /* @__PURE__ */ jsx(ArrowForwardIosIcon, {}) : /* @__PURE__ */ jsx(ArrowBackIosIcon, {}),
      collapsed: reverseArrow ? /* @__PURE__ */ jsx(ArrowBackIosIcon, {}) : /* @__PURE__ */ jsx(ArrowForwardIosIcon, {})
    };
    const status = collapsed ? "collapsed" : "expanded";
    const defaultTrigger = iconObj[status];
    const triggerDom = trigger !== null ? zeroWidthTrigger || /* @__PURE__ */ jsx("div", { className: `${prefixCls}-trigger`, onClick: toggle, style: { width: siderWidth }, children: trigger || defaultTrigger }) : null;
    const divStyle = {
      ...style,
      flex: `0 0 ${siderWidth}`,
      maxWidth: siderWidth,
      // Fix width transition bug in IE11
      minWidth: siderWidth,
      width: siderWidth
    };
    const siderCls = classNames(
      prefixCls,
      `${prefixCls}-${theme}`,
      {
        [`${prefixCls}-collapsed`]: !!collapsed,
        [`${prefixCls}-has-trigger`]: collapsible && trigger !== null && !zeroWidthTrigger,
        [`${prefixCls}-below`]: !!below,
        [`${prefixCls}-zero-width`]: parseFloat(siderWidth) === 0
      },
      className
    );
    return /* @__PURE__ */ jsxs("aside", { className: siderCls, ...divProps, style: divStyle, ref, children: [
      /* @__PURE__ */ jsx("div", { className: `${prefixCls}-children`, children }),
      collapsible || below && zeroWidthTrigger ? triggerDom : null
    ] });
  };
  const contextValue = React.useMemo(() => ({ siderCollapsed: collapsed }), [collapsed]);
  return /* @__PURE__ */ jsx(SiderContext.Provider, { value: contextValue, children: renderSider() });
});

const Layout = Layout$1;
Layout.Header = Header;
Layout.Footer = Footer$1;
Layout.Content = Content;
Layout.Sider = Sider;

function extendsObject(...list) {
  const result = { ...list[0] };
  for (let i = 1; i < list.length; i++) {
    const obj = list[i];
    if (obj) {
      Object.keys(obj).forEach((key) => {
        const val = obj[key];
        if (val !== void 0) {
          result[key] = val;
        }
      });
    }
  }
  return result;
}

const MiniSelect = (props) => /* @__PURE__ */ jsx(Select, { ...props, showSearch: true, size: "small" });
const MiddleSelect = (props) => /* @__PURE__ */ jsx(Select, { ...props, showSearch: true, size: "medium" });
MiniSelect.Option = Select.Option;
MiddleSelect.Option = Select.Option;

const genPaginationDisabledStyle = (token) => {
  const { componentCls } = token;
  return {
    [`${componentCls}-disabled`]: {
      "&, &:hover": {
        cursor: "not-allowed",
        [`${componentCls}-item-link`]: {
          color: token.colorTextDisabled,
          cursor: "not-allowed"
        }
      },
      "&:focus-visible": {
        cursor: "not-allowed",
        [`${componentCls}-item-link`]: {
          color: token.colorTextDisabled,
          cursor: "not-allowed"
        }
      }
    },
    [`&${componentCls}-disabled`]: {
      cursor: "not-allowed",
      [`${componentCls}-item`]: {
        cursor: "not-allowed",
        "&:hover, &:active": {
          backgroundColor: "transparent"
        },
        a: {
          color: token.colorTextDisabled,
          backgroundColor: "transparent",
          border: "none",
          cursor: "not-allowed"
        },
        "&-active": {
          borderColor: token.colorBorder,
          backgroundColor: token.itemActiveBgDisabled,
          "&:hover, &:active": {
            backgroundColor: token.itemActiveBgDisabled
          },
          a: {
            color: token.itemActiveColorDisabled
          }
        }
      },
      [`${componentCls}-item-link`]: {
        color: token.colorTextDisabled,
        cursor: "not-allowed",
        "&:hover, &:active": {
          backgroundColor: "transparent"
        },
        [`${componentCls}-simple&`]: {
          backgroundColor: "transparent",
          "&:hover, &:active": {
            backgroundColor: "transparent"
          }
        }
      },
      [`${componentCls}-simple-pager`]: {
        color: token.colorTextDisabled
      },
      [`${componentCls}-jump-prev, ${componentCls}-jump-next`]: {
        [`${componentCls}-item-link-icon`]: {
          opacity: 0
        },
        [`${componentCls}-item-ellipsis`]: {
          opacity: 1
        }
      }
    },
    [`&${componentCls}-simple`]: {
      [`${componentCls}-prev, ${componentCls}-next`]: {
        [`&${componentCls}-disabled ${componentCls}-item-link`]: {
          "&:hover, &:active": {
            backgroundColor: "transparent"
          }
        }
      }
    }
  };
};
const genPaginationMiniStyle = (token) => {
  const { componentCls } = token;
  return {
    [`&${componentCls}-mini ${componentCls}-total-text, &${componentCls}-mini ${componentCls}-simple-pager`]: {
      height: token.itemSizeSM,
      lineHeight: `${token.itemSizeSM}px`
    },
    [`&${componentCls}-mini ${componentCls}-item`]: {
      minWidth: token.itemSizeSM,
      height: token.itemSizeSM,
      margin: 0,
      lineHeight: `${token.itemSizeSM - 2}px`
    },
    [`&${componentCls}-mini:not(${componentCls}-disabled) ${componentCls}-item:not(${componentCls}-item-active)`]: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      "&:hover": {
        backgroundColor: token.colorBgTextHover
      },
      "&:active": {
        backgroundColor: token.colorBgTextActive
      }
    },
    [`&${componentCls}-mini ${componentCls}-prev, &${componentCls}-mini ${componentCls}-next`]: {
      minWidth: token.itemSizeSM,
      height: token.itemSizeSM,
      margin: 0,
      lineHeight: `${token.itemSizeSM}px`
    },
    [`&${componentCls}-mini:not(${componentCls}-disabled)`]: {
      [`${componentCls}-prev, ${componentCls}-next`]: {
        [`&:hover ${componentCls}-item-link`]: {
          backgroundColor: token.colorBgTextHover
        },
        [`&:active ${componentCls}-item-link`]: {
          backgroundColor: token.colorBgTextActive
        },
        [`&${componentCls}-disabled:hover ${componentCls}-item-link`]: {
          backgroundColor: "transparent"
        }
      }
    },
    [`
    &${componentCls}-mini ${componentCls}-prev ${componentCls}-item-link,
    &${componentCls}-mini ${componentCls}-next ${componentCls}-item-link
    `]: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      "&::after": {
        height: token.itemSizeSM,
        lineHeight: `${token.itemSizeSM}px`
      }
    },
    [`&${componentCls}-mini ${componentCls}-jump-prev, &${componentCls}-mini ${componentCls}-jump-next`]: {
      height: token.itemSizeSM,
      marginInlineEnd: 0,
      lineHeight: `${token.itemSizeSM}px`
    },
    [`&${componentCls}-mini ${componentCls}-options`]: {
      marginInlineStart: token.paginationMiniOptionsMarginInlineStart,
      [`&-size-changer`]: {
        top: token.miniOptionsSizeChangerTop
      },
      [`&-quick-jumper`]: {
        height: token.itemSizeSM,
        lineHeight: `${token.itemSizeSM}px`,
        input: {
          ...genInputSmallStyle(token),
          width: token.paginationMiniQuickJumperInputWidth,
          height: token.controlHeightSM
        }
      }
    }
  };
};
const genPaginationSimpleStyle = (token) => {
  const { componentCls } = token;
  return {
    [`
    &${componentCls}-simple ${componentCls}-prev,
    &${componentCls}-simple ${componentCls}-next
    `]: {
      height: token.itemSizeSM,
      lineHeight: `${token.itemSizeSM}px`,
      verticalAlign: "top",
      [`${componentCls}-item-link`]: {
        height: token.itemSizeSM,
        backgroundColor: "transparent",
        border: 0,
        "&:hover": {
          backgroundColor: token.colorBgTextHover
        },
        "&:active": {
          backgroundColor: token.colorBgTextActive
        },
        "&::after": {
          height: token.itemSizeSM,
          lineHeight: `${token.itemSizeSM}px`
        }
      }
    },
    [`&${componentCls}-simple ${componentCls}-simple-pager`]: {
      display: "inline-block",
      height: token.itemSizeSM,
      marginInlineEnd: token.marginXS,
      input: {
        boxSizing: "border-box",
        height: "100%",
        marginInlineEnd: token.marginXS,
        padding: `0 ${token.paginationItemPaddingInline}px`,
        textAlign: "center",
        backgroundColor: token.itemInputBg,
        border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
        borderRadius: token.borderRadius,
        outline: "none",
        transition: `border-color ${token.motionDurationMid}`,
        color: "inherit",
        "&:hover": {
          borderColor: token.colorPrimary
        },
        "&:focus": {
          borderColor: token.colorPrimaryHover,
          boxShadow: `${token.inputOutlineOffset}px 0 ${token.controlOutlineWidth}px ${token.controlOutline}`
        },
        "&[disabled]": {
          color: token.colorTextDisabled,
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorder,
          cursor: "not-allowed"
        }
      }
    }
  };
};
const genPaginationJumpStyle = (token) => {
  const { componentCls } = token;
  return {
    [`${componentCls}-jump-prev, ${componentCls}-jump-next`]: {
      outline: 0,
      [`${componentCls}-item-container`]: {
        position: "relative",
        [`${componentCls}-item-link-icon`]: {
          color: token.colorPrimary,
          fontSize: token.fontSizeSM,
          opacity: 0,
          transition: `all ${token.motionDurationMid}`,
          "&-svg": {
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            margin: "auto"
          }
        },
        [`${componentCls}-item-ellipsis`]: {
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          display: "block",
          margin: "auto",
          color: token.colorTextDisabled,
          fontFamily: "Arial, Helvetica, sans-serif",
          letterSpacing: token.paginationEllipsisLetterSpacing,
          textAlign: "center",
          textIndent: token.paginationEllipsisTextIndent,
          opacity: 1,
          transition: `all ${token.motionDurationMid}`
        }
      },
      "&:hover": {
        [`${componentCls}-item-link-icon`]: {
          opacity: 1
        },
        [`${componentCls}-item-ellipsis`]: {
          opacity: 0
        }
      }
    },
    [`
    ${componentCls}-prev,
    ${componentCls}-jump-prev,
    ${componentCls}-jump-next
    `]: {
      marginInlineEnd: token.marginXS
    },
    [`
    ${componentCls}-prev,
    ${componentCls}-next,
    ${componentCls}-jump-prev,
    ${componentCls}-jump-next
    `]: {
      display: "inline-block",
      minWidth: token.itemSize,
      height: token.itemSize,
      color: token.colorText,
      fontFamily: token.fontFamily,
      lineHeight: `${token.itemSize}px`,
      textAlign: "center",
      verticalAlign: "middle",
      listStyle: "none",
      borderRadius: token.borderRadius,
      cursor: "pointer",
      transition: `all ${token.motionDurationMid}`
    },
    [`${componentCls}-prev, ${componentCls}-next`]: {
      fontFamily: "Arial, Helvetica, sans-serif",
      outline: 0,
      button: {
        color: token.colorText,
        cursor: "pointer",
        userSelect: "none"
      },
      [`${componentCls}-item-link`]: {
        display: "block",
        width: "100%",
        height: "100%",
        padding: 0,
        fontSize: token.fontSizeSM,
        textAlign: "center",
        backgroundColor: "transparent",
        border: `${token.lineWidth}px ${token.lineType} transparent`,
        borderRadius: token.borderRadius,
        outline: "none",
        transition: `all ${token.motionDurationMid}`
      },
      [`&:hover ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgTextHover
      },
      [`&:active ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgTextActive
      },
      [`&${componentCls}-disabled:hover`]: {
        [`${componentCls}-item-link`]: {
          backgroundColor: "transparent"
        }
      }
    },
    [`${componentCls}-slash`]: {
      marginInlineEnd: token.paginationSlashMarginInlineEnd,
      marginInlineStart: token.paginationSlashMarginInlineStart
    },
    [`${componentCls}-options`]: {
      display: "inline-block",
      marginInlineStart: token.margin,
      verticalAlign: "middle",
      "&-size-changer.-select": {
        display: "inline-block",
        width: "auto"
      },
      "&-quick-jumper": {
        display: "inline-block",
        height: token.controlHeight,
        marginInlineStart: token.marginXS,
        lineHeight: `${token.controlHeight}px`,
        verticalAlign: "top",
        input: {
          ...genBasicInputStyle(token),
          width: token.controlHeightLG * 1.25,
          height: token.controlHeight,
          boxSizing: "border-box",
          margin: 0,
          marginInlineStart: token.marginXS,
          marginInlineEnd: token.marginXS
        }
      }
    }
  };
};
const genPaginationItemStyle = (token) => {
  const { componentCls } = token;
  return {
    [`${componentCls}-item`]: {
      display: "inline-block",
      minWidth: token.itemSize,
      height: token.itemSize,
      marginInlineEnd: token.marginXS,
      fontFamily: token.fontFamily,
      lineHeight: `${token.itemSize - 2}px`,
      textAlign: "center",
      verticalAlign: "middle",
      listStyle: "none",
      backgroundColor: "transparent",
      border: `${token.lineWidth}px ${token.lineType} transparent`,
      borderRadius: token.borderRadius,
      outline: 0,
      cursor: "pointer",
      userSelect: "none",
      a: {
        display: "block",
        padding: `0 ${token.paginationItemPaddingInline}px`,
        color: token.colorText,
        "&:hover": {
          textDecoration: "none"
        }
      },
      [`&:not(${componentCls}-item-active)`]: {
        "&:hover": {
          transition: `all ${token.motionDurationMid}`,
          backgroundColor: token.colorBgTextHover
        },
        "&:active": {
          backgroundColor: token.colorBgTextActive
        }
      },
      "&-active": {
        fontWeight: token.fontWeightStrong,
        backgroundColor: token.itemActiveBg,
        borderColor: token.colorPrimary,
        a: {
          color: token.colorPrimary
        },
        "&:hover": {
          borderColor: token.colorPrimaryHover
        },
        "&:hover a": {
          color: token.colorPrimaryHover
        }
      }
    }
  };
};
const genPaginationStyle$1 = (token) => {
  const { componentCls } = token;
  return {
    [componentCls]: {
      ...resetComponent(token),
      "ul, ol": {
        margin: 0,
        padding: 0,
        listStyle: "none"
      },
      "&::after": {
        display: "block",
        clear: "both",
        height: 0,
        overflow: "hidden",
        visibility: "hidden",
        content: '""'
      },
      [`${componentCls}-total-text`]: {
        display: "inline-block",
        height: token.itemSize,
        marginInlineEnd: token.marginXS,
        lineHeight: `${token.itemSize - 2}px`,
        verticalAlign: "middle"
      },
      // item style
      ...genPaginationItemStyle(token),
      // jump btn style
      ...genPaginationJumpStyle(token),
      // simple style
      ...genPaginationSimpleStyle(token),
      // mini style
      ...genPaginationMiniStyle(token),
      // disabled style
      ...genPaginationDisabledStyle(token),
      // media query style
      [`@media only screen and (max-width: ${token.screenLG}px)`]: {
        [`${componentCls}-item`]: {
          "&-after-jump-prev, &-before-jump-next": {
            display: "none"
          }
        }
      },
      [`@media only screen and (max-width: ${token.screenSM}px)`]: {
        [`${componentCls}-options`]: {
          display: "none"
        }
      }
    }
  };
};
const genBorderedStyle$2 = (token) => {
  const { componentCls } = token;
  return {
    [`${componentCls}${componentCls}-disabled:not(${componentCls}-mini)`]: {
      "&, &:hover": {
        [`${componentCls}-item-link`]: {
          borderColor: token.colorBorder
        }
      },
      "&:focus-visible": {
        [`${componentCls}-item-link`]: {
          borderColor: token.colorBorder
        }
      },
      [`${componentCls}-item, ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgContainerDisabled,
        borderColor: token.colorBorder,
        [`&:hover:not(${componentCls}-item-active)`]: {
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorder,
          a: {
            color: token.colorTextDisabled
          }
        },
        [`&${componentCls}-item-active`]: {
          backgroundColor: token.itemActiveBgDisabled
        }
      },
      [`${componentCls}-prev, ${componentCls}-next`]: {
        "&:hover button": {
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorder,
          color: token.colorTextDisabled
        },
        [`${componentCls}-item-link`]: {
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorder
        }
      }
    },
    [`${componentCls}:not(${componentCls}-mini)`]: {
      [`${componentCls}-prev, ${componentCls}-next`]: {
        "&:hover button": {
          borderColor: token.colorPrimaryHover,
          backgroundColor: token.itemBg
        },
        [`${componentCls}-item-link`]: {
          backgroundColor: token.itemLinkBg,
          borderColor: token.colorBorder
        },
        [`&:hover ${componentCls}-item-link`]: {
          borderColor: token.colorPrimary,
          backgroundColor: token.itemBg,
          color: token.colorPrimary
        },
        [`&${componentCls}-disabled`]: {
          [`${componentCls}-item-link`]: {
            borderColor: token.colorBorder,
            color: token.colorTextDisabled
          }
        }
      },
      [`${componentCls}-item`]: {
        backgroundColor: token.itemBg,
        border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
        [`&:hover:not(${componentCls}-item-active)`]: {
          borderColor: token.colorPrimary,
          backgroundColor: token.itemBg,
          a: {
            color: token.colorPrimary
          }
        },
        "&-active": {
          borderColor: token.colorPrimary
        }
      }
    }
  };
};
const genPaginationFocusStyle = (token) => {
  const { componentCls } = token;
  return {
    [`${componentCls}:not(${componentCls}-disabled)`]: {
      [`${componentCls}-item`]: {
        ...genFocusStyle(token)
      },
      [`${componentCls}-jump-prev, ${componentCls}-jump-next`]: {
        "&:focus-visible": {
          [`${componentCls}-item-link-icon`]: {
            opacity: 1
          },
          [`${componentCls}-item-ellipsis`]: {
            opacity: 0
          },
          ...genFocusOutline(token)
        }
      },
      [`${componentCls}-prev, ${componentCls}-next`]: {
        [`&:focus-visible ${componentCls}-item-link`]: {
          ...genFocusOutline(token)
        }
      }
    }
  };
};
const useStyle$e = genComponentStyleHook(
  "Pagination",
  (token) => {
    const paginationToken = merge(
      token,
      {
        inputOutlineOffset: 0,
        paginationMiniOptionsMarginInlineStart: token.marginXXS / 2,
        paginationMiniQuickJumperInputWidth: token.controlHeightLG * 1.1,
        paginationItemPaddingInline: token.marginXXS * 1.5,
        paginationEllipsisLetterSpacing: token.marginXXS / 2,
        paginationSlashMarginInlineStart: token.marginXXS,
        paginationSlashMarginInlineEnd: token.marginSM,
        paginationEllipsisTextIndent: "0.13em"
        // magic for ui experience
      },
      initInputToken(token),
      initComponentToken$1(token)
    );
    return [
      genPaginationStyle$1(paginationToken),
      genPaginationFocusStyle(paginationToken),
      token.wireframe && genBorderedStyle$2(paginationToken)
    ];
  },
  (token) => ({
    itemBg: token.colorBgContainer,
    itemSize: token.controlHeight,
    itemSizeSM: token.controlHeightSM,
    itemActiveBg: token.colorBgContainer,
    itemLinkBg: token.colorBgContainer,
    itemActiveColorDisabled: token.colorTextDisabled,
    itemActiveBgDisabled: token.controlItemBgActiveDisabled,
    itemInputBg: token.colorBgContainer,
    miniOptionsSizeChangerTop: 0
  })
);

const Pagination = (props) => {
  const {
    prefixCls: customizePrefixCls,
    selectPrefixCls: customizeSelectPrefixCls,
    className,
    rootClassName,
    style,
    size: customizeSize,
    locale: customLocale,
    selectComponentClass,
    responsive,
    showSizeChanger,
    ...restProps
  } = props;
  const { xs } = useBreakpoint$1(responsive);
  const { getPrefixCls, pagination = {} } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("pagination", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$e(prefixCls);
  const mergedShowSizeChanger = showSizeChanger ?? pagination.showSizeChanger;
  const iconsProps = React.useMemo(() => {
    const prevIcon = /* @__PURE__ */ jsx("button", { className: `${prefixCls}-item-link`, type: "button", tabIndex: -1, children: /* @__PURE__ */ jsx(ArrowBackIosIcon, {}) });
    const nextIcon = /* @__PURE__ */ jsx("button", { className: `${prefixCls}-item-link`, type: "button", tabIndex: -1, children: /* @__PURE__ */ jsx(ArrowForwardIosIcon, {}) });
    return { prevIcon, nextIcon };
  }, [prefixCls]);
  const [contextLocale] = useLocale("Pagination", Pagination$1);
  const locale = { ...contextLocale, ...customLocale };
  const mergedSize = useSize(customizeSize);
  const isSmall = mergedSize === "small" || !!(xs && !mergedSize && responsive);
  const selectPrefixCls = getPrefixCls("select", customizeSelectPrefixCls);
  const extendedClassName = classNames(
    {
      [`${prefixCls}-mini`]: isSmall
    },
    pagination?.className,
    className,
    rootClassName,
    hashId
  );
  const mergedStyle = { ...pagination?.style, ...style };
  return wrapSSR(
    /* @__PURE__ */ jsx(
      RcPagination,
      {
        ...iconsProps,
        ...restProps,
        style: mergedStyle,
        prefixCls,
        selectPrefixCls,
        className: extendedClassName,
        selectComponentClass: selectComponentClass || (isSmall ? MiniSelect : MiddleSelect),
        locale,
        showSizeChanger: mergedShowSizeChanger
      }
    )
  );
};

const ListContext = React__default.createContext({});
ListContext.Consumer;

const Meta = ({
  prefixCls: customizePrefixCls,
  className,
  avatar,
  title,
  description,
  ...others
}) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls("list", customizePrefixCls);
  const classString = classNames(`${prefixCls}-item-meta`, className);
  const content = /* @__PURE__ */ jsxs("div", { className: `${prefixCls}-item-meta-content`, children: [
    title && /* @__PURE__ */ jsx("h4", { className: `${prefixCls}-item-meta-title`, children: title }),
    description && /* @__PURE__ */ jsx("div", { className: `${prefixCls}-item-meta-description`, children: description })
  ] });
  return /* @__PURE__ */ jsxs("div", { ...others, className: classString, children: [
    avatar && /* @__PURE__ */ jsx("div", { className: `${prefixCls}-item-meta-avatar`, children: avatar }),
    (title || description) && content
  ] });
};
const InternalItem = ({ prefixCls: customizePrefixCls, children, actions, extra, className, colStyle, ...others }, ref) => {
  const { grid, itemLayout } = useContext(ListContext);
  const { getPrefixCls } = useContext(ConfigContext);
  const isItemContainsTextNodeAndNotSingular = () => {
    let result;
    Children.forEach(children, (element) => {
      if (typeof element === "string") {
        result = true;
      }
    });
    return result && Children.count(children) > 1;
  };
  const isFlexMode = () => {
    if (itemLayout === "vertical") {
      return !!extra;
    }
    return !isItemContainsTextNodeAndNotSingular();
  };
  const prefixCls = getPrefixCls("list", customizePrefixCls);
  const actionsContent = actions && actions.length > 0 && /* @__PURE__ */ jsx("ul", { className: `${prefixCls}-item-action`, children: actions.map((action, i) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ jsxs("li", { children: [
      action,
      i !== actions.length - 1 && /* @__PURE__ */ jsx("em", { className: `${prefixCls}-item-action-split` })
    ] }, `${prefixCls}-item-action-${i}`)
  )) }, "actions");
  const Element = grid ? "div" : "li";
  const itemChildren = /* @__PURE__ */ jsx(
    Element,
    {
      ...others,
      ...!grid ? { ref } : {},
      className: classNames(
        `${prefixCls}-item`,
        {
          [`${prefixCls}-item-no-flex`]: !isFlexMode()
        },
        className
      ),
      children: itemLayout === "vertical" && extra ? [
        /* @__PURE__ */ jsxs("div", { className: `${prefixCls}-item-main`, children: [
          children,
          actionsContent
        ] }, "content"),
        /* @__PURE__ */ jsx("div", { className: `${prefixCls}-item-extra`, children: extra }, "extra")
      ] : [children, actionsContent, cloneElement(extra, { key: "extra" })]
    }
  );
  return grid ? /* @__PURE__ */ jsx(Col, { ref, flex: 1, style: colStyle, children: itemChildren }) : itemChildren;
};
const Item$1 = forwardRef(InternalItem);
Item$1.Meta = Meta;

const genBorderedStyle$1 = (token) => {
  const {
    listBorderedCls,
    componentCls,
    paddingLG,
    margin,
    itemPaddingSM,
    itemPaddingLG,
    marginLG,
    borderRadiusLG
  } = token;
  return {
    [`${listBorderedCls}`]: {
      border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
      borderRadius: borderRadiusLG,
      [`${componentCls}-header,${componentCls}-footer,${componentCls}-item`]: {
        paddingInline: paddingLG
      },
      [`${componentCls}-pagination`]: {
        margin: `${margin}px ${marginLG}px`
      }
    },
    [`${listBorderedCls}${componentCls}-sm`]: {
      [`${componentCls}-item,${componentCls}-header,${componentCls}-footer`]: {
        padding: itemPaddingSM
      }
    },
    [`${listBorderedCls}${componentCls}-lg`]: {
      [`${componentCls}-item,${componentCls}-header,${componentCls}-footer`]: {
        padding: itemPaddingLG
      }
    }
  };
};
const genResponsiveStyle = (token) => {
  const { componentCls, screenSM, screenMD, marginLG, marginSM, margin } = token;
  return {
    [`@media screen and (max-width:${screenMD})`]: {
      [`${componentCls}`]: {
        [`${componentCls}-item`]: {
          [`${componentCls}-item-action`]: {
            marginInlineStart: marginLG
          }
        }
      },
      [`${componentCls}-vertical`]: {
        [`${componentCls}-item`]: {
          [`${componentCls}-item-extra`]: {
            marginInlineStart: marginLG
          }
        }
      }
    },
    [`@media screen and (max-width: ${screenSM})`]: {
      [`${componentCls}`]: {
        [`${componentCls}-item`]: {
          flexWrap: "wrap",
          [`${componentCls}-action`]: {
            marginInlineStart: marginSM
          }
        }
      },
      [`${componentCls}-vertical`]: {
        [`${componentCls}-item`]: {
          flexWrap: "wrap-reverse",
          [`${componentCls}-item-main`]: {
            minWidth: token.contentWidth
          },
          [`${componentCls}-item-extra`]: {
            margin: `auto auto ${margin}px`
          }
        }
      }
    }
  };
};
const genBaseStyle$4 = (token) => {
  const {
    componentCls,
    ipassCls,
    controlHeight,
    minHeight,
    paddingSM,
    marginLG,
    padding,
    itemPadding,
    colorPrimary,
    itemPaddingSM,
    itemPaddingLG,
    paddingXS,
    margin,
    colorText,
    colorTextDescription,
    motionDurationSlow,
    lineWidth,
    headerBg,
    footerBg,
    emptyTextPadding,
    metaMarginBottom,
    avatarMarginRight,
    titleMarginBottom,
    descriptionFontSize
  } = token;
  const alignCls = {};
  ["start", "center", "end"].forEach((item) => {
    alignCls[`&-align-${item}`] = {
      textAlign: item
    };
  });
  return {
    [`${componentCls}`]: {
      ...resetComponent(token),
      position: "relative",
      "*": {
        outline: "none"
      },
      [`${componentCls}-header`]: {
        background: headerBg
      },
      [`${componentCls}-footer`]: {
        background: footerBg
      },
      [`${componentCls}-header, ${componentCls}-footer`]: {
        paddingBlock: paddingSM
      },
      [`${componentCls}-pagination`]: {
        marginBlockStart: marginLG,
        ...alignCls,
        [`${ipassCls}-pagination-options`]: {
          textAlign: "start"
        }
      },
      [`${componentCls}-spin`]: {
        minHeight,
        textAlign: "center"
      },
      [`${componentCls}-items`]: {
        margin: 0,
        padding: 0,
        listStyle: "none"
      },
      [`${componentCls}-item`]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: itemPadding,
        color: colorText,
        [`${componentCls}-item-meta`]: {
          display: "flex",
          flex: 1,
          alignItems: "flex-start",
          maxWidth: "100%",
          [`${componentCls}-item-meta-avatar`]: {
            marginInlineEnd: avatarMarginRight
          },
          [`${componentCls}-item-meta-content`]: {
            flex: "1 0",
            width: 0,
            color: colorText
          },
          [`${componentCls}-item-meta-title`]: {
            margin: `0 0 ${token.marginXXS}px 0`,
            color: colorText,
            fontSize: token.fontSize,
            lineHeight: token.lineHeight,
            "> a": {
              color: colorText,
              transition: `all ${motionDurationSlow}`,
              [`&:hover`]: {
                color: colorPrimary
              }
            }
          },
          [`${componentCls}-item-meta-description`]: {
            color: colorTextDescription,
            fontSize: descriptionFontSize,
            lineHeight: token.lineHeight
          }
        },
        [`${componentCls}-item-action`]: {
          flex: "0 0 auto",
          marginInlineStart: token.marginXXL,
          padding: 0,
          fontSize: 0,
          listStyle: "none",
          [`& > li`]: {
            position: "relative",
            display: "inline-block",
            padding: `0 ${paddingXS}px`,
            color: colorTextDescription,
            fontSize: token.fontSize,
            lineHeight: token.lineHeight,
            textAlign: "center",
            [`&:first-child`]: {
              paddingInlineStart: 0
            }
          },
          [`${componentCls}-item-action-split`]: {
            position: "absolute",
            insetBlockStart: "50%",
            insetInlineEnd: 0,
            width: lineWidth,
            height: Math.ceil(token.fontSize * token.lineHeight) - token.marginXXS * 2,
            transform: "translateY(-50%)",
            backgroundColor: token.colorSplit
          }
        }
      },
      [`${componentCls}-empty`]: {
        padding: `${padding}px 0`,
        color: colorTextDescription,
        fontSize: token.fontSizeSM,
        textAlign: "center"
      },
      [`${componentCls}-empty-text`]: {
        padding: emptyTextPadding,
        color: token.colorTextDisabled,
        fontSize: token.fontSize,
        textAlign: "center"
      },
      // ============================ without flex ============================
      [`${componentCls}-item-no-flex`]: {
        display: "block"
      }
    },
    [`${componentCls}-grid ${ipassCls}-col > ${componentCls}-item`]: {
      display: "block",
      maxWidth: "100%",
      marginBlockEnd: margin,
      paddingBlock: 0,
      borderBlockEnd: "none"
    },
    [`${componentCls}-vertical ${componentCls}-item`]: {
      alignItems: "initial",
      [`${componentCls}-item-main`]: {
        display: "block",
        flex: 1
      },
      [`${componentCls}-item-extra`]: {
        marginInlineStart: marginLG
      },
      [`${componentCls}-item-meta`]: {
        marginBlockEnd: metaMarginBottom,
        [`${componentCls}-item-meta-title`]: {
          marginBlockStart: 0,
          marginBlockEnd: titleMarginBottom,
          color: colorText,
          fontSize: token.fontSizeLG,
          lineHeight: token.lineHeightLG
        }
      },
      [`${componentCls}-item-action`]: {
        marginBlockStart: padding,
        marginInlineStart: "auto",
        "> li": {
          padding: `0 ${padding}px`,
          [`&:first-child`]: {
            paddingInlineStart: 0
          }
        }
      }
    },
    [`${componentCls}-split ${componentCls}-item`]: {
      borderBlockEnd: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`,
      [`&:last-child`]: {
        borderBlockEnd: "none"
      }
    },
    [`${componentCls}-split ${componentCls}-header`]: {
      borderBlockEnd: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`
    },
    [`${componentCls}-split${componentCls}-empty ${componentCls}-footer`]: {
      borderTop: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`
    },
    [`${componentCls}-loading ${componentCls}-spin-nested-loading`]: {
      minHeight: controlHeight
    },
    [`${componentCls}-split${componentCls}-something-after-last-item ${ipassCls}-spin-container > ${componentCls}-items > ${componentCls}-item:last-child`]: {
      borderBlockEnd: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`
    },
    [`${componentCls}-lg ${componentCls}-item`]: {
      padding: itemPaddingLG
    },
    [`${componentCls}-sm ${componentCls}-item`]: {
      padding: itemPaddingSM
    },
    // Horizontal
    [`${componentCls}:not(${componentCls}-vertical)`]: {
      [`${componentCls}-item-no-flex`]: {
        [`${componentCls}-item-action`]: {
          float: "right"
        }
      }
    }
  };
};
const useStyle$d = genComponentStyleHook(
  "List",
  (token) => {
    const listToken = merge(token, {
      listBorderedCls: `${token.componentCls}-bordered`,
      minHeight: token.controlHeightLG
    });
    return [genBaseStyle$4(listToken), genBorderedStyle$1(listToken), genResponsiveStyle(listToken)];
  },
  (token) => ({
    contentWidth: 220,
    itemPadding: `${token.paddingContentVertical}px 0`,
    itemPaddingSM: `${token.paddingContentVerticalSM}px ${token.paddingContentHorizontal}px`,
    itemPaddingLG: `${token.paddingContentVerticalLG}px ${token.paddingContentHorizontalLG}px`,
    headerBg: "transparent",
    footerBg: "transparent",
    emptyTextPadding: token.padding,
    metaMarginBottom: token.padding,
    avatarMarginRight: token.padding,
    titleMarginBottom: token.paddingSM,
    descriptionFontSize: token.fontSize
  })
);

function List({
  pagination = false,
  prefixCls: customizePrefixCls,
  bordered = false,
  split = true,
  className,
  rootClassName,
  style,
  children,
  itemLayout,
  loadMore,
  grid,
  dataSource = [],
  size: customizeSize,
  header,
  footer,
  loading = false,
  rowKey,
  renderItem,
  locale,
  ...rest
}) {
  const paginationObj = pagination && typeof pagination === "object" ? pagination : {};
  const [paginationCurrent, setPaginationCurrent] = React.useState(
    paginationObj.defaultCurrent || 1
  );
  const [paginationSize, setPaginationSize] = React.useState(paginationObj.defaultPageSize || 10);
  const { getPrefixCls, renderEmpty, list } = React.useContext(ConfigContext);
  const defaultPaginationProps = {
    current: 1,
    total: 0
  };
  const triggerPaginationEvent = (eventName) => (page, pageSize) => {
    setPaginationCurrent(page);
    setPaginationSize(pageSize);
    if (pagination && pagination[eventName]) {
      pagination?.[eventName]?.(page, pageSize);
    }
  };
  const onPaginationChange = triggerPaginationEvent("onChange");
  const onPaginationShowSizeChange = triggerPaginationEvent("onShowSizeChange");
  const renderInnerItem = (item, index) => {
    if (!renderItem)
      return null;
    let key;
    if (typeof rowKey === "function") {
      key = rowKey(item);
    } else if (rowKey) {
      key = item[rowKey];
    } else {
      key = item.key;
    }
    if (!key) {
      key = `list-item-${index}`;
    }
    return /* @__PURE__ */ jsx(React.Fragment, { children: renderItem(item, index) }, key);
  };
  const isSomethingAfterLastItem = () => !!(loadMore || pagination || footer);
  const prefixCls = getPrefixCls("list", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$d(prefixCls);
  const isLoading = loading ?? false;
  const mergedSize = useSize(customizeSize);
  let sizeCls = "";
  switch (mergedSize) {
    case "large":
      sizeCls = "lg";
      break;
    case "small":
      sizeCls = "sm";
      break;
  }
  const classString = classNames(
    prefixCls,
    {
      [`${prefixCls}-vertical`]: itemLayout === "vertical",
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-split`]: split,
      [`${prefixCls}-bordered`]: bordered,
      [`${prefixCls}-loading`]: isLoading,
      [`${prefixCls}-grid`]: !!grid,
      [`${prefixCls}-something-after-last-item`]: isSomethingAfterLastItem()
    },
    list?.className,
    className,
    rootClassName,
    hashId
  );
  const paginationProps = extendsObject(
    defaultPaginationProps,
    {
      total: dataSource.length,
      current: paginationCurrent,
      pageSize: paginationSize
    },
    pagination || {}
  );
  const largestPage = Math.ceil(paginationProps.total / paginationProps.pageSize);
  if (paginationProps.current > largestPage) {
    paginationProps.current = largestPage;
  }
  const paginationContent = pagination ? /* @__PURE__ */ jsx(
    "div",
    {
      className: classNames(
        `${prefixCls}-pagination`,
        `${prefixCls}-pagination-align-${paginationProps?.align ?? "end"}`
      ),
      children: /* @__PURE__ */ jsx(
        Pagination,
        {
          ...paginationProps,
          onChange: onPaginationChange,
          onShowSizeChange: onPaginationShowSizeChange
        }
      )
    }
  ) : null;
  let splitDataSource = [...dataSource];
  if (pagination) {
    if (dataSource.length > (paginationProps.current - 1) * paginationProps.pageSize) {
      splitDataSource = [...dataSource].splice(
        (paginationProps.current - 1) * paginationProps.pageSize,
        paginationProps.pageSize
      );
    }
  }
  const needResponsive = Object.keys(grid || {}).some(
    (key) => ["xs", "sm", "md", "lg", "xl", "xxl"].includes(key)
  );
  const screens = useBreakpoint$1(needResponsive);
  const currentBreakpoint = React.useMemo(() => {
    for (let i = 0; i < responsiveArray.length; i += 1) {
      const breakpoint = responsiveArray[i];
      if (screens[breakpoint]) {
        return breakpoint;
      }
    }
    return void 0;
  }, [screens]);
  const colStyle = React.useMemo(() => {
    if (!grid) {
      return void 0;
    }
    const columnCount = currentBreakpoint && grid[currentBreakpoint] ? grid[currentBreakpoint] : grid.column;
    if (columnCount) {
      return {
        width: `${100 / columnCount}%`,
        maxWidth: `${100 / columnCount}%`
      };
    }
  }, [grid?.column, currentBreakpoint]);
  let childrenContent = isLoading && /* @__PURE__ */ jsx("div", { style: { minHeight: 53 } });
  if (splitDataSource.length > 0) {
    const items = splitDataSource.map((item, index) => renderInnerItem(item, index));
    childrenContent = grid ? /* @__PURE__ */ jsx(Row$1, { gutter: grid.gutter, children: React.Children.map(items, (child) => /* @__PURE__ */ jsx("div", { style: colStyle, children: child }, child?.key)) }) : /* @__PURE__ */ jsx("ul", { className: `${prefixCls}-items`, children: items });
  } else if (!children && !isLoading) {
    childrenContent = /* @__PURE__ */ jsx("div", { className: `${prefixCls}-empty-text`, children: locale && locale.emptyText || renderEmpty?.("List") || /* @__PURE__ */ jsx(DefaultRenderEmpty, { componentName: "List" }) });
  }
  const paginationPosition = paginationProps.position || "bottom";
  const contextValue = React.useMemo(
    () => ({ grid, itemLayout }),
    [JSON.stringify(grid), itemLayout]
  );
  return wrapSSR(
    /* @__PURE__ */ jsx(ListContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxs("div", { style: { ...list?.style, ...style }, className: classString, ...rest, children: [
      (paginationPosition === "top" || paginationPosition === "both") && paginationContent,
      header && /* @__PURE__ */ jsx("div", { className: `${prefixCls}-header`, children: header }),
      isLoading ? /* @__PURE__ */ jsx(CircularProgress, {}) : [
        childrenContent,
        children
      ],
      footer && /* @__PURE__ */ jsx("div", { className: `${prefixCls}-footer`, children: footer }),
      loadMore || (paginationPosition === "bottom" || paginationPosition === "both") && paginationContent
    ] }) })
  );
}
List.Item = Item$1;

const MenuDivider = (props) => {
  const { prefixCls: customizePrefixCls, className, dashed, ...restProps } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("menu", customizePrefixCls);
  const classString = classNames(
    {
      [`${prefixCls}-item-divider-dashed`]: !!dashed
    },
    className
  );
  return /* @__PURE__ */ jsx(Divider, { className: classString, ...restProps });
};

const MAX_VERTICAL_CONTENT_RADIUS = 8;
function getArrowOffset(options) {
  const maxVerticalContentRadius = MAX_VERTICAL_CONTENT_RADIUS;
  const { contentRadius, limitVerticalRadius } = options;
  const dropdownArrowOffset = contentRadius > 12 ? contentRadius + 2 : 12;
  const dropdownArrowOffsetVertical = limitVerticalRadius ? maxVerticalContentRadius : dropdownArrowOffset;
  return { dropdownArrowOffset, dropdownArrowOffsetVertical };
}
function isInject(valid, code) {
  if (!valid)
    return {};
  return code;
}
function getArrowStyle(token, options) {
  const { componentCls, sizePopupArrow, borderRadiusXS, borderRadiusOuter, boxShadowPopoverArrow } = token;
  const {
    colorBg,
    contentRadius = token.borderRadiusLG,
    limitVerticalRadius,
    arrowDistance = 0,
    arrowPlacement = {
      left: true,
      right: true,
      top: true,
      bottom: true
    }
  } = options;
  const { dropdownArrowOffsetVertical, dropdownArrowOffset } = getArrowOffset({
    contentRadius,
    limitVerticalRadius
  });
  return {
    [componentCls]: {
      // ============================ Basic ============================
      [`${componentCls}-arrow`]: [
        {
          position: "absolute",
          zIndex: 1,
          // lift it up so the menu wouldn't cask shadow on it
          display: "block",
          ...roundedArrow(
            sizePopupArrow,
            borderRadiusXS,
            borderRadiusOuter,
            colorBg,
            boxShadowPopoverArrow
          ),
          "&:before": {
            background: colorBg
          }
        }
      ],
      // ========================== Placement ==========================
      // Here handle the arrow position and rotate stuff
      // >>>>> Top
      ...isInject(!!arrowPlacement.top, {
        [[
          `&-placement-top ${componentCls}-arrow`,
          `&-placement-topLeft ${componentCls}-arrow`,
          `&-placement-topRight ${componentCls}-arrow`
        ].join(",")]: {
          bottom: arrowDistance,
          transform: "translateY(100%) rotate(180deg)"
        },
        [`&-placement-top ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: "50%"
          },
          transform: "translateX(-50%) translateY(100%) rotate(180deg)"
        },
        [`&-placement-topLeft ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: dropdownArrowOffset
          }
        },
        [`&-placement-topRight ${componentCls}-arrow`]: {
          right: {
            _skip_check_: true,
            value: dropdownArrowOffset
          }
        }
      }),
      // >>>>> Bottom
      ...isInject(!!arrowPlacement.bottom, {
        [[
          `&-placement-bottom ${componentCls}-arrow`,
          `&-placement-bottomLeft ${componentCls}-arrow`,
          `&-placement-bottomRight ${componentCls}-arrow`
        ].join(",")]: {
          top: arrowDistance,
          transform: `translateY(-100%)`
        },
        [`&-placement-bottom ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: "50%"
          },
          transform: `translateX(-50%) translateY(-100%)`
        },
        [`&-placement-bottomLeft ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: dropdownArrowOffset
          }
        },
        [`&-placement-bottomRight ${componentCls}-arrow`]: {
          right: {
            _skip_check_: true,
            value: dropdownArrowOffset
          }
        }
      }),
      // >>>>> Left
      ...isInject(!!arrowPlacement.left, {
        [[
          `&-placement-left ${componentCls}-arrow`,
          `&-placement-leftTop ${componentCls}-arrow`,
          `&-placement-leftBottom ${componentCls}-arrow`
        ].join(",")]: {
          right: {
            _skip_check_: true,
            value: arrowDistance
          },
          transform: "translateX(100%) rotate(90deg)"
        },
        [`&-placement-left ${componentCls}-arrow`]: {
          top: {
            _skip_check_: true,
            value: "50%"
          },
          transform: "translateY(-50%) translateX(100%) rotate(90deg)"
        },
        [`&-placement-leftTop ${componentCls}-arrow`]: {
          top: dropdownArrowOffsetVertical
        },
        [`&-placement-leftBottom ${componentCls}-arrow`]: {
          bottom: dropdownArrowOffsetVertical
        }
      }),
      // >>>>> Right
      ...isInject(!!arrowPlacement.right, {
        [[
          `&-placement-right ${componentCls}-arrow`,
          `&-placement-rightTop ${componentCls}-arrow`,
          `&-placement-rightBottom ${componentCls}-arrow`
        ].join(",")]: {
          left: {
            _skip_check_: true,
            value: arrowDistance
          },
          transform: "translateX(-100%) rotate(-90deg)"
        },
        [`&-placement-right ${componentCls}-arrow`]: {
          top: {
            _skip_check_: true,
            value: "50%"
          },
          transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
        },
        [`&-placement-rightTop ${componentCls}-arrow`]: {
          top: dropdownArrowOffsetVertical
        },
        [`&-placement-rightBottom ${componentCls}-arrow`]: {
          bottom: dropdownArrowOffsetVertical
        }
      })
    }
  };
}

function getOverflowOptions(placement, arrowOffset, arrowWidth, autoAdjustOverflow) {
  if (autoAdjustOverflow === false) {
    return {
      adjustX: false,
      adjustY: false
    };
  }
  const overflow = autoAdjustOverflow && typeof autoAdjustOverflow === "object" ? autoAdjustOverflow : {};
  const baseOverflow = {};
  switch (placement) {
    case "top":
    case "bottom":
      baseOverflow.shiftX = arrowOffset.dropdownArrowOffset * 2 + arrowWidth;
      baseOverflow.shiftY = true;
      baseOverflow.adjustY = true;
      break;
    case "left":
    case "right":
      baseOverflow.shiftY = arrowOffset.dropdownArrowOffsetVertical * 2 + arrowWidth;
      baseOverflow.shiftX = true;
      baseOverflow.adjustX = true;
      break;
  }
  const mergedOverflow = {
    ...baseOverflow,
    ...overflow
  };
  if (!mergedOverflow.shiftX) {
    mergedOverflow.adjustX = true;
  }
  if (!mergedOverflow.shiftY) {
    mergedOverflow.adjustY = true;
  }
  return mergedOverflow;
}
const PlacementAlignMap = {
  left: {
    points: ["cr", "cl"]
  },
  right: {
    points: ["cl", "cr"]
  },
  top: {
    points: ["bc", "tc"]
  },
  bottom: {
    points: ["tc", "bc"]
  },
  topLeft: {
    points: ["bl", "tl"]
  },
  leftTop: {
    points: ["tr", "tl"]
  },
  topRight: {
    points: ["br", "tr"]
  },
  rightTop: {
    points: ["tl", "tr"]
  },
  bottomRight: {
    points: ["tr", "br"]
  },
  rightBottom: {
    points: ["bl", "br"]
  },
  bottomLeft: {
    points: ["tl", "bl"]
  },
  leftBottom: {
    points: ["br", "bl"]
  }
};
const ArrowCenterPlacementAlignMap = {
  topLeft: {
    points: ["bl", "tc"]
  },
  leftTop: {
    points: ["tr", "cl"]
  },
  topRight: {
    points: ["br", "tc"]
  },
  rightTop: {
    points: ["tl", "cr"]
  },
  bottomRight: {
    points: ["tr", "bc"]
  },
  rightBottom: {
    points: ["bl", "cr"]
  },
  bottomLeft: {
    points: ["tl", "bc"]
  },
  leftBottom: {
    points: ["br", "cl"]
  }
};
const DisableAutoArrowList = /* @__PURE__ */ new Set([
  "topLeft",
  "topRight",
  "bottomLeft",
  "bottomRight",
  "leftTop",
  "leftBottom",
  "rightTop",
  "rightBottom"
]);
function getPlacements(config) {
  const { arrowWidth, autoAdjustOverflow, arrowPointAtCenter, offset, borderRadius, visibleFirst } = config;
  const halfArrowWidth = arrowWidth / 2;
  const placementMap = {};
  Object.keys(PlacementAlignMap).forEach((key) => {
    const template = arrowPointAtCenter && ArrowCenterPlacementAlignMap[key] || PlacementAlignMap[key];
    const placementInfo = {
      ...template,
      offset: [0, 0],
      dynamicInset: true
    };
    placementMap[key] = placementInfo;
    if (DisableAutoArrowList.has(key)) {
      placementInfo.autoArrow = false;
    }
    switch (key) {
      case "top":
      case "topLeft":
      case "topRight":
        placementInfo.offset[1] = -halfArrowWidth - offset;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        placementInfo.offset[1] = halfArrowWidth + offset;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        placementInfo.offset[0] = -halfArrowWidth - offset;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        placementInfo.offset[0] = halfArrowWidth + offset;
        break;
    }
    const arrowOffset = getArrowOffset({
      contentRadius: borderRadius,
      limitVerticalRadius: true
    });
    if (arrowPointAtCenter) {
      switch (key) {
        case "topLeft":
        case "bottomLeft":
          placementInfo.offset[0] = -arrowOffset.dropdownArrowOffset - halfArrowWidth;
          break;
        case "topRight":
        case "bottomRight":
          placementInfo.offset[0] = arrowOffset.dropdownArrowOffset + halfArrowWidth;
          break;
        case "leftTop":
        case "rightTop":
          placementInfo.offset[1] = -arrowOffset.dropdownArrowOffset - halfArrowWidth;
          break;
        case "leftBottom":
        case "rightBottom":
          placementInfo.offset[1] = arrowOffset.dropdownArrowOffset + halfArrowWidth;
          break;
      }
    }
    placementInfo.overflow = getOverflowOptions(key, arrowOffset, arrowWidth, autoAdjustOverflow);
    if (visibleFirst) {
      placementInfo.htmlRegion = "visibleFirst";
    }
  });
  return placementMap;
}

const genTooltipStyle = (token) => {
  const {
    componentCls,
    // ipass-tooltip
    tooltipMaxWidth,
    tooltipColor,
    tooltipBg,
    tooltipBorderRadius,
    zIndexPopup,
    controlHeight,
    boxShadowSecondary,
    paddingSM,
    paddingXS,
    tooltipRadiusOuter
  } = token;
  return [
    {
      [componentCls]: {
        ...resetComponent(token),
        position: "absolute",
        zIndex: zIndexPopup,
        display: "block",
        width: "max-content",
        maxWidth: tooltipMaxWidth,
        visibility: "visible",
        transformOrigin: `var(--arrow-x, 50%) var(--arrow-y, 50%)`,
        "&-hidden": {
          display: "none"
        },
        "--ipass-arrow-background-color": tooltipBg,
        // Wrapper for the tooltip content
        [`${componentCls}-inner`]: {
          minWidth: controlHeight,
          minHeight: controlHeight,
          padding: `${paddingSM / 2}px ${paddingXS}px`,
          color: tooltipColor,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: tooltipBg,
          borderRadius: tooltipBorderRadius,
          boxShadow: boxShadowSecondary,
          boxSizing: "border-box"
        },
        // Limit left and right placement radius
        [[
          `&-placement-left`,
          `&-placement-leftTop`,
          `&-placement-leftBottom`,
          `&-placement-right`,
          `&-placement-rightTop`,
          `&-placement-rightBottom`
        ].join(",")]: {
          [`${componentCls}-inner`]: {
            borderRadius: Math.min(tooltipBorderRadius, MAX_VERTICAL_CONTENT_RADIUS)
          }
        },
        [`${componentCls}-content`]: {
          position: "relative"
        },
        // generator for preset color
        ...genPresetColor(token, (colorKey, { darkColor }) => ({
          [`&${componentCls}-${colorKey}`]: {
            [`${componentCls}-inner`]: {
              backgroundColor: darkColor
            },
            [`${componentCls}-arrow`]: {
              "--ipass-arrow-background-color": darkColor
            }
          }
        }))
      }
    },
    // Arrow Style
    getArrowStyle(
      merge(token, {
        borderRadiusOuter: tooltipRadiusOuter
      }),
      {
        colorBg: "var(--ipass-arrow-background-color)",
        contentRadius: tooltipBorderRadius,
        limitVerticalRadius: true
      }
    ),
    // Pure Render
    {
      [`${componentCls}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: token.sizePopupArrow
      }
    }
  ];
};
const useStyle$c = (prefixCls, injectStyle) => {
  const useOriginHook = genComponentStyleHook(
    "Tooltip",
    (token) => {
      if (injectStyle === false) {
        return [];
      }
      const { borderRadius, colorTextLightSolid, colorBgDefault, borderRadiusOuter } = token;
      const TooltipToken = merge(token, {
        // default variables
        tooltipMaxWidth: 250,
        tooltipColor: colorTextLightSolid,
        tooltipBorderRadius: borderRadius,
        tooltipBg: colorBgDefault,
        tooltipRadiusOuter: borderRadiusOuter > 4 ? 4 : borderRadiusOuter
      });
      return [genTooltipStyle(TooltipToken), initZoomMotion(token, "zoom-big-fast")];
    },
    ({ zIndexPopupBase, colorBgSpotlight }) => ({
      zIndexPopup: zIndexPopupBase + 70,
      colorBgDefault: colorBgSpotlight
    }),
    {
      resetStyle: false
    }
  );
  return useOriginHook(prefixCls);
};

function parseColor(prefixCls, color) {
  const isInternalColor = isPresetColor(color);
  const className = classNames({
    [`${prefixCls}-${color}`]: color && isInternalColor
  });
  const overlayStyle = {};
  const arrowStyle = {};
  if (color && !isInternalColor) {
    overlayStyle.background = color;
    arrowStyle["--ipass-arrow-background-color"] = color;
  }
  return { className, overlayStyle, arrowStyle };
}

const PurePanel$4 = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    placement = "top",
    title,
    color,
    overlayInnerStyle
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("tooltip", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$c(prefixCls, true);
  const colorInfo = parseColor(prefixCls, color);
  const arrowContentStyle = colorInfo.arrowStyle;
  const formattedOverlayInnerStyle = {
    ...overlayInnerStyle,
    ...colorInfo.overlayStyle
  };
  const cls = classNames(
    hashId,
    prefixCls,
    `${prefixCls}-pure`,
    `${prefixCls}-placement-${placement}`,
    className,
    colorInfo.className
  );
  return wrapSSR(
    /* @__PURE__ */ jsxs("div", { className: cls, style: arrowContentStyle, children: [
      /* @__PURE__ */ jsx("div", { className: `${prefixCls}-arrow` }),
      /* @__PURE__ */ jsx(
        Popup,
        {
          ...props,
          className: hashId,
          prefixCls,
          overlayInnerStyle: formattedOverlayInnerStyle,
          children: title
        }
      )
    ] })
  );
};

const Tooltip = React.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    openClassName,
    getTooltipContainer,
    overlayClassName,
    color,
    overlayInnerStyle,
    children,
    afterOpenChange,
    afterVisibleChange,
    destroyTooltipOnHide,
    arrow = true,
    title,
    overlay,
    builtinPlacements,
    arrowPointAtCenter = false,
    autoAdjustOverflow = true
  } = props;
  const mergedShowArrow = !!arrow;
  const [, token] = useToken$1();
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls
  } = React.useContext(ConfigContext);
  const warning = devUseWarning();
  const tooltipRef = React.useRef(null);
  const forceAlign = () => {
    tooltipRef.current?.forceAlign();
  };
  React.useImperativeHandle(ref, () => ({
    forceAlign,
    forcePopupAlign: () => {
      warning.deprecated(false, "forcePopupAlign", "forceAlign");
      forceAlign();
    }
  }));
  const [open, setOpen] = useMergedState(false, {
    value: props.open ?? props.visible,
    defaultValue: props.defaultOpen ?? props.defaultVisible
  });
  const noTitle = !title && !overlay && title !== 0;
  const onOpenChange = (vis) => {
    setOpen(noTitle ? false : vis);
    if (!noTitle) {
      props.onOpenChange?.(vis);
      props.onVisibleChange?.(vis);
    }
  };
  const tooltipPlacements = React.useMemo(() => {
    let mergedArrowPointAtCenter = arrowPointAtCenter;
    if (typeof arrow === "object") {
      mergedArrowPointAtCenter = arrow.pointAtCenter ?? arrow.arrowPointAtCenter ?? arrowPointAtCenter;
    }
    return builtinPlacements || getPlacements({
      arrowPointAtCenter: mergedArrowPointAtCenter,
      autoAdjustOverflow,
      arrowWidth: mergedShowArrow ? token.sizePopupArrow : 0,
      borderRadius: token.borderRadius,
      offset: token.marginXXS,
      visibleFirst: true
    });
  }, [arrowPointAtCenter, arrow, builtinPlacements, token]);
  const memoOverlay = React.useMemo(() => {
    if (title === 0) {
      return title;
    }
    return overlay || title || "";
  }, [overlay, title]);
  const memoOverlayWrapper = /* @__PURE__ */ jsx(NoCompactStyle, { children: typeof memoOverlay === "function" ? memoOverlay() : memoOverlay });
  const {
    getPopupContainer,
    placement = "top",
    mouseEnterDelay = 0.1,
    mouseLeaveDelay = 0.1,
    overlayStyle,
    rootClassName,
    ...otherProps
  } = props;
  const prefixCls = getPrefixCls("tooltip", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const injectFromPopover = props["data-popover-inject"];
  let tempOpen = open;
  if (!("open" in props) && !("visible" in props) && noTitle) {
    tempOpen = false;
  }
  const child = isValidElement(children) && !isFragment(children) ? children : /* @__PURE__ */ jsx("span", { children });
  const childProps = child.props;
  const childCls = !childProps.className || typeof childProps.className === "string" ? classNames(childProps.className, openClassName || `${prefixCls}-open`) : childProps.className;
  const [wrapSSR, hashId] = useStyle$c(prefixCls, !injectFromPopover);
  const colorInfo = parseColor(prefixCls, color);
  const arrowContentStyle = colorInfo.arrowStyle;
  const formattedOverlayInnerStyle = {
    ...overlayInnerStyle,
    ...colorInfo.overlayStyle
  };
  const customOverlayClassName = classNames(
    overlayClassName,
    colorInfo.className,
    rootClassName,
    hashId
  );
  return wrapSSR(
    /* @__PURE__ */ jsx(
      RcTooltip,
      {
        ...otherProps,
        showArrow: mergedShowArrow,
        placement,
        mouseEnterDelay,
        mouseLeaveDelay,
        prefixCls,
        overlayClassName: customOverlayClassName,
        overlayStyle: { ...arrowContentStyle, ...overlayStyle },
        getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
        ref: tooltipRef,
        builtinPlacements: tooltipPlacements,
        overlay: memoOverlayWrapper,
        visible: tempOpen,
        onVisibleChange: onOpenChange,
        afterVisibleChange: afterOpenChange ?? afterVisibleChange,
        overlayInnerStyle: formattedOverlayInnerStyle,
        arrowContent: /* @__PURE__ */ jsx("span", { className: `${prefixCls}-arrow-content` }),
        motion: {
          motionName: getTransitionName(rootPrefixCls, "zoom-big-fast", props.transitionName),
          motionDeadline: 1e3
        },
        destroyTooltipOnHide: !!destroyTooltipOnHide,
        children: tempOpen ? cloneElement(child, { className: childCls }) : child
      }
    )
  );
});
Tooltip._InternalPanelDoNotUseOrYouWillBeFired = PurePanel$4;

const MenuContext = createContext({
  prefixCls: "",
  firstLevel: true,
  inlineCollapsed: false
});

const MenuItem = (props) => {
  const { className, children, icon, title, danger } = props;
  const {
    prefixCls,
    firstLevel,
    disableMenuItemTitleTooltip,
    inlineCollapsed: isInlineCollapsed
  } = React.useContext(MenuContext);
  const renderItemChildren = (inlineCollapsed) => {
    const wrapNode = /* @__PURE__ */ jsx("span", { className: `${prefixCls}-title-content`, children });
    if (!icon || isValidElement(children) && children.type === "span") {
      if (children && inlineCollapsed && firstLevel && typeof children === "string") {
        return /* @__PURE__ */ jsx("div", { className: `${prefixCls}-inline-collapsed-noicon`, children: children.charAt(0) });
      }
    }
    return wrapNode;
  };
  const { siderCollapsed } = React.useContext(SiderContext);
  let tooltipTitle = title;
  if (typeof title === "undefined") {
    tooltipTitle = firstLevel ? children : "";
  } else if (title === false) {
    tooltipTitle = "";
  }
  const tooltipProps = { title: tooltipTitle };
  if (!siderCollapsed && !isInlineCollapsed) {
    tooltipProps.title = null;
    tooltipProps.open = false;
  }
  const childrenLength = toArray$2(children).length;
  let returnNode = /* @__PURE__ */ jsxs(
    Item$2,
    {
      ...omit(props, ["title", "icon", "danger"]),
      className: classNames(
        {
          [`${prefixCls}-item-danger`]: danger,
          [`${prefixCls}-item-only-child`]: (icon ? childrenLength + 1 : childrenLength) === 1
        },
        className
      ),
      title: typeof title === "string" ? title : void 0,
      children: [
        cloneElement(icon, {
          className: classNames(
            isValidElement(icon) ? icon.props?.className : "",
            `${prefixCls}-item-icon`
          )
        }),
        renderItemChildren(isInlineCollapsed)
      ]
    }
  );
  if (!disableMenuItemTitleTooltip) {
    returnNode = /* @__PURE__ */ jsx(
      Tooltip,
      {
        ...tooltipProps,
        placement: "right",
        overlayClassName: `${prefixCls}-inline-collapsed-tooltip`,
        children: returnNode
      }
    );
  }
  return returnNode;
};

const SubMenu = (props) => {
  const { popupClassName, icon, title, theme: customTheme } = props;
  const context = React.useContext(MenuContext);
  const { prefixCls, inlineCollapsed, theme: contextTheme } = context;
  const parentPath = useFullPath();
  let titleNode;
  if (!icon) {
    titleNode = inlineCollapsed && !parentPath.length && title && typeof title === "string" ? /* @__PURE__ */ jsx("div", { className: `${prefixCls}-inline-collapsed-noicon`, children: title.charAt(0) }) : /* @__PURE__ */ jsx("span", { className: `${prefixCls}-title-content`, children: title });
  } else {
    const titleIsSpan = isValidElement(title) && title.type === "span";
    titleNode = /* @__PURE__ */ jsxs(Fragment, { children: [
      cloneElement(icon, {
        className: classNames(
          isValidElement(icon) ? icon.props?.className : "",
          `${prefixCls}-item-icon`
        )
      }),
      titleIsSpan ? title : /* @__PURE__ */ jsx("span", { className: `${prefixCls}-title-content`, children: title })
    ] });
  }
  const contextValue = React.useMemo(
    () => ({ ...context, firstLevel: false }),
    [context]
  );
  return /* @__PURE__ */ jsx(MenuContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(
    SubMenu$1,
    {
      ...omit(props, ["icon"]),
      title: titleNode,
      popupClassName: classNames(
        prefixCls,
        popupClassName,
        `${prefixCls}-${customTheme || contextTheme}`
      )
    }
  ) });
};

function convertItemsToNodes(list) {
  return (list || []).map((opt, index) => {
    if (opt && typeof opt === "object") {
      const { label, children, key, type, ...restProps } = opt;
      const mergedKey = key ?? `tmp-${index}`;
      if (children || type === "group") {
        if (type === "group") {
          return /* @__PURE__ */ jsx(ItemGroup, { ...restProps, title: label, children: convertItemsToNodes(children) }, mergedKey);
        }
        return /* @__PURE__ */ jsx(SubMenu, { ...restProps, title: label, children: convertItemsToNodes(children) }, mergedKey);
      }
      if (type === "divider") {
        return /* @__PURE__ */ jsx(MenuDivider, { ...restProps }, mergedKey);
      }
      return /* @__PURE__ */ jsx(MenuItem, { ...restProps, children: label }, mergedKey);
    }
    return null;
  }).filter((opt) => opt);
}
function useItems(items) {
  return React.useMemo(() => {
    if (!items) {
      return items;
    }
    return convertItemsToNodes(items);
  }, [items]);
}

const OverrideContext = React.createContext(null);
React.forwardRef((props, ref) => {
  const { children, ...restProps } = props;
  const override = React.useContext(OverrideContext);
  const context = React.useMemo(
    () => ({ ...override, ...restProps }),
    [
      override,
      restProps.prefixCls,
      // restProps.expandIcon, Not mark as deps since this is a ReactNode
      restProps.mode,
      restProps.selectable
      // restProps.validator, Not mark as deps since this is a function
    ]
  );
  const canRef = supportNodeRef(children);
  const mergedRef = useComposeRef(ref, canRef ? children.ref : null);
  return /* @__PURE__ */ jsx(OverrideContext.Provider, { value: context, children: /* @__PURE__ */ jsx(NoCompactStyle, { children: canRef ? React.cloneElement(children, { ref: mergedRef }) : children }) });
});

const getHorizontalStyle = (token) => {
  const {
    componentCls,
    motionDurationSlow,
    horizontalLineHeight,
    colorSplit,
    lineWidth,
    lineType,
    itemPaddingInline
  } = token;
  return {
    [`${componentCls}-horizontal`]: {
      lineHeight: horizontalLineHeight,
      border: 0,
      borderBottom: `${lineWidth}px ${lineType} ${colorSplit}`,
      boxShadow: "none",
      "&::after": {
        display: "block",
        clear: "both",
        height: 0,
        content: '"\\20"'
      },
      // ======================= Item =======================
      [`${componentCls}-item, ${componentCls}-submenu`]: {
        position: "relative",
        display: "inline-block",
        verticalAlign: "bottom",
        paddingInline: itemPaddingInline
      },
      [`> ${componentCls}-item:hover,
        > ${componentCls}-item-active,
        > ${componentCls}-submenu ${componentCls}-submenu-title:hover`]: {
        backgroundColor: "transparent"
      },
      [`${componentCls}-item, ${componentCls}-submenu-title`]: {
        transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`].join(
          ","
        )
      },
      // ===================== Sub Menu =====================
      [`${componentCls}-submenu-arrow`]: {
        display: "none"
      }
    }
  };
};

const accessibilityFocus = (token) => ({
  ...genFocusOutline(token)
});
const getThemeStyle = (token, themeSuffix) => {
  const {
    componentCls,
    itemColor,
    itemSelectedColor,
    groupTitleColor,
    itemBg,
    subMenuItemBg,
    itemSelectedBg,
    activeBarHeight,
    activeBarWidth,
    activeBarBorderWidth,
    motionDurationSlow,
    motionEaseInOut,
    motionEaseOut,
    itemPaddingInline,
    motionDurationMid,
    itemHoverColor,
    lineType,
    colorSplit,
    // Disabled
    itemDisabledColor,
    // Danger
    dangerItemColor,
    dangerItemHoverColor,
    dangerItemSelectedColor,
    dangerItemActiveBg,
    dangerItemSelectedBg,
    itemHoverBg,
    itemActiveBg,
    menuSubMenuBg,
    // Horizontal
    horizontalItemSelectedColor,
    horizontalItemSelectedBg,
    horizontalItemBorderRadius,
    horizontalItemHoverBg,
    popupBg
  } = token;
  return {
    [`${componentCls}-${themeSuffix}, ${componentCls}-${themeSuffix} > ${componentCls}`]: {
      color: itemColor,
      background: itemBg,
      [`&${componentCls}-root:focus-visible`]: {
        ...accessibilityFocus(token)
      },
      // ======================== Item ========================
      [`${componentCls}-item-group-title`]: {
        color: groupTitleColor
      },
      [`${componentCls}-submenu-selected`]: {
        [`> ${componentCls}-submenu-title`]: {
          color: itemSelectedColor
        }
      },
      // Disabled
      [`${componentCls}-item-disabled, ${componentCls}-submenu-disabled`]: {
        color: `${itemDisabledColor} !important`
      },
      // Hover
      [`${componentCls}-item:not(${componentCls}-item-selected):not(${componentCls}-submenu-selected)`]: {
        [`&:hover, > ${componentCls}-submenu-title:hover`]: {
          color: itemHoverColor
        }
      },
      [`&:not(${componentCls}-horizontal)`]: {
        [`${componentCls}-item:not(${componentCls}-item-selected)`]: {
          "&:hover": {
            backgroundColor: itemHoverBg
          },
          "&:active": {
            backgroundColor: itemActiveBg
          }
        },
        [`${componentCls}-submenu-title`]: {
          "&:hover": {
            backgroundColor: itemHoverBg
          },
          "&:active": {
            backgroundColor: itemActiveBg
          }
        }
      },
      // Danger - only Item has
      [`${componentCls}-item-danger`]: {
        color: dangerItemColor,
        [`&${componentCls}-item:hover`]: {
          [`&:not(${componentCls}-item-selected):not(${componentCls}-submenu-selected)`]: {
            color: dangerItemHoverColor
          }
        },
        [`&${componentCls}-item:active`]: {
          background: dangerItemActiveBg
        }
      },
      [`${componentCls}-item a`]: {
        "&, &:hover": {
          color: "inherit"
        }
      },
      [`${componentCls}-item-selected`]: {
        color: itemSelectedColor,
        // Danger
        [`&${componentCls}-item-danger`]: {
          color: dangerItemSelectedColor
        },
        [`a, a:hover`]: {
          color: "inherit"
        }
      },
      [`& ${componentCls}-item-selected`]: {
        backgroundColor: itemSelectedBg,
        // Danger
        [`&${componentCls}-item-danger`]: {
          backgroundColor: dangerItemSelectedBg
        }
      },
      [`${componentCls}-item, ${componentCls}-submenu-title`]: {
        [`&:not(${componentCls}-item-disabled):focus-visible`]: {
          ...accessibilityFocus(token)
        }
      },
      [`&${componentCls}-submenu > ${componentCls}`]: {
        backgroundColor: menuSubMenuBg
      },
      [`&${componentCls}-popup > ${componentCls}`]: {
        backgroundColor: popupBg
      },
      // ====================== Horizontal ======================
      [`&${componentCls}-horizontal`]: {
        ...themeSuffix === "dark" ? {
          borderBottom: 0
        } : {},
        [`> ${componentCls}-item, > ${componentCls}-submenu`]: {
          top: activeBarBorderWidth,
          marginTop: -activeBarBorderWidth,
          marginBottom: 0,
          borderRadius: horizontalItemBorderRadius,
          "&::after": {
            position: "absolute",
            insetInline: itemPaddingInline,
            bottom: 0,
            borderBottom: `${activeBarHeight}px solid transparent`,
            transition: `border-color ${motionDurationSlow} ${motionEaseInOut}`,
            content: '""'
          },
          [`&:hover, &-active, &-open`]: {
            background: horizontalItemHoverBg,
            "&::after": {
              borderBottomWidth: activeBarHeight,
              borderBottomColor: horizontalItemSelectedColor
            }
          },
          [`&-selected`]: {
            color: horizontalItemSelectedColor,
            backgroundColor: horizontalItemSelectedBg,
            "&:hover": {
              backgroundColor: horizontalItemSelectedBg
            },
            "&::after": {
              borderBottomWidth: activeBarHeight,
              borderBottomColor: horizontalItemSelectedColor
            }
          }
        }
      },
      // ================== Inline & Vertical ===================
      //
      [`&${componentCls}-root`]: {
        [`&${componentCls}-inline, &${componentCls}-vertical`]: {
          borderInlineEnd: `${activeBarBorderWidth}px ${lineType} ${colorSplit}`
        }
      },
      // ======================== Inline ========================
      [`&${componentCls}-inline`]: {
        // Sub
        [`${componentCls}-sub${componentCls}-inline`]: {
          background: subMenuItemBg
        },
        // Item
        [`${componentCls}-item, ${componentCls}-submenu-title`]: activeBarBorderWidth && activeBarWidth ? {
          width: `calc(100% + ${activeBarBorderWidth}px)`
        } : {},
        [`${componentCls}-item`]: {
          position: "relative",
          "&::after": {
            position: "absolute",
            insetBlock: 0,
            insetInlineEnd: 0,
            borderInlineEnd: `${activeBarWidth}px solid ${itemSelectedColor}`,
            transform: "scaleY(0.0001)",
            opacity: 0,
            transition: [
              `transform ${motionDurationMid} ${motionEaseOut}`,
              `opacity ${motionDurationMid} ${motionEaseOut}`
            ].join(","),
            content: '""'
          },
          // Danger
          [`&${componentCls}-item-danger`]: {
            "&::after": {
              borderInlineEndColor: dangerItemSelectedColor
            }
          }
        },
        [`${componentCls}-selected, ${componentCls}-item-selected`]: {
          "&::after": {
            transform: "scaleY(1)",
            opacity: 1,
            transition: [
              `transform ${motionDurationMid} ${motionEaseInOut}`,
              `opacity ${motionDurationMid} ${motionEaseInOut}`
            ].join(",")
          }
        }
      }
    }
  };
};

const getVerticalInlineStyle = (token) => {
  const {
    componentCls,
    itemHeight,
    itemMarginInline,
    padding,
    menuArrowSize,
    marginXS,
    itemMarginBlock
  } = token;
  const paddingWithArrow = padding + menuArrowSize + marginXS;
  return {
    [`${componentCls}-item`]: {
      position: "relative",
      overflow: "hidden"
    },
    [`${componentCls}-item, ${componentCls}-submenu-title`]: {
      height: itemHeight,
      lineHeight: `${itemHeight}px`,
      paddingInline: padding,
      overflow: "hidden",
      textOverflow: "ellipsis",
      marginInline: itemMarginInline,
      marginBlock: itemMarginBlock,
      width: `calc(100% - ${itemMarginInline * 2}px)`
    },
    [`> ${componentCls}-item,
            > ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
      height: itemHeight,
      lineHeight: `${itemHeight}px`
    },
    [`${componentCls}-item-group-list ${componentCls}-submenu-title,
            ${componentCls}-submenu-title`]: {
      paddingInlineEnd: paddingWithArrow
    }
  };
};
const getVerticalStyle = (token) => {
  const {
    componentCls,
    iconCls,
    itemHeight,
    colorTextLightSolid,
    dropdownWidth,
    controlHeightLG,
    motionDurationMid,
    motionEaseOut,
    paddingXL,
    itemMarginInline,
    fontSizeLG,
    motionDurationSlow,
    paddingXS,
    boxShadowSecondary,
    collapsedWidth,
    collapsedIconSize
  } = token;
  const inlineItemStyle = {
    height: itemHeight,
    lineHeight: `${itemHeight}px`,
    listStylePosition: "inside",
    listStyleType: "disc"
  };
  return [
    {
      [componentCls]: {
        [`&-inline, &-vertical`]: {
          [`&${componentCls}-root`]: {
            boxShadow: "none"
          },
          ...getVerticalInlineStyle(token)
        }
      },
      [`${componentCls}-submenu-popup`]: {
        [`${componentCls}-vertical`]: {
          ...getVerticalInlineStyle(token),
          boxShadow: boxShadowSecondary
        }
      }
    },
    // Vertical only
    {
      [`${componentCls}-submenu-popup ${componentCls}-vertical${componentCls}-sub`]: {
        minWidth: dropdownWidth,
        maxHeight: `calc(100vh - ${controlHeightLG * 2.5}px)`,
        padding: "0",
        overflow: "hidden",
        borderInlineEnd: 0,
        "&:not([class*='-active'])": {
          overflowX: "hidden",
          overflowY: "auto"
        }
      }
    },
    // Inline Only
    {
      [`${componentCls}-inline`]: {
        width: "100%",
        // Motion enhance for first level
        [`&${componentCls}-root`]: {
          [`${componentCls}-item, ${componentCls}-submenu-title`]: {
            display: "flex",
            alignItems: "center",
            transition: [
              `border-color ${motionDurationSlow}`,
              `background ${motionDurationSlow}`,
              `padding ${motionDurationMid} ${motionEaseOut}`
            ].join(","),
            [`> ${componentCls}-title-content`]: {
              flex: "auto",
              minWidth: 0,
              overflow: "hidden",
              textOverflow: "ellipsis"
            },
            "> *": {
              flex: "none"
            }
          }
        },
        // >>>>> Sub
        [`${componentCls}-sub${componentCls}-inline`]: {
          padding: 0,
          border: 0,
          borderRadius: 0,
          boxShadow: "none",
          [`& > ${componentCls}-submenu > ${componentCls}-submenu-title`]: inlineItemStyle,
          [`& ${componentCls}-item-group-title`]: {
            paddingInlineStart: paddingXL
          }
        },
        // >>>>> Item
        [`${componentCls}-item`]: inlineItemStyle
      }
    },
    // Inline Collapse Only
    {
      [`${componentCls}-inline-collapsed`]: {
        width: collapsedWidth,
        [`&${componentCls}-root`]: {
          [`${componentCls}-item, ${componentCls}-submenu ${componentCls}-submenu-title`]: {
            [`> ${componentCls}-inline-collapsed-noicon`]: {
              fontSize: fontSizeLG,
              textAlign: "center"
            }
          }
        },
        [`> ${componentCls}-item,
          > ${componentCls}-item-group > ${componentCls}-item-group-list > ${componentCls}-item,
          > ${componentCls}-item-group > ${componentCls}-item-group-list > ${componentCls}-submenu > ${componentCls}-submenu-title,
          > ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
          insetInlineStart: 0,
          paddingInline: `calc(50% - ${fontSizeLG / 2}px - ${itemMarginInline}px)`,
          textOverflow: "clip",
          [`
            ${componentCls}-submenu-arrow,
            ${componentCls}-submenu-expand-icon
          `]: {
            opacity: 0
          },
          [`${componentCls}-item-icon, ${iconCls}`]: {
            margin: 0,
            fontSize: collapsedIconSize,
            lineHeight: `${itemHeight}px`,
            "+ span": {
              display: "inline-block",
              opacity: 0
            }
          }
        },
        [`${componentCls}-item-icon, ${iconCls}`]: {
          display: "inline-block"
        },
        "&-tooltip": {
          pointerEvents: "none",
          [`${componentCls}-item-icon, ${iconCls}`]: {
            display: "none"
          },
          "a, a:hover": {
            color: colorTextLightSolid
          }
        },
        [`${componentCls}-item-group-title`]: {
          ...textEllipsis,
          paddingInline: paddingXS
        }
      }
    }
  ];
};

const genMenuItemStyle = (token) => {
  const {
    componentCls,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOut,
    motionEaseOut,
    iconCls,
    iconSize,
    iconMarginInlineEnd
  } = token;
  return {
    // >>>>> Item
    [`${componentCls}-item, ${componentCls}-submenu-title`]: {
      position: "relative",
      display: "block",
      margin: 0,
      whiteSpace: "nowrap",
      cursor: "pointer",
      transition: [
        `border-color ${motionDurationSlow}`,
        `background ${motionDurationSlow}`,
        `padding ${motionDurationSlow} ${motionEaseInOut}`
      ].join(","),
      [`${componentCls}-item-icon, ${iconCls}`]: {
        minWidth: iconSize,
        fontSize: iconSize,
        transition: [
          `font-size ${motionDurationMid} ${motionEaseOut}`,
          `margin ${motionDurationSlow} ${motionEaseInOut}`,
          `color ${motionDurationSlow}`
        ].join(","),
        "+ span": {
          marginInlineStart: iconMarginInlineEnd,
          opacity: 1,
          transition: [
            `opacity ${motionDurationSlow} ${motionEaseInOut}`,
            `margin ${motionDurationSlow}`,
            `color ${motionDurationSlow}`
          ].join(",")
        }
      },
      [`${componentCls}-item-icon`]: {
        ...resetIcon()
      },
      [`&${componentCls}-item-only-child`]: {
        [`> ${iconCls}, > ${componentCls}-item-icon`]: {
          marginInlineEnd: 0
        }
      }
    },
    // Disabled state sets text to gray and nukes hover/tab effects
    [`${componentCls}-item-disabled, ${componentCls}-submenu-disabled`]: {
      background: "none !important",
      cursor: "not-allowed",
      "&::after": {
        borderColor: "transparent !important"
      },
      a: {
        color: "inherit !important"
      },
      [`> ${componentCls}-submenu-title`]: {
        color: "inherit !important",
        cursor: "not-allowed"
      }
    }
  };
};
const genSubMenuArrowStyle = (token) => {
  const {
    componentCls,
    motionDurationSlow,
    motionEaseInOut,
    borderRadius,
    menuArrowSize,
    menuArrowOffset
  } = token;
  return {
    [`${componentCls}-submenu`]: {
      [`&-expand-icon, &-arrow`]: {
        position: "absolute",
        top: "50%",
        insetInlineEnd: token.margin,
        width: menuArrowSize,
        color: "currentcolor",
        transform: "translateY(-50%)",
        transition: `transform ${motionDurationSlow} ${motionEaseInOut}, opacity ${motionDurationSlow}`
      },
      "&-arrow": {
        // →
        "&::before, &::after": {
          position: "absolute",
          width: menuArrowSize * 0.6,
          height: menuArrowSize * 0.15,
          backgroundColor: "currentcolor",
          borderRadius,
          transition: [
            `background ${motionDurationSlow} ${motionEaseInOut}`,
            `transform ${motionDurationSlow} ${motionEaseInOut}`,
            `top ${motionDurationSlow} ${motionEaseInOut}`,
            `color ${motionDurationSlow} ${motionEaseInOut}`
          ].join(","),
          content: '""'
        },
        "&::before": {
          transform: `rotate(45deg) translateY(-${menuArrowOffset})`
        },
        "&::after": {
          transform: `rotate(-45deg) translateY(${menuArrowOffset})`
        }
      }
    }
  };
};
const getBaseStyle = (token) => {
  const {
    ipassCls,
    componentCls,
    fontSize,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOut,
    paddingXS,
    padding,
    colorSplit,
    lineWidth,
    zIndexPopup,
    borderRadiusLG,
    subMenuItemBorderRadius,
    menuArrowSize,
    menuArrowOffset,
    lineType,
    menuPanelMaskInset,
    groupTitleLineHeight,
    groupTitleFontSize
  } = token;
  return [
    // Misc
    {
      "": {
        [`${componentCls}`]: {
          ...clearFix(),
          // Hidden
          [`&-hidden`]: {
            display: "none"
          }
        }
      },
      [`${componentCls}-submenu-hidden`]: {
        display: "none"
      }
    },
    {
      [componentCls]: {
        ...resetComponent(token),
        ...clearFix(),
        marginBottom: 0,
        paddingInlineStart: 0,
        // Override default ul/ol
        fontSize,
        lineHeight: 0,
        // Fix display inline-block gap
        listStyle: "none",
        outline: "none",
        // Magic cubic here but smooth transition
        transition: `width ${motionDurationSlow} cubic-bezier(0.2, 0, 0, 1) 0s`,
        [`ul, ol`]: {
          margin: 0,
          padding: 0,
          listStyle: "none"
        },
        // Overflow ellipsis
        [`&-overflow`]: {
          display: "flex",
          [`${componentCls}-item`]: {
            flex: "none"
          }
        },
        [`${componentCls}-item, ${componentCls}-submenu, ${componentCls}-submenu-title`]: {
          borderRadius: token.itemBorderRadius
        },
        [`${componentCls}-item-group-title`]: {
          padding: `${paddingXS}px ${padding}px`,
          fontSize: groupTitleFontSize,
          lineHeight: groupTitleLineHeight,
          transition: `all ${motionDurationSlow}`
        },
        [`&-horizontal ${componentCls}-submenu`]: {
          transition: [
            `border-color ${motionDurationSlow} ${motionEaseInOut}`,
            `background ${motionDurationSlow} ${motionEaseInOut}`
          ].join(",")
        },
        [`${componentCls}-submenu, ${componentCls}-submenu-inline`]: {
          transition: [
            `border-color ${motionDurationSlow} ${motionEaseInOut}`,
            `background ${motionDurationSlow} ${motionEaseInOut}`,
            `padding ${motionDurationMid} ${motionEaseInOut}`
          ].join(",")
        },
        [`${componentCls}-submenu ${componentCls}-sub`]: {
          cursor: "initial",
          transition: [
            `background ${motionDurationSlow} ${motionEaseInOut}`,
            `padding ${motionDurationSlow} ${motionEaseInOut}`
          ].join(",")
        },
        [`${componentCls}-title-content`]: {
          transition: `color ${motionDurationSlow}`
        },
        [`${componentCls}-item a`]: {
          "&::before": {
            position: "absolute",
            inset: 0,
            backgroundColor: "transparent",
            content: '""'
          }
        },
        // Removed a Badge related style seems it's safe
        // >>>>> Divider
        [`${componentCls}-item-divider`]: {
          overflow: "hidden",
          lineHeight: 0,
          borderColor: colorSplit,
          borderStyle: lineType,
          borderWidth: 0,
          borderTopWidth: lineWidth,
          marginBlock: lineWidth,
          padding: 0,
          "&-dashed": {
            borderStyle: "dashed"
          }
        },
        // Item
        ...genMenuItemStyle(token),
        [`${componentCls}-item-group`]: {
          [`${componentCls}-item-group-list`]: {
            margin: 0,
            padding: 0,
            [`${componentCls}-item, ${componentCls}-submenu-title`]: {
              paddingInline: `${fontSize * 2}px ${padding}px`
            }
          }
        },
        // ======================= Sub Menu =======================
        "&-submenu": {
          "&-popup": {
            position: "absolute",
            zIndex: zIndexPopup,
            borderRadius: borderRadiusLG,
            boxShadow: "none",
            transformOrigin: "0 0",
            [`&${componentCls}-submenu`]: {
              background: "transparent"
            },
            "&::before": {
              position: "absolute",
              inset: `${menuPanelMaskInset}px 0 0`,
              zIndex: -1,
              width: "100%",
              height: "100%",
              opacity: 0,
              content: '""'
            }
          },
          "&-placement-rightTop::before": {
            top: 0,
            insetInlineStart: menuPanelMaskInset
          },
          [`
          &-placement-leftTop,
          &-placement-bottomRight,
          `]: {
            transformOrigin: "100% 0"
          },
          [`
          &-placement-leftBottom,
          &-placement-topRight,
          `]: {
            transformOrigin: "100% 100%"
          },
          [`
          &-placement-rightBottom,
          &-placement-topLeft,
          `]: {
            transformOrigin: "0 100%"
          },
          [`
          &-placement-bottomLeft,
          &-placement-rightTop,
          `]: {
            transformOrigin: "0 0"
          },
          [`
          &-placement-leftTop,
          &-placement-leftBottom
          `]: {
            paddingInlineEnd: token.paddingXS
          },
          [`
          &-placement-rightTop,
          &-placement-rightBottom
          `]: {
            paddingInlineStart: token.paddingXS
          },
          [`
          &-placement-topRight,
          &-placement-topLeft
          `]: {
            paddingBottom: token.paddingXS
          },
          [`
          &-placement-bottomRight,
          &-placement-bottomLeft
          `]: {
            paddingTop: token.paddingXS
          },
          [`> ${componentCls}`]: {
            borderRadius: borderRadiusLG,
            ...genMenuItemStyle(token),
            ...genSubMenuArrowStyle(token),
            [`${componentCls}-item, ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
              borderRadius: subMenuItemBorderRadius
            },
            [`${componentCls}-submenu-title::after`]: {
              transition: `transform ${motionDurationSlow} ${motionEaseInOut}`
            }
          }
        },
        ...genSubMenuArrowStyle(token),
        [`&-inline-collapsed ${componentCls}-submenu-arrow,
        &-inline ${componentCls}-submenu-arrow`]: {
          // ↓
          "&::before": {
            transform: `rotate(-45deg) translateX(${menuArrowOffset})`
          },
          "&::after": {
            transform: `rotate(45deg) translateX(-${menuArrowOffset})`
          }
        },
        [`${componentCls}-submenu-open${componentCls}-submenu-inline > ${componentCls}-submenu-title > ${componentCls}-submenu-arrow`]: {
          // ↑
          transform: `translateY(-${menuArrowSize * 0.2}px)`,
          "&::after": {
            transform: `rotate(-45deg) translateX(-${menuArrowOffset})`
          },
          "&::before": {
            transform: `rotate(45deg) translateX(${menuArrowOffset})`
          }
        }
      }
    },
    // Integration with header element so menu items have the same height
    {
      [`${ipassCls}-layout-header`]: {
        [componentCls]: {
          lineHeight: "inherit"
        }
      }
    }
  ];
};
const useStyle$b = (prefixCls, injectStyle) => {
  const useOriginHook = genComponentStyleHook(
    "Menu",
    (token) => {
      if (injectStyle === false) {
        return [];
      }
      const {
        colorBgElevated,
        colorPrimary,
        colorTextLightSolid,
        controlHeightLG,
        fontSize,
        darkItemColor,
        darkDangerItemColor,
        darkItemBg,
        darkSubMenuItemBg,
        darkItemSelectedColor,
        darkItemSelectedBg,
        darkDangerItemSelectedBg,
        darkItemHoverBg,
        darkGroupTitleColor,
        darkItemHoverColor,
        darkItemDisabledColor,
        darkDangerItemHoverColor,
        darkDangerItemSelectedColor,
        darkDangerItemActiveBg
      } = token;
      const menuArrowSize = fontSize / 7 * 5;
      const menuToken = merge(token, {
        menuArrowSize,
        menuHorizontalHeight: controlHeightLG * 1.15,
        menuArrowOffset: `${menuArrowSize * 0.25}px`,
        menuPanelMaskInset: -7,
        // Still a hardcode here since it's offset by rc-align
        menuSubMenuBg: colorBgElevated
      });
      const menuDarkToken = merge(menuToken, {
        itemColor: darkItemColor,
        itemHoverColor: darkItemHoverColor,
        groupTitleColor: darkGroupTitleColor,
        itemSelectedColor: darkItemSelectedColor,
        itemBg: darkItemBg,
        popupBg: darkItemBg,
        subMenuItemBg: darkSubMenuItemBg,
        itemActiveBg: "transparent",
        itemSelectedBg: darkItemSelectedBg,
        activeBarHeight: 0,
        activeBarBorderWidth: 0,
        itemHoverBg: darkItemHoverBg,
        // Disabled
        itemDisabledColor: darkItemDisabledColor,
        // Danger
        dangerItemColor: darkDangerItemColor,
        dangerItemHoverColor: darkDangerItemHoverColor,
        dangerItemSelectedColor: darkDangerItemSelectedColor,
        dangerItemActiveBg: darkDangerItemActiveBg,
        dangerItemSelectedBg: darkDangerItemSelectedBg,
        menuSubMenuBg: darkSubMenuItemBg,
        // Horizontal
        horizontalItemSelectedColor: colorTextLightSolid,
        horizontalItemSelectedBg: colorPrimary
      });
      return [
        // Basic
        getBaseStyle(menuToken),
        // Horizontal
        getHorizontalStyle(menuToken),
        // Hard code for some light style
        // Vertical
        getVerticalStyle(menuToken),
        // Hard code for some light style
        // Theme
        getThemeStyle(menuToken, "light"),
        getThemeStyle(menuDarkToken, "dark"),
        // Motion
        genCollapseMotion(menuToken),
        initSlideMotion(menuToken, "slide-up"),
        initSlideMotion(menuToken, "slide-down"),
        initZoomMotion(menuToken, "zoom-big")
      ];
    },
    (token) => {
      const {
        colorPrimary,
        colorError,
        colorTextDisabled,
        colorErrorBg,
        colorText,
        colorTextDescription,
        colorBgContainer,
        colorFillAlter,
        colorFillContent,
        lineWidth,
        lineWidthBold,
        controlItemBgActive,
        colorBgTextHover,
        controlHeightLG,
        lineHeight,
        colorBgElevated,
        marginXXS,
        padding,
        fontSize,
        controlHeightSM,
        fontSizeLG,
        colorTextLightSolid,
        colorErrorHover
      } = token;
      const colorTextDark = new TinyColor(colorTextLightSolid).setAlpha(0.65).toRgbString();
      return {
        dropdownWidth: 160,
        zIndexPopup: token.zIndexPopupBase + 50,
        radiusItem: token.borderRadiusLG,
        itemBorderRadius: token.borderRadiusLG,
        radiusSubMenuItem: token.borderRadiusSM,
        subMenuItemBorderRadius: token.borderRadiusSM,
        colorItemText: colorText,
        itemColor: colorText,
        colorItemTextHover: colorText,
        itemHoverColor: colorText,
        colorItemTextHoverHorizontal: colorPrimary,
        horizontalItemHoverColor: colorPrimary,
        colorGroupTitle: colorTextDescription,
        groupTitleColor: colorTextDescription,
        colorItemTextSelected: colorPrimary,
        itemSelectedColor: colorPrimary,
        colorItemTextSelectedHorizontal: colorPrimary,
        horizontalItemSelectedColor: colorPrimary,
        colorItemBg: colorBgContainer,
        itemBg: colorBgContainer,
        colorItemBgHover: colorBgTextHover,
        itemHoverBg: colorBgTextHover,
        colorItemBgActive: colorFillContent,
        itemActiveBg: controlItemBgActive,
        colorSubItemBg: colorFillAlter,
        subMenuItemBg: colorFillAlter,
        colorItemBgSelected: controlItemBgActive,
        itemSelectedBg: controlItemBgActive,
        colorItemBgSelectedHorizontal: "transparent",
        horizontalItemSelectedBg: "transparent",
        colorActiveBarWidth: 0,
        activeBarWidth: 0,
        colorActiveBarHeight: lineWidthBold,
        activeBarHeight: lineWidthBold,
        colorActiveBarBorderSize: lineWidth,
        activeBarBorderWidth: lineWidth,
        // Disabled
        colorItemTextDisabled: colorTextDisabled,
        itemDisabledColor: colorTextDisabled,
        // Danger
        colorDangerItemText: colorError,
        dangerItemColor: colorError,
        colorDangerItemTextHover: colorError,
        dangerItemHoverColor: colorError,
        colorDangerItemTextSelected: colorError,
        dangerItemSelectedColor: colorError,
        colorDangerItemBgActive: colorErrorBg,
        dangerItemActiveBg: colorErrorBg,
        colorDangerItemBgSelected: colorErrorBg,
        dangerItemSelectedBg: colorErrorBg,
        itemMarginInline: token.marginXXS,
        horizontalItemBorderRadius: 0,
        horizontalItemHoverBg: "transparent",
        itemHeight: controlHeightLG,
        groupTitleLineHeight: lineHeight,
        collapsedWidth: controlHeightLG * 2,
        popupBg: colorBgElevated,
        itemMarginBlock: marginXXS,
        itemPaddingInline: padding,
        horizontalLineHeight: `${controlHeightLG * 1.15}px`,
        iconSize: fontSize,
        iconMarginInlineEnd: controlHeightSM - fontSize,
        collapsedIconSize: fontSizeLG,
        groupTitleFontSize: fontSize,
        // Disabled
        darkItemDisabledColor: new TinyColor(colorTextLightSolid).setAlpha(0.25).toRgbString(),
        // Dark
        darkItemColor: colorTextDark,
        darkDangerItemColor: colorError,
        darkItemBg: "#001529",
        darkSubMenuItemBg: "#000c17",
        darkItemSelectedColor: colorTextLightSolid,
        darkItemSelectedBg: colorPrimary,
        darkDangerItemSelectedBg: colorError,
        darkItemHoverBg: "transparent",
        darkGroupTitleColor: colorTextDark,
        darkItemHoverColor: colorTextLightSolid,
        darkDangerItemHoverColor: colorErrorHover,
        darkDangerItemSelectedColor: colorTextLightSolid,
        darkDangerItemActiveBg: colorError
      };
    },
    {
      deprecatedTokens: [
        ["colorGroupTitle", "groupTitleColor"],
        ["radiusItem", "itemBorderRadius"],
        ["radiusSubMenuItem", "subMenuItemBorderRadius"],
        ["colorItemText", "itemColor"],
        ["colorItemTextHover", "itemHoverColor"],
        ["colorItemTextHoverHorizontal", "horizontalItemHoverColor"],
        ["colorItemTextSelected", "itemSelectedColor"],
        ["colorItemTextSelectedHorizontal", "horizontalItemSelectedColor"],
        ["colorItemTextDisabled", "itemDisabledColor"],
        ["colorDangerItemText", "dangerItemColor"],
        ["colorDangerItemTextHover", "dangerItemHoverColor"],
        ["colorDangerItemTextSelected", "dangerItemSelectedColor"],
        ["colorDangerItemBgActive", "dangerItemActiveBg"],
        ["colorDangerItemBgSelected", "dangerItemSelectedBg"],
        ["colorItemBg", "itemBg"],
        ["colorItemBgHover", "itemHoverBg"],
        ["colorSubItemBg", "subMenuItemBg"],
        ["colorItemBgActive", "itemActiveBg"],
        ["colorItemBgSelectedHorizontal", "horizontalItemSelectedBg"],
        ["colorActiveBarWidth", "activeBarWidth"],
        ["colorActiveBarHeight", "activeBarHeight"],
        ["colorActiveBarBorderSize", "activeBarBorderWidth"],
        ["colorItemBgSelected", "itemSelectedBg"]
      ]
    }
  );
  return useOriginHook(prefixCls);
};

const InternalMenu = forwardRef((props, ref) => {
  const override = React.useContext(OverrideContext);
  const overrideObj = override || {};
  const { getPrefixCls, getPopupContainer, menu } = React.useContext(ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    theme = "light",
    expandIcon,
    _internalDisableMenuItemTitleTooltip,
    inlineCollapsed,
    siderCollapsed,
    items,
    children,
    rootClassName,
    mode,
    selectable,
    onClick,
    overflowedIndicatorPopupClassName,
    ...restProps
  } = props;
  const passedProps = omit(restProps, ["collapsedWidth"]);
  const mergedChildren = useItems(items) || children;
  overrideObj.validator?.({ mode });
  const onItemClick = useEvent((...args) => {
    onClick?.(...args);
    overrideObj.onClick?.();
  });
  const mergedMode = overrideObj.mode || mode;
  const mergedSelectable = selectable ?? overrideObj.selectable;
  const mergedInlineCollapsed = React.useMemo(() => {
    if (siderCollapsed !== void 0) {
      return siderCollapsed;
    }
    return inlineCollapsed;
  }, [inlineCollapsed, siderCollapsed]);
  const defaultMotions = {
    horizontal: { motionName: `${rootPrefixCls}-slide-up` },
    inline: initCollapseMotion(rootPrefixCls),
    other: { motionName: `${rootPrefixCls}-zoom-big` }
  };
  const prefixCls = getPrefixCls("menu", customizePrefixCls || overrideObj.prefixCls);
  const [wrapSSR, hashId] = useStyle$b(prefixCls, !override);
  const menuClassName = classNames(`${prefixCls}-${theme}`, menu?.className, className);
  let mergedExpandIcon;
  if (typeof expandIcon === "function") {
    mergedExpandIcon = expandIcon;
  } else if (expandIcon === null || expandIcon === false) {
    mergedExpandIcon = null;
  } else if (overrideObj.expandIcon === null || overrideObj.expandIcon === false) {
    mergedExpandIcon = null;
  } else {
    const beClone = expandIcon ?? overrideObj.expandIcon;
    mergedExpandIcon = cloneElement(beClone, {
      className: classNames(
        `${prefixCls}-submenu-expand-icon`,
        isValidElement(beClone) ? beClone.props?.className : ""
      )
    });
  }
  const contextValue = React.useMemo(
    () => ({
      prefixCls,
      inlineCollapsed: mergedInlineCollapsed || false,
      firstLevel: true,
      theme,
      mode: mergedMode,
      disableMenuItemTitleTooltip: _internalDisableMenuItemTitleTooltip
    }),
    [prefixCls, mergedInlineCollapsed, _internalDisableMenuItemTitleTooltip, theme]
  );
  return wrapSSR(
    /* @__PURE__ */ jsx(OverrideContext.Provider, { value: null, children: /* @__PURE__ */ jsx(MenuContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(
      RcMenu,
      {
        getPopupContainer,
        overflowedIndicator: /* @__PURE__ */ jsx(MoreHorizIcon, {}),
        overflowedIndicatorPopupClassName: classNames(
          prefixCls,
          `${prefixCls}-${theme}`,
          overflowedIndicatorPopupClassName
        ),
        mode: mergedMode,
        selectable: mergedSelectable,
        onClick: onItemClick,
        ...passedProps,
        inlineCollapsed: mergedInlineCollapsed,
        style: { ...menu?.style, ...style },
        className: menuClassName,
        prefixCls,
        direction: "ltr",
        defaultMotions,
        expandIcon: mergedExpandIcon,
        ref,
        rootClassName: classNames(rootClassName, hashId),
        children: mergedChildren
      }
    ) }) })
  );
});

const Menu = forwardRef((props, ref) => {
  const menuRef = useRef(null);
  const context = React.useContext(SiderContext);
  useImperativeHandle(ref, () => ({
    menu: menuRef.current,
    focus: (options) => {
      menuRef.current?.focus(options);
    }
  }));
  return /* @__PURE__ */ jsx(InternalMenu, { ref: menuRef, ...props, ...context });
});
Menu.Item = MenuItem;
Menu.SubMenu = SubMenu;
Menu.Divider = MenuDivider;
Menu.ItemGroup = ItemGroup;

function isThenable(thing) {
  return !!(thing && thing.then);
}
const ActionButton = (props) => {
  const {
    children,
    buttonProps,
    close,
    autoFocus,
    emitEvent,
    isSilent,
    quitOnNullishReturnValue,
    actionFn
  } = props;
  const clickedRef = React.useRef(false);
  const buttonRef = React.useRef(null);
  const [loading, setLoading] = useState(false);
  const onInternalClose = (...args) => {
    close?.(...args);
  };
  React.useEffect(() => {
    let timeoutId = null;
    if (autoFocus) {
      timeoutId = setTimeout(() => {
        buttonRef.current?.focus();
      });
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);
  const handlePromiseOnOk = (returnValueOfOnOk) => {
    if (!isThenable(returnValueOfOnOk)) {
      return;
    }
    setLoading(true);
    returnValueOfOnOk.then(
      (...args) => {
        setLoading(false, true);
        onInternalClose(...args);
        clickedRef.current = false;
      },
      (e) => {
        setLoading(false, true);
        clickedRef.current = false;
        if (isSilent?.()) {
          return;
        }
        return Promise.reject(e);
      }
    );
  };
  const onClick = (e) => {
    if (clickedRef.current) {
      return;
    }
    clickedRef.current = true;
    if (!actionFn) {
      onInternalClose();
      return;
    }
    let returnValueOfOnOk;
    if (emitEvent) {
      returnValueOfOnOk = actionFn(e);
      if (quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
        clickedRef.current = false;
        onInternalClose(e);
        return;
      }
    } else if (actionFn.length) {
      returnValueOfOnOk = actionFn(close);
      clickedRef.current = false;
    } else {
      returnValueOfOnOk = actionFn();
      if (!returnValueOfOnOk) {
        onInternalClose();
        return;
      }
    }
    handlePromiseOnOk(returnValueOfOnOk);
  };
  return /* @__PURE__ */ jsx(
    LoadingButton,
    {
      onClick,
      loading,
      ...buttonProps,
      ref: buttonRef,
      children
    }
  );
};

const ModalContext = React__default.createContext({});
const { Provider: ModalContextProvider } = ModalContext;

const ConfirmCancelBtn = () => {
  const {
    autoFocusButton,
    cancelButtonProps,
    cancelTextLocale,
    isSilent,
    mergedOkCancel,
    close,
    onCancel,
    onConfirm
  } = useContext(ModalContext);
  return mergedOkCancel ? /* @__PURE__ */ jsx(
    ActionButton,
    {
      isSilent,
      actionFn: onCancel,
      close: (...args) => {
        close?.(...args);
        onConfirm?.(false);
      },
      autoFocus: autoFocusButton === "cancel",
      buttonProps: cancelButtonProps,
      children: cancelTextLocale
    }
  ) : null;
};

const ConfirmOkBtn = () => {
  const {
    autoFocusButton,
    close,
    isSilent,
    okButtonProps,
    okTextLocale,
    onConfirm,
    onOk
  } = useContext(ModalContext);
  return /* @__PURE__ */ jsx(
    ActionButton,
    {
      isSilent,
      actionFn: onOk,
      close: (...args) => {
        close?.(...args);
        onConfirm?.(true);
      },
      autoFocus: autoFocusButton === "ok",
      buttonProps: okButtonProps,
      children: okTextLocale
    }
  );
};

const canUseDocElement = () => canUseDom() && window.document.documentElement;

const NormalCancelBtn = () => {
  const { cancelButtonProps, cancelTextLocale, onCancel } = useContext(ModalContext);
  return /* @__PURE__ */ jsx(Button$1, { onClick: onCancel, ...cancelButtonProps, children: cancelTextLocale });
};

const NormalOkBtn = () => {
  const { confirmLoading, okButtonProps, okTextLocale, onOk } = useContext(ModalContext);
  return /* @__PURE__ */ jsx(
    LoadingButton,
    {
      loading: confirmLoading,
      onClick: onOk,
      ...okButtonProps,
      children: okTextLocale
    }
  );
};

function renderCloseIcon(prefixCls, closeIcon) {
  return /* @__PURE__ */ jsx("span", { className: `${prefixCls}-close-x`, children: closeIcon || /* @__PURE__ */ jsx(CloseIcon, { className: `${prefixCls}-close-icon` }) });
}
const Footer = (props) => {
  const {
    okText,
    cancelText,
    confirmLoading,
    onOk,
    onCancel,
    okButtonProps,
    cancelButtonProps,
    footer
  } = props;
  const [locale] = useLocale("Modal", getConfirmLocale());
  const okTextLocale = okText || locale?.okText;
  const cancelTextLocale = cancelText || locale?.cancelText;
  const btnCtxValue = {
    confirmLoading,
    okButtonProps,
    cancelButtonProps,
    okTextLocale,
    cancelTextLocale,
    onOk,
    onCancel
  };
  const btnCtxValueMemo = React__default.useMemo(() => btnCtxValue, [...Object.values(btnCtxValue)]);
  let footerNode;
  if (typeof footer === "function" || typeof footer === "undefined") {
    footerNode = /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(NormalCancelBtn, {}),
      /* @__PURE__ */ jsx(NormalOkBtn, {})
    ] });
    if (typeof footer === "function") {
      footerNode = footer(footerNode, {
        OkBtn: NormalOkBtn,
        CancelBtn: NormalCancelBtn
      });
    }
    footerNode = /* @__PURE__ */ jsx(ModalContextProvider, { value: btnCtxValueMemo, children: footerNode });
  } else {
    footerNode = footer;
  }
  return /* @__PURE__ */ jsx(DisabledContextProvider, { disabled: false, children: footerNode });
};

function box(position) {
  return {
    position,
    inset: 0
  };
}
const genModalMaskStyle = (token) => {
  const { componentCls, ipassCls } = token;
  return [
    {
      [`${componentCls}-root`]: {
        [`${componentCls}${ipassCls}-zoom-enter, ${componentCls}${ipassCls}-zoom-appear`]: {
          // reset scale avoid mousePosition bug
          transform: "none",
          opacity: 0,
          animationDuration: token.motionDurationSlow,
          userSelect: "none"
        },
        [`${componentCls}${ipassCls}-zoom-leave ${componentCls}-content`]: {
          pointerEvents: "none"
        },
        [`${componentCls}-mask`]: {
          ...box("fixed"),
          zIndex: token.zIndexPopupBase,
          height: "100%",
          backgroundColor: token.colorBgMask,
          pointerEvents: "none",
          [`${componentCls}-hidden`]: {
            display: "none"
          }
        },
        [`${componentCls}-wrap`]: {
          ...box("fixed"),
          zIndex: token.zIndexPopupBase,
          overflow: "auto",
          outline: 0,
          WebkitOverflowScrolling: "touch",
          // Note: Firefox not support `:has` yet
          [`&:has(${componentCls}${ipassCls}-zoom-enter), &:has(${componentCls}${ipassCls}-zoom-appear)`]: {
            pointerEvents: "none"
          }
        }
      }
    },
    { [`${componentCls}-root`]: initFadeMotion(token) }
  ];
};
const genModalStyle = (token) => {
  const { componentCls } = token;
  return [
    // ======================== Root =========================
    {
      [`${componentCls}-root`]: {
        [`${componentCls}-centered`]: {
          textAlign: "center",
          "&::before": {
            display: "inline-block",
            width: 0,
            height: "100%",
            verticalAlign: "middle",
            content: '""'
          },
          [componentCls]: {
            top: 0,
            display: "inline-block",
            paddingBottom: 0,
            textAlign: "start",
            verticalAlign: "middle"
          }
        },
        [`@media (max-width: ${token.screenSMMax})`]: {
          [componentCls]: {
            maxWidth: "calc(100vw - 16px)",
            margin: `${token.marginXS} auto`
          },
          [`${componentCls}-centered`]: {
            [componentCls]: {
              flex: 1
            }
          }
        }
      }
    },
    // ======================== Modal ========================
    {
      [componentCls]: {
        ...resetComponent(token),
        pointerEvents: "none",
        position: "relative",
        top: 100,
        width: "auto",
        maxWidth: `calc(100vw - ${token.margin * 2}px)`,
        margin: "0 auto",
        paddingBottom: token.paddingLG,
        [`${componentCls}-title`]: {
          margin: 0,
          color: token.titleColor,
          fontWeight: token.fontWeightStrong,
          fontSize: token.titleFontSize,
          lineHeight: token.titleLineHeight,
          wordWrap: "break-word"
        },
        [`${componentCls}-content`]: {
          position: "relative",
          backgroundColor: token.contentBg,
          backgroundClip: "padding-box",
          border: 0,
          borderRadius: token.borderRadiusLG,
          boxShadow: token.boxShadow,
          pointerEvents: "auto",
          padding: `${token.paddingMD}px ${token.paddingContentHorizontalLG}px`
        },
        [`${componentCls}-close`]: {
          position: "absolute",
          top: (token.modalHeaderHeight - token.modalCloseBtnSize) / 2,
          insetInlineEnd: (token.modalHeaderHeight - token.modalCloseBtnSize) / 2,
          zIndex: token.zIndexPopupBase + 10,
          padding: 0,
          color: token.modalCloseIconColor,
          fontWeight: token.fontWeightStrong,
          lineHeight: 1,
          textDecoration: "none",
          background: "transparent",
          borderRadius: token.borderRadiusSM,
          width: token.modalCloseBtnSize,
          height: token.modalCloseBtnSize,
          border: 0,
          outline: 0,
          cursor: "pointer",
          transition: `color ${token.motionDurationMid}, background-color ${token.motionDurationMid}`,
          "&-x": {
            display: "flex",
            fontSize: token.fontSizeLG,
            fontStyle: "normal",
            lineHeight: `${token.modalCloseBtnSize}px`,
            justifyContent: "center",
            textTransform: "none",
            textRendering: "auto"
          },
          "&:hover": {
            color: token.modalIconHoverColor,
            backgroundColor: token.wireframe ? "transparent" : token.colorFillContent,
            textDecoration: "none"
          },
          "&:active": {
            backgroundColor: token.wireframe ? "transparent" : token.colorFillContentHover
          },
          ...genFocusStyle(token)
        },
        [`${componentCls}-header`]: {
          color: token.colorText,
          background: token.headerBg,
          borderRadius: `${token.borderRadiusLG}px ${token.borderRadiusLG}px 0 0`,
          marginBottom: token.marginXS
        },
        [`${componentCls}-body`]: {
          fontSize: token.fontSize,
          lineHeight: token.lineHeight,
          wordWrap: "break-word"
        },
        [`${componentCls}-footer`]: {
          textAlign: "end",
          background: token.footerBg,
          marginTop: token.marginSM,
          [`${token.ipassCls}-btn + ${token.ipassCls}-btn:not(${token.ipassCls}-dropdown-trigger)`]: {
            marginBottom: 0,
            marginInlineStart: token.marginXS
          }
        },
        [`${componentCls}-open`]: {
          overflow: "hidden"
        }
      }
    },
    // ======================== Pure =========================
    {
      [`${componentCls}-pure-panel`]: {
        top: "auto",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        [`${componentCls}-content,
          ${componentCls}-body,
          ${componentCls}-confirm-body-wrapper`]: {
          display: "flex",
          flexDirection: "column",
          flex: "auto"
        },
        [`${componentCls}-confirm-body`]: {
          marginBottom: "auto"
        }
      }
    }
  ];
};
const genWireframeStyle$1 = (token) => {
  const { componentCls, ipassCls } = token;
  const confirmComponentCls = `${componentCls}-confirm`;
  return {
    [componentCls]: {
      [`${componentCls}-content`]: {
        padding: 0
      },
      [`${componentCls}-header`]: {
        padding: token.modalHeaderPadding,
        borderBottom: `${token.modalHeaderBorderWidth}px ${token.modalHeaderBorderStyle} ${token.modalHeaderBorderColorSplit}`,
        marginBottom: 0
      },
      [`${componentCls}-body`]: {
        padding: token.modalBodyPadding
      },
      [`${componentCls}-footer`]: {
        padding: `${token.modalFooterPaddingVertical}px ${token.modalFooterPaddingHorizontal}px`,
        borderTop: `${token.modalFooterBorderWidth}px ${token.modalFooterBorderStyle} ${token.modalFooterBorderColorSplit}`,
        borderRadius: `0 0 ${token.borderRadiusLG}px ${token.borderRadiusLG}px`,
        marginTop: 0
      }
    },
    [confirmComponentCls]: {
      [`${ipassCls}-modal-body`]: {
        padding: `${token.padding * 2}px ${token.padding * 2}px ${token.paddingLG}px`
      },
      [`${confirmComponentCls}-body`]: {
        [`> ${token.iconCls}`]: {
          marginInlineEnd: token.margin,
          // `content` after `icon` should set marginLeft
          [`+ ${confirmComponentCls}-title + ${confirmComponentCls}-content`]: {
            marginInlineStart: token.modalConfirmIconSize + token.margin
          }
        }
      },
      [`${confirmComponentCls}-btns`]: {
        marginTop: token.marginLG
      }
    }
  };
};
const prepareToken$1 = (token) => {
  const headerPaddingVertical = token.padding;
  const headerFontSize = token.fontSizeHeading5;
  const headerLineHeight = token.lineHeightHeading5;
  const modalToken = merge(token, {
    modalBodyPadding: token.paddingLG,
    modalHeaderPadding: `${headerPaddingVertical}px ${token.paddingLG}px`,
    modalHeaderBorderWidth: token.lineWidth,
    modalHeaderBorderStyle: token.lineType,
    modalHeaderBorderColorSplit: token.colorSplit,
    modalHeaderHeight: headerLineHeight * headerFontSize + headerPaddingVertical * 2,
    modalFooterBorderColorSplit: token.colorSplit,
    modalFooterBorderStyle: token.lineType,
    modalFooterPaddingVertical: token.paddingXS,
    modalFooterPaddingHorizontal: token.padding,
    modalFooterBorderWidth: token.lineWidth,
    modalIconHoverColor: token.colorIconHover,
    modalCloseIconColor: token.colorIcon,
    modalCloseBtnSize: token.fontSize * token.lineHeight,
    modalConfirmIconSize: token.fontSize * token.lineHeight
  });
  return modalToken;
};
const prepareComponentToken$1 = (token) => ({
  footerBg: "transparent",
  headerBg: token.colorBgElevated,
  titleLineHeight: token.lineHeightHeading5,
  titleFontSize: token.fontSizeHeading5,
  contentBg: token.colorBgElevated,
  titleColor: token.colorTextHeading
});
const useStyle$a = genComponentStyleHook(
  "Modal",
  (token) => {
    const modalToken = prepareToken$1(token);
    return [
      genModalStyle(modalToken),
      genModalMaskStyle(modalToken),
      token.wireframe && genWireframeStyle$1(modalToken),
      initZoomMotion(modalToken, "zoom")
    ];
  },
  prepareComponentToken$1
);

let mousePosition;
const getClickPosition = (e) => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  };
  setTimeout(() => {
    mousePosition = null;
  }, 100);
};
if (canUseDocElement()) {
  document.documentElement.addEventListener("click", getClickPosition, true);
}
const Modal$1 = (props) => {
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    modal
  } = React.useContext(ConfigContext);
  const handleCancel = (e) => {
    const { onCancel } = props;
    onCancel?.(e);
  };
  const handleOk = (e) => {
    const { onOk } = props;
    onOk?.(e);
  };
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    open,
    wrapClassName,
    centered,
    getContainer,
    closeIcon,
    closable,
    focusTriggerAfterClose = true,
    style,
    // Deprecated
    visible,
    width = 520,
    footer,
    ...restProps
  } = props;
  const prefixCls = getPrefixCls("modal", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const [wrapSSR, hashId] = useStyle$a(prefixCls);
  const wrapClassNameExtended = classNames(wrapClassName, {
    [`${prefixCls}-centered`]: !!centered
  });
  const dialogFooter = footer !== null && /* @__PURE__ */ jsx(Footer, { ...props, onOk: handleOk, onCancel: handleCancel });
  const [mergedClosable, mergedCloseIcon] = useClosable(
    closable,
    closeIcon,
    (icon) => renderCloseIcon(prefixCls, icon),
    /* @__PURE__ */ jsx(CloseIcon, { className: `${prefixCls}-close-icon` }),
    true
  );
  return wrapSSR(
    /* @__PURE__ */ jsx(NoCompactStyle, { children: /* @__PURE__ */ jsx(NoFormStyle, { status: true, override: true, children: /* @__PURE__ */ jsx(
      Dialog,
      {
        width,
        ...restProps,
        getContainer: getContainer === void 0 ? getContextPopupContainer : getContainer,
        prefixCls,
        rootClassName: classNames(hashId, rootClassName),
        wrapClassName: wrapClassNameExtended,
        footer: dialogFooter,
        visible: open ?? visible,
        mousePosition: restProps.mousePosition ?? mousePosition,
        onClose: handleCancel,
        closable: mergedClosable,
        closeIcon: mergedCloseIcon,
        focusTriggerAfterClose,
        transitionName: getTransitionName(rootPrefixCls, "zoom", props.transitionName),
        maskTransitionName: getTransitionName(rootPrefixCls, "fade", props.maskTransitionName),
        className: classNames(hashId, className, modal?.className),
        style: { ...modal?.style, ...style }
      }
    ) }) })
  );
};

const genModalConfirmStyle = (token) => {
  const {
    componentCls,
    titleFontSize,
    titleLineHeight,
    modalConfirmIconSize,
    fontSize,
    lineHeight
  } = token;
  const confirmComponentCls = `${componentCls}-confirm`;
  const titleHeight = Math.round(titleFontSize * titleLineHeight);
  const contentHeight = Math.round(fontSize * lineHeight);
  return {
    [confirmComponentCls]: {
      [`${token.ipassCls}-modal-header`]: {
        display: "none"
      },
      [`${confirmComponentCls}-body-wrapper`]: {
        ...clearFix()
      },
      // ====================== Body ======================
      [`${confirmComponentCls}-body`]: {
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "start",
        [`> ${token.iconCls}`]: {
          flex: "none",
          fontSize: modalConfirmIconSize,
          marginInlineEnd: token.marginSM,
          marginTop: (contentHeight - modalConfirmIconSize) / 2
        },
        [`&-has-title > ${token.iconCls}`]: {
          marginTop: (titleHeight - modalConfirmIconSize) / 2
        }
      },
      [`${confirmComponentCls}-paragraph`]: {
        display: "flex",
        flexDirection: "column",
        flex: "auto",
        rowGap: token.marginXS
      },
      [`${confirmComponentCls}-title`]: {
        color: token.colorTextHeading,
        fontWeight: token.fontWeightStrong,
        fontSize: titleFontSize,
        lineHeight: titleLineHeight
      },
      [`${confirmComponentCls}-content`]: {
        color: token.colorText,
        fontSize,
        lineHeight
      },
      // ===================== Footer =====================
      [`${confirmComponentCls}-btns`]: {
        textAlign: "end",
        marginTop: token.marginSM,
        [`${token.ipassCls}-btn + ${token.ipassCls}-btn`]: {
          marginBottom: 0,
          marginInlineStart: token.marginXS
        }
      }
    },
    [`${confirmComponentCls}-error ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorError
    },
    [`${confirmComponentCls}-warning ${confirmComponentCls}-body > ${token.iconCls},
        ${confirmComponentCls}-confirm ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorWarning
    },
    [`${confirmComponentCls}-info ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorInfo
    },
    [`${confirmComponentCls}-success ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorSuccess
    }
  };
};
const ConfirmCmp = genSubStyleComponent(
  ["Modal", "confirm"],
  (token) => {
    const modalToken = prepareToken$1(token);
    return [genModalConfirmStyle(modalToken)];
  },
  prepareComponentToken$1,
  {
    // confirm is weak than modal since no conflict here
    order: -1e3
  }
);

function ConfirmContent(props) {
  const {
    prefixCls,
    icon,
    okText,
    cancelText,
    confirmPrefixCls,
    type,
    okCancel,
    footer,
    // Legacy for static function usage
    locale: staticLocale,
    ...resetProps
  } = props;
  let mergedIcon = icon;
  if (!icon && icon !== null) {
    switch (type) {
      case "info":
        mergedIcon = /* @__PURE__ */ jsx(InfoIcon, {});
        break;
      case "success":
        mergedIcon = /* @__PURE__ */ jsx(CheckCircleOutlineIcon, {});
        break;
      case "error":
        mergedIcon = /* @__PURE__ */ jsx(CloseIcon, {});
        break;
      default:
        mergedIcon = /* @__PURE__ */ jsx(ErrorOutlineIcon, {});
    }
  }
  const mergedOkCancel = okCancel ?? type === "confirm";
  const autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || "ok";
  const [locale] = useLocale("Modal");
  const mergedLocale = staticLocale || locale;
  const okTextLocale = okText || (mergedOkCancel ? mergedLocale?.okText : mergedLocale?.justOkText);
  const cancelTextLocale = cancelText || mergedLocale?.cancelText;
  const btnCtxValue = {
    autoFocusButton,
    cancelTextLocale,
    okTextLocale,
    mergedOkCancel,
    ...resetProps
  };
  const btnCtxValueMemo = React.useMemo(() => btnCtxValue, [...Object.values(btnCtxValue)]);
  const footerOriginNode = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ConfirmCancelBtn, {}),
    /* @__PURE__ */ jsx(ConfirmOkBtn, {})
  ] });
  const hasTitle = props.title !== void 0 && props.title !== null;
  const bodyCls = `${confirmPrefixCls}-body`;
  return /* @__PURE__ */ jsxs("div", { className: `${confirmPrefixCls}-body-wrapper`, children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: classNames(bodyCls, {
          [`${bodyCls}-has-title`]: hasTitle
        }),
        children: [
          mergedIcon,
          /* @__PURE__ */ jsxs("div", { className: `${confirmPrefixCls}-paragraph`, children: [
            hasTitle && /* @__PURE__ */ jsx("span", { className: `${confirmPrefixCls}-title`, children: props.title }),
            /* @__PURE__ */ jsx("div", { className: `${confirmPrefixCls}-content`, children: props.content })
          ] })
        ]
      }
    ),
    footer === void 0 || typeof footer === "function" ? /* @__PURE__ */ jsx(ModalContextProvider, { value: btnCtxValueMemo, children: /* @__PURE__ */ jsx("div", { className: `${confirmPrefixCls}-btns`, children: typeof footer === "function" ? footer(footerOriginNode, {
      OkBtn: ConfirmOkBtn,
      CancelBtn: ConfirmCancelBtn
    }) : footerOriginNode }) }) : footer,
    /* @__PURE__ */ jsx(ConfirmCmp, { prefixCls })
  ] });
}
const ConfirmDialog = (props) => {
  const {
    close,
    zIndex,
    afterClose,
    visible,
    open,
    keyboard,
    centered,
    getContainer,
    maskStyle,
    prefixCls,
    wrapClassName,
    rootPrefixCls,
    theme,
    bodyStyle,
    closable = false,
    closeIcon,
    modalRender,
    focusTriggerAfterClose,
    onConfirm
  } = props;
  const confirmPrefixCls = `${prefixCls}-confirm`;
  const width = props.width || 416;
  const style = props.style || {};
  const mask = props.mask === void 0 ? true : props.mask;
  const maskClosable = props.maskClosable === void 0 ? false : props.maskClosable;
  const classString = classNames(
    confirmPrefixCls,
    `${confirmPrefixCls}-${props.type}`,
    props.className
  );
  return /* @__PURE__ */ jsx(
    ConfigProvider,
    {
      prefixCls: rootPrefixCls,
      theme,
      children: /* @__PURE__ */ jsx(
        Modal$1,
        {
          prefixCls,
          className: classString,
          wrapClassName: classNames(
            { [`${confirmPrefixCls}-centered`]: !!props.centered },
            wrapClassName
          ),
          onCancel: () => {
            close?.({ triggerCancel: true });
            onConfirm?.(false);
          },
          open,
          title: "",
          footer: null,
          transitionName: getTransitionName(rootPrefixCls || "", "zoom", props.transitionName),
          maskTransitionName: getTransitionName(
            rootPrefixCls || "",
            "fade",
            props.maskTransitionName
          ),
          mask,
          maskClosable,
          maskStyle,
          style,
          bodyStyle,
          width,
          zIndex,
          afterClose,
          keyboard,
          centered,
          getContainer,
          closable,
          closeIcon,
          modalRender,
          focusTriggerAfterClose,
          children: /* @__PURE__ */ jsx(ConfirmContent, { ...props, confirmPrefixCls })
        }
      )
    }
  );
};

const destroyFns = [];

let defaultRootPrefixCls = "";
function getRootPrefixCls() {
  return defaultRootPrefixCls;
}
function confirm(config) {
  const container = document.createDocumentFragment();
  let currentConfig = { ...config, close, open: true };
  let timeoutId;
  function destroy(...args) {
    const triggerCancel = args.some((param) => param && param.triggerCancel);
    if (config.onCancel && triggerCancel) {
      config.onCancel(() => {
      }, ...args.slice(1));
    }
    for (let i = 0; i < destroyFns.length; i++) {
      const fn = destroyFns[i];
      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }
    unmount(container);
  }
  function render$1({
    okText,
    cancelText,
    prefixCls: customizePrefixCls,
    getContainer,
    ...props
  }) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      const runtimeLocale = getConfirmLocale();
      const { getPrefixCls, getTheme } = globalConfig();
      const rootPrefixCls = getPrefixCls(void 0, getRootPrefixCls());
      const prefixCls = customizePrefixCls || `${rootPrefixCls}-modal`;
      const theme = getTheme();
      let mergedGetContainer = getContainer;
      if (mergedGetContainer === false) {
        mergedGetContainer = void 0;
      }
      render(
        /* @__PURE__ */ jsx(
          ConfirmDialog,
          {
            ...props,
            getContainer: mergedGetContainer,
            prefixCls,
            rootPrefixCls,
            okText,
            locale: runtimeLocale,
            theme,
            cancelText: cancelText || runtimeLocale.cancelText
          }
        ),
        container
      );
    });
  }
  function close(...args) {
    currentConfig = {
      ...currentConfig,
      open: false,
      afterClose: () => {
        if (typeof config.afterClose === "function") {
          config.afterClose();
        }
        destroy.apply(
          // @ts-ignore
          this,
          args
        );
      }
    };
    if (currentConfig.visible) {
      delete currentConfig.visible;
    }
    render$1(currentConfig);
  }
  function update(configUpdate) {
    if (typeof configUpdate === "function") {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = {
        ...currentConfig,
        ...configUpdate
      };
    }
    render$1(currentConfig);
  }
  render$1(currentConfig);
  destroyFns.push(close);
  return {
    destroy: close,
    update
  };
}
function withWarn(props) {
  return {
    ...props,
    type: "warning"
  };
}
function withInfo(props) {
  return {
    ...props,
    type: "info"
  };
}
function withSuccess(props) {
  return {
    ...props,
    type: "success"
  };
}
function withError(props) {
  return {
    ...props,
    type: "error"
  };
}
function withConfirm(props) {
  return {
    ...props,
    type: "confirm"
  };
}
function modalGlobalConfig({ rootPrefixCls }) {
  defaultRootPrefixCls = rootPrefixCls;
}

const PurePanel$2 = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    closeIcon,
    closable,
    type,
    title,
    children,
    ...restProps
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const prefixCls = customizePrefixCls || getPrefixCls("modal");
  const [, hashId] = useStyle$a(prefixCls);
  const confirmPrefixCls = `${prefixCls}-confirm`;
  let additionalProps = {};
  if (type) {
    additionalProps = {
      closable: closable ?? false,
      title: "",
      footer: "",
      children: /* @__PURE__ */ jsx(
        ConfirmContent,
        {
          ...props,
          prefixCls,
          confirmPrefixCls,
          rootPrefixCls,
          content: children
        }
      )
    };
  } else {
    additionalProps = {
      closable: closable ?? true,
      title,
      footer: props.footer === void 0 ? /* @__PURE__ */ jsx(Footer, { ...props }) : props.footer,
      children
    };
  }
  return /* @__PURE__ */ jsx(
    Panel,
    {
      prefixCls,
      className: classNames(
        hashId,
        `${prefixCls}-pure-panel`,
        type && confirmPrefixCls,
        type && `${confirmPrefixCls}-${type}`,
        className
      ),
      ...restProps,
      closeIcon: renderCloseIcon(prefixCls, closeIcon),
      closable,
      ...additionalProps
    }
  );
};
const PurePanel$3 = withPureRenderTheme(PurePanel$2);

function usePatchElement() {
  const [elements, setElements] = React.useState([]);
  const patchElement = React.useCallback((element) => {
    setElements((originElements) => [...originElements, element]);
    return () => {
      setElements((originElements) => originElements.filter((ele) => ele !== element));
    };
  }, []);
  return [elements, patchElement];
}

const HookModal = ({ afterClose: hookAfterClose, config, ...restProps }, ref) => {
  const [open, setOpen] = React.useState(true);
  const [innerConfig, setInnerConfig] = React.useState(config);
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("modal");
  const rootPrefixCls = getPrefixCls();
  const afterClose = () => {
    hookAfterClose();
    innerConfig.afterClose?.();
  };
  const close = (...args) => {
    setOpen(false);
    const triggerCancel = args.some((param) => param && param.triggerCancel);
    if (innerConfig.onCancel && triggerCancel) {
      innerConfig.onCancel(() => {
      }, ...args.slice(1));
    }
  };
  React.useImperativeHandle(ref, () => ({
    destroy: close,
    update: (newConfig) => {
      setInnerConfig((originConfig) => ({
        ...originConfig,
        ...newConfig
      }));
    }
  }));
  const mergedOkCancel = innerConfig.okCancel ?? innerConfig.type === "confirm";
  const [contextLocale] = useLocale("Modal", localeValues.Modal);
  return /* @__PURE__ */ jsx(
    ConfirmDialog,
    {
      prefixCls,
      rootPrefixCls,
      ...innerConfig,
      close,
      open,
      afterClose,
      okText: innerConfig.okText || (mergedOkCancel ? contextLocale?.okText : contextLocale?.justOkText),
      cancelText: innerConfig.cancelText || contextLocale?.cancelText,
      ...restProps
    }
  );
};
const HookModal$1 = React.forwardRef(HookModal);

let uuid = 0;
const ElementsHolder = React.memo(
  React.forwardRef((_props, ref) => {
    const [elements, patchElement] = usePatchElement();
    React.useImperativeHandle(
      ref,
      () => ({
        patchElement
      }),
      []
    );
    return /* @__PURE__ */ jsx(Fragment, { children: elements });
  })
);
function useModal() {
  const holderRef = React.useRef(null);
  const [actionQueue, setActionQueue] = React.useState([]);
  React.useEffect(() => {
    if (actionQueue.length) {
      const cloneQueue = [...actionQueue];
      cloneQueue.forEach((action) => {
        action();
      });
      setActionQueue([]);
    }
  }, [actionQueue]);
  const getConfirmFunc = React.useCallback(
    (withFunc) => function hookConfirm(config) {
      uuid += 1;
      const modalRef = React.createRef();
      let resolvePromise;
      const promise = new Promise((resolve) => {
        resolvePromise = resolve;
      });
      let silent = false;
      let closeFunc;
      const modal = /* @__PURE__ */ jsx(
        HookModal$1,
        {
          config: withFunc(config),
          ref: modalRef,
          afterClose: () => {
            closeFunc?.();
          },
          isSilent: () => silent,
          onConfirm: (confirmed) => {
            resolvePromise(confirmed);
          }
        },
        `modal-${uuid}`
      );
      closeFunc = holderRef.current?.patchElement(modal);
      if (closeFunc) {
        destroyFns.push(closeFunc);
      }
      const instance = {
        destroy: () => {
          function destroyAction() {
            modalRef.current?.destroy();
          }
          if (modalRef.current) {
            destroyAction();
          } else {
            setActionQueue((prev) => [...prev, destroyAction]);
          }
        },
        // @ts-ignore
        update: (newConfig) => {
          function updateAction() {
            modalRef.current?.update(newConfig);
          }
          if (modalRef.current) {
            updateAction();
          } else {
            setActionQueue((prev) => [...prev, updateAction]);
          }
        },
        then: (resolve) => {
          silent = true;
          return promise.then(resolve);
        }
      };
      return instance;
    },
    []
  );
  const fns = React.useMemo(
    () => ({
      info: getConfirmFunc(withInfo),
      success: getConfirmFunc(withSuccess),
      error: getConfirmFunc(withError),
      warning: getConfirmFunc(withWarn),
      confirm: getConfirmFunc(withConfirm)
    }),
    []
  );
  return [fns, /* @__PURE__ */ jsx(ElementsHolder, { ref: holderRef }, "modal-holder")];
}

function modalWarn(props) {
  return confirm(withWarn(props));
}
const Modal = Modal$1;
Modal.useModal = useModal;
Modal.info = function infoFn(props) {
  return confirm(withInfo(props));
};
Modal.success = function successFn(props) {
  return confirm(withSuccess(props));
};
Modal.error = function errorFn(props) {
  return confirm(withError(props));
};
Modal.warning = modalWarn;
Modal.warn = modalWarn;
Modal.confirm = function confirmFn(props) {
  return confirm(withConfirm(props));
};
Modal.destroyAll = function destroyAllFn() {
  while (destroyFns.length) {
    const close = destroyFns.pop();
    if (close) {
      close();
    }
  }
};
Modal.config = modalGlobalConfig;
Modal._InternalPanelDoNotUseOrYouWillBeFired = PurePanel$3;

const getRenderPropValue = (propValue) => {
  if (!propValue) {
    return null;
  }
  if (typeof propValue === "function") {
    return propValue();
  }
  return propValue;
};

const genBaseStyle$3 = (token) => {
  const {
    componentCls,
    popoverColor,
    minWidth,
    fontWeightStrong,
    popoverPadding,
    boxShadowSecondary,
    colorTextHeading,
    borderRadiusLG: borderRadius,
    zIndexPopup,
    marginXS,
    colorBgElevated,
    popoverBg
  } = token;
  return [
    {
      [componentCls]: {
        ...resetComponent(token),
        position: "absolute",
        top: 0,
        left: {
          _skip_check_: true,
          value: 0
        },
        zIndex: zIndexPopup,
        fontWeight: "normal",
        whiteSpace: "normal",
        textAlign: "start",
        cursor: "auto",
        userSelect: "text",
        transformOrigin: `var(--arrow-x, 50%) var(--arrow-y, 50%)`,
        "--ipass-arrow-background-color": colorBgElevated,
        "&-hidden": {
          display: "none"
        },
        [`${componentCls}-content`]: {
          position: "relative"
        },
        [`${componentCls}-inner`]: {
          backgroundColor: popoverBg,
          backgroundClip: "padding-box",
          borderRadius,
          boxShadow: boxShadowSecondary,
          padding: popoverPadding
        },
        [`${componentCls}-title`]: {
          minWidth,
          marginBottom: marginXS,
          color: colorTextHeading,
          fontWeight: fontWeightStrong
        },
        [`${componentCls}-inner-content`]: {
          color: popoverColor
        }
      }
    },
    // Arrow Style
    getArrowStyle(token, {
      colorBg: "var(--ipass-arrow-background-color)"
    }),
    // Pure Render
    {
      [`${componentCls}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: token.sizePopupArrow,
        display: "inline-block",
        [`${componentCls}-content`]: {
          display: "inline-block"
        }
      }
    }
  ];
};
const genColorStyle = (token) => {
  const { componentCls } = token;
  return {
    [componentCls]: PresetColors.map((colorKey) => {
      const lightColor = token[`${colorKey}6`];
      return {
        [`&${componentCls}-${colorKey}`]: {
          "--ipass-arrow-background-color": lightColor,
          [`${componentCls}-inner`]: {
            backgroundColor: lightColor
          },
          [`${componentCls}-arrow`]: {
            background: "transparent"
          }
        }
      };
    })
  };
};
const genWireframeStyle = (token) => {
  const {
    componentCls,
    lineWidth,
    lineType,
    colorSplit,
    paddingSM,
    controlHeight,
    fontSize,
    lineHeight,
    padding
  } = token;
  const titlePaddingBlockDist = controlHeight - Math.round(fontSize * lineHeight);
  const popoverTitlePaddingBlockTop = titlePaddingBlockDist / 2;
  const popoverTitlePaddingBlockBottom = titlePaddingBlockDist / 2 - lineWidth;
  const popoverPaddingHorizontal = padding;
  return {
    [componentCls]: {
      [`${componentCls}-inner`]: {
        padding: 0
      },
      [`${componentCls}-title`]: {
        margin: 0,
        padding: `${popoverTitlePaddingBlockTop}px ${popoverPaddingHorizontal}px ${popoverTitlePaddingBlockBottom}px`,
        borderBottom: `${lineWidth}px ${lineType} ${colorSplit}`
      },
      [`${componentCls}-inner-content`]: {
        padding: `${paddingSM}px ${popoverPaddingHorizontal}px`
      }
    }
  };
};
const useStyle$9 = genComponentStyleHook(
  "Popover",
  (token) => {
    const { colorBgElevated, colorText, wireframe } = token;
    const popoverToken = merge(token, {
      popoverPadding: 12,
      // Fixed Value
      popoverBg: colorBgElevated,
      popoverColor: colorText
    });
    return [
      genBaseStyle$3(popoverToken),
      genColorStyle(popoverToken),
      wireframe && genWireframeStyle(popoverToken),
      initZoomMotion(popoverToken, "zoom-big")
    ];
  },
  (token) => ({
    width: 177,
    minWidth: 177,
    zIndexPopup: token.zIndexPopupBase + 30
  }),
  {
    resetStyle: false,
    deprecatedTokens: [["width", "minWidth"]]
  }
);

const getOverlay = (prefixCls, title, content) => {
  if (!title && !content)
    return void 0;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    title && /* @__PURE__ */ jsx("div", { className: `${prefixCls}-title`, children: getRenderPropValue(title) }),
    /* @__PURE__ */ jsx("div", { className: `${prefixCls}-inner-content`, children: getRenderPropValue(content) })
  ] });
};
const RawPurePanel = (props) => {
  const {
    hashId,
    prefixCls,
    className,
    style,
    placement = "top",
    title,
    content,
    children
  } = props;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: classNames(
        hashId,
        prefixCls,
        `${prefixCls}-pure`,
        `${prefixCls}-placement-${placement}`,
        className
      ),
      style,
      children: [
        /* @__PURE__ */ jsx("div", { className: `${prefixCls}-arrow` }),
        /* @__PURE__ */ jsx(Popup, { ...props, className: hashId, prefixCls, children: children || getOverlay(prefixCls, title, content) })
      ]
    }
  );
};
const PurePanel$1 = (props) => {
  const { prefixCls: customizePrefixCls, ...restProps } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("popover", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$9(prefixCls);
  return wrapSSR(/* @__PURE__ */ jsx(RawPurePanel, { ...restProps, prefixCls, hashId }));
};

const Overlay = ({ title, content, prefixCls }) => /* @__PURE__ */ jsxs(Fragment, { children: [
  title && /* @__PURE__ */ jsx("div", { className: `${prefixCls}-title`, children: getRenderPropValue(title) }),
  /* @__PURE__ */ jsx("div", { className: `${prefixCls}-inner-content`, children: getRenderPropValue(content) })
] });
const Popover = React.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    title,
    content,
    overlayClassName,
    placement = "top",
    trigger = "hover",
    mouseEnterDelay = 0.1,
    mouseLeaveDelay = 0.1,
    overlayStyle = {},
    ...otherProps
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("popover", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$9(prefixCls);
  const rootPrefixCls = getPrefixCls();
  const overlayCls = classNames(overlayClassName, hashId);
  return wrapSSR(
    /* @__PURE__ */ jsx(
      Tooltip,
      {
        placement,
        trigger,
        mouseEnterDelay,
        mouseLeaveDelay,
        overlayStyle,
        ...otherProps,
        prefixCls,
        overlayClassName: overlayCls,
        ref,
        overlay: title || content ? /* @__PURE__ */ jsx(Overlay, { prefixCls, title, content }) : null,
        transitionName: getTransitionName(rootPrefixCls, "zoom-big", otherProps.transitionName),
        "data-popover-inject": true
      }
    )
  );
});
Popover._InternalPanelDoNotUseOrYouWillBeFired = PurePanel$1;

const NoFound = () => /* @__PURE__ */ jsxs("svg", { width: "252", height: "294", children: [
  /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("path", { d: "M0 .387h251.772v251.772H0z" }) }),
  /* @__PURE__ */ jsxs("g", { fill: "none", fillRule: "evenodd", children: [
    /* @__PURE__ */ jsxs("g", { transform: "translate(0 .012)", children: [
      /* @__PURE__ */ jsx("mask", { fill: "#fff" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M0 127.32v-2.095C0 56.279 55.892.387 124.838.387h2.096c68.946 0 124.838 55.892 124.838 124.838v2.096c0 68.946-55.892 124.838-124.838 124.838h-2.096C55.892 252.16 0 196.267 0 127.321",
          fill: "#E4EBF7",
          mask: "url(#b)"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M39.755 130.84a8.276 8.276 0 1 1-16.468-1.66 8.276 8.276 0 0 1 16.468 1.66",
        fill: "#FFF"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M36.975 134.297l10.482 5.943M48.373 146.508l-12.648 10.788",
        stroke: "#FFF",
        strokeWidth: "2"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M39.875 159.352a5.667 5.667 0 1 1-11.277-1.136 5.667 5.667 0 0 1 11.277 1.136M57.588 143.247a5.708 5.708 0 1 1-11.358-1.145 5.708 5.708 0 0 1 11.358 1.145M99.018 26.875l29.82-.014a4.587 4.587 0 1 0-.003-9.175l-29.82.013a4.587 4.587 0 1 0 .003 9.176M110.424 45.211l29.82-.013a4.588 4.588 0 0 0-.004-9.175l-29.82.013a4.587 4.587 0 1 0 .004 9.175",
        fill: "#FFF"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M112.798 26.861v-.002l15.784-.006a4.588 4.588 0 1 0 .003 9.175l-15.783.007v-.002a4.586 4.586 0 0 0-.004-9.172M184.523 135.668c-.553 5.485-5.447 9.483-10.931 8.93-5.485-.553-9.483-5.448-8.93-10.932.552-5.485 5.447-9.483 10.932-8.93 5.485.553 9.483 5.447 8.93 10.932",
        fill: "#FFF"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M179.26 141.75l12.64 7.167M193.006 156.477l-15.255 13.011",
        stroke: "#FFF",
        strokeWidth: "2"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M184.668 170.057a6.835 6.835 0 1 1-13.6-1.372 6.835 6.835 0 0 1 13.6 1.372M203.34 153.325a6.885 6.885 0 1 1-13.7-1.382 6.885 6.885 0 0 1 13.7 1.382",
        fill: "#FFF"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M151.931 192.324a2.222 2.222 0 1 1-4.444 0 2.222 2.222 0 0 1 4.444 0zM225.27 116.056a2.222 2.222 0 1 1-4.445 0 2.222 2.222 0 0 1 4.444 0zM216.38 151.08a2.223 2.223 0 1 1-4.446-.001 2.223 2.223 0 0 1 4.446 0zM176.917 107.636a2.223 2.223 0 1 1-4.445 0 2.223 2.223 0 0 1 4.445 0zM195.291 92.165a2.223 2.223 0 1 1-4.445 0 2.223 2.223 0 0 1 4.445 0zM202.058 180.711a2.223 2.223 0 1 1-4.446 0 2.223 2.223 0 0 1 4.446 0z",
        stroke: "#FFF",
        strokeWidth: "2"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        stroke: "#FFF",
        strokeWidth: "2",
        d: "M214.404 153.302l-1.912 20.184-10.928 5.99M173.661 174.792l-6.356 9.814h-11.36l-4.508 6.484M174.941 125.168v-15.804M220.824 117.25l-12.84 7.901-15.31-7.902V94.39"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M166.588 65.936h-3.951a4.756 4.756 0 0 1-4.743-4.742 4.756 4.756 0 0 1 4.743-4.743h3.951a4.756 4.756 0 0 1 4.743 4.743 4.756 4.756 0 0 1-4.743 4.742",
        fill: "#FFF"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M174.823 30.03c0-16.281 13.198-29.48 29.48-29.48 16.28 0 29.48 13.199 29.48 29.48 0 16.28-13.2 29.48-29.48 29.48-16.282 0-29.48-13.2-29.48-29.48",
        fill: "#1677ff"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M205.952 38.387c.5.5.785 1.142.785 1.928s-.286 1.465-.785 1.964c-.572.5-1.214.75-2 .75-.785 0-1.429-.285-1.929-.785-.572-.5-.82-1.143-.82-1.929s.248-1.428.82-1.928c.5-.5 1.144-.75 1.93-.75.785 0 1.462.25 1.999.75m4.285-19.463c1.428 1.249 2.143 2.963 2.143 5.142 0 1.712-.427 3.13-1.219 4.25-.067.096-.137.18-.218.265-.416.429-1.41 1.346-2.956 2.699a5.07 5.07 0 0 0-1.428 1.75 5.207 5.207 0 0 0-.536 2.357v.5h-4.107v-.5c0-1.357.215-2.536.714-3.5.464-.964 1.857-2.464 4.178-4.536l.43-.5c.643-.785.964-1.643.964-2.535 0-1.18-.358-2.108-1-2.785-.678-.68-1.643-1.001-2.858-1.001-1.536 0-2.642.464-3.357 1.43-.37.5-.621 1.135-.76 1.904a1.999 1.999 0 0 1-1.971 1.63h-.004c-1.277 0-2.257-1.183-1.98-2.43.337-1.518 1.02-2.78 2.073-3.784 1.536-1.5 3.607-2.25 6.25-2.25 2.32 0 4.214.607 5.642 1.894",
        fill: "#FFF"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M52.04 76.131s21.81 5.36 27.307 15.945c5.575 10.74-6.352 9.26-15.73 4.935-10.86-5.008-24.7-11.822-11.577-20.88",
        fill: "#FFB594"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M90.483 67.504l-.449 2.893c-.753.49-4.748-2.663-4.748-2.663l-1.645.748-1.346-5.684s6.815-4.589 8.917-5.018c2.452-.501 9.884.94 10.7 2.278 0 0 1.32.486-2.227.69-3.548.203-5.043.447-6.79 3.132-1.747 2.686-2.412 3.624-2.412 3.624",
        fill: "#FFC6A0"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M128.055 111.367c-2.627-7.724-6.15-13.18-8.917-15.478-3.5-2.906-9.34-2.225-11.366-4.187-1.27-1.231-3.215-1.197-3.215-1.197s-14.98-3.158-16.828-3.479c-2.37-.41-2.124-.714-6.054-1.405-1.57-1.907-2.917-1.122-2.917-1.122l-7.11-1.383c-.853-1.472-2.423-1.023-2.423-1.023l-2.468-.897c-1.645 9.976-7.74 13.796-7.74 13.796 1.795 1.122 15.703 8.3 15.703 8.3l5.107 37.11s-3.321 5.694 1.346 9.109c0 0 19.883-3.743 34.921-.329 0 0 3.047-2.546.972-8.806.523-3.01 1.394-8.263 1.736-11.622.385.772 2.019 1.918 3.14 3.477 0 0 9.407-7.365 11.052-14.012-.832-.723-1.598-1.585-2.267-2.453-.567-.736-.358-2.056-.765-2.717-.669-1.084-1.804-1.378-1.907-1.682",
        fill: "#FFF"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M101.09 289.998s4.295 2.041 7.354 1.021c2.821-.94 4.53.668 7.08 1.178 2.55.51 6.874 1.1 11.686-1.26-.103-5.51-6.889-3.98-11.96-6.713-2.563-1.38-3.784-4.722-3.598-8.799h-9.402s-1.392 10.52-1.16 14.573",
        fill: "#CBD1D1"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M101.067 289.826s2.428 1.271 6.759.653c3.058-.437 3.712.481 7.423 1.031 3.712.55 10.724-.069 11.823-.894.413 1.1-.343 2.063-.343 2.063s-1.512.603-4.812.824c-2.03.136-5.8.291-7.607-.503-1.787-1.375-5.247-1.903-5.728-.241-3.918.95-7.355-.286-7.355-.286l-.16-2.647z",
        fill: "#2B0849"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M108.341 276.044h3.094s-.103 6.702 4.536 8.558c-4.64.618-8.558-2.303-7.63-8.558",
        fill: "#A4AABA"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M57.542 272.401s-2.107 7.416-4.485 12.306c-1.798 3.695-4.225 7.492 5.465 7.492 6.648 0 8.953-.48 7.423-6.599-1.53-6.12.266-13.199.266-13.199h-8.669z",
        fill: "#CBD1D1"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M51.476 289.793s2.097 1.169 6.633 1.169c6.083 0 8.249-1.65 8.249-1.65s.602 1.114-.619 2.165c-.993.855-3.597 1.591-7.39 1.546-4.145-.048-5.832-.566-6.736-1.168-.825-.55-.687-1.58-.137-2.062",
        fill: "#2B0849"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M58.419 274.304s.033 1.519-.314 2.93c-.349 1.42-1.078 3.104-1.13 4.139-.058 1.151 4.537 1.58 5.155.034.62-1.547 1.294-6.427 1.913-7.252.619-.825-4.903-2.119-5.624.15",
        fill: "#A4AABA"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M99.66 278.514l13.378.092s1.298-54.52 1.853-64.403c.554-9.882 3.776-43.364 1.002-63.128l-12.547-.644-22.849.78s-.434 3.966-1.195 9.976c-.063.496-.682.843-.749 1.365-.075.585.423 1.354.32 1.966-2.364 14.08-6.377 33.104-8.744 46.677-.116.666-1.234 1.009-1.458 2.691-.04.302.211 1.525.112 1.795-6.873 18.744-10.949 47.842-14.277 61.885l14.607-.014s2.197-8.57 4.03-16.97c2.811-12.886 23.111-85.01 23.111-85.01l3.016-.521 1.043 46.35s-.224 1.234.337 2.02c.56.785-.56 1.123-.392 2.244l.392 1.794s-.449 7.178-.898 11.89c-.448 4.71-.092 39.165-.092 39.165",
        fill: "#7BB2F9"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M76.085 221.626c1.153.094 4.038-2.019 6.955-4.935M106.36 225.142s2.774-1.11 6.103-3.883",
        stroke: "#648BD8",
        strokeWidth: "1.051",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M107.275 222.1s2.773-1.11 6.102-3.884",
        stroke: "#648BD8",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M74.74 224.767s2.622-.591 6.505-3.365M86.03 151.634c-.27 3.106.3 8.525-4.336 9.123M103.625 149.88s.11 14.012-1.293 15.065c-2.219 1.664-2.99 1.944-2.99 1.944M99.79 150.438s.035 12.88-1.196 24.377M93.673 175.911s7.212-1.664 9.431-1.664M74.31 205.861a212.013 212.013 0 0 1-.979 4.56s-1.458 1.832-1.009 3.776c.449 1.944-.947 2.045-4.985 15.355-1.696 5.59-4.49 18.591-6.348 27.597l-.231 1.12M75.689 197.807a320.934 320.934 0 0 1-.882 4.754M82.591 152.233L81.395 162.7s-1.097.15-.5 2.244c.113 1.346-2.674 15.775-5.18 30.43M56.12 274.418h13.31",
        stroke: "#648BD8",
        strokeWidth: "1.051",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M116.241 148.22s-17.047-3.104-35.893.2c.158 2.514-.003 4.15-.003 4.15s14.687-2.818 35.67-.312c.252-2.355.226-4.038.226-4.038",
        fill: "#192064"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M106.322 151.165l.003-4.911a.81.81 0 0 0-.778-.815c-2.44-.091-5.066-.108-7.836-.014a.818.818 0 0 0-.789.815l-.003 4.906a.81.81 0 0 0 .831.813c2.385-.06 4.973-.064 7.73.017a.815.815 0 0 0 .842-.81",
        fill: "#FFF"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M105.207 150.233l.002-3.076a.642.642 0 0 0-.619-.646 94.321 94.321 0 0 0-5.866-.01.65.65 0 0 0-.63.647v3.072a.64.64 0 0 0 .654.644 121.12 121.12 0 0 1 5.794.011c.362.01.665-.28.665-.642",
        fill: "#192064"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M100.263 275.415h12.338M101.436 270.53c.006 3.387.042 5.79.111 6.506M101.451 264.548a915.75 915.75 0 0 0-.015 4.337M100.986 174.965l.898 44.642s.673 1.57-.225 2.692c-.897 1.122 2.468.673.898 2.243-1.57 1.57.897 1.122 0 3.365-.596 1.489-.994 21.1-1.096 35.146",
        stroke: "#648BD8",
        strokeWidth: "1.051",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M46.876 83.427s-.516 6.045 7.223 5.552c11.2-.712 9.218-9.345 31.54-21.655-.786-2.708-2.447-4.744-2.447-4.744s-11.068 3.11-22.584 8.046c-6.766 2.9-13.395 6.352-13.732 12.801M104.46 91.057l.941-5.372-8.884-11.43-5.037 5.372-1.74 7.834a.321.321 0 0 0 .108.32c.965.8 6.5 5.013 14.347 3.544a.332.332 0 0 0 .264-.268",
        fill: "#FFC6A0"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M93.942 79.387s-4.533-2.853-2.432-6.855c1.623-3.09 4.513 1.133 4.513 1.133s.52-3.642 3.121-3.642c.52-1.04 1.561-4.162 1.561-4.162s11.445 2.601 13.526 3.121c0 5.203-2.304 19.424-7.84 19.861-8.892.703-12.449-9.456-12.449-9.456",
        fill: "#FFC6A0"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M113.874 73.446c2.601-2.081 3.47-9.722 3.47-9.722s-2.479-.49-6.64-2.05c-4.683-2.081-12.798-4.747-17.48.976-9.668 3.223-2.05 19.823-2.05 19.823l2.713-3.021s-3.935-3.287-2.08-6.243c2.17-3.462 3.92 1.073 3.92 1.073s.637-2.387 3.581-3.342c.355-.71 1.036-2.674 1.432-3.85a1.073 1.073 0 0 1 1.263-.704c2.4.558 8.677 2.019 11.356 2.662.522.125.871.615.82 1.15l-.305 3.248z",
        fill: "#520038"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M104.977 76.064c-.103.61-.582 1.038-1.07.956-.489-.083-.801-.644-.698-1.254.103-.61.582-1.038 1.07-.956.488.082.8.644.698 1.254M112.132 77.694c-.103.61-.582 1.038-1.07.956-.488-.083-.8-.644-.698-1.254.103-.61.582-1.038 1.07-.956.488.082.8.643.698 1.254",
        fill: "#552950"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        stroke: "#DB836E",
        strokeWidth: "1.118",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M110.13 74.84l-.896 1.61-.298 4.357h-2.228"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M110.846 74.481s1.79-.716 2.506.537",
        stroke: "#5C2552",
        strokeWidth: "1.118",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M92.386 74.282s.477-1.114 1.113-.716c.637.398 1.274 1.433.558 1.99-.717.556.159 1.67.159 1.67",
        stroke: "#DB836E",
        strokeWidth: "1.118",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M103.287 72.93s1.83 1.113 4.137.954",
        stroke: "#5C2552",
        strokeWidth: "1.118",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M103.685 81.762s2.227 1.193 4.376 1.193M104.64 84.308s.954.398 1.511.318M94.693 81.205s2.308 7.4 10.424 7.639",
        stroke: "#DB836E",
        strokeWidth: "1.118",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M81.45 89.384s.45 5.647-4.935 12.787M69 82.654s-.726 9.282-8.204 14.206",
        stroke: "#E4EBF7",
        strokeWidth: "1.101",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M129.405 122.865s-5.272 7.403-9.422 10.768",
        stroke: "#E4EBF7",
        strokeWidth: "1.051",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M119.306 107.329s.452 4.366-2.127 32.062",
        stroke: "#E4EBF7",
        strokeWidth: "1.101",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M150.028 151.232h-49.837a1.01 1.01 0 0 1-1.01-1.01v-31.688c0-.557.452-1.01 1.01-1.01h49.837c.558 0 1.01.453 1.01 1.01v31.688a1.01 1.01 0 0 1-1.01 1.01",
        fill: "#F2D7AD"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M150.29 151.232h-19.863v-33.707h20.784v32.786a.92.92 0 0 1-.92.92", fill: "#F4D19D" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M123.554 127.896H92.917a.518.518 0 0 1-.425-.816l6.38-9.113c.193-.277.51-.442.85-.442h31.092l-7.26 10.371z",
        fill: "#F2D7AD"
      }
    ),
    /* @__PURE__ */ jsx("path", { fill: "#CC9B6E", d: "M123.689 128.447H99.25v-.519h24.169l7.183-10.26.424.298z" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M158.298 127.896h-18.669a2.073 2.073 0 0 1-1.659-.83l-7.156-9.541h19.965c.49 0 .95.23 1.244.622l6.69 8.92a.519.519 0 0 1-.415.83",
        fill: "#F4D19D"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        fill: "#CC9B6E",
        d: "M157.847 128.479h-19.384l-7.857-10.475.415-.31 7.7 10.266h19.126zM130.554 150.685l-.032-8.177.519-.002.032 8.177z"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        fill: "#CC9B6E",
        d: "M130.511 139.783l-.08-21.414.519-.002.08 21.414zM111.876 140.932l-.498-.143 1.479-5.167.498.143zM108.437 141.06l-2.679-2.935 2.665-3.434.41.318-2.397 3.089 2.384 2.612zM116.607 141.06l-.383-.35 2.383-2.612-2.397-3.089.41-.318 2.665 3.434z"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M154.316 131.892l-3.114-1.96.038 3.514-1.043.092c-1.682.115-3.634.23-4.789.23-1.902 0-2.693 2.258 2.23 2.648l-2.645-.596s-2.168 1.317.504 2.3c0 0-1.58 1.217.561 2.58-.584 3.504 5.247 4.058 7.122 3.59 1.876-.47 4.233-2.359 4.487-5.16.28-3.085-.89-5.432-3.35-7.238",
        fill: "#FFC6A0"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M153.686 133.577s-6.522.47-8.36.372c-1.836-.098-1.904 2.19 2.359 2.264 3.739.15 5.451-.044 5.451-.044",
        stroke: "#DB836E",
        strokeWidth: "1.051",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M145.16 135.877c-1.85 1.346.561 2.355.561 2.355s3.478.898 6.73.617",
        stroke: "#DB836E",
        strokeWidth: "1.051",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M151.89 141.71s-6.28.111-6.73-2.132c-.223-1.346.45-1.402.45-1.402M146.114 140.868s-1.103 3.16 5.44 3.533M151.202 129.932v3.477M52.838 89.286c3.533-.337 8.423-1.248 13.582-7.754",
        stroke: "#DB836E",
        strokeWidth: "1.051",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M168.567 248.318a6.647 6.647 0 0 1-6.647-6.647v-66.466a6.647 6.647 0 1 1 13.294 0v66.466a6.647 6.647 0 0 1-6.647 6.647",
        fill: "#5BA02E"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M176.543 247.653a6.647 6.647 0 0 1-6.646-6.647v-33.232a6.647 6.647 0 1 1 13.293 0v33.232a6.647 6.647 0 0 1-6.647 6.647",
        fill: "#92C110"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M186.443 293.613H158.92a3.187 3.187 0 0 1-3.187-3.187v-46.134a3.187 3.187 0 0 1 3.187-3.187h27.524a3.187 3.187 0 0 1 3.187 3.187v46.134a3.187 3.187 0 0 1-3.187 3.187",
        fill: "#F2D7AD"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M88.979 89.48s7.776 5.384 16.6 2.842",
        stroke: "#E4EBF7",
        strokeWidth: "1.101",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  ] })
] });

const ServerError = () => /* @__PURE__ */ jsxs("svg", { width: "254", height: "294", children: [
  /* @__PURE__ */ jsxs("defs", { children: [
    /* @__PURE__ */ jsx("path", { d: "M0 .335h253.49v253.49H0z" }),
    /* @__PURE__ */ jsx("path", { d: "M0 293.665h253.49V.401H0z" })
  ] }),
  /* @__PURE__ */ jsxs("g", { fill: "none", fillRule: "evenodd", children: [
    /* @__PURE__ */ jsxs("g", { transform: "translate(0 .067)", children: [
      /* @__PURE__ */ jsx("mask", { fill: "#fff" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M0 128.134v-2.11C0 56.608 56.273.334 125.69.334h2.11c69.416 0 125.69 56.274 125.69 125.69v2.11c0 69.417-56.274 125.69-125.69 125.69h-2.11C56.273 253.824 0 197.551 0 128.134",
          fill: "#E4EBF7",
          mask: "url(#b)"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M39.989 132.108a8.332 8.332 0 1 1-16.581-1.671 8.332 8.332 0 0 1 16.58 1.671",
        fill: "#FFF"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M37.19 135.59l10.553 5.983M48.665 147.884l-12.734 10.861",
        stroke: "#FFF",
        strokeWidth: "2"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M40.11 160.816a5.706 5.706 0 1 1-11.354-1.145 5.706 5.706 0 0 1 11.354 1.145M57.943 144.6a5.747 5.747 0 1 1-11.436-1.152 5.747 5.747 0 0 1 11.436 1.153M99.656 27.434l30.024-.013a4.619 4.619 0 1 0-.004-9.238l-30.024.013a4.62 4.62 0 0 0 .004 9.238M111.14 45.896l30.023-.013a4.62 4.62 0 1 0-.004-9.238l-30.024.013a4.619 4.619 0 1 0 .004 9.238",
        fill: "#FFF"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M113.53 27.421v-.002l15.89-.007a4.619 4.619 0 1 0 .005 9.238l-15.892.007v-.002a4.618 4.618 0 0 0-.004-9.234M150.167 70.091h-3.979a4.789 4.789 0 0 1-4.774-4.775 4.788 4.788 0 0 1 4.774-4.774h3.979a4.789 4.789 0 0 1 4.775 4.774 4.789 4.789 0 0 1-4.775 4.775",
        fill: "#FFF"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M171.687 30.234c0-16.392 13.289-29.68 29.681-29.68 16.392 0 29.68 13.288 29.68 29.68 0 16.393-13.288 29.681-29.68 29.681s-29.68-13.288-29.68-29.68",
        fill: "#FF603B"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M203.557 19.435l-.676 15.035a1.514 1.514 0 0 1-3.026 0l-.675-15.035a2.19 2.19 0 1 1 4.377 0m-.264 19.378c.513.477.77 1.1.77 1.87s-.257 1.393-.77 1.907c-.55.476-1.21.733-1.943.733a2.545 2.545 0 0 1-1.87-.77c-.55-.514-.806-1.136-.806-1.87 0-.77.256-1.393.806-1.87.513-.513 1.137-.733 1.87-.733.77 0 1.43.22 1.943.733",
        fill: "#FFF"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M119.3 133.275c4.426-.598 3.612-1.204 4.079-4.778.675-5.18-3.108-16.935-8.262-25.118-1.088-10.72-12.598-11.24-12.598-11.24s4.312 4.895 4.196 16.199c1.398 5.243.804 14.45.804 14.45s5.255 11.369 11.78 10.487",
        fill: "#FFB594"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M100.944 91.61s1.463-.583 3.211.582c8.08 1.398 10.368 6.706 11.3 11.368 1.864 1.282 1.864 2.33 1.864 3.496.365.777 1.515 3.03 1.515 3.03s-7.225 1.748-10.954 6.758c-1.399-6.41-6.936-25.235-6.936-25.235",
        fill: "#FFF"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M94.008 90.5l1.019-5.815-9.23-11.874-5.233 5.581-2.593 9.863s8.39 5.128 16.037 2.246",
        fill: "#FFB594"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M82.931 78.216s-4.557-2.868-2.445-6.892c1.632-3.107 4.537 1.139 4.537 1.139s.524-3.662 3.139-3.662c.523-1.046 1.569-4.184 1.569-4.184s11.507 2.615 13.6 3.138c-.001 5.23-2.317 19.529-7.884 19.969-8.94.706-12.516-9.508-12.516-9.508",
        fill: "#FFC6A0"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M102.971 72.243c2.616-2.093 3.489-9.775 3.489-9.775s-2.492-.492-6.676-2.062c-4.708-2.092-12.867-4.771-17.575.982-9.54 4.41-2.062 19.93-2.062 19.93l2.729-3.037s-3.956-3.304-2.092-6.277c2.183-3.48 3.943 1.08 3.943 1.08s.64-2.4 3.6-3.36c.356-.714 1.04-2.69 1.44-3.872a1.08 1.08 0 0 1 1.27-.707c2.41.56 8.723 2.03 11.417 2.676.524.126.876.619.825 1.156l-.308 3.266z",
        fill: "#520038"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M101.22 76.514c-.104.613-.585 1.044-1.076.96-.49-.082-.805-.646-.702-1.26.104-.613.585-1.044 1.076-.961.491.083.805.647.702 1.26M94.26 75.074c-.104.613-.585 1.044-1.076.96-.49-.082-.805-.646-.702-1.26.104-.613.585-1.044 1.076-.96.491.082.805.646.702 1.26",
        fill: "#552950"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        stroke: "#DB836E",
        strokeWidth: "1.063",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M99.206 73.644l-.9 1.62-.3 4.38h-2.24"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M99.926 73.284s1.8-.72 2.52.54",
        stroke: "#5C2552",
        strokeWidth: "1.117",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M81.367 73.084s.48-1.12 1.12-.72c.64.4 1.28 1.44.56 2s.16 1.68.16 1.68",
        stroke: "#DB836E",
        strokeWidth: "1.117",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M92.326 71.724s1.84 1.12 4.16.96",
        stroke: "#5C2552",
        strokeWidth: "1.117",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M92.726 80.604s2.24 1.2 4.4 1.2M93.686 83.164s.96.4 1.52.32M83.687 80.044s1.786 6.547 9.262 7.954",
        stroke: "#DB836E",
        strokeWidth: "1.063",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M95.548 91.663s-1.068 2.821-8.298 2.105c-7.23-.717-10.29-5.044-10.29-5.044",
        stroke: "#E4EBF7",
        strokeWidth: "1.136",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M78.126 87.478s6.526 4.972 16.47 2.486c0 0 9.577 1.02 11.536 5.322 5.36 11.77.543 36.835 0 39.962 3.496 4.055-.466 8.483-.466 8.483-15.624-3.548-35.81-.6-35.81-.6-4.849-3.546-1.223-9.044-1.223-9.044L62.38 110.32c-2.485-15.227.833-19.803 3.549-20.743 3.03-1.049 8.04-1.282 8.04-1.282.496-.058 1.08-.076 1.37-.233 2.36-1.282 2.787-.583 2.787-.583",
        fill: "#FFF"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M65.828 89.81s-6.875.465-7.59 8.156c-.466 8.857 3.03 10.954 3.03 10.954s6.075 22.102 16.796 22.957c8.39-2.176 4.758-6.702 4.661-11.42-.233-11.304-7.108-16.897-7.108-16.897s-4.212-13.75-9.789-13.75",
        fill: "#FFC6A0"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M71.716 124.225s.855 11.264 9.828 6.486c4.765-2.536 7.581-13.828 9.789-22.568 1.456-5.768 2.58-12.197 2.58-12.197l-4.973-1.709s-2.408 5.516-7.769 12.275c-4.335 5.467-9.144 11.11-9.455 17.713",
        fill: "#FFC6A0"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M108.463 105.191s1.747 2.724-2.331 30.535c2.376 2.216 1.053 6.012-.233 7.51",
        stroke: "#E4EBF7",
        strokeWidth: "1.085",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M123.262 131.527s-.427 2.732-11.77 1.981c-15.187-1.006-25.326-3.25-25.326-3.25l.933-5.8s.723.215 9.71-.068c11.887-.373 18.714-6.07 24.964-1.022 4.039 3.263 1.489 8.16 1.489 8.16",
        fill: "#FFC6A0"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M70.24 90.974s-5.593-4.739-11.054 2.68c-3.318 7.223.517 15.284 2.664 19.578-.31 3.729 2.33 4.311 2.33 4.311s.108.895 1.516 2.68c4.078-7.03 6.72-9.166 13.711-12.546-.328-.656-1.877-3.265-1.825-3.767.175-1.69-1.282-2.623-1.282-2.623s-.286-.156-1.165-2.738c-.788-2.313-2.036-5.177-4.895-7.575",
        fill: "#FFF"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M90.232 288.027s4.855 2.308 8.313 1.155c3.188-1.063 5.12.755 8.002 1.331 2.881.577 7.769 1.243 13.207-1.424-.117-6.228-7.786-4.499-13.518-7.588-2.895-1.56-4.276-5.336-4.066-9.944H91.544s-1.573 11.89-1.312 16.47",
        fill: "#CBD1D1"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M90.207 287.833s2.745 1.437 7.639.738c3.456-.494 3.223.66 7.418 1.282 4.195.621 13.092-.194 14.334-1.126.466 1.242-.388 2.33-.388 2.33s-1.709.682-5.438.932c-2.295.154-8.098.276-10.14-.621-2.02-1.554-4.894-1.515-6.06-.234-4.427 1.075-7.184-.31-7.184-.31l-.181-2.991z",
        fill: "#2B0849"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M98.429 272.257h3.496s-.117 7.574 5.127 9.671c-5.244.7-9.672-2.602-8.623-9.671",
        fill: "#A4AABA"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M44.425 272.046s-2.208 7.774-4.702 12.899c-1.884 3.874-4.428 7.854 5.729 7.854 6.97 0 9.385-.503 7.782-6.917-1.604-6.415.279-13.836.279-13.836h-9.088z",
        fill: "#CBD1D1"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M38.066 290.277s2.198 1.225 6.954 1.225c6.376 0 8.646-1.73 8.646-1.73s.63 1.168-.649 2.27c-1.04.897-3.77 1.668-7.745 1.621-4.347-.05-6.115-.593-7.062-1.224-.864-.577-.72-1.657-.144-2.162",
        fill: "#2B0849"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M45.344 274.041s.035 1.592-.329 3.07c-.365 1.49-1.13 3.255-1.184 4.34-.061 1.206 4.755 1.657 5.403.036.65-1.622 1.357-6.737 2.006-7.602.648-.865-5.14-2.222-5.896.156",
        fill: "#A4AABA"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M89.476 277.57l13.899.095s1.349-56.643 1.925-66.909c.576-10.267 3.923-45.052 1.042-65.585l-13.037-.669-23.737.81s-.452 4.12-1.243 10.365c-.065.515-.708.874-.777 1.417-.078.608.439 1.407.332 2.044-2.455 14.627-5.797 32.736-8.256 46.837-.121.693-1.282 1.048-1.515 2.796-.042.314.22 1.584.116 1.865-7.14 19.473-12.202 52.601-15.66 67.19l15.176-.015s2.282-10.145 4.185-18.871c2.922-13.389 24.012-88.32 24.012-88.32l3.133-.954-.158 48.568s-.233 1.282.35 2.098c.583.815-.581 1.167-.408 2.331l.408 1.864s-.466 7.458-.932 12.352c-.467 4.895 1.145 40.69 1.145 40.69",
        fill: "#7BB2F9"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M64.57 218.881c1.197.099 4.195-2.097 7.225-5.127M96.024 222.534s2.881-1.152 6.34-4.034",
        stroke: "#648BD8",
        strokeWidth: "1.085",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M96.973 219.373s2.882-1.153 6.34-4.034",
        stroke: "#648BD8",
        strokeWidth: "1.032",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M63.172 222.144s2.724-.614 6.759-3.496M74.903 146.166c-.281 3.226.31 8.856-4.506 9.478M93.182 144.344s.115 14.557-1.344 15.65c-2.305 1.73-3.107 2.02-3.107 2.02M89.197 144.923s.269 13.144-1.01 25.088M83.525 170.71s6.81-1.051 9.116-1.051M46.026 270.045l-.892 4.538M46.937 263.289l-.815 4.157M62.725 202.503c-.33 1.618-.102 1.904-.449 3.438 0 0-2.756 1.903-2.29 3.923.466 2.02-.31 3.424-4.505 17.252-1.762 5.807-4.233 18.922-6.165 28.278-.03.144-.521 2.646-1.14 5.8M64.158 194.136c-.295 1.658-.6 3.31-.917 4.938M71.33 146.787l-1.244 10.877s-1.14.155-.519 2.33c.117 1.399-2.778 16.39-5.382 31.615M44.242 273.727H58.07",
        stroke: "#648BD8",
        strokeWidth: "1.085",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M106.18 142.117c-3.028-.489-18.825-2.744-36.219.2a.625.625 0 0 0-.518.644c.063 1.307.044 2.343.015 2.995a.617.617 0 0 0 .716.636c3.303-.534 17.037-2.412 35.664-.266.347.04.66-.214.692-.56.124-1.347.16-2.425.17-3.029a.616.616 0 0 0-.52-.62",
        fill: "#192064"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M96.398 145.264l.003-5.102a.843.843 0 0 0-.809-.847 114.104 114.104 0 0 0-8.141-.014.85.85 0 0 0-.82.847l-.003 5.097c0 .476.388.857.864.845 2.478-.064 5.166-.067 8.03.017a.848.848 0 0 0 .876-.843",
        fill: "#FFF"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M95.239 144.296l.002-3.195a.667.667 0 0 0-.643-.672c-1.9-.061-3.941-.073-6.094-.01a.675.675 0 0 0-.654.672l-.002 3.192c0 .376.305.677.68.669 1.859-.042 3.874-.043 6.02.012.376.01.69-.291.691-.668",
        fill: "#192064"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M90.102 273.522h12.819M91.216 269.761c.006 3.519-.072 5.55 0 6.292M90.923 263.474c-.009 1.599-.016 2.558-.016 4.505M90.44 170.404l.932 46.38s.7 1.631-.233 2.796c-.932 1.166 2.564.7.932 2.33-1.63 1.633.933 1.166 0 3.497-.618 1.546-1.031 21.921-1.138 36.513",
        stroke: "#648BD8",
        strokeWidth: "1.085",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M73.736 98.665l2.214 4.312s2.098.816 1.865 2.68l.816 2.214M64.297 116.611c.233-.932 2.176-7.147 12.585-10.488M77.598 90.042s7.691 6.137 16.547 2.72",
        stroke: "#E4EBF7",
        strokeWidth: "1.085",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M91.974 86.954s5.476-.816 7.574-4.545c1.297-.345.72 2.212-.33 3.671-.7.971-1.01 1.554-1.01 1.554s.194.31.155.816c-.053.697-.175.653-.272 1.048-.081.335.108.657 0 1.049-.046.17-.198.5-.382.878-.12.249-.072.687-.2.948-.231.469-1.562 1.87-2.622 2.855-3.826 3.554-5.018 1.644-6.001-.408-.894-1.865-.661-5.127-.874-6.875-.35-2.914-2.622-3.03-1.923-4.429.343-.685 2.87.69 3.263 1.748.757 2.04 2.952 1.807 2.622 1.69",
        fill: "#FFC6A0"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M99.8 82.429c-.465.077-.35.272-.97 1.243-.622.971-4.817 2.932-6.39 3.224-2.589.48-2.278-1.56-4.254-2.855-1.69-1.107-3.562-.638-1.398 1.398.99.932.932 1.107 1.398 3.205.335 1.506-.64 3.67.7 5.593",
        stroke: "#DB836E",
        strokeWidth: ".774",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M79.543 108.673c-2.1 2.926-4.266 6.175-5.557 8.762",
        stroke: "#E59788",
        strokeWidth: ".774",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M87.72 124.768s-2.098-1.942-5.127-2.719c-3.03-.777-3.574-.155-5.516.078-1.942.233-3.885-.932-3.652.7.233 1.63 5.05 1.01 5.206 2.097.155 1.087-6.37 2.796-8.313 2.175-.777.777.466 1.864 2.02 2.175.233 1.554 2.253 1.554 2.253 1.554s.699 1.01 2.641 1.088c2.486 1.32 8.934-.7 10.954-1.554 2.02-.855-.466-5.594-.466-5.594",
        fill: "#FFC6A0"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M73.425 122.826s.66 1.127 3.167 1.418c2.315.27 2.563.583 2.563.583s-2.545 2.894-9.07 2.272M72.416 129.274s3.826.097 4.933-.718M74.98 130.75s1.961.136 3.36-.505M77.232 131.916s1.748.019 2.914-.505M73.328 122.321s-.595-1.032 1.262-.427c1.671.544 2.833.055 5.128.155 1.389.061 3.067-.297 3.982.15 1.606.784 3.632 2.181 3.632 2.181s10.526 1.204 19.033-1.127M78.864 108.104s-8.39 2.758-13.168 12.12",
        stroke: "#E59788",
        strokeWidth: ".774",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M109.278 112.533s3.38-3.613 7.575-4.662",
        stroke: "#E4EBF7",
        strokeWidth: "1.085",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M107.375 123.006s9.697-2.745 11.445-.88",
        stroke: "#E59788",
        strokeWidth: ".774",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M194.605 83.656l3.971-3.886M187.166 90.933l3.736-3.655M191.752 84.207l-4.462-4.56M198.453 91.057l-4.133-4.225M129.256 163.074l3.718-3.718M122.291 170.039l3.498-3.498M126.561 163.626l-4.27-4.27M132.975 170.039l-3.955-3.955",
        stroke: "#BFCDDD",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M190.156 211.779h-1.604a4.023 4.023 0 0 1-4.011-4.011V175.68a4.023 4.023 0 0 1 4.01-4.01h1.605a4.023 4.023 0 0 1 4.011 4.01v32.088a4.023 4.023 0 0 1-4.01 4.01",
        fill: "#A3B4C6"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M237.824 212.977a4.813 4.813 0 0 1-4.813 4.813h-86.636a4.813 4.813 0 0 1 0-9.626h86.636a4.813 4.813 0 0 1 4.813 4.813",
        fill: "#A3B4C6"
      }
    ),
    /* @__PURE__ */ jsx("mask", { fill: "#fff" }),
    /* @__PURE__ */ jsx("path", { fill: "#A3B4C6", mask: "url(#d)", d: "M154.098 190.096h70.513v-84.617h-70.513z" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M224.928 190.096H153.78a3.219 3.219 0 0 1-3.208-3.209V167.92a3.219 3.219 0 0 1 3.208-3.21h71.148a3.219 3.219 0 0 1 3.209 3.21v18.967a3.219 3.219 0 0 1-3.21 3.209M224.928 130.832H153.78a3.218 3.218 0 0 1-3.208-3.208v-18.968a3.219 3.219 0 0 1 3.208-3.209h71.148a3.219 3.219 0 0 1 3.209 3.21v18.967a3.218 3.218 0 0 1-3.21 3.208",
        fill: "#BFCDDD",
        mask: "url(#d)"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M159.563 120.546a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M166.98 120.546a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M174.397 120.546a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M222.539 120.546h-22.461a.802.802 0 0 1-.802-.802v-3.208c0-.443.359-.803.802-.803h22.46c.444 0 .803.36.803.803v3.208c0 .443-.36.802-.802.802",
        fill: "#FFF",
        mask: "url(#d)"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M224.928 160.464H153.78a3.218 3.218 0 0 1-3.208-3.209v-18.967a3.219 3.219 0 0 1 3.208-3.209h71.148a3.219 3.219 0 0 1 3.209 3.209v18.967a3.218 3.218 0 0 1-3.21 3.209",
        fill: "#BFCDDD",
        mask: "url(#d)"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M173.455 130.832h49.301M164.984 130.832h6.089M155.952 130.832h6.75M173.837 160.613h49.3M165.365 160.613h6.089M155.57 160.613h6.751",
        stroke: "#7C90A5",
        strokeWidth: "1.124",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        mask: "url(#d)"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M159.563 151.038a2.407 2.407 0 1 1 0-4.814 2.407 2.407 0 0 1 0 4.814M166.98 151.038a2.407 2.407 0 1 1 0-4.814 2.407 2.407 0 0 1 0 4.814M174.397 151.038a2.407 2.407 0 1 1 .001-4.814 2.407 2.407 0 0 1 0 4.814M222.539 151.038h-22.461a.802.802 0 0 1-.802-.802v-3.209c0-.443.359-.802.802-.802h22.46c.444 0 .803.36.803.802v3.209c0 .443-.36.802-.802.802M159.563 179.987a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M166.98 179.987a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M174.397 179.987a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M222.539 179.987h-22.461a.802.802 0 0 1-.802-.802v-3.209c0-.443.359-.802.802-.802h22.46c.444 0 .803.36.803.802v3.209c0 .443-.36.802-.802.802",
        fill: "#FFF",
        mask: "url(#d)"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M203.04 221.108h-27.372a2.413 2.413 0 0 1-2.406-2.407v-11.448a2.414 2.414 0 0 1 2.406-2.407h27.372a2.414 2.414 0 0 1 2.407 2.407V218.7a2.413 2.413 0 0 1-2.407 2.407",
        fill: "#BFCDDD",
        mask: "url(#d)"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M177.259 207.217v11.52M201.05 207.217v11.52",
        stroke: "#A3B4C6",
        strokeWidth: "1.124",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        mask: "url(#d)"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M162.873 267.894a9.422 9.422 0 0 1-9.422-9.422v-14.82a9.423 9.423 0 0 1 18.845 0v14.82a9.423 9.423 0 0 1-9.423 9.422",
        fill: "#5BA02E",
        mask: "url(#d)"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M171.22 267.83a9.422 9.422 0 0 1-9.422-9.423v-3.438a9.423 9.423 0 0 1 18.845 0v3.438a9.423 9.423 0 0 1-9.422 9.423",
        fill: "#92C110",
        mask: "url(#d)"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M181.31 293.666h-27.712a3.209 3.209 0 0 1-3.209-3.21V269.79a3.209 3.209 0 0 1 3.209-3.21h27.711a3.209 3.209 0 0 1 3.209 3.21v20.668a3.209 3.209 0 0 1-3.209 3.209",
        fill: "#F2D7AD",
        mask: "url(#d)"
      }
    )
  ] })
] });

const genBaseStyle$2 = (token) => {
  const {
    componentCls,
    lineHeightHeading3,
    iconCls,
    padding,
    paddingXL,
    paddingXS,
    paddingLG,
    marginXS,
    lineHeight
  } = token;
  return {
    // Result
    [componentCls]: {
      padding: `${paddingLG * 2}px ${paddingXL}px`
    },
    // Exception Status image
    [`${componentCls} ${componentCls}-image`]: {
      width: token.imageWidth,
      height: token.imageHeight,
      margin: "auto"
    },
    [`${componentCls} ${componentCls}-icon`]: {
      marginBottom: paddingLG,
      textAlign: "center",
      [`& > ${iconCls}`]: {
        fontSize: token.iconFontSize
      }
    },
    [`${componentCls} ${componentCls}-title`]: {
      color: token.colorTextHeading,
      fontSize: token.titleFontSize,
      lineHeight: lineHeightHeading3,
      marginBlock: marginXS,
      textAlign: "center"
    },
    [`${componentCls} ${componentCls}-subtitle`]: {
      color: token.colorTextDescription,
      fontSize: token.subtitleFontSize,
      lineHeight,
      textAlign: "center"
    },
    [`${componentCls} ${componentCls}-content`]: {
      marginTop: paddingLG,
      padding: `${paddingLG}px ${padding * 2.5}px`,
      backgroundColor: token.colorFillAlter
    },
    [`${componentCls} ${componentCls}-extra`]: {
      margin: token.extraMargin,
      textAlign: "center",
      "& > *": {
        marginInlineEnd: paddingXS,
        "&:last-child": {
          marginInlineEnd: 0
        }
      }
    }
  };
};
const genStatusIconStyle = (token) => {
  const { componentCls, iconCls } = token;
  return {
    [`${componentCls}-success ${componentCls}-icon > ${iconCls}`]: {
      color: token.resultSuccessIconColor
    },
    [`${componentCls}-error ${componentCls}-icon > ${iconCls}`]: {
      color: token.resultErrorIconColor
    },
    [`${componentCls}-info ${componentCls}-icon > ${iconCls}`]: {
      color: token.resultInfoIconColor
    },
    [`${componentCls}-warning ${componentCls}-icon > ${iconCls}`]: {
      color: token.resultWarningIconColor
    }
  };
};
const genResultStyle = (token) => [
  genBaseStyle$2(token),
  genStatusIconStyle(token)
];
const getStyle = (token) => genResultStyle(token);
const useStyle$8 = genComponentStyleHook(
  "Result",
  (token) => {
    const resultInfoIconColor = token.colorInfo;
    const resultErrorIconColor = token.colorError;
    const resultSuccessIconColor = token.colorSuccess;
    const resultWarningIconColor = token.colorWarning;
    const resultToken = merge(token, {
      resultInfoIconColor,
      resultErrorIconColor,
      resultSuccessIconColor,
      resultWarningIconColor,
      imageWidth: 250,
      imageHeight: 295
    });
    return [getStyle(resultToken)];
  },
  (token) => ({
    titleFontSize: token.fontSizeHeading3,
    subtitleFontSize: token.fontSize,
    iconFontSize: token.fontSizeHeading3 * 3,
    extraMargin: `${token.paddingLG}px 0 0 0`
  })
);

const Unauthorized = () => /* @__PURE__ */ jsx("svg", { width: "251", height: "294", children: /* @__PURE__ */ jsxs("g", { fill: "none", fillRule: "evenodd", children: [
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M0 129.023v-2.084C0 58.364 55.591 2.774 124.165 2.774h2.085c68.574 0 124.165 55.59 124.165 124.165v2.084c0 68.575-55.59 124.166-124.165 124.166h-2.085C55.591 253.189 0 197.598 0 129.023",
      fill: "#E4EBF7"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M41.417 132.92a8.231 8.231 0 1 1-16.38-1.65 8.231 8.231 0 0 1 16.38 1.65",
      fill: "#FFF"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M38.652 136.36l10.425 5.91M49.989 148.505l-12.58 10.73",
      stroke: "#FFF",
      strokeWidth: "2"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M41.536 161.28a5.636 5.636 0 1 1-11.216-1.13 5.636 5.636 0 0 1 11.216 1.13M59.154 145.261a5.677 5.677 0 1 1-11.297-1.138 5.677 5.677 0 0 1 11.297 1.138M100.36 29.516l29.66-.013a4.562 4.562 0 1 0-.004-9.126l-29.66.013a4.563 4.563 0 0 0 .005 9.126M111.705 47.754l29.659-.013a4.563 4.563 0 1 0-.004-9.126l-29.66.013a4.563 4.563 0 1 0 .005 9.126",
      fill: "#FFF"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M114.066 29.503V29.5l15.698-.007a4.563 4.563 0 1 0 .004 9.126l-15.698.007v-.002a4.562 4.562 0 0 0-.004-9.122M185.405 137.723c-.55 5.455-5.418 9.432-10.873 8.882-5.456-.55-9.432-5.418-8.882-10.873.55-5.455 5.418-9.432 10.873-8.882 5.455.55 9.432 5.418 8.882 10.873",
      fill: "#FFF"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M180.17 143.772l12.572 7.129M193.841 158.42L178.67 171.36",
      stroke: "#FFF",
      strokeWidth: "2"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M185.55 171.926a6.798 6.798 0 1 1-13.528-1.363 6.798 6.798 0 0 1 13.527 1.363M204.12 155.285a6.848 6.848 0 1 1-13.627-1.375 6.848 6.848 0 0 1 13.626 1.375",
      fill: "#FFF"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M152.988 194.074a2.21 2.21 0 1 1-4.42 0 2.21 2.21 0 0 1 4.42 0zM225.931 118.217a2.21 2.21 0 1 1-4.421 0 2.21 2.21 0 0 1 4.421 0zM217.09 153.051a2.21 2.21 0 1 1-4.421 0 2.21 2.21 0 0 1 4.42 0zM177.84 109.842a2.21 2.21 0 1 1-4.422 0 2.21 2.21 0 0 1 4.421 0zM196.114 94.454a2.21 2.21 0 1 1-4.421 0 2.21 2.21 0 0 1 4.421 0zM202.844 182.523a2.21 2.21 0 1 1-4.42 0 2.21 2.21 0 0 1 4.42 0z",
      stroke: "#FFF",
      strokeWidth: "2"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      stroke: "#FFF",
      strokeWidth: "2",
      d: "M215.125 155.262l-1.902 20.075-10.87 5.958M174.601 176.636l-6.322 9.761H156.98l-4.484 6.449M175.874 127.28V111.56M221.51 119.404l-12.77 7.859-15.228-7.86V96.668"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M180.68 29.32C180.68 13.128 193.806 0 210 0c16.193 0 29.32 13.127 29.32 29.32 0 16.194-13.127 29.322-29.32 29.322-16.193 0-29.32-13.128-29.32-29.321",
      fill: "#A26EF4"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M221.45 41.706l-21.563-.125a1.744 1.744 0 0 1-1.734-1.754l.071-12.23a1.744 1.744 0 0 1 1.754-1.734l21.562.125c.964.006 1.74.791 1.735 1.755l-.071 12.229a1.744 1.744 0 0 1-1.754 1.734",
      fill: "#FFF"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M215.106 29.192c-.015 2.577-2.049 4.654-4.543 4.64-2.494-.014-4.504-2.115-4.489-4.693l.04-6.925c.016-2.577 2.05-4.654 4.543-4.64 2.494.015 4.504 2.116 4.49 4.693l-.04 6.925zm-4.53-14.074a6.877 6.877 0 0 0-6.916 6.837l-.043 7.368a6.877 6.877 0 0 0 13.754.08l.042-7.368a6.878 6.878 0 0 0-6.837-6.917zM167.566 68.367h-3.93a4.73 4.73 0 0 1-4.717-4.717 4.73 4.73 0 0 1 4.717-4.717h3.93a4.73 4.73 0 0 1 4.717 4.717 4.73 4.73 0 0 1-4.717 4.717",
      fill: "#FFF"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M168.214 248.838a6.611 6.611 0 0 1-6.61-6.611v-66.108a6.611 6.611 0 0 1 13.221 0v66.108a6.611 6.611 0 0 1-6.61 6.61",
      fill: "#5BA02E"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M176.147 248.176a6.611 6.611 0 0 1-6.61-6.61v-33.054a6.611 6.611 0 1 1 13.221 0v33.053a6.611 6.611 0 0 1-6.61 6.611",
      fill: "#92C110"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M185.994 293.89h-27.376a3.17 3.17 0 0 1-3.17-3.17v-45.887a3.17 3.17 0 0 1 3.17-3.17h27.376a3.17 3.17 0 0 1 3.17 3.17v45.886a3.17 3.17 0 0 1-3.17 3.17",
      fill: "#F2D7AD"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M81.972 147.673s6.377-.927 17.566-1.28c11.729-.371 17.57 1.086 17.57 1.086s3.697-3.855.968-8.424c1.278-12.077 5.982-32.827.335-48.273-1.116-1.339-3.743-1.512-7.536-.62-1.337.315-7.147-.149-7.983-.1l-15.311-.347s-3.487-.17-8.035-.508c-1.512-.113-4.227-1.683-5.458-.338-.406.443-2.425 5.669-1.97 16.077l8.635 35.642s-3.141 3.61 1.219 7.085",
      fill: "#FFF"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M75.768 73.325l-.9-6.397 11.982-6.52s7.302-.118 8.038 1.205c.737 1.324-5.616.993-5.616.993s-1.836 1.388-2.615 2.5c-1.654 2.363-.986 6.471-8.318 5.986-1.708.284-2.57 2.233-2.57 2.233",
      fill: "#FFC6A0"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M52.44 77.672s14.217 9.406 24.973 14.444c1.061.497-2.094 16.183-11.892 11.811-7.436-3.318-20.162-8.44-21.482-14.496-.71-3.258 2.543-7.643 8.401-11.76M141.862 80.113s-6.693 2.999-13.844 6.876c-3.894 2.11-10.137 4.704-12.33 7.988-6.224 9.314 3.536 11.22 12.947 7.503 6.71-2.651 28.999-12.127 13.227-22.367",
      fill: "#FFB594"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M76.166 66.36l3.06 3.881s-2.783 2.67-6.31 5.747c-7.103 6.195-12.803 14.296-15.995 16.44-3.966 2.662-9.754 3.314-12.177-.118-3.553-5.032.464-14.628 31.422-25.95",
      fill: "#FFC6A0"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M64.674 85.116s-2.34 8.413-8.912 14.447c.652.548 18.586 10.51 22.144 10.056 5.238-.669 6.417-18.968 1.145-20.531-.702-.208-5.901-1.286-8.853-2.167-.87-.26-1.611-1.71-3.545-.936l-1.98-.869zM128.362 85.826s5.318 1.956 7.325 13.734c-.546.274-17.55 12.35-21.829 7.805-6.534-6.94-.766-17.393 4.275-18.61 4.646-1.121 5.03-1.37 10.23-2.929",
      fill: "#FFF"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M78.18 94.656s.911 7.41-4.914 13.078",
      stroke: "#E4EBF7",
      strokeWidth: "1.051",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M87.397 94.68s3.124 2.572 10.263 2.572c7.14 0 9.074-3.437 9.074-3.437",
      stroke: "#E4EBF7",
      strokeWidth: ".932",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M117.184 68.639l-6.781-6.177s-5.355-4.314-9.223-.893c-3.867 3.422 4.463 2.083 5.653 4.165 1.19 2.082.848 1.143-2.083.446-5.603-1.331-2.082.893 2.975 5.355 2.091 1.845 6.992.955 6.992.955l2.467-3.851z",
      fill: "#FFC6A0"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M105.282 91.315l-.297-10.937-15.918-.027-.53 10.45c-.026.403.17.788.515.999 2.049 1.251 9.387 5.093 15.799.424.287-.21.443-.554.431-.91",
      fill: "#FFB594"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M107.573 74.24c.817-1.147.982-9.118 1.015-11.928a1.046 1.046 0 0 0-.965-1.055l-4.62-.365c-7.71-1.044-17.071.624-18.253 6.346-5.482 5.813-.421 13.244-.421 13.244s1.963 3.566 4.305 6.791c.756 1.041.398-3.731 3.04-5.929 5.524-4.594 15.899-7.103 15.899-7.103",
      fill: "#5C2552"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M88.426 83.206s2.685 6.202 11.602 6.522c7.82.28 8.973-7.008 7.434-17.505l-.909-5.483c-6.118-2.897-15.478.54-15.478.54s-.576 2.044-.19 5.504c-2.276 2.066-1.824 5.618-1.824 5.618s-.905-1.922-1.98-2.321c-.86-.32-1.897.089-2.322 1.98-1.04 4.632 3.667 5.145 3.667 5.145",
      fill: "#FFC6A0"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      stroke: "#DB836E",
      strokeWidth: "1.145",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M100.843 77.099l1.701-.928-1.015-4.324.674-1.406"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M105.546 74.092c-.022.713-.452 1.279-.96 1.263-.51-.016-.904-.607-.882-1.32.021-.713.452-1.278.96-1.263.51.016.904.607.882 1.32M97.592 74.349c-.022.713-.452 1.278-.961 1.263-.509-.016-.904-.607-.882-1.32.022-.713.452-1.279.961-1.263.51.016.904.606.882 1.32",
      fill: "#552950"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M91.132 86.786s5.269 4.957 12.679 2.327",
      stroke: "#DB836E",
      strokeWidth: "1.145",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M99.776 81.903s-3.592.232-1.44-2.79c1.59-1.496 4.897-.46 4.897-.46s1.156 3.906-3.457 3.25",
      fill: "#DB836E"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M102.88 70.6s2.483.84 3.402.715M93.883 71.975s2.492-1.144 4.778-1.073",
      stroke: "#5C2552",
      strokeWidth: "1.526",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M86.32 77.374s.961.879 1.458 2.106c-.377.48-1.033 1.152-.236 1.809M99.337 83.719s1.911.151 2.509-.254",
      stroke: "#DB836E",
      strokeWidth: "1.145",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M87.782 115.821l15.73-3.012M100.165 115.821l10.04-2.008",
      stroke: "#E4EBF7",
      strokeWidth: "1.051",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M66.508 86.763s-1.598 8.83-6.697 14.078",
      stroke: "#E4EBF7",
      strokeWidth: "1.114",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M128.31 87.934s3.013 4.121 4.06 11.785",
      stroke: "#E4EBF7",
      strokeWidth: "1.051",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M64.09 84.816s-6.03 9.912-13.607 9.903",
      stroke: "#DB836E",
      strokeWidth: ".795",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M112.366 65.909l-.142 5.32s5.993 4.472 11.945 9.202c4.482 3.562 8.888 7.455 10.985 8.662 4.804 2.766 8.9 3.355 11.076 1.808 4.071-2.894 4.373-9.878-8.136-15.263-4.271-1.838-16.144-6.36-25.728-9.73",
      fill: "#FFC6A0"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M130.532 85.488s4.588 5.757 11.619 6.214",
      stroke: "#DB836E",
      strokeWidth: ".75",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M121.708 105.73s-.393 8.564-1.34 13.612",
      stroke: "#E4EBF7",
      strokeWidth: "1.051",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M115.784 161.512s-3.57-1.488-2.678-7.14",
      stroke: "#648BD8",
      strokeWidth: "1.051",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M101.52 290.246s4.326 2.057 7.408 1.03c2.842-.948 4.564.673 7.132 1.186 2.57.514 6.925 1.108 11.772-1.269-.104-5.551-6.939-4.01-12.048-6.763-2.582-1.39-3.812-4.757-3.625-8.863h-9.471s-1.402 10.596-1.169 14.68",
      fill: "#CBD1D1"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M101.496 290.073s2.447 1.281 6.809.658c3.081-.44 3.74.485 7.479 1.039 3.739.554 10.802-.07 11.91-.9.415 1.108-.347 2.077-.347 2.077s-1.523.608-4.847.831c-2.045.137-5.843.293-7.663-.507-1.8-1.385-5.286-1.917-5.77-.243-3.947.958-7.41-.288-7.41-.288l-.16-2.667z",
      fill: "#2B0849"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M108.824 276.19h3.116s-.103 6.751 4.57 8.62c-4.673.624-8.62-2.32-7.686-8.62",
      fill: "#A4AABA"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M57.65 272.52s-2.122 7.47-4.518 12.396c-1.811 3.724-4.255 7.548 5.505 7.548 6.698 0 9.02-.483 7.479-6.648-1.541-6.164.268-13.296.268-13.296H57.65z",
      fill: "#CBD1D1"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M51.54 290.04s2.111 1.178 6.682 1.178c6.128 0 8.31-1.662 8.31-1.662s.605 1.122-.624 2.18c-1 .862-3.624 1.603-7.444 1.559-4.177-.049-5.876-.57-6.786-1.177-.831-.554-.692-1.593-.138-2.078",
      fill: "#2B0849"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M58.533 274.438s.034 1.529-.315 2.95c-.352 1.431-1.087 3.127-1.139 4.17-.058 1.16 4.57 1.592 5.194.035.623-1.559 1.303-6.475 1.927-7.306.622-.831-4.94-2.135-5.667.15",
      fill: "#A4AABA"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M100.885 277.015l13.306.092s1.291-54.228 1.843-64.056c.552-9.828 3.756-43.13.997-62.788l-12.48-.64-22.725.776s-.433 3.944-1.19 9.921c-.062.493-.677.838-.744 1.358-.075.582.42 1.347.318 1.956-2.35 14.003-6.343 32.926-8.697 46.425-.116.663-1.227 1.004-1.45 2.677-.04.3.21 1.516.112 1.785-6.836 18.643-10.89 47.584-14.2 61.551l14.528-.014s2.185-8.524 4.008-16.878c2.796-12.817 22.987-84.553 22.987-84.553l3-.517 1.037 46.1s-.223 1.228.334 2.008c.558.782-.556 1.117-.39 2.233l.39 1.784s-.446 7.14-.892 11.826c-.446 4.685-.092 38.954-.092 38.954",
      fill: "#7BB2F9"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M77.438 220.434c1.146.094 4.016-2.008 6.916-4.91M107.55 223.931s2.758-1.103 6.069-3.862",
      stroke: "#648BD8",
      strokeWidth: "1.051",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M108.459 220.905s2.759-1.104 6.07-3.863",
      stroke: "#648BD8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M76.099 223.557s2.608-.587 6.47-3.346M87.33 150.82c-.27 3.088.297 8.478-4.315 9.073M104.829 149.075s.11 13.936-1.286 14.983c-2.207 1.655-2.975 1.934-2.975 1.934M101.014 149.63s.035 12.81-1.19 24.245M94.93 174.965s7.174-1.655 9.38-1.655M75.671 204.754c-.316 1.55-.64 3.067-.973 4.535 0 0-1.45 1.822-1.003 3.756.446 1.934-.943 2.034-4.96 15.273-1.686 5.559-4.464 18.49-6.313 27.447-.078.38-4.018 18.06-4.093 18.423M77.043 196.743a313.269 313.269 0 0 1-.877 4.729M83.908 151.414l-1.19 10.413s-1.091.148-.496 2.23c.111 1.34-2.66 15.692-5.153 30.267M57.58 272.94h13.238",
      stroke: "#648BD8",
      strokeWidth: "1.051",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M117.377 147.423s-16.955-3.087-35.7.199c.157 2.501-.002 4.128-.002 4.128s14.607-2.802 35.476-.31c.251-2.342.226-4.017.226-4.017",
      fill: "#192064"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M107.511 150.353l.004-4.885a.807.807 0 0 0-.774-.81c-2.428-.092-5.04-.108-7.795-.014a.814.814 0 0 0-.784.81l-.003 4.88c0 .456.371.82.827.808a140.76 140.76 0 0 1 7.688.017.81.81 0 0 0 .837-.806",
      fill: "#FFF"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M106.402 149.426l.002-3.06a.64.64 0 0 0-.616-.643 94.135 94.135 0 0 0-5.834-.009.647.647 0 0 0-.626.643l-.001 3.056c0 .36.291.648.651.64 1.78-.04 3.708-.041 5.762.012.36.009.662-.279.662-.64",
      fill: "#192064"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M101.485 273.933h12.272M102.652 269.075c.006 3.368.04 5.759.11 6.47M102.667 263.125c-.009 1.53-.015 2.98-.016 4.313M102.204 174.024l.893 44.402s.669 1.561-.224 2.677c-.892 1.116 2.455.67.893 2.231-1.562 1.562.893 1.116 0 3.347-.592 1.48-.988 20.987-1.09 34.956",
      stroke: "#648BD8",
      strokeWidth: "1.051",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
] }) });

const IconMap = {
  success: CheckCircleOutlineIcon,
  error: HighlightOffIcon,
  info: ErrorOutlineIcon,
  warning: WarningAmberIcon
};
const ExceptionMap = {
  "404": NoFound,
  "500": ServerError,
  "403": Unauthorized
};
const ExceptionStatus = Object.keys(ExceptionMap);
const Icon = ({ prefixCls, icon, status }) => {
  const className = classNames(`${prefixCls}-icon`);
  if (ExceptionStatus.includes(`${status}`)) {
    const SVGComponent = ExceptionMap[status];
    return /* @__PURE__ */ jsx("div", { className: `${className} ${prefixCls}-image`, children: /* @__PURE__ */ jsx(SVGComponent, {}) });
  }
  const iconNode = React.createElement(
    IconMap[status]
  );
  if (icon === null || icon === false) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { className, children: icon || iconNode });
};
const Extra = ({ prefixCls, extra }) => {
  if (!extra) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { className: `${prefixCls}-extra`, children: extra });
};
const Result = ({
  prefixCls: customizePrefixCls,
  className: customizeClassName,
  rootClassName,
  subTitle,
  title,
  style,
  children,
  status = "info",
  icon,
  extra
}) => {
  const { getPrefixCls, result } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("result", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$8(prefixCls);
  const className = classNames(
    prefixCls,
    `${prefixCls}-${status}`,
    customizeClassName,
    result?.className,
    rootClassName,
    hashId
  );
  const mergedStyle = { ...result?.style, ...style };
  return wrapSSR(
    /* @__PURE__ */ jsxs("div", { className, style: mergedStyle, children: [
      /* @__PURE__ */ jsx(Icon, { prefixCls, status, icon }),
      /* @__PURE__ */ jsx("div", { className: `${prefixCls}-title`, children: title }),
      subTitle && /* @__PURE__ */ jsx("div", { className: `${prefixCls}-subtitle`, children: subTitle }),
      /* @__PURE__ */ jsx(Extra, { prefixCls, extra }),
      children && /* @__PURE__ */ jsx("div", { className: `${prefixCls}-content`, children })
    ] })
  );
};
Result.PRESENTED_IMAGE_403 = ExceptionMap["403"];
Result.PRESENTED_IMAGE_404 = ExceptionMap["404"];
Result.PRESENTED_IMAGE_500 = ExceptionMap["500"];

function isPresetSize(size) {
  return ["small", "medium", "large"].includes(size);
}
function isValidGapNumber(size) {
  if (!size) {
    return false;
  }
  return typeof size === "number" && !Number.isNaN(size);
}

const SpaceContext = React__default.createContext({
  latestIndex: 0
});
const SpaceContextProvider = SpaceContext.Provider;

const Item = ({ className, index, children, split, style }) => {
  const { latestIndex } = React.useContext(SpaceContext);
  if (children === null || children === void 0) {
    return null;
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className, style, children }),
    index < latestIndex && split && /* @__PURE__ */ jsx("span", { className: `${className}-split`, children: split })
  ] });
};

const Space = React.forwardRef((props, ref) => {
  const { getPrefixCls, space } = React.useContext(ConfigContext);
  const {
    size = space?.size || "small",
    align,
    className,
    rootClassName,
    children,
    direction = "horizontal",
    prefixCls: customizePrefixCls,
    split,
    style,
    wrap = false,
    classNames: customClassNames,
    styles,
    ...otherProps
  } = props;
  const [horizontalSize, verticalSize] = Array.isArray(size) ? size : [size, size];
  const isPresetVerticalSize = isPresetSize(verticalSize);
  const isPresetHorizontalSize = isPresetSize(horizontalSize);
  const isValidVerticalSize = isValidGapNumber(verticalSize);
  const isValidHorizontalSize = isValidGapNumber(horizontalSize);
  const childNodes = toArray$2(children, { keepEmpty: true });
  const mergedAlign = align === void 0 && direction === "horizontal" ? "center" : align;
  const prefixCls = getPrefixCls("space", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$t(prefixCls);
  const cls = classNames(
    prefixCls,
    space?.className,
    hashId,
    `${prefixCls}-${direction}`,
    {
      [`${prefixCls}-align-${mergedAlign}`]: mergedAlign,
      [`${prefixCls}-gap-row-${verticalSize}`]: isPresetVerticalSize,
      [`${prefixCls}-gap-col-${horizontalSize}`]: isPresetHorizontalSize
    },
    className,
    rootClassName
  );
  const itemClassName = classNames(
    `${prefixCls}-item`,
    customClassNames?.item ?? space?.classNames?.item
  );
  let latestIndex = 0;
  const nodes = childNodes.map((child, i) => {
    if (child !== null && child !== void 0) {
      latestIndex = i;
    }
    const key = child && child.key || `${itemClassName}-${i}`;
    return /* @__PURE__ */ jsx(
      Item,
      {
        className: itemClassName,
        index: i,
        split,
        style: styles?.item ?? space?.styles?.item,
        children: child
      },
      key
    );
  });
  const spaceContext = React.useMemo(() => ({ latestIndex }), [latestIndex]);
  if (childNodes.length === 0) {
    return null;
  }
  const gapStyle = {};
  if (wrap) {
    gapStyle.flexWrap = "wrap";
  }
  if (!isPresetHorizontalSize && isValidHorizontalSize) {
    gapStyle.columnGap = horizontalSize;
  }
  if (!isPresetVerticalSize && isValidVerticalSize) {
    gapStyle.rowGap = verticalSize;
  }
  return wrapSSR(
    /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cls,
        style: { ...gapStyle, ...space?.style, ...style },
        ...otherProps,
        children: /* @__PURE__ */ jsx(SpaceContextProvider, { value: spaceContext, children: nodes })
      }
    )
  );
});
const CompoundedSpace = Space;
CompoundedSpace.Compact = Compact;

const StatisticNumber = (props) => {
  const { value, formatter, precision, decimalSeparator, groupSeparator = "", prefixCls } = props;
  let valueNode;
  if (typeof formatter === "function") {
    valueNode = formatter(value);
  } else {
    const val = String(value);
    const cells = val.match(/^(-?)(\d*)(\.(\d+))?$/);
    if (!cells || val === "-") {
      valueNode = val;
    } else {
      const negative = cells[1];
      let int = cells[2] || "0";
      let decimal = cells[4] || "";
      int = int.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator);
      if (typeof precision === "number") {
        decimal = decimal.padEnd(precision, "0").slice(0, precision > 0 ? precision : 0);
      }
      if (decimal) {
        decimal = `${decimalSeparator}${decimal}`;
      }
      valueNode = [
        /* @__PURE__ */ jsxs("span", { className: `${prefixCls}-content-value-int`, children: [
          negative,
          int
        ] }, "int"),
        decimal && /* @__PURE__ */ jsx("span", { className: `${prefixCls}-content-value-decimal`, children: decimal }, "decimal")
      ];
    }
  }
  return /* @__PURE__ */ jsx("span", { className: `${prefixCls}-content-value`, children: valueNode });
};

const genStatisticStyle = (token) => {
  const {
    componentCls,
    marginXXS,
    padding,
    colorTextDescription,
    titleFontSize,
    colorTextHeading,
    contentFontSize,
    fontFamily
  } = token;
  return {
    [`${componentCls}`]: {
      ...resetComponent(token),
      [`${componentCls}-title`]: {
        marginBottom: marginXXS,
        color: colorTextDescription,
        fontSize: titleFontSize
      },
      [`${componentCls}-skeleton`]: {
        paddingTop: padding
      },
      [`${componentCls}-content`]: {
        color: colorTextHeading,
        fontSize: contentFontSize,
        fontFamily,
        [`${componentCls}-content-value`]: {
          display: "inline-block",
          direction: "ltr"
        },
        [`${componentCls}-content-prefix, ${componentCls}-content-suffix`]: {
          display: "inline-block"
        },
        [`${componentCls}-content-prefix`]: {
          marginInlineEnd: marginXXS
        },
        [`${componentCls}-content-suffix`]: {
          marginInlineStart: marginXXS
        }
      }
    }
  };
};
const useStyle$7 = genComponentStyleHook(
  "Statistic",
  (token) => {
    const statisticToken = merge(token, {});
    return [genStatisticStyle(statisticToken)];
  },
  (token) => {
    const { fontSizeHeading3, fontSize } = token;
    return {
      titleFontSize: fontSize,
      contentFontSize: fontSizeHeading3
    };
  }
);

const Statistic = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    valueStyle,
    value = 0,
    title,
    valueRender,
    prefix,
    suffix,
    loading = false,
    onMouseEnter,
    onMouseLeave,
    decimalSeparator = ".",
    groupSeparator = ","
  } = props;
  const { getPrefixCls, statistic } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("statistic", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$7(prefixCls);
  const valueNode = /* @__PURE__ */ jsx(
    StatisticNumber,
    {
      decimalSeparator,
      groupSeparator,
      prefixCls,
      ...props,
      value
    }
  );
  const cls = classNames(
    prefixCls,
    statistic?.className,
    className,
    rootClassName,
    hashId
  );
  return wrapSSR(
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cls,
        style: { ...statistic?.style, ...style },
        onMouseEnter,
        onMouseLeave,
        children: [
          title && /* @__PURE__ */ jsx("div", { className: `${prefixCls}-title`, children: title }),
          /* @__PURE__ */ jsx(Skeleton, { paragraph: false, loading, className: `${prefixCls}-skeleton`, children: /* @__PURE__ */ jsxs("div", { style: valueStyle, className: `${prefixCls}-content`, children: [
            prefix && /* @__PURE__ */ jsx("span", { className: `${prefixCls}-content-prefix`, children: prefix }),
            valueRender ? valueRender(valueNode) : valueNode,
            suffix && /* @__PURE__ */ jsx("span", { className: `${prefixCls}-content-suffix`, children: suffix })
          ] }) })
        ]
      }
    )
  );
};

const timeUnits = [
  ["Y", 1e3 * 60 * 60 * 24 * 365],
  // years
  ["M", 1e3 * 60 * 60 * 24 * 30],
  // months
  ["D", 1e3 * 60 * 60 * 24],
  // days
  ["H", 1e3 * 60 * 60],
  // hours
  ["m", 1e3 * 60],
  // minutes
  ["s", 1e3],
  // seconds
  ["S", 1]
  // million seconds
];
function formatTimeStr(duration, format) {
  let leftDuration = duration;
  const escapeRegex = /\[[^\]]*]/g;
  const keepList = (format.match(escapeRegex) || []).map((str) => str.slice(1, -1));
  const templateText = format.replace(escapeRegex, "[]");
  const replacedText = timeUnits.reduce((current, [name, unit]) => {
    if (current.includes(name)) {
      const value = Math.floor(leftDuration / unit);
      leftDuration -= value * unit;
      return current.replace(new RegExp(`${name}+`, "g"), (match) => {
        const len = match.length;
        return value.toString().padStart(len, "0");
      });
    }
    return current;
  }, templateText);
  let index = 0;
  return replacedText.replace(escapeRegex, () => {
    const match = keepList[index];
    index += 1;
    return match;
  });
}
function formatCountdown(value, config) {
  const { format = "" } = config;
  const target = new Date(value).getTime();
  const current = Date.now();
  const diff = Math.max(target - current, 0);
  return formatTimeStr(diff, format);
}

const REFRESH_INTERVAL = 1e3 / 30;
function getTime(value) {
  return new Date(value).getTime();
}
const Countdown = (props) => {
  const { value, format = "HH:mm:ss", onChange, onFinish } = props;
  const forceUpdate = useForceUpdate();
  const countdown = React.useRef(null);
  const stopTimer = () => {
    onFinish?.();
    if (countdown.current) {
      clearInterval(countdown.current);
      countdown.current = null;
    }
  };
  const syncTimer = () => {
    const timestamp = getTime(value);
    if (timestamp >= Date.now()) {
      countdown.current = setInterval(() => {
        forceUpdate();
        onChange?.(timestamp - Date.now());
        if (timestamp < Date.now()) {
          stopTimer();
        }
      }, REFRESH_INTERVAL);
    }
  };
  React.useEffect(() => {
    syncTimer();
    return () => {
      if (countdown.current) {
        clearInterval(countdown.current);
        countdown.current = null;
      }
    };
  }, [value]);
  const formatter = (formatValue, config) => formatCountdown(formatValue, { ...config, format });
  const valueRender = (node) => cloneElement(node, { title: void 0 });
  return /* @__PURE__ */ jsx(Statistic, { ...props, valueRender, formatter });
};
const Countdown$1 = React.memo(Countdown);

Statistic.Countdown = Countdown$1;

const genSharedStatusStyle = (token) => {
  const {
    componentCls,
    badgeShadowSize,
    statusSize,
    dotSize,
    marginXS
  } = token;
  const colorPreset = genPresetColor(token, (colorKey, { darkColor }) => ({
    [`&${componentCls} ${componentCls}-color-${colorKey}`]: {
      background: darkColor
    }
  }));
  return {
    [componentCls]: {
      ...resetComponent(token),
      position: "relative",
      display: "inline-block",
      width: "fit-content",
      lineHeight: 1,
      [`${componentCls}-multiple-words`]: {
        padding: `0 ${token.paddingXS}px`,
        bdi: {
          unicodeBidi: "plaintext"
        }
      },
      [`${componentCls}-dot`]: {
        width: dotSize,
        minWidth: dotSize,
        height: dotSize,
        background: token.badgeColor,
        borderRadius: "100%",
        boxShadow: `0 0 0 ${badgeShadowSize}px ${token.badgeShadowColor}`
      },
      [`&${componentCls}-status`]: {
        lineHeight: "inherit",
        verticalAlign: "baseline",
        [`${componentCls}-status-dot`]: {
          position: "relative",
          top: -1,
          // Magic number, but seems better experience
          display: "inline-block",
          width: statusSize,
          height: statusSize,
          verticalAlign: "middle",
          borderRadius: "50%"
        },
        [`${componentCls}-status-success`]: {
          backgroundColor: token.colorSuccess
        },
        [`${componentCls}-status-default`]: {
          backgroundColor: token.colorTextPlaceholder
        },
        [`${componentCls}-status-error`]: {
          backgroundColor: token.colorError
        },
        [`${componentCls}-status-warning`]: {
          backgroundColor: token.colorWarning
        },
        [`${componentCls}-status-text`]: {
          marginInlineStart: marginXS,
          color: token.colorText,
          fontSize: token.fontSize
        }
      },
      ...colorPreset
    }
  };
};
const prepareToken = (token) => {
  const { fontSize, lineHeight, lineWidth, marginXS, colorBorderBg } = token;
  const badgeFontHeight = Math.round(fontSize * lineHeight);
  const badgeShadowSize = lineWidth;
  const badgeTextColor = token.colorBgContainer;
  const badgeColor = token.colorError;
  const badgeColorHover = token.colorErrorHover;
  const badgeToken = merge(token, {
    badgeFontHeight,
    badgeShadowSize,
    badgeTextColor,
    badgeColor,
    badgeColorHover,
    badgeShadowColor: colorBorderBg,
    badgeProcessingDuration: "1.2s",
    badgeRibbonOffset: marginXS,
    // Follow token just by Design. Not related with token
    badgeRibbonCornerTransform: "scaleY(0.75)",
    badgeRibbonCornerFilter: `brightness(75%)`
  });
  return badgeToken;
};
const prepareComponentToken = (token) => {
  const { fontSize, lineHeight, fontSizeSM, lineWidth } = token;
  return {
    indicatorZIndex: "auto",
    indicatorHeight: Math.round(fontSize * lineHeight) - 2 * lineWidth,
    indicatorHeightSM: fontSize,
    dotSize: fontSizeSM / 2,
    textFontSize: fontSizeSM,
    textFontSizeSM: fontSizeSM,
    textFontWeight: "normal",
    statusSize: fontSizeSM / 2
  };
};
const useStyle$6 = genComponentStyleHook(
  "Status",
  (token) => {
    const statusToken = prepareToken(token);
    return [genSharedStatusStyle(statusToken)];
  },
  prepareComponentToken
);

const InternalStatus = (props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    status,
    text,
    color,
    style,
    className,
    rootClassName,
    classNames: classNames$1,
    styles,
    ...restProps
  } = props;
  const { getPrefixCls, badge } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("status", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$6(prefixCls);
  const isInternalColor = isPresetColor(color, false);
  const statusCls = classNames(classNames$1?.indicator, badge?.classNames?.indicator, {
    [`${prefixCls}-status-dot`]: true,
    [`${prefixCls}-status-${status}`]: !!status,
    [`${prefixCls}-color-${color}`]: isInternalColor
  });
  const statusStyle = {};
  if (color && !isInternalColor) {
    statusStyle.color = color;
    statusStyle.background = color;
  }
  const badgeClassName = classNames(
    prefixCls,
    `${prefixCls}-status`,
    `${prefixCls}-not-a-wrapper`,
    className,
    rootClassName,
    badge?.className,
    badge?.classNames?.root,
    classNames$1?.root,
    hashId
  );
  const mergedStyle = { ...badge?.style, ...style };
  const statusTextColor = mergedStyle.color;
  return wrapSSR(
    /* @__PURE__ */ jsxs(
      "span",
      {
        ...restProps,
        className: badgeClassName,
        style: { ...styles?.root, ...badge?.styles?.root, ...mergedStyle },
        children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: statusCls,
              style: { ...styles?.indicator, ...badge?.styles?.indicator, ...statusStyle }
            }
          ),
          text && /* @__PURE__ */ jsx("span", { style: { color: statusTextColor }, className: `${prefixCls}-status-text`, children: text })
        ]
      }
    )
  );
};
const Status = React.forwardRef(InternalStatus);

const presetPrimaryColors = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
};

function validProgress(progress) {
  if (!progress || progress < 0) {
    return 0;
  }
  if (progress > 100) {
    return 100;
  }
  return progress;
}
function getSuccessPercent({ success, successPercent }) {
  let percent = successPercent;
  if (success && "progress" in success) {
    percent = success.progress;
  }
  if (success && "percent" in success) {
    percent = success.percent;
  }
  return percent;
}
const getPercentage = ({ percent, success, successPercent }) => {
  const realSuccessPercent = validProgress(getSuccessPercent({ success, successPercent }));
  return [realSuccessPercent, validProgress(validProgress(percent) - realSuccessPercent)];
};
const getStrokeColor = ({
  success = {},
  strokeColor
}) => {
  const { strokeColor: successColor } = success;
  return [successColor || presetPrimaryColors.green, strokeColor || null];
};
const getSize = (size, type, extra) => {
  let width = -1;
  let height = -1;
  if (type === "step") {
    const steps = extra.steps;
    const strokeWidth = extra.strokeWidth;
    if (typeof size === "string" || typeof size === "undefined") {
      width = size === "small" ? 2 : 14;
      height = strokeWidth ?? 8;
    } else if (typeof size === "number") {
      [width, height] = [size, size];
    } else {
      [width = 14, height = 8] = size;
    }
    width *= steps;
  } else if (type === "line") {
    const strokeWidth = extra?.strokeWidth;
    if (typeof size === "string" || typeof size === "undefined") {
      height = strokeWidth || (size === "small" ? 6 : 8);
    } else if (typeof size === "number") {
      [width, height] = [size, size];
    } else {
      [width = -1, height = 8] = size;
    }
  } else if (type === "circle" || type === "dashboard") {
    if (typeof size === "string" || typeof size === "undefined") {
      [width, height] = size === "small" ? [60, 60] : [120, 120];
    } else if (typeof size === "number") {
      [width, height] = [size, size];
    } else {
      width = size[0] ?? size[1] ?? 120;
      height = size[0] ?? size[1] ?? 120;
    }
  }
  return [width, height];
};

const CIRCLE_MIN_STROKE_WIDTH = 3;
const getMinPercent = (width) => CIRCLE_MIN_STROKE_WIDTH / width * 100;
const Circle = (props) => {
  const {
    prefixCls,
    trailColor = null,
    strokeLinecap = "round",
    gapPosition,
    gapDegree,
    width: originWidth = 120,
    type,
    children,
    success,
    size = originWidth
  } = props;
  const [width, height] = getSize(size, "circle");
  let { strokeWidth } = props;
  if (strokeWidth === void 0) {
    strokeWidth = Math.max(getMinPercent(width), 6);
  }
  const circleStyle = { width, height, fontSize: width * 0.15 + 6 };
  const realGapDegree = React.useMemo(() => {
    if (gapDegree || gapDegree === 0) {
      return gapDegree;
    }
    if (type === "dashboard") {
      return 75;
    }
    return void 0;
  }, [gapDegree, type]);
  const gapPos = gapPosition || type === "dashboard" && "bottom" || void 0;
  const isGradient = Object.prototype.toString.call(props.strokeColor) === "[object Object]";
  const strokeColor = getStrokeColor({ success, strokeColor: props.strokeColor });
  const wrapperClassName = classNames(`${prefixCls}-inner`, {
    [`${prefixCls}-circle-gradient`]: isGradient
  });
  const circleContent = /* @__PURE__ */ jsx(
    Circle$1,
    {
      percent: getPercentage(props),
      strokeWidth,
      trailWidth: strokeWidth,
      strokeColor,
      strokeLinecap,
      trailColor,
      prefixCls,
      gapDegree: realGapDegree,
      gapPosition: gapPos
    }
  );
  return /* @__PURE__ */ jsx("div", { className: wrapperClassName, style: circleStyle, children: width <= 20 ? /* @__PURE__ */ jsx(Tooltip, { title: children, children: /* @__PURE__ */ jsx("span", { children: circleContent }) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    circleContent,
    children
  ] }) });
};

const sortGradient = (gradients) => {
  let tempArr = [];
  Object.keys(gradients).forEach((key) => {
    const formattedKey = parseFloat(key.replace(/%/g, ""));
    if (!isNaN(formattedKey)) {
      tempArr.push({
        key: formattedKey,
        value: gradients[key]
      });
    }
  });
  tempArr = tempArr.sort((a, b) => a.key - b.key);
  return tempArr.map(({ key, value }) => `${value} ${key}%`).join(", ");
};
const handleGradient = (strokeColor) => {
  const {
    from = presetPrimaryColors.blue,
    to = presetPrimaryColors.blue,
    direction = "to right",
    ...rest
  } = strokeColor;
  if (Object.keys(rest).length !== 0) {
    const sortedGradients = sortGradient(rest);
    return { backgroundImage: `linear-gradient(${direction}, ${sortedGradients})` };
  }
  return { backgroundImage: `linear-gradient(${direction}, ${from}, ${to})` };
};
const Line = (props) => {
  const {
    prefixCls,
    percent,
    size,
    strokeWidth,
    strokeColor,
    strokeLinecap = "round",
    children,
    trailColor = null,
    success
  } = props;
  const backgroundProps = strokeColor && typeof strokeColor !== "string" ? handleGradient(strokeColor) : { backgroundColor: strokeColor };
  const borderRadius = strokeLinecap === "square" || strokeLinecap === "butt" ? 0 : void 0;
  const trailStyle = {
    backgroundColor: trailColor || void 0,
    borderRadius
  };
  const mergedSize = size ?? [-1, strokeWidth || (size === "small" ? 6 : 8)];
  const [width, height] = getSize(mergedSize, "line", { strokeWidth });
  const percentStyle = {
    width: `${validProgress(percent)}%`,
    height,
    borderRadius,
    ...backgroundProps
  };
  const successPercent = getSuccessPercent(props);
  const successPercentStyle = {
    width: `${validProgress(successPercent)}%`,
    height,
    borderRadius,
    backgroundColor: success?.strokeColor
  };
  const outerStyle = {
    width: width < 0 ? "100%" : width,
    height
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: `${prefixCls}-outer`, style: outerStyle, children: /* @__PURE__ */ jsxs("div", { className: `${prefixCls}-inner`, style: trailStyle, children: [
      /* @__PURE__ */ jsx("div", { className: `${prefixCls}-bg`, style: percentStyle }),
      successPercent !== void 0 ? /* @__PURE__ */ jsx("div", { className: `${prefixCls}-success-bg`, style: successPercentStyle }) : null
    ] }) }),
    children
  ] });
};

const Steps$1 = (props) => {
  const {
    size,
    steps,
    percent = 0,
    strokeWidth = 8,
    strokeColor,
    trailColor = null,
    prefixCls,
    children
  } = props;
  const current = Math.round(steps * (percent / 100));
  const stepWidth = size === "small" ? 2 : 14;
  const mergedSize = size ?? [stepWidth, strokeWidth];
  const [width, height] = getSize(mergedSize, "step", { steps, strokeWidth });
  const unitWidth = width / steps;
  const styledSteps = new Array(steps);
  for (let i = 0; i < steps; i++) {
    const color = Array.isArray(strokeColor) ? strokeColor[i] : strokeColor;
    styledSteps[i] = /* @__PURE__ */ jsx(
      "div",
      {
        className: classNames(`${prefixCls}-steps-item`, {
          [`${prefixCls}-steps-item-active`]: i <= current - 1
        }),
        style: {
          backgroundColor: i <= current - 1 ? color : trailColor,
          width: unitWidth,
          height
        }
      },
      i
    );
  }
  return /* @__PURE__ */ jsxs("div", { className: `${prefixCls}-steps-outer`, children: [
    styledSteps,
    children
  ] });
};

const genAntProgressActive = (isRtl) => {
  const direction = isRtl ? "100%" : "-100%";
  return new Keyframes(`antProgress${isRtl ? "RTL" : "LTR"}Active`, {
    "0%": {
      transform: `translateX(${direction}) scaleX(0)`,
      opacity: 0.1
    },
    "20%": {
      transform: `translateX(${direction}) scaleX(0)`,
      opacity: 0.5
    },
    to: {
      transform: "translateX(0) scaleX(1)",
      opacity: 0
    }
  });
};
const genBaseStyle$1 = (token) => {
  const { componentCls: progressCls, iconCls: iconPrefixCls } = token;
  return {
    [progressCls]: {
      ...resetComponent(token),
      display: "inline-block",
      "&-line": {
        position: "relative",
        width: "100%",
        fontSize: token.fontSize,
        marginInlineEnd: token.marginXS,
        marginBottom: token.marginXS
      },
      [`${progressCls}-outer`]: {
        display: "inline-block",
        width: "100%"
      },
      [`&${progressCls}-show-info`]: {
        [`${progressCls}-outer`]: {
          marginInlineEnd: `calc(-2em - ${token.marginXS}px)`,
          paddingInlineEnd: `calc(2em + ${token.paddingXS}px)`
        }
      },
      [`${progressCls}-inner`]: {
        position: "relative",
        display: "inline-block",
        width: "100%",
        overflow: "hidden",
        verticalAlign: "middle",
        backgroundColor: token.remainingColor,
        borderRadius: token.lineBorderRadius
      },
      [`${progressCls}-inner:not(${progressCls}-circle-gradient)`]: {
        [`${progressCls}-circle-path`]: {
          stroke: token.defaultColor
        }
      },
      [`${progressCls}-success-bg, ${progressCls}-bg`]: {
        position: "relative",
        backgroundColor: token.defaultColor,
        borderRadius: token.lineBorderRadius,
        transition: `all ${token.motionDurationSlow} ${token.motionEaseInOutCirc}`
      },
      [`${progressCls}-success-bg`]: {
        position: "absolute",
        insetBlockStart: 0,
        insetInlineStart: 0,
        backgroundColor: token.colorSuccess
      },
      [`${progressCls}-text`]: {
        display: "inline-block",
        width: "2em",
        marginInlineStart: token.marginXS,
        color: token.colorText,
        lineHeight: 1,
        whiteSpace: "nowrap",
        textAlign: "start",
        verticalAlign: "middle",
        wordBreak: "normal",
        [iconPrefixCls]: {
          fontSize: token.fontSize
        }
      },
      [`&${progressCls}-status-active`]: {
        [`${progressCls}-bg::before`]: {
          position: "absolute",
          inset: 0,
          backgroundColor: token.colorBgContainer,
          borderRadius: token.lineBorderRadius,
          opacity: 0,
          animationName: genAntProgressActive(),
          animationDuration: token.progressActiveMotionDuration,
          animationTimingFunction: token.motionEaseOutQuint,
          animationIterationCount: "infinite",
          content: '""'
        }
      },
      [`&${progressCls}-status-exception`]: {
        [`${progressCls}-bg`]: {
          backgroundColor: token.colorError
        },
        [`${progressCls}-text`]: {
          color: token.colorError
        }
      },
      [`&${progressCls}-status-exception ${progressCls}-inner:not(${progressCls}-circle-gradient)`]: {
        [`${progressCls}-circle-path`]: {
          stroke: token.colorError
        }
      },
      [`&${progressCls}-status-success`]: {
        [`${progressCls}-bg`]: {
          backgroundColor: token.colorSuccess
        },
        [`${progressCls}-text`]: {
          color: token.colorSuccess
        }
      },
      [`&${progressCls}-status-success ${progressCls}-inner:not(${progressCls}-circle-gradient)`]: {
        [`${progressCls}-circle-path`]: {
          stroke: token.colorSuccess
        }
      }
    }
  };
};
const genCircleStyle = (token) => {
  const { componentCls: progressCls, iconCls: iconPrefixCls } = token;
  return {
    [progressCls]: {
      [`${progressCls}-circle-trail`]: {
        stroke: token.remainingColor
      },
      [`&${progressCls}-circle ${progressCls}-inner`]: {
        position: "relative",
        lineHeight: 1,
        backgroundColor: "transparent"
      },
      [`&${progressCls}-circle ${progressCls}-text`]: {
        position: "absolute",
        insetBlockStart: "50%",
        insetInlineStart: 0,
        width: "100%",
        margin: 0,
        padding: 0,
        color: token.circleTextColor,
        fontSize: token.circleTextFontSize,
        lineHeight: 1,
        whiteSpace: "normal",
        textAlign: "center",
        transform: "translateY(-50%)",
        [iconPrefixCls]: {
          fontSize: `${token.fontSize / token.fontSizeSM}em`
        }
      },
      [`${progressCls}-circle&-status-exception`]: {
        [`${progressCls}-text`]: {
          color: token.colorError
        }
      },
      [`${progressCls}-circle&-status-success`]: {
        [`${progressCls}-text`]: {
          color: token.colorSuccess
        }
      }
    },
    [`${progressCls}-inline-circle`]: {
      lineHeight: 1,
      [`${progressCls}-inner`]: {
        verticalAlign: "bottom"
      }
    }
  };
};
const genStepStyle = (token) => {
  const { componentCls: progressCls } = token;
  return {
    [progressCls]: {
      [`${progressCls}-steps`]: {
        display: "inline-block",
        "&-outer": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        },
        "&-item": {
          flexShrink: 0,
          minWidth: token.progressStepMinWidth,
          marginInlineEnd: token.progressStepMarginInlineEnd,
          backgroundColor: token.remainingColor,
          transition: `all ${token.motionDurationSlow}`,
          "&-active": {
            backgroundColor: token.defaultColor
          }
        }
      }
    }
  };
};
const genSmallLine = (token) => {
  const { componentCls: progressCls, iconCls: iconPrefixCls } = token;
  return {
    [progressCls]: {
      [`${progressCls}-small&-line, ${progressCls}-small&-line ${progressCls}-text ${iconPrefixCls}`]: {
        fontSize: token.fontSizeSM
      }
    }
  };
};
const useStyle$5 = genComponentStyleHook(
  "Progress",
  (token) => {
    const progressStepMarginInlineEnd = token.marginXXS / 2;
    const progressToken = merge(token, {
      progressStepMarginInlineEnd,
      progressStepMinWidth: progressStepMarginInlineEnd,
      progressActiveMotionDuration: "2.4s"
    });
    return [
      genBaseStyle$1(progressToken),
      genCircleStyle(progressToken),
      genStepStyle(progressToken),
      genSmallLine(progressToken)
    ];
  },
  (token) => ({
    circleTextColor: token.colorText,
    defaultColor: token.colorInfo,
    remainingColor: token.colorFillSecondary,
    lineBorderRadius: 100,
    // magic for capsule shape, should be a very large number
    circleTextFontSize: "1em"
  })
);

const ProgressStatuses = ["normal", "exception", "active", "success"];
const Progress = React.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    steps,
    strokeColor,
    percent = 0,
    size = "default",
    showInfo = true,
    type = "line",
    status,
    format,
    style,
    ...restProps
  } = props;
  const percentNumber = React.useMemo(() => {
    const successPercent = getSuccessPercent(props);
    return parseInt(
      successPercent !== void 0 ? (successPercent ?? 0)?.toString() : (percent ?? 0)?.toString(),
      10
    );
  }, [percent, props.success, props.successPercent]);
  const progressStatus = React.useMemo(() => {
    if (!ProgressStatuses.includes(status) && percentNumber >= 100) {
      return "success";
    }
    return status || "normal";
  }, [status, percentNumber]);
  const {
    getPrefixCls,
    progress: progressStyle
  } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("progress", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$5(prefixCls);
  const progressInfo = React.useMemo(() => {
    if (!showInfo) {
      return null;
    }
    const successPercent = getSuccessPercent(props);
    let text;
    const textFormatter = format || ((number) => `${number}%`);
    const isLineType = type === "line";
    if (format || progressStatus !== "exception" && progressStatus !== "success") {
      text = textFormatter(validProgress(percent), validProgress(successPercent));
    } else if (progressStatus === "exception") {
      text = isLineType ? /* @__PURE__ */ jsx(HighlightOffIcon, {}) : /* @__PURE__ */ jsx(CloseIcon, {});
    } else if (progressStatus === "success") {
      text = isLineType ? /* @__PURE__ */ jsx(TaskAltIcon, {}) : /* @__PURE__ */ jsx(CheckIcon, {});
    }
    return /* @__PURE__ */ jsx("span", { className: `${prefixCls}-text`, title: typeof text === "string" ? text : void 0, children: text });
  }, [showInfo, percent, percentNumber, progressStatus, type, prefixCls, format]);
  const strokeColorNotArray = Array.isArray(strokeColor) ? strokeColor[0] : strokeColor;
  const strokeColorNotGradient = typeof strokeColor === "string" || Array.isArray(strokeColor) ? strokeColor : void 0;
  let progress;
  if (type === "line") {
    progress = steps ? /* @__PURE__ */ jsx(Steps$1, { ...props, strokeColor: strokeColorNotGradient, prefixCls, steps, children: progressInfo }) : /* @__PURE__ */ jsx(
      Line,
      {
        ...props,
        strokeColor: strokeColorNotArray,
        prefixCls,
        children: progressInfo
      }
    );
  } else if (type === "circle" || type === "dashboard") {
    progress = /* @__PURE__ */ jsx(
      Circle,
      {
        ...props,
        strokeColor: strokeColorNotArray,
        prefixCls,
        progressStatus,
        children: progressInfo
      }
    );
  }
  const classString = classNames(
    prefixCls,
    `${prefixCls}-status-${progressStatus}`,
    `${prefixCls}-${type === "dashboard" && "circle" || steps && "steps" || type}`,
    {
      [`${prefixCls}-inline-circle`]: type === "circle" && getSize(size, "circle")[0] <= 20,
      [`${prefixCls}-show-info`]: showInfo,
      [`${prefixCls}-${size}`]: typeof size === "string"
    },
    progressStyle?.className,
    className,
    rootClassName,
    hashId
  );
  return wrapSSR(
    /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        style: { ...progressStyle?.style, ...style },
        className: classString,
        role: "progressbar",
        "aria-valuenow": percentNumber,
        ...omit(restProps, [
          "trailColor",
          "strokeWidth",
          "width",
          "gapDegree",
          "gapPosition",
          "strokeLinecap",
          "success",
          "successPercent"
        ]),
        children: progress
      }
    )
  );
});

const genStepsCustomIconStyle = (token) => {
  const { componentCls, customIconTop, customIconSize, customIconFontSize } = token;
  return {
    [`${componentCls}-item-custom`]: {
      [`> ${componentCls}-item-container > ${componentCls}-item-icon`]: {
        height: "auto",
        background: "none",
        border: 0,
        [`> ${componentCls}-icon`]: {
          top: customIconTop,
          width: customIconSize,
          height: customIconSize,
          fontSize: customIconFontSize,
          lineHeight: `${customIconFontSize}px`
        }
      }
    },
    // Only adjust horizontal customize icon width
    [`&:not(${componentCls}-vertical)`]: {
      [`${componentCls}-item-custom`]: {
        [`${componentCls}-item-icon`]: {
          width: "auto",
          background: "none"
        }
      }
    }
  };
};

const genStepsInlineStyle = (token) => {
  const { componentCls, inlineDotSize, inlineTitleColor, inlineTailColor } = token;
  const containerPaddingTop = token.paddingXS + token.lineWidth;
  const titleStyle = {
    [`${componentCls}-item-container ${componentCls}-item-content ${componentCls}-item-title`]: {
      color: inlineTitleColor
    }
  };
  return {
    [`&${componentCls}-inline`]: {
      width: "auto",
      display: "inline-flex",
      [`${componentCls}-item`]: {
        flex: "none",
        "&-container": {
          padding: `${containerPaddingTop}px ${token.paddingXXS}px 0`,
          margin: `0 ${token.marginXXS / 2}px`,
          borderRadius: token.borderRadiusSM,
          cursor: "pointer",
          transition: `background-color ${token.motionDurationMid}`,
          "&:hover": {
            background: token.controlItemBgHover
          },
          [`&[role='button']:hover`]: {
            opacity: 1
          }
        },
        "&-icon": {
          width: inlineDotSize,
          height: inlineDotSize,
          marginInlineStart: `calc(50% - ${inlineDotSize / 2}px)`,
          [`> ${componentCls}-icon`]: {
            top: 0
          },
          [`${componentCls}-icon-dot`]: {
            borderRadius: token.fontSizeSM / 4
          }
        },
        "&-content": {
          width: "auto",
          marginTop: token.marginXS - token.lineWidth
        },
        "&-title": {
          color: inlineTitleColor,
          fontSize: token.fontSizeSM,
          lineHeight: token.lineHeightSM,
          fontWeight: "normal",
          marginBottom: token.marginXXS / 2
        },
        "&-description": {
          display: "none"
        },
        "&-tail": {
          marginInlineStart: 0,
          top: containerPaddingTop + inlineDotSize / 2,
          transform: `translateY(-50%)`,
          "&:after": {
            width: "100%",
            height: token.lineWidth,
            borderRadius: 0,
            marginInlineStart: 0,
            background: inlineTailColor
          }
        },
        [`&:first-child ${componentCls}-item-tail`]: {
          width: "50%",
          marginInlineStart: "50%"
        },
        [`&:last-child ${componentCls}-item-tail`]: {
          display: "block",
          width: "50%"
        },
        "&-wait": {
          [`${componentCls}-item-icon ${componentCls}-icon ${componentCls}-icon-dot`]: {
            backgroundColor: token.colorBorderBg,
            border: `${token.lineWidth}px ${token.lineType} ${inlineTailColor}`
          },
          ...titleStyle
        },
        "&-finish": {
          [`${componentCls}-item-tail::after`]: {
            backgroundColor: inlineTailColor
          },
          [`${componentCls}-item-icon ${componentCls}-icon ${componentCls}-icon-dot`]: {
            backgroundColor: inlineTailColor,
            border: `${token.lineWidth}px ${token.lineType} ${inlineTailColor}`
          },
          ...titleStyle
        },
        "&-error": titleStyle,
        "&-active, &-process": {
          [`${componentCls}-item-icon`]: {
            width: inlineDotSize,
            height: inlineDotSize,
            marginInlineStart: `calc(50% - ${inlineDotSize / 2}px)`,
            top: 0
          },
          ...titleStyle
        },
        [`&:not(${componentCls}-item-active) > ${componentCls}-item-container[role='button']:hover`]: {
          [`${componentCls}-item-title`]: {
            color: inlineTitleColor
          }
        }
      }
    }
  };
};

const genStepsLabelPlacementStyle = (token) => {
  const { componentCls, iconSize, lineHeight, iconSizeSM } = token;
  return {
    [`&${componentCls}-label-vertical`]: {
      [`${componentCls}-item`]: {
        overflow: "visible",
        "&-tail": {
          marginInlineStart: iconSize / 2 + token.controlHeightLG,
          padding: `${token.paddingXXS}px ${token.paddingLG}px`
        },
        "&-content": {
          display: "block",
          width: (iconSize / 2 + token.controlHeightLG) * 2,
          marginTop: token.marginSM,
          textAlign: "center"
        },
        "&-icon": {
          display: "inline-block",
          marginInlineStart: token.controlHeightLG
        },
        "&-title": {
          paddingInlineEnd: 0,
          paddingInlineStart: 0,
          "&::after": {
            display: "none"
          }
        },
        "&-subtitle": {
          display: "block",
          marginBottom: token.marginXXS,
          marginInlineStart: 0,
          lineHeight
        }
      },
      [`&${componentCls}-small:not(${componentCls}-dot)`]: {
        [`${componentCls}-item`]: {
          "&-icon": {
            marginInlineStart: token.controlHeightLG + (iconSize - iconSizeSM) / 2
          }
        }
      }
    }
  };
};

const genStepsNavStyle = (token) => {
  const {
    componentCls,
    navContentMaxWidth,
    navArrowColor,
    stepsNavActiveColor,
    motionDurationSlow
  } = token;
  return {
    [`&${componentCls}-navigation`]: {
      paddingTop: token.paddingSM,
      [`&${componentCls}-small`]: {
        [`${componentCls}-item`]: {
          "&-container": {
            marginInlineStart: -token.marginSM
          }
        }
      },
      [`${componentCls}-item`]: {
        overflow: "visible",
        textAlign: "center",
        "&-container": {
          display: "inline-block",
          height: "100%",
          marginInlineStart: -token.margin,
          paddingBottom: token.paddingSM,
          textAlign: "start",
          transition: `opacity ${motionDurationSlow}`,
          [`${componentCls}-item-content`]: {
            maxWidth: navContentMaxWidth
          },
          [`${componentCls}-item-title`]: {
            maxWidth: "100%",
            paddingInlineEnd: 0,
            ...textEllipsis,
            "&::after": {
              display: "none"
            }
          }
        },
        [`&:not(${componentCls}-item-active)`]: {
          [`${componentCls}-item-container[role='button']`]: {
            cursor: "pointer",
            "&:hover": {
              opacity: 0.85
            }
          }
        },
        "&:last-child": {
          flex: 1,
          "&::after": {
            display: "none"
          }
        },
        "&::after": {
          position: "absolute",
          top: `calc(50% - ${token.paddingSM / 2}px)`,
          insetInlineStart: "100%",
          display: "inline-block",
          width: token.fontSizeIcon,
          height: token.fontSizeIcon,
          borderTop: `${token.lineWidth}px ${token.lineType} ${navArrowColor}`,
          borderBottom: "none",
          borderInlineStart: "none",
          borderInlineEnd: `${token.lineWidth}px ${token.lineType} ${navArrowColor}`,
          transform: "translateY(-50%) translateX(-50%) rotate(45deg)",
          content: '""'
        },
        "&::before": {
          position: "absolute",
          bottom: 0,
          insetInlineStart: "50%",
          display: "inline-block",
          width: 0,
          height: token.lineWidthBold,
          backgroundColor: stepsNavActiveColor,
          transition: `width ${motionDurationSlow}, inset-inline-start ${motionDurationSlow}`,
          transitionTimingFunction: "ease-out",
          content: '""'
        }
      },
      [`${componentCls}-item${componentCls}-item-active::before`]: {
        insetInlineStart: 0,
        width: "100%"
      }
    },
    [`&${componentCls}-navigation${componentCls}-vertical`]: {
      [`> ${componentCls}-item`]: {
        marginInlineEnd: 0,
        "&::before": {
          display: "none"
        },
        [`&${componentCls}-item-active::before`]: {
          top: 0,
          insetInlineEnd: 0,
          insetInlineStart: "unset",
          display: "block",
          width: token.lineWidth * 3,
          height: `calc(100% - ${token.marginLG}px)`
        },
        "&::after": {
          position: "relative",
          insetInlineStart: "50%",
          display: "block",
          width: token.controlHeight * 0.25,
          height: token.controlHeight * 0.25,
          marginBottom: token.marginXS,
          textAlign: "center",
          transform: "translateY(-50%) translateX(-50%) rotate(135deg)"
        },
        "&:last-child": {
          "&::after": {
            display: "none"
          }
        },
        [`> ${componentCls}-item-container > ${componentCls}-item-tail`]: {
          visibility: "hidden"
        }
      }
    },
    [`&${componentCls}-navigation${componentCls}-horizontal`]: {
      [`> ${componentCls}-item > ${componentCls}-item-container > ${componentCls}-item-tail`]: {
        visibility: "hidden"
      }
    }
  };
};

const genStepsProgressStyle = (token) => {
  const { ipassCls, componentCls } = token;
  return {
    [`&${componentCls}-with-progress`]: {
      [`${componentCls}-item`]: {
        paddingTop: token.paddingXXS,
        [`&-process ${componentCls}-item-container ${componentCls}-item-icon ${componentCls}-icon`]: {
          color: token.processIconColor
        }
      },
      [`&${componentCls}-vertical > ${componentCls}-item `]: {
        paddingInlineStart: token.paddingXXS,
        [`> ${componentCls}-item-container > ${componentCls}-item-tail`]: {
          top: token.marginXXS,
          insetInlineStart: token.iconSize / 2 - token.lineWidth + token.paddingXXS
        }
      },
      [`&, &${componentCls}-small`]: {
        [`&${componentCls}-horizontal ${componentCls}-item:first-child`]: {
          paddingBottom: token.paddingXXS,
          paddingInlineStart: token.paddingXXS
        }
      },
      [`&${componentCls}-small${componentCls}-vertical > ${componentCls}-item > ${componentCls}-item-container > ${componentCls}-item-tail`]: {
        insetInlineStart: token.iconSizeSM / 2 - token.lineWidth + token.paddingXXS
      },
      [`&${componentCls}-label-vertical`]: {
        [`${componentCls}-item ${componentCls}-item-tail`]: {
          top: token.margin - 2 * token.lineWidth
        }
      },
      [`${componentCls}-item-icon`]: {
        position: "relative",
        [`${ipassCls}-progress`]: {
          position: "absolute",
          insetBlockStart: (token.iconSize - token.stepsProgressSize - token.lineWidth * 2) / 2,
          insetInlineStart: (token.iconSize - token.stepsProgressSize - token.lineWidth * 2) / 2
        }
      }
    }
  };
};

const genStepsProgressDotStyle = (token) => {
  const {
    componentCls,
    descriptionMaxWidth,
    lineHeight,
    dotCurrentSize,
    dotSize,
    motionDurationSlow
  } = token;
  return {
    [`&${componentCls}-dot, &${componentCls}-dot${componentCls}-small`]: {
      [`${componentCls}-item`]: {
        "&-title": {
          lineHeight
        },
        "&-tail": {
          top: Math.floor((token.dotSize - token.lineWidth * 3) / 2),
          width: "100%",
          marginTop: 0,
          marginBottom: 0,
          marginInline: `${descriptionMaxWidth / 2}px 0`,
          padding: 0,
          "&::after": {
            width: `calc(100% - ${token.marginSM * 2}px)`,
            height: token.lineWidth * 3,
            marginInlineStart: token.marginSM
          }
        },
        "&-icon": {
          width: dotSize,
          height: dotSize,
          marginInlineStart: (token.descriptionMaxWidth - dotSize) / 2,
          paddingInlineEnd: 0,
          lineHeight: `${dotSize}px`,
          background: "transparent",
          border: 0,
          [`${componentCls}-icon-dot`]: {
            position: "relative",
            float: "left",
            width: "100%",
            height: "100%",
            borderRadius: 100,
            // very large number
            transition: `all ${motionDurationSlow}`,
            /* expand hover area */
            "&::after": {
              position: "absolute",
              top: -token.marginSM,
              insetInlineStart: (dotSize - token.controlHeightLG * 1.5) / 2,
              width: token.controlHeightLG * 1.5,
              height: token.controlHeight,
              background: "transparent",
              content: '""'
            }
          }
        },
        "&-content": {
          width: descriptionMaxWidth
        },
        [`&-process ${componentCls}-item-icon`]: {
          position: "relative",
          top: (dotSize - dotCurrentSize) / 2,
          width: dotCurrentSize,
          height: dotCurrentSize,
          lineHeight: `${dotCurrentSize}px`,
          background: "none",
          marginInlineStart: (token.descriptionMaxWidth - dotCurrentSize) / 2
        },
        [`&-process ${componentCls}-icon`]: {
          [`&:first-child ${componentCls}-icon-dot`]: {
            insetInlineStart: 0
          }
        }
      }
    },
    [`&${componentCls}-vertical${componentCls}-dot`]: {
      [`${componentCls}-item-icon`]: {
        marginTop: (token.controlHeight - dotSize) / 2,
        marginInlineStart: 0,
        background: "none"
      },
      [`${componentCls}-item-process ${componentCls}-item-icon`]: {
        marginTop: (token.controlHeight - dotCurrentSize) / 2,
        top: 0,
        insetInlineStart: (dotSize - dotCurrentSize) / 2,
        marginInlineStart: 0
      },
      [`${componentCls}-item > ${componentCls}-item-container > ${componentCls}-item-tail`]: {
        top: (token.controlHeight - dotSize) / 2,
        insetInlineStart: 0,
        margin: 0,
        padding: `${dotSize + token.paddingXS}px 0 ${token.paddingXS}px`,
        "&::after": {
          marginInlineStart: (dotSize - token.lineWidth) / 2
        }
      },
      [`&${componentCls}-small`]: {
        [`${componentCls}-item-icon`]: {
          marginTop: (token.controlHeightSM - dotSize) / 2
        },
        [`${componentCls}-item-process ${componentCls}-item-icon`]: {
          marginTop: (token.controlHeightSM - dotCurrentSize) / 2
        },
        [`${componentCls}-item > ${componentCls}-item-container > ${componentCls}-item-tail`]: {
          top: (token.controlHeightSM - dotSize) / 2
        }
      },
      [`${componentCls}-item:first-child ${componentCls}-icon-dot`]: {
        insetInlineStart: 0
      },
      [`${componentCls}-item-content`]: {
        width: "inherit"
      }
    }
  };
};

const genStepsSmallStyle = (token) => {
  const {
    componentCls,
    iconSizeSM,
    // stepsSmallIconMargin,
    fontSizeSM,
    fontSize,
    colorTextDescription
  } = token;
  return {
    [`&${componentCls}-small`]: {
      [`&${componentCls}-horizontal:not(${componentCls}-label-vertical) ${componentCls}-item`]: {
        paddingInlineStart: token.paddingSM,
        "&:first-child": {
          paddingInlineStart: 0
        }
      },
      [`${componentCls}-item-icon`]: {
        width: iconSizeSM,
        height: iconSizeSM,
        // margin: stepsSmallIconMargin,
        marginTop: 0,
        marginBottom: 0,
        marginInline: `0 ${token.marginXS}px`,
        fontSize: fontSizeSM,
        lineHeight: `${iconSizeSM}px`,
        textAlign: "center",
        borderRadius: iconSizeSM
      },
      [`${componentCls}-item-title`]: {
        paddingInlineEnd: token.paddingSM,
        fontSize,
        lineHeight: `${iconSizeSM}px`,
        "&::after": {
          top: iconSizeSM / 2
        }
      },
      [`${componentCls}-item-description`]: {
        color: colorTextDescription,
        fontSize
      },
      [`${componentCls}-item-tail`]: {
        top: iconSizeSM / 2 - token.paddingXXS
      },
      [`${componentCls}-item-custom ${componentCls}-item-icon`]: {
        width: "inherit",
        height: "inherit",
        lineHeight: "inherit",
        background: "none",
        border: 0,
        borderRadius: 0,
        [`> ${componentCls}-icon`]: {
          fontSize: iconSizeSM,
          lineHeight: `${iconSizeSM}px`,
          transform: "none"
        }
      }
    }
  };
};

const genStepsVerticalStyle = (token) => {
  const { componentCls, iconSizeSM, iconSize } = token;
  return {
    [`&${componentCls}-vertical`]: {
      display: "flex",
      flexDirection: "column",
      [`> ${componentCls}-item`]: {
        display: "block",
        flex: "1 0 auto",
        paddingInlineStart: 0,
        overflow: "visible",
        [`${componentCls}-item-icon`]: {
          float: "left",
          marginInlineEnd: token.margin
        },
        [`${componentCls}-item-content`]: {
          display: "block",
          minHeight: token.controlHeight * 1.5,
          overflow: "hidden"
        },
        [`${componentCls}-item-title`]: {
          lineHeight: `${iconSize}px`
        },
        [`${componentCls}-item-description`]: {
          paddingBottom: token.paddingSM
        }
      },
      [`> ${componentCls}-item > ${componentCls}-item-container > ${componentCls}-item-tail`]: {
        position: "absolute",
        top: 0,
        insetInlineStart: iconSize / 2 - token.lineWidth,
        width: token.lineWidth,
        height: "100%",
        padding: `${iconSize + token.marginXXS * 1.5}px 0 ${token.marginXXS * 1.5}px`,
        "&::after": {
          width: token.lineWidth,
          height: "100%"
        }
      },
      [`> ${componentCls}-item:not(:last-child) > ${componentCls}-item-container > ${componentCls}-item-tail`]: {
        display: "block"
      },
      [` > ${componentCls}-item > ${componentCls}-item-container > ${componentCls}-item-content > ${componentCls}-item-title`]: {
        "&::after": {
          display: "none"
        }
      },
      [`&${componentCls}-small ${componentCls}-item-container`]: {
        [`${componentCls}-item-tail`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: iconSizeSM / 2 - token.lineWidth,
          padding: `${iconSizeSM + token.marginXXS * 1.5}px 0 ${token.marginXXS * 1.5}px`
        },
        [`${componentCls}-item-title`]: {
          lineHeight: `${iconSizeSM}px`
        }
      }
    }
  };
};

const genStepsItemStatusStyle = (status, token) => {
  const prefix = `${token.componentCls}-item`;
  const iconColorKey = `${status}IconColor`;
  const titleColorKey = `${status}TitleColor`;
  const descriptionColorKey = `${status}DescriptionColor`;
  const tailColorKey = `${status}TailColor`;
  const iconBgColorKey = `${status}IconBgColor`;
  const iconBorderColorKey = `${status}IconBorderColor`;
  const dotColorKey = `${status}DotColor`;
  return {
    [`${prefix}-${status} ${prefix}-icon`]: {
      backgroundColor: token[iconBgColorKey],
      borderColor: token[iconBorderColorKey],
      [`> ${token.componentCls}-icon`]: {
        color: token[iconColorKey],
        [`${token.componentCls}-icon-dot`]: {
          background: token[dotColorKey]
        }
      }
    },
    [`${prefix}-${status}${prefix}-custom ${prefix}-icon`]: {
      [`> ${token.componentCls}-icon`]: {
        color: token[dotColorKey]
      }
    },
    [`${prefix}-${status} > ${prefix}-container > ${prefix}-content > ${prefix}-title`]: {
      color: token[titleColorKey],
      "&::after": {
        backgroundColor: token[tailColorKey]
      }
    },
    [`${prefix}-${status} > ${prefix}-container > ${prefix}-content > ${prefix}-description`]: {
      color: token[descriptionColorKey]
    },
    [`${prefix}-${status} > ${prefix}-container > ${prefix}-tail::after`]: {
      backgroundColor: token[tailColorKey]
    }
  };
};
const genStepsItemStyle = (token) => {
  const { componentCls, motionDurationSlow } = token;
  const stepsItemCls = `${componentCls}-item`;
  const stepItemIconCls = `${stepsItemCls}-icon`;
  return {
    [stepsItemCls]: {
      position: "relative",
      display: "inline-block",
      flex: 1,
      overflow: "hidden",
      verticalAlign: "top",
      "&:last-child": {
        flex: "none",
        [`> ${stepsItemCls}-container > ${stepsItemCls}-tail, > ${stepsItemCls}-container >  ${stepsItemCls}-content > ${stepsItemCls}-title::after`]: {
          display: "none"
        }
      }
    },
    [`${stepsItemCls}-container`]: {
      outline: "none",
      [`&:focus-visible`]: {
        [stepItemIconCls]: {
          ...genFocusOutline(token)
        }
      }
    },
    [`${stepItemIconCls}, ${stepsItemCls}-content`]: {
      display: "inline-block",
      verticalAlign: "top"
    },
    [stepItemIconCls]: {
      width: token.iconSize,
      height: token.iconSize,
      marginTop: 0,
      marginBottom: 0,
      marginInlineStart: 0,
      marginInlineEnd: token.marginXS,
      fontSize: token.iconFontSize,
      fontFamily: token.fontFamily,
      lineHeight: `${token.iconSize}px`,
      textAlign: "center",
      borderRadius: token.iconSize,
      border: `${token.lineWidth}px ${token.lineType} transparent`,
      transition: `background-color ${motionDurationSlow}, border-color ${motionDurationSlow}`,
      [`${componentCls}-icon`]: {
        position: "relative",
        top: token.iconTop,
        color: token.colorPrimary,
        lineHeight: 1
      }
    },
    [`${stepsItemCls}-tail`]: {
      position: "absolute",
      top: token.iconSize / 2 - token.paddingXXS,
      insetInlineStart: 0,
      width: "100%",
      "&::after": {
        display: "inline-block",
        width: "100%",
        height: token.lineWidth,
        background: token.colorSplit,
        borderRadius: token.lineWidth,
        transition: `background ${motionDurationSlow}`,
        content: '""'
      }
    },
    [`${stepsItemCls}-title`]: {
      position: "relative",
      display: "inline-block",
      paddingInlineEnd: token.padding,
      color: token.colorText,
      fontSize: token.fontSizeLG,
      lineHeight: `${token.titleLineHeight}px`,
      "&::after": {
        position: "absolute",
        top: token.titleLineHeight / 2,
        insetInlineStart: "100%",
        display: "block",
        width: 9999,
        height: token.lineWidth,
        background: token.processTailColor,
        content: '""'
      }
    },
    [`${stepsItemCls}-subtitle`]: {
      display: "inline",
      marginInlineStart: token.marginXS,
      color: token.colorTextDescription,
      fontWeight: "normal",
      fontSize: token.fontSize
    },
    [`${stepsItemCls}-description`]: {
      color: token.colorTextDescription,
      fontSize: token.fontSize
    },
    ...genStepsItemStatusStyle("wait" /* wait */, token),
    ...genStepsItemStatusStyle("process" /* process */, token),
    [`${stepsItemCls}-process > ${stepsItemCls}-container > ${stepsItemCls}-title`]: {
      fontWeight: token.fontWeightStrong
    },
    ...genStepsItemStatusStyle("finish" /* finish */, token),
    ...genStepsItemStatusStyle("error" /* error */, token),
    [`${stepsItemCls}${componentCls}-next-error > ${componentCls}-item-title::after`]: {
      background: token.colorError
    },
    [`${stepsItemCls}-disabled`]: {
      cursor: "not-allowed"
    }
  };
};
const genStepsClickableStyle = (token) => {
  const { componentCls, motionDurationSlow } = token;
  return {
    [`& ${componentCls}-item`]: {
      [`&:not(${componentCls}-item-active)`]: {
        [`& > ${componentCls}-item-container[role='button']`]: {
          cursor: "pointer",
          [`${componentCls}-item`]: {
            [`&-title, &-subtitle, &-description, &-icon ${componentCls}-icon`]: {
              transition: `color ${motionDurationSlow}`
            }
          },
          "&:hover": {
            [`${componentCls}-item`]: {
              [`&-title, &-subtitle, &-description`]: {
                color: token.colorPrimary
              }
            }
          }
        },
        [`&:not(${componentCls}-item-process)`]: {
          [`& > ${componentCls}-item-container[role='button']:hover`]: {
            [`${componentCls}-item`]: {
              "&-icon": {
                borderColor: token.colorPrimary,
                [`${componentCls}-icon`]: {
                  color: token.colorPrimary
                }
              }
            }
          }
        }
      }
    },
    [`&${componentCls}-horizontal:not(${componentCls}-label-vertical)`]: {
      [`${componentCls}-item`]: {
        paddingInlineStart: token.padding,
        whiteSpace: "nowrap",
        "&:first-child": {
          paddingInlineStart: 0
        },
        [`&:last-child ${componentCls}-item-title`]: {
          paddingInlineEnd: 0
        },
        "&-tail": {
          display: "none"
        },
        "&-description": {
          maxWidth: token.descriptionMaxWidth,
          whiteSpace: "normal"
        }
      }
    }
  };
};
const genStepsStyle = (token) => {
  const { componentCls } = token;
  return {
    [componentCls]: {
      ...resetComponent(token),
      display: "flex",
      width: "100%",
      fontSize: 0,
      textAlign: "initial",
      // single Item
      ...genStepsItemStyle(token),
      // Clickable
      ...genStepsClickableStyle(token),
      // custom-icon
      ...genStepsCustomIconStyle(token),
      // small
      ...genStepsSmallStyle(token),
      // vertical
      ...genStepsVerticalStyle(token),
      // label-placement
      ...genStepsLabelPlacementStyle(token),
      // progress-dot
      ...genStepsProgressDotStyle(token),
      // nav
      ...genStepsNavStyle(token),
      // progress
      ...genStepsProgressStyle(token),
      // inline
      ...genStepsInlineStyle(token)
    }
  };
};
const useStyle$4 = genComponentStyleHook(
  "Steps",
  (token) => {
    const {
      wireframe,
      colorTextDisabled,
      controlHeightLG,
      colorTextLightSolid,
      colorText,
      colorPrimary,
      colorTextLabel,
      colorTextDescription,
      colorTextQuaternary,
      colorFillContent,
      controlItemBgActive,
      colorError,
      colorBgContainer,
      colorBorderSecondary,
      colorSplit
    } = token;
    const stepsToken = merge(token, {
      // Steps component less variable
      processIconColor: colorTextLightSolid,
      processTitleColor: colorText,
      processDescriptionColor: colorText,
      processIconBgColor: colorPrimary,
      processIconBorderColor: colorPrimary,
      processDotColor: colorPrimary,
      processTailColor: colorSplit,
      waitIconColor: wireframe ? colorTextDisabled : colorTextLabel,
      waitTitleColor: colorTextDescription,
      waitDescriptionColor: colorTextDescription,
      waitTailColor: colorSplit,
      waitIconBgColor: wireframe ? colorBgContainer : colorFillContent,
      waitIconBorderColor: wireframe ? colorTextDisabled : "transparent",
      waitDotColor: colorTextDisabled,
      finishIconColor: colorPrimary,
      finishTitleColor: colorText,
      finishDescriptionColor: colorTextDescription,
      finishTailColor: colorPrimary,
      finishIconBgColor: wireframe ? colorBgContainer : controlItemBgActive,
      finishIconBorderColor: wireframe ? colorPrimary : controlItemBgActive,
      finishDotColor: colorPrimary,
      errorIconColor: colorTextLightSolid,
      errorTitleColor: colorError,
      errorDescriptionColor: colorError,
      errorTailColor: colorSplit,
      errorIconBgColor: colorError,
      errorIconBorderColor: colorError,
      errorDotColor: colorError,
      stepsNavActiveColor: colorPrimary,
      stepsProgressSize: controlHeightLG,
      // Steps inline variable
      inlineDotSize: 6,
      inlineTitleColor: colorTextQuaternary,
      inlineTailColor: colorBorderSecondary
    });
    return [genStepsStyle(stepsToken)];
  },
  (token) => {
    const {
      colorTextDisabled,
      fontSize,
      controlHeightSM,
      controlHeight,
      controlHeightLG,
      fontSizeHeading3
    } = token;
    return {
      titleLineHeight: controlHeight,
      customIconSize: controlHeight,
      customIconTop: 0,
      customIconFontSize: controlHeightSM,
      iconSize: controlHeight,
      iconTop: -0.5,
      // magic for ui experience
      iconFontSize: fontSize,
      iconSizeSM: fontSizeHeading3,
      dotSize: controlHeight / 4,
      dotCurrentSize: controlHeightLG / 4,
      navArrowColor: colorTextDisabled,
      navContentMaxWidth: "auto",
      descriptionMaxWidth: 140
    };
  }
);

function filter(items) {
  return items.filter((item) => item);
}
function useLegacyItems(items, children) {
  if (items) {
    return items;
  }
  const childrenItems = toArray$2(children).map((node) => {
    if (React.isValidElement(node)) {
      const { props } = node;
      const item = {
        ...props
      };
      return item;
    }
    return null;
  });
  return filter(childrenItems);
}

const Steps = (props) => {
  const {
    percent,
    size: customizeSize,
    className,
    rootClassName,
    items,
    responsive = true,
    current = 0,
    children,
    style,
    ...restProps
  } = props;
  useBreakpoint$1(responsive);
  const { getPrefixCls, steps } = React.useContext(ConfigContext);
  const size = useSize(customizeSize);
  const prefixCls = getPrefixCls("steps", props.prefixCls);
  const [wrapSSR, hashId] = useStyle$4(prefixCls);
  const isInline = props.type === "inline";
  const iconPrefix = getPrefixCls("", props.iconPrefix);
  const mergedItems = useLegacyItems(items, children);
  const mergedPercent = isInline ? void 0 : percent;
  const mergedStyle = { ...steps?.style, ...style };
  const stepsClassName = classNames(
    steps?.className,
    {
      [`${prefixCls}-with-progress`]: mergedPercent !== void 0
    },
    className,
    rootClassName,
    hashId
  );
  const icons = {
    finish: /* @__PURE__ */ jsx(CheckIcon, { className: `${prefixCls}-finish-icon` }),
    error: /* @__PURE__ */ jsx(CloseIcon, { className: `${prefixCls}-error-icon` })
  };
  const stepIconRender = ({ node, status }) => {
    if (status === "process" && mergedPercent !== void 0) {
      const progressWidth = size === "small" ? 32 : 40;
      return /* @__PURE__ */ jsxs("div", { className: `${prefixCls}-progress-icon`, children: [
        /* @__PURE__ */ jsx(
          Progress,
          {
            type: "circle",
            percent: mergedPercent,
            size: progressWidth,
            strokeWidth: 4,
            format: () => null
          }
        ),
        node
      ] });
    }
    return node;
  };
  const itemRender = (item, stepItem) => item.description ? /* @__PURE__ */ jsx(Tooltip, { title: item.description, children: stepItem }) : stepItem;
  return wrapSSR(
    /* @__PURE__ */ jsx(
      RcSteps,
      {
        icons,
        ...restProps,
        style: mergedStyle,
        current,
        size,
        items: mergedItems,
        itemRender: isInline ? itemRender : void 0,
        stepIcon: stepIconRender,
        direction: "horizontal",
        prefixCls,
        iconPrefix,
        className: stepsClassName
      }
    )
  );
};
Steps.Step = RcSteps.Step;

const genSwitchSmallStyle = (token) => {
  const {
    componentCls,
    trackHeightSM,
    trackPadding,
    trackMinWidthSM,
    innerMinMarginSM,
    innerMaxMarginSM,
    handleSizeSM
  } = token;
  const switchInnerCls = `${componentCls}-inner`;
  return {
    [componentCls]: {
      [`&${componentCls}-small`]: {
        minWidth: trackMinWidthSM,
        height: trackHeightSM,
        lineHeight: `${trackHeightSM}px`,
        [`${componentCls}-inner`]: {
          paddingInlineStart: innerMaxMarginSM,
          paddingInlineEnd: innerMinMarginSM,
          [`${switchInnerCls}-checked`]: {
            marginInlineStart: `calc(-100% + ${handleSizeSM + trackPadding * 2}px - ${innerMaxMarginSM * 2}px)`,
            marginInlineEnd: `calc(100% - ${handleSizeSM + trackPadding * 2}px + ${innerMaxMarginSM * 2}px)`
          },
          [`${switchInnerCls}-unchecked`]: {
            marginTop: -trackHeightSM,
            marginInlineStart: 0,
            marginInlineEnd: 0
          }
        },
        [`${componentCls}-handle`]: {
          width: handleSizeSM,
          height: handleSizeSM
        },
        [`${componentCls}-loading-icon`]: {
          top: (handleSizeSM - token.switchLoadingIconSize) / 2,
          fontSize: token.switchLoadingIconSize
        },
        [`&${componentCls}-checked`]: {
          [`${componentCls}-inner`]: {
            paddingInlineStart: innerMinMarginSM,
            paddingInlineEnd: innerMaxMarginSM,
            [`${switchInnerCls}-checked`]: {
              marginInlineStart: 0,
              marginInlineEnd: 0
            },
            [`${switchInnerCls}-unchecked`]: {
              marginInlineStart: `calc(100% - ${handleSizeSM + trackPadding * 2}px + ${innerMaxMarginSM * 2}px)`,
              marginInlineEnd: `calc(-100% + ${handleSizeSM + trackPadding * 2}px - ${innerMaxMarginSM * 2}px)`
            }
          },
          [`${componentCls}-handle`]: {
            insetInlineStart: `calc(100% - ${handleSizeSM + trackPadding}px)`
          }
        },
        [`&:not(${componentCls}-disabled):active`]: {
          [`&:not(${componentCls}-checked) ${switchInnerCls}`]: {
            [`${switchInnerCls}-unchecked`]: {
              marginInlineStart: token.marginXXS / 2,
              marginInlineEnd: -token.marginXXS / 2
            }
          },
          [`&${componentCls}-checked ${switchInnerCls}`]: {
            [`${switchInnerCls}-checked`]: {
              marginInlineStart: -token.marginXXS / 2,
              marginInlineEnd: token.marginXXS / 2
            }
          }
        }
      }
    }
  };
};
const genSwitchLoadingStyle = (token) => {
  const { componentCls, handleSize } = token;
  return {
    [componentCls]: {
      [`${componentCls}-loading-icon${token.iconCls}`]: {
        position: "relative",
        top: (handleSize - token.fontSize) / 2,
        color: token.switchLoadingIconColor,
        verticalAlign: "top"
      },
      [`&${componentCls}-checked ${componentCls}-loading-icon`]: {
        color: token.switchColor
      }
    }
  };
};
const genSwitchHandleStyle = (token) => {
  const { componentCls, motion, trackPadding, handleBg, handleShadow, handleSize } = token;
  const switchHandleCls = `${componentCls}-handle`;
  return {
    [componentCls]: {
      [switchHandleCls]: {
        position: "absolute",
        top: trackPadding,
        insetInlineStart: trackPadding,
        width: handleSize,
        height: handleSize,
        transition: `all ${token.switchDuration} ease-in-out`,
        "&::before": {
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          backgroundColor: handleBg,
          borderRadius: handleSize / 2,
          boxShadow: handleShadow,
          transition: `all ${token.switchDuration} ease-in-out`,
          content: '""'
        }
      },
      [`&${componentCls}-checked ${switchHandleCls}`]: {
        insetInlineStart: `calc(100% - ${handleSize + trackPadding}px)`
      },
      [`&:not(${componentCls}-disabled):active`]: motion ? {
        [`${switchHandleCls}::before`]: {
          insetInlineEnd: token.switchHandleActiveInset,
          insetInlineStart: 0
        },
        [`&${componentCls}-checked ${switchHandleCls}::before`]: {
          insetInlineEnd: 0,
          insetInlineStart: token.switchHandleActiveInset
        }
      } : (
        /* istanbul ignore next */
        {}
      )
    }
  };
};
const genSwitchInnerStyle = (token) => {
  const { componentCls, trackHeight, trackPadding, innerMinMargin, innerMaxMargin, handleSize } = token;
  const switchInnerCls = `${componentCls}-inner`;
  return {
    [componentCls]: {
      [switchInnerCls]: {
        display: "block",
        overflow: "hidden",
        borderRadius: 100,
        height: "100%",
        paddingInlineStart: innerMaxMargin,
        paddingInlineEnd: innerMinMargin,
        transition: `padding-inline-start ${token.switchDuration} ease-in-out, padding-inline-end ${token.switchDuration} ease-in-out`,
        [`${switchInnerCls}-checked, ${switchInnerCls}-unchecked`]: {
          display: "block",
          color: token.colorTextLightSolid,
          fontSize: token.fontSizeSM,
          transition: `margin-inline-start ${token.switchDuration} ease-in-out, margin-inline-end ${token.switchDuration} ease-in-out`,
          pointerEvents: "none"
        },
        [`${switchInnerCls}-checked`]: {
          marginInlineStart: `calc(-100% + ${handleSize + trackPadding * 2}px - ${innerMaxMargin * 2}px)`,
          marginInlineEnd: `calc(100% - ${handleSize + trackPadding * 2}px + ${innerMaxMargin * 2}px)`
        },
        [`${switchInnerCls}-unchecked`]: {
          marginTop: -trackHeight,
          marginInlineStart: 0,
          marginInlineEnd: 0
        }
      },
      [`&${componentCls}-checked ${switchInnerCls}`]: {
        paddingInlineStart: innerMinMargin,
        paddingInlineEnd: innerMaxMargin,
        [`${switchInnerCls}-checked`]: {
          marginInlineStart: 0,
          marginInlineEnd: 0
        },
        [`${switchInnerCls}-unchecked`]: {
          marginInlineStart: `calc(100% - ${handleSize + trackPadding * 2}px + ${innerMaxMargin * 2}px)`,
          marginInlineEnd: `calc(-100% + ${handleSize + trackPadding * 2}px - ${innerMaxMargin * 2}px)`
        }
      },
      [`&:not(${componentCls}-disabled):active`]: {
        [`&:not(${componentCls}-checked) ${switchInnerCls}`]: {
          [`${switchInnerCls}-unchecked`]: {
            marginInlineStart: trackPadding * 2,
            marginInlineEnd: -trackPadding * 2
          }
        },
        [`&${componentCls}-checked ${switchInnerCls}`]: {
          [`${switchInnerCls}-checked`]: {
            marginInlineStart: -trackPadding * 2,
            marginInlineEnd: trackPadding * 2
          }
        }
      }
    }
  };
};
const genSwitchStyle = (token) => {
  const { componentCls, trackHeight, trackMinWidth } = token;
  return {
    [componentCls]: {
      ...resetComponent(token),
      position: "relative",
      display: "inline-block",
      boxSizing: "border-box",
      minWidth: trackMinWidth,
      height: trackHeight,
      lineHeight: `${trackHeight}px`,
      verticalAlign: "middle",
      background: token.colorTextQuaternary,
      border: "0",
      borderRadius: 100,
      cursor: "pointer",
      transition: `all ${token.motionDurationMid}`,
      userSelect: "none",
      [`&:hover:not(${componentCls}-disabled)`]: {
        background: token.colorTextTertiary
      },
      ...genFocusStyle(token),
      [`&${componentCls}-checked`]: {
        background: token.switchColor,
        [`&:hover:not(${componentCls}-disabled)`]: {
          background: token.colorPrimaryHover
        }
      },
      [`&${componentCls}-loading, &${componentCls}-disabled`]: {
        cursor: "not-allowed",
        opacity: token.switchDisabledOpacity,
        "*": {
          boxShadow: "none",
          cursor: "not-allowed"
        }
      }
    }
  };
};
const useStyle$3 = genComponentStyleHook(
  "Switch",
  (token) => {
    const switchToken = merge(token, {
      switchDuration: token.motionDurationMid,
      switchColor: token.colorPrimary,
      switchDisabledOpacity: token.opacityLoading,
      switchLoadingIconSize: token.fontSizeIcon * 0.75,
      switchLoadingIconColor: `rgba(0, 0, 0, ${token.opacityLoading})`,
      switchHandleActiveInset: "-30%"
    });
    return [
      genSwitchStyle(switchToken),
      // inner style
      genSwitchInnerStyle(switchToken),
      // handle style
      genSwitchHandleStyle(switchToken),
      // loading style
      genSwitchLoadingStyle(switchToken),
      // small style
      genSwitchSmallStyle(switchToken)
    ];
  },
  (token) => {
    const { fontSize, lineHeight, controlHeight, colorWhite } = token;
    const height = fontSize * lineHeight;
    const heightSM = controlHeight / 2;
    const padding = 2;
    const handleSize = height - padding * 2;
    const handleSizeSM = heightSM - padding * 2;
    return {
      trackHeight: height,
      trackHeightSM: heightSM,
      trackMinWidth: handleSize * 2 + padding * 4,
      trackMinWidthSM: handleSizeSM * 2 + padding * 2,
      trackPadding: padding,
      // Fixed value
      handleBg: colorWhite,
      handleSize,
      handleSizeSM,
      handleShadow: `0 2px 4px 0 ${new TinyColor("#00230b").setAlpha(0.2).toRgbString()}`,
      innerMinMargin: handleSize / 2,
      innerMaxMargin: handleSize + padding + padding * 2,
      innerMinMarginSM: handleSizeSM / 2,
      innerMaxMarginSM: handleSizeSM + padding + padding * 2
    };
  }
);

const Switch = React.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    size: customizeSize,
    disabled: customDisabled,
    loading,
    className,
    rootClassName,
    style,
    ...restProps
  } = props;
  const { getPrefixCls, switch: SWITCH } = React.useContext(ConfigContext);
  const disabled = React.useContext(DisabledContext);
  const mergedDisabled = (customDisabled ?? disabled) || loading;
  const prefixCls = getPrefixCls("switch", customizePrefixCls);
  const loadingIcon = /* @__PURE__ */ jsx("div", { className: `${prefixCls}-handle`, children: loading && /* @__PURE__ */ jsx(CircularProgress, { className: `${prefixCls}-loading-icon` }) });
  const [wrapSSR, hashId] = useStyle$3(prefixCls);
  const mergedSize = useSize(customizeSize);
  const classes = classNames(
    SWITCH?.className,
    {
      [`${prefixCls}-small`]: mergedSize === "small",
      [`${prefixCls}-loading`]: loading
    },
    className,
    rootClassName,
    hashId
  );
  const mergedStyle = { ...SWITCH?.style, ...style };
  return wrapSSR(
    /* @__PURE__ */ jsx(Wave, { component: "Switch", children: /* @__PURE__ */ jsx(
      RcSwitch,
      {
        ...restProps,
        prefixCls,
        className: classes,
        style: mergedStyle,
        disabled: mergedDisabled,
        ref,
        loadingIcon
      }
    ) })
  );
});
Switch.__IPASS_SWITCH = true;

function Column(_) {
  return null;
}

function ColumnGroup(_) {
  return null;
}

function easeInOutCubic(t, b, c, d) {
  const cc = c - b;
  t /= d / 2;
  if (t < 1) {
    return cc / 2 * t * t * t + b;
  }
  return cc / 2 * ((t -= 2) * t * t + 2) + b;
}

function isWindow(obj) {
  return obj !== null && obj !== void 0 && obj === obj.window;
}
function getScroll(target, top) {
  if (typeof window === "undefined") {
    return 0;
  }
  const method = top ? "scrollTop" : "scrollLeft";
  let result = 0;
  if (isWindow(target)) {
    result = target[top ? "pageYOffset" : "pageXOffset"];
  } else if (target instanceof Document) {
    result = target.documentElement[method];
  } else if (target instanceof HTMLElement) {
    result = target[method];
  } else if (target) {
    result = target[method];
  }
  if (target && !isWindow(target) && typeof result !== "number") {
    result = (target.ownerDocument ?? target).documentElement?.[method];
  }
  return result;
}

function scrollTo(y, options = {}) {
  const { getContainer = () => window, callback, duration = 450 } = options;
  const container = getContainer();
  const scrollTop = getScroll(container, true);
  const startTime = Date.now();
  const frameFunc = () => {
    const timestamp = Date.now();
    const time = timestamp - startTime;
    const nextScrollTop = easeInOutCubic(time > duration ? duration : time, scrollTop, y, duration);
    if (isWindow(container)) {
      container.scrollTo(window.pageXOffset, nextScrollTop);
    } else if (container instanceof Document || container.constructor.name === "HTMLDocument") {
      container.documentElement.scrollTop = nextScrollTop;
    } else {
      container.scrollTop = nextScrollTop;
    }
    if (time < duration) {
      raf(frameFunc);
    } else if (typeof callback === "function") {
      callback();
    }
  };
  raf(frameFunc);
}

function renderExpandIcon(locale) {
  return function expandIcon({
    prefixCls,
    onExpand,
    record,
    expanded,
    expandable
  }) {
    const iconPrefix = `${prefixCls}-row-expand-icon`;
    return /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: (e) => {
          onExpand(record, e);
          e.stopPropagation();
        },
        className: classNames(iconPrefix, {
          [`${iconPrefix}-spaced`]: !expandable,
          [`${iconPrefix}-expanded`]: expandable && expanded,
          [`${iconPrefix}-collapsed`]: expandable && !expanded
        }),
        "aria-label": expanded ? locale.collapse : locale.expand,
        "aria-expanded": expanded
      }
    );
  };
}

function useContainerWidth(prefixCls) {
  const getContainerWidth = (ele, width) => {
    const container = ele.querySelector(`.${prefixCls}-container`);
    let returnWidth = width;
    if (container) {
      const style = getComputedStyle(container);
      const borderLeft = parseInt(style.borderLeftWidth, 10);
      const borderRight = parseInt(style.borderRightWidth, 10);
      returnWidth = width - borderLeft - borderRight;
    }
    return returnWidth;
  };
  return getContainerWidth;
}

function useLazyKVMap(data, childrenColumnName, getRowKey) {
  const mapCacheRef = React.useRef({});
  function getRecordByKey(key) {
    if (!mapCacheRef.current || mapCacheRef.current.data !== data || mapCacheRef.current.childrenColumnName !== childrenColumnName || mapCacheRef.current.getRowKey !== getRowKey) {
      let dig = function(records) {
        records.forEach((record, index) => {
          const rowKey = getRowKey(record, index);
          kvMap.set(rowKey, record);
          if (record && typeof record === "object" && childrenColumnName in record) {
            dig(record[childrenColumnName] || []);
          }
        });
      };
      const kvMap = /* @__PURE__ */ new Map();
      dig(data);
      mapCacheRef.current = {
        data,
        childrenColumnName,
        kvMap,
        getRowKey
      };
    }
    return mapCacheRef.current.kvMap.get(key);
  }
  return [getRecordByKey];
}

const DEFAULT_PAGE_SIZE = 10;
function getPaginationParam(mergedPagination, pagination) {
  const param = {
    current: mergedPagination.current,
    pageSize: mergedPagination.pageSize
  };
  const paginationObj = pagination && typeof pagination === "object" ? pagination : {};
  Object.keys(paginationObj).forEach((pageProp) => {
    const value = mergedPagination[pageProp];
    if (typeof value !== "function") {
      param[pageProp] = value;
    }
  });
  return param;
}
function usePagination(total, onChange, pagination) {
  const { total: paginationTotal = 0, ...paginationObj } = pagination && typeof pagination === "object" ? pagination : {};
  const [innerPagination, setInnerPagination] = useState$1(
    () => ({
      current: "defaultCurrent" in paginationObj ? paginationObj.defaultCurrent : 1,
      pageSize: "defaultPageSize" in paginationObj ? paginationObj.defaultPageSize : DEFAULT_PAGE_SIZE
    })
  );
  const mergedPagination = extendsObject(
    innerPagination,
    paginationObj,
    {
      total: paginationTotal > 0 ? paginationTotal : total
    }
  );
  const maxPage = Math.ceil((paginationTotal || total) / mergedPagination.pageSize);
  if (mergedPagination.current > maxPage) {
    mergedPagination.current = maxPage || 1;
  }
  const refreshPagination = (current, pageSize) => {
    setInnerPagination({
      current: current ?? 1,
      pageSize: pageSize || mergedPagination.pageSize
    });
  };
  const onInternalChange = (current, pageSize) => {
    if (pagination) {
      pagination.onChange?.(current, pageSize);
    }
    refreshPagination(current, pageSize);
    onChange(current, pageSize || mergedPagination?.pageSize);
  };
  if (pagination === false) {
    return [{}, () => {
    }];
  }
  return [
    {
      ...mergedPagination,
      onChange: onInternalChange
    },
    refreshPagination
  ];
}

function getColumnKey(column, defaultKey) {
  if ("key" in column && column.key !== void 0 && column.key !== null) {
    return column.key;
  }
  if (column.dataIndex) {
    return Array.isArray(column.dataIndex) ? column.dataIndex.join(".") : column.dataIndex;
  }
  return defaultKey;
}
function getColumnPos(index, pos) {
  return pos ? `${pos}-${index}` : `${index}`;
}
function renderColumnTitle(title, props) {
  if (typeof title === "function") {
    return title(props);
  }
  return title;
}
function safeColumnTitle(title, props) {
  const res = renderColumnTitle(title, props);
  if (Object.prototype.toString.call(res) === "[object Object]")
    return "";
  return res;
}

const ASCEND = "ascend";
const DESCEND = "descend";
function getMultiplePriority(column) {
  if (typeof column.sorter === "object" && typeof column.sorter.multiple === "number") {
    return column.sorter.multiple;
  }
  return false;
}
function getSortFunction(sorter) {
  if (typeof sorter === "function") {
    return sorter;
  }
  if (sorter && typeof sorter === "object" && sorter.compare) {
    return sorter.compare;
  }
  return false;
}
function nextSortDirection(sortDirections, current) {
  if (!current) {
    return sortDirections[0];
  }
  return sortDirections[sortDirections.indexOf(current) + 1];
}
function collectSortStates(columns, init, pos) {
  let sortStates = [];
  function pushState(column, columnPos) {
    sortStates.push({
      column,
      key: getColumnKey(column, columnPos),
      multiplePriority: getMultiplePriority(column),
      sortOrder: column.sortOrder
    });
  }
  (columns || []).forEach((column, index) => {
    const columnPos = getColumnPos(index, pos);
    if (column.children) {
      if ("sortOrder" in column) {
        pushState(column, columnPos);
      }
      sortStates = [
        ...sortStates,
        ...collectSortStates(column.children, init, columnPos)
      ];
    } else if (column.sorter) {
      if ("sortOrder" in column) {
        pushState(column, columnPos);
      } else if (init && column.defaultSortOrder) {
        sortStates.push({
          column,
          key: getColumnKey(column, columnPos),
          multiplePriority: getMultiplePriority(column),
          sortOrder: column.defaultSortOrder
        });
      }
    }
  });
  return sortStates;
}
function injectSorter(prefixCls, columns, sorterStates, triggerSorter, defaultSortDirections, tableLocale, tableShowSorterTooltip, pos) {
  return (columns || []).map((column, index) => {
    const columnPos = getColumnPos(index, pos);
    let newColumn = column;
    if (newColumn.sorter) {
      const sortDirections = newColumn.sortDirections || defaultSortDirections;
      const showSorterTooltip = newColumn.showSorterTooltip === void 0 ? tableShowSorterTooltip : newColumn.showSorterTooltip;
      const columnKey = getColumnKey(newColumn, columnPos);
      const sorterState = sorterStates.find(({ key }) => key === columnKey);
      const sortOrder = sorterState ? sorterState.sortOrder : null;
      const nextSortOrder = nextSortDirection(sortDirections, sortOrder);
      let sorter;
      if (column.sortIcon) {
        sorter = column.sortIcon({ sortOrder });
      } else {
        const upNode = sortDirections.includes(ASCEND) && /* @__PURE__ */ jsx(
          ArrowDropUpIcon,
          {
            className: classNames(`${prefixCls}-column-sorter-up`, {
              active: sortOrder === ASCEND
            })
          }
        );
        const downNode = sortDirections.includes(DESCEND) && /* @__PURE__ */ jsx(
          ArrowDropDownIcon,
          {
            className: classNames(`${prefixCls}-column-sorter-down`, {
              active: sortOrder === DESCEND
            })
          }
        );
        sorter = /* @__PURE__ */ jsx(
          "span",
          {
            className: classNames(`${prefixCls}-column-sorter`, {
              [`${prefixCls}-column-sorter-full`]: !!(upNode && downNode)
            }),
            children: /* @__PURE__ */ jsxs("span", { className: `${prefixCls}-column-sorter-inner`, "aria-hidden": "true", children: [
              upNode,
              downNode
            ] })
          }
        );
      }
      const { cancelSort, triggerAsc, triggerDesc } = tableLocale || {};
      let sortTip = cancelSort;
      if (nextSortOrder === DESCEND) {
        sortTip = triggerDesc;
      } else if (nextSortOrder === ASCEND) {
        sortTip = triggerAsc;
      }
      const tooltipProps = typeof showSorterTooltip === "object" ? showSorterTooltip : { title: sortTip };
      newColumn = {
        ...newColumn,
        className: classNames(newColumn.className, { [`${prefixCls}-column-sort`]: sortOrder }),
        title: (renderProps) => {
          const renderSortTitle = /* @__PURE__ */ jsxs("div", { className: `${prefixCls}-column-sorters`, children: [
            /* @__PURE__ */ jsx("span", { className: `${prefixCls}-column-title`, children: renderColumnTitle(column.title, renderProps) }),
            sorter
          ] });
          return showSorterTooltip ? /* @__PURE__ */ jsx(Tooltip, { ...tooltipProps, children: renderSortTitle }) : renderSortTitle;
        },
        onHeaderCell: (col) => {
          const cell = column.onHeaderCell && column.onHeaderCell(col) || {};
          const originOnClick = cell.onClick;
          const originOKeyDown = cell.onKeyDown;
          cell.onClick = (event) => {
            triggerSorter({
              column,
              key: columnKey,
              sortOrder: nextSortOrder,
              multiplePriority: getMultiplePriority(column)
            });
            originOnClick?.(event);
          };
          cell.onKeyDown = (event) => {
            if (event.keyCode === KeyCode.ENTER) {
              triggerSorter({
                column,
                key: columnKey,
                sortOrder: nextSortOrder,
                multiplePriority: getMultiplePriority(column)
              });
              originOKeyDown?.(event);
            }
          };
          const renderTitle = safeColumnTitle(column.title, {});
          const displayTitle = renderTitle?.toString();
          if (sortOrder) {
            cell["aria-sort"] = sortOrder === "ascend" ? "ascending" : "descending";
          } else {
            cell["aria-label"] = displayTitle || "";
          }
          cell.className = classNames(cell.className, `${prefixCls}-column-has-sorters`);
          cell.tabIndex = 0;
          if (column.ellipsis) {
            cell.title = (renderTitle ?? "").toString();
          }
          return cell;
        }
      };
    }
    if ("children" in newColumn) {
      newColumn = {
        ...newColumn,
        children: injectSorter(
          prefixCls,
          newColumn.children,
          sorterStates,
          triggerSorter,
          defaultSortDirections,
          tableLocale,
          tableShowSorterTooltip,
          columnPos
        )
      };
    }
    return newColumn;
  });
}
function stateToInfo(sorterStates) {
  const { column, sortOrder } = sorterStates;
  return { column, order: sortOrder, field: column.dataIndex, columnKey: column.key };
}
function generateSorterInfo(sorterStates) {
  const list = sorterStates.filter(({ sortOrder }) => sortOrder).map(stateToInfo);
  if (list.length === 0 && sorterStates.length) {
    return {
      ...stateToInfo(sorterStates[sorterStates.length - 1]),
      column: void 0
    };
  }
  if (list.length <= 1) {
    return list[0] || {};
  }
  return list;
}
function getSortData(data, sortStates, childrenColumnName) {
  const innerSorterStates = sortStates.slice().sort((a, b) => b.multiplePriority - a.multiplePriority);
  const cloneData = data.slice();
  const runningSorters = innerSorterStates.filter(
    ({ column: { sorter }, sortOrder }) => getSortFunction(sorter) && sortOrder
  );
  if (!runningSorters.length) {
    return cloneData;
  }
  return cloneData.sort((record1, record2) => {
    for (let i = 0; i < runningSorters.length; i += 1) {
      const sorterState = runningSorters[i];
      const {
        column: { sorter },
        sortOrder
      } = sorterState;
      const compareFn = getSortFunction(sorter);
      if (compareFn && sortOrder) {
        const compareResult = compareFn(record1, record2, sortOrder);
        if (compareResult !== 0) {
          return sortOrder === ASCEND ? compareResult : -compareResult;
        }
      }
    }
    return 0;
  }).map((record) => {
    const subRecords = record[childrenColumnName];
    if (subRecords) {
      return {
        ...record,
        [childrenColumnName]: getSortData(subRecords, sortStates, childrenColumnName)
      };
    }
    return record;
  });
}
function useFilterSorter({
  prefixCls,
  mergedColumns,
  onSorterChange,
  sortDirections,
  tableLocale,
  showSorterTooltip
}) {
  const [sortStates, setSortStates] = React.useState(
    collectSortStates(mergedColumns, true)
  );
  const mergedSorterStates = React.useMemo(() => {
    let validate = true;
    const collectedStates = collectSortStates(mergedColumns, false);
    if (!collectedStates.length) {
      return sortStates;
    }
    const validateStates = [];
    function patchStates(state) {
      if (validate) {
        validateStates.push(state);
      } else {
        validateStates.push({
          ...state,
          sortOrder: null
        });
      }
    }
    let multipleMode = null;
    collectedStates.forEach((state) => {
      if (multipleMode === null) {
        patchStates(state);
        if (state.sortOrder) {
          if (state.multiplePriority === false) {
            validate = false;
          } else {
            multipleMode = true;
          }
        }
      } else if (multipleMode && state.multiplePriority !== false) {
        patchStates(state);
      } else {
        validate = false;
        patchStates(state);
      }
    });
    return validateStates;
  }, [mergedColumns, sortStates]);
  const columnTitleSorterProps = React.useMemo(() => {
    const sortColumns = mergedSorterStates.map(({ column, sortOrder }) => ({
      column,
      order: sortOrder
    }));
    return {
      sortColumns,
      // Legacy
      sortColumn: sortColumns[0] && sortColumns[0].column,
      sortOrder: sortColumns[0] && sortColumns[0].order
    };
  }, [mergedSorterStates]);
  function triggerSorter(sortState) {
    let newSorterStates;
    if (sortState.multiplePriority === false || !mergedSorterStates.length || mergedSorterStates[0].multiplePriority === false) {
      newSorterStates = [sortState];
    } else {
      newSorterStates = [
        ...mergedSorterStates.filter(({ key }) => key !== sortState.key),
        sortState
      ];
    }
    setSortStates(newSorterStates);
    onSorterChange(generateSorterInfo(newSorterStates), newSorterStates);
  }
  const transformColumns = (innerColumns) => injectSorter(
    prefixCls,
    innerColumns,
    mergedSorterStates,
    triggerSorter,
    sortDirections,
    tableLocale,
    showSorterTooltip
  );
  const getSorters = () => generateSorterInfo(mergedSorterStates);
  return [transformColumns, mergedSorterStates, columnTitleSorterProps, getSorters];
}

function fillTitle(columns, columnTitleProps) {
  return columns.map((column) => {
    const cloneColumn = { ...column };
    cloneColumn.title = renderColumnTitle(column.title, columnTitleProps);
    if ("children" in cloneColumn) {
      cloneColumn.children = fillTitle(cloneColumn.children, columnTitleProps);
    }
    return cloneColumn;
  });
}
function useTitleColumns(columnTitleProps) {
  const filledColumns = React.useCallback(
    (columns) => fillTitle(columns, columnTitleProps),
    [columnTitleProps]
  );
  return [filledColumns];
}

const RcTable = genTable((prev, next) => {
  const { _renderTimes: prevRenderTimes } = prev;
  const { _renderTimes: nextRenderTimes } = next;
  return prevRenderTimes !== nextRenderTimes;
});

const RcVirtualTable = genVirtualTable((prev, next) => {
  const { _renderTimes: prevRenderTimes } = prev;
  const { _renderTimes: nextRenderTimes } = next;
  return prevRenderTimes !== nextRenderTimes;
});

const genBorderedStyle = (token) => {
  const { componentCls } = token;
  const tableBorder = `${token.lineWidth}px ${token.lineType} ${token.tableBorderColor}`;
  const getSizeBorderStyle = (size, paddingVertical, paddingHorizontal) => ({
    [`&${componentCls}-${size}`]: {
      [`> ${componentCls}-container`]: {
        [`> ${componentCls}-content, > ${componentCls}-body`]: {
          [`
            > table > tbody > tr > th,
            > table > tbody > tr > td
          `]: {
            [`> ${componentCls}-expanded-row-fixed`]: {
              margin: `-${paddingVertical}px -${paddingHorizontal + token.lineWidth}px`
            }
          }
        }
      }
    }
  });
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}${componentCls}-bordered`]: {
        // ============================ Title =============================
        [`> ${componentCls}-title`]: {
          border: tableBorder,
          borderBottom: 0
        },
        // ============================ Content ============================
        [`> ${componentCls}-container`]: {
          borderInlineStart: tableBorder,
          borderTop: tableBorder,
          [`
            > ${componentCls}-content,
            > ${componentCls}-header,
            > ${componentCls}-body,
            > ${componentCls}-summary
          `]: {
            "> table": {
              // ============================= Cell =============================
              [`
                > thead > tr > th,
                > thead > tr > td,
                > tbody > tr > th,
                > tbody > tr > td,
                > tfoot > tr > th,
                > tfoot > tr > td
              `]: {
                borderInlineEnd: tableBorder
              },
              // ============================ Header ============================
              "> thead": {
                "> tr:not(:last-child) > th": {
                  borderBottom: tableBorder
                },
                "> tr > th::before": {
                  backgroundColor: "transparent !important"
                }
              },
              // Fixed right should provides additional border
              [`
                > thead > tr,
                > tbody > tr,
                > tfoot > tr
              `]: {
                [`> ${componentCls}-cell-fix-right-first::after`]: {
                  borderInlineEnd: tableBorder
                }
              },
              // ========================== Expandable ==========================
              [`
                > tbody > tr > th,
                > tbody > tr > td
              `]: {
                [`> ${componentCls}-expanded-row-fixed`]: {
                  margin: `-${token.tablePaddingVertical}px -${token.tablePaddingHorizontal + token.lineWidth}px`,
                  "&::after": {
                    position: "absolute",
                    top: 0,
                    insetInlineEnd: token.lineWidth,
                    bottom: 0,
                    borderInlineEnd: tableBorder,
                    content: '""'
                  }
                }
              }
            }
          }
        },
        // ============================ Scroll ============================
        [`&${componentCls}-scroll-horizontal`]: {
          [`> ${componentCls}-container > ${componentCls}-body`]: {
            "> table > tbody": {
              [`
                > tr${componentCls}-expanded-row,
                > tr${componentCls}-placeholder
              `]: {
                [`> th, > td`]: {
                  borderInlineEnd: 0
                }
              }
            }
          }
        },
        // ============================ Size ============================
        ...getSizeBorderStyle(
          "medium",
          token.tablePaddingVerticalMudium,
          token.tablePaddingHorizontalMudium
        ),
        ...getSizeBorderStyle(
          "small",
          token.tablePaddingVerticalSmall,
          token.tablePaddingHorizontalSmall
        ),
        // ============================ Footer ============================
        [`> ${componentCls}-footer`]: {
          border: tableBorder,
          borderTop: 0
        }
      },
      // ============================ Nested ============================
      [`${componentCls}-cell`]: {
        [`${componentCls}-container:first-child`]: {
          // :first-child to avoid the case when bordered and title is set
          borderTop: 0
        },
        "&-scrollbar:not([rowspan])": {
          boxShadow: `0 ${token.lineWidth}px 0 ${token.lineWidth}px ${token.tableHeaderBg}`
        }
      },
      [`${componentCls}-bordered ${componentCls}-cell-scrollbar`]: {
        borderInlineEnd: tableBorder
      }
    }
  };
};

const genEllipsisStyle = (token) => {
  const { componentCls } = token;
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-cell-ellipsis`]: {
        ...textEllipsis,
        wordBreak: "keep-all",
        // Fixed first or last should special process
        [`
          &${componentCls}-cell-fix-left-last,
          &${componentCls}-cell-fix-right-first
        `]: {
          overflow: "visible",
          [`${componentCls}-cell-content`]: {
            display: "block",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }
        },
        [`${componentCls}-column-title`]: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          wordBreak: "keep-all"
        }
      }
    }
  };
};

const genEmptyStyle = (token) => {
  const { componentCls } = token;
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-tbody > tr${componentCls}-placeholder`]: {
        textAlign: "center",
        color: token.colorTextDisabled,
        [`
          &:hover > th,
          &:hover > td,
        `]: {
          background: token.colorBgContainer
        }
      }
    }
  };
};

const genExpandStyle = (token) => {
  const {
    componentCls,
    ipassCls,
    controlInteractiveSize: checkboxSize,
    motionDurationSlow,
    lineWidth,
    paddingXS,
    lineType,
    tableBorderColor,
    tableExpandIconBg,
    tableExpandColumnWidth,
    borderRadius,
    fontSize,
    fontSizeSM,
    lineHeight,
    tablePaddingVertical,
    tablePaddingHorizontal,
    tableExpandedRowBg,
    paddingXXS
  } = token;
  const halfInnerSize = checkboxSize / 2 - lineWidth;
  const expandIconSize = halfInnerSize * 2 + lineWidth * 3;
  const tableBorder = `${lineWidth}px ${lineType} ${tableBorderColor}`;
  const expandIconLineOffset = paddingXXS - lineWidth;
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-expand-icon-col`]: {
        width: tableExpandColumnWidth
      },
      [`${componentCls}-row-expand-icon-cell`]: {
        textAlign: "center",
        [`${componentCls}-row-expand-icon`]: {
          display: "inline-flex",
          float: "none",
          verticalAlign: "sub"
        }
      },
      [`${componentCls}-row-indent`]: {
        height: 1,
        float: "left"
      },
      [`${componentCls}-row-expand-icon`]: {
        ...operationUnit(token),
        position: "relative",
        float: "left",
        boxSizing: "border-box",
        width: expandIconSize,
        height: expandIconSize,
        padding: 0,
        color: "inherit",
        lineHeight: `${expandIconSize}px`,
        background: tableExpandIconBg,
        border: tableBorder,
        borderRadius,
        transform: `scale(${checkboxSize / expandIconSize})`,
        transition: `all ${motionDurationSlow}`,
        userSelect: "none",
        [`&:focus, &:hover, &:active`]: {
          borderColor: "currentcolor"
        },
        [`&::before, &::after`]: {
          position: "absolute",
          background: "currentcolor",
          transition: `transform ${motionDurationSlow} ease-out`,
          content: '""'
        },
        "&::before": {
          top: halfInnerSize,
          insetInlineEnd: expandIconLineOffset,
          insetInlineStart: expandIconLineOffset,
          height: lineWidth
        },
        "&::after": {
          top: expandIconLineOffset,
          bottom: expandIconLineOffset,
          insetInlineStart: halfInnerSize,
          width: lineWidth,
          transform: "rotate(90deg)"
        },
        // Motion effect
        "&-collapsed::before": {
          transform: "rotate(-180deg)"
        },
        "&-collapsed::after": {
          transform: "rotate(0deg)"
        },
        "&-spaced": {
          "&::before, &::after": {
            display: "none",
            content: "none"
          },
          background: "transparent",
          border: 0,
          visibility: "hidden"
        }
      },
      [`${componentCls}-row-indent + ${componentCls}-row-expand-icon`]: {
        marginTop: (fontSize * lineHeight - lineWidth * 3) / 2 - Math.ceil((fontSizeSM * 1.4 - lineWidth * 3) / 2),
        marginInlineEnd: paddingXS
      },
      [`tr${componentCls}-expanded-row`]: {
        "&, &:hover": {
          [`> th, > td`]: {
            background: tableExpandedRowBg
          }
        },
        [`${ipassCls}-descriptions-view`]: {
          display: "flex",
          table: {
            flex: "auto",
            width: "auto"
          }
        }
      },
      // With fixed
      [`${componentCls}-expanded-row-fixed`]: {
        position: "relative",
        margin: `-${tablePaddingVertical}px -${tablePaddingHorizontal}px`,
        padding: `${tablePaddingVertical}px ${tablePaddingHorizontal}px`
      }
    }
  };
};

const genFilterStyle = (token) => {
  const {
    componentCls,
    ipassCls,
    iconCls,
    tableFilterDropdownWidth,
    tableFilterDropdownSearchWidth,
    paddingXXS,
    paddingXS,
    colorText,
    lineWidth,
    lineType,
    tableBorderColor,
    tableHeaderIconColor,
    fontSizeSM,
    tablePaddingHorizontal,
    borderRadius,
    motionDurationSlow,
    colorTextDescription,
    colorPrimary,
    tableHeaderFilterActiveBg,
    colorTextDisabled,
    tableFilterDropdownBg,
    tableFilterDropdownHeight,
    controlItemBgHover,
    controlItemBgActive,
    boxShadowSecondary,
    filterDropdownMenuBg
  } = token;
  const dropdownPrefixCls = `${ipassCls}-dropdown`;
  const tableFilterDropdownPrefixCls = `${componentCls}-filter-dropdown`;
  const treePrefixCls = `${ipassCls}-tree`;
  const tableBorder = `${lineWidth}px ${lineType} ${tableBorderColor}`;
  return [
    {
      [`${componentCls}-wrapper`]: {
        [`${componentCls}-filter-column`]: {
          display: "flex",
          justifyContent: "space-between"
        },
        [`${componentCls}-filter-trigger`]: {
          position: "relative",
          display: "flex",
          alignItems: "center",
          marginBlock: -paddingXXS,
          marginInline: `${paddingXXS}px ${-tablePaddingHorizontal / 2}px`,
          padding: `0 ${paddingXXS}px`,
          color: tableHeaderIconColor,
          fontSize: fontSizeSM,
          borderRadius,
          cursor: "pointer",
          transition: `all ${motionDurationSlow}`,
          "&:hover": {
            color: colorTextDescription,
            background: tableHeaderFilterActiveBg
          },
          "&.active": {
            color: colorPrimary
          }
        }
      }
    },
    {
      // Dropdown
      [`${ipassCls}-dropdown`]: {
        [tableFilterDropdownPrefixCls]: {
          ...resetComponent(token),
          minWidth: tableFilterDropdownWidth,
          backgroundColor: tableFilterDropdownBg,
          borderRadius,
          boxShadow: boxShadowSecondary,
          overflow: "hidden",
          // Reset menu
          [`${dropdownPrefixCls}-menu`]: {
            maxHeight: tableFilterDropdownHeight,
            overflowX: "hidden",
            border: 0,
            boxShadow: "none",
            borderRadius: "unset",
            backgroundColor: filterDropdownMenuBg,
            "&:empty::after": {
              display: "block",
              padding: `${paddingXS}px 0`,
              color: colorTextDisabled,
              fontSize: fontSizeSM,
              textAlign: "center",
              content: '"Not Found"'
            }
          },
          [`${tableFilterDropdownPrefixCls}-tree`]: {
            paddingBlock: `${paddingXS}px 0`,
            paddingInline: paddingXS,
            [treePrefixCls]: {
              padding: 0
            },
            [`${treePrefixCls}-treenode ${treePrefixCls}-node-content-wrapper:hover`]: {
              backgroundColor: controlItemBgHover
            },
            [`${treePrefixCls}-treenode-checkbox-checked ${treePrefixCls}-node-content-wrapper`]: {
              "&, &:hover": {
                backgroundColor: controlItemBgActive
              }
            }
          },
          [`${tableFilterDropdownPrefixCls}-search`]: {
            padding: paddingXS,
            borderBottom: tableBorder,
            "&-input": {
              input: {
                minWidth: tableFilterDropdownSearchWidth
              },
              [iconCls]: {
                color: colorTextDisabled
              }
            }
          },
          [`${tableFilterDropdownPrefixCls}-checkall`]: {
            width: "100%",
            marginBottom: paddingXXS,
            marginInlineStart: paddingXXS
          },
          // Operation
          [`${tableFilterDropdownPrefixCls}-btns`]: {
            display: "flex",
            justifyContent: "space-between",
            padding: `${paddingXS - lineWidth}px ${paddingXS}px`,
            overflow: "hidden",
            borderTop: tableBorder
          }
        }
      }
    },
    // Dropdown Menu & SubMenu
    {
      // submenu of table filter dropdown
      [`${ipassCls}-dropdown ${tableFilterDropdownPrefixCls}, ${tableFilterDropdownPrefixCls}-submenu`]: {
        // Checkbox
        [`${ipassCls}-checkbox-wrapper + span`]: {
          paddingInlineStart: paddingXS,
          color: colorText
        },
        [`> ul`]: {
          maxHeight: "calc(100vh - 130px)",
          overflowX: "hidden",
          overflowY: "auto"
        }
      }
    }
  ];
};

const genFixedStyle = (token) => {
  const {
    componentCls,
    lineWidth,
    colorSplit,
    motionDurationSlow,
    zIndexTableFixed,
    tableBg,
    zIndexTableSticky
  } = token;
  const shadowColor = colorSplit;
  return {
    [`${componentCls}-wrapper`]: {
      [`
        ${componentCls}-cell-fix-left,
        ${componentCls}-cell-fix-right
      `]: {
        position: "sticky !important",
        zIndex: zIndexTableFixed,
        background: tableBg
      },
      [`
        ${componentCls}-cell-fix-left-first::after,
        ${componentCls}-cell-fix-left-last::after
      `]: {
        position: "absolute",
        top: 0,
        right: {
          _skip_check_: true,
          value: 0
        },
        bottom: -lineWidth,
        width: 30,
        transform: "translateX(100%)",
        transition: `box-shadow ${motionDurationSlow}`,
        content: '""',
        pointerEvents: "none"
      },
      [`${componentCls}-cell-fix-left-all::after`]: {
        display: "none"
      },
      [`
        ${componentCls}-cell-fix-right-first::after,
        ${componentCls}-cell-fix-right-last::after
      `]: {
        position: "absolute",
        top: 0,
        bottom: -lineWidth,
        left: {
          _skip_check_: true,
          value: 0
        },
        width: 30,
        transform: "translateX(-100%)",
        transition: `box-shadow ${motionDurationSlow}`,
        content: '""',
        pointerEvents: "none"
      },
      [`${componentCls}-container`]: {
        "&::before, &::after": {
          position: "absolute",
          top: 0,
          bottom: 0,
          zIndex: zIndexTableSticky + 1,
          width: 30,
          transition: `box-shadow ${motionDurationSlow}`,
          content: '""',
          pointerEvents: "none"
        },
        "&::before": {
          insetInlineStart: 0
        },
        "&::after": {
          insetInlineEnd: 0
        }
      },
      [`${componentCls}-ping-left`]: {
        [`&:not(${componentCls}-has-fix-left) ${componentCls}-container`]: {
          position: "relative",
          "&::before": {
            boxShadow: `inset 10px 0 8px -8px ${shadowColor}`
          }
        },
        [`
          ${componentCls}-cell-fix-left-first::after,
          ${componentCls}-cell-fix-left-last::after
        `]: {
          boxShadow: `inset 10px 0 8px -8px ${shadowColor}`
        },
        [`${componentCls}-cell-fix-left-last::before`]: {
          backgroundColor: "transparent !important"
        }
      },
      [`${componentCls}-ping-right`]: {
        [`&:not(${componentCls}-has-fix-right) ${componentCls}-container`]: {
          position: "relative",
          "&::after": {
            boxShadow: `inset -10px 0 8px -8px ${shadowColor}`
          }
        },
        [`
          ${componentCls}-cell-fix-right-first::after,
          ${componentCls}-cell-fix-right-last::after
        `]: {
          boxShadow: `inset -10px 0 8px -8px ${shadowColor}`
        }
      }
    }
  };
};

const genPaginationStyle = (token) => {
  const { componentCls, ipassCls } = token;
  return {
    [`${componentCls}-wrapper`]: {
      // ========================== Pagination ==========================
      [`${componentCls}-pagination${ipassCls}-pagination`]: {
        margin: `${token.margin}px 0`
      },
      [`${componentCls}-pagination`]: {
        display: "flex",
        flexWrap: "wrap",
        rowGap: token.paddingXS,
        "> *": {
          flex: "none"
        },
        "&-left": {
          justifyContent: "flex-start"
        },
        "&-center": {
          justifyContent: "center"
        },
        "&-right": {
          justifyContent: "flex-end"
        }
      }
    }
  };
};

const genRadiusStyle = (token) => {
  const { componentCls, tableRadius } = token;
  return {
    [`${componentCls}-wrapper`]: {
      [componentCls]: {
        [`${componentCls}-title, ${componentCls}-header`]: {
          borderRadius: `${tableRadius}px ${tableRadius}px 0 0`
        },
        [`${componentCls}-title + ${componentCls}-container`]: {
          borderStartStartRadius: 0,
          borderStartEndRadius: 0,
          [`${componentCls}-header, table`]: {
            borderRadius: 0
          },
          "table > thead > tr:first-child": {
            "th:first-child, th:last-child, td:first-child, td:last-child": {
              borderRadius: 0
            }
          }
        },
        "&-container": {
          borderStartStartRadius: tableRadius,
          borderStartEndRadius: tableRadius,
          "table > thead > tr:first-child": {
            "> *:first-child": {
              borderStartStartRadius: tableRadius
            },
            "> *:last-child": {
              borderStartEndRadius: tableRadius
            }
          }
        },
        "&-footer": {
          borderRadius: `0 0 ${tableRadius}px ${tableRadius}px`
        }
      }
    }
  };
};

const genSelectionStyle = (token) => {
  const {
    componentCls,
    ipassCls,
    iconCls,
    fontSizeIcon,
    padding,
    paddingXS,
    tableHeaderIconColor,
    tableHeaderIconColorHover,
    tableSelectionColumnWidth,
    tableSelectedRowBg,
    tableSelectedRowHoverBg,
    tableRowHoverBg
  } = token;
  return {
    [`${componentCls}-wrapper`]: {
      // ========================== Selections ==========================
      [`${componentCls}-selection-col`]: {
        width: tableSelectionColumnWidth,
        [`&${componentCls}-selection-col-with-dropdown`]: {
          width: tableSelectionColumnWidth + fontSizeIcon + padding / 4
        }
      },
      [`${componentCls}-bordered ${componentCls}-selection-col`]: {
        width: tableSelectionColumnWidth + paddingXS * 2,
        [`&${componentCls}-selection-col-with-dropdown`]: {
          width: tableSelectionColumnWidth + fontSizeIcon + padding / 4 + paddingXS * 2
        }
      },
      [`
        table tr th${componentCls}-selection-column,
        table tr td${componentCls}-selection-column,
        ${componentCls}-selection-column
      `]: {
        paddingInlineEnd: token.paddingXS,
        paddingInlineStart: token.paddingXS,
        textAlign: "center",
        [`${ipassCls}-radio-wrapper`]: {
          marginInlineEnd: 0
        }
      },
      [`table tr th${componentCls}-selection-column${componentCls}-cell-fix-left`]: {
        zIndex: token.zIndexTableFixed + 1
      },
      [`table tr th${componentCls}-selection-column::after`]: {
        backgroundColor: "transparent !important"
      },
      [`${componentCls}-selection`]: {
        position: "relative",
        display: "inline-flex",
        flexDirection: "column"
      },
      [`${componentCls}-selection-extra`]: {
        position: "absolute",
        top: 0,
        zIndex: 1,
        cursor: "pointer",
        transition: `all ${token.motionDurationSlow}`,
        marginInlineStart: "100%",
        paddingInlineStart: `${token.tablePaddingHorizontal / 4}px`,
        [iconCls]: {
          color: tableHeaderIconColor,
          fontSize: fontSizeIcon,
          verticalAlign: "baseline",
          "&:hover": {
            color: tableHeaderIconColorHover
          }
        }
      },
      // ============================= Rows =============================
      [`${componentCls}-tbody`]: {
        [`${componentCls}-row`]: {
          [`&${componentCls}-row-selected`]: {
            [`> ${componentCls}-cell`]: {
              background: tableSelectedRowBg,
              "&-row-hover": {
                background: tableSelectedRowHoverBg
              }
            }
          },
          [`> ${componentCls}-cell-row-hover`]: {
            background: tableRowHoverBg
          }
        }
      }
    }
  };
};

const genSizeStyle = (token) => {
  const { componentCls } = token;
  const getSizeStyle = (size, paddingVertical, paddingHorizontal, fontSize) => ({
    [`${componentCls}${componentCls}-${size}`]: {
      fontSize,
      [`
        ${componentCls}-title,
        ${componentCls}-footer,
        ${componentCls}-cell,
        ${componentCls}-thead > tr > th,
        ${componentCls}-tbody > tr > th,
        ${componentCls}-tbody > tr > td,
        tfoot > tr > th,
        tfoot > tr > td
      `]: {
        padding: `${paddingVertical}px ${paddingHorizontal}px`
      },
      [`${componentCls}-filter-trigger`]: {
        marginInlineEnd: `-${paddingHorizontal / 2}px`
      },
      [`${componentCls}-expanded-row-fixed`]: {
        margin: `-${paddingVertical}px -${paddingHorizontal}px`
      },
      [`${componentCls}-tbody`]: {
        // ========================= Nest Table ===========================
        [`${componentCls}-wrapper:only-child ${componentCls}`]: {
          marginBlock: `-${paddingVertical}px`,
          marginInline: `${token.tableExpandColumnWidth - paddingHorizontal}px -${paddingHorizontal}px`
        }
      },
      [`${componentCls}-selection-extra`]: {
        paddingInlineStart: `${paddingHorizontal / 4}px`
      }
    }
  });
  return {
    [`${componentCls}-wrapper`]: {
      ...getSizeStyle(
        "medium",
        token.tablePaddingVerticalMudium,
        token.tablePaddingHorizontalMudium,
        token.tableFontSizeMudium
      ),
      ...getSizeStyle(
        "small",
        token.tablePaddingVerticalSmall,
        token.tablePaddingHorizontalSmall,
        token.tableFontSizeSmall
      )
    }
  };
};

const genSorterStyle = (token) => {
  const { componentCls, marginXXS, fontSizeIcon, tableHeaderIconColor, tableHeaderIconColorHover } = token;
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-thead th${componentCls}-column-has-sorters`]: {
        outline: "none",
        cursor: "pointer",
        transition: `all ${token.motionDurationSlow}`,
        "&:hover": {
          background: token.tableHeaderSortHoverBg,
          "&::before": {
            backgroundColor: "transparent !important"
          }
        },
        "&:focus-visible": {
          color: token.colorPrimary
        },
        [`
          &${componentCls}-cell-fix-left:hover,
          &${componentCls}-cell-fix-right:hover
        `]: {
          background: token.tableFixedHeaderSortActiveBg
        }
      },
      [`${componentCls}-thead th${componentCls}-column-sort`]: {
        background: token.tableHeaderSortBg,
        "&::before": {
          backgroundColor: "transparent !important"
        }
      },
      [`td${componentCls}-column-sort`]: {
        background: token.tableBodySortBg
      },
      [`${componentCls}-column-title`]: {
        position: "relative",
        zIndex: 1,
        flex: 1
      },
      [`${componentCls}-column-sorters`]: {
        display: "flex",
        flex: "auto",
        alignItems: "center",
        justifyContent: "space-between",
        "&::after": {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          content: '""'
        }
      },
      [`${componentCls}-column-sorter`]: {
        marginInlineStart: marginXXS,
        color: tableHeaderIconColor,
        fontSize: 0,
        transition: `color ${token.motionDurationSlow}`,
        "&-inner": {
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center"
        },
        "&-up, &-down": {
          fontSize: fontSizeIcon,
          "&.active": {
            color: token.colorPrimary
          }
        },
        [`${componentCls}-column-sorter-up + ${componentCls}-column-sorter-down`]: {
          marginTop: "-0.3em"
        }
      },
      [`${componentCls}-column-sorters:hover ${componentCls}-column-sorter`]: {
        color: tableHeaderIconColorHover
      }
    }
  };
};

const genStickyStyle = (token) => {
  const {
    componentCls,
    opacityLoading,
    tableScrollThumbBg,
    tableScrollThumbBgHover,
    tableScrollThumbSize,
    tableScrollBg,
    zIndexTableSticky,
    stickyScrollBarBorderRadius
  } = token;
  const tableBorder = `${token.lineWidth}px ${token.lineType} ${token.tableBorderColor}`;
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-sticky`]: {
        "&-holder": {
          position: "sticky",
          zIndex: zIndexTableSticky,
          background: token.colorBgContainer
        },
        "&-scroll": {
          position: "sticky",
          bottom: 0,
          height: `${tableScrollThumbSize}px !important`,
          zIndex: zIndexTableSticky,
          display: "flex",
          alignItems: "center",
          background: tableScrollBg,
          borderTop: tableBorder,
          opacity: opacityLoading,
          "&:hover": {
            transformOrigin: "center bottom"
          },
          // fake scrollbar style of sticky
          "&-bar": {
            height: tableScrollThumbSize,
            backgroundColor: tableScrollThumbBg,
            borderRadius: stickyScrollBarBorderRadius,
            transition: `all ${token.motionDurationSlow}, transform none`,
            position: "absolute",
            bottom: 0,
            "&:hover, &-active": {
              backgroundColor: tableScrollThumbBgHover
            }
          }
        }
      }
    }
  };
};

const genSummaryStyle = (token) => {
  const { componentCls, lineWidth, tableBorderColor } = token;
  const tableBorder = `${lineWidth}px ${token.lineType} ${tableBorderColor}`;
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-summary`]: {
        position: "relative",
        zIndex: token.zIndexTableFixed,
        background: token.tableBg,
        "> tr": {
          "> th, > td": {
            borderBottom: tableBorder
          }
        }
      },
      [`div${componentCls}-summary`]: {
        boxShadow: `0 -${lineWidth}px 0 ${tableBorderColor}`
      }
    }
  };
};

const genVirtualStyle = (token) => {
  const { componentCls, motionDurationMid } = token;
  const tableBorder = `${token.lineWidth}px ${token.lineType} ${token.tableBorderColor}`;
  const rowCellCls = `${componentCls}-expanded-row-cell`;
  return {
    [`${componentCls}-wrapper`]: {
      // ========================== Row ==========================
      [`${componentCls}-tbody-virtual`]: {
        [`${componentCls}-row`]: {
          display: "flex",
          boxSizing: "border-box",
          width: "100%"
        },
        [`${componentCls}-cell`]: {
          borderBottom: tableBorder,
          transition: `background ${motionDurationMid}`
        },
        [`${componentCls}-expanded-row`]: {
          [`${rowCellCls}${rowCellCls}-fixed`]: {
            position: "sticky",
            insetInlineStart: 0,
            overflow: "hidden",
            width: `calc(var(--virtual-width) - ${token.lineWidth}px)`,
            borderInlineEnd: "none"
          }
        }
      },
      // ======================== Border =========================
      [`${componentCls}-bordered`]: {
        [`${componentCls}-tbody-virtual`]: {
          "&:after": {
            content: '""',
            insetInline: 0,
            bottom: 0,
            borderBottom: tableBorder,
            position: "absolute"
          },
          [`${componentCls}-cell`]: {
            borderInlineEnd: tableBorder,
            [`&${componentCls}-cell-fix-right-first:before`]: {
              content: '""',
              position: "absolute",
              insetBlock: 0,
              insetInlineStart: -token.lineWidth,
              borderInlineStart: tableBorder
            }
          }
        },
        // Empty placeholder
        [`&${componentCls}-virtual`]: {
          [`${componentCls}-placeholder ${componentCls}-cell`]: {
            borderInlineEnd: tableBorder,
            borderBottom: tableBorder
          }
        }
      }
    }
  };
};

const genTableStyle = (token) => {
  const {
    componentCls,
    fontWeightStrong,
    tablePaddingVertical,
    tablePaddingHorizontal,
    lineWidth,
    lineType,
    tableBorderColor,
    tableFontSize,
    tableBg,
    tableRadius,
    tableHeaderTextColor,
    motionDurationMid,
    tableHeaderBg,
    tableHeaderCellSplitColor,
    tableFooterTextColor,
    tableFooterBg
  } = token;
  const tableBorder = `${lineWidth}px ${lineType} ${tableBorderColor}`;
  return {
    [`${componentCls}-wrapper`]: {
      clear: "both",
      maxWidth: "100%",
      ...clearFix(),
      [componentCls]: {
        ...resetComponent(token),
        fontSize: tableFontSize,
        background: tableBg,
        borderRadius: `${tableRadius}px ${tableRadius}px 0 0`
      },
      table: {
        width: "100%",
        textAlign: "start",
        borderRadius: `${tableRadius}px ${tableRadius}px 0 0`,
        borderCollapse: "separate",
        borderSpacing: 0
      },
      // ============================= Cell ==============================
      [`
          ${componentCls}-cell,
          ${componentCls}-thead > tr > th,
          ${componentCls}-tbody > tr > th,
          ${componentCls}-tbody > tr > td,
          tfoot > tr > th,
          tfoot > tr > td
        `]: {
        position: "relative",
        padding: `${tablePaddingVertical}px ${tablePaddingHorizontal}px`,
        overflowWrap: "break-word"
      },
      // ============================ Title =============================
      [`${componentCls}-title`]: {
        padding: `${tablePaddingVertical}px ${tablePaddingHorizontal}px`
      },
      // ============================ Header ============================
      [`${componentCls}-thead`]: {
        [`
          > tr > th,
          > tr > td
        `]: {
          position: "relative",
          color: tableHeaderTextColor,
          fontWeight: fontWeightStrong,
          textAlign: "start",
          background: tableHeaderBg,
          borderBottom: tableBorder,
          transition: `background ${motionDurationMid} ease`,
          "&[colspan]:not([colspan='1'])": {
            textAlign: "center"
          },
          [`&:not(:last-child):not(${componentCls}-selection-column):not(${componentCls}-row-expand-icon-cell):not([colspan])::before`]: {
            position: "absolute",
            top: "50%",
            insetInlineEnd: 0,
            width: 1,
            height: "1.6em",
            backgroundColor: tableHeaderCellSplitColor,
            transform: "translateY(-50%)",
            transition: `background-color ${motionDurationMid}`,
            content: '""'
          }
        },
        "> tr:not(:last-child) > th[colspan]": {
          borderBottom: 0
        }
      },
      // ============================ Body ============================
      [`${componentCls}-tbody`]: {
        "> tr": {
          [`> th, > td`]: {
            transition: `background ${motionDurationMid}, border-color ${motionDurationMid}`,
            borderBottom: tableBorder,
            // ========================= Nest Table ===========================
            [`
              > ${componentCls}-wrapper:only-child,
              > ${componentCls}-expanded-row-fixed > ${componentCls}-wrapper:only-child
            `]: {
              [componentCls]: {
                marginBlock: `-${tablePaddingVertical}px`,
                marginInline: `${token.tableExpandColumnWidth - tablePaddingHorizontal}px -${tablePaddingHorizontal}px`,
                [`${componentCls}-tbody > tr:last-child > td`]: {
                  borderBottom: 0,
                  "&:first-child, &:last-child": {
                    borderRadius: 0
                  }
                }
              }
            }
          },
          "> th": {
            position: "relative",
            color: tableHeaderTextColor,
            fontWeight: fontWeightStrong,
            textAlign: "start",
            background: tableHeaderBg,
            borderBottom: tableBorder,
            transition: `background ${motionDurationMid} ease`
          }
        }
      },
      // ============================ Footer ============================
      [`${componentCls}-footer`]: {
        padding: `${tablePaddingVertical}px ${tablePaddingHorizontal}px`,
        color: tableFooterTextColor,
        background: tableFooterBg
      }
    }
  };
};
const useStyle$2 = genComponentStyleHook(
  "Table",
  (token) => {
    const {
      colorTextHeading,
      colorSplit,
      colorIcon,
      colorIconHover,
      opacityLoading,
      colorBgContainer,
      controlInteractiveSize: checkboxSize,
      headerBg,
      headerColor,
      headerSortActiveBg,
      headerSortHoverBg,
      bodySortBg,
      rowHoverBg,
      rowSelectedBg,
      rowSelectedHoverBg,
      rowExpandedBg,
      cellPaddingBlock,
      cellPaddingInline,
      cellPaddingBlockMD,
      cellPaddingInlineMD,
      cellPaddingBlockSM,
      cellPaddingInlineSM,
      borderColor,
      footerBg,
      footerColor,
      headerBorderRadius,
      cellFontSize,
      cellFontSizeMD,
      cellFontSizeSM,
      headerSplitColor,
      fixedHeaderSortActiveBg,
      headerFilterHoverBg,
      filterDropdownBg,
      expandIconBg,
      selectionColumnWidth,
      stickyScrollBarBg
    } = token;
    const baseColorAction = new TinyColor(colorIcon);
    const baseColorActionHover = new TinyColor(colorIconHover);
    const zIndexTableFixed = 2;
    const tableToken = merge(token, {
      tableFontSize: cellFontSize,
      tableBg: colorBgContainer,
      tableRadius: headerBorderRadius,
      tablePaddingVertical: cellPaddingBlock,
      tablePaddingHorizontal: cellPaddingInline,
      tablePaddingVerticalMudium: cellPaddingBlockMD,
      tablePaddingHorizontalMudium: cellPaddingInlineMD,
      tablePaddingVerticalSmall: cellPaddingBlockSM,
      tablePaddingHorizontalSmall: cellPaddingInlineSM,
      tableBorderColor: borderColor,
      tableHeaderTextColor: headerColor,
      tableHeaderBg: headerBg,
      tableFooterTextColor: footerColor,
      tableFooterBg: footerBg,
      tableHeaderCellSplitColor: headerSplitColor,
      tableHeaderSortBg: headerSortActiveBg,
      tableHeaderSortHoverBg: headerSortHoverBg,
      tableHeaderIconColor: baseColorAction.clone().setAlpha(baseColorAction.getAlpha() * opacityLoading).toRgbString(),
      tableHeaderIconColorHover: baseColorActionHover.clone().setAlpha(baseColorActionHover.getAlpha() * opacityLoading).toRgbString(),
      tableBodySortBg: bodySortBg,
      tableFixedHeaderSortActiveBg: fixedHeaderSortActiveBg,
      tableHeaderFilterActiveBg: headerFilterHoverBg,
      tableFilterDropdownBg: filterDropdownBg,
      tableRowHoverBg: rowHoverBg,
      tableSelectedRowBg: rowSelectedBg,
      tableSelectedRowHoverBg: rowSelectedHoverBg,
      zIndexTableFixed,
      zIndexTableSticky: zIndexTableFixed + 1,
      tableFontSizeMudium: cellFontSizeMD,
      tableFontSizeSmall: cellFontSizeSM,
      tableSelectionColumnWidth: selectionColumnWidth,
      tableExpandIconBg: expandIconBg,
      tableExpandColumnWidth: checkboxSize + 2 * token.padding,
      tableExpandedRowBg: rowExpandedBg,
      // Dropdown
      tableFilterDropdownWidth: 120,
      tableFilterDropdownHeight: 264,
      tableFilterDropdownSearchWidth: 140,
      // Virtual Scroll Bar
      tableScrollThumbSize: 8,
      // Mac scroll bar size
      tableScrollThumbBg: stickyScrollBarBg,
      tableScrollThumbBgHover: colorTextHeading,
      tableScrollBg: colorSplit
    });
    return [
      genTableStyle(tableToken),
      genPaginationStyle(tableToken),
      genSummaryStyle(tableToken),
      genSorterStyle(tableToken),
      genFilterStyle(tableToken),
      genBorderedStyle(tableToken),
      genRadiusStyle(tableToken),
      genExpandStyle(tableToken),
      genSummaryStyle(tableToken),
      genEmptyStyle(tableToken),
      genSelectionStyle(tableToken),
      genFixedStyle(tableToken),
      genStickyStyle(tableToken),
      genEllipsisStyle(tableToken),
      genSizeStyle(tableToken),
      genVirtualStyle(tableToken)
    ];
  },
  (token) => {
    const {
      colorFillAlter,
      colorBgContainer,
      colorTextHeading,
      colorFillSecondary,
      colorFillContent,
      controlItemBgActive,
      controlItemBgActiveHover,
      padding,
      paddingSM,
      paddingXS,
      colorBorderSecondary,
      borderRadiusLG,
      fontSize,
      controlHeight,
      colorTextPlaceholder
    } = token;
    const colorFillSecondarySolid = new TinyColor(colorFillSecondary).onBackground(colorBgContainer).toHexShortString();
    const colorFillContentSolid = new TinyColor(colorFillContent).onBackground(colorBgContainer).toHexShortString();
    const colorFillAlterSolid = new TinyColor(colorFillAlter).onBackground(colorBgContainer).toHexShortString();
    return {
      headerBg: colorFillAlterSolid,
      headerColor: colorTextHeading,
      headerSortActiveBg: colorFillSecondarySolid,
      headerSortHoverBg: colorFillContentSolid,
      bodySortBg: colorFillAlterSolid,
      rowHoverBg: colorFillAlterSolid,
      rowSelectedBg: controlItemBgActive,
      rowSelectedHoverBg: controlItemBgActiveHover,
      rowExpandedBg: colorFillAlter,
      cellPaddingBlock: padding,
      cellPaddingInline: padding,
      cellPaddingBlockMD: paddingSM,
      cellPaddingInlineMD: paddingXS,
      cellPaddingBlockSM: paddingXS,
      cellPaddingInlineSM: paddingXS,
      borderColor: colorBorderSecondary,
      headerBorderRadius: borderRadiusLG,
      footerBg: colorFillAlterSolid,
      footerColor: colorTextHeading,
      cellFontSize: fontSize,
      cellFontSizeMD: fontSize,
      cellFontSizeSM: fontSize,
      headerSplitColor: colorBorderSecondary,
      fixedHeaderSortActiveBg: colorFillSecondarySolid,
      headerFilterHoverBg: colorFillContent,
      filterDropdownMenuBg: colorBgContainer,
      filterDropdownBg: colorBgContainer,
      expandIconBg: colorBgContainer,
      selectionColumnWidth: controlHeight,
      stickyScrollBarBg: colorTextPlaceholder,
      stickyScrollBarBorderRadius: 100
    };
  }
);

const EMPTY_LIST = [];
const InternalTable = (props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    size: customizeSize,
    bordered,
    dropdownPrefixCls: customizeDropdownPrefixCls,
    dataSource,
    pagination,
    rowKey = "key",
    rowClassName,
    columns,
    children,
    childrenColumnName: legacyChildrenColumnName,
    onChange,
    getPopupContainer,
    loading,
    expandIcon,
    expandable,
    expandedRowRender,
    expandIconColumnIndex,
    indentSize,
    scroll,
    sortDirections,
    locale,
    showSorterTooltip = true,
    virtual
  } = props;
  devUseWarning();
  const baseColumns = React.useMemo(
    () => columns || convertChildrenToColumns(children),
    [columns, children]
  );
  const needResponsive = React.useMemo(
    () => baseColumns.some((col) => col.responsive),
    [baseColumns]
  );
  const screens = useBreakpoint$1(needResponsive);
  const mergedColumns = React.useMemo(() => {
    const matched = new Set(Object.keys(screens).filter((m) => screens[m]));
    return baseColumns.filter(
      (c) => !c.responsive || c.responsive.some((r) => matched.has(r))
    );
  }, [baseColumns, screens]);
  const tableProps = omit(props, ["className", "style", "columns"]);
  const {
    locale: contextLocale = localeValues,
    table,
    renderEmpty,
    getPrefixCls,
    getPopupContainer: getContextPopupContainer
  } = React.useContext(ConfigContext);
  const mergedSize = useSize(customizeSize);
  const tableLocale = { ...contextLocale.Table, ...locale };
  const rawData = dataSource || EMPTY_LIST;
  const prefixCls = getPrefixCls("table", customizePrefixCls);
  getPrefixCls("dropdown", customizeDropdownPrefixCls);
  const mergedExpandable = {
    childrenColumnName: legacyChildrenColumnName,
    expandIconColumnIndex,
    ...expandable
  };
  const { childrenColumnName = "children" } = mergedExpandable;
  const expandType = React.useMemo(() => {
    if (rawData.some((item) => item?.[childrenColumnName])) {
      return "nest";
    }
    if (expandedRowRender || expandable && expandable.expandedRowRender) {
      return "row";
    }
    return null;
  }, [rawData]);
  const internalRefs = {
    body: React.useRef()
  };
  const getContainerWidth = useContainerWidth(prefixCls);
  const getRowKey = React.useMemo(() => {
    if (typeof rowKey === "function") {
      return rowKey;
    }
    return (record) => record?.[rowKey];
  }, [rowKey]);
  useLazyKVMap(rawData, childrenColumnName, getRowKey);
  const changeEventInfo = {};
  const triggerOnChange = (info, action, reset = false) => {
    const changeInfo = {
      ...changeEventInfo,
      ...info
    };
    if (reset) {
      changeEventInfo.resetPagination?.();
      if (changeInfo.pagination?.current) {
        changeInfo.pagination.current = 1;
      }
      if (pagination && pagination.onChange) {
        pagination.onChange(1, changeInfo.pagination?.pageSize);
      }
    }
    if (scroll && scroll.scrollToFirstRowOnChange !== false && internalRefs.body.current) {
      scrollTo(0, {
        getContainer: () => internalRefs.body.current
      });
    }
    onChange?.(changeInfo.pagination, changeInfo.filters, changeInfo.sorter, {
      currentDataSource: getSortData(rawData, changeInfo.sorterStates, childrenColumnName),
      action
    });
  };
  const onSorterChange = (sorter, sorterStates) => {
    triggerOnChange(
      {
        sorter,
        sorterStates
      },
      "sort",
      false
    );
  };
  const [transformSorterColumns, sortStates, sorterTitleProps, getSorters] = useFilterSorter({
    prefixCls,
    mergedColumns,
    onSorterChange,
    sortDirections: sortDirections || ["ascend", "descend"],
    tableLocale,
    showSorterTooltip
  });
  const sortedData = React.useMemo(
    () => getSortData(rawData, sortStates, childrenColumnName),
    [rawData, sortStates]
  );
  changeEventInfo.sorter = getSorters();
  changeEventInfo.sorterStates = sortStates;
  const columnTitleProps = sorterTitleProps;
  const [transformTitleColumns] = useTitleColumns(columnTitleProps);
  const onPaginationChange = (current, pageSize) => {
    triggerOnChange(
      {
        pagination: { ...changeEventInfo.pagination, current, pageSize }
      },
      "paginate"
    );
  };
  const [mergedPagination, resetPagination] = usePagination(
    sortedData.length,
    onPaginationChange,
    pagination
  );
  changeEventInfo.pagination = pagination === false ? {} : getPaginationParam(mergedPagination, pagination);
  changeEventInfo.resetPagination = resetPagination;
  const pageData = React.useMemo(() => {
    if (pagination === false || !mergedPagination.pageSize) {
      return sortedData;
    }
    const { current = 1, total, pageSize = DEFAULT_PAGE_SIZE } = mergedPagination;
    if (sortedData.length < total) {
      if (sortedData.length > pageSize) {
        return sortedData.slice((current - 1) * pageSize, current * pageSize);
      }
      return sortedData;
    }
    return sortedData.slice((current - 1) * pageSize, current * pageSize);
  }, [
    !!pagination,
    sortedData,
    mergedPagination && mergedPagination.current,
    mergedPagination && mergedPagination.pageSize,
    mergedPagination && mergedPagination.total
  ]);
  const internalRowClassName = (record, index, indent) => {
    let mergedRowClassName;
    if (typeof rowClassName === "function") {
      mergedRowClassName = classNames(rowClassName(record, index, indent));
    } else {
      mergedRowClassName = classNames(rowClassName);
    }
    return mergedRowClassName;
  };
  mergedExpandable.__PARENT_RENDER_ICON__ = mergedExpandable.expandIcon;
  mergedExpandable.expandIcon = mergedExpandable.expandIcon || expandIcon || renderExpandIcon(tableLocale);
  if (expandType === "nest" && mergedExpandable.expandIconColumnIndex === void 0) {
    mergedExpandable.expandIconColumnIndex = 0;
  } else if (mergedExpandable.expandIconColumnIndex > 0) {
    mergedExpandable.expandIconColumnIndex -= 1;
  }
  if (typeof mergedExpandable.indentSize !== "number") {
    mergedExpandable.indentSize = typeof indentSize === "number" ? indentSize : 15;
  }
  const transformColumns = React.useCallback(
    (innerColumns) => transformTitleColumns(
      transformSorterColumns(innerColumns)
    ),
    [transformSorterColumns]
  );
  let topPaginationNode;
  let bottomPaginationNode;
  if (pagination !== false && mergedPagination?.total) {
    let paginationSize;
    if (mergedPagination.size) {
      paginationSize = mergedPagination.size;
    } else {
      paginationSize = mergedSize === "small" || mergedSize === "medium" ? "small" : void 0;
    }
    const renderPagination = (position2) => /* @__PURE__ */ jsx(
      Pagination,
      {
        ...mergedPagination,
        className: classNames(
          `${prefixCls}-pagination ${prefixCls}-pagination-${position2}`,
          mergedPagination.className
        ),
        size: paginationSize
      }
    );
    const defaultPosition = "left";
    const { position } = mergedPagination;
    if (position !== null && Array.isArray(position)) {
      const topPos = position.find((p) => p.includes("top"));
      const bottomPos = position.find((p) => p.includes("bottom"));
      const isDisable = position.every((p) => `${p}` === "none");
      if (!topPos && !bottomPos && !isDisable) {
        bottomPaginationNode = renderPagination(defaultPosition);
      }
      if (topPos) {
        topPaginationNode = renderPagination(topPos.toLowerCase().replace("top", ""));
      }
      if (bottomPos) {
        bottomPaginationNode = renderPagination(bottomPos.toLowerCase().replace("bottom", ""));
      }
    } else {
      bottomPaginationNode = renderPagination(defaultPosition);
    }
  }
  const [wrapSSR, hashId] = useStyle$2(prefixCls);
  const [, token] = useToken$1();
  const wrapperClassNames = classNames(
    `${prefixCls}-wrapper`,
    table?.className,
    className,
    rootClassName,
    hashId
  );
  const mergedStyle = { ...table?.style, ...style, position: "relative" };
  const emptyText = locale && locale.emptyText || renderEmpty?.("Table") || /* @__PURE__ */ jsx(DefaultRenderEmpty, { componentName: "Table" });
  const TableComponent = virtual ? RcVirtualTable : RcTable;
  const virtualProps = {};
  const listItemHeight = React.useMemo(() => {
    const { fontSize, lineHeight, padding, paddingXS, paddingSM } = token;
    const fontHeight = Math.floor(fontSize * lineHeight);
    switch (mergedSize) {
      case "large":
        return padding * 2 + fontHeight;
      case "small":
        return paddingXS * 2 + fontHeight;
      default:
        return paddingSM * 2 + fontHeight;
    }
  }, [token, mergedSize]);
  if (virtual) {
    virtualProps.listItemHeight = listItemHeight;
  }
  return wrapSSR(
    /* @__PURE__ */ jsxs("div", { ref, className: wrapperClassNames, style: mergedStyle, children: [
      topPaginationNode,
      /* @__PURE__ */ jsx(
        TableComponent,
        {
          ...virtualProps,
          ...tableProps,
          columns: mergedColumns,
          direction: "ltr",
          expandable: mergedExpandable,
          prefixCls,
          className: classNames({
            [`${prefixCls}-medium`]: mergedSize === "medium",
            [`${prefixCls}-small`]: mergedSize === "small",
            [`${prefixCls}-bordered`]: bordered,
            [`${prefixCls}-empty`]: rawData.length === 0
          }),
          data: pageData,
          rowKey: getRowKey,
          rowClassName: internalRowClassName,
          emptyText,
          internalHooks: INTERNAL_HOOKS,
          internalRefs,
          transformColumns,
          getContainerWidth
        }
      ),
      bottomPaginationNode,
      /* @__PURE__ */ jsx(Backdrop, { open: loading ?? false, style: { position: "absolute", opacity: 0.5 }, children: /* @__PURE__ */ jsx(CircularProgress, {}) })
    ] })
  );
};
const InternalTable$1 = React.forwardRef(InternalTable);

const Table = (props, ref) => {
  const renderTimesRef = React.useRef(0);
  renderTimesRef.current += 1;
  return /* @__PURE__ */ jsx(InternalTable$1, { ...props, ref, _renderTimes: renderTimesRef.current });
};
const ForwardTable = React.forwardRef(Table);
ForwardTable.EXPAND_COLUMN = EXPAND_COLUMN;
ForwardTable.Column = Column;
ForwardTable.ColumnGroup = ColumnGroup;
ForwardTable.Summary = Summary;

const getDesignToken = (config) => {
  const theme = config?.algorithm ? createTheme(config.algorithm) : createTheme(derivative$2);
  const mergedToken = {
    ...seedToken,
    ...config?.token
  };
  return getComputedToken$1(mergedToken, { override: config?.token }, theme, formatToken);
};

function genSizeMapToken(token) {
  const { sizeUnit, sizeStep } = token;
  const compactSizeStep = sizeStep - 2;
  return {
    sizeXXL: sizeUnit * (compactSizeStep + 10),
    sizeXL: sizeUnit * (compactSizeStep + 6),
    sizeLG: sizeUnit * (compactSizeStep + 2),
    sizeMD: sizeUnit * (compactSizeStep + 2),
    sizeMS: sizeUnit * (compactSizeStep + 1),
    size: sizeUnit * compactSizeStep,
    sizeSM: sizeUnit * compactSizeStep,
    sizeXS: sizeUnit * (compactSizeStep - 1),
    sizeXXS: sizeUnit * (compactSizeStep - 1)
  };
}

const derivative$1 = (token, mapToken) => {
  const mergedMapToken = mapToken ?? derivative$2(token);
  const fontSize = mergedMapToken.fontSizeSM;
  const controlHeight = mergedMapToken.controlHeight - 4;
  return {
    ...mergedMapToken,
    ...genSizeMapToken(mapToken ?? token),
    // font
    ...genFontMapToken(fontSize),
    // controlHeight
    controlHeight,
    ...genControlHeight({ ...mergedMapToken, controlHeight })
  };
};

const getAlphaColor = (baseColor, alpha) => new TinyColor(baseColor).setAlpha(alpha).toRgbString();
const getSolidColor = (baseColor, brightness) => {
  const instance = new TinyColor(baseColor);
  return instance.lighten(brightness).toHexString();
};

const generateColorPalettes = (baseColor) => {
  const colors = generate$1(baseColor, { theme: "dark" });
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[6],
    6: colors[5],
    7: colors[4],
    8: colors[6],
    9: colors[5],
    10: colors[4]
    // 8: colors[9],
    // 9: colors[8],
    // 10: colors[7],
  };
};
const generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
  const colorBgBase = bgBaseColor || "#000";
  const colorTextBase = textBaseColor || "#fff";
  return {
    colorBgBase,
    colorTextBase,
    colorText: getAlphaColor(colorTextBase, 0.85),
    colorTextSecondary: getAlphaColor(colorTextBase, 0.65),
    colorTextTertiary: getAlphaColor(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor(colorTextBase, 0.25),
    colorFill: getAlphaColor(colorTextBase, 0.18),
    colorFillSecondary: getAlphaColor(colorTextBase, 0.12),
    colorFillTertiary: getAlphaColor(colorTextBase, 0.08),
    colorFillQuaternary: getAlphaColor(colorTextBase, 0.04),
    colorBgElevated: getSolidColor(colorBgBase, 12),
    colorBgContainer: getSolidColor(colorBgBase, 8),
    colorBgLayout: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getSolidColor(colorBgBase, 26),
    colorBorder: getSolidColor(colorBgBase, 26),
    colorBorderSecondary: getSolidColor(colorBgBase, 19)
  };
};

const derivative = (token, mapToken) => {
  const colorPalettes = Object.keys(defaultPresetColors).map((colorKey) => {
    const colors = generate$1(token[colorKey], { theme: "dark" });
    return new Array(10).fill(1).reduce((prev, _, i) => {
      prev[`${colorKey}-${i + 1}`] = colors[i];
      prev[`${colorKey}${i + 1}`] = colors[i];
      return prev;
    }, {});
  }).reduce((prev, cur) => {
    prev = {
      ...prev,
      ...cur
    };
    return prev;
  }, {});
  const mergedMapToken = mapToken ?? derivative$2(token);
  return {
    ...mergedMapToken,
    // Dark tokens
    ...colorPalettes,
    // Colors
    ...genColorMapToken(token, {
      generateColorPalettes,
      generateNeutralColorPalettes
    })
  };
};

function useToken() {
  const [theme, token, hashId] = useToken$1();
  return { theme, token, hashId };
}
const theme = {
  /** @private Test Usage. Do not use in production. */
  defaultConfig,
  /** Default seedToken */
  defaultSeed: defaultConfig.token,
  useToken,
  defaultAlgorithm: derivative$2,
  darkAlgorithm: derivative,
  compactAlgorithm: derivative$1,
  getDesignToken
};

const { TimePicker: InternalTimePicker, RangePicker: InternalRangePicker } = DatePicker;
const RangePicker = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(InternalRangePicker, { ...props, picker: "time", mode: void 0, ref }));
const TimePicker = React.forwardRef(
  ({ addon, renderExtraFooter, ...restProps }, ref) => {
    const internalRenderExtraFooter = React.useMemo(() => {
      if (renderExtraFooter) {
        return renderExtraFooter;
      }
      if (addon) {
        return addon;
      }
      return void 0;
    }, [addon, renderExtraFooter]);
    return /* @__PURE__ */ jsx(
      InternalTimePicker,
      {
        ...restProps,
        mode: void 0,
        ref,
        renderExtraFooter: internalRenderExtraFooter
      }
    );
  }
);
const PurePanel = genPurePanel(TimePicker, "picker");
TimePicker._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
TimePicker.RangePicker = RangePicker;
TimePicker._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;

const treeNodeFX = new Keyframes("ipass-tree-node-fx-do-not-use", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
});
const getSwitchStyle = (prefixCls, token) => ({
  [`.${prefixCls}-switcher-icon`]: {
    display: "inline-block",
    fontSize: 10,
    verticalAlign: "baseline",
    svg: {
      transition: `transform ${token.motionDurationSlow}`
    }
  }
});
const getDropIndicatorStyle = (prefixCls, token) => ({
  [`.${prefixCls}-drop-indicator`]: {
    position: "absolute",
    // it should displayed over the following node
    zIndex: 1,
    height: 2,
    backgroundColor: token.colorPrimary,
    borderRadius: 1,
    pointerEvents: "none",
    "&:after": {
      position: "absolute",
      top: -3,
      insetInlineStart: -6,
      width: 8,
      height: 8,
      backgroundColor: "transparent",
      border: `${token.lineWidthBold}px solid ${token.colorPrimary}`,
      borderRadius: "50%",
      content: '""'
    }
  }
});
const genBaseStyle = (prefixCls, token) => {
  const { treeCls, treeNodeCls, treeNodePadding, titleHeight, nodeSelectedBg, nodeHoverBg } = token;
  const treeCheckBoxMarginHorizontal = token.paddingXS;
  return {
    [treeCls]: {
      ...resetComponent(token),
      background: token.colorBgContainer,
      borderRadius: token.borderRadius,
      transition: `background-color ${token.motionDurationSlow}`,
      [`&${treeCls}-rtl`]: {
        // >>> Switcher
        [`${treeCls}-switcher`]: {
          "&_close": {
            [`${treeCls}-switcher-icon`]: {
              svg: {
                transform: "rotate(90deg)"
              }
            }
          }
        }
      },
      [`&-focused:not(:hover):not(${treeCls}-active-focused)`]: {
        ...genFocusOutline(token)
      },
      // =================== Virtual List ===================
      [`${treeCls}-list-holder-inner`]: {
        alignItems: "flex-start"
      },
      [`&${treeCls}-block-node`]: {
        [`${treeCls}-list-holder-inner`]: {
          alignItems: "stretch",
          // >>> Title
          [`${treeCls}-node-content-wrapper`]: {
            flex: "auto"
          },
          // >>> Drag
          [`${treeNodeCls}.dragging`]: {
            position: "relative",
            "&:after": {
              position: "absolute",
              top: 0,
              insetInlineEnd: 0,
              bottom: treeNodePadding,
              insetInlineStart: 0,
              border: `1px solid ${token.colorPrimary}`,
              opacity: 0,
              animationName: treeNodeFX,
              animationDuration: token.motionDurationSlow,
              animationPlayState: "running",
              animationFillMode: "forwards",
              content: '""',
              pointerEvents: "none"
            }
          }
        }
      },
      // ===================== TreeNode =====================
      [`${treeNodeCls}`]: {
        display: "flex",
        alignItems: "flex-start",
        padding: `0 0 ${treeNodePadding}px 0`,
        outline: "none",
        "&-rtl": {
          direction: "rtl"
        },
        // Disabled
        "&-disabled": {
          // >>> Title
          [`${treeCls}-node-content-wrapper`]: {
            color: token.colorTextDisabled,
            cursor: "not-allowed",
            "&:hover": {
              background: "transparent"
            }
          }
        },
        [`&-active ${treeCls}-node-content-wrapper`]: {
          ...genFocusOutline(token)
        },
        [`&:not(${treeNodeCls}-disabled).filter-node ${treeCls}-title`]: {
          color: "inherit",
          fontWeight: 500
        },
        "&-draggable": {
          [`${treeCls}-draggable-icon`]: {
            flexShrink: 0,
            width: titleHeight,
            lineHeight: `${titleHeight}px`,
            textAlign: "center",
            visibility: "visible",
            opacity: 0.2,
            transition: `opacity ${token.motionDurationSlow}`,
            [`${treeNodeCls}:hover &`]: {
              opacity: 0.45
            }
          },
          [`&${treeNodeCls}-disabled`]: {
            [`${treeCls}-draggable-icon`]: {
              visibility: "hidden"
            }
          }
        }
      },
      // >>> Indent
      [`${treeCls}-indent`]: {
        alignSelf: "stretch",
        whiteSpace: "nowrap",
        userSelect: "none",
        "&-unit": {
          display: "inline-block",
          width: titleHeight
        }
      },
      // >>> Drag Handler
      [`${treeCls}-draggable-icon`]: {
        visibility: "hidden"
      },
      // >>> Switcher
      [`${treeCls}-switcher`]: {
        ...getSwitchStyle(prefixCls, token),
        position: "relative",
        flex: "none",
        alignSelf: "stretch",
        width: titleHeight,
        margin: 0,
        lineHeight: `${titleHeight}px`,
        textAlign: "center",
        cursor: "pointer",
        userSelect: "none",
        "&-noop": {
          cursor: "default"
        },
        "&_close": {
          [`${treeCls}-switcher-icon`]: {
            svg: {
              transform: "rotate(-90deg)"
            }
          }
        },
        "&-loading-icon": {
          color: token.colorPrimary
        },
        "&-leaf-line": {
          position: "relative",
          zIndex: 1,
          display: "inline-block",
          width: "100%",
          height: "100%",
          "&:before": {
            position: "absolute",
            top: 0,
            insetInlineEnd: titleHeight / 2,
            bottom: -treeNodePadding,
            marginInlineStart: -1,
            borderInlineEnd: `1px solid ${token.colorBorder}`,
            content: '""'
          },
          "&:after": {
            position: "absolute",
            width: titleHeight / 2 * 0.8,
            height: titleHeight / 2,
            borderBottom: `1px solid ${token.colorBorder}`,
            content: '""'
          }
        }
      },
      // >>> Checkbox
      [`${treeCls}-checkbox`]: {
        top: "initial",
        marginInlineEnd: treeCheckBoxMarginHorizontal,
        alignSelf: "flex-start",
        marginTop: token.marginXXS
      },
      // >>> Title
      // add `${treeCls}-checkbox + span` to cover checkbox `${checkboxCls} + span`
      [`${treeCls}-node-content-wrapper, ${treeCls}-checkbox + span`]: {
        position: "relative",
        zIndex: "auto",
        minHeight: titleHeight,
        margin: 0,
        padding: `0 ${token.paddingXS / 2}px`,
        color: "inherit",
        lineHeight: `${titleHeight}px`,
        background: "transparent",
        borderRadius: token.borderRadius,
        cursor: "pointer",
        transition: `all ${token.motionDurationMid}, border 0s, line-height 0s, box-shadow 0s`,
        "&:hover": {
          backgroundColor: nodeHoverBg
        },
        [`&${treeCls}-node-selected`]: {
          backgroundColor: nodeSelectedBg
        },
        // Icon
        [`${treeCls}-iconEle`]: {
          display: "inline-block",
          width: titleHeight,
          height: titleHeight,
          lineHeight: `${titleHeight}px`,
          textAlign: "center",
          verticalAlign: "top",
          "&:empty": {
            display: "none"
          }
        }
      },
      [`${treeCls}-unselectable ${treeCls}-node-content-wrapper:hover`]: {
        backgroundColor: "transparent"
      },
      // ==================== Draggable =====================
      [`${treeCls}-node-content-wrapper`]: {
        lineHeight: `${titleHeight}px`,
        userSelect: "none",
        ...getDropIndicatorStyle(prefixCls, token)
      },
      [`${treeNodeCls}.drop-container`]: {
        "> [draggable]": {
          boxShadow: `0 0 0 2px ${token.colorPrimary}`
        }
      },
      // ==================== Show Line =====================
      "&-show-line": {
        // ================ Indent lines ================
        [`${treeCls}-indent`]: {
          "&-unit": {
            position: "relative",
            height: "100%",
            "&:before": {
              position: "absolute",
              top: 0,
              insetInlineEnd: titleHeight / 2,
              bottom: -treeNodePadding,
              borderInlineEnd: `1px solid ${token.colorBorder}`,
              content: '""'
            },
            "&-end": {
              "&:before": {
                display: "none"
              }
            }
          }
        },
        // ============== Cover Background ==============
        [`${treeCls}-switcher`]: {
          background: "transparent",
          "&-line-icon": {
            verticalAlign: "-0.15em"
          }
        }
      },
      [`${treeNodeCls}-leaf-last`]: {
        [`${treeCls}-switcher`]: {
          "&-leaf-line": {
            "&:before": {
              top: "auto !important",
              bottom: "auto !important",
              height: `${titleHeight / 2}px !important`
            }
          }
        }
      }
    }
  };
};
const genDirectoryStyle = (token) => {
  const {
    treeCls,
    treeNodeCls,
    treeNodePadding,
    directoryNodeSelectedBg,
    directoryNodeSelectedColor
  } = token;
  return {
    [`${treeCls}${treeCls}-directory`]: {
      // ================== TreeNode ==================
      [treeNodeCls]: {
        position: "relative",
        // Hover color
        "&:before": {
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
          bottom: treeNodePadding,
          insetInlineStart: 0,
          transition: `background-color ${token.motionDurationMid}`,
          content: '""',
          pointerEvents: "none"
        },
        "&:hover": {
          "&:before": {
            background: token.controlItemBgHover
          }
        },
        // Elements
        "> *": {
          zIndex: 1
        },
        // >>> Switcher
        [`${treeCls}-switcher`]: {
          transition: `color ${token.motionDurationMid}`
        },
        // >>> Title
        [`${treeCls}-node-content-wrapper`]: {
          borderRadius: 0,
          userSelect: "none",
          "&:hover": {
            background: "transparent"
          },
          [`&${treeCls}-node-selected`]: {
            color: directoryNodeSelectedColor,
            background: "transparent"
          }
        },
        // ============= Selected =============
        "&-selected": {
          [`
            &:hover::before,
            &::before
          `]: {
            background: directoryNodeSelectedBg
          },
          // >>> Switcher
          [`${treeCls}-switcher`]: {
            color: directoryNodeSelectedColor
          },
          // >>> Title
          [`${treeCls}-node-content-wrapper`]: {
            color: directoryNodeSelectedColor,
            background: "transparent"
          }
        }
      }
    }
  };
};
const genTreeStyle = (prefixCls, token) => {
  const treeCls = `.${prefixCls}`;
  const treeNodeCls = `${treeCls}-treenode`;
  const treeNodePadding = token.paddingXS / 2;
  const treeToken = merge(token, {
    treeCls,
    treeNodeCls,
    treeNodePadding
  });
  return [
    // Basic
    genBaseStyle(prefixCls, treeToken),
    // Directory
    genDirectoryStyle(treeToken)
  ];
};
const initComponentToken = (token) => {
  const { controlHeightSM } = token;
  return {
    titleHeight: controlHeightSM,
    nodeHoverBg: token.controlItemBgHover,
    nodeSelectedBg: token.controlItemBgActive
  };
};
const useStyle$1 = genComponentStyleHook(
  "Tree",
  (token, { prefixCls }) => [
    {
      [token.componentCls]: getStyle$1(`${prefixCls}-checkbox`, token)
    },
    genTreeStyle(prefixCls, token),
    genCollapseMotion(token)
  ],
  (token) => {
    const { colorTextLightSolid, colorPrimary } = token;
    return {
      ...initComponentToken(token),
      directoryNodeSelectedColor: colorTextLightSolid,
      directoryNodeSelectedBg: colorPrimary
    };
  }
);

const offset = 4;
function dropIndicatorRender(props) {
  const { dropPosition, dropLevelOffset, prefixCls, indent } = props;
  const startPosition = "left" ;
  const endPosition = "right" ;
  const style = {
    [startPosition]: -dropLevelOffset * indent + offset,
    [endPosition]: 0
  };
  switch (dropPosition) {
    case -1:
      style.top = -3;
      break;
    case 1:
      style.bottom = -3;
      break;
    default:
      style.bottom = -3;
      style[startPosition] = indent + offset;
      break;
  }
  return /* @__PURE__ */ jsx("div", { style, className: `${prefixCls}-drop-indicator` });
}

const SwitcherIconCom = (props) => {
  const { prefixCls, switcherIcon, treeNodeProps, showLine } = props;
  const { isLeaf, expanded, loading } = treeNodeProps;
  if (loading) {
    return /* @__PURE__ */ jsx(CircularProgress, { className: `${prefixCls}-switcher-loading-icon` });
  }
  let showLeafIcon;
  if (showLine && typeof showLine === "object") {
    showLeafIcon = showLine.showLeafIcon;
  }
  if (isLeaf) {
    if (!showLine) {
      return null;
    }
    if (typeof showLeafIcon !== "boolean" && !!showLeafIcon) {
      const leafIcon = typeof showLeafIcon === "function" ? showLeafIcon(treeNodeProps) : showLeafIcon;
      const leafCls = `${prefixCls}-switcher-line-custom-icon`;
      if (isValidElement(leafIcon)) {
        return cloneElement(leafIcon, {
          className: classNames(leafIcon.props.className || "", leafCls)
        });
      }
      return leafIcon;
    }
    return showLeafIcon ? /* @__PURE__ */ jsx(ArticleIcon, { className: `${prefixCls}-switcher-line-icon` }) : /* @__PURE__ */ jsx("span", { className: `${prefixCls}-switcher-leaf-line` });
  }
  const switcherCls = `${prefixCls}-switcher-icon`;
  const switcher = typeof switcherIcon === "function" ? switcherIcon(treeNodeProps) : switcherIcon;
  if (isValidElement(switcher)) {
    return cloneElement(switcher, {
      className: classNames(switcher.props.className || "", switcherCls)
    });
  }
  if (switcher !== void 0) {
    return switcher;
  }
  if (showLine) {
    return expanded ? /* @__PURE__ */ jsx(IndeterminateCheckBoxIcon, { className: `${prefixCls}-switcher-line-icon` }) : /* @__PURE__ */ jsx(CheckBoxIcon, { className: `${prefixCls}-switcher-line-icon` });
  }
  return /* @__PURE__ */ jsx(ArrowDropDownIcon, { className: switcherCls });
};

const Tree$1 = React__default.forwardRef((props, ref) => {
  const { getPrefixCls, virtual, tree } = React__default.useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    className,
    showIcon = false,
    showLine,
    switcherIcon,
    blockNode = false,
    children,
    checkable = false,
    selectable = true,
    draggable,
    motion: customMotion,
    style
  } = props;
  const prefixCls = getPrefixCls("tree", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const motion = customMotion ?? {
    ...initCollapseMotion(rootPrefixCls),
    motionAppear: false
  };
  const newProps = {
    ...props,
    checkable,
    selectable,
    showIcon,
    motion,
    blockNode,
    showLine: Boolean(showLine),
    dropIndicatorRender
  };
  const [wrapSSR, hashId] = useStyle$1(prefixCls);
  const draggableConfig = React__default.useMemo(() => {
    if (!draggable) {
      return false;
    }
    let mergedDraggable = {};
    switch (typeof draggable) {
      case "function":
        mergedDraggable.nodeDraggable = draggable;
        break;
      case "object":
        mergedDraggable = { ...draggable };
        break;
    }
    if (mergedDraggable.icon !== false) {
      mergedDraggable.icon = mergedDraggable.icon || /* @__PURE__ */ jsx(DragIndicatorIcon, {});
    }
    return mergedDraggable;
  }, [draggable]);
  const renderSwitcherIcon = (nodeProps) => /* @__PURE__ */ jsx(
    SwitcherIconCom,
    {
      prefixCls,
      switcherIcon,
      treeNodeProps: nodeProps,
      showLine
    }
  );
  return wrapSSR(
    /* @__PURE__ */ jsx(
      RcTree,
      {
        itemHeight: 20,
        ref,
        virtual,
        ...newProps,
        style: { ...tree?.style, ...style },
        prefixCls,
        className: classNames(
          {
            [`${prefixCls}-icon-hide`]: !showIcon,
            [`${prefixCls}-block-node`]: blockNode,
            [`${prefixCls}-unselectable`]: !selectable
          },
          tree?.className,
          className,
          hashId
        ),
        checkable: checkable ? /* @__PURE__ */ jsx("span", { className: `${prefixCls}-checkbox-inner` }) : checkable,
        selectable,
        switcherIcon: renderSwitcherIcon,
        draggable: draggableConfig,
        children
      }
    )
  );
});

function traverseNodesKey(treeData, callback) {
  function processNode(dataNode) {
    const { key, children } = dataNode;
    if (callback(key, dataNode) !== false) {
      traverseNodesKey(children || [], callback);
    }
  }
  treeData.forEach(processNode);
}
function calcRangeKeys({
  treeData,
  expandedKeys,
  startKey,
  endKey
}) {
  const keys = [];
  let record = 0 /* None */;
  if (startKey && startKey === endKey) {
    return [startKey];
  }
  if (!startKey || !endKey) {
    return [];
  }
  function matchKey(key) {
    return key === startKey || key === endKey;
  }
  traverseNodesKey(treeData, (key) => {
    if (record === 2 /* End */) {
      return false;
    }
    if (matchKey(key)) {
      keys.push(key);
      if (record === 0 /* None */) {
        record = 1 /* Start */;
      } else if (record === 1 /* Start */) {
        record = 2 /* End */;
        return false;
      }
    } else if (record === 1 /* Start */) {
      keys.push(key);
    }
    return expandedKeys.includes(key);
  });
  return keys;
}
function convertDirectoryKeysToNodes(treeData, keys) {
  const restKeys = [...keys];
  const nodes = [];
  traverseNodesKey(treeData, (key, node) => {
    const index = restKeys.indexOf(key);
    if (index !== -1) {
      nodes.push(node);
      restKeys.splice(index, 1);
    }
    return !!restKeys.length;
  });
  return nodes;
}

function getIcon(props) {
  const { isLeaf, expanded } = props;
  if (isLeaf) {
    return /* @__PURE__ */ jsx(ArticleIcon, {});
  }
  return expanded ? /* @__PURE__ */ jsx(FolderOpenIcon, {}) : /* @__PURE__ */ jsx(FolderIcon, {});
}
function getTreeData({ treeData, children }) {
  return treeData || convertTreeToData(children);
}
const DirectoryTree = ({ defaultExpandAll, defaultExpandParent, defaultExpandedKeys, ...props }, ref) => {
  const lastSelectedKey = React.useRef();
  const cachedSelectedKeys = React.useRef();
  const getInitExpandedKeys = () => {
    const { keyEntities } = convertDataToEntities(getTreeData(props));
    let initExpandedKeys;
    if (defaultExpandAll) {
      initExpandedKeys = Object.keys(keyEntities);
    } else if (defaultExpandParent) {
      initExpandedKeys = conductExpandParent(
        props.expandedKeys || defaultExpandedKeys || [],
        keyEntities
      );
    } else {
      initExpandedKeys = props.expandedKeys || defaultExpandedKeys;
    }
    return initExpandedKeys;
  };
  const [selectedKeys, setSelectedKeys] = React.useState(
    props.selectedKeys || props.defaultSelectedKeys || []
  );
  const [expandedKeys, setExpandedKeys] = React.useState(() => getInitExpandedKeys());
  React.useEffect(() => {
    if ("selectedKeys" in props) {
      setSelectedKeys(props.selectedKeys);
    }
  }, [props.selectedKeys]);
  React.useEffect(() => {
    if ("expandedKeys" in props) {
      setExpandedKeys(props.expandedKeys);
    }
  }, [props.expandedKeys]);
  const onExpand = (keys, info) => {
    if (!("expandedKeys" in props)) {
      setExpandedKeys(keys);
    }
    return props.onExpand?.(keys, info);
  };
  const onSelect = (keys, event) => {
    const { multiple } = props;
    const { node, nativeEvent } = event;
    const { key = "" } = node;
    const treeData = getTreeData(props);
    const newEvent = {
      ...event,
      selected: true
      // Directory selected always true
    };
    const ctrlPick = nativeEvent?.ctrlKey || nativeEvent?.metaKey;
    const shiftPick = nativeEvent?.shiftKey;
    let newSelectedKeys;
    if (multiple && ctrlPick) {
      newSelectedKeys = keys;
      lastSelectedKey.current = key;
      cachedSelectedKeys.current = newSelectedKeys;
      newEvent.selectedNodes = convertDirectoryKeysToNodes(treeData, newSelectedKeys);
    } else if (multiple && shiftPick) {
      newSelectedKeys = Array.from(
        /* @__PURE__ */ new Set([
          ...cachedSelectedKeys.current || [],
          ...calcRangeKeys({
            treeData,
            expandedKeys,
            startKey: key,
            endKey: lastSelectedKey.current
          })
        ])
      );
      newEvent.selectedNodes = convertDirectoryKeysToNodes(treeData, newSelectedKeys);
    } else {
      newSelectedKeys = [key];
      lastSelectedKey.current = key;
      cachedSelectedKeys.current = newSelectedKeys;
      newEvent.selectedNodes = convertDirectoryKeysToNodes(treeData, newSelectedKeys);
    }
    props.onSelect?.(newSelectedKeys, newEvent);
    if (!("selectedKeys" in props)) {
      setSelectedKeys(newSelectedKeys);
    }
  };
  const { getPrefixCls } = React.useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    className,
    showIcon = true,
    expandAction = "click",
    ...otherProps
  } = props;
  const prefixCls = getPrefixCls("tree", customizePrefixCls);
  const connectClassName = classNames(
    `${prefixCls}-directory`,
    className
  );
  return /* @__PURE__ */ jsx(
    Tree$1,
    {
      icon: getIcon,
      ref,
      blockNode: true,
      ...otherProps,
      showIcon,
      expandAction,
      prefixCls,
      className: connectClassName,
      expandedKeys,
      selectedKeys,
      onSelect,
      onExpand
    }
  );
};
const ForwardDirectoryTree = React.forwardRef(
  DirectoryTree
);

const Tree = Tree$1;
Tree.DirectoryTree = ForwardDirectoryTree;
Tree.TreeNode = TreeNode;

const inlineStyle = {
  border: 0,
  background: "transparent",
  padding: 0,
  lineHeight: "inherit",
  display: "inline-block"
};
const TransButton = React.forwardRef((props, ref) => {
  const onKeyDown = (event) => {
    const { keyCode } = event;
    if (keyCode === KeyCode.ENTER) {
      event.preventDefault();
    }
  };
  const onKeyUp = (event) => {
    const { keyCode } = event;
    const { onClick } = props;
    if (keyCode === KeyCode.ENTER && onClick) {
      onClick();
    }
  };
  const { style, noStyle, disabled, ...restProps } = props;
  let mergedStyle = {};
  if (!noStyle) {
    mergedStyle = {
      ...inlineStyle
    };
  }
  if (disabled) {
    mergedStyle.pointerEvents = "none";
  }
  mergedStyle = {
    ...mergedStyle,
    ...style
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "button",
      tabIndex: 0,
      ref,
      ...restProps,
      onKeyDown,
      onKeyUp,
      style: mergedStyle
    }
  );
});

const getTitleStyle = (fontSize, lineHeight, color, token) => {
  const { titleMarginBottom, fontWeightStrong } = token;
  return {
    marginBottom: titleMarginBottom,
    color,
    fontWeight: fontWeightStrong,
    fontSize,
    lineHeight
  };
};
const getTitleStyles = (token) => {
  const headings = [1, 2, 3, 4, 5];
  const styles = {};
  headings.forEach((headingLevel) => {
    styles[`
      h${headingLevel}&,
      div&-h${headingLevel},
      div&-h${headingLevel} > textarea,
      h${headingLevel}
    `] = getTitleStyle(
      token[`fontSizeHeading${headingLevel}`],
      token[`lineHeightHeading${headingLevel}`],
      token.colorTextHeading,
      token
    );
  });
  return styles;
};
const getLinkStyles = (token) => {
  const { componentCls } = token;
  return {
    "a&, a": {
      ...operationUnit(token),
      textDecoration: token.linkDecoration,
      "&:active, &:hover": {
        textDecoration: token.linkHoverDecoration
      },
      [`&[disabled], &${componentCls}-disabled`]: {
        color: token.colorTextDisabled,
        cursor: "not-allowed",
        "&:active, &:hover": {
          color: token.colorTextDisabled
        },
        "&:active": {
          pointerEvents: "none"
        }
      }
    }
  };
};
const getResetStyles = (token) => ({
  code: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.2em 0.1em",
    fontSize: "85%",
    fontFamily: token.fontFamilyCode,
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3
  },
  kbd: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.15em 0.1em",
    fontSize: "90%",
    fontFamily: token.fontFamilyCode,
    background: "rgba(150, 150, 150, 0.06)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderBottomWidth: 2,
    borderRadius: 3
  },
  mark: {
    padding: 0,
    // FIXME hardcode in v4
    backgroundColor: "#FAAD14"
  },
  "u, ins": {
    textDecoration: "underline",
    textDecorationSkipInk: "auto"
  },
  "s, del": {
    textDecoration: "line-through"
  },
  strong: {
    fontWeight: 600
  },
  // list
  "ul, ol": {
    marginInline: 0,
    marginBlock: "0 1em",
    padding: 0,
    li: {
      marginInline: "20px 0",
      marginBlock: 0,
      paddingInline: "4px 0",
      paddingBlock: 0
    }
  },
  ul: {
    listStyleType: "circle",
    ul: {
      listStyleType: "disc"
    }
  },
  ol: {
    listStyleType: "decimal"
  },
  // pre & block
  "pre, blockquote": {
    margin: "1em 0"
  },
  pre: {
    padding: "0.4em 0.6em",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3,
    fontFamily: token.fontFamilyCode,
    // Compatible for marked
    code: {
      display: "inline",
      margin: 0,
      padding: 0,
      fontSize: "inherit",
      fontFamily: "inherit",
      background: "transparent",
      border: 0
    }
  },
  blockquote: {
    paddingInline: "0.6em 0",
    paddingBlock: 0,
    borderInlineStart: "4px solid rgba(100, 100, 100, 0.2)",
    opacity: 0.85
  }
});
const getEditableStyles = (token) => {
  const { componentCls, paddingSM } = token;
  const inputShift = paddingSM;
  return {
    "&-edit-content": {
      position: "relative",
      "div&": {
        insetInlineStart: -token.paddingSM,
        marginTop: -inputShift,
        marginBottom: `calc(1em - ${inputShift}px)`
      },
      [`${componentCls}-edit-content-confirm`]: {
        position: "absolute",
        insetInlineEnd: token.marginXS + 2,
        insetBlockEnd: token.marginXS,
        color: token.colorTextDescription,
        // default style
        fontWeight: "normal",
        fontSize: token.fontSize,
        fontStyle: "normal",
        pointerEvents: "none"
      },
      textarea: {
        margin: "0!important",
        // Fix Editable Textarea flash in Firefox
        MozTransition: "none",
        height: "1em"
      }
    }
  };
};
const getCopyableStyles = (token) => ({
  "&-copy-success": {
    [`
    &,
    &:hover,
    &:focus`]: {
      color: token.colorSuccess
    }
  }
});
const getEllipsisStyles = () => ({
  [`
  a&-ellipsis,
  span&-ellipsis
  `]: {
    display: "inline-block",
    maxWidth: "100%"
  },
  "&-single-line": {
    whiteSpace: "nowrap"
  },
  "&-ellipsis-single-line": {
    overflow: "hidden",
    textOverflow: "ellipsis",
    // https://blog.csdn.net/iefreer/article/details/50421025
    "a&, span&": {
      verticalAlign: "bottom"
    }
  },
  "&-ellipsis-multiple-line": {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical"
  }
});

const genTypographyStyle = (token) => {
  const { componentCls, titleMarginTop } = token;
  return {
    [componentCls]: {
      color: token.colorText,
      wordBreak: "break-word",
      lineHeight: token.lineHeight,
      [`&${componentCls}-secondary`]: {
        color: token.colorTextDescription
      },
      [`&${componentCls}-success`]: {
        color: token.colorSuccess
      },
      [`&${componentCls}-warning`]: {
        color: token.colorWarning
      },
      [`&${componentCls}-danger`]: {
        color: token.colorError,
        "a&:active, a&:focus": {
          color: token.colorErrorActive
        },
        "a&:hover": {
          color: token.colorErrorHover
        }
      },
      [`&${componentCls}-disabled`]: {
        color: token.colorTextDisabled,
        cursor: "not-allowed",
        userSelect: "none"
      },
      [`
        div&,
        p
      `]: {
        marginBottom: "1em"
      },
      ...getTitleStyles(token),
      [`
      & + h1${componentCls},
      & + h2${componentCls},
      & + h3${componentCls},
      & + h4${componentCls},
      & + h5${componentCls}
      `]: {
        marginTop: titleMarginTop
      },
      [`
      div,
      ul,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5`]: {
        [`
        + h1,
        + h2,
        + h3,
        + h4,
        + h5
        `]: {
          marginTop: titleMarginTop
        }
      },
      ...getResetStyles(token),
      ...getLinkStyles(token),
      // Operation
      [`
        ${componentCls}-expand,
        ${componentCls}-edit,
        ${componentCls}-copy
      `]: {
        ...operationUnit(token),
        marginInlineStart: token.marginXXS
      },
      ...getEditableStyles(token),
      ...getCopyableStyles(token),
      ...getEllipsisStyles()
    }
  };
};
const useStyle = genComponentStyleHook(
  "Typography",
  (token) => [genTypographyStyle(token)],
  () => ({
    titleMarginTop: "1.2em",
    titleMarginBottom: "0.5em"
  })
);

const Editable = (props) => {
  const {
    prefixCls,
    "aria-label": ariaLabel,
    className,
    style,
    maxLength,
    autoSize = true,
    value,
    onSave,
    onCancel,
    onEnd,
    component,
    enterIcon = /* @__PURE__ */ jsx(InputIcon, {})
  } = props;
  const ref = React.useRef(null);
  const inComposition = React.useRef(false);
  const lastKeyCode = React.useRef();
  const [current, setCurrent] = React.useState(value);
  React.useEffect(() => {
    setCurrent(value);
  }, [value]);
  React.useEffect(() => {
    if (ref.current && ref.current.resizableTextArea) {
      const { textArea } = ref.current.resizableTextArea;
      textArea.focus();
      const { length } = textArea.value;
      textArea.setSelectionRange(length, length);
    }
  }, []);
  const onChange = ({ target }) => {
    setCurrent(target.value.replace(/[\n\r]/g, ""));
  };
  const onCompositionStart = () => {
    inComposition.current = true;
  };
  const onCompositionEnd = () => {
    inComposition.current = false;
  };
  const onKeyDown = ({ keyCode }) => {
    if (inComposition.current)
      return;
    lastKeyCode.current = keyCode;
  };
  const confirmChange = () => {
    onSave(current.trim());
  };
  const onKeyUp = ({
    keyCode,
    ctrlKey,
    altKey,
    metaKey,
    shiftKey
  }) => {
    if (lastKeyCode.current === keyCode && !inComposition.current && !ctrlKey && !altKey && !metaKey && !shiftKey) {
      if (keyCode === KeyCode.ENTER) {
        confirmChange();
        onEnd?.();
      } else if (keyCode === KeyCode.ESC) {
        onCancel();
      }
    }
  };
  const onBlur = () => {
    confirmChange();
  };
  const textClassName = component ? `${prefixCls}-${component}` : "";
  const [wrapSSR, hashId] = useStyle(prefixCls);
  const textAreaClassName = classNames(
    prefixCls,
    `${prefixCls}-edit-content`,
    className,
    textClassName,
    hashId
  );
  return wrapSSR(
    /* @__PURE__ */ jsxs("div", { className: textAreaClassName, style, children: [
      /* @__PURE__ */ jsx(
        TextArea,
        {
          ref,
          maxLength,
          value: current,
          onChange,
          onKeyDown,
          onKeyUp,
          onCompositionStart,
          onCompositionEnd,
          onBlur,
          "aria-label": ariaLabel,
          rows: 1,
          autoSize
        }
      ),
      enterIcon !== null ? cloneElement(enterIcon, { className: `${prefixCls}-edit-content-confirm` }) : null
    ] })
  );
};

const Typography$1 = React.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    component: Component = "article",
    className,
    rootClassName,
    setContentRef,
    children,
    style,
    ...restProps
  } = props;
  const {
    getPrefixCls,
    typography
  } = React.useContext(ConfigContext);
  let mergedRef = ref;
  if (setContentRef) {
    mergedRef = composeRef(ref, setContentRef);
  }
  const prefixCls = getPrefixCls("typography", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);
  const componentClassName = classNames(
    prefixCls,
    typography?.className,
    className,
    rootClassName,
    hashId
  );
  const mergedStyle = { ...typography?.style, ...style };
  return wrapSSR(
    // @ts-expect-error: Expression produces a union type that is too complex to represent.
    /* @__PURE__ */ jsx(Component, { className: componentClassName, style: mergedStyle, ref: mergedRef, ...restProps, children })
  );
});

function useMergedConfig(propConfig, templateConfig) {
  return React.useMemo(() => {
    const support = !!propConfig;
    return [
      support,
      {
        ...templateConfig,
        ...support && typeof propConfig === "object" ? propConfig : null
      }
    ];
  }, [propConfig]);
}

const useUpdatedEffect = (callback, conditions) => {
  const mountRef = React.useRef(false);
  React.useEffect(() => {
    if (mountRef.current) {
      callback();
    } else {
      mountRef.current = true;
    }
  }, conditions);
};

function cuttable(node) {
  const type = typeof node;
  return type === "string" || type === "number";
}
function getNodesLen(nodeList) {
  let totalLen = 0;
  nodeList.forEach((node) => {
    if (cuttable(node)) {
      totalLen += String(node).length;
    } else {
      totalLen += 1;
    }
  });
  return totalLen;
}
function sliceNodes(nodeList, len) {
  let currLen = 0;
  const currentNodeList = [];
  for (let i = 0; i < nodeList.length; i += 1) {
    if (currLen === len) {
      return currentNodeList;
    }
    const node = nodeList[i];
    const canCut = cuttable(node);
    const nodeLen = canCut ? String(node).length : 1;
    const nextLen = currLen + nodeLen;
    if (nextLen > len) {
      const restLen = len - currLen;
      currentNodeList.push(String(node).slice(0, restLen));
      return currentNodeList;
    }
    currentNodeList.push(node);
    currLen = nextLen;
  }
  return nodeList;
}
const NONE = 0;
const PREPARE = 1;
const WALKING = 2;
const DONE_WITH_ELLIPSIS = 3;
const DONE_WITHOUT_ELLIPSIS = 4;
const Ellipsis = ({
  enabledMeasure,
  children,
  text,
  width,
  fontSize,
  rows,
  onEllipsis
}) => {
  const [[startLen, midLen, endLen], setCutLength] = React.useState([0, 0, 0]);
  const [lastLen, setLastLen] = React.useState(0);
  const [walkingState, setWalkingState] = React.useState(NONE);
  const [singleRowHeight, setSingleRowHeight] = React.useState(0);
  const singleRowRef = React.useRef(null);
  const midRowRef = React.useRef(null);
  const nodeList = React.useMemo(() => toArray$2(text), [text]);
  const totalLen = React.useMemo(() => getNodesLen(nodeList), [nodeList]);
  const mergedChildren = React.useMemo(() => {
    if (!enabledMeasure || walkingState !== DONE_WITH_ELLIPSIS) {
      if (lastLen && walkingState !== DONE_WITHOUT_ELLIPSIS && enabledMeasure)
        return children(sliceNodes(nodeList, lastLen), lastLen < totalLen);
      return children(nodeList, false);
    }
    return children(sliceNodes(nodeList, midLen), midLen < totalLen);
  }, [enabledMeasure, walkingState, children, nodeList, midLen, totalLen]);
  useEffect(() => {
    if (enabledMeasure && width && fontSize && totalLen) {
      setWalkingState(PREPARE);
      setCutLength([0, Math.ceil(totalLen / 2), totalLen]);
    }
  }, [enabledMeasure, width, fontSize, text, totalLen, rows]);
  useEffect(() => {
    if (walkingState === PREPARE) {
      setSingleRowHeight(singleRowRef.current?.offsetHeight || 0);
    }
  }, [walkingState]);
  useEffect(() => {
    if (singleRowHeight) {
      if (walkingState === PREPARE) {
        const midHeight = midRowRef.current?.offsetHeight || 0;
        const maxHeight = rows * singleRowHeight;
        if (midHeight <= maxHeight) {
          setWalkingState(DONE_WITHOUT_ELLIPSIS);
          onEllipsis(false);
        } else {
          setWalkingState(WALKING);
        }
      } else if (walkingState === WALKING) {
        if (startLen !== endLen) {
          const midHeight = midRowRef.current?.offsetHeight || 0;
          const maxHeight = rows * singleRowHeight;
          let nextStartLen = startLen;
          let nextEndLen = endLen;
          if (startLen === endLen - 1) {
            nextEndLen = startLen;
          } else if (midHeight <= maxHeight) {
            nextStartLen = midLen;
          } else {
            nextEndLen = midLen;
          }
          const nextMidLen = Math.ceil((nextStartLen + nextEndLen) / 2);
          setCutLength([nextStartLen, nextMidLen, nextEndLen]);
        } else {
          setWalkingState(DONE_WITH_ELLIPSIS);
          setLastLen(midLen);
          onEllipsis(true);
        }
      }
    }
  }, [walkingState, startLen, endLen, rows, singleRowHeight]);
  const measureStyle = {
    width,
    whiteSpace: "normal",
    margin: 0,
    padding: 0
  };
  const renderMeasure = (content, ref, style) => /* @__PURE__ */ jsx(
    "span",
    {
      "aria-hidden": true,
      ref,
      style: {
        position: "fixed",
        display: "block",
        left: 0,
        top: 0,
        zIndex: -9999,
        visibility: "hidden",
        pointerEvents: "none",
        fontSize: Math.ceil(fontSize / 2) * 2,
        ...style
      },
      children: content
    }
  );
  const renderMeasureSlice = (len, ref) => {
    const sliceNodeList = sliceNodes(nodeList, len);
    return renderMeasure(children(sliceNodeList, true), ref, measureStyle);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    mergedChildren,
    enabledMeasure && walkingState !== DONE_WITH_ELLIPSIS && walkingState !== DONE_WITHOUT_ELLIPSIS && /* @__PURE__ */ jsxs(Fragment, { children: [
      renderMeasure("lg", singleRowRef, { wordBreak: "keep-all", whiteSpace: "nowrap" }),
      walkingState === PREPARE ? renderMeasure(children(nodeList, false), midRowRef, measureStyle) : renderMeasureSlice(midLen, midRowRef)
    ] })
  ] });
};

const EllipsisTooltip = ({
  enabledEllipsis,
  isEllipsis,
  children,
  tooltipProps
}) => {
  if (!tooltipProps?.title || !enabledEllipsis) {
    return children;
  }
  return /* @__PURE__ */ jsx(Tooltip, { open: isEllipsis ? void 0 : false, ...tooltipProps, children });
};

function wrapperDecorations({ mark, code, underline, delete: del, strong, keyboard, italic }, content) {
  let currentContent = content;
  function wrap(tag, needed) {
    if (!needed) {
      return;
    }
    currentContent = React.createElement(tag, {}, currentContent);
  }
  wrap("strong", strong);
  wrap("u", underline);
  wrap("del", del);
  wrap("code", code);
  wrap("mark", mark);
  wrap("kbd", keyboard);
  wrap("i", italic);
  return currentContent;
}
function getNode(dom, defaultNode, needDom) {
  if (dom === true || dom === void 0) {
    return defaultNode;
  }
  return dom || needDom && defaultNode;
}
function toList(val) {
  if (val === false) {
    return [false, false];
  }
  return Array.isArray(val) ? val : [val];
}
const ELLIPSIS_STR = "...";
const Base = React.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    type,
    disabled,
    children,
    ellipsis,
    editable,
    copyable,
    component,
    title,
    ...restProps
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const [textLocale] = useLocale("Text");
  const typographyRef = React.useRef(null);
  const editIconRef = React.useRef(null);
  const prefixCls = getPrefixCls("typography", customizePrefixCls);
  const textProps = omit(restProps, [
    "mark",
    "code",
    "delete",
    "underline",
    "strong",
    "keyboard",
    "italic"
  ]);
  const [enableEdit, editConfig] = useMergedConfig(editable);
  const [editing, setEditing] = useMergedState(false, {
    value: editConfig.editing
  });
  const { triggerType = ["icon"] } = editConfig;
  const triggerEdit = (edit) => {
    if (edit) {
      editConfig.onStart?.();
    }
    setEditing(edit);
  };
  useUpdatedEffect(() => {
    if (!editing) {
      editIconRef.current?.focus();
    }
  }, [editing]);
  const onEditClick = (e) => {
    e?.preventDefault();
    triggerEdit(true);
  };
  const onEditChange = (value) => {
    editConfig.onChange?.(value);
    triggerEdit(false);
  };
  const onEditCancel = () => {
    editConfig.onCancel?.();
    triggerEdit(false);
  };
  const [enableCopy, copyConfig] = useMergedConfig(copyable);
  const [copied, setCopied] = React.useState(false);
  const copyIdRef = React.useRef(null);
  const copyOptions = {};
  if (copyConfig.format) {
    copyOptions.format = copyConfig.format;
  }
  const cleanCopyId = () => {
    if (copyIdRef.current) {
      clearTimeout(copyIdRef.current);
    }
  };
  const onCopyClick = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    copy(copyConfig.text || String(children) || "", copyOptions);
    setCopied(true);
    cleanCopyId();
    copyIdRef.current = setTimeout(() => {
      setCopied(false);
    }, 3e3);
    copyConfig.onCopy?.(e);
  };
  React.useEffect(() => cleanCopyId, []);
  const [isLineClampSupport, setIsLineClampSupport] = React.useState(false);
  const [isTextOverflowSupport, setIsTextOverflowSupport] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [isJsEllipsis, setIsJsEllipsis] = React.useState(false);
  const [isNativeEllipsis, setIsNativeEllipsis] = React.useState(false);
  const [isNativeVisible, setIsNativeVisible] = React.useState(true);
  const [enableEllipsis, ellipsisConfig] = useMergedConfig(ellipsis, {
    expandable: false
  });
  const mergedEnableEllipsis = enableEllipsis && !expanded;
  const { rows = 1 } = ellipsisConfig;
  const needMeasureEllipsis = React.useMemo(
    () => (
      // Disable ellipsis
      !mergedEnableEllipsis || // Provide suffix
      ellipsisConfig.suffix !== void 0 || ellipsisConfig.onEllipsis || // Can't use css ellipsis since we need to provide the place for button
      ellipsisConfig.expandable || enableEdit || enableCopy
    ),
    [mergedEnableEllipsis, ellipsisConfig, enableEdit, enableCopy]
  );
  useIsomorphicLayoutEffect(() => {
    if (enableEllipsis && !needMeasureEllipsis) {
      setIsLineClampSupport(isStyleSupport("webkitLineClamp"));
      setIsTextOverflowSupport(isStyleSupport("textOverflow"));
    }
  }, [needMeasureEllipsis, enableEllipsis]);
  const cssEllipsis = React.useMemo(() => {
    if (needMeasureEllipsis) {
      return false;
    }
    if (rows === 1) {
      return isTextOverflowSupport;
    }
    return isLineClampSupport;
  }, [needMeasureEllipsis, isTextOverflowSupport, isLineClampSupport]);
  const isMergedEllipsis = mergedEnableEllipsis && (cssEllipsis ? isNativeEllipsis : isJsEllipsis);
  const cssTextOverflow = mergedEnableEllipsis && rows === 1 && cssEllipsis;
  const cssLineClamp = mergedEnableEllipsis && rows > 1 && cssEllipsis;
  const onExpandClick = (e) => {
    setExpanded(true);
    ellipsisConfig.onExpand?.(e);
  };
  const [ellipsisWidth, setEllipsisWidth] = React.useState(0);
  const [ellipsisFontSize, setEllipsisFontSize] = React.useState(0);
  const onResize = ({ offsetWidth }, element) => {
    setEllipsisWidth(offsetWidth);
    setEllipsisFontSize(parseInt(window.getComputedStyle?.(element).fontSize, 10) || 0);
  };
  const onJsEllipsis = (jsEllipsis) => {
    setIsJsEllipsis(jsEllipsis);
    if (isJsEllipsis !== jsEllipsis) {
      ellipsisConfig.onEllipsis?.(jsEllipsis);
    }
  };
  React.useEffect(() => {
    const textEle = typographyRef.current;
    if (enableEllipsis && cssEllipsis && textEle) {
      const currentEllipsis = cssLineClamp ? textEle.offsetHeight < textEle.scrollHeight : textEle.offsetWidth < textEle.scrollWidth;
      if (isNativeEllipsis !== currentEllipsis) {
        setIsNativeEllipsis(currentEllipsis);
      }
    }
  }, [enableEllipsis, cssEllipsis, children, cssLineClamp, isNativeVisible]);
  React.useEffect(() => {
    const textEle = typographyRef.current;
    if (typeof IntersectionObserver === "undefined" || !textEle || !cssEllipsis || !mergedEnableEllipsis) {
      return;
    }
    const observer = new IntersectionObserver(() => {
      setIsNativeVisible(!!textEle.offsetParent);
    });
    observer.observe(textEle);
    return () => {
      observer.disconnect();
    };
  }, [cssEllipsis, mergedEnableEllipsis]);
  let tooltipProps = {};
  if (ellipsisConfig.tooltip === true) {
    tooltipProps = { title: editConfig.text ?? children };
  } else if (React.isValidElement(ellipsisConfig.tooltip)) {
    tooltipProps = { title: ellipsisConfig.tooltip };
  } else if (typeof ellipsisConfig.tooltip === "object") {
    tooltipProps = { title: editConfig.text ?? children, ...ellipsisConfig.tooltip };
  } else {
    tooltipProps = { title: ellipsisConfig.tooltip };
  }
  const topAriaLabel = React.useMemo(() => {
    const isValid = (val) => ["string", "number"].includes(typeof val);
    if (!enableEllipsis || cssEllipsis) {
      return void 0;
    }
    if (isValid(editConfig.text)) {
      return editConfig.text;
    }
    if (isValid(children)) {
      return children;
    }
    if (isValid(title)) {
      return title;
    }
    if (isValid(tooltipProps.title)) {
      return tooltipProps.title;
    }
    return void 0;
  }, [enableEllipsis, cssEllipsis, title, tooltipProps.title, isMergedEllipsis]);
  if (editing) {
    return /* @__PURE__ */ jsx(
      Editable,
      {
        value: editConfig.text ?? (typeof children === "string" ? children : ""),
        onSave: onEditChange,
        onCancel: onEditCancel,
        onEnd: editConfig.onEnd,
        prefixCls,
        className,
        style,
        component,
        maxLength: editConfig.maxLength,
        autoSize: editConfig.autoSize,
        enterIcon: editConfig.enterIcon
      }
    );
  }
  const renderExpand = () => {
    const { expandable, symbol } = ellipsisConfig;
    if (!expandable)
      return null;
    let expandContent;
    if (symbol) {
      expandContent = symbol;
    } else {
      expandContent = textLocale?.expand;
    }
    return /* @__PURE__ */ jsx(
      "a",
      {
        className: `${prefixCls}-expand`,
        onClick: onExpandClick,
        "aria-label": textLocale?.expand,
        children: expandContent
      },
      "expand"
    );
  };
  const renderEdit = () => {
    if (!enableEdit)
      return;
    const { icon, tooltip } = editConfig;
    const editTitle = toArray$2(tooltip)[0] || textLocale?.edit;
    const ariaLabel = typeof editTitle === "string" ? editTitle : "";
    return triggerType.includes("icon") ? /* @__PURE__ */ jsx(Tooltip, { title: tooltip === false ? "" : editTitle, children: /* @__PURE__ */ jsx(
      TransButton,
      {
        ref: editIconRef,
        className: `${prefixCls}-edit`,
        onClick: onEditClick,
        "aria-label": ariaLabel,
        children: icon || /* @__PURE__ */ jsx(EditIcon, { role: "button" })
      }
    ) }, "edit") : null;
  };
  const renderCopy = () => {
    if (!enableCopy)
      return;
    const { tooltips, icon } = copyConfig;
    const tooltipNodes = toList(tooltips);
    const iconNodes = toList(icon);
    const copyTitle = copied ? getNode(tooltipNodes[1], textLocale?.copied) : getNode(tooltipNodes[0], textLocale?.copy);
    const systemStr = copied ? textLocale?.copied : textLocale?.copy;
    const ariaLabel = typeof copyTitle === "string" ? copyTitle : systemStr;
    return /* @__PURE__ */ jsx(Tooltip, { title: copyTitle, children: /* @__PURE__ */ jsx(
      TransButton,
      {
        className: classNames(`${prefixCls}-copy`, copied && `${prefixCls}-copy-success`),
        onClick: onCopyClick,
        "aria-label": ariaLabel,
        children: copied ? getNode(iconNodes[1], /* @__PURE__ */ jsx(CheckIcon, { sx: { fontSize: 14 } }), true) : getNode(iconNodes[0], /* @__PURE__ */ jsx(ContentCopyIcon, { sx: { fontSize: 14 } }), true)
      }
    ) }, "copy");
  };
  const renderOperations = (renderExpanded) => [
    renderExpanded && renderExpand(),
    renderEdit(),
    renderCopy()
  ];
  const renderEllipsis = (needEllipsis) => [
    needEllipsis && /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: ELLIPSIS_STR }, "ellipsis"),
    ellipsisConfig.suffix,
    renderOperations(needEllipsis)
  ];
  return /* @__PURE__ */ jsx(ResizeObserver$1, { onResize, disabled: !mergedEnableEllipsis || cssEllipsis, children: (resizeRef) => /* @__PURE__ */ jsx(
    EllipsisTooltip,
    {
      tooltipProps,
      enabledEllipsis: mergedEnableEllipsis,
      isEllipsis: isMergedEllipsis,
      children: /* @__PURE__ */ jsx(
        Typography$1,
        {
          className: classNames(
            {
              [`${prefixCls}-${type}`]: type,
              [`${prefixCls}-disabled`]: disabled,
              [`${prefixCls}-ellipsis`]: enableEllipsis,
              [`${prefixCls}-single-line`]: mergedEnableEllipsis && rows === 1,
              [`${prefixCls}-ellipsis-single-line`]: cssTextOverflow,
              [`${prefixCls}-ellipsis-multiple-line`]: cssLineClamp
            },
            className
          ),
          prefixCls: customizePrefixCls,
          style: {
            ...style,
            WebkitLineClamp: cssLineClamp ? rows : void 0
          },
          component,
          ref: composeRef(resizeRef, typographyRef, ref),
          onClick: triggerType.includes("text") ? onEditClick : void 0,
          "aria-label": topAriaLabel?.toString(),
          title,
          ...textProps,
          children: /* @__PURE__ */ jsx(
            Ellipsis,
            {
              enabledMeasure: mergedEnableEllipsis && !cssEllipsis,
              text: children,
              rows,
              width: ellipsisWidth,
              fontSize: ellipsisFontSize,
              onEllipsis: onJsEllipsis,
              children: (node, needEllipsis) => {
                let renderNode = node;
                if (node.length && needEllipsis && topAriaLabel) {
                  renderNode = /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: renderNode }, "show-content");
                }
                const wrappedContext = wrapperDecorations(
                  props,
                  /* @__PURE__ */ jsxs(Fragment, { children: [
                    renderNode,
                    renderEllipsis(needEllipsis)
                  ] })
                );
                return wrappedContext;
              }
            }
          )
        }
      )
    }
  ) });
});

const Link = React.forwardRef(({ ellipsis, rel, ...restProps }, ref) => {
  const mergedProps = {
    ...restProps,
    rel: rel === void 0 && restProps.target === "_blank" ? "noopener noreferrer" : rel
  };
  delete mergedProps.navigate;
  return /* @__PURE__ */ jsx(Base, { ...mergedProps, ref, ellipsis: !!ellipsis, component: "a" });
});

const Paragraph = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(Base, { ref, ...props, component: "div" }));

const Text = ({ ellipsis, ...restProps }, ref) => {
  const mergedEllipsis = React.useMemo(() => {
    if (ellipsis && typeof ellipsis === "object") {
      return omit(ellipsis, ["expandable", "rows"]);
    }
    return ellipsis;
  }, [ellipsis]);
  return /* @__PURE__ */ jsx(Base, { ref, ...restProps, ellipsis: mergedEllipsis, component: "span" });
};
const Text$1 = React.forwardRef(Text);

const TITLE_ELE_LIST = [1, 2, 3, 4, 5];
const Title = React.forwardRef((props, ref) => {
  const { level = 1, ...restProps } = props;
  let component;
  if (TITLE_ELE_LIST.includes(level)) {
    component = `h${level}`;
  } else {
    component = "h1";
  }
  return /* @__PURE__ */ jsx(Base, { ref, ...restProps, component });
});

const Typography = Typography$1;
Typography.Text = Text$1;
Typography.Link = Link;
Typography.Title = Title;
Typography.Paragraph = Paragraph;

export { Affix as A, Badge as B, Calendar as C, DatePicker as D, Empty as E, Form as F, Grid as G, ConfigContext as H, Input as I, useStyleRegister as J, useCacheToken as K, Layout as L, Menu as M, useIsomorphicLayoutEffect as N, Keyframes as O, Pagination as P, resetComponent as Q, Radio as R, Select as S, TypedInputNumber as T, operationUnit as U, SiderContext as V, roundedArrow as W, Card as a, Checkbox as b, Col as c, Collapse$1 as d, ConfigProvider as e, Descriptions as f, Drawer as g, List as h, Modal as i, Popover as j, Result as k, Row$1 as l, Skeleton as m, CompoundedSpace as n, Statistic as o, Status as p, Steps as q, Switch as r, ForwardTable as s, Tabs as t, TimePicker as u, Tooltip as v, Tree as w, Typography as x, theme as y, createTheme as z };
