import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import React__default, { useContext, useMemo, useEffect, useRef, useImperativeHandle, useState, useCallback, createContext, createElement, Fragment as Fragment$1, memo } from 'react';
import classNames from 'classnames';
import { z as createTheme, y as theme, H as ConfigContext, J as useStyleRegister, e as ConfigProvider, K as useCacheToken, k as Result, F as Form, j as Popover, v as Tooltip, x as Typography, N as useIsomorphicLayoutEffect, l as Row, c as Col, O as Keyframes, o as Statistic$1, B as Badge, t as Tabs, Q as resetComponent, G as Grid, f as Descriptions, n as CompoundedSpace, S as Select, I as Input, b as Checkbox, D as DatePicker, T as TypedInputNumber, R as Radio, r as Switch, u as TimePicker, g as Drawer, i as Modal, q as Steps, U as operationUnit, A as Affix, L as Layout, m as Skeleton, M as Menu, V as SiderContext, a as Card$1, s as ForwardTable, w as Tree, W as roundedArrow } from '../assets/index-IBqTLk-p.js';
import { noteOnce } from 'rc-util/lib/warning';
import 'rc-util/lib/Dom/canUseDom';
import 'rc-util/lib/Dom/dynamicCSS';
import { TinyColor } from '@ctrl/tinycolor';
import 'rc-util';
import 'rc-pagination/lib/locale/en_US';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'rc-pagination';
import Pagination from 'rc-pagination/lib/locale/zh_TW';
import CalendarLocale from 'rc-picker/lib/locale/zh_TW';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-tw';
import omit from 'omit.js';
import { useIntl, IntlProvider } from '@caps.dev/react-intl';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import get$1 from 'rc-util/lib/utils/get';
import CircularProgress from '@mui/material/CircularProgress';
import InfoIcon from '@mui/icons-material/Info';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import useSWR, { useSWRConfig } from 'swr';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { configure } from 'safe-stable-stringify';
import merge$1 from 'lodash.merge';
import set from 'rc-util/lib/utils/set';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
export { default as useMountMergeState } from 'rc-util/lib/hooks/useMergedState';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import toArray from 'rc-util/lib/Children/toArray';
import Badge$1 from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import relativeTime from 'dayjs/plugin/relativeTime';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import toNumber from 'lodash.tonumber';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import isoWeek from 'dayjs/plugin/isoWeek';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import { useUrlSearchParams } from '@umijs/use-params';
import { FieldContext as FieldContext$1 } from 'rc-field-form';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import LoadingButton from '@mui/lab/LoadingButton';
import { createPortal, unstable_batchedUpdates } from 'react-dom';
import ResizeObserver from 'rc-resize-observer';
import Divider from '@mui/material/Divider';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography$1 from '@mui/material/Typography';
import MUILink from '@mui/material/Link';
import Link from 'next/link';
import { u as useAppData } from '../assets/useAppContext-SmQ_dW_N.js';
import { usePathname } from 'next/navigation';
import CopyrightIcon from '@mui/icons-material/Copyright';
import MenuIcon from '@mui/icons-material/Menu';
import Icon from '@mui/material/Icon';
import { pathToRegexp } from 'path-to-regexp';
import useMergedState$1 from 'rc-util/lib/hooks/useMergedState.js';
import warning from 'rc-util/lib/warning.js';
import { ThemeProvider } from '@mui/material/styles';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import VerticalAlignCenter from '@mui/icons-material/VerticalAlignCenter';
import VerticalAlignTop from '@mui/icons-material/VerticalAlignTop';
import Menu$1 from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HeightIcon from '@mui/icons-material/Height';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { useSensors, useSensor, PointerSensor, MouseSensor, DndContext, closestCenter } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import 'rc-util/lib/omit';
import 'rc-util/lib/raf';
import 'rc-motion';
import 'rc-picker/lib/generate/dayjs';
import 'rc-picker';
import 'rc-util/lib/pickAttrs';
import 'rc-checkbox';
import 'rc-util/lib/ref';
import 'rc-tabs';
import 'rc-collapse';
import '@rc-component/portal';
import 'rc-util/lib/hooks/useLayoutEffect';
import 'rc-util/lib/KeyCode';
import 'scroll-into-view-if-needed';
import 'rc-util/lib/hooks/useState';
import 'rc-util/lib/Dom/isVisible';
import '@mui/material/Tooltip';
import '@mui/icons-material/CheckCircleOutline';
import '@mui/icons-material/ErrorOutline';
import '@mui/lab';
import '@mui/icons-material/ExpandLess';
import 'rc-input-number';
import 'rc-menu';
import '@mui/icons-material/List';
import 'rc-util/lib/React/render';
import 'rc-dialog';
import 'rc-util/lib/Dom/styleChecker';
import 'rc-tooltip';
import '@mui/icons-material/HighlightOff';
import '@mui/icons-material/WarningAmber';
import '@mui/icons-material/AutoGraph';
import '@mui/icons-material/Check';
import 'rc-steps';
import '@mui/icons-material/TaskAlt';
import 'rc-progress';
import 'rc-switch';
import 'rc-table';
import 'rc-table/lib/hooks/useColumns/index.js';
import '@mui/material/Backdrop';
import 'rc-select';
import '@mui/icons-material/ArrowDropDown';
import '@mui/icons-material/ArrowDropUp';
import '@mui/icons-material/EventNote';
import '@mui/icons-material/Schedule';
import '@mui/icons-material/TrendingFlat';
import 'rc-tree';
import 'rc-tree/lib/util';
import 'rc-tree/lib/utils/treeUtil';
import '@mui/icons-material/Article';
import '@mui/icons-material/FolderOpen';
import '@mui/icons-material/Folder';
import 'rc-util/lib/hooks/useMemo';
import 'rc-util/lib/isEqual';
import '@mui/icons-material/IndeterminateCheckBox';
import '@mui/icons-material/CheckBox';
import 'copy-to-clipboard';
import '@mui/icons-material/Edit';
import 'rc-picker/lib/locale/en_US';
import 'stylis';
import '@mui/icons-material/Input';
import 'rc-textarea';
import 'rc-input';

const omitUndefined$1 = (obj) => {
  const newObj = {};
  Object.keys(obj || {}).forEach((key) => {
    if (obj[key] !== void 0) {
      newObj[key] = obj[key];
    }
  });
  if (Object.keys(newObj).length < 1) {
    return void 0;
  }
  return newObj;
};

const merge = (...rest) => {
  const obj = {};
  const il = rest.length;
  let key;
  let i = 0;
  for (; i < il; i += 1) {
    for (key in rest[i]) {
      if (rest[i].hasOwnProperty(key)) {
        if (
          // @ts-ignore
          typeof obj[key] === "object" && typeof rest[i][key] === "object" && // @ts-ignore
          obj[key] !== void 0 && // @ts-ignore
          obj[key] !== null && // @ts-ignore
          !Array.isArray(obj[key]) && !Array.isArray(rest[i][key])
        ) {
          obj[key] = {
            // @ts-ignore
            ...obj[key],
            ...rest[i][key]
          };
        } else {
          obj[key] = rest[i][key];
        }
      }
    }
  }
  return obj;
};

const locale$1 = {
  placeholder: "請選擇時間"
};

const locale = {
  lang: {
    placeholder: "請選擇日期",
    yearPlaceholder: "請選擇年份",
    quarterPlaceholder: "請選擇季度",
    monthPlaceholder: "請選擇月份",
    weekPlaceholder: "請選擇周",
    rangePlaceholder: ["開始日期", "結束日期"],
    rangeYearPlaceholder: ["開始年份", "結束年份"],
    rangeMonthPlaceholder: ["開始月份", "結束月份"],
    rangeQuarterPlaceholder: ["開始季度", "結束季度"],
    rangeWeekPlaceholder: ["開始周", "結束周"],
    ...CalendarLocale
  },
  timePickerLocale: {
    ...locale$1
  }
};
locale.lang.ok = "確 定";

const typeTemplate = "${label}不是一個有效的${type}";
const localeValues = {
  locale: "zh-tw",
  Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  global: {
    placeholder: "請選擇"
  },
  Table: {
    filterTitle: "篩選器",
    filterConfirm: "確定",
    filterReset: "重置",
    filterEmptyText: "無篩選項",
    sortTitle: "排序",
    expand: "展開行",
    collapse: "關閉行",
    triggerDesc: "點擊降序",
    triggerAsc: "點擊升序",
    cancelSort: "取消排序"
  },
  Modal: {
    okText: "確定",
    cancelText: "取消",
    justOkText: "知道了"
  },
  Empty: {
    description: "查不到資料"
  },
  Icon: {
    icon: "圖標"
  },
  Text: {
    edit: "編輯",
    copy: "複製",
    copied: "複製成功",
    expand: "展開"
  },
  PageHeader: {
    back: "返回"
  },
  Form: {
    optional: "（可選）",
    defaultValidateMessages: {
      default: "字段驗證錯誤${label}",
      required: "請輸入${label}",
      enum: "${label}必須是其中一個[${enum}]",
      whitespace: "${label}不能為空字符",
      date: {
        format: "${label}日期格式無效",
        parse: "${label}不能轉換為日期",
        invalid: "${label}是一個無效日期"
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
        len: "${label}須為${len}個字符",
        min: "${label}最少${min}個字符",
        max: "${label}最多${max}個字符",
        range: "${label}須在${min}-${max}字符之間"
      },
      number: {
        len: "${label}必須等於${len}",
        min: "${label}最小值為${min}",
        max: "${label}最大值為${max}",
        range: "${label}須在${min}-${max}之間"
      },
      array: {
        len: "須為${len}個${label}",
        min: "最少${min}個${label}",
        max: "最多${max}個${label}",
        range: "${label}數量須在${min}-${max}之間"
      },
      pattern: {
        mismatch: "${label}與模式不匹配${pattern}"
      }
    }
  },
  Image: {
    preview: "預覽"
  }
};

const enUS = {
  moneySymbol: "$",
  deleteThisLine: "Delete this line",
  copyThisLine: "Copy this line",
  form: {
    lightFilter: {
      more: "More",
      clear: "Clear",
      confirm: "Confirm",
      itemUnit: "Items"
    }
  },
  tableForm: {
    search: "Query",
    reset: "Reset",
    submit: "Submit",
    collapsed: "Expand",
    expand: "Collapse",
    inputPlaceholder: "Please enter",
    selectPlaceholder: "Please select"
  },
  alert: {
    clear: "Clear",
    selected: "Selected",
    item: "Item"
  },
  pagination: {
    total: {
      range: " ",
      total: "of",
      item: "items"
    }
  },
  tableToolBar: {
    leftPin: "Pin to left",
    rightPin: "Pin to right",
    noPin: "Unpinned",
    leftFixedTitle: "Fixed to the left",
    rightFixedTitle: "Fixed to the right",
    noFixedTitle: "Not Fixed",
    reset: "Reset",
    columnDisplay: "Column Display",
    columnSetting: "Table Settings",
    fullScreen: "Full Screen",
    exitFullScreen: "Exit Full Screen",
    reload: "Refresh",
    density: "Density",
    densityDefault: "Default",
    densityLarger: "Larger",
    densityMiddle: "Middle",
    densitySmall: "Compact"
  },
  stepsForm: {
    next: "Next",
    prev: "Previous",
    submit: "Finish"
  },
  loginForm: {
    submitText: "Login"
  },
  editableTable: {
    onlyOneLineEditor: "Only one line can be edited",
    action: {
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      add: "add a row of data"
    }
  },
  switch: {
    open: "open",
    close: "close"
  }
};

const zhTW = {
  moneySymbol: "NT$",
  deleteThisLine: "刪除此项",
  copyThisLine: "複製此项",
  form: {
    lightFilter: {
      more: "更多篩選",
      clear: "清除",
      confirm: "確認",
      itemUnit: "項"
    }
  },
  tableForm: {
    search: "查詢",
    reset: "重置",
    submit: "提交",
    collapsed: "展開",
    expand: "收起",
    inputPlaceholder: "請輸入",
    selectPlaceholder: "請選擇"
  },
  alert: {
    clear: "取消選擇",
    selected: "已選擇",
    item: "項"
  },
  pagination: {
    total: {
      range: "第",
      total: "條/總共",
      item: "條"
    }
  },
  tableToolBar: {
    leftPin: "固定到左邊",
    rightPin: "固定到右邊",
    noPin: "不固定",
    leftFixedTitle: "固定在左側",
    rightFixedTitle: "固定在右側",
    noFixedTitle: "不固定",
    reset: "重置",
    columnDisplay: "列顯示",
    columnSetting: "列設置",
    fullScreen: "全屏",
    exitFullScreen: "退出全屏",
    reload: "刷新",
    density: "密度",
    densityDefault: "正常",
    densityLarger: "預設",
    densityMiddle: "中等",
    densitySmall: "緊湊"
  },
  stepsForm: {
    next: "下一步",
    prev: "上一步",
    submit: "完成"
  },
  loginForm: {
    submitText: "登入"
  },
  editableTable: {
    onlyOneLineEditor: "只能同時編輯一行",
    action: {
      save: "保存",
      cancel: "取消",
      delete: "刪除",
      add: "新增一行資料"
    }
  },
  switch: {
    open: "打開",
    close: "關閉"
  }
};

function get(source, path, defaultValue) {
  const paths = path.replace(/\[(\d+)\]/g, ".$1").split(".");
  let result = source;
  let message = defaultValue;
  for (const p of paths) {
    message = Object(result)[p];
    result = Object(result)[p];
    if (message === void 0) {
      return defaultValue;
    }
  }
  return message;
}
const createIntl = (locale, localeMap) => ({
  getMessage: (id, defaultMessage) => get(localeMap, id, defaultMessage) || defaultMessage,
  locale
});
const enUSIntl = createIntl("en_US", enUS);
const zhTWIntl = createIntl("zh_TW", zhTW);
const intlMap$1 = {
  "en-US": enUSIntl,
  "zh-TW": zhTWIntl
};
const intlMapKeys = Object.keys(intlMap$1);
const findIntlKeyByLocaleKey = (localeKey) => {
  const localeName = (localeKey || "zh-TW").toLocaleLowerCase();
  return intlMapKeys.find((intlKey) => {
    const LowerCaseKey = intlKey.toLocaleLowerCase();
    return LowerCaseKey.includes(localeName);
  });
};

const defaultToken = {
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
  lime: "#A0D911",
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff7875",
  colorInfo: "#1677ff",
  colorTextBase: "#000",
  colorBgBase: "#fff",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  fontSize: 14,
  lineWidth: 1,
  lineType: "solid",
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInQuint: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  borderRadius: 4,
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  controlHeight: 32,
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  opacityImage: 1,
  wireframe: false,
  "blue-1": "#e6f4ff",
  "blue-2": "#bae0ff",
  "blue-3": "#91caff",
  "blue-4": "#69b1ff",
  "blue-5": "#4096ff",
  "blue-6": "#1677ff",
  "blue-7": "#0958d9",
  "blue-8": "#003eb3",
  "blue-9": "#002c8c",
  "blue-10": "#001d66",
  "purple-1": "#f9f0ff",
  "purple-2": "#efdbff",
  "purple-3": "#d3adf7",
  "purple-4": "#b37feb",
  "purple-5": "#9254de",
  "purple-6": "#722ed1",
  "purple-7": "#531dab",
  "purple-8": "#391085",
  "purple-9": "#22075e",
  "purple-10": "#120338",
  "cyan-1": "#e6fffb",
  "cyan-2": "#b5f5ec",
  "cyan-3": "#87e8de",
  "cyan-4": "#5cdbd3",
  "cyan-5": "#36cfc9",
  "cyan-6": "#13c2c2",
  "cyan-7": "#08979c",
  "cyan-8": "#006d75",
  "cyan-9": "#00474f",
  "cyan-10": "#002329",
  "green-1": "#f6ffed",
  "green-2": "#d9f7be",
  "green-3": "#b7eb8f",
  "green-4": "#95de64",
  "green-5": "#73d13d",
  "green-6": "#52c41a",
  "green-7": "#389e0d",
  "green-8": "#237804",
  "green-9": "#135200",
  "green-10": "#092b00",
  "magenta-1": "#fff0f6",
  "magenta-2": "#ffd6e7",
  "magenta-3": "#ffadd2",
  "magenta-4": "#ff85c0",
  "magenta-5": "#f759ab",
  "magenta-6": "#eb2f96",
  "magenta-7": "#c41d7f",
  "magenta-8": "#9e1068",
  "magenta-9": "#780650",
  "magenta-10": "#520339",
  "pink-1": "#fff0f6",
  "pink-2": "#ffd6e7",
  "pink-3": "#ffadd2",
  "pink-4": "#ff85c0",
  "pink-5": "#f759ab",
  "pink-6": "#eb2f96",
  "pink-7": "#c41d7f",
  "pink-8": "#9e1068",
  "pink-9": "#780650",
  "pink-10": "#520339",
  "red-1": "#fff1f0",
  "red-2": "#ffccc7",
  "red-3": "#ffa39e",
  "red-4": "#ff7875",
  "red-5": "#ff4d4f",
  "red-6": "#f5222d",
  "red-7": "#cf1322",
  "red-8": "#a8071a",
  "red-9": "#820014",
  "red-10": "#5c0011",
  "orange-1": "#fff7e6",
  "orange-2": "#ffe7ba",
  "orange-3": "#ffd591",
  "orange-4": "#ffc069",
  "orange-5": "#ffa940",
  "orange-6": "#fa8c16",
  "orange-7": "#d46b08",
  "orange-8": "#ad4e00",
  "orange-9": "#873800",
  "orange-10": "#612500",
  "yellow-1": "#feffe6",
  "yellow-2": "#ffffb8",
  "yellow-3": "#fffb8f",
  "yellow-4": "#fff566",
  "yellow-5": "#ffec3d",
  "yellow-6": "#fadb14",
  "yellow-7": "#d4b106",
  "yellow-8": "#ad8b00",
  "yellow-9": "#876800",
  "yellow-10": "#614700",
  "volcano-1": "#fff2e8",
  "volcano-2": "#ffd8bf",
  "volcano-3": "#ffbb96",
  "volcano-4": "#ff9c6e",
  "volcano-5": "#ff7a45",
  "volcano-6": "#fa541c",
  "volcano-7": "#d4380d",
  "volcano-8": "#ad2102",
  "volcano-9": "#871400",
  "volcano-10": "#610b00",
  "geekblue-1": "#f0f5ff",
  "geekblue-2": "#d6e4ff",
  "geekblue-3": "#adc6ff",
  "geekblue-4": "#85a5ff",
  "geekblue-5": "#597ef7",
  "geekblue-6": "#2f54eb",
  "geekblue-7": "#1d39c4",
  "geekblue-8": "#10239e",
  "geekblue-9": "#061178",
  "geekblue-10": "#030852",
  "gold-1": "#fffbe6",
  "gold-2": "#fff1b8",
  "gold-3": "#ffe58f",
  "gold-4": "#ffd666",
  "gold-5": "#ffc53d",
  "gold-6": "#faad14",
  "gold-7": "#d48806",
  "gold-8": "#ad6800",
  "gold-9": "#874d00",
  "gold-10": "#613400",
  "lime-1": "#fcffe6",
  "lime-2": "#f4ffb8",
  "lime-3": "#eaff8f",
  "lime-4": "#d3f261",
  "lime-5": "#bae637",
  "lime-6": "#a0d911",
  "lime-7": "#7cb305",
  "lime-8": "#5b8c00",
  "lime-9": "#3f6600",
  "lime-10": "#254000",
  colorText: "rgba(0, 0, 0, 0.88)",
  colorTextSecondary: "rgba(0, 0, 0, 0.65)",
  colorTextTertiary: "rgba(0, 0, 0, 0.45)",
  colorTextQuaternary: "rgba(0, 0, 0, 0.25)",
  colorFill: "rgba(0, 0, 0, 0.15)",
  colorFillSecondary: "rgba(0, 0, 0, 0.06)",
  colorFillTertiary: "rgba(0, 0, 0, 0.04)",
  colorFillQuaternary: "rgba(0, 0, 0, 0.02)",
  colorBgLayout: "hsl(220,23%,97%)",
  colorBgContainer: "#ffffff",
  colorBgElevated: "#ffffff",
  colorBgSpotlight: "rgba(0, 0, 0, 0.85)",
  colorBorder: "#d9d9d9",
  colorBorderSecondary: "#f0f0f0",
  colorPrimaryBg: "#e6f4ff",
  colorPrimaryBgHover: "#bae0ff",
  colorPrimaryBorder: "#91caff",
  colorPrimaryBorderHover: "#69b1ff",
  colorPrimaryHover: "#4096ff",
  colorPrimaryActive: "#0958d9",
  colorPrimaryTextHover: "#4096ff",
  colorPrimaryText: "#1677ff",
  colorPrimaryTextActive: "#0958d9",
  colorSuccessBg: "#f6ffed",
  colorSuccessBgHover: "#d9f7be",
  colorSuccessBorder: "#b7eb8f",
  colorSuccessBorderHover: "#95de64",
  colorSuccessHover: "#95de64",
  colorSuccessActive: "#389e0d",
  colorSuccessTextHover: "#73d13d",
  colorSuccessText: "#52c41a",
  colorSuccessTextActive: "#389e0d",
  colorErrorBg: "#fff2f0",
  colorErrorBgHover: "#fff1f0",
  colorErrorBorder: "#ffccc7",
  colorErrorBorderHover: "#ffa39e",
  colorErrorHover: "#ffa39e",
  colorErrorActive: "#d9363e",
  colorErrorTextHover: "#ff7875",
  colorErrorText: "#ff4d4f",
  colorErrorTextActive: "#d9363e",
  colorWarningBg: "#fffbe6",
  colorWarningBgHover: "#fff1b8",
  colorWarningBorder: "#ffe58f",
  colorWarningBorderHover: "#ffd666",
  colorWarningHover: "#ffd666",
  colorWarningActive: "#d48806",
  colorWarningTextHover: "#ffc53d",
  colorWarningText: "#faad14",
  colorWarningTextActive: "#d48806",
  colorInfoBg: "#e6f4ff",
  colorInfoBgHover: "#bae0ff",
  colorInfoBorder: "#91caff",
  colorInfoBorderHover: "#69b1ff",
  colorInfoHover: "#69b1ff",
  colorInfoActive: "#0958d9",
  colorInfoTextHover: "#4096ff",
  colorInfoText: "#1677ff",
  colorInfoTextActive: "#0958d9",
  colorBgMask: "rgba(0, 0, 0, 0.45)",
  colorWhite: "#fff",
  sizeXXL: 48,
  sizeXL: 32,
  sizeLG: 24,
  sizeMD: 20,
  sizeMS: 16,
  size: 16,
  sizeSM: 12,
  sizeXS: 8,
  sizeXXS: 4,
  controlHeightSM: 24,
  controlHeightXS: 16,
  controlHeightLG: 40,
  motionDurationFast: "0.1s",
  motionDurationMid: "0.2s",
  motionDurationSlow: "0.3s",
  fontSizes: [12, 14, 16, 20, 24, 30, 38, 46, 56, 68],
  lineHeights: [
    1.6666666666666667,
    1.5714285714285714,
    1.5,
    1.4,
    1.3333333333333333,
    1.2666666666666666,
    1.2105263157894737,
    1.173913043478261,
    1.1428571428571428,
    1.1176470588235294
  ],
  lineWidthBold: 2,
  borderRadiusXS: 1,
  borderRadiusSM: 4,
  borderRadiusLG: 8,
  borderRadiusOuter: 4,
  colorLink: "#1677ff",
  colorLinkHover: "#69b1ff",
  colorLinkActive: "#0958d9",
  colorFillContent: "rgba(0, 0, 0, 0.06)",
  colorFillContentHover: "rgba(0, 0, 0, 0.15)",
  colorFillAlter: "rgba(0, 0, 0, 0.02)",
  colorBgContainerDisabled: "rgba(0, 0, 0, 0.04)",
  colorBorderBg: "#ffffff",
  colorSplit: "rgba(5, 5, 5, 0.06)",
  colorTextPlaceholder: "rgba(0, 0, 0, 0.25)",
  colorTextDisabled: "rgba(0, 0, 0, 0.25)",
  colorTextHeading: "rgba(0, 0, 0, 0.88)",
  colorTextLabel: "rgba(0, 0, 0, 0.65)",
  colorTextDescription: "rgba(0, 0, 0, 0.45)",
  colorTextLightSolid: "#fff",
  colorHighlight: "#ff7875",
  colorBgTextHover: "rgba(0, 0, 0, 0.06)",
  colorBgTextActive: "rgba(0, 0, 0, 0.15)",
  colorIcon: "rgba(0, 0, 0, 0.45)",
  colorIconHover: "rgba(0, 0, 0, 0.88)",
  colorErrorOutline: "rgba(255, 38, 5, 0.06)",
  colorWarningOutline: "rgba(255, 215, 5, 0.1)",
  fontSizeSM: 12,
  fontSizeLG: 16,
  fontSizeXL: 20,
  fontSizeHeading1: 38,
  fontSizeHeading2: 30,
  fontSizeHeading3: 24,
  fontSizeHeading4: 20,
  fontSizeHeading5: 16,
  fontSizeIcon: 12,
  lineHeight: 1.5714285714285714,
  lineHeightLG: 1.5,
  lineHeightSM: 1.6666666666666667,
  lineHeightHeading1: 1.2105263157894737,
  lineHeightHeading2: 1.2666666666666666,
  lineHeightHeading3: 1.3333333333333333,
  lineHeightHeading4: 1.4,
  lineHeightHeading5: 1.5,
  controlOutlineWidth: 2,
  controlInteractiveSize: 16,
  controlItemBgHover: "rgba(0, 0, 0, 0.04)",
  controlItemBgActive: "#e6f4ff",
  controlItemBgActiveHover: "#bae0ff",
  controlItemBgActiveDisabled: "rgba(0, 0, 0, 0.15)",
  controlTmpOutline: "rgba(0, 0, 0, 0.02)",
  controlOutline: "rgba(5, 145, 255, 0.1)",
  fontWeightStrong: 600,
  opacityLoading: 0.65,
  linkDecoration: "none",
  linkHoverDecoration: "none",
  linkFocusDecoration: "none",
  controlPaddingHorizontal: 12,
  controlPaddingHorizontalSM: 8,
  paddingXXS: 4,
  paddingXS: 8,
  paddingSM: 12,
  padding: 16,
  paddingMD: 20,
  paddingLG: 24,
  paddingXL: 32,
  paddingContentHorizontalLG: 24,
  paddingContentVerticalLG: 16,
  paddingContentHorizontal: 16,
  paddingContentVertical: 12,
  paddingContentHorizontalSM: 16,
  paddingContentVerticalSM: 8,
  marginXXS: 4,
  marginXS: 8,
  marginSM: 12,
  margin: 16,
  marginMD: 20,
  marginLG: 24,
  marginXL: 32,
  marginXXL: 48,
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.03),0 1px 6px -1px rgba(0, 0, 0, 0.02),0 2px 4px 0 rgba(0, 0, 0, 0.02)",
  boxShadowSecondary: "0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05)",
  screenXS: 480,
  screenXSMin: 480,
  screenXSMax: 479,
  screenSM: 576,
  screenSMMin: 576,
  screenSMMax: 575,
  screenMD: 768,
  screenMDMin: 768,
  screenMDMax: 767,
  screenLG: 992,
  screenLGMin: 992,
  screenLGMax: 991,
  screenXL: 1200,
  screenXLMin: 1200,
  screenXLMax: 1199,
  screenXXL: 1600,
  screenXXLMin: 1600,
  screenXXLMax: 1599,
  boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
  boxShadowCard: "0 1px 2px -2px rgba(0, 0, 0, 0.16),0 3px 6px 0 rgba(0, 0, 0, 0.12),0 5px 12px 4px rgba(0, 0, 0, 0.09)",
  boxShadowDrawerRight: "-6px 0 16px 0 rgba(0, 0, 0, 0.08),-3px 0 6px -4px rgba(0, 0, 0, 0.12),-9px 0 28px 8px rgba(0, 0, 0, 0.05)",
  boxShadowDrawerLeft: "6px 0 16px 0 rgba(0, 0, 0, 0.08),3px 0 6px -4px rgba(0, 0, 0, 0.12),9px 0 28px 8px rgba(0, 0, 0, 0.05)",
  boxShadowDrawerUp: "0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05)",
  boxShadowDrawerDown: "0 -6px 16px 0 rgba(0, 0, 0, 0.08),0 -3px 6px -4px rgba(0, 0, 0, 0.12),0 -9px 28px 8px rgba(0, 0, 0, 0.05)",
  boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
  boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
  boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
  boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)",
  _tokenKey: "19w80ff",
  _hashId: "css-dev-only-do-not-override-i2zu9q"
};
const hashCode = (str, seed = 1) => {
  let h1 = 3735928559 ^ seed, h2 = 1103547991 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507) ^ Math.imul(h2 ^ h2 >>> 13, 3266489909);
  h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507) ^ Math.imul(h1 ^ h1 >>> 13, 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};
const emptyTheme = createTheme((token2) => token2);
const token = {
  theme: emptyTheme,
  token: {
    ...defaultToken,
    ...theme?.defaultAlgorithm?.(theme?.defaultSeed)
  },
  hashId: `pro-${hashCode(JSON.stringify(defaultToken))}`
};
const useToken$1 = () => token;

const batToken = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  defaultToken,
  emptyTheme,
  hashCode,
  token,
  useToken: useToken$1
}, Symbol.toStringTag, { value: 'Module' }));

const setAlpha = (baseColor, alpha) => new TinyColor(baseColor).setAlpha(alpha).toRgbString();
const lighten = (baseColor, brightness) => {
  const instance = new TinyColor(baseColor);
  return instance.lighten(brightness).toHexString();
};
const genTheme = () => {
  if (typeof theme === "undefined" || !theme)
    return batToken;
  return theme;
};
const proTheme = genTheme();
const useToken = proTheme.useToken;
function useStyle$A(componentName, styleFn) {
  let { token = {} } = useContext(ProProvider);
  const { hashId = "", theme: provideTheme } = useContext(ProProvider);
  const { token: ipassToken } = useToken();
  const { getPrefixCls } = useContext(ConfigContext);
  if (!token.layout) {
    token = { ...ipassToken };
  }
  token.proComponentsCls = token.proComponentsCls ?? `.${getPrefixCls("pro")}`;
  token.ipassCls = `.${getPrefixCls()}`;
  return {
    wrapSSR: useStyleRegister(
      {
        theme: provideTheme,
        token,
        hashId,
        path: [componentName]
      },
      () => styleFn(token)
    ),
    hashId
  };
}

const getLayoutDesignToken = (designTokens, ipassToken) => {
  const finalDesignTokens = { ...designTokens };
  return {
    bgLayout: `linear-gradient(${ipassToken.colorBgContainer}, ${ipassToken.colorBgLayout} 28%)`,
    colorTextAppListIcon: ipassToken.colorTextSecondary,
    appListIconHoverBgColor: finalDesignTokens?.sider?.colorBgMenuItemSelected,
    colorBgAppListIconHover: setAlpha(ipassToken.colorTextBase, 0.04),
    colorTextAppListIconHover: ipassToken.colorTextBase,
    ...finalDesignTokens,
    header: {
      colorBgHeader: setAlpha(ipassToken.colorBgElevated, 0.6),
      colorBgScrollHeader: setAlpha(ipassToken.colorBgElevated, 0.8),
      colorHeaderTitle: ipassToken.colorText,
      colorBgMenuItemHover: setAlpha(ipassToken.colorTextBase, 0.03),
      colorBgMenuItemSelected: "transparent",
      colorBgMenuElevated: finalDesignTokens?.header?.colorBgHeader !== "rgba(255, 255, 255, 0.6)" ? finalDesignTokens.header?.colorBgHeader : ipassToken.colorBgElevated,
      colorTextMenuSelected: setAlpha(ipassToken.colorTextBase, 0.95),
      colorBgRightActionsItemHover: setAlpha(ipassToken.colorTextBase, 0.03),
      colorTextRightActionsItem: ipassToken.colorTextTertiary,
      heightLayoutHeader: 56,
      colorTextMenu: ipassToken.colorTextSecondary,
      colorTextMenuSecondary: ipassToken.colorTextTertiary,
      colorTextMenuTitle: ipassToken.colorText,
      colorTextMenuActive: ipassToken.colorText,
      ...finalDesignTokens.header
    },
    sider: {
      paddingInlineLayoutMenu: 8,
      paddingBlockLayoutMenu: 0,
      colorBgCollapsedButton: ipassToken.colorBgElevated,
      colorTextCollapsedButtonHover: ipassToken.colorTextSecondary,
      colorTextCollapsedButton: setAlpha(ipassToken.colorTextBase, 0.25),
      colorMenuBackground: "transparent",
      colorMenuItemDivider: setAlpha(ipassToken.colorTextBase, 0.06),
      colorBgMenuItemHover: setAlpha(ipassToken.colorTextBase, 0.03),
      colorBgMenuItemSelected: setAlpha(ipassToken.colorTextBase, 0.04),
      colorTextMenuItemHover: ipassToken.colorText,
      colorTextMenuSelected: setAlpha(ipassToken.colorTextBase, 0.95),
      colorTextMenuActive: ipassToken.colorText,
      colorTextMenu: ipassToken.colorTextSecondary,
      colorTextMenuSecondary: ipassToken.colorTextTertiary,
      colorTextMenuTitle: ipassToken.colorText,
      colorTextSubMenuSelected: setAlpha(ipassToken.colorTextBase, 0.95),
      ...finalDesignTokens.sider
    },
    pageContainer: {
      colorBgPageContainer: "transparent",
      paddingInlinePageContainerContent: finalDesignTokens.pageContainer?.marginInlinePageContainerContent || 40,
      paddingBlockPageContainerContent: finalDesignTokens.pageContainer?.marginBlockPageContainerContent || 32,
      colorBgPageContainerFixed: ipassToken.colorBgElevated,
      ...finalDesignTokens.pageContainer
    }
  };
};

const isNeedOpenHash = () => {
  if (typeof process !== "undefined" && ("production"?.toUpperCase() === "TEST" || "production"?.toUpperCase() === "DEV")) {
    return false;
  }
  return true;
};
const ProConfigContext = React__default.createContext({
  intl: {
    ...zhTWIntl,
    locale: "default"
  },
  valueTypeMap: {},
  theme: emptyTheme,
  hashed: true,
  dark: false,
  token: defaultToken
});
const { Consumer: ConfigConsumer } = ProConfigContext;
const ConfigProviderContainer = (props) => {
  const {
    children,
    dark,
    valueTypeMap,
    autoClearCache = false,
    token: propsToken,
    prefixCls
  } = props;
  const { locale, getPrefixCls, ...restConfig } = useContext(
    ConfigProvider.ConfigContext
  );
  const tokenContext = proTheme.useToken?.();
  const proProvide = useContext(ProConfigContext);
  const proComponentsCls = prefixCls ? `.${prefixCls}` : `.${getPrefixCls()}-pro`;
  const ipassCls = "." + getPrefixCls();
  const salt = `${proComponentsCls}`;
  const proLayoutTokenMerge = useMemo(() => {
    return getLayoutDesignToken(
      propsToken || {},
      tokenContext.token || defaultToken
    );
  }, [propsToken, tokenContext.token]);
  const proProvideValue = useMemo(() => {
    const localeName = locale?.locale;
    const key = findIntlKeyByLocaleKey(localeName);
    const intl = localeName && proProvide.intl?.locale === "default" ? intlMap$1[key] : proProvide.intl || intlMap$1[key];
    return {
      ...proProvide,
      dark: dark ?? proProvide.dark,
      token: merge(proProvide.token, tokenContext.token, {
        proComponentsCls,
        ipassCls,
        themeId: tokenContext.theme.id,
        layout: proLayoutTokenMerge
      }),
      intl: intl || zhTWIntl
    };
  }, [
    locale?.locale,
    proProvide,
    dark,
    tokenContext.token,
    tokenContext.theme.id,
    proComponentsCls,
    ipassCls,
    proLayoutTokenMerge
  ]);
  const finalToken = {
    ...proProvideValue.token || {},
    proComponentsCls
  };
  const [token, nativeHashId] = useCacheToken(
    tokenContext.theme,
    [tokenContext.token, finalToken ?? {}],
    {
      salt,
      override: finalToken
    }
  );
  const hashed = useMemo(() => {
    if (props.hashed === false) {
      return false;
    }
    if (proProvide.hashed === false)
      return false;
    return true;
  }, [proProvide.hashed, props.hashed]);
  const hashId = useMemo(() => {
    if (props.hashed === false) {
      return "";
    }
    if (proProvide.hashed === false)
      return "";
    if (isNeedOpenHash() === false) {
      return "";
    } else {
      return nativeHashId;
    }
  }, [nativeHashId, proProvide.hashed, props.hashed]);
  useEffect(() => {
    dayjs.locale(locale?.locale || "zh-tw");
  }, [locale?.locale]);
  const configProviderDom = useMemo(() => {
    const themeConfig = {
      ...restConfig.theme,
      hashId,
      hashed: hashed && isNeedOpenHash()
    };
    return /* @__PURE__ */ jsx(ConfigProvider, { ...restConfig, theme: { ...themeConfig }, children: /* @__PURE__ */ jsx(
      ProConfigContext.Provider,
      {
        value: {
          ...proProvideValue,
          valueTypeMap: valueTypeMap || proProvideValue?.valueTypeMap,
          token,
          theme: tokenContext.theme,
          hashed,
          hashId
        },
        children: /* @__PURE__ */ jsx(Fragment, { children })
      }
    ) });
  }, [
    children,
    getPrefixCls,
    hashId,
    locale,
    proProvideValue,
    token
  ]);
  return configProviderDom;
};
const ProConfigProvider = (props) => {
  const { needDeps, dark, token } = props;
  const proProvide = useContext(ProConfigContext);
  const { locale, theme, ...rest } = useContext(
    ConfigProvider.ConfigContext
  );
  const isNullProvide = needDeps && proProvide.hashId !== void 0 && Object.keys(props).sort().join("-") === "children-needDeps";
  if (isNullProvide)
    return /* @__PURE__ */ jsx(Fragment, { children: props.children });
  const mergeAlgorithm = () => {
    const isDark = dark ?? proProvide.dark;
    if (isDark && !Array.isArray(theme?.algorithm)) {
      return [proTheme.darkAlgorithm, theme?.algorithm].filter(Boolean);
    }
    if (isDark && Array.isArray(theme?.algorithm)) {
      return [proTheme.darkAlgorithm, ...theme?.algorithm || []].filter(
        Boolean
      );
    }
    return theme?.algorithm;
  };
  const configProvider = {
    ...rest,
    locale: locale || localeValues,
    theme: omitUndefined$1({
      ...theme,
      algorithm: mergeAlgorithm()
    })
  };
  return /* @__PURE__ */ jsx(ConfigProvider, { ...configProvider, children: /* @__PURE__ */ jsx(ConfigProviderContainer, { ...props, token }) });
};
ProConfigContext.displayName = "ProProvider";
const ProProvider = ProConfigContext;

const genActionsStyle = (token) => {
  const { componentCls, ipassCls } = token;
  return {
    [`${componentCls}-actions`]: {
      marginBlock: 0,
      marginInline: 0,
      paddingBlock: 0,
      paddingInline: 0,
      listStyle: "none",
      display: "flex",
      gap: token.marginXS,
      background: token.colorBgContainer,
      borderBlockStart: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`,
      minHeight: 42,
      [`& > *`]: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        display: "flex",
        cursor: "pointer",
        color: token.colorTextSecondary,
        transition: "color 0.3s",
        "&:hover": {
          color: token.colorPrimaryHover
        }
      },
      [`& > li > div`]: {
        flex: 1,
        width: "100%",
        marginBlock: token.marginSM,
        marginInline: 0,
        color: token.colorTextSecondary,
        textAlign: "center",
        a: {
          color: token.colorTextSecondary,
          transition: "color 0.3s",
          "&:hover": {
            color: token.colorPrimaryHover
          }
        },
        div: {
          position: "relative",
          display: "block",
          minWidth: 32,
          fontSize: token.fontSize,
          lineHeight: token.lineHeight,
          cursor: "pointer",
          "&:hover": {
            color: token.colorPrimaryHover,
            transition: "color 0.3s"
          },
          [`a:not(${ipassCls}-btn),
            > .muiicon`]: {
            display: "inline-block",
            width: "100%",
            color: token.colorTextSecondary,
            lineHeight: "22px",
            transition: "color 0.3s",
            "&:hover": {
              color: token.colorPrimaryHover
            }
          },
          ".muiicon": {
            fontSize: token.cardActionIconSize,
            lineHeight: "22px"
          }
        },
        "&:not(:last-child)": {
          borderInlineEnd: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`
        }
      }
    }
  };
};
function useStyle$z(prefixCls) {
  return useStyle$A("ProCardActions", (token) => {
    const proCardActionsToken = {
      ...token,
      componentCls: `.${prefixCls}`,
      cardActionIconSize: 16
    };
    return [genActionsStyle(proCardActionsToken)];
  });
}

const ProCardActions = (props) => {
  const { actions, prefixCls } = props;
  const { wrapSSR, hashId } = useStyle$z(prefixCls);
  if (Array.isArray(actions) && actions?.length) {
    return wrapSSR(
      /* @__PURE__ */ jsx("ul", { className: classNames(`${prefixCls}-actions`, hashId), children: actions.map((action, index) => (
        // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ jsx(
          "li",
          {
            style: { width: `${100 / actions.length}%`, padding: 0, margin: 0 },
            className: classNames(`${prefixCls}-actions-item`, hashId),
            children: action
          },
          `action-${index}`
        )
      )) })
    );
  }
  return wrapSSR(
    /* @__PURE__ */ jsx("ul", { className: classNames(`${prefixCls}-actions`, hashId), children: actions })
  );
};

class ErrorBoundary extends React__default.Component {
  constructor() {
    super(...arguments);
    this.state = { hasError: false, errorInfo: "" };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, errorInfo: error.message };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ jsx(
        Result,
        {
          status: "error",
          title: "Something went wrong.",
          extra: this.state.errorInfo
        }
      );
    }
    return this.props.children;
  }
}

const genProStyle$b = (token) => {
  return {
    [token.componentCls]: {
      display: "inline-flex",
      gap: token.marginXXS,
      alignItems: "center",
      height: "30px",
      paddingBlock: 0,
      paddingInline: 8,
      fontSize: token.fontSize,
      lineHeight: "30px",
      borderRadius: "2px",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: token.colorBgTextHover
      },
      "&-active": {
        paddingBlock: 0,
        paddingInline: 8,
        backgroundColor: token.colorBgTextHover,
        [`&${token.componentCls}-allow-clear:hover:not(${token.componentCls}-disabled)`]: {
          [`${token.componentCls}-arrow`]: {
            display: "none"
          },
          [`${token.componentCls}-close`]: {
            display: "inline-flex"
          }
        }
      },
      [`${token.ipassCls}-select`]: {
        [`${token.ipassCls}-select-clear`]: {
          borderRadius: "50%"
        }
      },
      [`${token.ipassCls}-picker`]: {
        [`${token.ipassCls}-picker-clear`]: {
          borderRadius: "50%"
        }
      },
      "&-icon": {
        color: token.colorIcon,
        transition: "color 0.3s",
        fontSize: 12,
        verticalAlign: "middle",
        [`&${token.componentCls}-close`]: {
          display: "none",
          fontSize: 12,
          alignItems: "center",
          justifyContent: "center",
          color: token.colorTextPlaceholder,
          borderRadius: "50%"
        },
        "&:hover": {
          color: token.colorIconHover
        }
      },
      "&-disabled": {
        color: token.colorTextPlaceholder,
        cursor: "not-allowed",
        [`${token.componentCls}-icon`]: {
          color: token.colorTextPlaceholder
        }
      },
      "&-small": {
        height: "24px",
        paddingBlock: 0,
        paddingInline: 4,
        fontSize: token.fontSizeSM,
        lineHeight: "24px",
        [`&${token.componentCls}-active`]: {
          paddingBlock: 0,
          paddingInline: 8
        },
        [`${token.componentCls}-icon`]: {
          paddingBlock: 0,
          paddingInline: 0
        },
        [`${token.componentCls}-close`]: {
          marginBlockStart: "-2px",
          paddingBlock: 4,
          paddingInline: 4,
          fontSize: "6px"
        }
      },
      "&-bordered": {
        height: "32px",
        paddingBlock: 0,
        paddingInline: 8,
        border: `${token.lineWidth}px solid ${token.colorBorder}`,
        borderRadius: "@border-radius-base"
      },
      "&-bordered&-small": {
        height: "24px",
        paddingBlock: 0,
        paddingInline: 8
      },
      "&-bordered&-active": {
        backgroundColor: token.colorBgContainer
      }
    }
  };
};
function useStyle$y(prefixCls) {
  return useStyle$A("FieldLabel", (token) => {
    const proToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genProStyle$b(proToken)];
  });
}

const FieldLabelFunction = (props, ref) => {
  const {
    label,
    onClear,
    value,
    disabled,
    onLabelClick,
    ellipsis,
    placeholder,
    className,
    formatter,
    bordered,
    style,
    downIcon,
    allowClear = true
  } = props;
  const { componentSize } = ConfigProvider?.useConfig?.() || {
    componentSize: "middle"
  };
  const size = componentSize;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls("pro-core-field-label");
  const { wrapSSR, hashId } = useStyle$y(prefixCls);
  const intl = useIntl();
  const clearRef = useRef(null);
  const labelRef = useRef(null);
  useImperativeHandle(ref, () => ({
    labelRef,
    clearRef
  }));
  const wrapElements = (array) => {
    if (array.every((item) => typeof item === "string"))
      return array.join(",");
    return array.map((item, index) => {
      const comma = index === array.length - 1 ? "" : ",";
      if (typeof item === "string") {
        return /* @__PURE__ */ jsxs("span", { children: [
          item,
          comma
        ] }, index);
      }
      return /* @__PURE__ */ jsxs("span", { style: { display: "flex" }, children: [
        item,
        comma
      ] }, index);
    });
  };
  const formatterText = (aValue) => {
    if (formatter) {
      return formatter(aValue);
    }
    return Array.isArray(aValue) ? wrapElements(aValue) : aValue;
  };
  const getTextByValue = (aLabel, aValue) => {
    if (aValue !== void 0 && aValue !== null && aValue !== "" && (!Array.isArray(aValue) || aValue.length)) {
      const prefix = aLabel ? /* @__PURE__ */ jsxs(
        "span",
        {
          onClick: () => {
            onLabelClick?.();
          },
          className: `${prefixCls}-text`,
          children: [
            aLabel,
            ": "
          ]
        }
      ) : "";
      const str = formatterText(aValue);
      if (!ellipsis) {
        return /* @__PURE__ */ jsxs(
          "span",
          {
            style: {
              display: "inline-flex",
              alignItems: "center"
            },
            children: [
              prefix,
              formatterText(aValue)
            ]
          }
        );
      }
      const VALUE_MAX_LENGTH = 41;
      const getText = () => {
        const isArrayValue = Array.isArray(aValue) && aValue.length > 1;
        const unitText = intl.formatMessage({ id: "form.lightFilter.itemUnit", defaultMessage: "項" });
        if (typeof str === "string" && str.length > VALUE_MAX_LENGTH && isArrayValue) {
          return `...${aValue.length}${unitText}`;
        }
        return "";
      };
      const tail = getText();
      return /* @__PURE__ */ jsxs(
        "span",
        {
          title: typeof str === "string" ? str : void 0,
          style: {
            display: "inline-flex",
            alignItems: "center"
          },
          children: [
            prefix,
            /* @__PURE__ */ jsx("span", { style: { paddingInlineStart: 4, display: "flex" }, children: typeof str === "string" ? str?.toString()?.substr?.(0, VALUE_MAX_LENGTH) : str }),
            tail
          ]
        }
      );
    }
    return aLabel || placeholder;
  };
  return wrapSSR(
    /* @__PURE__ */ jsxs(
      "span",
      {
        className: classNames(
          prefixCls,
          hashId,
          `${prefixCls}-${props.size ?? size ?? "middle"}`,
          {
            [`${prefixCls}-active`]: !!value || value === 0,
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-bordered`]: bordered,
            [`${prefixCls}-allow-clear`]: allowClear
          },
          className
        ),
        style,
        ref: labelRef,
        onClick: () => {
          props?.onClick?.();
        },
        children: [
          getTextByValue(label, value),
          (value || value === 0) && allowClear && /* @__PURE__ */ jsx(
            CloseIcon,
            {
              role: "button",
              className: classNames(
                `${prefixCls}-icon`,
                hashId,
                `${prefixCls}-close`
              ),
              onClick: (e) => {
                if (!disabled)
                  onClear?.();
                e.stopPropagation();
              },
              ref: clearRef
            }
          ),
          downIcon !== false ? downIcon ?? /* @__PURE__ */ jsx(
            ExpandMoreIcon,
            {
              className: classNames(
                `${prefixCls}-icon`,
                hashId,
                `${prefixCls}-arrow`
              )
            }
          ) : null
        ]
      }
    )
  );
};
const FieldLabel = React__default.forwardRef(FieldLabelFunction);

const omitUndefined = (obj) => {
  const newObj = {};
  Object.keys(obj || {}).forEach((key) => {
    if (obj[key] !== void 0) {
      newObj[key] = obj[key];
    }
  });
  if (Object.keys(newObj).length < 1) {
    return void 0;
  }
  return newObj;
};

const semver = /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
const isWildcard = (s) => s === "*" || s === "x" || s === "X";
const tryParse = (v) => {
  const n = parseInt(v, 10);
  return isNaN(n) ? v : n;
};
const forceType = (a, b) => typeof a !== typeof b ? [String(a), String(b)] : [a, b];
const compareStrings = (a, b) => {
  if (isWildcard(a) || isWildcard(b))
    return 0;
  const [ap, bp] = forceType(tryParse(a), tryParse(b));
  if (ap > bp)
    return 1;
  if (ap < bp)
    return -1;
  return 0;
};
const compareSegments = (a, b) => {
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const r = compareStrings(a[i] || "0", b[i] || "0");
    if (r !== 0)
      return r;
  }
  return 0;
};
const validateAndParse = (version) => {
  const match = version.match(semver);
  match?.shift?.();
  return match;
};
const compareVersions = (v1, v2) => {
  const n1 = validateAndParse(v1);
  const n2 = validateAndParse(v2);
  const p1 = n1.pop();
  const p2 = n2.pop();
  const r = compareSegments(n1, n2);
  if (r !== 0)
    return r;
  if (p1 || p2) {
    return p1 ? -1 : 1;
  }
  return 0;
};

const version$3 = "5.1.7";
const getVersion$1 = () => {
  if (typeof process === "undefined")
    return version$3;
  return process?.env?.VERSION || version$3;
};
const openVisibleCompatible = (open, onOpenChange) => {
  const props = compareVersions(getVersion$1(), "4.23.0") > -1 ? {
    open,
    onOpenChange
  } : {
    visible: open,
    onVisibleChange: onOpenChange
  };
  return omitUndefined(props);
};

const genProStyle$a = (token) => {
  const progressBgCls = `${token.ipassCls}-progress-bg`;
  return {
    [token.componentCls]: {
      "&-multiple": {
        paddingBlockStart: 6,
        paddingBlockEnd: 12,
        paddingInline: 8
      },
      "&-progress": {
        "&-success": {
          [progressBgCls]: {
            backgroundColor: token.colorSuccess
          }
        },
        "&-error": {
          [progressBgCls]: {
            backgroundColor: token.colorError
          }
        },
        "&-warning": {
          [progressBgCls]: {
            backgroundColor: token.colorWarning
          }
        }
      },
      "&-rule": {
        display: "flex",
        alignItems: "center",
        "&-icon": {
          "&-default": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "14px",
            height: "22px",
            "&-circle": {
              width: "6px",
              height: "6px",
              backgroundColor: token.colorTextSecondary,
              borderRadius: "4px"
            }
          },
          "&-loading": {
            color: token.colorPrimary
          },
          "&-error": { color: token.colorError },
          "&-success": {
            color: token.colorSuccess
          }
        },
        "&-text": {
          color: token.colorText
        }
      }
    }
  };
};
function useStyle$x(prefixCls) {
  return useStyle$A("InlineErrorFormItem", (token) => {
    const proToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genProStyle$a(proToken)];
  });
}

const FIX_INLINE_STYLE = {
  marginBlockStart: -5,
  marginBlockEnd: -5,
  marginInlineStart: 0,
  marginInlineEnd: 0
};
const InlineErrorFormItemPopover = ({ inputProps, input, extra, errorList, popoverProps }) => {
  const [open, setOpen] = useState(false);
  const [errorStringList, setErrorList] = useState([]);
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls();
  const token = useToken();
  const { wrapSSR, hashId } = useStyle$x(`${prefixCls}-form-item-with-help`);
  useEffect(() => {
    if (inputProps.validateStatus !== "validating") {
      setErrorList(inputProps.errors);
    }
  }, [inputProps.errors, inputProps.validateStatus]);
  const popoverOpenProps = openVisibleCompatible(
    errorStringList.length < 1 ? false : open,
    (changeOpen) => {
      if (changeOpen === open)
        return;
      setOpen(changeOpen);
    }
  );
  const loading = inputProps.validateStatus === "validating";
  return /* @__PURE__ */ jsx(
    Popover,
    {
      trigger: popoverProps?.trigger || ["click"],
      placement: popoverProps?.placement || "topLeft",
      ...popoverOpenProps,
      getPopupContainer: popoverProps?.getPopupContainer,
      getTooltipContainer: popoverProps?.getTooltipContainer,
      content: wrapSSR(
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `${prefixCls}-form-item ${hashId} ${token.hashId}`.trim(),
            style: {
              margin: 0,
              padding: 0
            },
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: `${prefixCls}-form-item-with-help ${hashId} ${token.hashId}`.trim(),
                children: [
                  loading ? /* @__PURE__ */ jsx(CircularProgress, {}) : null,
                  errorList
                ]
              }
            )
          }
        )
      ),
      ...popoverProps,
      children: /* @__PURE__ */ jsxs(Fragment, { children: [
        input,
        extra
      ] })
    },
    "popover"
  );
};
const InternalFormItemFunction = ({
  rules,
  name,
  children,
  popoverProps,
  ...rest
}) => {
  return /* @__PURE__ */ jsx(
    Form.Item,
    {
      name,
      rules,
      hasFeedback: false,
      shouldUpdate: (prev, next) => {
        if (prev === next)
          return false;
        const shouldName = [name].flat(1);
        if (shouldName.length > 1) {
          shouldName.pop();
        }
        try {
          return JSON.stringify(get$1(prev, shouldName)) !== JSON.stringify(get$1(next, shouldName));
        } catch (error) {
          return true;
        }
      },
      _internalItemRender: {
        mark: "pro_table_render",
        render: (inputProps, doms) => /* @__PURE__ */ jsx(
          InlineErrorFormItemPopover,
          {
            inputProps,
            popoverProps,
            ...doms
          }
        )
      },
      ...rest,
      style: {
        ...FIX_INLINE_STYLE,
        ...rest?.style
      },
      children
    }
  );
};
const InlineErrorFormItem = (props) => {
  const { errorType, rules, name, popoverProps, children, ...rest } = props;
  if (name && rules?.length && errorType === "popover") {
    return /* @__PURE__ */ jsx(
      InternalFormItemFunction,
      {
        name,
        rules,
        popoverProps,
        ...rest,
        children
      }
    );
  }
  return /* @__PURE__ */ jsx(
    Form.Item,
    {
      rules,
      shouldUpdate: name ? (prev, next) => {
        if (prev === next)
          return false;
        const shouldName = [name].flat(1);
        if (shouldName.length > 1) {
          shouldName.pop();
        }
        try {
          return JSON.stringify(get$1(prev, shouldName)) !== JSON.stringify(get$1(next, shouldName));
        } catch (error) {
          return true;
        }
      } : void 0,
      ...rest,
      style: { ...FIX_INLINE_STYLE, ...rest.style },
      name,
      children
    }
  );
};

const genProStyle$9 = (token) => {
  return {
    [token.componentCls]: {
      display: "inline-flex",
      alignItems: "center",
      maxWidth: "100%",
      "&-icon": {
        display: "block",
        marginInlineStart: "4px",
        cursor: "pointer",
        "&:hover": {
          color: token.colorPrimary
        }
      },
      "&-title": { display: "inline-flex", flex: "1" },
      "&-subtitle ": {
        marginInlineStart: 8,
        color: token.colorTextSecondary,
        fontWeight: "normal",
        fontSize: token.fontSize,
        whiteSpace: "nowrap"
      },
      "&-title-ellipsis": {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        wordBreak: "keep-all"
      }
    }
  };
};
function useStyle$w(prefixCls) {
  return useStyle$A("LabelIconTip", (token) => {
    const proToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genProStyle$9(proToken)];
  });
}

const LabelIconTip = React__default.memo((props) => {
  const { label, tooltip, ellipsis, subTitle } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const className = getPrefixCls("pro-core-label-tip");
  const { wrapSSR, hashId } = useStyle$w(className);
  if (!tooltip && !subTitle) {
    return /* @__PURE__ */ jsx(Fragment, { children: label });
  }
  const tooltipProps = typeof tooltip === "string" || React__default.isValidElement(tooltip) ? { title: tooltip } : tooltip;
  const icon = tooltipProps?.icon || /* @__PURE__ */ jsx(InfoIcon, {});
  return wrapSSR(
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: classNames(className, hashId),
        onMouseDown: (e) => e.stopPropagation(),
        onMouseLeave: (e) => e.stopPropagation(),
        onMouseMove: (e) => e.stopPropagation(),
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: classNames(`${className}-title`, hashId, {
                [`${className}-title-ellipsis`]: ellipsis
              }),
              children: label
            }
          ),
          subTitle && /* @__PURE__ */ jsx("div", { className: `${className}-subtitle ${hashId}`.trim(), children: subTitle }),
          tooltip && /* @__PURE__ */ jsx(Tooltip, { ...tooltipProps, children: /* @__PURE__ */ jsx("span", { className: `${className}-icon ${hashId}`.trim(), children: icon }) })
        ]
      }
    )
  );
});

const ProFormContext = React__default.createContext({});

const isNil = (value) => value === null || value === void 0;

dayjs.extend(quarterOfYear);
const dateFormatterMap = {
  time: "HH:mm:ss",
  timeRange: "HH:mm:ss",
  date: "YYYY-MM-DD",
  dateWeek: "YYYY-wo",
  dateMonth: "YYYY-MM",
  dateQuarter: "YYYY-[Q]Q",
  dateYear: "YYYY",
  dateRange: "YYYY-MM-DD",
  dateTime: "YYYY-MM-DD HH:mm:ss",
  dateTimeRange: "YYYY-MM-DD HH:mm:ss"
};
function isObject(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function isPlainObject(o) {
  if (isObject(o) === false)
    return false;
  const ctor = o.constructor;
  if (ctor === void 0)
    return true;
  const prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (prot.hasOwnProperty("isPrototypeOf") === false) {
    return false;
  }
  return true;
}
const isMoment$1 = (value) => !!value?._isAMomentObject;
const convertMoment = (value, dateFormatter, valueType) => {
  if (!dateFormatter) {
    return value;
  }
  if (dayjs.isDayjs(value) || isMoment$1(value)) {
    if (dateFormatter === "number") {
      return value.valueOf();
    }
    if (dateFormatter === "string") {
      return value.format(dateFormatterMap[valueType] || "YYYY-MM-DD HH:mm:ss");
    }
    if (typeof dateFormatter === "string" && dateFormatter !== "string") {
      return value.format(dateFormatter);
    }
    if (typeof dateFormatter === "function") {
      return dateFormatter(value, valueType);
    }
  }
  return value;
};
const conversionMomentValue = (value, dateFormatter, valueTypeMap, omitNil, parentKey) => {
  const tmpValue = {};
  if (typeof window === "undefined")
    return value;
  if (typeof value !== "object" || isNil(value) || value instanceof Blob || Array.isArray(value)) {
    return value;
  }
  Object.keys(value).forEach((valueKey) => {
    const namePath = parentKey ? [parentKey, valueKey].flat(1) : [valueKey];
    const valueFormatMap = get$1(valueTypeMap, namePath) || "text";
    let valueType = "text";
    let dateFormat;
    if (typeof valueFormatMap === "string") {
      valueType = valueFormatMap;
    } else if (valueFormatMap) {
      valueType = valueFormatMap.valueType;
      dateFormat = valueFormatMap.dateFormat;
    }
    const itemValue = value[valueKey];
    if (isNil(itemValue) && omitNil) {
      return;
    }
    if (isPlainObject(itemValue) && // 不是數組
    !Array.isArray(itemValue) && // 不是 dayjs
    !dayjs.isDayjs(itemValue) && // 不是 moment
    !isMoment$1(itemValue)) {
      tmpValue[valueKey] = conversionMomentValue(
        itemValue,
        dateFormatter,
        valueTypeMap,
        omitNil,
        [valueKey]
      );
      return;
    }
    if (Array.isArray(itemValue)) {
      tmpValue[valueKey] = itemValue.map((arrayValue, index) => {
        if (dayjs.isDayjs(arrayValue) || isMoment$1(arrayValue)) {
          return convertMoment(
            arrayValue,
            dateFormat || dateFormatter,
            valueType
          );
        }
        return conversionMomentValue(
          arrayValue,
          dateFormatter,
          valueTypeMap,
          omitNil,
          [valueKey, `${index}`].flat(1)
        );
      });
      return;
    }
    tmpValue[valueKey] = convertMoment(
      itemValue,
      dateFormat || dateFormatter,
      valueType
    );
  });
  return tmpValue;
};

const formatString = (endText, format) => {
  if (typeof format === "function") {
    return format(dayjs(endText));
  }
  return dayjs(endText).format(format);
};
const dateArrayFormatter = (value, format) => {
  const [startText, endText] = Array.isArray(value) ? value : [];
  let formatFirst;
  let formatEnd;
  if (Array.isArray(format)) {
    formatFirst = format[0];
    formatEnd = format[1];
  } else {
    formatFirst = format;
    formatEnd = format;
  }
  const parsedStartText = startText ? formatString(startText, formatFirst) : "";
  const parsedEndText = endText ? formatString(endText, formatEnd) : "";
  const valueStr = parsedStartText && parsedEndText ? `${parsedStartText} ~ ${parsedEndText}` : "";
  return valueStr;
};

const isNeedTranText = (item) => {
  if (item?.valueType?.toString().startsWith("date")) {
    return true;
  }
  if (item?.valueType === "select" || item?.valueEnum) {
    return true;
  }
  return false;
};
const getEllipsis = (item) => {
  if (item.ellipsis?.showTitle === false) {
    return false;
  }
  return item.ellipsis;
};
const genCopyable = (dom, item, text) => {
  if (item.copyable || item.ellipsis) {
    const copyable = item.copyable && text ? {
      text,
      tooltips: ["", ""]
    } : void 0;
    const needTranText = isNeedTranText(item);
    const ellipsis = getEllipsis(item) && text ? {
      tooltip: (
        // 支援一下 tooltip 的關閉
        item?.tooltip !== false && needTranText ? /* @__PURE__ */ jsx("div", { className: "pro-table-tooltip-text", children: dom }) : text
      )
    } : false;
    return /* @__PURE__ */ jsx(
      Typography.Text,
      {
        style: {
          width: "100%",
          margin: 0,
          padding: 0
        },
        title: "",
        copyable,
        ellipsis,
        children: dom
      }
    );
  }
  return dom;
};

function runFunction(valueEnum, ...rest) {
  if (typeof valueEnum === "function") {
    return valueEnum(...rest);
  }
  return valueEnum;
}

const getFieldPropsOrFormItemProps = (fieldProps, form, extraProps) => {
  if (form === void 0) {
    return fieldProps;
  }
  return runFunction(fieldProps, form, extraProps);
};

function coverToNewToken(token) {
  if (compareVersions(getVersion$1(), "5.6.0") < 0)
    return token;
  const deprecatedTokens = {
    colorGroupTitle: "groupTitleColor",
    radiusItem: "itemBorderRadius",
    radiusSubMenuItem: "subMenuItemBorderRadius",
    colorItemText: "itemColor",
    colorItemTextHover: "itemHoverColor",
    colorItemTextHoverHorizontal: "horizontalItemHoverColor",
    colorItemTextSelected: "itemSelectedColor",
    colorItemTextSelectedHorizontal: "horizontalItemSelectedColor",
    colorItemTextDisabled: "itemDisabledColor",
    colorDangerItemText: "dangerItemColor",
    colorDangerItemTextHover: "dangerItemHoverColor",
    colorDangerItemTextSelected: "dangerItemSelectedColor",
    colorDangerItemBgActive: "dangerItemActiveBg",
    colorDangerItemBgSelected: "dangerItemSelectedBg",
    colorItemBg: "itemBg",
    colorItemBgHover: "itemHoverBg",
    colorSubItemBg: "subMenuItemBg",
    colorItemBgActive: "itemActiveBg",
    colorItemBgSelected: "itemSelectedBg",
    colorItemBgSelectedHorizontal: "horizontalItemSelectedBg",
    colorActiveBarWidth: "activeBarWidth",
    colorActiveBarHeight: "activeBarHeight",
    colorActiveBarBorderSize: "activeBarBorderWidth"
  };
  const newToken = { ...token };
  Object.keys(deprecatedTokens).forEach((key) => {
    if (newToken[key] !== void 0) {
      newToken[deprecatedTokens[key]] = newToken[key];
      delete newToken[key];
    }
  });
  return newToken;
}

const useRefFunction = (reFunction) => {
  const ref = useRef(null);
  ref.current = reFunction;
  return useCallback((...rest) => {
    return ref.current?.(...rest);
  }, []);
};

function useDebounceFn(fn, wait) {
  const callback = useRefFunction(fn);
  const timer = useRef();
  const cancel = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);
  const run = useCallback(
    async (...args) => {
      if (wait === 0 || wait === void 0) {
        return callback(...args);
      }
      cancel();
      return new Promise((resolve) => {
        timer.current = setTimeout(async () => {
          resolve(await callback(...args));
          return;
        }, wait);
      });
    },
    [callback, cancel, wait]
  );
  useEffect(() => {
    return cancel;
  }, [cancel]);
  return {
    run,
    cancel
  };
}

const useLatest = (value) => {
  const ref = useRef(value);
  ref.current = value;
  return ref;
};

function useDebounceValue(value, delay = 100, deps) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const valueRef = useLatest(value);
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(valueRef.current);
      }, delay);
      return () => clearTimeout(handler);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [delay, ...deps] : void 0
  );
  return debouncedValue;
}

function isDeepEqualReact(a, b, ignoreKeys, debug) {
  if (a === b)
    return true;
  if (a && b && typeof a === "object" && typeof b === "object") {
    if (a.constructor !== b.constructor)
      return false;
    let length;
    let i;
    let keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!isDeepEqualReact(a[i], b[i], ignoreKeys, debug))
          return false;
      return true;
    }
    if (a instanceof Map && b instanceof Map) {
      if (a.size !== b.size)
        return false;
      for (i of a.entries())
        if (!b.has(i[0]))
          return false;
      for (i of a.entries())
        if (!isDeepEqualReact(i[1], b.get(i[0]), ignoreKeys, debug))
          return false;
      return true;
    }
    if (a instanceof Set && b instanceof Set) {
      if (a.size !== b.size)
        return false;
      for (i of a.entries())
        if (!b.has(i[0]))
          return false;
      return true;
    }
    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (a[i] !== b[i])
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf && a.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString && a.toString)
      return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (ignoreKeys?.includes(key))
        continue;
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!isDeepEqualReact(a[key], b[key], ignoreKeys, debug)) {
        if (debug) {
          console.log(key);
        }
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}

const isDeepEqual = (a, b, ignoreKeys) => isDeepEqualReact(a, b, ignoreKeys);
function useDeepCompareMemoize(value, ignoreKeys) {
  const ref = useRef();
  if (!isDeepEqual(value, ref.current, ignoreKeys)) {
    ref.current = value;
  }
  return ref.current;
}
function useDeepCompareEffect(effect, dependencies, ignoreKeys) {
  useEffect(effect, useDeepCompareMemoize(dependencies || [], ignoreKeys));
}
function useDeepCompareEffectDebounce(effect, dependencies, ignoreKeys, waitTime) {
  const effectDn = useDebounceFn(async () => {
    effect();
  }, waitTime || 16);
  useEffect(() => {
    effectDn.run();
  }, useDeepCompareMemoize(dependencies || [], ignoreKeys));
}

function useDeepCompareMemo(factory, dependencies) {
  return React__default.useMemo(factory, useDeepCompareMemoize(dependencies));
}

let testId = 0;
function useFetchData$2(props) {
  const abortRef = useRef(null);
  const [cacheKey] = useState(() => {
    if (props.proFieldKey) {
      return props.proFieldKey.toString();
    }
    testId += 1;
    return testId.toString();
  });
  const proFieldKeyRef = useRef(cacheKey);
  const fetchData = async () => {
    abortRef.current?.abort();
    const abort = new AbortController();
    abortRef.current = abort;
    const loadData = await Promise.race([
      props.request?.(props.params, props),
      new Promise((_, reject) => {
        abortRef.current?.signal?.addEventListener("abort", () => {
          reject(new Error("aborted"));
        });
      })
    ]);
    return loadData;
  };
  useEffect(() => {
    return () => {
      testId += 1;
    };
  }, []);
  const { data, error } = useSWR(
    [proFieldKeyRef.current, props.params],
    fetchData,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      revalidateOnReconnect: false
    }
  );
  return [data || error];
}

const usePrevious = (state) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = state;
  });
  return ref.current;
};

function useForceRender() {
  const [, setValue] = useState(true);
  const updateValue = useCallback(() => setValue((oldValue) => !oldValue), []);
  return updateValue;
}

function useRefCallback(callback, initialValue) {
  const ref = useMemo(() => {
    const defaultValue = {
      current: initialValue
    };
    return new Proxy(defaultValue, {
      set(target, prop, newValue) {
        if (!Object.is(target[prop], newValue)) {
          target[prop] = newValue;
          callback(ref);
        }
        return true;
      }
    });
  }, []);
  return ref;
}

function useReactiveRef(initialValue) {
  const forceRender = useForceRender();
  const ref = useRefCallback(forceRender, initialValue);
  return ref;
}

const isNode = typeof process !== "undefined" && process.versions != null && process.versions.node != null;
const isBrowser = () => {
  if (typeof process !== "undefined" && false) {
    return true;
  }
  return typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.matchMedia !== "undefined" && !isNode;
};

const isDropdownValueType = (valueType) => {
  let isDropdown = false;
  if (typeof valueType === "string" && valueType.startsWith("date") && !valueType.endsWith("Range") || valueType === "select" || valueType === "time") {
    isDropdown = true;
  }
  return isDropdown;
};

function isImg(path) {
  return /\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(path);
}

const isUrl$1 = (path) => {
  if (!path)
    return false;
  if (!path.startsWith("http")) {
    return false;
  }
  try {
    const url = new URL(path);
    return !!url;
  } catch (error) {
    return false;
  }
};

let index$4 = 0;
let genNanoid = (t = 21) => {
  if (typeof window === "undefined")
    return (index$4 += 1).toFixed(0);
  if (!window.crypto)
    return (index$4 += 1).toFixed(0);
  let e = "", r = crypto.getRandomValues(new Uint8Array(t));
  for (; t--; ) {
    let n = 63 & r[t];
    e += n < 36 ? n.toString(36) : n < 62 ? (n - 26).toString(36).toUpperCase() : n < 63 ? "_" : "-";
  }
  return e;
};
const nanoid = () => {
  if (typeof window === "undefined")
    return genNanoid();
  if (window.crypto && window.crypto.randomUUID && typeof crypto.randomUUID == "function") {
    return crypto.randomUUID();
  }
  return genNanoid();
};

const omitBoolean = (obj) => {
  if (obj && obj !== true) {
    return obj;
  }
  return void 0;
};

const omitUndefinedAndEmptyArr = (obj) => {
  const newObj = {};
  Object.keys(obj || {}).forEach((key) => {
    if (Array.isArray(obj[key]) && obj[key]?.length === 0) {
      return;
    }
    if (obj[key] === void 0) {
      return;
    }
    newObj[key] = obj[key];
  });
  return newObj;
};

dayjs.extend(customParseFormat);
const isMoment = (value) => !!value?._isAMomentObject;
const parseValueToDay = (value, formatter) => {
  if (isNil(value) || dayjs.isDayjs(value) || isMoment(value)) {
    if (isMoment(value)) {
      return dayjs(value);
    }
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(
      (v) => parseValueToDay(v, formatter)
    );
  }
  if (typeof value === "number")
    return dayjs(value);
  return dayjs(value, formatter);
};

const ipassFormItemPropsList = [
  "colon",
  "dependencies",
  "extra",
  "getValueFromEvent",
  "getValueProps",
  "hasFeedback",
  "help",
  "htmlFor",
  "initialValue",
  "noStyle",
  "label",
  "labelAlign",
  "labelCol",
  "name",
  "preserve",
  "normalize",
  "required",
  "rules",
  "shouldUpdate",
  "trigger",
  "validateFirst",
  "validateStatus",
  "validateTrigger",
  "valuePropName",
  "wrapperCol",
  "hidden",
  // 我自訂的
  "addonBefore",
  "addonAfter"
];
function pickProFormItemProps(props) {
  const attrs = {};
  ipassFormItemPropsList.forEach((key) => {
    if (props[key] !== void 0) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}

const proFieldProps = `valueType request plain renderFormItem render text formItemProps valueEnum`;
const proFormProps = `fieldProps isDefaultDom groupProps contentRender submitterProps submitter`;
function pickProProps(props) {
  const propList = `${proFieldProps} ${proFormProps}`.split(/[\s\n]+/);
  const attrs = {};
  Object.keys(props || {}).forEach((key) => {
    if (propList.includes(key)) {
      return;
    }
    attrs[key] = props[key];
  });
  return attrs;
}

const stringify = configure({
  bigint: true,
  circularValue: "Magic circle!",
  deterministic: false,
  maximumDepth: 4
  //   maximumBreadth: 4,
});

function isPlainObj(itemValue) {
  if (typeof itemValue !== "object")
    return false;
  if (itemValue === null)
    return true;
  if (React__default.isValidElement(itemValue))
    return false;
  if (itemValue.constructor === RegExp)
    return false;
  if (itemValue instanceof Map)
    return false;
  if (itemValue instanceof Set)
    return false;
  if (itemValue instanceof HTMLElement)
    return false;
  if (itemValue instanceof Blob)
    return false;
  if (itemValue instanceof File)
    return false;
  if (Array.isArray(itemValue))
    return false;
  return true;
}
const transformKeySubmitValue = (values, dataFormatMapRaw, omit = true) => {
  const dataFormatMap = Object.keys(dataFormatMapRaw).reduce((ret, key) => {
    const value = dataFormatMapRaw[key];
    if (!isNil(value)) {
      ret[key] = value;
    }
    return ret;
  }, {});
  if (Object.keys(dataFormatMap).length < 1) {
    return values;
  }
  if (typeof window === "undefined")
    return values;
  if (typeof values !== "object" || isNil(values) || values instanceof Blob) {
    return values;
  }
  let finalValues = Array.isArray(values) ? [] : {};
  const gen = (tempValues, parentsKey) => {
    const isArrayValues = Array.isArray(tempValues);
    let result = isArrayValues ? [] : {};
    if (tempValues == null || tempValues === void 0) {
      return result;
    }
    Object.keys(tempValues).forEach((entityKey) => {
      const transformForArray = (transformList, subItemValue) => {
        if (!Array.isArray(transformList))
          return entityKey;
        transformList.forEach(
          (transform2, idx) => {
            if (!transform2)
              return;
            const subTransformItem = subItemValue?.[idx];
            if (typeof transform2 === "function") {
              subItemValue[idx] = transform2(
                subItemValue,
                entityKey,
                tempValues
              );
            }
            if (typeof transform2 === "object" && !Array.isArray(transform2)) {
              Object.keys(transform2).forEach((transformArrayItem) => {
                const subTransformItemValue = subTransformItem?.[transformArrayItem];
                if (typeof transform2[transformArrayItem] === "function" && subTransformItemValue) {
                  const res = transform2[transformArrayItem](
                    subTransformItem[transformArrayItem],
                    entityKey,
                    tempValues
                  );
                  subTransformItem[transformArrayItem] = typeof res === "object" ? res[transformArrayItem] : res;
                } else if (typeof transform2[transformArrayItem] === "object" && Array.isArray(transform2[transformArrayItem]) && subTransformItemValue) {
                  transformForArray(
                    transform2[transformArrayItem],
                    subTransformItemValue
                  );
                }
              });
            }
            if (typeof transform2 === "object" && Array.isArray(transform2) && subTransformItem) {
              transformForArray(transform2, subTransformItem);
            }
          }
        );
        return entityKey;
      };
      const key = parentsKey ? [parentsKey, entityKey].flat(1) : [entityKey].flat(1);
      const itemValue = tempValues[entityKey];
      const transformFunction = get$1(dataFormatMap, key);
      const transform = () => {
        let tempKey, transformedResult, isTransformedResultPrimitive = false;
        if (typeof transformFunction === "function") {
          transformedResult = transformFunction?.(
            itemValue,
            entityKey,
            tempValues
          );
          const typeOfResult = typeof transformedResult;
          if (typeOfResult !== "object" && typeOfResult !== "undefined") {
            tempKey = entityKey;
            isTransformedResultPrimitive = true;
          } else {
            tempKey = transformedResult;
          }
        } else {
          tempKey = transformForArray(transformFunction, itemValue);
        }
        if (Array.isArray(tempKey)) {
          result = set(result, tempKey, itemValue);
          return;
        }
        if (typeof tempKey === "object" && !Array.isArray(finalValues)) {
          finalValues = merge$1(finalValues, tempKey);
        } else if (typeof tempKey === "object" && Array.isArray(finalValues)) {
          result = { ...result, ...tempKey };
        } else if (tempKey !== null || tempKey !== void 0) {
          result = set(
            result,
            [tempKey],
            isTransformedResultPrimitive ? transformedResult : itemValue
          );
        }
      };
      if (transformFunction && typeof transformFunction === "function") {
        transform();
      }
      if (typeof window === "undefined")
        return;
      if (isPlainObj(itemValue)) {
        const genValues = gen(itemValue, key);
        if (Object.keys(genValues).length < 1) {
          return;
        }
        result = set(result, [entityKey], genValues);
        return;
      }
      transform();
    });
    return omit ? result : tempValues;
  };
  finalValues = Array.isArray(values) && Array.isArray(finalValues) ? [...gen(values)] : merge({}, gen(values), finalValues);
  return finalValues;
};

function useMediaQuery(mediaQuery) {
  const isSsr = typeof window === "undefined";
  const [matches, setMatches] = useState(
    () => isSsr ? false : window.matchMedia(mediaQuery).matches
  );
  useIsomorphicLayoutEffect(() => {
    if (isSsr) {
      return;
    }
    const mediaQueryList = window.matchMedia(mediaQuery);
    const listener = (e) => setMatches(e.matches);
    mediaQueryList.addListener(listener);
    return () => mediaQueryList.removeListener(listener);
  }, [mediaQuery]);
  return matches;
}

const MediaQueryEnum = {
  xs: {
    maxWidth: 575,
    matchMedia: "(max-width: 575px)"
  },
  sm: {
    minWidth: 576,
    maxWidth: 767,
    matchMedia: "(min-width: 576px) and (max-width: 767px)"
  },
  md: {
    minWidth: 768,
    maxWidth: 991,
    matchMedia: "(min-width: 768px) and (max-width: 991px)"
  },
  lg: {
    minWidth: 992,
    maxWidth: 1199,
    matchMedia: "(min-width: 992px) and (max-width: 1199px)"
  },
  xl: {
    minWidth: 1200,
    maxWidth: 1599,
    matchMedia: "(min-width: 1200px) and (max-width: 1599px)"
  },
  xxl: {
    minWidth: 1600,
    matchMedia: "(min-width: 1600px)"
  }
};
const getScreenClassName = () => {
  let className = "md";
  if (typeof window === "undefined") {
    return className;
  }
  const mediaQueryKey = Object.keys(MediaQueryEnum).find(
    (key) => {
      const { matchMedia } = MediaQueryEnum[key];
      if (window.matchMedia(matchMedia).matches) {
        return true;
      }
      return false;
    }
  );
  className = mediaQueryKey;
  return className;
};
const useBreakpoint = () => {
  const isMd = useMediaQuery(MediaQueryEnum.md.matchMedia);
  const isLg = useMediaQuery(MediaQueryEnum.lg.matchMedia);
  const isXxl = useMediaQuery(MediaQueryEnum.xxl.matchMedia);
  const isXl = useMediaQuery(MediaQueryEnum.xl.matchMedia);
  const isSm = useMediaQuery(MediaQueryEnum.sm.matchMedia);
  const isXs = useMediaQuery(MediaQueryEnum.xs.matchMedia);
  const [colSpan, setColSpan] = useState(
    getScreenClassName()
  );
  useEffect(() => {
    if (isXxl) {
      setColSpan("xxl");
      return;
    }
    if (isXl) {
      setColSpan("xl");
      return;
    }
    if (isLg) {
      setColSpan("lg");
      return;
    }
    if (isMd) {
      setColSpan("md");
      return;
    }
    if (isSm) {
      setColSpan("sm");
      return;
    }
    if (isXs) {
      setColSpan("xs");
      return;
    }
    setColSpan("md");
  }, [isMd, isLg, isXxl, isXl, isSm, isXs]);
  return colSpan;
};

const sha256 = function sha256(ascii) {
  function rightRotate(value, amount) {
    return (value >>> amount) | (value << (32 - amount))
  }

  const mathPow = Math.pow;
  const maxWord = mathPow(2, 32);
  const lengthProperty = 'length';
  let i, j; // Used as a counter across the whole file
  let result = '';

  const words = [];
  const asciiBitLength = ascii[lengthProperty] * 8;

  //* caching results is optional - remove/add slash from front of this line to toggle
  // Initial hash value: first 32 bits of the fractional parts of the square roots of the first 8 primes
  // (we actually calculate the first 64, but extra values are just ignored)
  let hash = sha256.h = sha256.h || [];
  // Round constants: first 32 bits of the fractional parts of the cube roots of the first 64 primes
  const k = sha256.k = sha256.k || [];
  let primeCounter = k[lengthProperty];
  /*/
  const hash = [], k = [];
  const primeCounter = 0;
  //*/

  const isComposite = {};
  for (let candidate = 2; primeCounter < 64; candidate++) {
    if (!isComposite[candidate]) {
      for (i = 0; i < 313; i += candidate) {
        isComposite[i] = candidate;
      }
      hash[primeCounter] = (mathPow(candidate, .5) * maxWord) | 0;
      k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
    }
  }

  ascii += '\x80'; // Append Ƈ' bit (plus zero padding)
  while (ascii[lengthProperty] % 64 - 56) ascii += '\x00'; // More zero padding
  for (i = 0; i < ascii[lengthProperty]; i++) {
    j = ascii.charCodeAt(i);
    if (j >> 8) return // ASCII check: only accept characters in range 0-255
    words[i >> 2] |= j << ((3 - i) % 4) * 8;
  }
  words[words[lengthProperty]] = ((asciiBitLength / maxWord) | 0);
  words[words[lengthProperty]] = (asciiBitLength);

  // process each chunk
  for (j = 0; j < words[lengthProperty];) {
    const w = words.slice(j, j += 16); // The message is expanded into 64 words as part of the iteration
    const oldHash = hash;
    // This is now the undefinedworking hash", often labelled as constiables a...g
    // (we have to truncate as well, otherwise extra entries at the end accumulate
    hash = hash.slice(0, 8);

    for (i = 0; i < 64; i++) {
      // Expand the message into 64 words
      // Used below if 
      const w15 = w[i - 15], w2 = w[i - 2];

      // Iterate
      const a = hash[0], e = hash[4];
      const temp1 = hash[7]
        + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) // S1
        + ((e & hash[5]) ^ ((~e) & hash[6])) // ch
        + k[i]
        // Expand the message schedule if needed
        + (w[i] = (i < 16) ? w[i] : (
          w[i - 16]
          + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3)) // s0
          + w[i - 7]
          + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10)) // s1
        ) | 0
        );
      // This is only used once, so *could* be moved below, but it only saves 4 bytes and makes things unreadble
      const temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) // S0
        + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2])); // maj

      hash = [(temp1 + temp2) | 0].concat(hash); // We don't bother trimming off the extra ones, they're harmless as long as we're truncating when we do the slice()
      hash[4] = (hash[4] + temp1) | 0;
    }

    for (i = 0; i < 8; i++) {
      hash[i] = (hash[i] + oldHash[i]) | 0;
    }
  }

  for (i = 0; i < 8; i++) {
    for (j = 3; j + 1; j--) {
      const b = (hash[i] >> (j * 8)) & 255;
      result += ((b < 16) ? 0 : '') + b.toString(16);
    }
  }
  return result
};

const CardLoading = ({ prefixCls }) => {
  const loadingBlockClass = `${prefixCls}-loading-block`;
  return /* @__PURE__ */ jsxs("div", { className: `${prefixCls}-loading-content`, children: [
    /* @__PURE__ */ jsx(
      Row,
      {
        gutter: {
          xs: 8,
          sm: 8,
          md: 8,
          lg: 12
        },
        children: /* @__PURE__ */ jsx(Col, { span: 22, children: /* @__PURE__ */ jsx("div", { className: loadingBlockClass }) })
      }
    ),
    /* @__PURE__ */ jsxs(Row, { gutter: 8, children: [
      /* @__PURE__ */ jsx(Col, { span: 8, children: /* @__PURE__ */ jsx("div", { className: loadingBlockClass }) }),
      /* @__PURE__ */ jsx(Col, { span: 14, children: /* @__PURE__ */ jsx("div", { className: loadingBlockClass }) })
    ] }),
    /* @__PURE__ */ jsxs(Row, { gutter: 8, children: [
      /* @__PURE__ */ jsx(Col, { span: 6, children: /* @__PURE__ */ jsx("div", { className: loadingBlockClass }) }),
      /* @__PURE__ */ jsx(Col, { span: 16, children: /* @__PURE__ */ jsx("div", { className: loadingBlockClass }) })
    ] }),
    /* @__PURE__ */ jsxs(Row, { gutter: 8, children: [
      /* @__PURE__ */ jsx(Col, { span: 13, children: /* @__PURE__ */ jsx("div", { className: loadingBlockClass }) }),
      /* @__PURE__ */ jsx(Col, { span: 9, children: /* @__PURE__ */ jsx("div", { className: loadingBlockClass }) })
    ] }),
    /* @__PURE__ */ jsxs(Row, { gutter: 8, children: [
      /* @__PURE__ */ jsx(Col, { span: 4, children: /* @__PURE__ */ jsx("div", { className: loadingBlockClass }) }),
      /* @__PURE__ */ jsx(Col, { span: 3, children: /* @__PURE__ */ jsx("div", { className: loadingBlockClass }) }),
      /* @__PURE__ */ jsx(Col, { span: 14, children: /* @__PURE__ */ jsx("div", { className: loadingBlockClass }) })
    ] })
  ] });
};
const CheckCardGroupConnext = createContext(null);
const CheckCardGroup = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    options = [],
    loading = false,
    multiple = false,
    bordered = true,
    onChange,
    ...restProps
  } = props;
  const configContext = useContext(ConfigProvider.ConfigContext);
  const getOptions = useCallback(() => {
    return options?.map((option) => {
      if (typeof option === "string") {
        return {
          title: option,
          value: option
        };
      }
      return option;
    });
  }, [options]);
  const prefixCls = configContext.getPrefixCls(
    "pro-checkcard",
    customizePrefixCls
  );
  const groupPrefixCls = `${prefixCls}-group`;
  const domProps = omit(restProps, [
    "children",
    "defaultValue",
    "value",
    "disabled",
    "size"
  ]);
  const [stateValue, setStateValue] = useMergedState(props.defaultValue, {
    value: props.value,
    onChange: props.onChange
  });
  const registerValueMap = useRef(/* @__PURE__ */ new Map());
  const registerValue = (value) => {
    registerValueMap.current?.set(value, true);
  };
  const cancelValue = (value) => {
    registerValueMap.current?.delete(value);
  };
  const toggleOption = (option) => {
    if (!multiple) {
      let changeValue;
      changeValue = stateValue;
      if (changeValue === option.value) {
        changeValue = void 0;
      } else {
        changeValue = option.value;
      }
      setStateValue?.(changeValue);
    }
    if (multiple) {
      let changeValue = [];
      const stateValues = stateValue;
      const hasOption = stateValues?.includes(option.value);
      changeValue = [...stateValues || []];
      if (!hasOption) {
        changeValue.push(option.value);
      }
      if (hasOption) {
        changeValue = changeValue.filter(
          (itemValue) => itemValue !== option.value
        );
      }
      const newOptions = getOptions();
      const newValue = changeValue?.filter((val) => registerValueMap.current.has(val))?.sort((a, b) => {
        const indexA = newOptions.findIndex((opt) => opt.value === a);
        const indexB = newOptions.findIndex((opt) => opt.value === b);
        return indexA - indexB;
      });
      setStateValue(newValue);
    }
  };
  const children = useMemo(() => {
    if (loading) {
      return new Array(
        options.length || React__default.Children.toArray(props.children).length || 1
      ).fill(0).map((_, index) => /* @__PURE__ */ jsx(CheckCard, { loading: true }, index));
    }
    if (options && options.length > 0) {
      const optionValue = stateValue;
      return getOptions().map((option) => /* @__PURE__ */ jsx(
        CheckCard,
        {
          disabled: option.disabled,
          size: option.size ?? props.size,
          value: option.value,
          checked: multiple ? optionValue?.includes(option.value) : optionValue === option.value,
          onChange: option.onChange,
          title: option.title,
          avatar: option.avatar,
          description: option.description,
          cover: option.cover
        },
        option.value.toString()
      ));
    }
    return props.children;
  }, [
    getOptions,
    loading,
    multiple,
    options,
    props.children,
    props.size,
    stateValue
  ]);
  const classString = classNames(groupPrefixCls, className);
  return /* @__PURE__ */ jsx(
    CheckCardGroupConnext.Provider,
    {
      value: {
        toggleOption,
        bordered,
        value: stateValue,
        disabled: props.disabled,
        size: props.size,
        loading: props.loading,
        multiple: props.multiple,
        registerValue,
        cancelValue
      },
      children: /* @__PURE__ */ jsx("div", { className: classString, style, ...domProps, children })
    }
  );
};

const proCheckCardActive = (token) => ({
  backgroundColor: token.colorPrimaryBg,
  borderColor: token.colorPrimary
});
const proCheckCardDisabled = (token) => ({
  backgroundColor: token.colorBgContainerDisabled,
  borderColor: token.colorBorder,
  cursor: "not-allowed",
  [token.componentCls]: {
    "&-description": { color: token.colorTextDisabled },
    "&-title": {
      color: token.colorTextDisabled
    },
    "&-avatar": {
      opacity: "0.25"
    }
  }
});
const cardLoading$1 = new Keyframes("card-loading", {
  "0%": { backgroundPosition: "0 50%" },
  "50%": { backgroundPosition: "100% 50%" },
  "100%": { backgroundPosition: "0 50%" }
});
const genProStyle$8 = (token) => {
  return {
    [token.componentCls]: {
      position: "relative",
      display: "inline-block",
      width: "320px",
      marginInlineEnd: "16px",
      marginBlockEnd: "16px",
      color: token.colorText,
      fontSize: token.fontSize,
      lineHeight: token.lineHeight,
      verticalAlign: "top",
      backgroundColor: token.colorBgContainer,
      borderRadius: token.borderRadius,
      cursor: "pointer",
      transition: `all 0.3s`,
      "&:last-child": {
        marginInlineEnd: 0
      },
      "& + &": {
        marginInlineStart: "0 !important"
      },
      "&-bordered": {
        border: `${token.lineWidth}px solid ${token.colorBorder}`
      },
      "&-group": {
        display: "inline-block"
      },
      [`${token.componentCls}-loading`]: {
        overflow: "hidden",
        userSelect: "none",
        "&-content": {
          paddingInline: token.padding,
          paddingBlock: token.paddingSM,
          p: {
            marginBlock: 0,
            marginInline: 0
          },
          [`${token.componentCls}-loading-block`]: {
            height: "14px",
            marginBlock: "4px",
            background: `linear-gradient(90deg, rgba(54, 61, 64, 0.2), rgba(54, 61, 64, 0.4), rgba(54, 61, 64, 0.2))`,
            animationName: cardLoading$1,
            animationDuration: "1.4s",
            animationTimingFunction: "ease",
            animationIterationCount: "infinite"
          }
        }
      },
      "&:focus": proCheckCardActive(token),
      "&-checked": {
        ...proCheckCardActive(token),
        "&:after": {
          position: "absolute",
          insetBlockStart: 2,
          insetInlineEnd: 2,
          width: 0,
          height: 0,
          border: `${token.borderRadius + 4}px solid ${token.colorPrimary}`,
          borderBlockEnd: `${token.borderRadius + 4}px  solid transparent`,
          borderInlineStart: `${token.borderRadius + 4}px  solid transparent`,
          borderStartEndRadius: `${token.borderRadius}px`,
          content: "''"
        }
      },
      "&-disabled": proCheckCardDisabled(token),
      "&[disabled]": proCheckCardDisabled(token),
      "&-checked&-disabled": {
        "&:after": {
          position: "absolute",
          insetBlockStart: 2,
          insetInlineEnd: 2,
          width: 0,
          height: 0,
          border: `${token.borderRadius + 4}px solid ${token.colorTextDisabled}`,
          borderBlockEnd: `${token.borderRadius + 4}px  solid transparent`,
          borderInlineStart: `${token.borderRadius + 4}px  solid transparent`,
          borderStartEndRadius: `${token.borderRadius}px`,
          content: "''"
        }
      },
      "&-lg": {
        width: 440
      },
      "&-sm": {
        width: 212
      },
      "&-cover": {
        paddingInline: token.paddingXXS,
        paddingBlock: token.paddingXXS,
        img: {
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: token.borderRadius
        }
      },
      "&-content": {
        display: "flex",
        paddingInline: token.paddingSM,
        paddingBlock: token.padding
      },
      "&-body": {
        paddingInline: token.paddingSM,
        paddingBlock: token.padding
      },
      "&-avatar-header": { display: "flex", alignItems: "center" },
      "&-avatar": { paddingInlineEnd: 8 },
      "&-detail": {
        overflow: "hidden",
        width: "100%",
        "> div:not(:last-child)": {
          marginBlockEnd: 4
        }
      },
      "&-header": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        lineHeight: token.lineHeight,
        "&-left": {
          display: "flex",
          alignItems: "center",
          gap: token.sizeSM
        }
      },
      "&-title": {
        overflow: "hidden",
        color: token.colorTextHeading,
        fontWeight: "500",
        fontSize: token.fontSize,
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      },
      "&-description": {
        color: token.colorTextSecondary
      },
      [`&:not(${token.componentCls}-disabled)`]: {
        "&:hover": {
          borderColor: token.colorPrimary
        }
      }
    }
  };
};
function useStyle$v(prefixCls) {
  return useStyle$A("CheckCard", (token) => {
    const proListToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genProStyle$8(proListToken)];
  });
}

const CheckCard = (props) => {
  const [stateChecked, setStateChecked] = useMergedState(
    props.defaultChecked || false,
    {
      value: props.checked,
      onChange: props.onChange
    }
  );
  const checkCardGroup = useContext(CheckCardGroupConnext);
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const handleClick = (e) => {
    props?.onClick?.(e);
    const newChecked = !stateChecked;
    checkCardGroup?.toggleOption?.({ value: props.value });
    setStateChecked?.(newChecked, e);
  };
  const getSizeCls = (size2) => {
    if (size2 === "large")
      return "lg";
    if (size2 === "small")
      return "sm";
    return "";
  };
  useEffect(() => {
    checkCardGroup?.registerValue?.(props.value);
    return () => checkCardGroup?.cancelValue?.(props.value);
  }, [props.value]);
  const renderCover = (prefixCls2, cover2) => {
    return /* @__PURE__ */ jsx("div", { className: `${prefixCls2}-cover`, children: typeof cover2 === "string" ? /* @__PURE__ */ jsx("img", { src: cover2, alt: "checkcard" }) : cover2 });
  };
  const {
    prefixCls: customizePrefixCls,
    className,
    avatar,
    title,
    description,
    cover,
    extra,
    style = {},
    ...others
  } = props;
  const checkCardProps = { ...others };
  const prefixCls = getPrefixCls("pro-checkcard", customizePrefixCls);
  const { wrapSSR, hashId } = useStyle$v(prefixCls);
  checkCardProps.checked = stateChecked;
  let multiple = false;
  if (checkCardGroup) {
    checkCardProps.disabled = props.disabled || checkCardGroup.disabled;
    checkCardProps.loading = props.loading || checkCardGroup.loading;
    checkCardProps.bordered = props.bordered || checkCardGroup.bordered;
    multiple = checkCardGroup.multiple;
    const isChecked = checkCardGroup.multiple ? checkCardGroup.value?.includes(props.value) : checkCardGroup.value === props.value;
    checkCardProps.checked = checkCardProps.loading ? false : isChecked;
    checkCardProps.size = props.size || checkCardGroup.size;
  }
  const {
    disabled = false,
    size,
    loading: cardLoading,
    bordered = true,
    checked
  } = checkCardProps;
  const sizeCls = getSizeCls(size);
  const classString = classNames(prefixCls, className, hashId, {
    [`${prefixCls}-loading`]: cardLoading,
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-checked`]: checked,
    [`${prefixCls}-multiple`]: multiple,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-bordered`]: bordered,
    [`${prefixCls}-ghost`]: props.ghost
  });
  const metaDom = useMemo(() => {
    if (cardLoading) {
      return /* @__PURE__ */ jsx(CardLoading, { prefixCls: prefixCls || "" });
    }
    if (cover) {
      return renderCover(prefixCls || "", cover);
    }
    const headerDom = (title ?? extra) != null && /* @__PURE__ */ jsxs("div", { className: `${prefixCls}-header ${hashId}`.trim(), children: [
      /* @__PURE__ */ jsxs("div", { className: `${prefixCls}-header-left ${hashId}`.trim(), children: [
        /* @__PURE__ */ jsx("div", { className: `${prefixCls}-title ${hashId}`.trim(), children: title }),
        props.subTitle ? /* @__PURE__ */ jsx("div", { className: `${prefixCls}-subTitle ${hashId}`.trim(), children: props.subTitle }) : null
      ] }),
      extra && /* @__PURE__ */ jsx("div", { className: `${prefixCls}-extra ${hashId}`.trim(), children: extra })
    ] });
    const descriptionDom = description ? /* @__PURE__ */ jsx("div", { className: `${prefixCls}-description ${hashId}`.trim(), children: description }) : null;
    const metaClass = classNames(`${prefixCls}-content`, hashId, {
      [`${prefixCls}-avatar-header`]: headerDom && !descriptionDom
    });
    return /* @__PURE__ */ jsx("div", { className: metaClass, children: headerDom || descriptionDom ? /* @__PURE__ */ jsxs("div", { className: `${prefixCls}-detail ${hashId}`.trim(), children: [
      headerDom,
      descriptionDom
    ] }) : null });
  }, [
    avatar,
    cardLoading,
    cover,
    description,
    extra,
    hashId,
    prefixCls,
    props.subTitle,
    title
  ]);
  return wrapSSR(
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: classString,
        style,
        onClick: (e) => {
          if (!cardLoading && !disabled) {
            handleClick(e);
          }
        },
        onMouseEnter: props.onMouseEnter,
        children: [
          metaDom,
          props.children ? /* @__PURE__ */ jsx(
            "div",
            {
              className: classNames(`${prefixCls}-body`),
              style: props.bodyStyle,
              children: props.children
            }
          ) : null,
          props.actions ? /* @__PURE__ */ jsx(ProCardActions, { actions: props.actions, prefixCls }) : null
        ]
      }
    )
  );
};
CheckCard.Group = CheckCardGroup;

const genProStyle$7 = (token) => {
  return {
    [token.componentCls]: {
      display: "flex",
      fontSize: token.fontSize,
      "& + &": {
        marginBlockStart: 4
      },
      "&-tip": {
        marginInlineStart: 4
      },
      "&-wrapper": {
        display: "flex",
        width: "100%",
        [`${token.componentCls}-status`]: {
          width: "14px"
        }
      },
      "&-icon": {
        marginInlineEnd: 16
      },
      "&-trend-icon": {
        width: 0,
        height: 0,
        borderInlineEnd: "3.5px solid transparent",
        borderBlockEnd: "9px solid #000",
        borderInlineStart: "3.5px solid transparent",
        "&-up": { transform: "rotate(0deg)" },
        "&-down": { transform: "rotate(180deg)" }
      },
      "&-content": {
        width: "100%",
        [`${token.ipassCls}-statistic-content`]: {
          "&-value-int": {
            fontSize: token.fontSizeHeading3
          }
        }
      },
      "&-description": {
        width: "100%"
      },
      [`${token.ipassCls}-statistic-title`]: {
        color: token.colorText
      },
      "&-trend-up": {
        [`${token.ipassCls}-statistic-content`]: {
          color: "#f5222d",
          [`${token.componentCls}-trend-icon`]: {
            borderBlockEndColor: "#f5222d"
          }
        }
      },
      "&-trend-down": {
        [`${token.ipassCls}-statistic-content`]: {
          color: "#389e0d",
          [`${token.componentCls}-trend-icon`]: {
            borderBlockEndColor: "#52c41a"
          }
        }
      },
      "& &-layout-horizontal": {
        display: "flex",
        justifyContent: "space-between",
        [`${token.ipassCls}-statistic-title`]: {
          marginBlockEnd: 0
        },
        [`${token.ipassCls}-statistic-content-value`]: {
          fontWeight: 500
        },
        [`${token.ipassCls}-statistic-title,${token.ipassCls}-statistic-content,${token.ipassCls}-statistic-content-suffix,${token.ipassCls}-statistic-content-prefix,${token.ipassCls}-statistic-content-value-decimal`]: {
          fontSize: token.fontSize
        }
      },
      "& &-layout-inline": {
        display: "inline-flex",
        color: token.colorTextSecondary,
        [`${token.ipassCls}-statistic-title`]: {
          marginInlineEnd: "6px",
          marginBlockEnd: 0
        },
        [`${token.ipassCls}-statistic-content`]: {
          color: token.colorTextSecondary
        },
        [`${token.ipassCls}-statistic-title,${token.ipassCls}-statistic-content,${token.ipassCls}-statistic-content-suffix,${token.ipassCls}-statistic-content-prefix,${token.ipassCls}-statistic-content-value-decimal`]: {
          fontSize: token.fontSizeSM
        }
      }
    }
  };
};
function useStyle$u(prefixCls) {
  return useStyle$A("Statistic", (token) => {
    const proListToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genProStyle$7(proListToken)];
  });
}

const Statistic = (props) => {
  const {
    className,
    layout = "inline",
    style = {},
    description,
    children,
    title,
    tip,
    status,
    trend,
    prefix,
    icon,
    ...others
  } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls("pro-card-statistic");
  const { wrapSSR, hashId } = useStyle$u(prefixCls);
  const classString = classNames(prefixCls, className, hashId);
  const statusClass = classNames(`${prefixCls}-status`, hashId);
  const iconClass = classNames(`${prefixCls}-icon`, hashId);
  const wrapperClass = classNames(`${prefixCls}-wrapper`, hashId);
  const contentClass = classNames(`${prefixCls}-content`, hashId);
  const statisticClassName = classNames(hashId, {
    [`${prefixCls}-layout-${layout}`]: layout,
    [`${prefixCls}-trend-${trend}`]: trend
  });
  const tipDom = tip && /* @__PURE__ */ jsx(Tooltip, { title: tip, children: /* @__PURE__ */ jsx(HelpOutlineIcon, { className: `${prefixCls}-tip ${hashId}`.trim() }) });
  const trendIconClassName = classNames(`${prefixCls}-trend-icon`, hashId, {
    [`${prefixCls}-trend-icon-${trend}`]: trend
  });
  const trendDom = trend && /* @__PURE__ */ jsx("div", { className: trendIconClassName });
  const statusDom = status && /* @__PURE__ */ jsx("div", { className: statusClass, children: /* @__PURE__ */ jsx(Badge, { status, text: null }) });
  const iconDom = icon && /* @__PURE__ */ jsx("div", { className: iconClass, children: icon });
  return wrapSSR(
    /* @__PURE__ */ jsxs("div", { className: classString, style, children: [
      iconDom,
      /* @__PURE__ */ jsxs("div", { className: wrapperClass, children: [
        statusDom,
        /* @__PURE__ */ jsxs("div", { className: contentClass, children: [
          /* @__PURE__ */ jsx(
            Statistic$1,
            {
              title: (title || tipDom) && /* @__PURE__ */ jsxs(Fragment, { children: [
                title,
                tipDom
              ] }),
              prefix: (trendDom || prefix) && /* @__PURE__ */ jsxs(Fragment, { children: [
                trendDom,
                prefix
              ] }),
              className: statisticClassName,
              ...others
            }
          ),
          description && /* @__PURE__ */ jsx("div", { className: `${prefixCls}-description ${hashId}`.trim(), children: description })
        ] })
      ] })
    ] })
  );
};

const cardLoading = new Keyframes("card-loading", {
  "0%": { backgroundPosition: "0 50%" },
  "50%": { backgroundPosition: "100% 50%" },
  "100%": { backgroundPosition: "0 50%" }
});
const genProStyle$6 = (token) => {
  return {
    [token.componentCls]: {
      "&-loading": {
        overflow: "hidden"
      },
      "&-loading &-body": {
        userSelect: "none"
      },
      [`${token.componentCls}-loading-content`]: {
        width: "100%",
        p: {
          marginBlock: 0,
          marginInline: 0
        }
      },
      [`${token.componentCls}-loading-block`]: {
        height: "14px",
        marginBlock: "4px",
        background: `linear-gradient(90deg, rgba(54, 61, 64, 0.2), rgba(54, 61, 64, 0.4), rgba(54, 61, 64, 0.2))`,
        backgroundSize: "600% 600%",
        borderRadius: token.borderRadius,
        animationName: cardLoading,
        animationDuration: "1.4s",
        animationTimingFunction: "ease",
        animationIterationCount: "infinite"
      }
    }
  };
};
function useStyle$t(prefixCls) {
  return useStyle$A("ProCardLoading", (token) => {
    const proToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genProStyle$6(proToken)];
  });
}

const Loading = (props) => {
  const { style, prefix } = props;
  const { wrapSSR } = useStyle$t(prefix || "ipass-pro-card");
  return wrapSSR(
    /* @__PURE__ */ jsxs("div", { className: `${prefix}-loading-content`, style, children: [
      /* @__PURE__ */ jsx(Row, { gutter: 8, children: /* @__PURE__ */ jsx(Col, { span: 22, children: /* @__PURE__ */ jsx("div", { className: `${prefix}-loading-block` }) }) }),
      /* @__PURE__ */ jsxs(Row, { gutter: 8, children: [
        /* @__PURE__ */ jsx(Col, { span: 8, children: /* @__PURE__ */ jsx("div", { className: `${prefix}-loading-block` }) }),
        /* @__PURE__ */ jsx(Col, { span: 15, children: /* @__PURE__ */ jsx("div", { className: `${prefix}-loading-block` }) })
      ] }),
      /* @__PURE__ */ jsxs(Row, { gutter: 8, children: [
        /* @__PURE__ */ jsx(Col, { span: 6, children: /* @__PURE__ */ jsx("div", { className: `${prefix}-loading-block` }) }),
        /* @__PURE__ */ jsx(Col, { span: 18, children: /* @__PURE__ */ jsx("div", { className: `${prefix}-loading-block` }) })
      ] }),
      /* @__PURE__ */ jsxs(Row, { gutter: 8, children: [
        /* @__PURE__ */ jsx(Col, { span: 13, children: /* @__PURE__ */ jsx("div", { className: `${prefix}-loading-block` }) }),
        /* @__PURE__ */ jsx(Col, { span: 9, children: /* @__PURE__ */ jsx("div", { className: `${prefix}-loading-block` }) })
      ] }),
      /* @__PURE__ */ jsxs(Row, { gutter: 8, children: [
        /* @__PURE__ */ jsx(Col, { span: 4, children: /* @__PURE__ */ jsx("div", { className: `${prefix}-loading-block` }) }),
        /* @__PURE__ */ jsx(Col, { span: 3, children: /* @__PURE__ */ jsx("div", { className: `${prefix}-loading-block` }) }),
        /* @__PURE__ */ jsx(Col, { span: 16, children: /* @__PURE__ */ jsx("div", { className: `${prefix}-loading-block` }) })
      ] })
    ] })
  );
};

function filter(items) {
  return items.filter((item) => item);
}
function useLegacyItems(items, children, tabs) {
  if (items) {
    return items.map((item) => {
      return {
        ...item,
        children: /* @__PURE__ */ jsx(Card, { ...tabs?.cardProps, children: item.children })
      };
    });
  }
  noteOnce(!tabs, "Tabs.TabPane is deprecated. Please use `items` directly.");
  const childrenItems = toArray(children).map(
    (node) => {
      if (React__default.isValidElement(node)) {
        const { key, props } = node;
        const { tab, children: tempChild, ...restProps } = props || {};
        const item = {
          key: String(key),
          ...restProps,
          children: /* @__PURE__ */ jsx(Card, { ...tabs?.cardProps, children: tempChild }),
          label: tab
        };
        return item;
      }
      return null;
    }
  );
  return filter(childrenItems);
}
const TabPane = (props) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const version = "5.x.x";
  if (version.startsWith("5")) {
    return /* @__PURE__ */ jsx(Fragment, {});
  } else {
    const {
      key,
      tab,
      tabKey,
      disabled,
      destroyInactiveTabPane,
      children,
      className,
      style,
      cardProps,
      ...rest
    } = props;
    const prefixCls = getPrefixCls("pro-card-tabpane");
    const tabPaneClassName = classNames(prefixCls, className);
    return /* @__PURE__ */ jsx(
      Tabs.TabPane,
      {
        tabKey,
        tab,
        className: tabPaneClassName,
        style,
        disabled,
        destroyInactiveTabPane,
        ...rest,
        children: /* @__PURE__ */ jsx(Card, { ...cardProps, children })
      },
      key
    );
  }
};
if (typeof process !== "undefined" && false) {
  TabPane.displayName = "DeprecatedTabPane";
}

const genActiveStyle = (token) => ({
  backgroundColor: token.controlItemBgActive,
  borderColor: token.controlOutline
});
const genProCardStyle = (token) => {
  const { componentCls } = token;
  return {
    [componentCls]: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      width: "100%",
      marginBlock: 0,
      marginInline: 0,
      paddingBlock: 0,
      paddingInline: 0,
      backgroundColor: token.colorBgContainer,
      borderRadius: token.borderRadius,
      ...resetComponent?.(token),
      "&-box-shadow": {
        boxShadow: "0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017",
        borderColor: "transparent"
      },
      "&-col": {
        width: "100%"
      },
      "&-border": {
        border: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`
      },
      "&-hoverable": {
        cursor: "pointer",
        transition: "box-shadow 0.3s, border-color 0.3s",
        "&:hover": {
          borderColor: "transparent",
          boxShadow: "0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017"
        },
        [`&${componentCls}-checked:hover`]: {
          borderColor: token.controlOutline
        }
      },
      "&-checked": {
        ...genActiveStyle(token),
        "&::after": {
          position: "absolute",
          insetBlockStart: 2,
          insetInlineEnd: 2,
          width: 0,
          height: 0,
          border: `6px solid ${token.colorPrimary}`,
          borderBlockEnd: "6px solid transparent",
          borderInlineStart: "6px solid transparent",
          borderStartEndRadius: 2,
          content: '""'
        }
      },
      "&:focus": {
        ...genActiveStyle(token)
      },
      "&&-ghost": {
        backgroundColor: "transparent",
        [`> ${componentCls}`]: {
          "&-header": {
            paddingInlineEnd: 0,
            paddingBlockEnd: token.padding,
            paddingInlineStart: 0
          },
          "&-body": {
            paddingBlock: 0,
            paddingInline: 0,
            backgroundColor: "transparent"
          }
        }
      },
      "&&-split > &-body": {
        paddingBlock: 0,
        paddingInline: 0
      },
      "&&-contain-card > &-body": {
        display: "flex"
      },
      [`${componentCls}-body-direction-column`]: {
        flexDirection: "column"
      },
      [`${componentCls}-body-wrap`]: {
        flexWrap: "wrap"
      },
      "&&-collapse": {
        [`> ${componentCls}`]: {
          "&-header": {
            paddingBlockEnd: token.padding,
            borderBlockEnd: 0
          },
          "&-body": {
            display: "none"
          }
        }
      },
      [`${componentCls}-header`]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingInline: token.paddingLG,
        paddingBlock: token.padding,
        paddingBlockEnd: 0,
        "&-border": {
          "&": {
            paddingBlockEnd: token.padding
          },
          borderBlockEnd: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`
        },
        "&-collapsible": {
          cursor: "pointer"
        }
      },
      [`${componentCls}-title`]: {
        color: token.colorText,
        fontWeight: 500,
        fontSize: token.fontSizeLG,
        lineHeight: token.lineHeight
      },
      [`${componentCls}-extra`]: {
        color: token.colorText
      },
      [`${componentCls}-type-inner`]: {
        [`${componentCls}-header`]: {
          backgroundColor: token.colorFillAlter
        }
      },
      [`${componentCls}-collapsible-icon`]: {
        marginInlineEnd: token.marginXS,
        color: token.colorIconHover,
        ":hover": {
          color: token.colorPrimaryHover
        },
        "& svg": {
          transition: `transform ${token.motionDurationMid}`
        }
      },
      [`${componentCls}-body`]: {
        display: "block",
        boxSizing: "border-box",
        height: "100%",
        paddingInline: token.paddingLG,
        paddingBlock: token.padding,
        "&-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      },
      "&&-size-small": {
        [componentCls]: {
          "&-header": {
            paddingInline: token.paddingSM,
            paddingBlock: token.paddingXS,
            paddingBlockEnd: 0,
            "&-border": {
              paddingBlockEnd: token.paddingXS
            }
          },
          "&-title": {
            fontSize: token.fontSize
          },
          "&-body": {
            paddingInline: token.paddingSM,
            paddingBlock: token.paddingSM
          }
        },
        [`${componentCls}-header${componentCls}-header-collapsible`]: {
          paddingBlock: token.paddingXS
        }
      }
    },
    [`${componentCls}-col`]: {
      [`&${componentCls}-split-vertical`]: {
        borderInlineEnd: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`
      },
      [`&${componentCls}-split-horizontal`]: {
        borderBlockEnd: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`
      }
    },
    [`${componentCls}-tabs`]: {
      [`${token.ipassCls}-tabs-top > ${token.ipassCls}-tabs-nav`]: {
        marginBlockEnd: 0,
        [`${token.ipassCls}-tabs-nav-list`]: {
          marginBlockStart: token.marginXS,
          paddingInlineStart: token.padding
        }
      },
      [`${token.ipassCls}-tabs-bottom > ${token.ipassCls}-tabs-nav`]: {
        marginBlockEnd: 0,
        [`${token.ipassCls}-tabs-nav-list`]: {
          paddingInlineStart: token.padding
        }
      },
      [`${token.ipassCls}-tabs-left`]: {
        [`${token.ipassCls}-tabs-content-holder`]: {
          [`${token.ipassCls}-tabs-content`]: {
            [`${token.ipassCls}-tabs-tabpane`]: {
              paddingInlineStart: 0
            }
          }
        }
      },
      // 这里是为了保证 tabs 的高度和左侧的一致
      [`${token.ipassCls}-tabs-left > ${token.ipassCls}-tabs-nav`]: {
        marginInlineEnd: 0,
        [`${token.ipassCls}-tabs-nav-list`]: {
          paddingBlockStart: token.padding
        }
      },
      [`${token.ipassCls}-tabs-right`]: {
        [`${token.ipassCls}-tabs-content-holder`]: {
          [`${token.ipassCls}-tabs-content`]: {
            [`${token.ipassCls}-tabs-tabpane`]: {
              paddingInlineStart: 0
            }
          }
        }
      },
      [`${token.ipassCls}-tabs-right > ${token.ipassCls}-tabs-nav`]: {
        [`${token.ipassCls}-tabs-nav-list`]: {
          paddingBlockStart: token.padding
        }
      }
    }
  };
};
const GRID_COLUMNS = 24;
const genColStyle = (index, token) => {
  const { componentCls } = token;
  if (index === 0) {
    return {
      [`${componentCls}-col-0`]: {
        display: "none"
      }
    };
  }
  return {
    [`${componentCls}-col-${index}`]: {
      flexShrink: 0,
      width: `${index / GRID_COLUMNS * 100}%`
    }
  };
};
const genGridStyle = (token) => {
  return Array(GRID_COLUMNS + 1).fill(1).map((_, index) => genColStyle(index, token));
};
function useStyle$s(prefixCls) {
  return useStyle$A("ProCard", (token) => {
    const proCardToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genProCardStyle(proCardToken), genGridStyle(proCardToken)];
  });
}

const Card = React__default.forwardRef((props, ref) => {
  const {
    className,
    style,
    bodyStyle = {},
    headStyle = {},
    title,
    subTitle,
    extra,
    tip,
    wrap = false,
    layout,
    loading,
    gutter = 0,
    tooltip,
    split,
    headerBordered = false,
    bordered = false,
    boxShadow = false,
    children,
    size,
    actions,
    ghost = false,
    hoverable = false,
    direction,
    collapsed: controlCollapsed,
    collapsible = false,
    collapsibleIconRender,
    defaultCollapsed = false,
    onCollapse,
    checked,
    onChecked,
    tabs,
    type,
    ...rest
  } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const screens = Grid.useBreakpoint() || {
    lg: true,
    md: true,
    sm: true,
    xl: false,
    xs: false,
    xxl: false
  };
  const [collapsed, setCollapsed] = useMergedState(defaultCollapsed, {
    value: controlCollapsed,
    onChange: onCollapse
  });
  const responsiveArray = ["xxl", "xl", "lg", "md", "sm", "xs"];
  const ModifyTabItemsContent = useLegacyItems(tabs?.items, children, tabs);
  const getNormalizedGutter = (gut) => {
    const results = [0, 0];
    const normalizedGutter = Array.isArray(gut) ? gut : [gut, 0];
    normalizedGutter.forEach((g, index) => {
      if (typeof g === "object") {
        for (let i = 0; i < responsiveArray.length; i += 1) {
          const breakpoint = responsiveArray[i];
          if (screens[breakpoint] && g[breakpoint] !== void 0) {
            results[index] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index] = g || 0;
      }
    });
    return results;
  };
  const getStyle = (withStyle, appendStyle) => {
    return withStyle ? appendStyle : {};
  };
  const getColSpanStyle = (colSpan) => {
    let span = colSpan;
    if (typeof colSpan === "object") {
      for (let i = 0; i < responsiveArray.length; i += 1) {
        const breakpoint = responsiveArray[i];
        if (screens?.[breakpoint] && colSpan?.[breakpoint] !== void 0) {
          span = colSpan[breakpoint];
          break;
        }
      }
    }
    const colSpanStyle = getStyle(
      typeof span === "string" && /\d%|\dpx/i.test(span),
      {
        width: span,
        flexShrink: 0
      }
    );
    return { span, colSpanStyle };
  };
  const prefixCls = getPrefixCls("pro-card");
  const { wrapSSR, hashId } = useStyle$s(prefixCls);
  const [horizontalGutter, verticalGutter] = getNormalizedGutter(gutter);
  let containProCard = false;
  const childrenArray = React__default.Children.toArray(children);
  const childrenModified = childrenArray.map((element, index) => {
    if (element?.type?.isProCard) {
      containProCard = true;
      const { colSpan } = element.props;
      const { span, colSpanStyle } = getColSpanStyle(colSpan);
      const columnClassName = classNames([`${prefixCls}-col`], hashId, {
        [`${prefixCls}-split-vertical`]: split === "vertical" && index !== childrenArray.length - 1,
        [`${prefixCls}-split-horizontal`]: split === "horizontal" && index !== childrenArray.length - 1,
        [`${prefixCls}-col-${span}`]: typeof span === "number" && span >= 0 && span <= 24
      });
      const wrappedElement = wrapSSR(
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              ...colSpanStyle,
              ...getStyle(horizontalGutter > 0, {
                paddingInlineEnd: horizontalGutter / 2,
                paddingInlineStart: horizontalGutter / 2
              }),
              ...getStyle(verticalGutter > 0, {
                paddingBlockStart: verticalGutter / 2,
                paddingBlockEnd: verticalGutter / 2
              })
            },
            className: columnClassName,
            children: React__default.cloneElement(element)
          }
        )
      );
      return React__default.cloneElement(wrappedElement, {
        key: `pro-card-col-${element?.key || index}`
      });
    }
    return element;
  });
  const cardCls = classNames(`${prefixCls}`, className, hashId, {
    [`${prefixCls}-border`]: bordered,
    [`${prefixCls}-box-shadow`]: boxShadow,
    [`${prefixCls}-contain-card`]: containProCard,
    [`${prefixCls}-loading`]: loading,
    [`${prefixCls}-split`]: split === "vertical" || split === "horizontal",
    [`${prefixCls}-ghost`]: ghost,
    [`${prefixCls}-hoverable`]: hoverable,
    [`${prefixCls}-size-${size}`]: size,
    [`${prefixCls}-type-${type}`]: type,
    [`${prefixCls}-collapse`]: collapsed,
    [`${prefixCls}-checked`]: checked
  });
  const bodyCls = classNames(`${prefixCls}-body`, hashId, {
    [`${prefixCls}-body-center`]: layout === "center",
    [`${prefixCls}-body-direction-column`]: split === "horizontal" || direction === "column",
    [`${prefixCls}-body-wrap`]: wrap && containProCard
  });
  const cardBodyStyle = bodyStyle;
  const loadingDOM = React__default.isValidElement(loading) ? loading : /* @__PURE__ */ jsx(
    Loading,
    {
      prefix: prefixCls,
      style: bodyStyle.padding === 0 || bodyStyle.padding === "0px" ? { padding: 24 } : void 0
    }
  );
  const collapsibleButton = collapsible && controlCollapsed === void 0 && (collapsibleIconRender ? collapsibleIconRender({ collapsed }) : /* @__PURE__ */ jsx(
    ArrowForwardIosIcon,
    {
      rotate: !collapsed ? 90 : void 0,
      className: `${prefixCls}-collapsible-icon ${hashId}`.trim()
    }
  ));
  return wrapSSR(
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cardCls,
        style,
        ref,
        onClick: (e) => {
          onChecked?.(e);
          rest?.onClick?.(e);
          e.stopPropagation();
        },
        ...omit(rest, ["prefixCls", "colSpan"]),
        children: [
          (title || extra || collapsibleButton) && /* @__PURE__ */ jsxs(
            "div",
            {
              className: classNames(`${prefixCls}-header`, hashId, {
                [`${prefixCls}-header-border`]: headerBordered || type === "inner",
                [`${prefixCls}-header-collapsible`]: collapsibleButton
              }),
              style: headStyle,
              onClick: () => {
                if (collapsibleButton)
                  setCollapsed(!collapsed);
              },
              children: [
                /* @__PURE__ */ jsxs("div", { className: `${prefixCls}-title ${hashId}`.trim(), children: [
                  collapsibleButton,
                  /* @__PURE__ */ jsx(
                    LabelIconTip,
                    {
                      label: title,
                      tooltip: tooltip || tip,
                      subTitle
                    }
                  )
                ] }),
                extra && /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `${prefixCls}-extra ${hashId}`.trim(),
                    onClick: (e) => e.stopPropagation(),
                    children: extra
                  }
                )
              ]
            }
          ),
          tabs ? /* @__PURE__ */ jsx("div", { className: `${prefixCls}-tabs ${hashId}`.trim(), children: /* @__PURE__ */ jsx(
            Tabs,
            {
              onChange: tabs.onChange,
              ...tabs,
              items: ModifyTabItemsContent,
              children: loading ? loadingDOM : children
            }
          ) }) : /* @__PURE__ */ jsx("div", { className: bodyCls, style: cardBodyStyle, children: loading ? loadingDOM : childrenModified }),
          actions ? /* @__PURE__ */ jsx(ProCardActions, { actions, prefixCls }) : null
        ]
      }
    )
  );
});

const genDividerStyle = (token) => {
  const { componentCls } = token;
  return {
    [componentCls]: {
      "&-divider": {
        flex: "none",
        width: token.lineWidth,
        marginInline: token.marginXS,
        marginBlock: token.marginLG,
        backgroundColor: token.colorSplit,
        "&-horizontal": {
          width: "initial",
          height: token.lineWidth,
          marginInline: token.marginLG,
          marginBlock: token.marginXS
        }
      },
      "&&-size-small &-divider": {
        marginBlock: token.marginLG,
        marginInline: token.marginXS,
        "&-horizontal": {
          marginBlock: token.marginXS,
          marginInline: token.marginLG
        }
      }
    }
  };
};
function useStyle$r(prefixCls) {
  return useStyle$A("ProCardDivider", (token) => {
    const proCardDividerToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genDividerStyle(proCardDividerToken)];
  });
}

const ProCardDivider = (props) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const proCardPrefixCls = getPrefixCls("pro-card");
  const prefixCls = `${proCardPrefixCls}-divider`;
  const { wrapSSR, hashId } = useStyle$r(proCardPrefixCls);
  const { className, style = {}, type } = props;
  const classString = classNames(prefixCls, className, hashId, {
    [`${prefixCls}-${type}`]: type
  });
  return wrapSSR(/* @__PURE__ */ jsx("div", { className: classString, style }));
};

const genProStyle$5 = (token) => {
  return {
    [token.componentCls]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      marginBlock: token.marginLG,
      marginInline: 0,
      color: token.colorText,
      fontWeight: "500",
      fontSize: "20px",
      lineHeight: "38px"
    }
  };
};
function useStyle$q(prefixCls) {
  return useStyle$A("ProCardOperation", (token) => {
    const proToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genProStyle$5(proToken)];
  });
}

const ProCardOperation = (props) => {
  const { className, style = {}, children } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls("pro-card-operation");
  const { wrapSSR, hashId } = useStyle$q(prefixCls);
  const classString = classNames(prefixCls, className, hashId);
  return wrapSSR(
    /* @__PURE__ */ jsx("div", { className: classString, style, children })
  );
};

const genProStyle$4 = (token) => {
  return {
    [token.componentCls]: {
      "&-chart": {
        display: "flex",
        flexDirection: "column",
        marginBlockStart: 8,
        marginBlockEnd: 8,
        "&-left": { marginBlockStart: 0, marginInlineEnd: "16px" },
        "&-right": { marginBlockStart: 0, marginInlineStart: "16px" }
      },
      "&-content": {
        display: "flex",
        flexDirection: "column",
        "&-horizontal": {
          flexDirection: "row",
          [`${token.componentCls}-chart`]: {
            alignItems: "center",
            alignSelf: "flex-start"
          }
        }
      },
      "&-footer": {
        marginBlockStart: 8,
        paddingBlockStart: "16px",
        borderBlockStart: `rgba(0, 0, 0, 0.08) solid ${token.colorBorder}`
      }
    }
  };
};
function useStyle$p(prefixCls) {
  return useStyle$A("StatisticCard", (token) => {
    const proListToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genProStyle$4(proListToken)];
  });
}

const StatisticCard = (props) => {
  const {
    children,
    statistic,
    className,
    chart,
    chartPlacement,
    footer,
    ...others
  } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls("pro-statistic-card");
  const { wrapSSR, hashId } = useStyle$p(prefixCls);
  const classString = classNames(prefixCls, className, hashId);
  const statisticDom = statistic && /* @__PURE__ */ jsx(Statistic, { layout: "vertical", ...statistic });
  const chartCls = classNames(`${prefixCls}-chart`, hashId, {
    [`${prefixCls}-chart-left`]: chartPlacement === "left" && chart && statistic,
    [`${prefixCls}-chart-right`]: chartPlacement === "right" && chart && statistic
  });
  const chartDom = chart && /* @__PURE__ */ jsx("div", { className: chartCls, children: chart });
  const contentCls = classNames(`${prefixCls}-content `, hashId, {
    [`${prefixCls}-content-horizontal`]: chartPlacement === "left" || chartPlacement === "right"
  });
  const contentDom = (chartDom || statisticDom) && (chartPlacement === "left" ? /* @__PURE__ */ jsxs("div", { className: contentCls, children: [
    chartDom,
    statisticDom
  ] }) : /* @__PURE__ */ jsxs("div", { className: contentCls, children: [
    statisticDom,
    chartDom
  ] }));
  const footerDom = footer && /* @__PURE__ */ jsx("div", { className: `${prefixCls}-footer ${hashId}`.trim(), children: footer });
  return wrapSSR(
    /* @__PURE__ */ jsxs(Card, { className: classString, ...others, children: [
      contentDom,
      children,
      footerDom
    ] })
  );
};
const Group$2 = (props) => /* @__PURE__ */ jsx(StatisticCard, { bodyStyle: { padding: 0 }, ...props });
StatisticCard.Statistic = Statistic;
StatisticCard.Divider = ProCardDivider;
StatisticCard.Operation = ProCardOperation;
StatisticCard.isProCard = true;
StatisticCard.Group = Group$2;

const Group$1 = (props) => /* @__PURE__ */ jsx(Card, { bodyStyle: { padding: 0 }, ...props });
const ProCard = Card;
ProCard.isProCard = true;
ProCard.Divider = ProCardDivider;
ProCard.TabPane = TabPane;
ProCard.Group = Group$1;

const useFetchData$1 = (getData, options) => {
  const {
    onRequestError,
    effects,
    manual,
    dataSource,
    defaultDataSource,
    onDataSourceChange
  } = options || {};
  const [entity, setEntity] = useMergedState(defaultDataSource, {
    value: dataSource,
    onChange: onDataSourceChange
  });
  const [loading, setLoading] = useMergedState(
    options?.loading,
    {
      value: options?.loading,
      onChange: options?.onLoadingChange
    }
  );
  const updateDataAndLoading = (data) => {
    setEntity(data);
    setLoading(false);
  };
  const fetchList = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const { data, success } = await getData() || {};
      if (success !== false) {
        updateDataAndLoading(data);
      }
    } catch (e) {
      if (onRequestError === void 0)
        throw new Error(e);
      else
        onRequestError(e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (manual) {
      return;
    }
    fetchList();
  }, [...effects || [], manual]);
  return {
    dataSource: entity,
    setDataSource: setEntity,
    loading,
    reload: () => {
      return fetchList();
    }
  };
};

const getDataFromConfig = (item, entity) => {
  const { dataIndex } = item;
  if (dataIndex) {
    const data = Array.isArray(dataIndex) ? get$1(entity, dataIndex) : entity[dataIndex];
    if (data !== void 0 || data !== null) {
      return data;
    }
  }
  return item.children;
};
const FieldRender = (props) => {
  const {
    valueEnum,
    action,
    index,
    text,
    entity,
    render,
    valueType,
    plain,
    dataIndex,
    request,
    renderFormItem,
    params
  } = props;
  const form = ProForm.useFormInstance();
  const { token } = proTheme.useToken?.();
  const fieldConfig = {
    mode: "read",
    text,
    valueEnum,
    proFieldProps: {
      emptyText: props.emptyText,
      render: render ? () => render?.(text, entity, index, action, {
        ...props,
        type: "descriptions"
      }) : void 0
    },
    ignoreFormItem: true,
    valueType,
    request,
    params,
    plain
  };
  if (valueType === "option") {
    const fieldProps = getFieldPropsOrFormItemProps(
      props.fieldProps,
      void 0,
      {
        ...props,
        rowKey: dataIndex,
        isEditable: false
      }
    );
    return /* @__PURE__ */ jsx(ProFormField, { name: dataIndex, ...fieldConfig, fieldProps });
  }
  const renderDom = () => {
    const formItemProps = getFieldPropsOrFormItemProps(
      props.formItemProps,
      form,
      {
        ...props,
        rowKey: dataIndex,
        isEditable: true
      }
    );
    const fieldProps = getFieldPropsOrFormItemProps(
      props.fieldProps,
      form,
      {
        ...props,
        rowKey: dataIndex,
        isEditable: true
      }
    );
    const dom = renderFormItem ? renderFormItem?.(
      {
        ...props,
        type: "descriptions"
      },
      {
        isEditable: true,
        recordKey: dataIndex,
        record: form.getFieldValue(
          [dataIndex].flat(1)
        ),
        defaultRender: () => /* @__PURE__ */ jsx(ProFormField, { ...fieldConfig, fieldProps }),
        type: "descriptions"
      },
      form
    ) : void 0;
    return /* @__PURE__ */ jsx(
      "div",
      {
        style: { display: "flex", gap: token.marginXS, alignItems: "center" },
        children: /* @__PURE__ */ jsx(
          InlineErrorFormItem,
          {
            name: dataIndex,
            ...formItemProps,
            style: {
              margin: 0,
              ...formItemProps?.style || {}
            },
            initialValue: text || formItemProps?.initialValue,
            children: dom || /* @__PURE__ */ jsx(
              ProFormField,
              {
                ...fieldConfig,
                proFieldProps: { ...fieldConfig.proFieldProps },
                fieldProps
              }
            )
          }
        )
      }
    );
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        marginTop: -5,
        marginBottom: -5,
        marginLeft: 0,
        marginRight: 0
      },
      children: renderDom()
    }
  );
};
const schemaToDescriptionsItem = (items, entity, action) => {
  const options = [];
  const children = items?.map?.((item, index) => {
    if (React__default.isValidElement(item)) {
      return {
        children: item
      };
    }
    const {
      valueEnum,
      render,
      renderText,
      plain,
      dataIndex,
      request,
      params,
      editable,
      ...restItem
    } = item;
    const defaultData = getDataFromConfig(item, entity) ?? restItem.children;
    const text = renderText ? renderText(defaultData, entity, index, action) : defaultData;
    const title = typeof restItem.title === "function" ? restItem.title(item, "descriptions", null) : restItem.title;
    const valueType = typeof restItem.valueType === "function" ? restItem.valueType(
      entity || {},
      "descriptions"
    ) : restItem.valueType;
    const Component = React__default.Fragment;
    const contentDom = genCopyable(text, item, text);
    const field = /* @__PURE__ */ createElement(
      Descriptions.Item,
      {
        ...restItem,
        key: restItem.key || restItem.label?.toString() || index,
        label: (title || restItem.label || restItem.tooltip || restItem.tip) && /* @__PURE__ */ jsx(
          LabelIconTip,
          {
            label: title || restItem.label,
            tooltip: restItem.tooltip || restItem.tip,
            ellipsis: item.ellipsis
          }
        )
      },
      /* @__PURE__ */ jsx(Component, { children: /* @__PURE__ */ jsx(
        FieldRender,
        {
          ...item,
          dataIndex: item.dataIndex || index,
          text: contentDom,
          valueType,
          entity,
          index,
          action
        }
      ) })
    );
    if (valueType === "option") {
      options.push(field);
      return null;
    }
    return field;
  }).filter((item) => item);
  return {
    // 空數組傳遞還是會被判定為有值
    options: options?.length ? options : null,
    children
  };
};
const ProDescriptionsItem = (props) => {
  return /* @__PURE__ */ jsx(Descriptions.Item, { ...props, children: props.children });
};
ProDescriptionsItem.displayName = "ProDescriptionsItem";
const DefaultProDescriptionsDom = (dom) => dom.children;
const ProDescriptions = (props) => {
  const {
    request,
    columns,
    params = {},
    dataSource,
    onDataSourceChange,
    formProps,
    loading,
    onLoadingChange,
    actionRef,
    onRequestError,
    ...rest
  } = props;
  const context = useContext(ConfigProvider.ConfigContext);
  const action = useFetchData$1(
    async () => {
      const data = request ? await request(params) : { data: {} };
      return data;
    },
    {
      onRequestError,
      effects: [stringify(params)],
      manual: !request,
      dataSource,
      loading,
      onLoadingChange,
      onDataSourceChange
    }
  );
  useEffect(() => {
    if (actionRef) {
      actionRef.current = {
        reload: action.reload
      };
    }
  }, [action, actionRef]);
  if (action.loading || action.loading === void 0 && request) {
    return /* @__PURE__ */ jsx(ProSkeleton, { type: "descriptions", list: false, pageHeader: false });
  }
  const getColumns = () => {
    const childrenColumns = toArray(props.children).filter(Boolean).map((item) => {
      if (!React__default.isValidElement(item)) {
        return item;
      }
      const {
        valueEnum,
        valueType,
        dataIndex,
        ellipsis,
        copyable,
        request: itemRequest
      } = item?.props;
      if (!valueType && !valueEnum && !dataIndex && !itemRequest && !ellipsis && !copyable && // @ts-ignore
      item.type.displayName !== "ProDescriptionsItem") {
        return item;
      }
      return {
        ...item?.props,
        entity: dataSource
      };
    });
    return [...columns || [], ...childrenColumns].filter((item) => {
      if (!item)
        return false;
      if (item?.valueType && ["index", "indexBorder"].includes(item?.valueType)) {
        return false;
      }
      return !item?.hideInDescriptions;
    }).sort((a, b) => {
      if (b.order || a.order) {
        return (b.order || 0) - (a.order || 0);
      }
      return (b.index || 0) - (a.index || 0);
    });
  };
  const { options, children } = schemaToDescriptionsItem(
    getColumns(),
    action.dataSource || {},
    actionRef?.current || action
  );
  const FormComponent = DefaultProDescriptionsDom;
  let title = null;
  if (rest.title || rest.tooltip || rest.tip) {
    title = /* @__PURE__ */ jsx(LabelIconTip, { label: rest.title, tooltip: rest.tooltip || rest.tip });
  }
  const className = context.getPrefixCls("pro-descriptions");
  return /* @__PURE__ */ jsx(ErrorBoundary, { children: /* @__PURE__ */ jsx(
    FormComponent,
    {
      component: false,
      submitter: false,
      ...formProps,
      onFinish: void 0,
      children: /* @__PURE__ */ jsx(
        Descriptions,
        {
          className,
          ...rest,
          contentStyle: {
            minWidth: 0
          },
          extra: rest.extra ? /* @__PURE__ */ jsxs(CompoundedSpace, { children: [
            options,
            rest.extra
          ] }) : options,
          title,
          children
        }
      )
    },
    "form"
  ) });
};
ProDescriptions.Item = ProDescriptionsItem;

const Status = {
  Success: ({ children }) => /* @__PURE__ */ jsx(Badge$1, { color: "success", children }),
  Error: ({ children }) => /* @__PURE__ */ jsx(Badge$1, { color: "error", children }),
  Default: ({ children }) => /* @__PURE__ */ jsx(Badge$1, { color: "default", children }),
  Processing: ({ children }) => /* @__PURE__ */ jsx(Badge$1, { color: "info", children }),
  Warning: ({ children }) => /* @__PURE__ */ jsx(Badge$1, { color: "warning", children }),
  success: ({ children }) => /* @__PURE__ */ jsx(Badge$1, { color: "success", children }),
  error: ({ children }) => /* @__PURE__ */ jsx(Badge$1, { color: "error", children }),
  default: ({ children }) => /* @__PURE__ */ jsx(Badge$1, { color: "default", children }),
  processing: ({ children }) => /* @__PURE__ */ jsx(Badge$1, { color: "info", children }),
  warning: ({ children }) => /* @__PURE__ */ jsx(Badge$1, { color: "warning", children })
};
const ProFieldBadgeColor = ({
  color,
  children
}) => /* @__PURE__ */ jsx(Badge$1, { color, children });

const getValueOrLabel = (valueMap, v) => {
  if (typeof v !== "object") {
    return valueMap[v] || v;
  }
  return valueMap[v?.value] || v.label;
};
const LightSelect = (props, ref) => {
  const {
    label,
    prefixCls: customizePrefixCls,
    onChange,
    value,
    mode,
    children,
    defaultValue,
    size,
    showSearch,
    disabled,
    style,
    className,
    bordered,
    options,
    onSearch,
    allowClear,
    labelInValue,
    fieldNames,
    lightLabel,
    labelTrigger,
    optionFilterProp,
    optionLabelProp = "",
    ...restProps
  } = props;
  const { placeholder = label } = props;
  const { label: labelPropsName = "label", value: valuePropsName = "value" } = fieldNames || {};
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls("pro-field-select-light-select");
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const { wrapSSR, hashId } = useStyle$A("LightSelect", (token) => {
    return {
      [`.${prefixCls}`]: {
        [`${token.ipassCls}-select`]: {
          position: "absolute",
          width: "153px",
          height: "28px",
          visibility: "hidden",
          "&-selector": {
            height: 28
          }
        },
        [`&.${prefixCls}-searchable`]: {
          [`${token.ipassCls}-select`]: {
            width: "200px",
            "&-selector": {
              height: 28
            }
          }
        }
      }
    };
  });
  const valueMap = useMemo(() => {
    const values = {};
    options?.forEach((item) => {
      const optionLabel = item[optionLabelProp] || item[labelPropsName];
      const optionValue = item[valuePropsName];
      values[optionValue] = optionLabel || optionValue;
    });
    return values;
  }, [labelPropsName, options, valuePropsName, optionLabelProp]);
  const filterValue = Array.isArray(value) ? value.map((v) => getValueOrLabel(valueMap, v)) : getValueOrLabel(valueMap, value);
  return wrapSSR(
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: classNames(
          prefixCls,
          hashId,
          {
            [`${prefixCls}-searchable`]: showSearch
          },
          `${prefixCls}-container-${restProps.placement || "bottomLeft"}`,
          className
        ),
        style,
        onClick: (e) => {
          if (disabled)
            return;
          const isLabelClick = lightLabel?.current?.labelRef?.current?.contains(
            e.target
          );
          if (isLabelClick) {
            setOpen(!open);
          } else {
            setOpen(true);
          }
        },
        children: [
          /* @__PURE__ */ jsx(
            Select,
            {
              popupMatchSelectWidth: false,
              ...restProps,
              allowClear,
              value,
              mode,
              labelInValue,
              size,
              disabled,
              onChange: (v, option) => {
                onChange?.(v, option);
                if (mode !== "multiple") {
                  setOpen(false);
                }
              },
              bordered,
              showSearch,
              onSearch,
              style,
              dropdownRender: (menuNode) => {
                return /* @__PURE__ */ jsxs("div", { ref, children: [
                  showSearch && /* @__PURE__ */ jsx("div", { style: { margin: "4px 8px" }, children: /* @__PURE__ */ jsx(
                    Input,
                    {
                      value: keyword,
                      allowClear: !!allowClear,
                      onChange: (e) => {
                        setKeyword(e.target.value);
                        onSearch?.(e.target.value);
                      },
                      onKeyDown: (e) => {
                        e.stopPropagation();
                      },
                      style: { width: "100%" },
                      prefix: /* @__PURE__ */ jsx(SearchIcon, {})
                    }
                  ) }),
                  menuNode
                ] });
              },
              open,
              onDropdownVisibleChange: (isOpen) => {
                if (!isOpen) {
                  setKeyword("");
                }
                if (!labelTrigger) {
                  setOpen(isOpen);
                }
                restProps?.onDropdownVisibleChange?.(isOpen);
              },
              prefixCls: customizePrefixCls,
              options: onSearch || !keyword ? options : options?.filter((o) => {
                if (optionFilterProp) {
                  return toArray(o[optionFilterProp]).join("").toLowerCase().includes(keyword);
                }
                return String(o[labelPropsName])?.toLowerCase()?.includes(keyword?.toLowerCase()) || o[valuePropsName]?.toString()?.toLowerCase()?.includes(keyword?.toLowerCase());
              })
            }
          ),
          /* @__PURE__ */ jsx(
            FieldLabel,
            {
              ellipsis: true,
              label,
              placeholder,
              disabled,
              bordered,
              allowClear: !!allowClear,
              value: filterValue || value?.label || value,
              onClear: () => {
                onChange?.(void 0, void 0);
              },
              ref: lightLabel
            }
          )
        ]
      }
    )
  );
};
const LightSelect$1 = React__default.forwardRef(LightSelect);

const SearchSelect$1 = (props, ref) => {
  const {
    optionItemRender,
    mode,
    onSearch,
    onFocus,
    onChange,
    autoClearSearchValue = true,
    searchOnFocus = false,
    resetAfterSelect = false,
    fetchDataOnSearch = true,
    optionFilterProp = "label",
    optionLabelProp = "label",
    className,
    disabled,
    options,
    fetchData,
    resetData,
    prefixCls: customizePrefixCls,
    onClear,
    searchValue: propsSearchValue,
    showSearch,
    fieldNames,
    defaultSearchValue,
    ...restProps
  } = props;
  const {
    label: labelPropsName = "label",
    value: valuePropsName = "value",
    options: optionsPropsName = "options"
  } = fieldNames || {};
  const [searchValue, setSearchValue] = useState(
    propsSearchValue ?? defaultSearchValue
  );
  const selectRef = useRef();
  useImperativeHandle(ref, () => selectRef.current);
  useEffect(() => {
    if (restProps.autoFocus) {
      selectRef?.current?.focus();
    }
  }, [restProps.autoFocus]);
  useEffect(() => {
    setSearchValue(propsSearchValue);
  }, [propsSearchValue]);
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls("pro-filed-search-select", customizePrefixCls);
  const classString = classNames(prefixCls, className, {
    [`${prefixCls}-disabled`]: disabled
  });
  const getMergeValue = (value, option) => {
    if (Array.isArray(value) && value.length > 0) {
      return value.map((item, index) => {
        const optionItem = option?.[index];
        const dataItem = optionItem?.["data-item"] || {};
        return {
          ...dataItem,
          ...item
        };
      });
    }
    return [];
  };
  const genOptions = (mapOptions) => {
    return mapOptions.map((item, index) => {
      const {
        className: itemClassName,
        optionType,
        ...resetItem
      } = item;
      const label = item[labelPropsName];
      const value = item[valuePropsName];
      const itemOptions = item[optionsPropsName] ?? [];
      if (optionType === "optGroup" || item.options) {
        return {
          label,
          ...resetItem,
          data_title: label,
          title: label,
          key: value ?? label?.toString(),
          children: genOptions(itemOptions)
        };
      }
      return {
        title: label,
        ...resetItem,
        data_title: label,
        value: value ?? index,
        key: value ?? label?.toString(),
        "data-item": item,
        className: `${prefixCls}-option ${itemClassName || ""}`.trim(),
        label: optionItemRender?.(item) || label
      };
    });
  };
  return /* @__PURE__ */ jsx(
    Select,
    {
      ref: selectRef,
      className: classString,
      allowClear: true,
      autoClearSearchValue,
      disabled,
      mode,
      showSearch,
      searchValue,
      optionFilterProp,
      optionLabelProp,
      onClear: () => {
        onClear?.();
        fetchData(void 0);
        if (showSearch) {
          setSearchValue(void 0);
        }
      },
      ...restProps,
      filterOption: restProps.filterOption == false ? false : (inputValue, option) => {
        if (restProps.filterOption && typeof restProps.filterOption === "function") {
          return restProps.filterOption(inputValue, {
            ...option,
            label: option?.data_title
          });
        }
        return !!(option?.data_title?.toString().toLowerCase().includes(inputValue.toLowerCase()) || option?.label?.toString().toLowerCase().includes(inputValue.toLowerCase()) || option?.value?.toString().toLowerCase().includes(inputValue.toLowerCase()));
      },
      onSearch: showSearch ? (value) => {
        if (fetchDataOnSearch) {
          fetchData(value);
        }
        onSearch?.(value);
        setSearchValue(value);
      } : void 0,
      onChange: (value, optionList, ...rest) => {
        if (showSearch && autoClearSearchValue) {
          fetchData(void 0);
          onSearch?.("");
          setSearchValue(void 0);
        }
        if (!props.labelInValue) {
          onChange?.(value, optionList, ...rest);
          return;
        }
        if (mode !== "multiple") {
          const dataItem = optionList && optionList["data-item"];
          if (!value || !dataItem) {
            onChange?.(value, optionList, ...rest);
          } else {
            onChange?.({ ...value, ...dataItem }, optionList, ...rest);
          }
          return;
        }
        const mergeValue = getMergeValue(value, optionList);
        onChange?.(mergeValue, optionList, ...rest);
        if (resetAfterSelect)
          resetData();
      },
      onFocus: (e) => {
        if (searchOnFocus) {
          fetchData(searchValue);
        }
        onFocus?.(e);
      },
      options: genOptions(options || [])
    }
  );
};
const SearchSelect$2 = React__default.forwardRef(SearchSelect$1);

const ObjToMap = (value) => {
  if (getType(value) === "map") {
    return value;
  }
  return new Map(Object.entries(value || {}));
};
const proFieldParsingText = (text, valueEnumParams, key) => {
  if (Array.isArray(text)) {
    return /* @__PURE__ */ jsx(CompoundedSpace, { split: ",", size: 2, wrap: true, children: text.map(
      (value, index) => (
        // @ts-ignore
        proFieldParsingText(value, valueEnumParams, index)
      )
    ) }, key);
  }
  const valueEnum = ObjToMap(valueEnumParams);
  if (!valueEnum.has(text) && !valueEnum.has(`${text}`)) {
    return text?.label || text;
  }
  const domText = valueEnum.get(text) || valueEnum.get(`${text}`);
  if (!domText) {
    return /* @__PURE__ */ jsx(React__default.Fragment, { children: text?.label || text }, key);
  }
  const { status, color } = domText;
  const Status$1 = Status[status || "Init"];
  if (Status$1) {
    return /* @__PURE__ */ jsx(Status$1, { children: domText.text }, key);
  }
  if (color) {
    return /* @__PURE__ */ jsx(ProFieldBadgeColor, { color, children: domText.text }, key);
  }
  return /* @__PURE__ */ jsx(React__default.Fragment, { children: domText.text || domText }, key);
};
const Highlight = ({ label, words }) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const lightCls = getPrefixCls("pro-select-item-option-content-light");
  const optionCls = getPrefixCls("pro-select-item-option-content");
  const { wrapSSR } = useStyle$A("Highlight", (token) => {
    return {
      [`.${lightCls}`]: {
        color: token.colorPrimary
      },
      [`.${optionCls}`]: {
        flex: "auto",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
      }
    };
  });
  const matchKeywordsRE = new RegExp(
    words.map((word) => word.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")).join("|"),
    "gi"
  );
  let matchText = label;
  const elements = [];
  while (matchText.length) {
    const match = matchKeywordsRE.exec(matchText);
    if (!match) {
      elements.push(matchText);
      break;
    }
    const start = match.index;
    const matchLength = match[0].length + start;
    elements.push(
      matchText.slice(0, start),
      React__default.createElement(
        "span",
        {
          className: lightCls
        },
        matchText.slice(start, matchLength)
      )
    );
    matchText = matchText.slice(matchLength);
  }
  return wrapSSR(
    React__default.createElement(
      "div",
      {
        title: label,
        className: optionCls
      },
      ...elements
    )
  );
};
function getType(obj) {
  const type = Object.prototype.toString.call(obj).match(/^\[object (.*)\]$/)[1].toLowerCase();
  if (type === "string" && typeof obj === "object")
    return "object";
  if (obj === null)
    return "null";
  if (obj === void 0)
    return "undefined";
  return type;
}
function filerByItem(item, keyWords) {
  if (!keyWords)
    return true;
  if (item?.label?.toString().toLowerCase().includes(keyWords.toLowerCase()) || item?.value?.toString().toLowerCase().includes(keyWords.toLowerCase())) {
    return true;
  }
  if (item.children || item.options) {
    const findItem = [...item.children || [], item.options || []].find(
      (mapItem) => {
        return filerByItem(mapItem, keyWords);
      }
    );
    if (findItem)
      return true;
  }
  return false;
}
const proFieldParsingValueEnumToArray = (valueEnumParams) => {
  const enumArray = [];
  const valueEnum = ObjToMap(valueEnumParams);
  valueEnum.forEach((_, key) => {
    const value = valueEnum.get(key) || valueEnum.get(`${key}`);
    if (!value) {
      return;
    }
    if (typeof value === "object" && value?.text) {
      enumArray.push({
        text: value?.text,
        value: key,
        label: value?.text,
        disabled: value.disabled
      });
      return;
    }
    enumArray.push({
      text: value,
      value: key
    });
  });
  return enumArray;
};
const useFieldFetchData = (props) => {
  const { cacheForSwr, fieldProps } = props;
  const [keyWords, setKeyWords] = useState(
    props.defaultKeyWords
  );
  const [cacheKey] = useState(() => {
    if (props.proFieldKey) {
      return props.proFieldKey.toString();
    }
    if (props.request) {
      return nanoid();
    }
    return "no-fetch";
  });
  const proFieldKeyRef = useRef(cacheKey);
  const getOptionsFormValueEnum = useRefFunction(
    (coverValueEnum) => {
      return proFieldParsingValueEnumToArray(ObjToMap(coverValueEnum)).map(
        ({ value, text, ...rest }) => ({
          label: text,
          value,
          key: value,
          ...rest
        })
      );
    }
  );
  const defaultOptions = useDeepCompareMemo(() => {
    if (!fieldProps)
      return void 0;
    const data2 = fieldProps?.options || fieldProps?.treeData;
    if (!data2)
      return void 0;
    const { children, label, value } = fieldProps.fieldNames || {};
    const traverseFieldKey = (_options, type) => {
      if (!_options?.length)
        return;
      const length = _options.length;
      let i = 0;
      while (i < length) {
        const cur = _options[i++];
        if (cur[children] || cur[label] || cur[value]) {
          cur[type] = cur[type === "children" ? children : type === "label" ? label : value];
          traverseFieldKey(cur[children], type);
        }
      }
    };
    if (children)
      traverseFieldKey(data2, "children");
    if (label)
      traverseFieldKey(data2, "label");
    if (value)
      traverseFieldKey(data2, "value");
    return data2;
  }, [fieldProps]);
  const [options, setOptions] = useMergedState(
    () => {
      if (props.valueEnum) {
        return getOptionsFormValueEnum(props.valueEnum);
      }
      return [];
    },
    {
      value: defaultOptions
    }
  );
  useDeepCompareEffect(() => {
    if (!props.valueEnum || props.fieldProps?.options || props.fieldProps?.treeData)
      return;
    setOptions(getOptionsFormValueEnum(props.valueEnum));
  }, [props.valueEnum]);
  const swrKey = useDebounceValue(
    [proFieldKeyRef.current, props.params, keyWords],
    props.debounceTime ?? props?.fieldProps?.debounceTime ?? 0,
    [props.params, keyWords]
  );
  const {
    data,
    mutate: setLocaleData,
    isValidating
  } = useSWR(
    () => {
      if (!props.request) {
        return null;
      }
      return swrKey;
    },
    ([, params, kw]) => props.request(
      {
        ...params,
        keyWords: kw
      },
      props
    ),
    {
      revalidateIfStale: !cacheForSwr,
      // 打開 cacheForSwr 的時候才應該支持兩個功能
      revalidateOnReconnect: cacheForSwr,
      shouldRetryOnError: false,
      // @todo 這個功能感覺應該搞個API出來
      revalidateOnFocus: false
    }
  );
  const resOptions = useMemo(() => {
    const opt = options?.map((item) => {
      if (typeof item === "string") {
        return {
          label: item,
          value: item
        };
      }
      if (item.children || item.options) {
        const childrenOptions = [
          ...item.children || [],
          ...item.options || []
        ].filter((mapItem) => {
          return filerByItem(mapItem, keyWords);
        });
        return {
          ...item,
          children: childrenOptions,
          options: childrenOptions
        };
      }
      return item;
    });
    if (props.fieldProps?.filterOption === true || props.fieldProps?.filterOption === void 0) {
      return opt?.filter((item) => {
        if (!item)
          return false;
        if (!keyWords)
          return true;
        return filerByItem(item, keyWords);
      });
    }
    return opt;
  }, [options, keyWords, props.fieldProps?.filterOption]);
  return [
    isValidating,
    props.request ? data : resOptions,
    (fetchKeyWords) => {
      setKeyWords(fetchKeyWords);
    },
    () => {
      setKeyWords(void 0);
      setLocaleData([], false);
    }
  ];
};
const FieldSelect = (props, ref) => {
  const {
    mode,
    valueEnum,
    render,
    renderFormItem,
    request,
    fieldProps,
    plain,
    children,
    light,
    proFieldKey,
    params,
    label,
    bordered,
    id,
    lightLabel,
    labelTrigger,
    ...rest
  } = props;
  const inputRef = useRef();
  const intl = useIntl();
  const keyWordsRef = useRef("");
  const { fieldNames } = fieldProps;
  useEffect(() => {
    keyWordsRef.current = fieldProps?.searchValue;
  }, [fieldProps?.searchValue]);
  const [loading, options, fetchData, resetData] = useFieldFetchData(props);
  const { componentSize } = ConfigProvider?.useConfig?.() || {
    componentSize: "middle"
  };
  useImperativeHandle(
    ref,
    () => ({
      ...inputRef.current || {},
      fetchData: (keyWord) => fetchData(keyWord)
    }),
    [fetchData]
  );
  const optionsValueEnum = useMemo(() => {
    if (mode !== "read")
      return;
    const {
      label: labelPropsName = "label",
      value: valuePropsName = "value",
      options: optionsPropsName = "options"
    } = fieldNames || {};
    const valuesMap = /* @__PURE__ */ new Map();
    const traverseOptions = (_options) => {
      if (!_options?.length) {
        return valuesMap;
      }
      const length = _options.length;
      let i = 0;
      while (i < length) {
        const cur = _options[i++];
        valuesMap.set(cur[valuePropsName], cur[labelPropsName]);
        traverseOptions(cur[optionsPropsName]);
      }
      return valuesMap;
    };
    return traverseOptions(options);
  }, [fieldNames, mode, options]);
  if (mode === "read") {
    const dom = /* @__PURE__ */ jsx(Fragment, { children: proFieldParsingText(
      rest.text,
      ObjToMap(
        valueEnum || optionsValueEnum
      )
    ) });
    if (render) {
      return render(rest.text, { mode, ...fieldProps }, dom) ?? null;
    }
    return dom;
  }
  if (mode === "edit" || mode === "update") {
    const renderDom = () => {
      if (light) {
        return /* @__PURE__ */ jsx(
          LightSelect$1,
          {
            bordered,
            id,
            loading,
            ref: inputRef,
            allowClear: true,
            size: componentSize,
            options,
            label,
            placeholder: intl.formatMessage({
              id: "tableForm.selectPlaceholder",
              defaultMessage: "請選擇"
            }),
            lightLabel,
            labelTrigger,
            ...fieldProps
          }
        );
      }
      return /* @__PURE__ */ jsx(
        SearchSelect$2,
        {
          className: rest.className,
          style: {
            minWidth: 100,
            ...rest.style
          },
          bordered,
          id,
          loading,
          ref: inputRef,
          allowClear: true,
          defaultSearchValue: props.defaultKeyWords,
          notFoundContent: loading ? /* @__PURE__ */ jsx(CircularProgress, { size: 20 }) : fieldProps?.notFoundContent,
          fetchData: (keyWord) => {
            keyWordsRef.current = keyWord ?? "";
            fetchData(keyWord);
          },
          resetData,
          optionItemRender: (item) => {
            if (typeof item.label === "string" && keyWordsRef.current) {
              return /* @__PURE__ */ jsx(Highlight, { label: item.label, words: [keyWordsRef.current] });
            }
            return item.label;
          },
          placeholder: intl.formatMessage({ id: "tableForm.selectPlaceholder", defaultMessage: "請選擇" }),
          label,
          ...fieldProps,
          options
        },
        "SearchSelect"
      );
    };
    const dom = renderDom();
    if (renderFormItem) {
      return renderFormItem(
        rest.text,
        { mode, ...fieldProps, options, loading },
        dom
      ) ?? null;
    }
    return dom;
  }
  return null;
};
const FieldSelect$1 = React__default.forwardRef(FieldSelect);

const FieldCheckbox = ({ layout = "horizontal", renderFormItem, mode, render, ...rest }, ref) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const layoutClassName = getPrefixCls("pro-field-checkbox");
  const status = Form.Item?.useStatus?.();
  const [loading, options, fetchData] = useFieldFetchData(rest);
  const { wrapSSR, hashId } = useStyle$A("Checkbox", (token2) => {
    return {
      [`.${layoutClassName}`]: {
        "&-error": {
          span: {
            color: token2.colorError
          }
        },
        "&-warning": {
          span: {
            color: token2.colorWarning
          }
        },
        "&-vertical": {
          [`&${token2.ipassCls}-checkbox-group`]: {
            display: "inline-block"
          },
          [`${token2.ipassCls}-checkbox-wrapper+${token2.ipassCls}-checkbox-wrapper`]: {
            "margin-inline-start": "0  !important"
          },
          [`${token2.ipassCls}-checkbox-group-item`]: {
            display: "flex",
            marginInlineEnd: 0
          }
        }
      }
    };
  });
  const { token } = useToken?.();
  const checkBoxRef = useRef();
  useImperativeHandle(
    ref,
    () => ({
      ...checkBoxRef.current || {},
      fetchData: (keyWord) => fetchData(keyWord)
    }),
    [fetchData]
  );
  if (loading) {
    return /* @__PURE__ */ jsx(CircularProgress, { size: 20 });
  }
  if (mode === "read") {
    const optionsValueEnum = options?.length ? options?.reduce((pre, cur) => {
      return { ...pre, [cur.value ?? ""]: cur.label };
    }, {}) : void 0;
    const dom = proFieldParsingText(
      rest.text,
      ObjToMap(rest.valueEnum || optionsValueEnum)
    );
    if (render) {
      return render(rest.text, { mode, ...rest.fieldProps }, /* @__PURE__ */ jsx(Fragment, { children: dom })) ?? null;
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: token.marginSM
        },
        children: dom
      }
    );
  }
  if (mode === "edit") {
    const dom = wrapSSR(
      /* @__PURE__ */ jsx(
        Checkbox.Group,
        {
          ...rest.fieldProps,
          className: classNames(
            rest.fieldProps?.className,
            hashId,
            `${layoutClassName}-${layout}`,
            {
              [`${layoutClassName}-error`]: status?.status === "error",
              [`${layoutClassName}-warning`]: status?.status === "warning"
            }
          ),
          options
        }
      )
    );
    if (renderFormItem) {
      return renderFormItem(
        rest.text,
        { mode, ...rest.fieldProps, options, loading },
        dom
      ) ?? null;
    }
    return dom;
  }
  return null;
};
const FieldCheckbox$1 = React__default.forwardRef(FieldCheckbox);

dayjs.extend(weekOfYear);
const formatDate = (text, format) => {
  if (!text)
    return "-";
  if (typeof format === "function") {
    return format(dayjs(text));
  } else {
    return dayjs(text).format(
      (Array.isArray(format) ? format[0] : format) || "YYYY-MM-DD"
    );
  }
};
const FieldDatePicker = ({
  text,
  mode,
  format,
  label,
  light,
  render,
  renderFormItem,
  plain,
  showTime,
  fieldProps,
  picker,
  bordered,
  lightLabel
}, ref) => {
  const intl = useIntl();
  const [open, setOpen] = useState(false);
  if (mode === "read") {
    const dom = formatDate(text, fieldProps.format || format);
    if (render) {
      return render(text, { mode, ...fieldProps }, /* @__PURE__ */ jsx(Fragment, { children: dom }));
    }
    return /* @__PURE__ */ jsx(Fragment, { children: dom });
  }
  if (mode === "edit" || mode === "update") {
    let dom;
    const {
      disabled,
      value,
      placeholder = intl.formatMessage({ id: "tableForm.selectPlaceholder", defaultMessage: "請選擇" })
    } = fieldProps;
    const dayValue = parseValueToDay(value);
    if (light) {
      dom = /* @__PURE__ */ jsx(
        FieldLabel,
        {
          label,
          onClick: () => {
            fieldProps?.onOpenChange?.(true);
            setOpen(true);
          },
          style: dayValue ? {
            paddingInlineEnd: 0
          } : void 0,
          disabled,
          value: dayValue || open ? /* @__PURE__ */ jsx(
            DatePicker,
            {
              picker,
              showTime,
              format,
              ref,
              ...fieldProps,
              value: dayValue,
              onOpenChange: (isOpen) => {
                setOpen(isOpen);
                fieldProps?.onOpenChange?.(isOpen);
              },
              bordered: false,
              open
            }
          ) : void 0,
          allowClear: false,
          downIcon: dayValue || open ? false : void 0,
          bordered,
          ref: lightLabel
        }
      );
    } else {
      dom = /* @__PURE__ */ jsx(
        DatePicker,
        {
          picker,
          showTime,
          format,
          placeholder,
          bordered: plain === void 0 ? true : !plain,
          ref,
          ...fieldProps,
          value: dayValue
        }
      );
    }
    if (renderFormItem) {
      return renderFormItem(text, { mode, ...fieldProps }, dom);
    }
    return dom;
  }
  return null;
};
const FieldDatePicker$1 = React__default.forwardRef(FieldDatePicker);

const FieldDigit = ({ text, mode: type, render, placeholder, renderFormItem, fieldProps }, ref) => {
  const intl = useIntl();
  const placeholderValue = placeholder || intl.formatMessage({ id: "tableForm.inputPlaceholder", defaultMessage: "請輸入" });
  const proxyChange = useCallback(
    (value) => {
      let val = value ?? void 0;
      if (!fieldProps.stringMode && typeof val === "string") {
        val = Number(val);
      }
      if (typeof val === "number" && !isNil(val) && !isNil(fieldProps.precision)) {
        val = Number(val.toFixed(fieldProps.precision));
      }
      return val;
    },
    [fieldProps]
  );
  if (type === "read") {
    let fractionDigits = {};
    if (fieldProps?.precision) {
      fractionDigits = {
        minimumFractionDigits: Number(fieldProps.precision),
        maximumFractionDigits: Number(fieldProps.precision)
      };
    }
    const digit = new Intl.NumberFormat(void 0, {
      ...fractionDigits,
      ...fieldProps?.intlProps || {}
    }).format(Number(text));
    const dom = /* @__PURE__ */ jsx("span", { ref, children: fieldProps?.formatter?.(digit) || digit });
    if (render) {
      return render(text, { mode: type, ...fieldProps }, dom);
    }
    return dom;
  }
  if (type === "edit" || type === "update") {
    const dom = /* @__PURE__ */ jsx(
      TypedInputNumber,
      {
        ref,
        min: 0,
        placeholder: placeholderValue,
        ...omit(fieldProps, ["onChange", "onBlur"]),
        onChange: (e) => fieldProps?.onChange?.(proxyChange(e)),
        onBlur: (e) => fieldProps?.onBlur?.(proxyChange(e.target.value))
      }
    );
    if (renderFormItem) {
      return renderFormItem(text, { mode: type, ...fieldProps }, dom);
    }
    return dom;
  }
  return null;
};
const FieldDigit$1 = React__default.forwardRef(FieldDigit);

const FieldDigitRange = ({
  text,
  mode: type,
  render,
  placeholder,
  renderFormItem,
  fieldProps,
  separator = "~",
  separatorWidth = 30
}, ref) => {
  const { value, defaultValue, onChange, id } = fieldProps;
  const intl = useIntl();
  const { token } = proTheme.useToken();
  const [valuePair, setValuePair] = useMergedState(() => defaultValue, {
    value,
    onChange
  });
  if (type === "read") {
    const getContent = (number) => {
      const digit = new Intl.NumberFormat(void 0, {
        minimumSignificantDigits: 2,
        ...fieldProps?.intlProps || {}
      }).format(Number(number));
      return fieldProps?.formatter?.(digit) || digit;
    };
    const dom = /* @__PURE__ */ jsxs("span", { ref, children: [
      getContent(text[0]),
      " ",
      separator,
      " ",
      getContent(text[1])
    ] });
    if (render) {
      return render(text, { mode: type, ...fieldProps }, dom);
    }
    return dom;
  }
  if (type === "edit" || type === "update") {
    const handleGroupBlur = () => {
      if (Array.isArray(valuePair)) {
        const [value0, value1] = valuePair;
        if (typeof value0 === "number" && typeof value1 === "number" && value0 > value1) {
          setValuePair([value1, value0]);
        } else if (value0 === void 0 && value1 === void 0) {
          setValuePair(void 0);
        }
      }
    };
    const handleChange = (index, changedValue) => {
      const newValuePair = [...valuePair || []];
      newValuePair[index] = changedValue === null ? void 0 : changedValue;
      setValuePair(newValuePair);
    };
    const placeholderValue = fieldProps?.placeholder || placeholder || [
      intl.formatMessage({ id: "tableForm.inputPlaceholder", defaultMessage: "請輸入" }),
      intl.formatMessage({ id: "tableForm.inputPlaceholder", defaultMessage: "請輸入" })
    ];
    const getInputNumberPlaceholder = (index) => Array.isArray(placeholderValue) ? placeholderValue[index] : placeholderValue;
    const Compact = CompoundedSpace.Compact || Input.Group;
    const compactProps = !!CompoundedSpace.Compact ? {} : { compact: true };
    const dom = /* @__PURE__ */ jsxs(Compact, { ...compactProps, onBlur: handleGroupBlur, children: [
      /* @__PURE__ */ jsx(
        TypedInputNumber,
        {
          ...fieldProps,
          placeholder: getInputNumberPlaceholder(0),
          id: id ?? `${id}-0`,
          style: { width: `calc((100% - ${separatorWidth}px) / 2)` },
          value: valuePair?.[0],
          defaultValue: defaultValue?.[0],
          onChange: (changedValue) => handleChange(0, changedValue)
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        {
          style: {
            width: separatorWidth,
            textAlign: "center",
            borderInlineStart: 0,
            borderInlineEnd: 0,
            pointerEvents: "none",
            backgroundColor: token?.colorBgContainer
          },
          placeholder: separator,
          disabled: true
        }
      ),
      /* @__PURE__ */ jsx(
        TypedInputNumber,
        {
          ...fieldProps,
          placeholder: getInputNumberPlaceholder(1),
          id: id ?? `${id}-1`,
          style: {
            width: `calc((100% - ${separatorWidth}px) / 2)`,
            borderInlineStart: 0
          },
          value: valuePair?.[1],
          defaultValue: defaultValue?.[1],
          onChange: (changedValue) => handleChange(1, changedValue)
        }
      )
    ] });
    if (renderFormItem) {
      return renderFormItem(text, { mode: type, ...fieldProps }, dom);
    }
    return dom;
  }
  return null;
};
const FieldDigitRange$1 = React__default.forwardRef(FieldDigitRange);

dayjs.extend(relativeTime);
const FieldFromNow = ({ text, mode, render, renderFormItem, format, fieldProps }, ref) => {
  const intl = useIntl();
  if (mode === "read") {
    const dom = /* @__PURE__ */ jsx(
      Tooltip,
      {
        title: dayjs(text).format(
          fieldProps?.format || format || "YYYY-MM-DD HH:mm:ss"
        ),
        children: dayjs(text).fromNow()
      }
    );
    if (render) {
      return render(text, { mode, ...fieldProps }, /* @__PURE__ */ jsx(Fragment, { children: dom }));
    }
    return /* @__PURE__ */ jsx(Fragment, { children: dom });
  }
  if (mode === "edit" || mode === "update") {
    const placeholder = intl.formatMessage({
      id: "tableForm.selectPlaceholder",
      defaultMessage: "請選擇"
    });
    const momentValue = parseValueToDay(fieldProps.value);
    const dom = /* @__PURE__ */ jsx(
      DatePicker,
      {
        ref,
        placeholder,
        showTime: true,
        ...fieldProps,
        value: momentValue
      }
    );
    if (renderFormItem) {
      return renderFormItem(text, { mode, ...fieldProps }, dom);
    }
    return dom;
  }
  return null;
};
const FieldFromNow$1 = React__default.forwardRef(FieldFromNow);

const IndexColumn = ({ border = false, children }, ref) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const className = getPrefixCls("pro-field-index-column");
  const { wrapSSR, hashId } = useStyle$A("IndexColumn", () => {
    return {
      [`.${className}`]: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "18px",
        height: "18px",
        "&-border": {
          color: "#fff",
          fontSize: "12px",
          lineHeight: "12px",
          backgroundColor: "#314659",
          borderRadius: "9px",
          "&.top-three": {
            backgroundColor: "#979797"
          }
        }
      }
    };
  });
  return wrapSSR(
    /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: classNames(className, hashId, {
          [`${className}-border`]: border,
          "top-three": children > 3
        }),
        children
      }
    )
  );
};
const FieldIndexColumn = React__default.forwardRef(IndexColumn);

const defaultMoneyIntl = new Intl.NumberFormat("zh-Hans-CN", {
  currency: "CNY",
  style: "currency"
});
const enMoneyIntl = {
  style: "currency",
  currency: "USD"
};
const ruMoneyIntl = {
  style: "currency",
  currency: "RUB"
};
const rsMoneyIntl = {
  style: "currency",
  currency: "RSD"
};
const msMoneyIntl = {
  style: "currency",
  currency: "MYR"
};
const ptMoneyIntl = {
  style: "currency",
  currency: "BRL"
};
const intlMap = {
  default: defaultMoneyIntl,
  "zh-Hans-CN": {
    currency: "CNY",
    style: "currency"
  },
  "en-US": enMoneyIntl,
  "ru-RU": ruMoneyIntl,
  "ms-MY": msMoneyIntl,
  "sr-RS": rsMoneyIntl,
  "pt-BR": ptMoneyIntl
};
const getTextByLocale = (moneySymbol, paramsText, precision, config) => {
  let moneyText = paramsText?.toString().replaceAll(",", "");
  if (typeof moneyText === "string") {
    const parsedNum = Number(moneyText);
    if (Number.isNaN(parsedNum))
      return moneyText;
    moneyText = parsedNum;
  }
  if (!moneyText && moneyText !== 0)
    return "";
  try {
    const finalMoneyText = new Intl.NumberFormat(moneySymbol || "zh-TW", {
      // @ts-ignore
      ...intlMap[moneySymbol || "zh-TW"] || intlMap["zh-TW"],
      maximumFractionDigits: precision,
      ...config
    }).format(moneyText);
    const hasMoneySymbol = moneySymbol === false;
    const operatorSymbol = (finalMoneyText || "").at(0) ?? "";
    if (["+", "-"].includes(operatorSymbol)) {
      return `${operatorSymbol}${finalMoneyText.substring(
        hasMoneySymbol ? 2 : 1
      )}`;
    }
    return finalMoneyText.substring(hasMoneySymbol ? 1 : 0);
  } catch (error) {
    return moneyText;
  }
};
const DefaultPrecisionCont = 2;
const InputNumberPopover = React__default.forwardRef(
  ({
    contentRender: content,
    numberFormatOptions,
    numberPopoverRender,
    open,
    ...rest
  }, ref) => {
    const [value, onChange] = useMergedState(() => rest.defaultValue, {
      value: rest.value,
      onChange: rest.onChange
    });
    const dom = content?.({
      ...rest,
      value
    });
    const props = openVisibleCompatible(dom ? open : false);
    return /* @__PURE__ */ jsx(
      Popover,
      {
        placement: "topLeft",
        ...props,
        trigger: ["focus", "click"],
        content: dom,
        getPopupContainer: (triggerNode) => {
          return triggerNode?.parentElement || document.body;
        },
        children: /* @__PURE__ */ jsx(TypedInputNumber, { ref, ...rest, value, onChange })
      }
    );
  }
);
const FieldMoney = ({
  text,
  mode: type,
  render,
  renderFormItem,
  fieldProps,
  proFieldKey,
  plain,
  valueEnum,
  placeholder,
  locale = fieldProps.customSymbol ?? "zh-Hans-CN",
  customSymbol = fieldProps.customSymbol,
  numberFormatOptions = fieldProps?.numberFormatOptions,
  numberPopoverRender = fieldProps?.numberPopoverRender || false,
  ...rest
}, ref) => {
  const precision = fieldProps?.precision ?? DefaultPrecisionCont;
  let intl = useIntl();
  if (locale && intlMap$1[locale]) {
    intl = intlMap$1[locale];
  }
  const placeholderValue = placeholder || intl.formatMessage({ id: "tableForm.inputPlaceholder", defaultMessage: "請輸入" });
  const moneySymbol = useMemo(() => {
    if (customSymbol) {
      return customSymbol;
    }
    if (rest.moneySymbol === false || fieldProps.moneySymbol === false) {
      return void 0;
    }
    return intl.formatMessage({ id: "moneySymbol", defaultMessage: "NT$" });
  }, [customSymbol, fieldProps.moneySymbol, intl, rest.moneySymbol]);
  const getFormateValue = useCallback(
    (value) => {
      const reg = new RegExp(
        `\\B(?=(\\d{${3 + Math.max(precision - DefaultPrecisionCont, 0)}})+(?!\\d))`,
        "g"
      );
      const [intStr, floatStr] = String(value).split(".");
      const resultInt = intStr.replace(reg, ",");
      let resultFloat = "";
      if (floatStr && precision > 0) {
        resultFloat = `.${floatStr.slice(
          0,
          precision === void 0 ? DefaultPrecisionCont : precision
        )}`;
      }
      return `${resultInt}${resultFloat}`;
    },
    [precision]
  );
  if (type === "read") {
    const dom = /* @__PURE__ */ jsx("span", { ref, children: getTextByLocale(
      moneySymbol ? locale : false,
      text,
      precision,
      numberFormatOptions ?? fieldProps.numberFormatOptions
    ) });
    if (render) {
      return render(text, { mode: type, ...fieldProps }, dom);
    }
    return dom;
  }
  if (type === "edit" || type === "update") {
    const dom = /* @__PURE__ */ jsx(
      InputNumberPopover,
      {
        contentRender: (props) => {
          if (numberPopoverRender === false)
            return null;
          if (!props.value)
            return null;
          const localeText = getTextByLocale(
            moneySymbol ? locale : false,
            `${getFormateValue(props.value)}`,
            precision,
            {
              ...numberFormatOptions,
              notation: "compact"
            }
          );
          if (typeof numberPopoverRender === "function") {
            return numberPopoverRender?.(props, localeText);
          }
          return localeText;
        },
        ref,
        precision,
        formatter: (value) => {
          if (value && moneySymbol) {
            return `${moneySymbol} ${getFormateValue(value)}`;
          }
          return value?.toString();
        },
        parser: (value) => {
          if (moneySymbol && value) {
            return value.replace(
              new RegExp(`\\${moneySymbol}\\s?|(,*)`, "g"),
              ""
            );
          }
          return value;
        },
        placeholder: placeholderValue,
        ...omit(fieldProps, [
          "numberFormatOptions",
          "precision",
          "numberPopoverRender",
          "customSymbol",
          "moneySymbol",
          "visible",
          "open"
        ]),
        onBlur: fieldProps.onBlur ? (e) => {
          let value = e.target.value;
          if (moneySymbol && value) {
            value = value.replace(
              new RegExp(`\\${moneySymbol}\\s?|(,*)`, "g"),
              ""
            );
          }
          fieldProps.onBlur?.(value);
        } : void 0
      }
    );
    if (renderFormItem) {
      return renderFormItem(text, { mode: type, ...fieldProps }, dom);
    }
    return dom;
  }
  return null;
};
const FieldMoney$1 = React__default.forwardRef(FieldMoney);

const addArrayKeys = (doms) => doms.map((dom, index) => {
  if (!React__default.isValidElement(dom)) {
    return /* @__PURE__ */ jsx(React__default.Fragment, { children: dom }, index);
  }
  return React__default.cloneElement(dom, {
    // eslint-disable-next-line react/no-array-index-key
    key: index,
    ...dom?.props,
    style: {
      flex: 1,
      // @ts-ignore
      ...dom?.props?.style
    }
  });
});
const FieldOptions = ({ text, mode: type, render, fieldProps }, ref) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const className = getPrefixCls("pro-field-option");
  const { token } = proTheme.useToken();
  useImperativeHandle(ref, () => ({}));
  if (render) {
    const doms = render(
      text,
      { mode: type, ...fieldProps },
      /* @__PURE__ */ jsx(Fragment, {})
    );
    if (!doms || doms?.length < 1 || !Array.isArray(doms)) {
      return null;
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          display: "flex",
          gap: token.margin,
          alignItems: "center"
        },
        className,
        children: addArrayKeys(doms)
      }
    );
  }
  if (!text || !Array.isArray(text)) {
    if (!React__default.isValidElement(text)) {
      return null;
    }
    return text;
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        display: "flex",
        gap: token.margin,
        alignItems: "center"
      },
      className,
      children: addArrayKeys(text)
    }
  );
};
const FieldOptions$1 = React__default.forwardRef(FieldOptions);

const FieldPassword = ({ text, mode, render, renderFormItem, fieldProps, proFieldKey, ...rest }, ref) => {
  const intl = useIntl();
  const [open, setOpen] = useMergedState(
    () => rest.open || rest.visible || false,
    {
      value: rest.open || rest.visible,
      onChange: rest.onOpenChange || rest.onVisible
    }
  );
  if (mode === "read") {
    let dom = /* @__PURE__ */ jsx(Fragment, { children: "-" });
    if (text) {
      dom = /* @__PURE__ */ jsxs(CompoundedSpace, { children: [
        /* @__PURE__ */ jsx("span", { ref, children: open ? text : "************************" }),
        /* @__PURE__ */ jsx("a", { onClick: () => setOpen(!open), children: open ? /* @__PURE__ */ jsx(VisibilityIcon, {}) : /* @__PURE__ */ jsx(VisibilityOffIcon, {}) })
      ] });
    }
    if (render) {
      return render(text, { mode, ...fieldProps }, dom);
    }
    return dom;
  }
  if (mode === "edit" || mode === "update") {
    const dom = /* @__PURE__ */ jsx(
      Input.Password,
      {
        placeholder: intl.formatMessage({ id: "tableForm.inputPlaceholder", defaultMessage: "請輸入" }),
        ref,
        ...fieldProps
      }
    );
    if (renderFormItem) {
      return renderFormItem(text, { mode, ...fieldProps }, dom);
    }
    return dom;
  }
  return null;
};
const FieldPassword$1 = React__default.forwardRef(FieldPassword);

function getSymbolByRealValue(realValue) {
  if (realValue === 0) {
    return null;
  }
  if (realValue > 0) {
    return "+";
  }
  return "-";
}
function getColorByRealValue(realValue) {
  if (realValue === 0) {
    return "#595959";
  }
  return realValue > 0 ? "#ff4d4f" : "#52c41a";
}
function getRealTextWithPrecision(realValue, precision = 2) {
  return precision >= 0 ? realValue?.toFixed(precision) : realValue;
}

const FieldPercent = ({
  text,
  prefix,
  precision,
  suffix = "%",
  mode,
  showColor = false,
  render,
  renderFormItem,
  fieldProps,
  placeholder,
  showSymbol: propsShowSymbol
}, ref) => {
  const intl = useIntl();
  const placeholderValue = placeholder || intl.formatMessage({ id: "tableForm.inputPlaceholder", defaultMessage: "請輸入" });
  const realValue = useMemo(
    () => typeof text === "string" && text.includes("%") ? toNumber(text.replace("%", "")) : toNumber(text),
    [text]
  );
  const showSymbol = useMemo(() => {
    if (typeof propsShowSymbol === "function") {
      return propsShowSymbol?.(text);
    }
    return propsShowSymbol;
  }, [propsShowSymbol, text]);
  if (mode === "read") {
    const style = showColor ? { color: getColorByRealValue(realValue) } : {};
    const dom = /* @__PURE__ */ jsxs("span", { style, ref, children: [
      prefix && /* @__PURE__ */ jsx("span", { children: prefix }),
      showSymbol && /* @__PURE__ */ jsxs(Fragment$1, { children: [
        getSymbolByRealValue(realValue),
        " "
      ] }),
      getRealTextWithPrecision(Math.abs(realValue), precision),
      suffix && suffix
    ] });
    if (render) {
      return render(
        text,
        { mode, ...fieldProps, prefix, precision, showSymbol, suffix },
        dom
      );
    }
    return dom;
  }
  if (mode === "edit" || mode === "update") {
    const dom = /* @__PURE__ */ jsx(
      TypedInputNumber,
      {
        ref,
        formatter: (value) => {
          if (value && prefix) {
            return `${prefix} ${value}`.replace(/\B(?=(\d{3})+(?!\d)$)/g, ",");
          }
          return value;
        },
        parser: (value) => value ? value.replace(/.*\s|,/g, "") : "",
        placeholder: placeholderValue,
        ...fieldProps
      }
    );
    if (renderFormItem) {
      return renderFormItem(text, { mode, ...fieldProps }, dom);
    }
    return dom;
  }
  return null;
};
const FieldPercent$1 = React__default.forwardRef(FieldPercent);

const FieldRadio = ({ radioType, renderFormItem, mode, render, ...rest }, ref) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const layoutClassName = getPrefixCls("pro-field-radio");
  const [loading, options, fetchData] = useFieldFetchData(rest);
  const radioRef = useRef();
  const status = Form.Item?.useStatus?.();
  useImperativeHandle(
    ref,
    () => ({
      ...radioRef.current || {},
      fetchData: (keyWord) => fetchData(keyWord)
    }),
    [fetchData]
  );
  const { wrapSSR, hashId } = useStyle$A("FieldRadioRadio", (token) => {
    return {
      [`.${layoutClassName}-error`]: {
        span: {
          color: token.colorError
        }
      },
      [`.${layoutClassName}-warning`]: {
        span: {
          color: token.colorWarning
        }
      },
      [`.${layoutClassName}-vertical`]: {
        [`${token.ipassCls}-radio-wrapper`]: {
          display: "flex",
          marginInlineEnd: 0
        }
      }
    };
  });
  if (loading) {
    return /* @__PURE__ */ jsx(CircularProgress, { size: 20 });
  }
  if (mode === "read") {
    const optionsValueEnum = options?.length ? options?.reduce((pre, cur) => {
      return { ...pre, [cur.value ?? ""]: cur.label };
    }, {}) : void 0;
    const dom = /* @__PURE__ */ jsx(Fragment, { children: proFieldParsingText(
      rest.text,
      ObjToMap(rest.valueEnum || optionsValueEnum)
    ) });
    if (render) {
      return render(rest.text, { mode, ...rest.fieldProps }, dom) ?? null;
    }
    return dom;
  }
  if (mode === "edit") {
    const dom = wrapSSR(
      /* @__PURE__ */ jsx(
        Radio.Group,
        {
          ref: radioRef,
          optionType: radioType,
          ...rest.fieldProps,
          className: classNames(
            rest.fieldProps?.className,
            {
              [`${layoutClassName}-error`]: status?.status === "error",
              [`${layoutClassName}-warning`]: status?.status === "warning"
            },
            hashId,
            `${layoutClassName}-${rest.fieldProps.layout || "horizontal"}`
          ),
          options
        }
      )
    );
    if (renderFormItem) {
      return renderFormItem(
        rest.text,
        { mode, ...rest.fieldProps, options, loading },
        dom
      ) ?? null;
    }
    return dom;
  }
  return null;
};
const FieldRadio$1 = React__default.forwardRef(FieldRadio);

const FieldRangePicker = ({
  text,
  mode,
  light,
  label,
  format,
  render,
  picker,
  renderFormItem,
  plain,
  showTime,
  lightLabel,
  bordered,
  fieldProps
}, ref) => {
  const intl = useIntl();
  const [startText, endText] = Array.isArray(text) ? text : [];
  const [open, setOpen] = React__default.useState(false);
  const genFormatText = useCallback(
    (formatValue) => {
      if (typeof fieldProps?.format === "function") {
        return fieldProps?.format?.(formatValue);
      }
      return fieldProps?.format || format || "YYYY-MM-DD";
    },
    [fieldProps, format]
  );
  const parsedStartText = startText ? dayjs(startText).format(genFormatText(dayjs(startText))) : "";
  const parsedEndText = endText ? dayjs(endText).format(genFormatText(dayjs(endText))) : "";
  if (mode === "read") {
    const dom = /* @__PURE__ */ jsxs("div", { ref, children: [
      /* @__PURE__ */ jsx("div", { children: parsedStartText || "-" }),
      /* @__PURE__ */ jsx("div", { children: parsedEndText || "-" })
    ] });
    if (render) {
      return render(text, { mode, ...fieldProps }, /* @__PURE__ */ jsx("span", { children: dom }));
    }
    return dom;
  }
  if (mode === "edit" || mode === "update") {
    const dayValue = parseValueToDay(fieldProps.value);
    let dom;
    if (light) {
      dom = /* @__PURE__ */ jsx(
        FieldLabel,
        {
          label,
          onClick: () => {
            fieldProps?.onOpenChange?.(true);
            setOpen(true);
          },
          style: dayValue ? {
            paddingInlineEnd: 0
          } : void 0,
          disabled: fieldProps.disabled,
          value: dayValue || open ? /* @__PURE__ */ jsx(
            DatePicker.RangePicker,
            {
              picker,
              showTime,
              format,
              bordered: false,
              ...fieldProps,
              placeholder: fieldProps.placeholder ?? [
                intl.formatMessage({ id: "tableForm.selectPlaceholder", defaultMessage: "請選擇" }),
                intl.formatMessage({ id: "tableForm.selectPlaceholder", defaultMessage: "請選擇" })
              ],
              onClear: () => {
                setOpen(false);
                fieldProps?.onClear?.();
              },
              value: dayValue,
              onOpenChange: (isOpen) => {
                if (dayValue)
                  setOpen(isOpen);
                fieldProps?.onOpenChange?.(isOpen);
              }
            }
          ) : null,
          allowClear: false,
          bordered,
          ref: lightLabel,
          downIcon: dayValue || open ? false : void 0
        }
      );
    } else {
      dom = /* @__PURE__ */ jsx(
        DatePicker.RangePicker,
        {
          ref,
          format,
          showTime,
          placeholder: [
            intl.formatMessage({ id: "tableForm.selectPlaceholder", defaultMessage: "請選擇" }),
            intl.formatMessage({ id: "tableForm.selectPlaceholder", defaultMessage: "請選擇" })
          ],
          bordered: plain === void 0 ? true : false,
          ...fieldProps,
          value: dayValue
        }
      );
    }
    if (renderFormItem) {
      return renderFormItem(text, { mode, ...fieldProps }, dom);
    }
    return dom;
  }
  return null;
};
const FieldRangePicker$1 = React__default.forwardRef(FieldRangePicker);

function formatSecond(result) {
  let formatText = "";
  const d = Math.floor(result / (3600 * 24));
  const h = Math.floor(result / 3600);
  const m = Math.floor(result / 60 % 60);
  const s = Math.floor(result % 60);
  formatText = `${s}秒`;
  if (m > 0) {
    formatText = `${m}分鐘${formatText}`;
  }
  if (h > 0) {
    formatText = `${h}小時${formatText}`;
  }
  if (d > 0) {
    formatText = `${d}天${formatText}`;
  }
  return formatText;
}
const Second = ({ text, mode: type, render, renderFormItem, fieldProps, placeholder }, ref) => {
  const intl = useIntl();
  const placeholderValue = placeholder || intl.formatMessage({ id: "tableForm.inputPlaceholder", defaultMessage: "請輸入" });
  if (type === "read") {
    const secondText = formatSecond(Number(text));
    const dom = /* @__PURE__ */ jsx("span", { ref, children: secondText });
    if (render) {
      return render(text, { mode: type, ...fieldProps }, dom);
    }
    return dom;
  }
  if (type === "edit" || type === "update") {
    const dom = /* @__PURE__ */ jsx(
      TypedInputNumber,
      {
        ref,
        min: 0,
        style: {
          width: "100%"
        },
        placeholder: placeholderValue,
        ...fieldProps
      }
    );
    if (renderFormItem) {
      return renderFormItem(text, { mode: type, ...fieldProps }, dom);
    }
    return dom;
  }
  return null;
};
const FieldSecond = React__default.forwardRef(Second);

const FieldSwitch = ({ text, mode, render, light, label, renderFormItem, fieldProps }, ref) => {
  const intl = useIntl();
  const dom = useMemo(() => {
    if (text === void 0 || text === null || `${text}`.length < 1)
      return "-";
    return text ? fieldProps?.checkedChildren ?? intl.formatMessage({ id: "switch.open", defaultMessage: "打開" }) : fieldProps?.unCheckedChildren ?? intl.formatMessage({ id: "switch.close", defaultMessage: "關閉" });
  }, [fieldProps?.checkedChildren, fieldProps?.unCheckedChildren, text]);
  if (mode === "read") {
    if (render) {
      return render(text, { mode, ...fieldProps }, /* @__PURE__ */ jsx(Fragment, { children: dom }));
    }
    return dom ?? "-";
  }
  if (mode === "edit" || mode === "update") {
    const editDom = /* @__PURE__ */ jsx(
      Switch,
      {
        ref,
        size: light ? "small" : void 0,
        ...omit(fieldProps, ["value"]),
        checked: fieldProps?.checked ?? fieldProps?.value
      }
    );
    if (light) {
      const { disabled, bordered } = fieldProps;
      return /* @__PURE__ */ jsx(
        FieldLabel,
        {
          label,
          disabled,
          bordered,
          downIcon: false,
          value: /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                paddingLeft: 8
              },
              children: editDom
            }
          ),
          allowClear: false
        }
      );
    }
    if (renderFormItem) {
      return renderFormItem(text, { mode, ...fieldProps }, editDom);
    }
    return editDom;
  }
  return null;
};
const FieldSwitch$1 = React__default.forwardRef(FieldSwitch);

const FieldText = ({ text, mode, render, renderFormItem, fieldProps, emptyText = "-" }, ref) => {
  const { autoFocus, prefix = "", suffix = "" } = fieldProps || {};
  const intl = useIntl();
  const inputRef = useRef();
  useImperativeHandle(ref, () => inputRef.current, []);
  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
    }
  }, [autoFocus]);
  if (mode === "read") {
    const dom = /* @__PURE__ */ jsxs(Fragment, { children: [
      prefix,
      text ?? emptyText,
      suffix
    ] });
    if (render) {
      return render(text, { mode, ...fieldProps }, dom) ?? emptyText;
    }
    return dom;
  }
  if (mode === "edit" || mode === "update") {
    const placeholder = intl.formatMessage({ id: "tableForm.inputPlaceholder", defaultMessage: "請輸入" });
    const dom = /* @__PURE__ */ jsx(
      Input,
      {
        ref: inputRef,
        placeholder,
        allowClear: true,
        ...fieldProps
      }
    );
    if (renderFormItem) {
      return renderFormItem(text, { mode, ...fieldProps }, dom);
    }
    return dom;
  }
  return null;
};
const FieldText$1 = React__default.forwardRef(FieldText);

const FieldTextAreaReadonly = ({ text }, ref) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const readonlyClassName = getPrefixCls("pro-field-readonly");
  const compClassName = `${readonlyClassName}-textarea`;
  const { wrapSSR, hashId } = useStyle$A("TextArea", () => {
    return {
      [`.${compClassName}`]: {
        display: "inline-block",
        // padding: '4px 11px',
        lineHeight: "1.5715",
        maxWidth: "100%",
        whiteSpace: "pre-wrap"
      }
    };
  });
  return wrapSSR(
    /* @__PURE__ */ jsx(
      "span",
      {
        ref,
        className: classNames(hashId, readonlyClassName, compClassName),
        style: {},
        children: text ?? "-"
      }
    )
  );
};
const FieldTextAreaReadonly$1 = React__default.forwardRef(FieldTextAreaReadonly);

const FieldTextArea = (props, ref) => {
  const { text, mode, render, renderFormItem, fieldProps } = props;
  const intl = useIntl();
  if (mode === "read") {
    const dom = /* @__PURE__ */ jsx(FieldTextAreaReadonly$1, { ...props, ref });
    if (render) {
      return render(text, { mode, ...fieldProps }, dom);
    }
    return dom;
  }
  if (mode === "edit" || mode === "update") {
    const dom = /* @__PURE__ */ jsx(
      Input.TextArea,
      {
        ref,
        rows: 3,
        onKeyPress: (e) => {
          if (e.key === "Enter")
            e.stopPropagation();
        },
        placeholder: intl.formatMessage({ id: "tableForm.inputPlaceholder", defaultMessage: "請輸入" }),
        ...fieldProps
      }
    );
    if (renderFormItem) {
      return renderFormItem(text, { mode, ...fieldProps }, dom);
    }
    return dom;
  }
  return null;
};
const FieldTextArea$1 = React__default.forwardRef(FieldTextArea);

const FieldTimePicker = ({
  text,
  mode,
  light,
  label,
  format,
  render,
  renderFormItem,
  plain,
  fieldProps,
  lightLabel
}, ref) => {
  const [open, setOpen] = useState(false);
  const intl = useIntl();
  const finalFormat = fieldProps?.format || format || "HH:mm:ss";
  const isNumberOrMoment = dayjs.isDayjs(text) || typeof text === "number";
  if (mode === "read") {
    const dom = /* @__PURE__ */ jsx("span", { ref, children: text ? dayjs(text, isNumberOrMoment ? void 0 : finalFormat).format(
      finalFormat
    ) : "-" });
    if (render) {
      return render(text, { mode, ...fieldProps }, /* @__PURE__ */ jsx("span", { children: dom }));
    }
    return dom;
  }
  if (mode === "edit" || mode === "update") {
    let dom;
    const { disabled, value } = fieldProps;
    const dayValue = parseValueToDay(value, finalFormat);
    if (light) {
      dom = /* @__PURE__ */ jsx(
        FieldLabel,
        {
          onClick: () => {
            fieldProps?.onOpenChange?.(true);
            setOpen(true);
          },
          style: dayValue ? {
            paddingInlineEnd: 0
          } : void 0,
          label,
          disabled,
          value: dayValue || open ? /* @__PURE__ */ jsx(
            TimePicker,
            {
              bordered: false,
              format,
              ref,
              ...fieldProps,
              placeholder: fieldProps.placeholder ?? intl.formatMessage({ id: "tableForm.selectPlaceholder", defaultMessage: "請選擇" }),
              value: dayValue,
              onOpenChange: (isOpen) => {
                setOpen(isOpen);
                fieldProps?.onOpenChange?.(isOpen);
              },
              open
            }
          ) : null,
          downIcon: dayValue || open ? false : void 0,
          allowClear: false,
          ref: lightLabel
        }
      );
    } else {
      dom = /* @__PURE__ */ jsx(
        DatePicker.TimePicker,
        {
          ref,
          format,
          bordered: plain === void 0 ? true : !plain,
          ...fieldProps,
          value: dayValue
        }
      );
    }
    if (renderFormItem) {
      return renderFormItem(text, { mode, ...fieldProps }, dom);
    }
    return dom;
  }
  return null;
};
const FieldTimeRangePickerComponents = ({
  text,
  light,
  label,
  mode,
  lightLabel,
  format,
  render,
  renderFormItem,
  plain,
  fieldProps
}, ref) => {
  const intl = useIntl();
  const [open, setOpen] = useState(false);
  const finalFormat = fieldProps?.format || format || "HH:mm:ss";
  const [startText, endText] = Array.isArray(text) ? text : [];
  const startTextIsNumberOrMoment = dayjs.isDayjs(startText) || typeof startText === "number";
  const endTextIsNumberOrMoment = dayjs.isDayjs(endText) || typeof endText === "number";
  const parsedStartText = startText ? dayjs(
    startText,
    startTextIsNumberOrMoment ? void 0 : finalFormat
  ).format(finalFormat) : "";
  const parsedEndText = endText ? dayjs(endText, endTextIsNumberOrMoment ? void 0 : finalFormat).format(
    finalFormat
  ) : "";
  if (mode === "read") {
    const dom = /* @__PURE__ */ jsxs("div", { ref, children: [
      /* @__PURE__ */ jsx("div", { children: parsedStartText || "-" }),
      /* @__PURE__ */ jsx("div", { children: parsedEndText || "-" })
    ] });
    if (render) {
      return render(text, { mode, ...fieldProps }, /* @__PURE__ */ jsx("span", { children: dom }));
    }
    return dom;
  }
  if (mode === "edit" || mode === "update") {
    const dayValue = parseValueToDay(
      fieldProps.value,
      finalFormat
    );
    let dom;
    if (light) {
      const {
        disabled,
        placeholder = [
          intl.formatMessage({ id: "tableForm.selectPlaceholder", defaultMessage: "請選擇" }),
          intl.formatMessage({ id: "tableForm.selectPlaceholder", defaultMessage: "請選擇" })
        ]
      } = fieldProps;
      dom = /* @__PURE__ */ jsx(
        FieldLabel,
        {
          onClick: () => {
            fieldProps?.onOpenChange?.(true);
            setOpen(true);
          },
          style: dayValue ? {
            paddingInlineEnd: 0
          } : void 0,
          label,
          disabled,
          placeholder,
          value: dayValue || open ? /* @__PURE__ */ jsx(
            TimePicker.RangePicker,
            {
              bordered: false,
              format,
              ref,
              ...fieldProps,
              placeholder,
              value: dayValue,
              onOpenChange: (isOpen) => {
                setOpen(isOpen);
                fieldProps?.onOpenChange?.(isOpen);
              },
              open
            }
          ) : null,
          downIcon: dayValue || open ? false : void 0,
          allowClear: false,
          ref: lightLabel
        }
      );
    } else {
      dom = /* @__PURE__ */ jsx(
        TimePicker.RangePicker,
        {
          ref,
          format,
          bordered: plain === void 0 ? true : !plain,
          ...fieldProps,
          value: dayValue
        }
      );
    }
    if (renderFormItem) {
      return renderFormItem(text, { mode, ...fieldProps }, dom);
    }
    return dom;
  }
  return null;
};
const FieldTimeRangePicker = React__default.forwardRef(FieldTimeRangePickerComponents);
const FieldTimePicker$1 = React__default.forwardRef(FieldTimePicker);

function FieldHOC(props) {
  const [labelTrigger, setLabelTrigger] = useState(false);
  const lightLabel = useRef(null);
  const isTriggeredByLabel = useCallback(
    (e) => {
      const isLabelMouseDown = lightLabel.current?.labelRef?.current?.contains(
        e.target
      );
      const isClearMouseDown = lightLabel.current?.clearRef?.current?.contains(
        e.target
      );
      return isLabelMouseDown && !isClearMouseDown;
    },
    [lightLabel]
  );
  const handleMouseDown = (e) => {
    if (isTriggeredByLabel(e)) {
      setLabelTrigger(true);
    }
  };
  const handleMouseUp = () => {
    setLabelTrigger(false);
  };
  if (props.isLight) {
    return /* @__PURE__ */ jsx("div", { onMouseDown: handleMouseDown, onMouseUp: handleMouseUp, children: React__default.cloneElement(props.children, {
      labelTrigger,
      lightLabel
    }) });
  }
  return /* @__PURE__ */ jsx(Fragment, { children: props.children });
}

dayjs.extend(localeData);
dayjs.extend(advancedFormat);
dayjs.extend(isoWeek);
dayjs.extend(weekOfYear);
dayjs.extend(weekday);
const defaultRenderTextByObject = (text, valueType, props) => {
  const pickFormItemProps = pickProProps(props.fieldProps);
  if (valueType.type === "money") {
    return /* @__PURE__ */ jsx(
      FieldMoney$1,
      {
        locale: valueType.locale,
        ...props,
        fieldProps: pickFormItemProps,
        text,
        moneySymbol: valueType.moneySymbol
      }
    );
  }
  if (valueType.type === "percent") {
    return /* @__PURE__ */ jsx(
      FieldPercent$1,
      {
        ...props,
        text,
        showSymbol: valueType.showSymbol,
        precision: valueType.precision,
        fieldProps: pickFormItemProps,
        showColor: valueType.showColor
      }
    );
  }
  return text;
};
const defaultRenderText = (dataValue, valueType, props, valueTypeMap) => {
  const { mode = "read", emptyText = "-" } = props;
  if (emptyText !== false && mode === "read" && valueType !== "option" && valueType !== "switch") {
    if (typeof dataValue !== "boolean" && typeof dataValue !== "number" && !dataValue) {
      const { fieldProps, render } = props;
      if (render) {
        return render(dataValue, { mode, ...fieldProps }, /* @__PURE__ */ jsx(Fragment, { children: emptyText }));
      }
      return /* @__PURE__ */ jsx(Fragment, { children: emptyText });
    }
  }
  delete props.emptyText;
  if (typeof valueType === "object") {
    return defaultRenderTextByObject(dataValue, valueType, props);
  }
  const customValueTypeConfig = valueTypeMap && valueTypeMap[valueType];
  if (customValueTypeConfig) {
    delete props.ref;
    if (mode === "read") {
      return customValueTypeConfig.render?.(
        dataValue,
        {
          text: dataValue,
          ...props,
          mode: mode || "read"
        },
        /* @__PURE__ */ jsx(Fragment, { children: dataValue })
      );
    }
    if (mode === "update" || mode === "edit") {
      return customValueTypeConfig.renderFormItem?.(
        dataValue,
        {
          text: dataValue,
          ...props
        },
        /* @__PURE__ */ jsx(Fragment, { children: dataValue })
      );
    }
  }
  if (valueType === "money") {
    return /* @__PURE__ */ jsx(FieldMoney$1, { ...props, text: dataValue });
  }
  if (valueType === "date") {
    return /* @__PURE__ */ jsx(FieldHOC, { isLight: props.light, children: /* @__PURE__ */ jsx(
      FieldDatePicker$1,
      {
        text: dataValue,
        format: "YYYY-MM-DD",
        ...props
      }
    ) });
  }
  if (valueType === "dateWeek") {
    return /* @__PURE__ */ jsx(FieldHOC, { isLight: props.light, children: /* @__PURE__ */ jsx(
      FieldDatePicker$1,
      {
        text: dataValue,
        format: "YYYY-wo",
        picker: "week",
        ...props
      }
    ) });
  }
  if (valueType === "dateWeekRange") {
    const { fieldProps, ...otherProps } = props;
    return /* @__PURE__ */ jsx(FieldHOC, { isLight: props.light, children: /* @__PURE__ */ jsx(
      FieldRangePicker$1,
      {
        text: dataValue,
        format: "YYYY-W",
        showTime: true,
        fieldProps: {
          picker: "week",
          ...fieldProps
        },
        ...otherProps
      }
    ) });
  }
  if (valueType === "dateMonthRange") {
    const { fieldProps, ...otherProps } = props;
    return /* @__PURE__ */ jsx(FieldHOC, { isLight: props.light, children: /* @__PURE__ */ jsx(
      FieldRangePicker$1,
      {
        text: dataValue,
        format: "YYYY-MM",
        showTime: true,
        fieldProps: {
          picker: "month",
          ...fieldProps
        },
        ...otherProps
      }
    ) });
  }
  if (valueType === "dateQuarterRange") {
    const { fieldProps, ...otherProps } = props;
    return /* @__PURE__ */ jsx(FieldHOC, { isLight: props.light, children: /* @__PURE__ */ jsx(
      FieldRangePicker$1,
      {
        text: dataValue,
        format: "YYYY-Q",
        showTime: true,
        fieldProps: {
          picker: "quarter",
          ...fieldProps
        },
        ...otherProps
      }
    ) });
  }
  if (valueType === "dateYearRange") {
    const { fieldProps, ...otherProps } = props;
    return /* @__PURE__ */ jsx(FieldHOC, { isLight: props.light, children: /* @__PURE__ */ jsx(
      FieldRangePicker$1,
      {
        text: dataValue,
        format: "YYYY",
        showTime: true,
        fieldProps: {
          picker: "year",
          ...fieldProps
        },
        ...otherProps
      }
    ) });
  }
  if (valueType === "dateMonth") {
    return /* @__PURE__ */ jsx(FieldHOC, { isLight: props.light, children: /* @__PURE__ */ jsx(
      FieldDatePicker$1,
      {
        text: dataValue,
        format: "YYYY-MM",
        picker: "month",
        ...props
      }
    ) });
  }
  if (valueType === "dateQuarter") {
    return /* @__PURE__ */ jsx(FieldHOC, { isLight: props.light, children: /* @__PURE__ */ jsx(
      FieldDatePicker$1,
      {
        text: dataValue,
        format: "YYYY-[Q]Q",
        picker: "quarter",
        ...props
      }
    ) });
  }
  if (valueType === "dateYear") {
    return /* @__PURE__ */ jsx(FieldHOC, { isLight: props.light, children: /* @__PURE__ */ jsx(
      FieldDatePicker$1,
      {
        text: dataValue,
        format: "YYYY",
        picker: "year",
        ...props
      }
    ) });
  }
  if (valueType === "dateRange") {
    return /* @__PURE__ */ jsx(
      FieldRangePicker$1,
      {
        text: dataValue,
        format: "YYYY-MM-DD",
        ...props
      }
    );
  }
  if (valueType === "dateTime") {
    return /* @__PURE__ */ jsx(FieldHOC, { isLight: props.light, children: /* @__PURE__ */ jsx(
      FieldDatePicker$1,
      {
        text: dataValue,
        format: "YYYY-MM-DD HH:mm:ss",
        showTime: true,
        ...props
      }
    ) });
  }
  if (valueType === "dateTimeRange") {
    return /* @__PURE__ */ jsx(FieldHOC, { isLight: props.light, children: /* @__PURE__ */ jsx(
      FieldRangePicker$1,
      {
        text: dataValue,
        format: "YYYY-MM-DD HH:mm:ss",
        showTime: true,
        ...props
      }
    ) });
  }
  if (valueType === "time") {
    return /* @__PURE__ */ jsx(FieldHOC, { isLight: props.light, children: /* @__PURE__ */ jsx(
      FieldTimePicker$1,
      {
        text: dataValue,
        format: "HH:mm:ss",
        ...props
      }
    ) });
  }
  if (valueType === "timeRange") {
    return /* @__PURE__ */ jsx(FieldHOC, { isLight: props.light, children: /* @__PURE__ */ jsx(
      FieldTimeRangePicker,
      {
        text: dataValue,
        format: "HH:mm:ss",
        ...props
      }
    ) });
  }
  if (valueType === "fromNow") {
    return /* @__PURE__ */ jsx(FieldFromNow$1, { text: dataValue, ...props });
  }
  if (valueType === "index") {
    return /* @__PURE__ */ jsx(FieldIndexColumn, { children: dataValue + 1 });
  }
  if (valueType === "indexBorder") {
    return /* @__PURE__ */ jsx(FieldIndexColumn, { border: true, children: dataValue + 1 });
  }
  if (valueType === "percent") {
    return /* @__PURE__ */ jsx(FieldPercent$1, { text: dataValue, ...props });
  }
  if (valueType === "textarea") {
    return /* @__PURE__ */ jsx(FieldTextArea$1, { text: dataValue, ...props });
  }
  if (valueType === "digit") {
    return /* @__PURE__ */ jsx(FieldDigit$1, { text: dataValue, ...props });
  }
  if (valueType === "digitRange") {
    return /* @__PURE__ */ jsx(FieldDigitRange$1, { text: dataValue, ...props });
  }
  if (valueType === "second") {
    return /* @__PURE__ */ jsx(FieldSecond, { text: dataValue, ...props });
  }
  if (valueType === "select" || valueType === "text" && (props.valueEnum || props.request)) {
    return /* @__PURE__ */ jsx(FieldHOC, { isLight: props.light, children: /* @__PURE__ */ jsx(FieldSelect$1, { text: dataValue, ...props }) });
  }
  if (valueType === "checkbox") {
    return /* @__PURE__ */ jsx(FieldCheckbox$1, { text: dataValue, ...props });
  }
  if (valueType === "radio") {
    return /* @__PURE__ */ jsx(FieldRadio$1, { text: dataValue, ...props });
  }
  if (valueType === "radioButton") {
    return /* @__PURE__ */ jsx(FieldRadio$1, { radioType: "button", text: dataValue, ...props });
  }
  if (valueType === "switch") {
    return /* @__PURE__ */ jsx(FieldSwitch$1, { text: dataValue, ...props });
  }
  if (valueType === "option") {
    return /* @__PURE__ */ jsx(FieldOptions$1, { text: dataValue, ...props });
  }
  if (valueType === "password") {
    return /* @__PURE__ */ jsx(FieldPassword$1, { text: dataValue, ...props });
  }
  return /* @__PURE__ */ jsx(FieldText$1, { text: dataValue, ...props });
};
const ProFieldComponent = ({
  text,
  valueType = "text",
  mode = "read",
  onChange,
  renderFormItem,
  value,
  readonly,
  fieldProps: restFieldProps,
  ...rest
}, ref) => {
  const context = useContext(ProConfigContext);
  const onChangeCallBack = useRefFunction((...restParams) => {
    restFieldProps?.onChange?.(...restParams);
    onChange?.(...restParams);
  });
  const fieldProps = useDeepCompareMemo(() => {
    return (value !== void 0 || restFieldProps) && {
      value,
      // fieldProps 優先度更高，在類似 LightFilter 場景下需要覆蓋預設的 value 和 onChange
      ...omitUndefined(restFieldProps),
      onChange: onChangeCallBack
    };
  }, [value, restFieldProps, onChangeCallBack]);
  const renderedDom = useDeepCompareMemo(() => {
    return defaultRenderText(
      mode === "edit" ? fieldProps?.value ?? text ?? "" : text ?? fieldProps?.value ?? "",
      valueType || "text",
      omitUndefined({
        ref,
        ...rest,
        mode: readonly ? "read" : mode,
        renderFormItem: renderFormItem ? (curText, props, dom) => {
          const { placeholder: _placeholder, ...restProps } = props;
          const newDom = renderFormItem(curText, restProps, dom);
          if (React__default.isValidElement(newDom))
            return React__default.cloneElement(newDom, {
              ...fieldProps,
              ...newDom.props || {}
            });
          return newDom;
        } : void 0,
        placeholder: renderFormItem ? void 0 : rest?.placeholder ?? fieldProps?.placeholder,
        fieldProps: pickProProps(
          omitUndefined({
            ...fieldProps,
            placeholder: renderFormItem ? void 0 : rest?.placeholder ?? fieldProps?.placeholder
          })
        )
      }),
      context.valueTypeMap || {}
    );
  }, [
    context.valueTypeMap,
    fieldProps,
    mode,
    readonly,
    ref,
    renderFormItem,
    rest,
    text,
    valueType
  ]);
  return /* @__PURE__ */ jsx(React__default.Fragment, { children: renderedDom });
};
const ProField = React__default.forwardRef(
  ProFieldComponent
);

const FieldContext = React__default.createContext({});

const GridContext = createContext({
  grid: false,
  colProps: void 0,
  rowProps: void 0
});
const gridHelpers = ({ grid, rowProps, colProps }) => ({
  grid: !!grid,
  RowWrapper({ children, Wrapper, ...props } = {}) {
    if (!grid) {
      return Wrapper ? /* @__PURE__ */ jsx(Wrapper, { children }) : children;
    }
    return /* @__PURE__ */ jsx(Row, { gutter: 8, ...rowProps, ...props, children });
  },
  ColWrapper({ children, Wrapper, ...rest } = {}) {
    const props = useMemo(() => {
      const originProps = { ...colProps, ...rest };
      if (typeof originProps.span === "undefined" && typeof originProps.xs === "undefined") {
        originProps.xs = 24;
      }
      return originProps;
    }, [rest]);
    if (!grid) {
      return Wrapper ? /* @__PURE__ */ jsx(Wrapper, { children }) : children;
    }
    return /* @__PURE__ */ jsx(Col, { ...props, children });
  }
});
const useGridHelpers = (props) => {
  const config = useMemo(() => {
    {
      if (typeof props === "object") {
        return props;
      }
      return {
        grid: props
      };
    }
  }, [props]);
  const { grid, colProps } = useContext(GridContext);
  return useMemo(
    () => gridHelpers({
      grid: !!(grid || config.grid),
      rowProps: config?.rowProps,
      colProps: config?.colProps || colProps,
      Wrapper: config?.Wrapper
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      config?.Wrapper,
      config.grid,
      grid,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify([colProps, config?.colProps, config?.rowProps])
    ]
  );
};

const WIDTH_SIZE_ENUM = {
  // 適用於短數字，短文字或者選項
  xs: 104,
  s: 216,
  // 適用於較短欄位輸入、如姓名、電話、ID 等。
  sm: 216,
  m: 328,
  // 標準寬度，適用於大部分欄位長度。
  md: 328,
  l: 440,
  // 適用於較長欄位輸入，如長網址、標籤組、文件路徑等。
  lg: 440,
  // 適用於長文字輸入，如長連結、描述、備註等，通常搭配自適應多行輸入框或定高文字域使用。
  xl: 552
};
const ignoreWidthValueType = ["switch", "radioButton", "radio", "rate"];
function createField(Field, config) {
  Field.displayName = "ProFormComponent";
  const FieldWithContext = (props) => {
    const {
      valueType: tmpValueType,
      customLightMode,
      lightFilterLabelFormatter,
      valuePropName = "value",
      ignoreWidth,
      defaultProps,
      ...defaultFormItemProps
    } = { ...props?.filedConfig, ...config };
    const {
      label,
      tooltip,
      placeholder,
      width,
      bordered,
      messageVariables,
      ignoreFormItem,
      transform,
      convertValue,
      readonly,
      allowClear,
      colSize,
      getFormItemProps,
      getFieldProps,
      filedConfig,
      cacheForSwr,
      proFieldProps,
      ...rest
    } = { ...defaultProps, ...props };
    const valueType = tmpValueType || rest.valueType;
    const isIgnoreWidth = useMemo(
      () => ignoreWidth || ignoreWidthValueType.includes(valueType),
      [ignoreWidth, valueType]
    );
    const [, forceUpdate] = useState();
    const [onlyChange, forceUpdateByOnChange] = useState();
    const contextValue = React__default.useContext(FieldContext);
    const changedProps = useDeepCompareMemo(
      () => {
        return {
          formItemProps: getFormItemProps?.(),
          fieldProps: getFieldProps?.()
        };
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [getFieldProps, getFormItemProps, rest.dependenciesValues, onlyChange]
    );
    const fieldProps = useDeepCompareMemo(() => {
      const newFieldProps = {
        ...ignoreFormItem ? omitUndefined$1({ value: rest.value }) : {},
        placeholder,
        disabled: props.disabled,
        ...contextValue.fieldProps,
        ...changedProps.fieldProps,
        // 支援未傳遞getFieldProps的情況
        // 某些特殊hack情況下覆蓋原來設置的fieldProps參數
        ...rest.fieldProps
      };
      newFieldProps.style = omitUndefined$1(newFieldProps?.style);
      return newFieldProps;
    }, [
      ignoreFormItem,
      rest.value,
      rest.fieldProps,
      placeholder,
      props.disabled,
      contextValue.fieldProps,
      changedProps.fieldProps
    ]);
    const restFormItemProps = pickProFormItemProps(rest);
    const formItemProps = useDeepCompareMemo(
      () => ({
        ...contextValue.formItemProps,
        ...restFormItemProps,
        ...changedProps.formItemProps,
        // 支援未傳遞getFormItemProps的情況
        // 某些特殊hack情況下覆蓋原來設置的formItemProps參數
        ...rest.formItemProps
      }),
      [
        changedProps.formItemProps,
        contextValue.formItemProps,
        rest.formItemProps,
        restFormItemProps
      ]
    );
    const otherProps = useDeepCompareMemo(
      () => ({
        messageVariables,
        ...defaultFormItemProps,
        ...formItemProps
      }),
      [defaultFormItemProps, formItemProps, messageVariables]
    );
    noteOnce(
      // eslint-disable-next-line @typescript-eslint/dot-notation
      !rest["defaultValue"],
      "請不要在 Form 中使用 defaultXXX。如果需要預設值請使用 initialValues 和 initialValue。"
    );
    const { prefixName } = useContext(FieldContext$1);
    const proFieldKey = useDeepCompareMemo(() => {
      let name = otherProps?.name;
      if (Array.isArray(name))
        name = name.join("_");
      if (Array.isArray(prefixName) && name)
        name = `${prefixName.join(".")}.${name}`;
      const key = name && `form-${contextValue.formKey ?? ""}-field-${name}`;
      return key;
    }, [stringify(otherProps?.name), prefixName, contextValue.formKey]);
    const onChange = useRefFunction((...restParams) => {
      if (getFormItemProps || getFieldProps) {
        forceUpdateByOnChange([]);
      } else if (rest.renderFormItem) {
        forceUpdate([]);
      }
      fieldProps?.onChange?.(...restParams);
    });
    const style = useDeepCompareMemo(() => {
      const newStyle = {
        width: (
          // @ts-ignore
          width && !WIDTH_SIZE_ENUM[width] ? width : contextValue.grid ? "100%" : void 0
        ),
        ...fieldProps?.style
      };
      if (isIgnoreWidth)
        Reflect.deleteProperty(newStyle, "width");
      return omitUndefined$1(newStyle);
    }, [stringify(fieldProps?.style), contextValue.grid, isIgnoreWidth, width]);
    const className = useDeepCompareMemo(() => {
      const isSizeEnum = width && WIDTH_SIZE_ENUM[width];
      return classNames(fieldProps?.className, {
        "pro-field": isSizeEnum,
        [`pro-field-${width}`]: isSizeEnum && !isIgnoreWidth
      }) || void 0;
    }, [width, fieldProps?.className, isIgnoreWidth]);
    const fieldProFieldProps = useDeepCompareMemo(() => {
      return omitUndefined$1({
        ...contextValue.proFieldProps,
        mode: rest?.mode,
        readonly,
        params: rest.params,
        proFieldKey,
        cacheForSwr,
        ...proFieldProps
      });
    }, [
      contextValue.proFieldProps,
      rest?.mode,
      rest.params,
      readonly,
      proFieldKey,
      cacheForSwr,
      proFieldProps
    ]);
    const fieldFieldProps = useDeepCompareMemo(() => {
      return {
        onChange,
        allowClear,
        ...fieldProps,
        style,
        className
      };
    }, [allowClear, className, onChange, fieldProps, style]);
    const field = useDeepCompareMemo(() => {
      return /* @__PURE__ */ jsx(
        Field,
        {
          ...rest,
          fieldProps: fieldFieldProps,
          proFieldProps: fieldProFieldProps,
          ref: props?.fieldRef
        },
        props.proFormFieldKey || props.name
      );
    }, [fieldProFieldProps, fieldFieldProps, rest]);
    const formItem = useDeepCompareMemo(() => {
      return /* @__PURE__ */ jsx(
        ProFormItem,
        {
          label: label && proFieldProps?.light !== true ? label : void 0,
          tooltip: proFieldProps?.light !== true && tooltip,
          valuePropName,
          ...otherProps,
          ignoreFormItem,
          transform,
          dataFormat: fieldProps?.format,
          valueType,
          messageVariables: {
            label: label || "",
            ...otherProps?.messageVariables
          },
          convertValue,
          children: field
        },
        props.proFormFieldKey || otherProps.name?.toString()
      );
    }, [
      label,
      proFieldProps?.light,
      tooltip,
      valuePropName,
      props.proFormFieldKey,
      otherProps,
      ignoreFormItem,
      transform,
      fieldProps,
      valueType,
      convertValue,
      bordered,
      field,
      allowClear,
      customLightMode,
      lightFilterLabelFormatter
    ]);
    const { ColWrapper } = useGridHelpers(rest);
    return /* @__PURE__ */ jsx(ColWrapper, { children: formItem });
  };
  const DependencyWrapper = (props) => {
    const { dependencies } = props;
    return dependencies ? /* @__PURE__ */ jsx(
      ProFormDependency,
      {
        name: dependencies,
        originDependencies: props?.originDependencies,
        children: (values) => {
          return /* @__PURE__ */ jsx(
            FieldWithContext,
            {
              dependenciesValues: values,
              dependencies,
              ...props
            }
          );
        }
      }
    ) : /* @__PURE__ */ jsx(FieldWithContext, { dependencies, ...props });
  };
  return DependencyWrapper;
}

const EditOrReadOnlyContext = React__default.createContext({
  mode: "edit"
});

const BaseProFormField = (props) => {
  const {
    fieldProps,
    children,
    labelCol,
    label,
    autoFocus,
    isDefaultDom,
    render,
    proFieldProps,
    renderFormItem,
    valueType,
    initialValue,
    onChange,
    valueEnum,
    params,
    name,
    dependenciesValues,
    cacheForSwr = false,
    valuePropName = "value",
    ...restProps
  } = props;
  const modeContext = useContext(EditOrReadOnlyContext);
  const propsParams = useMemo(() => {
    return dependenciesValues && restProps.request ? {
      ...params,
      ...dependenciesValues || {}
    } : params;
  }, [dependenciesValues, params, restProps.request]);
  const memoUnChange = useRefFunction((...restParams) => {
    if (fieldProps?.onChange) {
      fieldProps?.onChange?.(...restParams);
      return;
    }
  });
  const memoFieldProps = useMemo(
    () => ({
      autoFocus,
      ...fieldProps,
      onChange: memoUnChange
    }),
    [autoFocus, fieldProps, memoUnChange]
  );
  const childrenRender = useMemo(() => {
    if (children) {
      if (React__default.isValidElement(children)) {
        return React__default.cloneElement(children, {
          ...restProps,
          onChange: (...restParams) => {
            if (fieldProps?.onChange) {
              fieldProps?.onChange?.(...restParams);
              return;
            }
            onChange?.(...restParams);
          },
          ...children.props
        });
      }
      return /* @__PURE__ */ jsx(Fragment, { children });
    }
    return;
  }, [children, fieldProps?.onChange, onChange, restProps]);
  if (childrenRender) {
    return childrenRender;
  }
  return /* @__PURE__ */ jsx(
    ProField,
    {
      text: fieldProps?.[valuePropName],
      render,
      renderFormItem,
      valueType: valueType || "text",
      cacheForSwr,
      fieldProps: memoFieldProps,
      valueEnum: runFunction(valueEnum),
      ...proFieldProps,
      ...restProps,
      mode: proFieldProps?.mode || modeContext.mode || "edit",
      params: propsParams
    }
  );
};
const ProFormField = createField(
  memo(BaseProFormField, (prevProps, nextProps) => {
    return isDeepEqualReact(nextProps, prevProps, ["onChange", "onBlur"]);
  })
);

const CheckboxGroup = React__default.forwardRef(
  ({ options, fieldProps, proFieldProps, valueEnum, ...rest }, ref) => /* @__PURE__ */ jsx(
    ProFormField,
    {
      ref,
      valueType: "checkbox",
      valueEnum: runFunction(valueEnum, void 0),
      fieldProps: {
        options,
        ...fieldProps
      },
      proFieldProps,
      ...rest
    }
  )
);
const ProFormCheckboxComponents = React__default.forwardRef(
  ({ fieldProps, children }, ref) => {
    return /* @__PURE__ */ jsx(Checkbox, { ref, ...fieldProps, children });
  }
);
const ProFormCheckbox = createField(
  ProFormCheckboxComponents,
  {
    valuePropName: "checked"
  }
);
const WrappedProFormCheckbox = ProFormCheckbox;
WrappedProFormCheckbox.Group = CheckboxGroup;

const valueType$d = "dateMonthRange";
const DateMonthRangePicker = React__default.forwardRef(({ fieldProps, proFieldProps, ...rest }, ref) => {
  const context = useContext(FieldContext);
  return /* @__PURE__ */ jsx(
    ProFormField,
    {
      ref,
      fieldProps: {
        getPopupContainer: context.getPopupContainer,
        ...fieldProps
      },
      valueType: valueType$d,
      proFieldProps,
      filedConfig: {
        valueType: valueType$d,
        customLightMode: true,
        lightFilterLabelFormatter: (value) => dateArrayFormatter(value, fieldProps?.format || "YYYY-MM")
      },
      ...rest
    }
  );
});

const valueType$c = "date";
const ProFormDatePicker = React__default.forwardRef(({ proFieldProps, fieldProps, ...rest }, ref) => {
  const context = useContext(FieldContext);
  return /* @__PURE__ */ jsx(
    ProFormField,
    {
      ref,
      valueType: valueType$c,
      fieldProps: {
        getPopupContainer: context.getPopupContainer,
        ...fieldProps
      },
      proFieldProps,
      filedConfig: {
        valueType: valueType$c,
        customLightMode: true
      },
      ...rest
    }
  );
});

const valueType$b = "dateMonth";
const ProFormDatePickerMonth = React__default.forwardRef(({ proFieldProps, fieldProps, ...rest }, ref) => {
  const context = useContext(FieldContext);
  return /* @__PURE__ */ jsx(
    ProFormField,
    {
      ref,
      valueType: valueType$b,
      fieldProps: {
        getPopupContainer: context.getPopupContainer,
        ...fieldProps
      },
      proFieldProps,
      filedConfig: {
        valueType: valueType$b,
        customLightMode: true
      },
      ...rest
    }
  );
});

const valueType$a = "dateQuarter";
const ProFormDatePickerQuarter = React__default.forwardRef(({ fieldProps, ...rest }, ref) => {
  const context = useContext(FieldContext);
  return /* @__PURE__ */ jsx(
    ProFormField,
    {
      ref,
      valueType: valueType$a,
      fieldProps: {
        getPopupContainer: context.getPopupContainer,
        ...fieldProps
      },
      filedConfig: {
        valueType: valueType$a,
        customLightMode: true
      },
      ...rest
    }
  );
});

const valueType$9 = "dateWeek";
const ProFormDatePickerWeek = React__default.forwardRef(({ proFieldProps, fieldProps, ...rest }, ref) => {
  const context = useContext(FieldContext);
  return /* @__PURE__ */ jsx(
    ProFormField,
    {
      ref,
      valueType: valueType$9,
      fieldProps: {
        getPopupContainer: context.getPopupContainer,
        ...fieldProps
      },
      proFieldProps,
      filedConfig: {
        valueType: valueType$9,
        customLightMode: true
      },
      ...rest
    }
  );
});

const valueType$8 = "dateYear";
const ProFormDatePickerYear = React__default.forwardRef(({ proFieldProps, fieldProps, ...rest }, ref) => {
  const context = useContext(FieldContext);
  return /* @__PURE__ */ jsx(
    ProFormField,
    {
      ref,
      valueType: valueType$8,
      fieldProps: {
        getPopupContainer: context.getPopupContainer,
        ...fieldProps
      },
      proFieldProps,
      filedConfig: {
        valueType: valueType$8,
        customLightMode: true
      },
      ...rest
    }
  );
});

const ExportComponent = ProFormDatePicker;
ExportComponent.Week = ProFormDatePickerWeek;
ExportComponent.Month = ProFormDatePickerMonth;
ExportComponent.Quarter = ProFormDatePickerQuarter;
ExportComponent.Year = ProFormDatePickerYear;
ExportComponent.displayName = "ProFormComponent";

const valueType$7 = "dateQuarterRange";
const DateQuarterRangePicker = React__default.forwardRef(({ fieldProps, proFieldProps, ...rest }, ref) => {
  const context = useContext(FieldContext);
  return /* @__PURE__ */ jsx(
    ProFormField,
    {
      ref,
      fieldProps: {
        getPopupContainer: context.getPopupContainer,
        ...fieldProps
      },
      valueType: valueType$7,
      proFieldProps,
      filedConfig: {
        valueType: valueType$7,
        customLightMode: true,
        lightFilterLabelFormatter: (value) => dateArrayFormatter(value, fieldProps?.format || "YYYY-W")
      },
      ...rest
    }
  );
});

const valueType$6 = "dateRange";
const ProFormDateRangePicker = React__default.forwardRef(({ fieldProps, proFieldProps, ...rest }, ref) => {
  const context = useContext(FieldContext);
  return /* @__PURE__ */ jsx(
    ProFormField,
    {
      ref,
      fieldProps: {
        getPopupContainer: context.getPopupContainer,
        ...fieldProps
      },
      valueType: valueType$6,
      proFieldProps,
      filedConfig: {
        valueType: valueType$6,
        customLightMode: true,
        lightFilterLabelFormatter: (value) => dateArrayFormatter(value, fieldProps?.format || "YYYY-MM-DD")
      },
      ...rest
    }
  );
});

const valueType$5 = "dateTime";
const ProFormDateTimePicker = React__default.forwardRef(({ fieldProps, proFieldProps, ...rest }, ref) => {
  const context = useContext(FieldContext);
  return /* @__PURE__ */ jsx(
    ProFormField,
    {
      ref,
      fieldProps: {
        getPopupContainer: context.getPopupContainer,
        ...fieldProps
      },
      valueType: valueType$5,
      proFieldProps,
      filedConfig: {
        valueType: valueType$5,
        customLightMode: true
      },
      ...rest
    }
  );
});

const valueType$4 = "dateTimeRange";
const ProFormDateTimeRangePicker = React__default.forwardRef(({ fieldProps, proFieldProps, ...rest }, ref) => {
  const context = useContext(FieldContext);
  return /* @__PURE__ */ jsx(
    ProFormField,
    {
      ref,
      fieldProps: {
        getPopupContainer: context.getPopupContainer,
        ...fieldProps
      },
      valueType: valueType$4,
      proFieldProps,
      filedConfig: {
        valueType: valueType$4,
        customLightMode: true,
        lightFilterLabelFormatter: (value) => dateArrayFormatter(value, "YYYY-MM-DD HH:mm:ss")
      },
      ...rest
    }
  );
});

const valueType$3 = "dateWeekRange";
const DateWeekRangePicker = React__default.forwardRef(({ fieldProps, proFieldProps, ...rest }, ref) => {
  const context = useContext(FieldContext);
  return /* @__PURE__ */ jsx(
    ProFormField,
    {
      ref,
      fieldProps: {
        getPopupContainer: context.getPopupContainer,
        ...fieldProps
      },
      valueType: valueType$3,
      proFieldProps,
      filedConfig: {
        valueType: valueType$3,
        customLightMode: true,
        lightFilterLabelFormatter: (value) => dateArrayFormatter(value, fieldProps?.format || "YYYY-MM-DD")
      },
      ...rest
    }
  );
});

const valueType$2 = "dateYearRange";
const DateYearRangePicker = React__default.forwardRef(({ fieldProps, proFieldProps, ...rest }, ref) => {
  const context = useContext(FieldContext);
  return /* @__PURE__ */ jsx(
    ProFormField,
    {
      ref,
      fieldProps: {
        getPopupContainer: context.getPopupContainer,
        ...fieldProps
      },
      valueType: valueType$2,
      proFieldProps,
      filedConfig: {
        valueType: valueType$2,
        customLightMode: true,
        lightFilterLabelFormatter: (value) => dateArrayFormatter(value, fieldProps?.format || "YYYY")
      },
      ...rest
    }
  );
});

const listToArray = (children) => {
  if (Array.isArray(children)) {
    return children;
  }
  if (typeof children === "function") {
    return [children];
  }
  return toArray(children);
};
const ProFormListItem = (props) => {
  const {
    creatorButtonProps,
    deleteIconProps,
    copyIconProps,
    itemContainerRender,
    itemRender,
    alwaysShowItemLabel,
    prefixCls,
    creatorRecord,
    action,
    actionGuard,
    children,
    actionRender,
    fields,
    meta,
    field,
    index,
    formInstance,
    originName,
    containerClassName,
    containerStyle,
    min,
    max,
    count,
    ...rest
  } = props;
  const { hashId } = useContext(ProProvider);
  const listContext = useContext(FormListContext);
  const unmountedRef = useRef(false);
  const { mode } = useContext(EditOrReadOnlyContext);
  const [loadingRemove, setLoadingRemove] = useState(false);
  const [loadingCopy, setLoadingCopy] = useState(false);
  useEffect(() => {
    return () => {
      unmountedRef.current = true;
    };
  }, []);
  const getCurrentRowData = () => {
    return formInstance.getFieldValue(
      [listContext.listName, originName, index?.toString()].flat(1).filter((item) => item !== null && item !== void 0)
    );
  };
  const formListAction = {
    getCurrentRowData,
    setCurrentRowData: (data) => {
      const oldTableDate = formInstance?.getFieldsValue?.() || {};
      const rowKeyName = [listContext.listName, originName, index?.toString()].flat(1).filter((item) => item !== null && item !== void 0);
      const updateValues = set(oldTableDate, rowKeyName, {
        // 只是簡單的覆蓋，如果很複雜的話，需要自己處理
        ...getCurrentRowData(),
        ...data || {}
      });
      return formInstance.setFieldsValue(updateValues);
    }
  };
  const childrenArray = listToArray(children).map((childrenItem) => {
    if (typeof childrenItem === "function") {
      return childrenItem?.(
        field,
        index,
        {
          ...action,
          ...formListAction
        },
        count
      );
    }
    return childrenItem;
  }).map((childrenItem, itemIndex) => {
    if (React__default.isValidElement(childrenItem)) {
      return React__default.cloneElement(childrenItem, {
        key: childrenItem.key || childrenItem?.props?.name || itemIndex,
        ...childrenItem?.props || {}
      });
    }
    return childrenItem;
  });
  const copyIcon = useMemo(() => {
    if (mode === "read")
      return null;
    if (copyIconProps === false || max === count)
      return null;
    const { Icon = ContentCopyIcon, tooltipText } = copyIconProps;
    return /* @__PURE__ */ jsx(Tooltip, { title: tooltipText, children: loadingCopy ? /* @__PURE__ */ jsx(CircularProgress, {}) : /* @__PURE__ */ jsx(
      Icon,
      {
        className: `${prefixCls}-action-icon action-copy ${hashId}`.trim(),
        onClick: async () => {
          setLoadingCopy(true);
          const row = formInstance?.getFieldValue(
            [listContext.listName, originName, field.name].filter((item) => item !== void 0).flat(1)
          );
          await action.add(row);
          setLoadingCopy(false);
        }
      }
    ) }, "copy");
  }, [
    copyIconProps,
    max,
    count,
    loadingCopy,
    prefixCls,
    hashId,
    formInstance,
    listContext.listName,
    field.name,
    originName,
    action
  ]);
  const deleteIcon = useMemo(() => {
    if (mode === "read")
      return null;
    if (deleteIconProps === false || min === count)
      return null;
    const { Icon = DeleteIcon, tooltipText } = deleteIconProps;
    return /* @__PURE__ */ jsx(Tooltip, { title: tooltipText, children: loadingRemove ? /* @__PURE__ */ jsx(CircularProgress, {}) : /* @__PURE__ */ jsx(
      Icon,
      {
        className: `${prefixCls}-action-icon action-remove ${hashId}`.trim(),
        onClick: async () => {
          setLoadingRemove(true);
          await action.remove(field.name);
          if (!unmountedRef.current) {
            setLoadingRemove(false);
          }
        }
      }
    ) }, "delete");
  }, [
    deleteIconProps,
    min,
    count,
    loadingRemove,
    prefixCls,
    hashId,
    action,
    field.name
  ]);
  const defaultActionDom = useMemo(
    () => [copyIcon, deleteIcon].filter(
      (item) => item !== null && item !== void 0
    ),
    [copyIcon, deleteIcon]
  );
  const actions = actionRender?.(field, action, defaultActionDom, count) || defaultActionDom;
  const dom = actions.length > 0 && mode !== "read" ? /* @__PURE__ */ jsx("div", { className: `${prefixCls}-action ${hashId}`.trim(), children: actions }) : null;
  const options = {
    name: rest.name,
    field,
    index,
    record: formInstance?.getFieldValue?.(
      [listContext.listName, originName, field.name].filter((item) => item !== void 0).flat(1)
    ),
    fields,
    operation: action,
    meta
  };
  const { grid } = useGridHelpers();
  const itemContainer = itemContainerRender?.(childrenArray, options) || childrenArray;
  const contentDom = itemRender?.(
    {
      listDom: /* @__PURE__ */ jsx(
        "div",
        {
          className: `${prefixCls}-container ${containerClassName || ""} ${hashId || ""}`.trim(),
          style: {
            width: grid ? "100%" : void 0,
            ...containerStyle
          },
          children: itemContainer
        }
      ),
      action: dom
    },
    options
  ) || /* @__PURE__ */ jsxs(
    "div",
    {
      className: `${prefixCls}-item ${hashId} 
      ${alwaysShowItemLabel === void 0 && `${prefixCls}-item-default`}
      ${alwaysShowItemLabel ? `${prefixCls}-item-show-label` : ""}`,
      style: {
        display: "flex",
        alignItems: "flex-end"
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `${prefixCls}-container ${containerClassName || ""} ${hashId}`.trim(),
            style: {
              width: grid ? "100%" : void 0,
              ...containerStyle
            },
            children: itemContainer
          }
        ),
        dom
      ]
    }
  );
  return /* @__PURE__ */ jsx(
    FormListContext.Provider,
    {
      value: {
        ...field,
        listName: [listContext.listName, originName, field.name].filter((item) => item !== void 0).flat(1)
      },
      children: contentDom
    }
  );
};

const ProFormListContainer = (props) => {
  const intl = useIntl();
  const {
    creatorButtonProps,
    prefixCls,
    children,
    creatorRecord,
    action,
    fields,
    actionGuard,
    max,
    fieldExtraRender,
    meta,
    containerClassName,
    containerStyle,
    onAfterAdd,
    onAfterRemove
  } = props;
  const { hashId } = useContext(ProProvider);
  const fieldKeyMap = useRef(/* @__PURE__ */ new Map());
  const [loading, setLoading] = useState(false);
  const uuidFields = useMemo(() => {
    return fields.map((field) => {
      if (!fieldKeyMap.current?.has(field.key.toString())) {
        fieldKeyMap.current?.set(field.key.toString(), nanoid());
      }
      const uuid = fieldKeyMap.current?.get(field.key.toString());
      return {
        ...field,
        uuid
      };
    });
  }, [fields]);
  const wrapperAction = useMemo(() => {
    const wrapAction = { ...action };
    const count = uuidFields.length;
    if (actionGuard?.beforeAddRow) {
      wrapAction.add = async (...rest) => {
        const success = await actionGuard.beforeAddRow(...rest, count);
        if (success) {
          const res = action.add(...rest);
          onAfterAdd?.(...rest, count + 1);
          return res;
        }
        return false;
      };
    } else {
      wrapAction.add = async (...rest) => {
        const res = action.add(...rest);
        onAfterAdd?.(...rest, count + 1);
        return res;
      };
    }
    if (actionGuard?.beforeRemoveRow) {
      wrapAction.remove = async (...rest) => {
        const success = await actionGuard.beforeRemoveRow(...rest, count);
        if (success) {
          const res = action.remove(...rest);
          onAfterRemove?.(...rest, count - 1);
          return res;
        }
        return false;
      };
    } else {
      wrapAction.remove = async (...rest) => {
        const res = action.remove(...rest);
        onAfterRemove?.(...rest, count - 1);
        return res;
      };
    }
    return wrapAction;
  }, [
    action,
    actionGuard?.beforeAddRow,
    actionGuard?.beforeRemoveRow,
    onAfterAdd,
    onAfterRemove,
    uuidFields.length
  ]);
  const creatorButton = useMemo(() => {
    if (creatorButtonProps === false || uuidFields.length === max)
      return null;
    const {
      position = "bottom",
      creatorButtonText = intl.formatMessage({
        id: "editableTable.action.add",
        defaultMessage: "新增一行"
      })
    } = creatorButtonProps || {};
    return /* @__PURE__ */ jsx(
      LoadingButton,
      {
        className: `${prefixCls}-creator-button-${position} ${hashId || ""}`.trim(),
        loading,
        startIcon: /* @__PURE__ */ jsx(AddIcon, {}),
        onClick: async () => {
          setLoading(true);
          let index = uuidFields.length;
          await wrapperAction.add(runFunction(creatorRecord) || {}, index);
          setLoading(false);
        },
        children: creatorButtonText
      }
    );
  }, [
    creatorButtonProps,
    uuidFields.length,
    max,
    intl,
    prefixCls,
    hashId,
    loading,
    wrapperAction,
    creatorRecord
  ]);
  const readOnlyContext = useContext(EditOrReadOnlyContext);
  const defaultStyle = {
    width: "max-content",
    maxWidth: "100%",
    minWidth: "100%",
    ...containerStyle
  };
  const itemList = useMemo(() => {
    return uuidFields.map((field, index) => {
      return /* @__PURE__ */ createElement(
        ProFormListItem,
        {
          ...props,
          key: field.uuid,
          field,
          index,
          action: wrapperAction,
          count: uuidFields.length
        },
        children
      );
    });
  }, [children, props, uuidFields, wrapperAction]);
  if (readOnlyContext.mode === "read" || props.readonly === true) {
    return /* @__PURE__ */ jsx(Fragment, { children: itemList });
  }
  return /* @__PURE__ */ jsxs("div", { style: defaultStyle, className: containerClassName, children: [
    creatorButtonProps !== false && creatorButtonProps?.position === "top" && creatorButton,
    itemList,
    fieldExtraRender && fieldExtraRender(wrapperAction, meta),
    creatorButtonProps !== false && creatorButtonProps?.position !== "top" && creatorButton
  ] });
};

const genProStyle$3 = (token) => {
  return {
    [`${token.ipassCls}-pro`]: {
      [`${token.ipassCls}-form:not(${token.ipassCls}-form-horizontal)`]: {
        [token.componentCls]: {
          [`&-item:not(${token.componentCls}-item-show-label)`]: {
            [`${token.ipassCls}-form-item-label`]: {
              display: "none"
            }
          }
        }
      }
    },
    [token.componentCls]: {
      maxWidth: "100%",
      "&-item": {
        "&&-show-label": {
          [`${token.ipassCls}-form-item-label`]: {
            display: "inline-block"
          }
        },
        "&&-default:first-child": {
          "div:first-of-type": {
            [`${token.ipassCls}-form-item`]: {
              [`${token.ipassCls}-form-item-label`]: {
                display: "inline-block"
              }
            }
          }
        },
        "&&-default:not(:first-child)": {
          "div:first-of-type": {
            [`${token.ipassCls}-form-item`]: {
              [`${token.ipassCls}-form-item-label`]: {
                display: "none"
              }
            }
          }
        }
      },
      "&-action": {
        display: "flex",
        height: "32px",
        marginBlockEnd: token.marginLG,
        lineHeight: "32px"
      },
      "&-action-icon": {
        marginInlineStart: 8,
        cursor: "pointer",
        transition: "color 0.3s ease-in-out",
        "&:hover": {
          color: token.colorPrimaryTextHover
        }
      },
      [`${token.proComponentsCls}-card ${token.proComponentsCls}-card-extra`]: {
        [token.componentCls]: {
          "&-action": {
            marginBlockEnd: 0
          }
        }
      },
      "&-creator-button-top": {
        marginBlockEnd: 24
      }
    }
  };
};
function useStyle$o(prefixCls) {
  return useStyle$A("ProFormList", (token) => {
    const proToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genProStyle$3(proToken)];
  });
}

const FormListContext = React__default.createContext({});
function ProFormList(props) {
  const actionRefs = useRef();
  const context = useContext(ConfigProvider.ConfigContext);
  const listContext = useContext(FormListContext);
  const baseClassName = context.getPrefixCls("pro-form-list");
  const intl = useIntl();
  const {
    actionRender,
    creatorButtonProps,
    label,
    alwaysShowItemLabel,
    tooltip,
    creatorRecord,
    itemRender,
    rules,
    itemContainerRender,
    fieldExtraRender,
    copyIconProps = {
      Icon: ContentCopyIcon,
      tooltipText: intl.formatMessage({ id: "copyThisLine", defaultMessage: "複製此項" })
    },
    children,
    deleteIconProps = {
      Icon: DeleteIcon,
      tooltipText: intl.formatMessage({ id: "deleteThisLine", defaultMessage: "刪除此項" })
    },
    actionRef,
    style,
    prefixCls,
    actionGuard,
    min,
    max,
    colProps,
    wrapperCol,
    rowProps,
    onAfterAdd,
    onAfterRemove,
    isValidateList = false,
    emptyListMessage = "列表不能為空",
    className,
    ...rest
  } = props;
  const { ColWrapper, RowWrapper } = useGridHelpers({ colProps, rowProps });
  const proFormContext = useContext(ProFormContext);
  const name = useMemo(() => {
    if (listContext.name === void 0) {
      return [rest.name].flat(1);
    }
    return [listContext.name, rest.name].flat(1);
  }, [listContext.name, rest.name]);
  useImperativeHandle(
    actionRef,
    () => ({
      ...actionRefs.current,
      get: (index) => {
        return proFormContext.formRef.current.getFieldValue([
          ...name,
          index
        ]);
      },
      getList: () => proFormContext.formRef.current.getFieldValue([...name])
    }),
    [name, proFormContext.formRef]
  );
  useEffect(() => {
    noteOnce(
      !!proFormContext.formRef,
      `ProFormList 必須要放到 ProForm 中,否則會造成行為異常。`
    );
    noteOnce(
      !!proFormContext.formRef,
      `Proformlist must be placed in ProForm, otherwise it will cause abnormal behavior.`
    );
  }, [proFormContext.formRef]);
  const { wrapSSR, hashId } = useStyle$o(baseClassName);
  if (!proFormContext.formRef)
    return null;
  return wrapSSR(
    /* @__PURE__ */ jsx(ColWrapper, { children: /* @__PURE__ */ jsx("div", { className: classNames(baseClassName, hashId), style, children: /* @__PURE__ */ jsx(
      Form.Item,
      {
        label,
        prefixCls,
        tooltip,
        style,
        required: rules?.some((rule) => rule.required),
        wrapperCol,
        className,
        ...rest,
        name: isValidateList ? name : void 0,
        rules: isValidateList ? [
          {
            validator: (rule, value) => {
              if (!value || value.length === 0) {
                return Promise.reject(new Error(emptyListMessage));
              }
              return Promise.resolve();
            },
            required: true
          }
        ] : void 0,
        children: /* @__PURE__ */ jsx(Form.List, { rules, ...rest, name, children: (fields, action, meta) => {
          actionRefs.current = action;
          return /* @__PURE__ */ jsxs(RowWrapper, { children: [
            /* @__PURE__ */ jsx(
              ProFormListContainer,
              {
                name,
                readonly: !!rest.readonly,
                originName: rest.name,
                copyIconProps,
                deleteIconProps,
                formInstance: proFormContext.formRef.current,
                prefixCls: baseClassName,
                meta,
                fields,
                itemContainerRender,
                itemRender,
                fieldExtraRender,
                creatorButtonProps,
                creatorRecord,
                actionRender,
                action,
                actionGuard,
                alwaysShowItemLabel,
                min,
                max,
                count: fields.length,
                onAfterAdd: (defaultValue, insertIndex, count) => {
                  if (isValidateList) {
                    proFormContext.formRef.current.validateFields([name]);
                  }
                  onAfterAdd?.(defaultValue, insertIndex, count);
                },
                onAfterRemove: (index, count) => {
                  if (isValidateList) {
                    if (count === 0) {
                      proFormContext.formRef.current.validateFields([
                        name
                      ]);
                    }
                  }
                  onAfterRemove?.(index, count);
                },
                containerClassName: props.containerClassName,
                containerStyle: props.containerStyle,
                children
              }
            ),
            /* @__PURE__ */ jsx(Form.ErrorList, { errors: meta.errors })
          ] });
        } })
      }
    ) }) })
  );
}

const ProFormDependency = ({
  name: nameList,
  originDependencies = nameList,
  children,
  ignoreFormListField,
  ...rest
}) => {
  const context = useContext(ProFormContext);
  const formListField = useContext(FormListContext);
  const flattenNames = useMemo(() => {
    return nameList.map((itemName) => {
      const name = [itemName];
      if (!ignoreFormListField && formListField.name !== void 0 && formListField.listName?.length) {
        name.unshift(formListField.listName);
      }
      return name.flat(1);
    });
  }, [
    formListField.listName,
    formListField.name,
    ignoreFormListField,
    nameList?.toString()
  ]);
  return /* @__PURE__ */ jsx(
    Form.Item,
    {
      ...rest,
      noStyle: true,
      shouldUpdate: (prevValues, nextValues, info) => {
        if (typeof rest.shouldUpdate === "boolean") {
          return rest.shouldUpdate;
        } else if (typeof rest.shouldUpdate === "function") {
          return rest.shouldUpdate?.(prevValues, nextValues, info);
        }
        return flattenNames.some((name) => {
          return !isDeepEqualReact(
            get$1(prevValues, name),
            get$1(nextValues, name)
          );
        });
      },
      children: (form) => {
        let values = {};
        for (let i = 0; i < nameList.length; i++) {
          const itemName = flattenNames[i], itemOriginName = originDependencies[i];
          const finalName = [itemOriginName].flat(1);
          let value = context.getFieldFormatValueObject?.(itemName);
          if (value && Object.keys(value).length) {
            values = merge({}, values, value);
            if (get$1(value, itemName)) {
              values = set(values, finalName, get$1(value, itemName), false);
            }
          } else {
            value = form.getFieldValue?.(itemName);
            if (typeof value !== "undefined") {
              values = set(values, finalName, value, false);
            }
          }
        }
        return children?.(values, {
          ...form,
          ...context
        });
      }
    }
  );
};
ProFormDependency.displayName = "ProFormDependency";

const ProFormDigit$1 = ({ fieldProps, min, proFieldProps, max, ...rest }, ref) => {
  return /* @__PURE__ */ jsx(
    ProFormField,
    {
      valueType: "digit",
      fieldProps: {
        min,
        max,
        ...fieldProps
      },
      ref,
      filedConfig: {
        defaultProps: {
          width: "100%"
        }
      },
      proFieldProps,
      ...rest
    }
  );
};
const ForwardRefProFormDigit = React__default.forwardRef(ProFormDigit$1);

const ProFormDigit = ({ fieldProps, proFieldProps, ...rest }, ref) => {
  return /* @__PURE__ */ jsx(
    ProFormField,
    {
      valueType: "digitRange",
      fieldProps: {
        ...fieldProps
      },
      ref,
      filedConfig: {
        defaultProps: {
          width: "100%"
        }
      },
      proFieldProps,
      ...rest
    }
  );
};
const index$3 = React__default.forwardRef(ProFormDigit);

const FieldSetType = {
  space: CompoundedSpace,
  group: Input.Group
};
function defaultGetValueFromEvent(valuePropName, ...args) {
  const event = args[0];
  if (event && event.target && valuePropName in event.target) {
    return event.target[valuePropName];
  }
  return event;
}
const FieldSet = ({
  children,
  value = [],
  valuePropName,
  onChange,
  fieldProps,
  space,
  type = "space",
  transform,
  convertValue,
  ...rest
}) => {
  const fieldSetOnChange = useRefFunction((fileValue, index) => {
    const newValues = [...value];
    newValues[index] = defaultGetValueFromEvent(
      valuePropName || "value",
      fileValue
    );
    onChange?.(newValues);
    fieldProps?.onChange?.(newValues);
  });
  let itemIndex = -1;
  const list = toArray(children).map((item) => {
    if (React__default.isValidElement(item)) {
      itemIndex += 1;
      const index = itemIndex;
      const isProFromItem = (
        // @ts-ignore
        item?.type?.displayName === "ProFormComponent" || item?.props?.readonly
      );
      const forkProps = isProFromItem ? {
        key: index,
        ignoreFormItem: true,
        ...item.props || {},
        // 如果不是我們自訂的元件 fieldProps 無法識別
        fieldProps: {
          ...item?.props?.fieldProps,
          onChange: (...restParams) => {
            fieldSetOnChange(restParams[0], index);
          }
        },
        value: value?.[index],
        onChange: void 0
      } : {
        key: index,
        ...item.props || {},
        value: value?.[index],
        onChange: (itemValue) => {
          fieldSetOnChange(itemValue, index);
          item.props.onChange?.(itemValue);
        }
      };
      return React__default.cloneElement(item, forkProps);
    }
    return item;
  });
  const Components = FieldSetType[type];
  const { RowWrapper } = useGridHelpers(rest);
  const typeProps = useMemo(
    () => ({ ...type === "group" ? { compact: true } : {} }),
    [type]
  );
  const Wrapper = useCallback(
    ({ children: dom }) => /* @__PURE__ */ jsx(Components, { ...typeProps, ...space, align: "start", wrap: true, children: dom }),
    [Components, space, typeProps]
  );
  return /* @__PURE__ */ jsx(RowWrapper, { Wrapper, children: list });
};
const BaseProFormFieldSet = React__default.forwardRef(({ children, space, valuePropName, ...rest }, ref) => {
  useImperativeHandle(ref, () => ({}));
  return /* @__PURE__ */ jsx(
    FieldSet,
    {
      space,
      valuePropName,
      ...rest.fieldProps,
      onChange: void 0,
      ...rest,
      children
    }
  );
});
const ProFormFieldSet = createField(
  BaseProFormFieldSet
);

const FormItemProvide = React__default.createContext({});
const WithValueFomFiledProps = (formFieldProps) => {
  const {
    children: filedChildren,
    onChange,
    onBlur,
    ignoreFormItem,
    valuePropName = "value",
    ...restProps
  } = formFieldProps;
  const isProFormComponent = (
    // @ts-ignore
    filedChildren?.type?.displayName !== "ProFormComponent"
  );
  const isValidElementForFiledChildren = !React__default.isValidElement(filedChildren);
  const onChangeMemo = useRefFunction(function(...restParams) {
    onChange?.(...restParams);
    if (isProFormComponent)
      return;
    if (isValidElementForFiledChildren)
      return void 0;
    filedChildren?.props?.onChange?.(...restParams);
    filedChildren?.props?.fieldProps?.onChange?.(
      ...restParams
    );
  });
  const onBlurMemo = useRefFunction(function(...restParams) {
    if (isProFormComponent)
      return;
    if (isValidElementForFiledChildren)
      return;
    onBlur?.(...restParams);
    filedChildren?.props?.onBlur?.(...restParams);
    filedChildren?.props?.fieldProps?.onBlur?.(
      ...restParams
    );
  });
  const omitOnBlurAndOnChangeProps = useDeepCompareMemo(
    () => omit(
      // @ts-ignore
      filedChildren?.props?.fieldProps || {},
      ["onBlur", "onChange"]
    ),
    [
      omit(
        // @ts-ignore
        filedChildren?.props?.fieldProps || {},
        ["onBlur", "onChange"]
      )
    ]
  );
  const propsValuePropName = formFieldProps[valuePropName];
  const fieldProps = useMemo(() => {
    if (isProFormComponent)
      return void 0;
    if (isValidElementForFiledChildren)
      return void 0;
    return omitUndefined$1({
      id: restProps.id,
      // 優先使用 children.props.fieldProps，
      // 比如 LightFilter 中可能需要通過 fieldProps 覆蓋 Form.Item 預設的 onChange
      [valuePropName]: propsValuePropName,
      ...omitOnBlurAndOnChangeProps,
      onBlur: onBlurMemo,
      // 這個 onChange 是 Form.Item 新增上的，
      // 要通過 fieldProps 透傳給 ProField 調用
      onChange: onChangeMemo
    });
  }, [
    propsValuePropName,
    omitOnBlurAndOnChangeProps,
    onBlurMemo,
    onChangeMemo,
    restProps.id,
    valuePropName
  ]);
  const finalChange = useMemo(() => {
    if (fieldProps)
      return void 0;
    if (!React__default.isValidElement(filedChildren))
      return void 0;
    return (...restParams) => {
      onChange?.(...restParams);
      filedChildren?.props?.onChange?.(...restParams);
    };
  }, [fieldProps, filedChildren, onChange]);
  if (!React__default.isValidElement(filedChildren))
    return /* @__PURE__ */ jsx(Fragment, { children: filedChildren });
  return React__default.cloneElement(
    filedChildren,
    omitUndefined$1({
      ...restProps,
      [valuePropName]: formFieldProps[valuePropName],
      ...filedChildren.props,
      onChange: finalChange,
      fieldProps
    })
  );
};
const WarpFormItem = ({
  children,
  addonAfter,
  addonBefore,
  valuePropName,
  convertValue,
  ...props
}) => {
  const formDom = useMemo(() => {
    let getValuePropsFunc = (value) => {
      const newValue = convertValue?.(value, props.name) ?? value;
      if (props.getValueProps)
        return props.getValueProps(newValue);
      return {
        [valuePropName || "value"]: newValue
      };
    };
    if (!convertValue && !props.getValueProps) {
      getValuePropsFunc = void 0;
    }
    if (!addonAfter && !addonBefore) {
      return /* @__PURE__ */ jsx(
        Form.Item,
        {
          ...props,
          valuePropName,
          getValueProps: getValuePropsFunc,
          children
        }
      );
    }
    return /* @__PURE__ */ jsx(
      Form.Item,
      {
        ...props,
        valuePropName,
        _internalItemRender: {
          mark: "pro_table_render",
          render: (inputProps, doms) => /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center"
                },
                children: [
                  addonBefore ? /* @__PURE__ */ jsx("div", { style: { marginInlineEnd: 8 }, children: addonBefore }) : null,
                  doms.input,
                  addonAfter ? /* @__PURE__ */ jsx("div", { style: { marginInlineStart: 8 }, children: addonAfter }) : null
                ]
              }
            ),
            doms.extra,
            doms.errorList
          ] })
        },
        ...props,
        getValueProps: getValuePropsFunc,
        children
      }
    );
  }, [addonAfter, addonBefore, children, convertValue?.toString(), props]);
  return /* @__PURE__ */ jsx(
    FormItemProvide.Provider,
    {
      value: {
        name: props.name,
        label: props.label
      },
      children: formDom
    }
  );
};
const ProFormItem = (props) => {
  ConfigProvider?.useConfig?.() || {
    componentSize: "middle"
  };
  const {
    valueType,
    transform,
    dataFormat,
    ignoreFormItem,
    children: unusedChildren,
    ...rest
  } = props;
  const formListField = useContext(FormListContext);
  const name = useMemo(() => {
    if (props.name === void 0)
      return props.name;
    if (formListField.name !== void 0) {
      return [formListField.name, props.name].flat(1);
    }
    return props.name;
  }, [formListField.name, props.name]);
  const { setFieldValueType, formItemProps } = React__default.useContext(FieldContext);
  useEffect(() => {
    if (!setFieldValueType || !props.name) {
      return;
    }
    setFieldValueType(
      [formListField.listName, props.name].flat(1).filter((itemName) => itemName !== void 0),
      {
        valueType: valueType || "text",
        dateFormat: dataFormat,
        transform
      }
    );
  }, [
    formListField.listName,
    name,
    dataFormat,
    props.name,
    setFieldValueType,
    transform,
    valueType
  ]);
  React__default.isValidElement(props.children) && isDropdownValueType(valueType || props.children.props.valueType);
  if (typeof props.children === "function") {
    return /* @__PURE__ */ createElement(
      WarpFormItem,
      {
        ...rest,
        name,
        key: rest.proFormFieldKey || rest.name?.toString()
      },
      props.children
    );
  }
  const children = /* @__PURE__ */ jsx(
    WithValueFomFiledProps,
    {
      valuePropName: props.valuePropName,
      children: props.children
    },
    rest.proFormFieldKey || rest.name?.toString()
  );
  return /* @__PURE__ */ jsx(
    WarpFormItem,
    {
      ...formItemProps,
      ...rest,
      name,
      isListField: formListField.name !== void 0,
      children
    },
    rest.proFormFieldKey || rest.name?.toString()
  );
};

const genProStyle$2 = (token) => {
  return {
    [token.componentCls]: {
      "&-title": { marginBlockEnd: token.marginXL, fontWeight: "bold" },
      "&-container": {
        flexWrap: "wrap",
        maxWidth: "100%",
        [`> div${token.ipassCls}-space-item`]: {
          maxWidth: "100%"
        }
      },
      "&-twoLine": {
        display: "block",
        width: "100%",
        [`${token.componentCls}-title`]: { width: "100%", margin: "8px 0" },
        [`${token.componentCls}-container`]: { paddingInlineStart: 16 },
        [`${token.ipassCls}-space-item,${token.ipassCls}-form-item`]: {
          width: "100%"
        },
        [`${token.ipassCls}-form-item`]: {
          "&-control": {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            "&-input": {
              alignItems: "center",
              justifyContent: "flex-end",
              "&-content": {
                flex: "none"
              }
            }
          }
        }
      }
    }
  };
};
function useStyle$n(prefixCls) {
  return useStyle$A("ProFormGroup", (token) => {
    const proToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genProStyle$2(proToken)];
  });
}

const Group = React__default.forwardRef(
  (props, ref) => {
    const { groupProps } = React__default.useContext(FieldContext);
    const {
      children,
      collapsible,
      defaultCollapsed,
      style,
      labelLayout,
      title = props.label,
      tooltip,
      align = "start",
      size = 32,
      titleStyle,
      titleRender,
      spaceProps,
      extra,
      autoFocus
    } = {
      ...groupProps,
      ...props
    };
    const [collapsed, setCollapsed] = useMergedState(
      () => defaultCollapsed || false,
      {
        value: props.collapsed,
        onChange: props.onCollapse
      }
    );
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const { ColWrapper, RowWrapper } = useGridHelpers(props);
    const className = getPrefixCls("pro-form-group");
    const { wrapSSR, hashId } = useStyle$n(className);
    const collapsibleButton = collapsible && /* @__PURE__ */ jsx(
      ArrowForwardIosIcon,
      {
        style: {
          marginInlineEnd: 8
        },
        rotate: !collapsed ? 90 : void 0
      }
    );
    const label = /* @__PURE__ */ jsx(
      LabelIconTip,
      {
        label: collapsibleButton ? /* @__PURE__ */ jsxs("div", { children: [
          collapsibleButton,
          title
        ] }) : title,
        tooltip
      }
    );
    const Wrapper = useCallback(
      ({ children: dom }) => /* @__PURE__ */ jsx(
        CompoundedSpace,
        {
          ...spaceProps,
          className: classNames(
            `${className}-container ${hashId}`,
            spaceProps?.className
          ),
          size,
          align,
          style: {
            rowGap: 0,
            ...spaceProps?.style
          },
          children: dom
        }
      ),
      [align, className, hashId, size, spaceProps]
    );
    const titleDom = titleRender ? titleRender(label, props) : label;
    const [childrenDoms, hiddenDoms] = useMemo(() => {
      const hiddenChildren = [];
      const childrenList = React__default.Children.toArray(children).map(
        (element, index) => {
          if (React__default.isValidElement(element) && element?.props?.hidden) {
            hiddenChildren.push(element);
            return null;
          }
          if (index === 0 && React__default.isValidElement(element) && autoFocus) {
            return React__default.cloneElement(element, {
              ...element.props,
              autoFocus
            });
          }
          return element;
        }
      );
      return [
        /* @__PURE__ */ jsx(RowWrapper, { Wrapper, children: childrenList }, "children"),
        hiddenChildren.length > 0 ? /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              display: "none"
            },
            children: hiddenChildren
          }
        ) : null
      ];
    }, [children, RowWrapper, Wrapper, autoFocus]);
    return wrapSSR(
      /* @__PURE__ */ jsx(ColWrapper, { children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: classNames(className, hashId, {
            [`${className}-twoLine`]: labelLayout === "twoLine"
          }),
          style,
          ref,
          children: [
            hiddenDoms,
            (title || tooltip || extra) && /* @__PURE__ */ jsx(
              "div",
              {
                className: `${className}-title ${hashId}`.trim(),
                style: titleStyle,
                onClick: () => {
                  setCollapsed(!collapsed);
                },
                children: extra ? /* @__PURE__ */ jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "space-between"
                    },
                    children: [
                      titleDom,
                      /* @__PURE__ */ jsx("span", { onClick: (e) => e.stopPropagation(), children: extra })
                    ]
                  }
                ) : titleDom
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  display: collapsible && collapsed ? "none" : void 0
                },
                children: childrenDoms
              }
            )
          ]
        }
      ) })
    );
  }
);
Group.displayName = "ProForm-Group";

const ProFormMoney = ({ fieldProps, proFieldProps, locale, min, max, ...rest }, ref) => {
  return /* @__PURE__ */ jsx(
    ProFormField,
    {
      valueType: {
        type: "money",
        locale
      },
      fieldProps: {
        min,
        max,
        ...fieldProps
      },
      ref,
      filedConfig: {
        defaultProps: {
          width: "100%"
        }
      },
      proFieldProps,
      ...rest
    }
  );
};
const index$2 = React__default.forwardRef(ProFormMoney);

const RadioGroup = React__default.forwardRef(
  ({
    fieldProps,
    options,
    radioType,
    layout,
    proFieldProps,
    valueEnum,
    ...rest
  }, ref) => {
    return /* @__PURE__ */ jsx(
      ProFormField,
      {
        valueType: radioType === "button" ? "radioButton" : "radio",
        ref,
        valueEnum: runFunction(valueEnum, void 0),
        ...rest,
        fieldProps: {
          options,
          layout,
          ...fieldProps
        },
        proFieldProps,
        filedConfig: {
          customLightMode: true
        }
      }
    );
  }
);
const ProFormRadioComponents = React__default.forwardRef(({ fieldProps, children }, ref) => {
  return /* @__PURE__ */ jsx(Radio, { ...fieldProps, ref, children });
});
const ProFormRadio = createField(
  ProFormRadioComponents,
  {
    valuePropName: "checked",
    ignoreWidth: true
  }
);
const WrappedProFormRadio = ProFormRadio;
WrappedProFormRadio.Group = RadioGroup;
WrappedProFormRadio.Button = Radio.Button;
WrappedProFormRadio.displayName = "ProFormComponent";

const genDrawerFormStyle = (token) => {
  return {
    [token.componentCls]: {
      "&-sidebar-dragger": {
        width: "5px",
        cursor: "ew-resize",
        padding: "4px 0 0",
        borderTop: "1px solid transparent",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 100,
        backgroundColor: "transparent",
        "&-min-disabled": {
          cursor: "w-resize"
        },
        "&-max-disabled": {
          cursor: "e-resize"
        }
      }
    }
  };
};
function useStyle$m(prefixCls) {
  return useStyle$A("DrawerForm", (token) => {
    const drawerFormToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genDrawerFormStyle(drawerFormToken)];
  });
}

function DrawerForm({
  children,
  trigger,
  onVisibleChange,
  drawerProps,
  onFinish,
  submitTimeout,
  title,
  width,
  resize,
  onOpenChange,
  visible: propVisible,
  open: propsOpen,
  ...rest
}) {
  noteOnce(
    // eslint-disable-next-line @typescript-eslint/dot-notation
    // @ts-ignore
    !rest["footer"] || !drawerProps?.footer,
    "DrawerForm 是一個 ProForm 的特殊布局，如果想自訂按鈕，請使用 submit.render 自訂。"
  );
  const resizeInfo = React__default.useMemo(() => {
    const defaultResize = {
      onResize: () => {
      },
      maxWidth: window.innerWidth * 0.8,
      minWidth: 300
    };
    if (typeof resize === "boolean") {
      if (resize) {
        return defaultResize;
      } else {
        return {};
      }
    }
    return omitUndefined({
      onResize: resize?.onResize ?? defaultResize.onResize,
      maxWidth: resize?.maxWidth ?? defaultResize.maxWidth,
      minWidth: resize?.minWidth ?? defaultResize.minWidth
    });
  }, [resize]);
  const context = useContext(ConfigProvider.ConfigContext);
  const baseClassName = context.getPrefixCls("pro-form-drawer");
  const { wrapSSR, hashId } = useStyle$m(baseClassName);
  const getCls = (className) => `${baseClassName}-${className} ${hashId}`;
  const [, forceUpdate] = useState([]);
  const [loading, setLoading] = useState(false);
  const [resizableDrawer, setResizableDrawer] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(
    width ? width : resize ? resizeInfo?.minWidth : 800
  );
  const [open, setOpen] = useMergedState(!!propVisible, {
    value: propsOpen || propVisible,
    onChange: onOpenChange || onVisibleChange
  });
  const footerRef = useRef(null);
  const footerDomRef = useCallback(
    (element) => {
      if (footerRef.current === null && element) {
        forceUpdate([]);
      }
      footerRef.current = element;
    },
    []
  );
  const formRef = useRef();
  const resetFields = useCallback(() => {
    const form = rest.formRef?.current ?? rest.form ?? formRef.current;
    if (form && drawerProps?.destroyOnClose) {
      form.resetFields();
    }
  }, [drawerProps?.destroyOnClose, rest.form, rest.formRef]);
  useEffect(() => {
    if (open && (propsOpen || propVisible)) {
      onOpenChange?.(true);
      onVisibleChange?.(true);
    }
    if (resizableDrawer) {
      setDrawerWidth(resizeInfo?.minWidth);
    }
  }, [propVisible, open, resizableDrawer]);
  useImperativeHandle(
    rest.formRef,
    () => {
      return formRef.current;
    },
    [formRef.current]
  );
  const triggerDom = useMemo(() => {
    if (!trigger) {
      return null;
    }
    return React__default.cloneElement(trigger, {
      key: "trigger",
      ...trigger.props,
      onClick: async (e) => {
        setOpen(!open);
        setResizableDrawer(!Object.keys(resizeInfo));
        trigger.props?.onClick?.(e);
      }
    });
  }, [setOpen, trigger, open, setResizableDrawer, resizableDrawer]);
  const submitterConfig = useMemo(() => {
    if (rest.submitter === false) {
      return false;
    }
    return merge$1(
      {
        searchConfig: {
          submitText: context.locale?.Modal?.okText ?? "確認",
          resetText: context.locale?.Modal?.cancelText ?? "取消"
        },
        resetButtonProps: {
          preventDefault: true,
          // 提交表單loading時，不可關閉彈框
          disabled: submitTimeout ? loading : void 0,
          onClick: (e) => {
            setOpen(false);
            drawerProps?.onClose?.(e);
          }
        }
      },
      rest.submitter
    );
  }, [
    rest.submitter,
    context.locale?.Modal?.okText,
    context.locale?.Modal?.cancelText,
    submitTimeout,
    loading,
    setOpen,
    drawerProps
  ]);
  const contentRender = useCallback((formDom, submitter) => {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      formDom,
      footerRef.current && submitter ? /* @__PURE__ */ jsx(React__default.Fragment, { children: createPortal(submitter, footerRef.current) }, "submitter") : submitter
    ] });
  }, []);
  const onFinishHandle = useRefFunction(async (values) => {
    const response = onFinish?.(values);
    if (submitTimeout && response instanceof Promise) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), submitTimeout);
      response.finally(() => {
        clearTimeout(timer);
        setLoading(false);
      });
    }
    const result = await response;
    if (result) {
      setOpen(false);
    }
    return result;
  });
  const drawerOpenProps = openVisibleCompatible(open, onVisibleChange);
  const cbHandleMouseMove = useCallback(
    (e) => {
      const offsetRight = (document.body.offsetWidth || 1e3) - (e.clientX - document.body.offsetLeft);
      const minWidth = resizeInfo?.minWidth ?? (width || 800);
      const maxWidth = resizeInfo?.maxWidth ?? window.innerWidth * 0.8;
      if (offsetRight < minWidth) {
        setDrawerWidth(minWidth);
        return;
      }
      if (offsetRight > maxWidth) {
        setDrawerWidth(maxWidth);
        return;
      }
      setDrawerWidth(offsetRight);
    },
    [resizeInfo?.maxWidth, resizeInfo?.minWidth, width]
  );
  const cbHandleMouseUp = useCallback(() => {
    document.removeEventListener("mousemove", cbHandleMouseMove);
    document.removeEventListener("mouseup", cbHandleMouseUp);
  }, [cbHandleMouseMove]);
  return wrapSSR(
    /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(
        Drawer,
        {
          title,
          width: drawerWidth,
          ...drawerProps,
          ...drawerOpenProps,
          afterOpenChange: (e) => {
            if (!e)
              resetFields();
            drawerProps?.afterOpenChange?.(e);
          },
          onClose: (e) => {
            if (submitTimeout && loading)
              return;
            setOpen(false);
            drawerProps?.onClose?.(e);
          },
          footer: rest.submitter !== false && /* @__PURE__ */ jsx(
            "div",
            {
              ref: footerDomRef,
              style: {
                display: "flex",
                justifyContent: "flex-end"
              }
            }
          ),
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: resize ? classNames(getCls("sidebar-dragger"), hashId, {
                  [getCls("sidebar-dragger-min-disabled")]: drawerWidth === resizeInfo?.minWidth,
                  [getCls("sidebar-dragger-max-disabled")]: drawerWidth === resizeInfo?.maxWidth
                }) : void 0,
                onMouseDown: (e) => {
                  resizeInfo?.onResize?.();
                  e.stopPropagation();
                  e.preventDefault();
                  document.addEventListener("mousemove", cbHandleMouseMove);
                  document.addEventListener("mouseup", cbHandleMouseUp);
                  setResizableDrawer(true);
                }
              }
            ),
            /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
              BaseForm,
              {
                formComponentType: "DrawerForm",
                layout: "vertical",
                ...rest,
                formRef,
                onInit: (_, form) => {
                  if (rest.formRef) {
                    rest.formRef.current = form;
                  }
                  rest?.onInit?.(_, form);
                  formRef.current = form;
                },
                submitter: submitterConfig,
                onFinish: async (values) => {
                  const result = await onFinishHandle(values);
                  return result;
                },
                contentRender,
                children
              }
            ) })
          ]
        }
      ),
      triggerDom
    ] })
  );
}

function ModalForm({
  children,
  trigger,
  onVisibleChange,
  onOpenChange,
  modalProps,
  onFinish,
  submitTimeout,
  title,
  width,
  visible: propVisible,
  open: propsOpen,
  ...rest
}) {
  noteOnce(
    // eslint-disable-next-line @typescript-eslint/dot-notation
    // @ts-ignore
    !rest["footer"] || !modalProps?.footer,
    "ModalForm 是一個 ProForm 的特殊布局，如果想自訂按鈕，請使用 submit.render 自訂。"
  );
  const context = useContext(ConfigProvider.ConfigContext);
  const [, forceUpdate] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useMergedState(!!propVisible, {
    value: propsOpen || propVisible,
    onChange: onOpenChange || onVisibleChange
  });
  const footerRef = useRef(null);
  const footerDomRef = useCallback(
    (element) => {
      if (footerRef.current === null && element) {
        forceUpdate([]);
      }
      footerRef.current = element;
    },
    []
  );
  const formRef = useRef();
  const resetFields = useCallback(() => {
    const form = rest.form ?? rest.formRef?.current ?? formRef.current;
    if (form && modalProps?.destroyOnClose) {
      form.resetFields();
    }
  }, [modalProps?.destroyOnClose, rest.form, rest.formRef]);
  useImperativeHandle(
    rest.formRef,
    () => {
      return formRef.current;
    },
    [formRef.current]
  );
  useEffect(() => {
    if (open && (propsOpen || propVisible)) {
      onOpenChange?.(true);
      onVisibleChange?.(true);
    }
  }, [propVisible, propsOpen, open]);
  const triggerDom = useMemo(() => {
    if (!trigger) {
      return null;
    }
    return React__default.cloneElement(trigger, {
      key: "trigger",
      ...trigger.props,
      onClick: async (e) => {
        setOpen(!open);
        trigger.props?.onClick?.(e);
      }
    });
  }, [setOpen, trigger, open]);
  const submitterConfig = useMemo(() => {
    if (rest.submitter === false) {
      return false;
    }
    return merge$1(
      {
        searchConfig: {
          submitText: modalProps?.okText ?? context.locale?.Modal?.okText ?? "確認",
          resetText: modalProps?.cancelText ?? context.locale?.Modal?.cancelText ?? "取消"
        },
        resetButtonProps: {
          preventDefault: true,
          // 提交表單loading時，不可關閉彈框
          disabled: submitTimeout ? loading : void 0,
          onClick: (e) => {
            setOpen(false);
            modalProps?.onCancel?.(e);
          }
        }
      },
      rest.submitter
    );
  }, [
    context.locale?.Modal?.cancelText,
    context.locale?.Modal?.okText,
    modalProps,
    rest.submitter,
    setOpen,
    loading,
    submitTimeout
  ]);
  const contentRender = useCallback((formDom, submitter) => {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      formDom,
      footerRef.current && submitter ? /* @__PURE__ */ jsx(React__default.Fragment, { children: createPortal(submitter, footerRef.current) }, "submitter") : submitter
    ] });
  }, []);
  const onFinishHandle = useCallback(
    async (values) => {
      const response = onFinish?.(values);
      if (submitTimeout && response instanceof Promise) {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), submitTimeout);
        response.finally(() => {
          clearTimeout(timer);
          setLoading(false);
        });
      }
      const result = await response;
      if (result) {
        setOpen(false);
      }
      return result;
    },
    [onFinish, setOpen, submitTimeout]
  );
  const modalOpenProps = openVisibleCompatible(open);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Modal,
      {
        title,
        width: width || 800,
        ...modalProps,
        ...modalOpenProps,
        onCancel: (e) => {
          if (submitTimeout && loading)
            return;
          setOpen(false);
          modalProps?.onCancel?.(e);
        },
        afterClose: () => {
          resetFields();
          setOpen(false);
          modalProps?.afterClose?.();
        },
        footer: rest.submitter !== false ? /* @__PURE__ */ jsx(
          "div",
          {
            ref: footerDomRef,
            style: {
              display: "flex",
              justifyContent: "flex-end"
            }
          }
        ) : null,
        children: /* @__PURE__ */ jsx(
          BaseForm,
          {
            formComponentType: "ModalForm",
            layout: "vertical",
            ...rest,
            onInit: (_, form) => {
              if (rest.formRef) {
                rest.formRef.current = form;
              }
              rest?.onInit?.(_, form);
              formRef.current = form;
            },
            formRef,
            submitter: submitterConfig,
            onFinish: async (values) => {
              const result = await onFinishHandle(values);
              return result;
            },
            contentRender,
            children
          }
        )
      }
    ),
    triggerDom
  ] });
}

const defaultCollapseRender = (collapsed, _, intl, hiddenNum) => {
  if (collapsed) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      intl.formatMessage({
        id: "tableForm.expand",
        defaultMessage: "展開"
      }),
      hiddenNum && `(${hiddenNum})`,
      /* @__PURE__ */ jsx(
        ExpandMoreIcon,
        {
          style: {
            marginInlineStart: "0.5em",
            transition: "0.3s all",
            transform: `rotate(${collapsed ? 0 : 0.5}turn)`
          }
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    intl.formatMessage({
      id: "tableForm.collapsed",
      defaultMessage: "收起"
    }),
    /* @__PURE__ */ jsx(
      ExpandMoreIcon,
      {
        style: {
          marginInlineStart: "0.5em",
          transition: "0.3s all",
          transform: `rotate(${collapsed ? 0 : 0.5}turn)`
        }
      }
    )
  ] });
};
const Actions = (props) => {
  const {
    setCollapsed,
    collapsed = false,
    submitter,
    style,
    hiddenNum
  } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const intl = useIntl();
  const { hashId } = useContext(ProProvider);
  const collapseRender = omitBoolean(props.collapseRender) || defaultCollapseRender;
  return /* @__PURE__ */ jsxs(CompoundedSpace, { style, size: 16, children: [
    submitter,
    props.collapseRender !== false && /* @__PURE__ */ jsx(
      "a",
      {
        className: `${getPrefixCls(
          "pro-query-filter-collapse-button"
        )} ${hashId}`.trim(),
        onClick: () => setCollapsed(!collapsed),
        children: collapseRender?.(collapsed, props, intl, hiddenNum)
      }
    )
  ] });
};

const genProStyle$1 = (token) => {
  return {
    [token.componentCls]: {
      "&&": {
        padding: 24
      },
      [`${token.ipassCls}-form-item`]: {
        marginBlock: 0
      },
      [`${token.proComponentsCls}-form-group-title`]: {
        marginBlock: 0
      },
      "&-row": {
        rowGap: 24,
        "&-split": {
          [`${token.proComponentsCls}-form-group`]: {
            display: "flex",
            alignItems: "center",
            gap: token.marginXS
          },
          "&:last-child": {
            marginBlockEnd: 12
          }
        },
        "&-split-line": {
          "&:after": {
            position: "absolute",
            width: "100%",
            content: '""',
            height: 1,
            insetBlockEnd: -12,
            borderBlockEnd: `1px dashed ${token.colorSplit}`
          }
        }
      },
      "&-collapse-button": {
        display: "flex",
        alignItems: "center",
        color: token.colorPrimary
      }
    }
  };
};
function useStyle$l(prefixCls) {
  return useStyle$A("QueryFilter", (token) => {
    const proToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genProStyle$1(proToken)];
  });
}

const CONFIG_SPAN_BREAKPOINTS = {
  xs: 513,
  sm: 513,
  md: 785,
  lg: 992,
  xl: 1057,
  xxl: Infinity
};
const BREAKPOINTS = {
  vertical: [
    // [breakpoint, cols, layout]
    [513, 1, "vertical"],
    [785, 2, "vertical"],
    [1057, 3, "vertical"],
    [Infinity, 4, "vertical"]
  ],
  default: [
    [513, 1, "vertical"],
    [701, 2, "vertical"],
    [1062, 3, "horizontal"],
    [1352, 3, "horizontal"],
    [Infinity, 4, "horizontal"]
  ]
};
const getSpanConfig = (layout, width, span) => {
  if (span && typeof span === "number") {
    return {
      span,
      layout
    };
  }
  const spanConfig = span ? ["xs", "sm", "md", "lg", "xl", "xxl"].map((key) => [
    // @ts-ignore
    CONFIG_SPAN_BREAKPOINTS[key],
    // @ts-ignore
    24 / span[key],
    "horizontal"
  ]) : BREAKPOINTS[layout || "default"];
  const breakPoint = (spanConfig || BREAKPOINTS.default).find(
    (item) => width < item[0] + 16
    // 16 = 2 * (row -8px margin)
  );
  return {
    span: 24 / breakPoint[1],
    layout: breakPoint[2]
  };
};
const flatMapItems = (items, ignoreRules, form) => {
  return items?.flatMap((item) => {
    if (item?.type.displayName === "ProForm-Group" && !item.props?.title) {
      return item.props.children;
    }
    if (item?.type.displayName === "ProFormDependency" && !item.props?.title) {
      const values = item.props.name.reduce((current, next) => {
        return {
          ...current,
          [next]: form?.getFieldValue(next)
        };
      }, {});
      return item.props.children(values);
    }
    if (ignoreRules && React__default.isValidElement(item)) {
      return React__default.cloneElement(item, {
        ...item.props,
        formItemProps: {
          ...item.props?.formItemProps,
          rules: []
        }
      });
    }
    return item;
  });
};
const QueryFilterContent = (props) => {
  const intl = useIntl();
  const { hashId } = useContext(ProProvider);
  const resetText = props.resetText || intl.formatMessage({ id: "tableForm.reset", defaultMessage: "重置" });
  const searchText = props.searchText || intl.formatMessage({ id: "tableForm.search", defaultMessage: "查詢" });
  const [collapsed, setCollapsed] = useMergedState(
    () => props.defaultCollapsed && !!props.submitter,
    {
      value: props.collapsed,
      onChange: props.onCollapse
    }
  );
  const {
    optionRender,
    collapseRender,
    split,
    items,
    spanSize,
    showLength,
    searchGutter,
    showHiddenNum,
    form
  } = props;
  const submitter = useMemo(() => {
    if (!props.submitter || optionRender === false) {
      return null;
    }
    return React__default.cloneElement(props.submitter, {
      searchConfig: {
        resetText,
        submitText: searchText
      },
      render: optionRender ? (_, dom) => optionRender(
        {
          ...props,
          resetText,
          searchText
        },
        props,
        dom
      ) : optionRender,
      ...props.submitter.props
    });
  }, [props, resetText, searchText, optionRender]);
  let totalSpan = 0;
  let itemLength = 0;
  let firstRowFull = false;
  let totalSize = 0;
  let currentSpan = 0;
  const processedList = flatMapItems(items, props.ignoreRules, form).map(
    (item, index) => {
      const colSize = React__default.isValidElement(item) ? item?.props?.colSize ?? 1 : 1;
      const colSpan = Math.min(spanSize.span * (colSize || 1), 24);
      totalSpan += colSpan;
      totalSize += colSize;
      if (index === 0) {
        firstRowFull = colSpan === 24 && !item?.props?.hidden;
      }
      const hidden = item?.props?.hidden || // 如果收起了
      collapsed && (firstRowFull || // 如果 超過顯示長度 且 總長度超過了 24
      totalSize > showLength - 1) && !!index && totalSpan >= 24;
      itemLength += 1;
      const itemKey = React__default.isValidElement(item) && (item.key || `${item.props?.name}`) || index;
      if (React__default.isValidElement(item) && hidden) {
        if (!props.preserve) {
          return {
            itemDom: null,
            colSpan: 0,
            hidden: true
          };
        }
        return {
          itemDom: React__default.cloneElement(item, {
            hidden: true,
            key: itemKey || index
          }),
          hidden: true,
          colSpan
        };
      }
      return {
        itemDom: item,
        colSpan,
        hidden: false
      };
    }
  );
  const doms = processedList.map((itemProps, index) => {
    const { itemDom, colSpan } = itemProps;
    const hidden = itemDom?.props?.hidden;
    if (hidden)
      return itemDom;
    const itemKey = React__default.isValidElement(itemDom) && (itemDom.key || `${itemDom.props?.name}`) || index;
    if (24 - currentSpan % 24 < colSpan) {
      totalSpan += 24 - currentSpan % 24;
      currentSpan += 24 - currentSpan % 24;
    }
    currentSpan += colSpan;
    if (split && currentSpan % 24 === 0 && index < itemLength - 1) {
      return /* @__PURE__ */ jsx(
        Col,
        {
          span: colSpan,
          className: `${props.baseClassName}-row-split-line ${props.baseClassName}-row-split ${hashId}`.trim(),
          children: itemDom
        },
        itemKey
      );
    }
    return /* @__PURE__ */ jsx(
      Col,
      {
        className: `${props.baseClassName}-row-split ${hashId}`.trim(),
        span: colSpan,
        children: itemDom
      },
      itemKey
    );
  });
  const hiddenNum = showHiddenNum && processedList.filter((item) => item.hidden).length;
  const needCollapseRender = useMemo(() => {
    if (totalSpan < 24 || totalSize <= showLength) {
      return false;
    }
    return true;
  }, [totalSize, showLength, totalSpan]);
  const offset = useMemo(() => {
    const offsetSpan = currentSpan % 24 + (props.submitterColSpanProps?.span ?? spanSize.span);
    if (offsetSpan > 24) {
      return 24 - (props.submitterColSpanProps?.span ?? spanSize.span);
    }
    return 24 - offsetSpan;
  }, [
    currentSpan,
    currentSpan % 24 + (props.submitterColSpanProps?.span ?? spanSize.span),
    props.submitterColSpanProps?.span
  ]);
  const context = useContext(ConfigProvider.ConfigContext);
  const baseClassName = context.getPrefixCls("pro-query-filter");
  return /* @__PURE__ */ jsxs(
    Row,
    {
      gutter: searchGutter,
      justify: "start",
      className: classNames(`${baseClassName}-row`, hashId),
      children: [
        doms,
        submitter && /* @__PURE__ */ jsx(
          Col,
          {
            span: spanSize.span,
            offset,
            className: classNames(props.submitterColSpanProps?.className),
            ...props.submitterColSpanProps,
            style: {
              textAlign: "end"
            },
            children: /* @__PURE__ */ jsx(
              Form.Item,
              {
                label: " ",
                colon: false,
                shouldUpdate: false,
                className: `${baseClassName}-actions ${hashId}`.trim(),
                children: /* @__PURE__ */ jsx(
                  Actions,
                  {
                    hiddenNum,
                    collapsed,
                    collapseRender: needCollapseRender ? collapseRender : false,
                    submitter,
                    setCollapsed
                  },
                  "pro-form-query-filter-actions"
                )
              }
            )
          },
          "submitter"
        )
      ]
    },
    "resize-observer-row"
  );
};
const defaultWidth = isBrowser() ? document?.body?.clientWidth : 1024;
function QueryFilter(props) {
  const {
    collapsed: controlCollapsed,
    layout,
    defaultCollapsed = true,
    defaultColsNumber,
    span,
    searchGutter = 24,
    searchText,
    resetText,
    optionRender,
    collapseRender,
    onReset,
    onCollapse,
    labelWidth = "80",
    style,
    split,
    preserve = true,
    ignoreRules,
    showHiddenNum = false,
    submitterColSpanProps,
    ...rest
  } = props;
  const context = useContext(ConfigProvider.ConfigContext);
  const baseClassName = context.getPrefixCls("pro-query-filter");
  const { wrapSSR, hashId } = useStyle$l(baseClassName);
  const [width, setWidth] = useMergedState(
    () => typeof style?.width === "number" ? style?.width : defaultWidth
  );
  const spanSize = useMemo(
    () => getSpanConfig(layout, width + 16, span),
    [layout, width, span]
  );
  const showLength = useMemo(() => {
    if (defaultColsNumber !== void 0) {
      return defaultColsNumber - 1;
    }
    return Math.max(1, 24 / spanSize.span - 1);
  }, [defaultColsNumber, spanSize.span]);
  const formItemFixStyle = useMemo(() => {
    if (labelWidth && spanSize.layout !== "vertical" && labelWidth !== "auto") {
      return {
        labelCol: {
          flex: `0 0 ${labelWidth}px`
        },
        wrapperCol: {
          style: {
            maxWidth: `calc(100% - ${labelWidth}px)`
          }
        },
        style: {
          flexWrap: "nowrap"
        }
      };
    }
    return void 0;
  }, [spanSize.layout, labelWidth]);
  return wrapSSR(
    /* @__PURE__ */ jsx(
      ResizeObserver,
      {
        onResize: (offset) => {
          if (width !== offset.width && offset.width > 17) {
            setWidth(offset.width);
          }
        },
        children: /* @__PURE__ */ jsx(
          BaseForm,
          {
            isKeyPressSubmit: true,
            preserve,
            ...rest,
            className: classNames(baseClassName, hashId, rest.className),
            onReset,
            style,
            layout: spanSize.layout,
            fieldProps: {
              style: {
                width: "100%"
              }
            },
            formItemProps: formItemFixStyle,
            groupProps: {
              titleStyle: {
                display: "inline-block",
                marginInlineEnd: 16
              }
            },
            contentRender: (items, renderSubmitter, form) => /* @__PURE__ */ jsx(
              QueryFilterContent,
              {
                spanSize,
                collapsed: controlCollapsed,
                form,
                submitterColSpanProps,
                collapseRender,
                defaultCollapsed,
                onCollapse,
                optionRender,
                submitter: renderSubmitter,
                items,
                split,
                baseClassName,
                resetText: props.resetText,
                searchText: props.searchText,
                searchGutter,
                preserve,
                ignoreRules,
                showLength,
                showHiddenNum
              }
            )
          }
        )
      },
      "resize-observer"
    )
  );
}

function StepForm(stepNativeProps) {
  const formRef = useRef();
  const context = useContext(StepsFormProvide);
  const stepContext = useContext(StepFormProvide);
  const props = { ...stepNativeProps, ...stepContext };
  const {
    onFinish,
    step,
    formRef: propFormRef,
    title,
    stepProps,
    ...restProps
  } = props;
  noteOnce(!restProps.submitter, "StepForm 不包含提交按钮，请在 StepsForm 上");
  useImperativeHandle(propFormRef, () => formRef.current, [
    propFormRef?.current
  ]);
  useEffect(() => {
    if (!(props.name || props.step))
      return;
    const name = (props.name || props.step).toString();
    context?.regForm(name, props);
    return () => {
      context?.unRegForm(name);
    };
  }, []);
  if (context && context?.formArrayRef) {
    context.formArrayRef.current[step || 0] = formRef;
  }
  return /* @__PURE__ */ jsx(
    BaseForm,
    {
      formRef,
      onFinish: async (values) => {
        if (restProps.name) {
          context?.onFormFinish(restProps.name, values);
        }
        if (onFinish) {
          context?.setLoading(true);
          const success = await onFinish?.(values);
          if (success) {
            context?.next();
          }
          context?.setLoading(false);
          return;
        }
        if (!context?.lastStep)
          context?.next();
      },
      onInit: (_, form) => {
        formRef.current = form;
        if (context && context?.formArrayRef) {
          context.formArrayRef.current[step || 0] = formRef;
        }
        restProps?.onInit?.(_, form);
      },
      layout: "vertical",
      ...omit(restProps, ["layoutType", "columns"])
    }
  );
}

const genStepsFormStyle = (token) => {
  return {
    [token.componentCls]: {
      "&-container": {
        width: "max-content",
        minWidth: "420px",
        maxWidth: "100%",
        margin: "auto"
      },
      "&-steps-container": {
        maxWidth: "1160px",
        margin: "auto",
        [`${token.ipassCls}-steps-vertical`]: { height: "100%" }
      },
      "&-step": {
        display: "none",
        marginBlockStart: "32px",
        "&-active": {
          display: "block"
        },
        "> form": { maxWidth: "100%" }
      }
    }
  };
};
function useStyle$k(prefixCls) {
  return useStyle$A("StepsForm", (token) => {
    const loginFormToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genStepsFormStyle(loginFormToken)];
  });
}

const version$2 = "5.1.7";
const StepsFormProvide = React__default.createContext(void 0);
const StepsLayoutStrategy = {
  horizontal({ stepsDom, formDom }) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Row, { gutter: { xs: 8, sm: 16, md: 24 }, children: /* @__PURE__ */ jsx(Col, { span: 24, children: stepsDom }) }),
      /* @__PURE__ */ jsx(Row, { gutter: { xs: 8, sm: 16, md: 24 }, children: /* @__PURE__ */ jsx(Col, { span: 24, children: formDom }) })
    ] });
  },
  vertical({ stepsDom, formDom }) {
    return /* @__PURE__ */ jsxs(Row, { align: "stretch", wrap: true, gutter: { xs: 8, sm: 16, md: 24 }, children: [
      /* @__PURE__ */ jsx(Col, { xxl: 4, xl: 6, lg: 7, md: 8, sm: 10, xs: 12, children: React__default.cloneElement(stepsDom, {
        style: {
          height: "100%"
        }
      }) }),
      /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "100%"
          },
          children: formDom
        }
      ) })
    ] });
  }
};
const StepFormProvide = React__default.createContext(
  null
);
function StepsForm$1(props) {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls("pro-steps-form");
  const { wrapSSR, hashId } = useStyle$k(prefixCls);
  const {
    current,
    onCurrentChange,
    submitter,
    stepsFormRender,
    stepsRender,
    stepFormRender,
    stepsProps,
    onFinish,
    formProps,
    containerStyle,
    formRef,
    formMapRef: propsFormMapRef,
    layoutRender: propsLayoutRender,
    ...rest
  } = props;
  const formDataRef = useRef(/* @__PURE__ */ new Map());
  const formMapRef = useRef(/* @__PURE__ */ new Map());
  const formArrayRef = useRef([]);
  const [formArray, setFormArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const intl = useIntl();
  const [step, setStep] = useMergedState(0, {
    value: props.current,
    onChange: props.onCurrentChange
  });
  const layoutRender = StepsLayoutStrategy["horizontal"];
  const lastStep = useMemo(
    () => step === formArray.length - 1,
    [formArray.length, step]
  );
  const regForm = useCallback(
    (name, childrenFormProps) => {
      if (!formMapRef.current.has(name)) {
        setFormArray((oldFormArray) => [...oldFormArray, name]);
      }
      formMapRef.current.set(name, childrenFormProps);
    },
    []
  );
  const unRegForm = useCallback((name) => {
    setFormArray((oldFormArray) => oldFormArray.filter((n) => n !== name));
    formMapRef.current.delete(name);
    formDataRef.current.delete(name);
  }, []);
  useImperativeHandle(propsFormMapRef, () => formArrayRef.current, [
    formArrayRef.current
  ]);
  useImperativeHandle(
    formRef,
    () => {
      return formArrayRef.current[step || 0]?.current;
    },
    [step, formArrayRef.current]
  );
  const onFormFinish = useCallback(
    async (name, formData) => {
      formDataRef.current.set(name, formData);
      if (!lastStep || !onFinish) {
        return;
      }
      setLoading(true);
      const values = merge(
        {},
        ...Array.from(formDataRef.current.values())
      );
      try {
        const success = await onFinish(values);
        if (success) {
          setStep(0);
          formArrayRef.current.forEach((form) => form.current?.resetFields());
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [lastStep, onFinish, setLoading, setStep]
  );
  const stepsDom = useMemo(() => {
    const isNew = compareVersions(version$2, "4.24.0") > -1;
    const itemsProps = isNew ? {
      items: formArray.map((item) => {
        const itemProps = formMapRef.current.get(item);
        return {
          key: item,
          title: itemProps?.title,
          ...itemProps?.stepProps
        };
      })
    } : {};
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: `${prefixCls}-steps-container ${hashId}`.trim(),
        style: {
          maxWidth: Math.min(formArray.length * 320, 1160)
        },
        children: /* @__PURE__ */ jsx(
          Steps,
          {
            ...stepsProps,
            ...itemsProps,
            current: step,
            onChange: void 0,
            children: !isNew && formArray.map((item) => {
              const itemProps = formMapRef.current.get(item);
              return /* @__PURE__ */ jsx(
                Steps.Step,
                {
                  title: itemProps?.title,
                  ...itemProps?.stepProps
                },
                item
              );
            })
          }
        )
      }
    );
  }, [formArray, hashId, prefixCls, step, stepsProps]);
  const onSubmit = useRefFunction(() => {
    const from = formArrayRef.current[step];
    from.current?.submit();
  });
  const prePage = useRefFunction(() => {
    if (step < 1)
      return;
    setStep(step - 1);
  });
  const next = useMemo(() => {
    return submitter !== false && /* @__PURE__ */ jsx(
      LoadingButton,
      {
        color: "primary",
        loading,
        ...submitter?.submitButtonProps,
        onClick: () => {
          submitter?.onSubmit?.();
          onSubmit();
        },
        children: intl.formatMessage({ id: "stepsForm.next", defaultMessage: "下一步" })
      },
      "next"
    );
  }, [intl, loading, onSubmit, submitter]);
  const pre = useMemo(() => {
    return submitter !== false && /* @__PURE__ */ jsx(
      LoadingButton,
      {
        ...submitter?.resetButtonProps,
        onClick: () => {
          prePage();
          submitter?.onReset?.();
        },
        children: intl.formatMessage({ id: "stepsForm.prev", defaultMessage: "上一步" })
      },
      "pre"
    );
  }, [intl, prePage, submitter]);
  const submit = useMemo(() => {
    return submitter !== false && /* @__PURE__ */ jsx(
      LoadingButton,
      {
        color: "primary",
        loading,
        ...submitter?.submitButtonProps,
        onClick: () => {
          submitter?.onSubmit?.();
          onSubmit();
        },
        children: intl.formatMessage({ id: "stepsForm.submit", defaultMessage: "提交" })
      },
      "submit"
    );
  }, [intl, loading, onSubmit, submitter]);
  const nextPage = useRefFunction(() => {
    if (step > formArray.length - 2)
      return;
    setStep(step + 1);
  });
  const submitterDom = useMemo(() => {
    let buttons = [];
    const index = step || 0;
    if (index < 1) {
      if (formArray.length === 1) {
        buttons.push(submit);
      } else {
        buttons.push(next);
      }
    } else if (index + 1 === formArray.length) {
      buttons.push(pre, submit);
    } else {
      buttons.push(pre, next);
    }
    buttons = buttons.filter(React__default.isValidElement);
    if (submitter && submitter.render) {
      const submitterProps = {
        form: formArrayRef.current[step]?.current,
        onSubmit,
        step,
        onPre: prePage
      };
      return submitter.render(
        submitterProps,
        buttons
      );
    }
    if (submitter && submitter?.render === false) {
      return null;
    }
    return buttons;
  }, [formArray.length, next, onSubmit, pre, prePage, step, submit, submitter]);
  const formDom = useMemo(() => {
    return toArray(props.children).map((item, index) => {
      const itemProps = item.props;
      const name = itemProps.name || `${index}`;
      const isShow = step === index;
      const config = isShow ? {
        contentRender: stepFormRender,
        submitter: false
      } : {};
      return /* @__PURE__ */ jsx(
        "div",
        {
          className: classNames(`${prefixCls}-step`, hashId, {
            [`${prefixCls}-step-active`]: isShow
          }),
          children: /* @__PURE__ */ jsx(
            StepFormProvide.Provider,
            {
              value: {
                ...config,
                ...formProps,
                ...itemProps,
                name,
                step: index
              },
              children: item
            }
          )
        },
        name
      );
    });
  }, [formProps, hashId, prefixCls, props.children, step, stepFormRender]);
  const finalStepsDom = useMemo(() => {
    if (stepsRender) {
      return stepsRender(
        formArray.map((item) => ({
          key: item,
          title: formMapRef.current.get(item)?.title
        })),
        stepsDom
      );
    }
    return stepsDom;
  }, [formArray, stepsDom, stepsRender]);
  const formContainer = useMemo(
    () => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `${prefixCls}-container ${hashId}`.trim(),
        style: containerStyle,
        children: [
          formDom,
          stepsFormRender ? null : /* @__PURE__ */ jsx(CompoundedSpace, { children: submitterDom })
        ]
      }
    ),
    [containerStyle, formDom, hashId, prefixCls, stepsFormRender, submitterDom]
  );
  const stepsFormDom = useMemo(() => {
    const doms = {
      stepsDom: finalStepsDom,
      formDom: formContainer
    };
    if (stepsFormRender) {
      if (propsLayoutRender) {
        return stepsFormRender(propsLayoutRender(doms), submitterDom);
      } else {
        return stepsFormRender(layoutRender(doms), submitterDom);
      }
    }
    if (propsLayoutRender) {
      return propsLayoutRender(doms);
    }
    return layoutRender(doms);
  }, [
    finalStepsDom,
    formContainer,
    layoutRender,
    stepsFormRender,
    submitterDom,
    propsLayoutRender
  ]);
  return wrapSSR(
    /* @__PURE__ */ jsx("div", { className: classNames(prefixCls, hashId), children: /* @__PURE__ */ jsx(Form.Provider, { ...rest, children: /* @__PURE__ */ jsx(
      StepsFormProvide.Provider,
      {
        value: {
          loading,
          setLoading,
          regForm,
          keyArray: formArray,
          next: nextPage,
          formArrayRef,
          formMapRef,
          lastStep,
          unRegForm,
          onFormFinish
        },
        children: stepsFormDom
      }
    ) }) })
  );
}
function StepsFormWarp(props) {
  return /* @__PURE__ */ jsx(ProConfigProvider, { needDeps: true, children: /* @__PURE__ */ jsx(StepsForm$1, { ...props }) });
}
StepsFormWarp.StepForm = StepForm;
StepsFormWarp.useForm = Form.useForm;

const Embed = ({ children }) => /* @__PURE__ */ jsx(Fragment, { children });

const StepsForm = ({
  steps,
  columns,
  forceUpdate,
  grid,
  ...props
}) => {
  const propsRef = useLatest(props);
  const onCurrentChange = useCallback(
    (current) => {
      propsRef.current.onCurrentChange?.(current);
      forceUpdate([]);
    },
    [forceUpdate, propsRef]
  );
  const StepDoms = useMemo(() => {
    return steps?.map((step, index) => /* @__PURE__ */ createElement(
      BetaSchemaForm,
      {
        grid,
        ...step,
        key: index,
        layoutType: "StepForm",
        columns: columns[index]
      }
    ));
  }, [columns, grid, steps]);
  return /* @__PURE__ */ jsx(StepsFormWarp, { ...props, onCurrentChange, children: StepDoms });
};

const dependency = (item, helpers) => {
  if (item.valueType === "dependency") {
    const fieldProps = item.getFieldProps?.();
    noteOnce(
      Array.isArray(item.name ?? fieldProps?.name),
      'SchemaForm: fieldProps.name should be NamePath[] when valueType is "dependency"'
    );
    noteOnce(
      typeof item.columns === "function",
      'SchemaForm: columns should be a function when valueType is "dependency"'
    );
    if (!Array.isArray(item.name ?? fieldProps?.name))
      return null;
    return /* @__PURE__ */ createElement(ProFormDependency, { name: item.name, ...fieldProps, key: item.key }, (values) => {
      if (!item.columns || typeof item.columns !== "function")
        return null;
      return helpers.genItems(item.columns(values));
    });
  }
  return true;
};

const divider = (item) => {
  if (item.valueType === "divider") {
    return /* @__PURE__ */ createElement(Divider, { ...item.getFieldProps?.(), key: item.key });
  }
  return true;
};

const field = (item, { action, formRef, type, originItem }) => {
  const formFieldProps = {
    ...omit(item, [
      "dataIndex",
      "width",
      "render",
      "renderFormItem",
      "renderText",
      "title"
    ]),
    name: item.name || item.key || item.dataIndex,
    width: item.width,
    render: item?.render ? (dom, entity, renderIndex) => item?.render?.(dom, entity, renderIndex, action?.current, {
      type,
      ...item,
      key: item.key?.toString(),
      formItemProps: item.getFormItemProps?.(),
      fieldProps: item.getFieldProps?.()
    }) : void 0
  };
  const defaultRender = () => {
    return /* @__PURE__ */ jsx(ProFormField, { ...formFieldProps, ignoreFormItem: true });
  };
  const renderFormItem = item?.renderFormItem ? (_, config) => {
    const renderConfig = omitUndefined$1({ ...config, onChange: void 0 });
    return item?.renderFormItem?.(
      {
        type,
        ...item,
        key: item.key?.toString(),
        formItemProps: item.getFormItemProps?.(),
        fieldProps: item.getFieldProps?.(),
        originProps: originItem
      },
      {
        ...renderConfig,
        defaultRender,
        type
      },
      formRef.current
    );
  } : void 0;
  const getField = () => {
    if (item?.renderFormItem) {
      const dom = renderFormItem?.(null, {});
      if (!dom || item.ignoreFormItem)
        return dom;
    }
    return /* @__PURE__ */ createElement(
      ProFormField,
      {
        ...formFieldProps,
        key: [item.key, item.index || 0].join("-"),
        renderFormItem
      }
    );
  };
  if (item.dependencies) {
    return /* @__PURE__ */ jsx(
      ProFormDependency,
      {
        name: item.dependencies || [],
        children: getField
      },
      item.key
    );
  }
  return getField();
};

const formList = (item, { genItems }) => {
  if (item.valueType === "formList" && item.dataIndex) {
    if (!item.columns || !Array.isArray(item.columns))
      return null;
    return /* @__PURE__ */ createElement(
      ProFormList,
      {
        ...item.getFormItemProps?.(),
        key: item.key,
        name: item.dataIndex,
        label: item.label,
        initialValue: item.initialValue,
        colProps: item.colProps,
        rowProps: item.rowProps,
        ...item.getFieldProps?.()
      },
      genItems(item.columns)
    );
  }
  return true;
};

const formSet = (item, { genItems }) => {
  if (item.valueType === "formSet" && item.dataIndex) {
    if (!item.columns || !Array.isArray(item.columns))
      return null;
    return /* @__PURE__ */ createElement(
      ProFormFieldSet,
      {
        ...item.getFormItemProps?.(),
        key: item.key,
        initialValue: item.initialValue,
        name: item.dataIndex,
        label: item.label,
        colProps: item.colProps,
        rowProps: item.rowProps,
        ...item.getFieldProps?.()
      },
      genItems(item.columns)
    );
  }
  return true;
};

const group = (item, { genItems }) => {
  if (item.valueType === "group") {
    if (!item.columns || !Array.isArray(item.columns))
      return null;
    return /* @__PURE__ */ jsx(
      ProForm.Group,
      {
        label: item.label,
        colProps: item.colProps,
        rowProps: item.rowProps,
        ...item.getFieldProps?.(),
        children: genItems(item.columns)
      },
      item.key
    );
  }
  return true;
};

const ignore = (item) => {
  if (item.valueType && typeof item.valueType === "string" && ["index", "indexBorder", "option"].includes(item?.valueType)) {
    return null;
  }
  return true;
};

const tasks = [
  ignore,
  group,
  formList,
  formSet,
  divider,
  dependency
];
const renderValueType = (item, helpers) => {
  for (let cur = 0; cur < tasks.length; cur++) {
    const task = tasks[cur];
    const dom = task(item, helpers);
    if (dom === true) {
      continue;
    } else {
      return dom;
    }
  }
  return field(item, helpers);
};

const FormLayoutType = {
  QueryFilter,
  DrawerForm,
  StepForm: StepsFormWarp.StepForm,
  StepsForm,
  ModalForm,
  Embed
};
function BetaSchemaForm(props) {
  const {
    columns,
    layoutType = "Form",
    type = "form",
    action,
    shouldUpdate = (pre, next) => stringify(pre) !== stringify(next),
    formRef: propsFormRef,
    ...restProps
  } = props;
  const FormRenderComponents = FormLayoutType[layoutType] || ProForm;
  const [form] = Form.useForm();
  const formInstance = Form.useFormInstance();
  const [, forceUpdate] = useState([]);
  const [formDomsDeps, updatedFormDoms] = useState(() => []);
  const formRef = useReactiveRef(
    props.form || formInstance || form
  );
  const oldValuesRef = useRef();
  const propsRef = useLatest(props);
  const genItems = useRefFunction((items) => {
    return items.filter((originItem) => {
      return !(originItem.hideInForm && type === "form");
    }).sort((a, b) => {
      if (b.order || a.order) {
        return (b.order || 0) - (a.order || 0);
      }
      return (b.index || 0) - (a.index || 0);
    }).map((originItem, index) => {
      const title = runFunction(
        originItem.title,
        originItem,
        "form",
        /* @__PURE__ */ jsx(
          LabelIconTip,
          {
            label: originItem.title,
            tooltip: originItem.tooltip || originItem.tip
          }
        )
      );
      const item = omitUndefined$1({
        title,
        label: title,
        name: originItem.name,
        valueType: runFunction(originItem.valueType, {}),
        key: originItem.key || originItem.dataIndex || index,
        columns: originItem.columns,
        valueEnum: originItem.valueEnum,
        dataIndex: originItem.dataIndex || originItem.key,
        initialValue: originItem.initialValue,
        width: originItem.width,
        index: originItem.index,
        readonly: originItem.readonly,
        colSize: originItem.colSize,
        colProps: originItem.colProps,
        rowProps: originItem.rowProps,
        className: originItem.className,
        tooltip: originItem.tooltip || originItem.tip,
        dependencies: originItem.dependencies,
        proFieldProps: originItem.proFieldProps,
        ignoreFormItem: originItem.ignoreFormItem,
        getFieldProps: originItem.fieldProps ? () => runFunction(
          originItem.fieldProps,
          formRef.current,
          originItem
        ) : void 0,
        getFormItemProps: originItem.formItemProps ? () => runFunction(
          originItem.formItemProps,
          formRef.current,
          originItem
        ) : void 0,
        render: originItem.render,
        renderFormItem: originItem.renderFormItem,
        renderText: originItem.renderText,
        request: originItem.request,
        params: originItem.params,
        transform: originItem.transform,
        convertValue: originItem.convertValue,
        debounceTime: originItem.debounceTime,
        defaultKeyWords: originItem.defaultKeyWords
      });
      return renderValueType(item, {
        action,
        type,
        originItem,
        formRef,
        genItems
      });
    }).filter((field) => {
      return Boolean(field);
    });
  });
  const onValuesChange = useCallback(
    (changedValues, values) => {
      const { onValuesChange: propsOnValuesChange } = propsRef.current;
      if (shouldUpdate === true || typeof shouldUpdate === "function" && shouldUpdate(values, oldValuesRef.current)) {
        updatedFormDoms([]);
      }
      oldValuesRef.current = values;
      propsOnValuesChange?.(changedValues, values);
    },
    [propsRef, shouldUpdate]
  );
  const formChildrenDoms = useDeepCompareMemo(() => {
    if (!formRef.current)
      return;
    if (columns.length && Array.isArray(columns[0]))
      return;
    return genItems(columns);
  }, [columns, restProps?.open, action, type, formDomsDeps, !!formRef.current]);
  const specificProps = useDeepCompareMemo(() => {
    if (layoutType === "StepsForm") {
      return {
        forceUpdate,
        columns
      };
    }
    return {};
  }, [columns, layoutType]);
  useImperativeHandle(
    propsFormRef,
    () => {
      return formRef.current;
    },
    [formRef.current]
  );
  return /* @__PURE__ */ jsx(
    FormRenderComponents,
    {
      ...specificProps,
      ...restProps,
      onInit: (_, initForm) => {
        if (propsFormRef) {
          propsFormRef.current = initForm;
        }
        restProps?.onInit?.(_, initForm);
        formRef.current = initForm;
      },
      form: props.form || form,
      formRef,
      onValuesChange,
      children: formChildrenDoms
    }
  );
}

const ProFormSelectComponents = ({
  fieldProps,
  children,
  params,
  proFieldProps,
  mode,
  valueEnum,
  request,
  showSearch,
  options,
  ...rest
}, ref) => {
  const context = useContext(FieldContext);
  return /* @__PURE__ */ jsx(
    ProFormField,
    {
      valueEnum: runFunction(valueEnum),
      request,
      params,
      valueType: "select",
      filedConfig: { customLightMode: true },
      fieldProps: {
        options,
        mode,
        showSearch,
        getPopupContainer: context.getPopupContainer,
        ...fieldProps
      },
      ref,
      proFieldProps,
      ...rest,
      children
    }
  );
};
const SearchSelect = React__default.forwardRef(
  ({
    fieldProps,
    children,
    params,
    proFieldProps,
    mode,
    valueEnum,
    request,
    options,
    ...rest
  }, ref) => {
    const props = {
      options,
      mode: mode || "multiple",
      labelInValue: true,
      showSearch: true,
      showArrow: false,
      autoClearSearchValue: true,
      optionLabelProp: "label",
      ...fieldProps
    };
    const context = useContext(FieldContext);
    return /* @__PURE__ */ jsx(
      ProFormField,
      {
        valueEnum: runFunction(valueEnum),
        request,
        params,
        valueType: "select",
        filedConfig: { customLightMode: true },
        fieldProps: { getPopupContainer: context.getPopupContainer, ...props },
        ref,
        proFieldProps,
        ...rest,
        children
      }
    );
  }
);
const ProFormSelect = React__default.forwardRef(ProFormSelectComponents);
const ProFormSearchSelect = SearchSelect;
const WrappedProFormSelect = ProFormSelect;
WrappedProFormSelect.SearchSelect = ProFormSearchSelect;
WrappedProFormSelect.displayName = "ProFormComponent";

const Submitter = (props) => {
  const intl = useIntl();
  const form = Form.useFormInstance();
  if (props.render === false) {
    return null;
  }
  const {
    onSubmit,
    render,
    onReset,
    searchConfig = {},
    submitButtonProps,
    resetButtonProps = {}
  } = props;
  const { token } = proTheme.useToken();
  const submit = () => {
    form.submit();
    onSubmit?.();
  };
  const reset = () => {
    form.resetFields();
    onReset?.();
  };
  const {
    submitText = intl.formatMessage({ id: "tableForm.submit", defaultMessage: "提交" }),
    resetText = intl.formatMessage({ id: "tableForm.reset", defaultMessage: "重設" })
  } = searchConfig;
  const dom = [];
  if (resetButtonProps !== false) {
    dom.push(
      /* @__PURE__ */ createElement(
        LoadingButton,
        {
          ...omit(resetButtonProps, ["preventDefault"]),
          key: "rest",
          onClick: (e) => {
            if (!resetButtonProps?.preventDefault)
              reset();
            resetButtonProps?.onClick?.(
              e
            );
          }
        },
        resetButtonProps?.text ? resetButtonProps.text : resetText
      )
    );
  }
  if (submitButtonProps !== false) {
    dom.push(
      /* @__PURE__ */ createElement(
        LoadingButton,
        {
          variant: "contained",
          ...omit(submitButtonProps || {}, ["preventDefault"]),
          key: "submit",
          onClick: (e) => {
            if (!submitButtonProps?.preventDefault)
              submit();
            submitButtonProps?.onClick?.(
              e
            );
          }
        },
        submitButtonProps?.text ? submitButtonProps.text : submitText
      )
    );
  }
  const renderDom = render ? render({ ...props, form, submit, reset }, dom) : dom;
  if (!renderDom) {
    return null;
  }
  if (Array.isArray(renderDom)) {
    if (renderDom?.length < 1) {
      return null;
    }
    if (renderDom?.length === 1) {
      return renderDom[0];
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          display: "flex",
          gap: token.marginXS,
          alignItems: "center"
        },
        children: renderDom
      }
    );
  }
  return renderDom;
};

const ProFormSwitch = React__default.forwardRef(
  ({ fieldProps, unCheckedChildren, checkedChildren, proFieldProps, ...rest }, ref) => {
    return /* @__PURE__ */ jsx(
      ProFormField,
      {
        valueType: "switch",
        fieldProps: {
          unCheckedChildren,
          checkedChildren,
          ...fieldProps
        },
        ref,
        valuePropName: "checked",
        proFieldProps,
        filedConfig: {
          valuePropName: "checked",
          ignoreWidth: true,
          customLightMode: true
        },
        ...rest
      }
    );
  }
);

const valueType$1 = "text";
const ProFormText = ({
  fieldProps,
  proFieldProps,
  ...rest
}) => {
  return /* @__PURE__ */ jsx(
    ProFormField,
    {
      valueType: valueType$1,
      fieldProps,
      filedConfig: {
        valueType: valueType$1
      },
      proFieldProps,
      ...rest
    }
  );
};
const Password = ({
  fieldProps,
  proFieldProps,
  ...rest
}) => {
  return /* @__PURE__ */ jsx(
    ProFormField,
    {
      valueType: "password",
      fieldProps,
      proFieldProps,
      filedConfig: {
        valueType: valueType$1
      },
      ...rest
    }
  );
};
const WrappedProFormText = ProFormText;
WrappedProFormText.Password = Password;
WrappedProFormText.displayName = "ProFormComponent";

const ProFormTextArea = ({ fieldProps, proFieldProps, ...rest }, ref) => {
  return /* @__PURE__ */ jsx(
    ProFormField,
    {
      ref,
      valueType: "textarea",
      fieldProps,
      proFieldProps,
      ...rest
    }
  );
};
const index$1 = React__default.forwardRef(ProFormTextArea);

const valueType = "time";
const TimeRangePicker = React__default.forwardRef(({ fieldProps, proFieldProps, ...rest }, ref) => {
  const context = useContext(FieldContext);
  return /* @__PURE__ */ jsx(
    ProFormField,
    {
      ref,
      fieldProps: {
        getPopupContainer: context.getPopupContainer,
        ...fieldProps
      },
      valueType: "timeRange",
      proFieldProps,
      filedConfig: {
        valueType: "timeRange",
        customLightMode: true,
        lightFilterLabelFormatter: (value) => dateArrayFormatter(value, "HH:mm:ss")
      },
      ...rest
    }
  );
});
const ProFormTimePicker = ({
  fieldProps,
  proFieldProps,
  ...rest
}) => {
  const context = useContext(FieldContext);
  return /* @__PURE__ */ jsx(
    ProFormField,
    {
      fieldProps: {
        getPopupContainer: context.getPopupContainer,
        ...fieldProps
      },
      valueType,
      proFieldProps,
      filedConfig: {
        customLightMode: true,
        valueType
      },
      ...rest
    }
  );
};
const WrappedProFormTimePicker = ProFormTimePicker;
WrappedProFormTimePicker.RangePicker = TimeRangePicker;

const genParams = (syncUrl, params, type) => {
  if (syncUrl === true) {
    return params;
  }
  return runFunction(syncUrl, params, type);
};
const covertFormName = (name) => {
  if (!name)
    return name;
  if (Array.isArray(name))
    return name;
  return [name];
};
function BaseFormComponents(props) {
  const {
    children,
    contentRender,
    submitter,
    fieldProps,
    formItemProps,
    groupProps,
    transformKey,
    formRef: propsFormRef,
    onInit,
    form,
    loading,
    formComponentType,
    extraUrlParams = {},
    syncToUrl,
    onUrlSearchChange,
    onReset,
    omitNil = true,
    isKeyPressSubmit,
    autoFocusFirstInput = true,
    grid,
    rowProps,
    colProps,
    ...rest
  } = props;
  const formInstance = Form.useFormInstance();
  const { componentSize } = ConfigProvider?.useConfig?.() || {
    componentSize: "middle"
  };
  const formRef = useRef(form || formInstance);
  const { RowWrapper } = useGridHelpers({ grid, rowProps });
  const getFormInstance = useRefFunction(() => formInstance);
  const formatValues = useMemo(
    () => ({
      /**
       * 取得被 ProForm 格式化後的所有資料
       * @param allData boolean
       * @returns T
       *
       * @example  getFieldsFormatValue(true) ->返回所有資料，即使沒有被 form 託管的
       */
      getFieldsFormatValue: (allData) => {
        return transformKey(
          getFormInstance()?.getFieldsValue(allData),
          omitNil
        );
      },
      /**
       * 取得被 ProForm 格式化後的單個資料
       * @param nameList (string|number)[]
       * @returns T
       *
       * @example {a:{b:value}} -> getFieldFormatValue(['a', 'b']) -> value
       */
      /** 取得格式化之後的單個資料 */
      getFieldFormatValue: (paramsNameList = []) => {
        const nameList = covertFormName(paramsNameList);
        if (!nameList)
          throw new Error("nameList is require");
        const value = getFormInstance()?.getFieldValue(nameList);
        const obj = nameList ? set({}, nameList, value) : value;
        return get$1(transformKey(obj, omitNil, nameList), nameList);
      },
      /**
       * 取得被 ProForm 格式化後的單個資料, 包含他的 name
       * @param nameList (string|number)[]
       * @returns T
       *
       * @example  {a:{b:value}} -> getFieldFormatValueObject(['a', 'b']) -> {a:{b:value}}
       */
      /** 取得格式化之後的單個資料 */
      getFieldFormatValueObject: (paramsNameList) => {
        const nameList = covertFormName(paramsNameList);
        const value = getFormInstance()?.getFieldValue(nameList);
        const obj = nameList ? set({}, nameList, value) : value;
        return transformKey(obj, omitNil, nameList);
      },
      /** 
      /**
       *驗欄位後返回格式化之後的所有資料
       * @param nameList (string|number)[]
       * @returns T
       * 
       * @example validateFieldsReturnFormatValue -> {a:{b:value}}
       */
      validateFieldsReturnFormatValue: async (nameList) => {
        if (!Array.isArray(nameList) && nameList)
          throw new Error("nameList must be array");
        const values = await getFormInstance()?.validateFields(nameList);
        const transformedKey = transformKey(values, omitNil);
        return transformedKey ? transformedKey : {};
      }
    }),
    [omitNil, transformKey]
  );
  const items = useMemo(() => {
    return React__default.Children.toArray(children).map((item, index) => {
      if (index === 0 && React__default.isValidElement(item) && autoFocusFirstInput) {
        return React__default.cloneElement(item, {
          ...item.props,
          autoFocus: autoFocusFirstInput
        });
      }
      return item;
    });
  }, [autoFocusFirstInput, children]);
  const submitterProps = useMemo(
    () => typeof submitter === "boolean" || !submitter ? {} : submitter,
    [submitter]
  );
  const submitterNode = useMemo(() => {
    if (submitter === false)
      return void 0;
    return /* @__PURE__ */ jsx(
      Submitter,
      {
        ...submitterProps,
        onReset: () => {
          const finalValues = transformKey(
            formRef.current?.getFieldsValue(),
            omitNil
          );
          submitterProps?.onReset?.(finalValues);
          onReset?.(finalValues);
          if (syncToUrl) {
            const params = Object.keys(
              transformKey(formRef.current?.getFieldsValue(), false)
            ).reduce((pre, next) => {
              return {
                ...pre,
                [next]: finalValues[next] || void 0
              };
            }, extraUrlParams);
            onUrlSearchChange(genParams(syncToUrl, params, "set"));
          }
        },
        submitButtonProps: {
          loading,
          ...submitterProps.submitButtonProps
        }
      },
      "submitter"
    );
  }, [
    submitter,
    submitterProps,
    loading,
    transformKey,
    omitNil,
    onReset,
    syncToUrl,
    extraUrlParams,
    onUrlSearchChange
  ]);
  const content = useMemo(() => {
    const wrapItems = grid ? /* @__PURE__ */ jsx(RowWrapper, { children: items }) : items;
    if (contentRender) {
      return contentRender(wrapItems, submitterNode, formRef.current);
    }
    return wrapItems;
  }, [grid, RowWrapper, items, contentRender, submitterNode]);
  const preInitialValues = usePrevious(props.initialValues);
  useEffect(() => {
    if (syncToUrl || !props.initialValues || !preInitialValues || rest.request)
      return;
    const isEqual = isDeepEqualReact(props.initialValues, preInitialValues);
    noteOnce(
      isEqual,
      `initialValues 只在 form 初始化時生效，如果你需要非同步載入推薦使用 request，或者 initialValues ? <Form/> : null `
    );
    noteOnce(
      isEqual,
      `The initialValues only take effect when the form is initialized, if you need to load asynchronously recommended request, or the initialValues ? <Form/> : null `
    );
  }, [props.initialValues]);
  useImperativeHandle(
    propsFormRef,
    () => {
      return {
        ...formRef.current,
        ...formatValues
      };
    },
    [formatValues, formRef.current]
  );
  useEffect(() => {
    const finalValues = transformKey(
      formRef.current?.getFieldsValue?.(true),
      omitNil
    );
    onInit?.(finalValues, {
      ...formRef.current,
      ...formatValues
    });
  }, []);
  return /* @__PURE__ */ jsx(
    ProFormContext.Provider,
    {
      value: {
        ...formatValues,
        formRef
      },
      children: /* @__PURE__ */ jsx(ConfigProvider, { componentSize: rest.size || componentSize, children: /* @__PURE__ */ jsxs(GridContext.Provider, { value: { grid, colProps }, children: [
        rest.component !== false && /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            style: {
              display: "none"
            }
          }
        ),
        content
      ] }) })
    }
  );
}
let requestFormCacheId = 0;
function BaseForm(props) {
  const {
    extraUrlParams = {},
    syncToUrl,
    isKeyPressSubmit,
    syncToUrlAsImportant = false,
    syncToInitialValues = true,
    children,
    contentRender,
    submitter,
    fieldProps,
    proFieldProps,
    formItemProps,
    groupProps,
    dateFormatter = "string",
    formRef: propsFormRef,
    onInit,
    form,
    formComponentType,
    onReset,
    grid,
    rowProps,
    colProps,
    omitNil = true,
    request,
    params,
    initialValues,
    formKey = requestFormCacheId,
    readonly,
    onLoadingChange,
    loading: propsLoading,
    ...propRest
  } = props;
  const formRef = useRef({});
  const [loading, setLoading] = useMergedState(false, {
    onChange: onLoadingChange,
    value: propsLoading
  });
  const [urlSearch, setUrlSearch] = useUrlSearchParams(
    {},
    { disabled: !syncToUrl }
  );
  const curFormKey = useRef(nanoid());
  useEffect(() => {
    requestFormCacheId += 0;
  }, []);
  const [initialData] = useFetchData$2({
    request,
    params,
    proFieldKey: formKey
  });
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls("pro-form");
  const { wrapSSR, hashId } = useStyle$A("ProForm", (token) => {
    return {
      [`.${prefixCls}`]: {
        [`> div:not(${token.proComponentsCls}-form-light-filter)`]: {
          ".pro-field": {
            maxWidth: "100%",
            "@media screen and (max-width: 575px)": {
              // 減少了 form 的 padding
              maxWidth: "calc(93vw - 48px)"
            },
            // 適用於短數字，短文字或者選項
            "&-xs": {
              width: 104
            },
            "&-s": {
              width: 216
            },
            // 適用於較短欄位輸入、如姓名、電話、ID 等。
            "&-sm": {
              width: 216
            },
            "&-m": {
              width: 328
            },
            // 標準寬度，適用於大部分欄位長度
            "&-md": {
              width: 328
            },
            "&-l": {
              width: 440
            },
            // 適用於較長欄位輸入，如長網址、標籤組、文件路徑等。
            "&-lg": {
              width: 440
            },
            // 適用於長文字輸入，如長連結、描述、備註等，通常搭配自適應多行輸入框或定高文字域使用。
            "&-xl": {
              width: 552
            }
          }
        }
      }
    };
  });
  const [urlParamsMergeInitialValues, setUrlParamsMergeInitialValues] = useState(() => {
    if (!syncToUrl) {
      return {};
    }
    return genParams(syncToUrl, urlSearch, "get");
  });
  const transformKeyRef = useRef({});
  const fieldsValueType = useRef({});
  const transformKey = useRefFunction(
    (values, paramsOmitNil, parentKey) => {
      return transformKeySubmitValue(
        conversionMomentValue(
          values,
          dateFormatter,
          fieldsValueType.current,
          paramsOmitNil,
          parentKey
        ),
        transformKeyRef.current,
        paramsOmitNil
      );
    }
  );
  useEffect(() => {
    if (syncToInitialValues)
      return;
    setUrlParamsMergeInitialValues({});
  }, [syncToInitialValues]);
  useEffect(() => {
    if (!syncToUrl)
      return;
    setUrlSearch({
      ...urlSearch,
      ...extraUrlParams
    });
  }, [extraUrlParams, syncToUrl]);
  const getPopupContainer = useMemo(() => {
    if (typeof window === "undefined")
      return void 0;
    if (formComponentType && ["DrawerForm"].includes(formComponentType)) {
      return (e) => e.parentNode || document.body;
    }
    return void 0;
  }, [formComponentType]);
  const onFinish = useRefFunction(async () => {
    if (!propRest.onFinish)
      return;
    if (loading)
      return;
    setLoading(true);
    try {
      const finalValues = formRef?.current?.getFieldsFormatValue?.();
      await propRest.onFinish(finalValues);
      if (syncToUrl) {
        const syncToUrlParams = Object.keys(
          formRef?.current?.getFieldsFormatValue?.(void 0, false)
        ).reduce((pre, next) => {
          return {
            ...pre,
            [next]: finalValues[next] ?? void 0
          };
        }, extraUrlParams);
        Object.keys(urlSearch).forEach((key) => {
          if (syncToUrlParams[key] !== false && syncToUrlParams[key] !== 0 && !syncToUrlParams[key]) {
            syncToUrlParams[key] = void 0;
          }
        });
        setUrlSearch(genParams(syncToUrl, syncToUrlParams, "set"));
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  });
  useImperativeHandle(
    propsFormRef,
    () => {
      return formRef.current;
    },
    [!initialData]
  );
  if (!initialData && props.request) {
    return /* @__PURE__ */ jsx("div", { style: { paddingTop: 50, paddingBottom: 50, textAlign: "center" }, children: /* @__PURE__ */ jsx(CircularProgress, {}) });
  }
  return wrapSSR(
    /* @__PURE__ */ jsx(
      EditOrReadOnlyContext.Provider,
      {
        value: {
          mode: props.readonly ? "read" : "edit"
        },
        children: /* @__PURE__ */ jsx(ProConfigProvider, { needDeps: true, children: /* @__PURE__ */ jsx(
          FieldContext.Provider,
          {
            value: {
              formRef,
              fieldProps,
              proFieldProps,
              formItemProps,
              groupProps,
              formComponentType,
              getPopupContainer,
              formKey: curFormKey.current,
              setFieldValueType: (name, { valueType = "text", dateFormat, transform }) => {
                if (!Array.isArray(name))
                  return;
                transformKeyRef.current = set(
                  transformKeyRef.current,
                  name,
                  transform
                );
                fieldsValueType.current = set(
                  fieldsValueType.current,
                  name,
                  {
                    valueType,
                    dateFormat
                  }
                );
              }
            },
            children: /* @__PURE__ */ jsx(FormListContext.Provider, { value: {}, children: /* @__PURE__ */ jsx(
              Form,
              {
                onKeyPress: (event) => {
                  if (!isKeyPressSubmit)
                    return;
                  if (event.key === "Enter") {
                    formRef.current?.submit();
                  }
                },
                autoComplete: "off",
                form,
                ...omit(propRest, [
                  "labelWidth",
                  "autoFocusFirstInput"
                ]),
                initialValues: syncToUrlAsImportant ? {
                  ...initialValues,
                  ...initialData,
                  ...urlParamsMergeInitialValues
                } : {
                  ...urlParamsMergeInitialValues,
                  ...initialValues,
                  ...initialData
                },
                onValuesChange: (changedValues, values) => {
                  propRest?.onValuesChange?.(
                    transformKey(changedValues, !!omitNil),
                    transformKey(values, !!omitNil)
                  );
                },
                className: classNames(props.className, prefixCls, hashId),
                onFinish,
                children: /* @__PURE__ */ jsx(
                  BaseFormComponents,
                  {
                    transformKey,
                    autoComplete: "off",
                    loading,
                    onUrlSearchChange: setUrlSearch,
                    ...props,
                    formRef,
                    initialValues: {
                      ...initialValues,
                      ...initialData
                    }
                  }
                )
              }
            ) })
          }
        ) })
      }
    )
  );
}

function ProForm(props) {
  return /* @__PURE__ */ jsx(
    BaseForm,
    {
      layout: "vertical",
      submitter: {
        // 反轉按鈕，在正常模式下，按鈕應該是主按鈕在前
        render: (_, dom) => dom.reverse()
      },
      contentRender: (items, submitter) => {
        return /* @__PURE__ */ jsxs(Fragment, { children: [
          items,
          submitter
        ] });
      },
      ...props
    }
  );
}
ProForm.Group = Group;
ProForm.useForm = Form.useForm;
ProForm.Item = ProFormItem;
ProForm.useWatch = Form.useWatch;
ProForm.ErrorList = Form.ErrorList;
ProForm.Provider = Form.Provider;
ProForm.useFormInstance = Form.useFormInstance;
ProForm.EditOrReadOnlyContext = EditOrReadOnlyContext;

const genLoginFormStyle$1 = (token) => {
  return {
    [token.componentCls]: {
      "&-container": {
        display: "flex",
        flex: "1",
        flexDirection: "column",
        height: "100%",
        paddingInline: 32,
        paddingBlock: 24,
        overflow: "auto",
        background: "inherit"
      },
      "&-top": {
        textAlign: "center"
      },
      "&-header": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        lineHeight: "44px",
        a: {
          textDecoration: "none"
        }
      },
      "&-title": {
        position: "relative",
        insetBlockStart: "2px",
        color: "@heading-color",
        fontWeight: "600",
        fontSize: "33px"
      },
      "&-logo": {
        width: "44px",
        height: "44px",
        marginInlineEnd: "16px",
        verticalAlign: "top",
        img: {
          width: "100%"
        }
      },
      "&-desc": {
        marginBlockStart: "12px",
        marginBlockEnd: "40px",
        color: token.colorTextSecondary,
        fontSize: token.fontSize
      },
      "&-main": {
        minWidth: "328px",
        maxWidth: "580px",
        margin: "0 auto",
        "&-other": {
          marginBlockStart: "24px",
          lineHeight: "22px",
          textAlign: "start"
        }
      }
    },
    "@media (min-width: @screen-md-min)": {
      [`${token.componentCls}-container`]: {
        paddingInline: 0,
        paddingBlockStart: 32,
        paddingBlockEnd: 24,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 110px",
        backgroundSize: "100%"
      }
    }
  };
};
function useStyle$j(prefixCls) {
  return useStyle$A("LoginForm", (token) => {
    const loginFormToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genLoginFormStyle$1(loginFormToken)];
  });
}

function LoginForm(props) {
  const {
    logo,
    message,
    contentStyle,
    title,
    subTitle,
    actions,
    children,
    containerStyle,
    otherStyle,
    ...proFormProps
  } = props;
  const intl = useIntl();
  const submitter = proFormProps.submitter === false ? false : {
    searchConfig: {
      submitText: intl.formatMessage({ id: "loginForm.submitText", defaultMessage: "登入" })
    },
    ...proFormProps.submitter,
    submitButtonProps: {
      size: "large",
      style: {
        width: "100%"
      },
      ...proFormProps.submitter?.submitButtonProps
    },
    render: (_, dom) => {
      const loginButton = dom.pop();
      if (typeof proFormProps?.submitter?.render === "function") {
        return proFormProps?.submitter?.render?.(_, dom);
      }
      return loginButton;
    }
  };
  const context = useContext(ConfigContext);
  const baseClassName = context.getPrefixCls("pro-form-login");
  const { wrapSSR, hashId } = useStyle$j(baseClassName);
  const getCls = (className) => `${baseClassName}-${className} ${hashId}`;
  const logoDom = useMemo(() => {
    if (!logo)
      return null;
    if (typeof logo === "string") {
      return /* @__PURE__ */ jsx("img", { src: logo });
    }
    return logo;
  }, [logo]);
  return wrapSSR(
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: classNames(getCls("container"), hashId),
        style: containerStyle,
        children: [
          /* @__PURE__ */ jsxs("div", { className: `${getCls("top")} ${hashId}`.trim(), children: [
            title || logoDom ? /* @__PURE__ */ jsxs("div", { className: `${getCls("header")}`, children: [
              logoDom ? /* @__PURE__ */ jsx("span", { className: getCls("logo"), children: logoDom }) : null,
              title ? /* @__PURE__ */ jsx("span", { className: getCls("title"), children: title }) : null
            ] }) : null,
            subTitle ? /* @__PURE__ */ jsx("div", { className: getCls("desc"), children: subTitle }) : null
          ] }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: getCls("main"),
              style: {
                width: 328,
                ...contentStyle
              },
              children: [
                /* @__PURE__ */ jsxs(ProForm, { isKeyPressSubmit: true, ...proFormProps, submitter, children: [
                  message,
                  children
                ] }),
                actions ? /* @__PURE__ */ jsx("div", { className: getCls("main-other"), style: otherStyle, children: actions }) : null
              ]
            }
          )
        ]
      }
    )
  );
}

const genLoginFormStyle = (token) => {
  return {
    [token.componentCls]: {
      display: "flex",
      width: "100%",
      height: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      "&-notice": {
        display: "flex",
        flex: "1",
        zIndex: 99,
        alignItems: "flex-end",
        "&-activity": {
          marginBlock: 24,
          marginInline: 24,
          paddingInline: 24,
          paddingBlock: 24,
          "&-title": { fontWeight: "500", fontSize: "28px" },
          "&-subTitle": { marginBlockStart: 8, fontSize: "16px" },
          "&-action": { marginBlockStart: "24px" }
        }
      },
      "&-left": {
        display: "flex",
        flex: "1",
        zIndex: 99,
        flexDirection: "column",
        maxWidth: "550px",
        paddingInline: 0,
        paddingBlock: 32,
        overflow: "auto",
        alignItems: "center",
        justifyContent: "center",
        padding: 24
      },
      "&-container": {
        borderRadius: token.borderRadius,
        backgroundSize: "100%",
        backgroundPosition: "top",
        backdropFilter: "blur(10px)",
        backgroundColor: setAlpha(token.colorBgContainer, 0.8),
        backgroundImage: "radial-gradient(circle at 93% 1e+02%, rgba(22,119,255,0.17) 0%, rgba(255,255,255,0.05) 23%, rgba(255,255,255,0.03) 87%, rgba(22,119,255,0.12) 109%)",
        padding: 32,
        boxShadow: "0px 0px 24px 0px rgba(0,0,0,0.1)"
      },
      "&-top": {
        textAlign: "center"
      },
      "&-header": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        lineHeight: "44px",
        a: {
          textDecoration: "none"
        }
      },
      "&-title": {
        position: "relative",
        tinsetBlockStartop: "2px",
        color: token.colorTextHeading,
        fontWeight: "600",
        fontSize: "33px"
      },
      "&-logo": {
        width: "44px",
        height: "44px",
        marginInlineEnd: "16px",
        verticalAlign: "top",
        img: {
          width: "100%"
        }
      },
      "&-desc": {
        marginBlockStart: "12px",
        marginBlockEnd: "40px",
        color: token.colorTextSecondary,
        fontSize: token.fontSize
      },
      "&-main": {
        width: "328px",
        margin: "0 auto",
        "&-other": {
          marginBlockStart: "24px",
          lineHeight: "22px",
          textAlign: "start"
        }
      }
    },
    [`@media (max-width: ${token.screenMDMin}px)`]: {
      [token.componentCls]: {
        flexDirection: "column-reverse",
        background: "none !important",
        "&-container": {
          padding: 24,
          boxShadow: "none",
          backgroundImage: "none",
          borderRadius: "0px"
        },
        "&-notice": {
          display: "flex",
          flex: "none",
          alignItems: "flex-start",
          width: "100%",
          "> div": {
            width: "100%"
          }
        }
      }
    },
    [`@media (min-width: ${token.screenMDMin}px)`]: {
      [token.componentCls]: {
        "&-left": {
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 110px",
          backgroundSize: "100%"
        }
      }
    },
    [`@media (max-width: ${token.screenSM}px)`]: {
      [token.componentCls]: {
        "&-main": { width: "95%", maxWidth: "328px" }
      }
    }
  };
};
function useStyle$i(prefixCls) {
  return useStyle$A("LoginFormPage", (token) => {
    const loginFormToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genLoginFormStyle(loginFormToken)];
  });
}

function LoginFormPage(props) {
  const {
    logo,
    message,
    style,
    activityConfig = {},
    backgroundImageUrl,
    backgroundVideoUrl,
    title,
    subTitle,
    actions,
    children,
    containerStyle,
    otherStyle,
    mainStyle,
    ...proFormProps
  } = props;
  const intl = useIntl();
  const genSubmitButtonProps = () => {
    if (proFormProps.submitter === false)
      return false;
    if (proFormProps.submitter?.submitButtonProps === false)
      return false;
    return {
      size: "large",
      style: {
        width: "100%"
      },
      ...proFormProps.submitter?.submitButtonProps
    };
  };
  const submitter = {
    searchConfig: {
      submitText: intl.formatMessage({ id: "loginForm.submitText", defaultMessage: "登入" })
    },
    render: (_, dom) => dom.pop(),
    ...proFormProps.submitter,
    submitButtonProps: genSubmitButtonProps()
  };
  const context = useContext(ConfigProvider.ConfigContext);
  const baseClassName = context.getPrefixCls("pro-form-login-page");
  const { wrapSSR, hashId } = useStyle$i(baseClassName);
  const getCls = (className) => `${baseClassName}-${className} ${hashId}`.trim();
  const logoDom = useMemo(() => {
    if (!logo)
      return null;
    if (typeof logo === "string") {
      return /* @__PURE__ */ jsx("img", { src: logo });
    }
    return logo;
  }, [logo]);
  return wrapSSR(
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: classNames(baseClassName, hashId),
        style: {
          ...style,
          position: "relative",
          backgroundImage: `url("${backgroundImageUrl}")`
        },
        children: [
          backgroundVideoUrl ? /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                overflow: "hidden",
                height: "100%",
                zIndex: 1,
                pointerEvents: "none"
              },
              children: /* @__PURE__ */ jsx(
                "video",
                {
                  src: backgroundVideoUrl,
                  controls: false,
                  autoPlay: true,
                  loop: true,
                  muted: true,
                  crossOrigin: "anonymous",
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }
                }
              )
            }
          ) : null,
          /* @__PURE__ */ jsx("div", { className: getCls("notice"), children: activityConfig && /* @__PURE__ */ jsxs(
            "div",
            {
              className: getCls("notice-activity"),
              style: activityConfig.style,
              children: [
                activityConfig.title && /* @__PURE__ */ jsxs("div", { className: getCls("notice-activity-title"), children: [
                  " ",
                  activityConfig.title,
                  " "
                ] }),
                activityConfig.subTitle && /* @__PURE__ */ jsx("div", { className: getCls("notice-activity-subTitle"), children: activityConfig.subTitle }),
                activityConfig.action && /* @__PURE__ */ jsx("div", { className: getCls("notice-activity-action"), children: activityConfig.action })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: getCls("left"), children: /* @__PURE__ */ jsxs("div", { className: getCls("container"), style: containerStyle, children: [
            /* @__PURE__ */ jsxs("div", { className: getCls("top"), children: [
              title || logoDom ? /* @__PURE__ */ jsxs("div", { className: getCls("header"), children: [
                logoDom ? /* @__PURE__ */ jsx("span", { className: getCls("logo"), children: logoDom }) : null,
                title ? /* @__PURE__ */ jsx("span", { className: getCls("title"), children: title }) : null
              ] }) : null,
              subTitle ? /* @__PURE__ */ jsx("div", { className: getCls("desc"), children: subTitle }) : null
            ] }),
            /* @__PURE__ */ jsxs("div", { className: getCls("main"), style: mainStyle, children: [
              /* @__PURE__ */ jsxs(ProForm, { isKeyPressSubmit: true, ...proFormProps, submitter, children: [
                message,
                children
              ] }),
              actions ? /* @__PURE__ */ jsx("div", { className: getCls("other"), style: otherStyle, children: actions }) : null
            ] })
          ] }) })
        ]
      }
    )
  );
}

const ProFormGroup = ProForm.Group;

const RouteContext = createContext({});

const genFooterToolBarStyle$1 = (token) => {
  return {
    [token.componentCls]: {
      position: "fixed",
      insetInlineEnd: 0,
      bottom: 0,
      zIndex: 99,
      display: "flex",
      alignItems: "center",
      width: "100%",
      paddingInline: 24,
      paddingBlock: 0,
      boxSizing: "border-box",
      lineHeight: "64px",
      /* A way to reset the style of the component. */
      backgroundColor: setAlpha(token.colorBgElevated, 0.6),
      borderBlockStart: `1px solid ${token.colorSplit}`,
      "-webkit-backdrop-filter": "blur(8px)",
      backdropFilter: "blur(8px)",
      color: token.colorText,
      transition: "all 0.2s ease 0s",
      "&-left": {
        flex: 1,
        color: token.colorText
      },
      "&-right": {
        color: token.colorText,
        "> *": {
          marginInlineEnd: 8,
          "&:last-child": {
            marginBlock: 0,
            marginInline: 0
          }
        }
      }
    }
  };
};
function useStyle$h(prefixCls) {
  return useStyle$A("ProLayoutFooterToolbar", (token) => {
    const proCardToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genFooterToolBarStyle$1(proCardToken)];
  });
}

function useStylish$3(prefixCls, {
  stylish
}) {
  return useStyle$A("ProLayoutFooterToolbarStylish", (token) => {
    const stylishToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    if (!stylish)
      return [];
    return [
      {
        [`${stylishToken.componentCls}`]: stylish?.(stylishToken)
      }
    ];
  });
}

const FooterToolbar = (props) => {
  const {
    children,
    className,
    extra,
    portalDom = true,
    style,
    renderContent,
    ...restProps
  } = props;
  const { getPrefixCls, getTargetContainer } = useContext(
    ConfigProvider.ConfigContext
  );
  const prefixCls = props.prefixCls || getPrefixCls("pro");
  const baseClassName = `${prefixCls}-footer-bar`;
  const { wrapSSR, hashId } = useStyle$h(baseClassName);
  const value = useContext(RouteContext);
  const width = useMemo(() => {
    const { hasSiderMenu, isMobile, siderWidth } = value;
    if (!hasSiderMenu) {
      return void 0;
    }
    if (!siderWidth) {
      return "100%";
    }
    return isMobile ? "100%" : `calc(100% - ${siderWidth}px)`;
  }, [value.collapsed, value.hasSiderMenu, value.isMobile, value.siderWidth]);
  const containerDom = useMemo(() => {
    if (typeof window === void 0 || typeof document === void 0)
      return null;
    return getTargetContainer?.() || document.body;
  }, []);
  const stylish = useStylish$3(`${baseClassName}.${baseClassName}-stylish`, {
    stylish: props.stylish
  });
  const dom = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: `${baseClassName}-left ${hashId}`.trim(), children: extra }),
    /* @__PURE__ */ jsx("div", { className: `${baseClassName}-right ${hashId}`.trim(), children })
  ] });
  useEffect(() => {
    if (!value || !value?.setHasFooterToolbar) {
      return () => {
      };
    }
    value?.setHasFooterToolbar(true);
    return () => {
      value?.setHasFooterToolbar?.(false);
    };
  }, []);
  const renderDom = /* @__PURE__ */ jsx(
    "div",
    {
      className: classNames(className, hashId, baseClassName, {
        [`${baseClassName}-stylish`]: !!props.stylish
      }),
      style: { width, ...style },
      ...omit(restProps, ["prefixCls"]),
      children: renderContent ? renderContent(
        {
          ...props,
          ...value,
          leftWidth: width
        },
        dom
      ) : dom
    }
  );
  const ssrDom = !isBrowser() || !portalDom || !containerDom ? renderDom : createPortal(renderDom, containerDom, baseClassName);
  return stylish.wrapSSR(
    wrapSSR(/* @__PURE__ */ jsx(React__default.Fragment, { children: ssrDom }, baseClassName))
  );
};

const genGridContentStyle = (token) => {
  return {
    [token.componentCls]: {
      width: "100%",
      "&-wide": {
        maxWidth: 1152,
        margin: "0 auto"
      }
    }
  };
};
function useStyle$g(prefixCls) {
  return useStyle$A("ProLayoutGridContent", (token) => {
    const GridContentToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genGridContentStyle(GridContentToken)];
  });
}

const GridContent = (props) => {
  const value = useContext(RouteContext);
  const {
    children,
    contentWidth: propsContentWidth,
    className: propsClassName,
    style
  } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = props.prefixCls || getPrefixCls("pro");
  const contentWidth = propsContentWidth || value.contentWidth;
  const className = `${prefixCls}-grid-content`;
  const { wrapSSR, hashId } = useStyle$g(className);
  const isWide = contentWidth === "Fixed" && value.layout === "top";
  return wrapSSR(
    /* @__PURE__ */ jsx(
      "div",
      {
        className: classNames(className, hashId, propsClassName, {
          [`${className}-wide`]: isWide
        }),
        style,
        children: /* @__PURE__ */ jsx("div", { className: `${prefixCls}-grid-content-children ${hashId}`.trim(), children })
      }
    )
  );
};

const textOverflowEllipsis = () => ({
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
});
const genPageHeaderStyle = (token) => {
  return {
    [token.componentCls]: {
      ...resetComponent?.(token),
      position: "relative",
      backgroundColor: token.pageHeaderBgGhost,
      paddingBlock: token.pageHeaderPaddingVertical + 2,
      paddingInline: token.pageHeaderPadding,
      "& &-has-breadcrumb": {
        paddingBlockStart: token.pageHeaderPaddingBreadCrumb
      },
      "& &-has-footer": {
        paddingBlockEnd: 0
      },
      "& &-back": {
        marginInlineEnd: token.margin,
        fontSize: 16,
        lineHeight: 1,
        "&-button": {
          fontSize: 16,
          ...operationUnit?.(token),
          color: token.pageHeaderColorBack,
          cursor: "pointer"
        },
        [`${token.componentCls}-rlt &`]: {
          float: "right",
          marginInlineEnd: 0,
          marginInlineStart: 0
        }
      },
      [`& ${token.ipassCls}-divider-vertical`]: {
        height: 14,
        marginBlock: 0,
        marginInline: token.marginSM,
        verticalAlign: "middle"
      },
      [`& &-breadcrumb + &-heading`]: {
        marginBlockStart: token.marginXS
      },
      "& &-heading": {
        display: "flex",
        justifyContent: "space-between",
        "&-left": {
          display: "flex",
          alignItems: "center",
          marginBlock: token.marginXS / 2,
          marginInlineEnd: 0,
          marginInlineStart: 0,
          overflow: "hidden"
        },
        "&-title": {
          marginInlineEnd: token.marginSM,
          marginBlockEnd: 0,
          color: token.colorTextHeading,
          fontWeight: 600,
          fontSize: token.pageHeaderFontSizeHeaderTitle,
          lineHeight: token.controlHeight + "px",
          ...textOverflowEllipsis(),
          [`${token.componentCls}-rlt &`]: {
            marginInlineEnd: 0,
            marginInlineStart: token.marginSM
          }
        },
        "&-avatar": {
          marginInlineEnd: token.marginSM,
          [`${token.componentCls}-rlt &`]: {
            float: "right",
            marginInlineEnd: 0,
            marginInlineStart: token.marginSM
          }
        },
        "&-tags": {
          [`${token.componentCls}-rlt &`]: {
            float: "right"
          }
        },
        "&-sub-title": {
          marginInlineEnd: token.marginSM,
          color: token.colorTextSecondary,
          fontSize: token.pageHeaderFontSizeHeaderSubTitle,
          lineHeight: token.lineHeight,
          ...textOverflowEllipsis(),
          [`${token.componentCls}-rlt &`]: {
            float: "right",
            marginInlineEnd: 0,
            marginInlineStart: 12
          }
        },
        "&-extra": {
          marginBlock: token.marginXS / 2,
          marginInlineEnd: 0,
          marginInlineStart: 0,
          whiteSpace: "nowrap",
          "> *": {
            "white-space": "unset",
            [`${token.componentCls}-rlt &`]: {
              marginInlineEnd: token.marginSM,
              marginInlineStart: 0
            }
          },
          [`${token.componentCls}-rlt &`]: {
            float: "left"
          },
          "*:first-child": {
            [`${token.componentCls}-rlt &`]: {
              marginInlineEnd: 0
            }
          }
        }
      },
      "&-content": {
        paddingBlockStart: token.pageHeaderPaddingContentPadding
      },
      "&-footer": {
        marginBlockStart: token.margin
      },
      "&-compact &-heading": {
        flexWrap: "wrap"
      },
      "&-wide": {
        maxWidth: 1152,
        margin: "0 auto"
      },
      "&-rtl": {
        direction: "rtl"
      }
    }
  };
};
function useStyle$f(prefixCls) {
  return useStyle$A("ProLayoutPageHeader", (token) => {
    const proCardToken = {
      ...token,
      componentCls: `.${prefixCls}`,
      pageHeaderBgGhost: "transparent",
      pageHeaderPadding: 16,
      pageHeaderPaddingVertical: 4,
      pageHeaderPaddingBreadCrumb: token.paddingSM,
      pageHeaderColorBack: token.colorTextHeading,
      pageHeaderFontSizeHeaderTitle: token.fontSizeHeading4,
      pageHeaderFontSizeHeaderSubTitle: 14,
      pageHeaderPaddingContentPadding: token.paddingSM
    };
    return [genPageHeaderStyle(proCardToken)];
  });
}

const renderBack = (prefixCls, hashId, backIcon, onBack) => {
  if (!backIcon || !onBack) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { className: `${prefixCls}-back ${hashId}`.trim(), children: /* @__PURE__ */ jsx(
    "div",
    {
      role: "button",
      onClick: (e) => {
        onBack?.(e);
      },
      className: `${prefixCls}-back-button ${hashId}`.trim(),
      "aria-label": "back",
      children: backIcon
    }
  ) });
};
const renderBreadcrumb = (breadcrumb, items, prefixCls) => {
  const linkItems = items.slice(0, -1);
  const currentItem = items.at(-1);
  return /* @__PURE__ */ jsxs(
    Breadcrumbs,
    {
      className: classNames(`${prefixCls}-breadcrumb`, breadcrumb.className),
      "aria-label": "breadcrumb",
      children: [
        linkItems.map((item, index) => item.disabled ? /* @__PURE__ */ jsx(
          Typography$1,
          {
            sx: { fontSize: "0.85rem" },
            color: "inherit",
            children: item?.title
          },
          `breadcrumb-${item.title}-${index}`
        ) : /* @__PURE__ */ jsx(
          MUILink,
          {
            component: Link,
            underline: "hover",
            color: "inherit",
            sx: { fontSize: "0.85rem" },
            href: item.href ?? "#",
            children: item.title
          },
          `breadcrumb-${item.title}-${index}`
        )),
        /* @__PURE__ */ jsx(Typography$1, { sx: { fontSize: "0.85rem" }, color: "inherit", children: currentItem?.title }, `breadcrumb-${currentItem?.title}-9999`)
      ]
    }
  );
};
const getBackIcon = (props) => {
  if (props.backIcon !== void 0) {
    return props.backIcon;
  }
  return /* @__PURE__ */ jsx(ArrowBackIosIcon, {});
};
const renderTitle = (prefixCls, props, hashId) => {
  const { title, subTitle, tags, extra, onBack } = props;
  const headingPrefixCls = `${prefixCls}-heading`;
  const hasHeading = title || subTitle || tags || extra;
  if (!hasHeading) {
    return null;
  }
  const backIcon = getBackIcon(props);
  const backIconDom = renderBack(prefixCls, hashId, backIcon, onBack);
  const hasTitle = backIconDom || hasHeading;
  return /* @__PURE__ */ jsxs("div", { className: headingPrefixCls + " " + hashId, children: [
    hasTitle && /* @__PURE__ */ jsxs("div", { className: `${headingPrefixCls}-left ${hashId}`.trim(), children: [
      backIconDom,
      title && /* @__PURE__ */ jsx(
        "span",
        {
          className: `${headingPrefixCls}-title ${hashId}`.trim(),
          title: typeof title === "string" ? title : void 0,
          children: title
        }
      ),
      subTitle && /* @__PURE__ */ jsx(
        "span",
        {
          className: `${headingPrefixCls}-sub-title ${hashId}`.trim(),
          title: typeof subTitle === "string" ? subTitle : void 0,
          children: subTitle
        }
      ),
      tags && /* @__PURE__ */ jsx("span", { className: `${headingPrefixCls}-tags ${hashId}`.trim(), children: tags })
    ] }),
    extra && /* @__PURE__ */ jsx("span", { className: `${headingPrefixCls}-extra ${hashId}`.trim(), children: /* @__PURE__ */ jsx(CompoundedSpace, { children: extra }) })
  ] });
};
const renderFooter$1 = (prefixCls, footer, hashId) => {
  if (footer) {
    return /* @__PURE__ */ jsx("div", { className: `${prefixCls}-footer ${hashId}`.trim(), children: footer });
  }
  return null;
};
const renderChildren = (prefixCls, children, hashId) => /* @__PURE__ */ jsx("div", { className: `${prefixCls}-content ${hashId}`.trim(), children });
const PageHeader = (props) => {
  const [compact, updateCompact] = React.useState(false);
  const pathname = usePathname();
  const intl = useIntl();
  const getBreadcrumbItems = (routes, prefix = "") => {
    for (const route of routes) {
      if (route.path === pathname) {
        return [
          {
            disabled: route.breadcrumbDisabled,
            title: intl.formatMessage({ id: `menu${prefix}.${route.name}`, defaultMessage: route.name }),
            href: route.path
          }
        ];
      }
      if ((route.routes?.length ?? 0) > 0) {
        const childRoute = getBreadcrumbItems(route.routes, `${prefix}.${route.name}`);
        if (childRoute.length) {
          return [
            {
              disabled: route.breadcrumbDisabled,
              title: intl.formatMessage({ id: `menu${prefix}.${route.name}`, defaultMessage: route.name }),
              href: route.path
            },
            ...childRoute
          ];
        }
      }
    }
    return [];
  };
  const onResize = ({ width }) => updateCompact(width < 768);
  const { getPrefixCls } = React.useContext(
    ConfigProvider.ConfigContext
  );
  const {
    prefixCls: customizePrefixCls,
    style,
    footer,
    children,
    breadcrumb = {},
    breadcrumbItems: rawBreadcrumbItems,
    breadcrumbRender,
    className: customizeClassName,
    contentWidth,
    layout
  } = props;
  const breadcrumbItems = breadcrumbRender === false ? [] : rawBreadcrumbItems ?? getBreadcrumbItems(useAppData().clientRoutes);
  const prefixCls = getPrefixCls("page-header", customizePrefixCls);
  const { wrapSSR, hashId } = useStyle$f(prefixCls);
  const getDefaultBreadcrumbDom = () => {
    if (breadcrumbItems) {
      return renderBreadcrumb(breadcrumb, breadcrumbItems, prefixCls);
    }
    return null;
  };
  const defaultBreadcrumbDom = getDefaultBreadcrumbDom();
  const breadcrumbRenderDomFromProps = breadcrumbRender === false ? /* @__PURE__ */ jsx(Fragment, {}) : breadcrumbRender?.({ ...props, prefixCls }, defaultBreadcrumbDom) ?? defaultBreadcrumbDom;
  const breadcrumbDom = breadcrumbRenderDomFromProps;
  const className = classNames(prefixCls, hashId, customizeClassName, {
    [`${prefixCls}-has-breadcrumb`]: !!breadcrumbDom,
    [`${prefixCls}-has-footer`]: !!footer,
    [`${prefixCls}-compact`]: compact,
    [`${prefixCls}-wide`]: contentWidth === "Fixed" && layout == "top",
    [`${prefixCls}-ghost`]: true
  });
  const title = renderTitle(prefixCls, props, hashId);
  const childDom = children && renderChildren(prefixCls, children, hashId);
  const footerDom = renderFooter$1(prefixCls, footer, hashId);
  if (!breadcrumbDom && !title && !footerDom && !childDom) {
    return null;
  }
  return wrapSSR(
    /* @__PURE__ */ jsx(ResizeObserver, { onResize, children: /* @__PURE__ */ jsxs("div", { className, style, children: [
      breadcrumbDom,
      title,
      childDom,
      footerDom
    ] }) })
  );
};

const PageLoading = () => /* @__PURE__ */ jsx("div", { style: { paddingBlockStart: 100, textAlign: "center" }, children: /* @__PURE__ */ jsx(CircularProgress, {}) });

const [sm, md, lg, xl] = [576, 768, 992, 1200].map(
  (bp) => `@media (max-width: ${bp}px)`
);
const genPageContainerStyle = (token) => {
  return {
    [token.componentCls]: {
      position: "relative",
      "&-children-container": {
        paddingBlockStart: 0,
        paddingBlockEnd: token.layout?.pageContainer?.paddingBlockPageContainerContent,
        paddingInline: token.layout?.pageContainer?.paddingInlinePageContainerContent
      },
      "&-children-container-no-header": {
        paddingBlockStart: token.layout?.pageContainer?.paddingBlockPageContainerContent
      },
      "&-affix": {
        [`${token.ipassCls}-affix`]: {
          [`${token.componentCls}-warp`]: {
            backgroundColor: token.layout?.pageContainer?.colorBgPageContainerFixed,
            transition: "background-color 0.3s",
            boxShadow: "0 2px 8px #f0f1f2"
          }
        }
      },
      ["& &-warp-page-header"]: {
        paddingBlockStart: (token.layout?.pageContainer?.paddingBlockPageContainerContent ?? 40) / 4,
        paddingBlockEnd: (token.layout?.pageContainer?.paddingBlockPageContainerContent ?? 40) / 2,
        paddingInlineStart: token.layout?.pageContainer?.paddingInlinePageContainerContent,
        paddingInlineEnd: token.layout?.pageContainer?.paddingInlinePageContainerContent,
        [`& ~ ${token.proComponentsCls}-grid-content`]: {
          [`${token.proComponentsCls}-page-container-children-content`]: {
            paddingBlock: (token.layout?.pageContainer?.paddingBlockPageContainerContent ?? 24) / 3
          }
        },
        [`${token.ipassCls}-page-header-breadcrumb`]: {
          paddingBlockStart: (token.layout?.pageContainer?.paddingBlockPageContainerContent ?? 40) / 4 + 10
        },
        [`${token.ipassCls}-page-header-heading`]: {
          paddingBlockStart: (token.layout?.pageContainer?.paddingBlockPageContainerContent ?? 40) / 4
        },
        [`${token.ipassCls}-page-header-footer`]: {
          marginBlockStart: (token.layout?.pageContainer?.paddingBlockPageContainerContent ?? 40) / 4
        }
      },
      "&-detail": {
        display: "flex",
        [sm]: {
          display: "block"
        }
      },
      "&-main": {
        width: "100%"
      },
      "&-row": {
        display: "flex",
        width: "100%",
        [md]: {
          display: "block"
        }
      },
      "&-content": {
        flex: "auto",
        width: "100%"
      },
      "&-extraContent": {
        flex: "0 1 auto",
        minWidth: "242px",
        marginInlineStart: 88,
        textAlign: "end",
        [xl]: {
          marginInlineStart: 44
        },
        [lg]: {
          marginInlineStart: 20
        },
        [md]: {
          marginInlineStart: 0,
          textAlign: "start"
        },
        [sm]: {
          marginInlineStart: 0
        }
      }
    }
  };
};
function useStyle$e(prefixCls, componentsToken) {
  return useStyle$A("ProLayoutPageContainer", (token) => {
    const proCardToken = {
      ...token,
      componentCls: `.${prefixCls}`,
      layout: {
        ...token?.layout,
        pageContainer: {
          ...token?.layout?.pageContainer,
          ...componentsToken
        }
      }
    };
    return [genPageContainerStyle(proCardToken)];
  });
}

function useStylish$2(prefixCls, {
  stylish
}) {
  return useStyle$A("ProLayoutPageContainerStylish", (token) => {
    const stylishToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    if (!stylish)
      return [];
    return [
      {
        [`div${stylishToken.componentCls}`]: stylish?.(stylishToken)
      }
    ];
  });
}

const version$1 = "5.1.7";
const renderFooter = ({
  tabList,
  tabActiveKey,
  onTabChange,
  hashId,
  tabBarExtraContent,
  tabProps,
  prefixedClassName
}) => {
  if (Array.isArray(tabList) || tabBarExtraContent) {
    return /* @__PURE__ */ jsx(
      Tabs,
      {
        className: `${prefixedClassName}-tabs ${hashId}`.trim(),
        activeKey: tabActiveKey,
        onChange: (key) => {
          if (onTabChange) {
            onTabChange(key);
          }
        },
        tabBarExtraContent,
        items: tabList?.map((item, index) => ({
          label: item.tab,
          ...item,
          key: item.key?.toString() || index?.toString()
        })),
        ...tabProps,
        children: compareVersions(version$1, "4.23.0") < 0 ? tabList?.map((item, index) => {
          return /* @__PURE__ */ jsx(
            Tabs.TabPane,
            {
              tab: item.tab,
              ...item
            },
            item.key || index
          );
        }) : null
      }
    );
  }
  return null;
};
const renderPageHeader = (content, extraContent, prefixedClassName, hashId) => {
  if (!content && !extraContent) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { className: `${prefixedClassName}-detail ${hashId}`.trim(), children: /* @__PURE__ */ jsx("div", { className: `${prefixedClassName}-main ${hashId}`.trim(), children: /* @__PURE__ */ jsxs("div", { className: `${prefixedClassName}-row ${hashId}`.trim(), children: [
    content && /* @__PURE__ */ jsx("div", { className: `${prefixedClassName}-content ${hashId}`.trim(), children: content }),
    extraContent && /* @__PURE__ */ jsx(
      "div",
      {
        className: `${prefixedClassName}-extraContent ${hashId}`.trim(),
        children: extraContent
      }
    )
  ] }) }) });
};
const memoRenderPageHeader = (props) => {
  const {
    title,
    content,
    pageHeaderRender,
    header,
    prefixedClassName,
    extraContent,
    childrenContentStyle,
    style,
    prefixCls,
    hashId,
    value,
    breadcrumbRender,
    ...restProps
  } = props;
  const getBreadcrumbRender = () => {
    if (breadcrumbRender === false) {
      return false;
    }
    if (!breadcrumbRender) {
      return void 0;
    }
    return breadcrumbRender;
  };
  if (pageHeaderRender === false) {
    return null;
  }
  if (pageHeaderRender) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      " ",
      pageHeaderRender({ ...props, ...value })
    ] });
  }
  let pageHeaderTitle = title;
  if (!title && title !== false) {
    pageHeaderTitle = value.title;
  }
  const pageHeaderProps = {
    ...value,
    title: pageHeaderTitle,
    ...restProps,
    footer: renderFooter({
      ...restProps,
      hashId,
      breadcrumbRender,
      prefixedClassName
    }),
    ...header
  };
  const { breadcrumb } = pageHeaderProps;
  const noHasBreadCrumb = !breadcrumb && !breadcrumbRender;
  if ([
    "title",
    "subTitle",
    "extra",
    "tags",
    "footer",
    "avatar",
    "backIcon"
    // @ts-ignore
  ].every((item) => !pageHeaderProps[item]) && noHasBreadCrumb && !content && !extraContent) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    PageHeader,
    {
      ...pageHeaderProps,
      className: `${prefixedClassName}-warp-page-header ${hashId}`.trim(),
      breadcrumb: breadcrumbRender === false ? void 0 : { ...pageHeaderProps.breadcrumb, ...value.breadcrumbProps },
      breadcrumbRender: getBreadcrumbRender(),
      prefixCls,
      children: header?.children || renderPageHeader(content, extraContent, prefixedClassName, hashId)
    }
  );
};
const PageContainerBase = (props) => {
  const {
    children,
    loading = false,
    className,
    style,
    footer,
    affixProps,
    token: propsToken,
    fixedHeader,
    breadcrumbRender,
    footerToolBarProps,
    childrenContentStyle,
    ...restProps
  } = props;
  const value = useContext(RouteContext);
  useEffect(() => {
    if (!value || !value?.setHasPageContainer) {
      return () => {
      };
    }
    value?.setHasPageContainer?.((num) => num + 1);
    return () => {
      value?.setHasPageContainer?.((num) => num - 1);
    };
  }, []);
  const { token } = useContext(ProProvider);
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = props.prefixCls || getPrefixCls("pro");
  const basePageContainer = `${prefixCls}-page-container`;
  const { wrapSSR, hashId } = useStyle$e(basePageContainer, propsToken);
  const stylish = useStylish$2(
    `${basePageContainer}.${basePageContainer}-stylish`,
    {
      stylish: props.stylish
    }
  );
  const memoBreadcrumbRender = useMemo(() => {
    if (breadcrumbRender == false)
      return false;
    return breadcrumbRender || restProps?.header?.breadcrumbRender;
  }, [breadcrumbRender, restProps?.header?.breadcrumbRender]);
  const pageHeaderDom = memoRenderPageHeader({
    ...restProps,
    breadcrumbRender: memoBreadcrumbRender,
    ghost: true,
    hashId,
    prefixCls: void 0,
    prefixedClassName: basePageContainer,
    value
  });
  const loadingDom = useMemo(() => {
    if (!loading) {
      return null;
    }
    return /* @__PURE__ */ jsx(PageLoading, {});
  }, [loading]);
  const content = useMemo(() => {
    return children ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
      "div",
      {
        className: classNames(
          hashId,
          `${basePageContainer}-children-container`,
          {
            [`${basePageContainer}-children-container-no-header`]: !pageHeaderDom
          }
        ),
        style: childrenContentStyle,
        children
      }
    ) }) : null;
  }, [children, basePageContainer, childrenContentStyle, hashId]);
  const renderContentDom = useMemo(() => {
    const dom = loadingDom || content;
    return dom;
  }, [loadingDom, content]);
  const containerClassName = classNames(basePageContainer, hashId, className, {
    [`${basePageContainer}-with-footer`]: footer,
    [`${basePageContainer}-with-affix`]: fixedHeader && pageHeaderDom,
    [`${basePageContainer}-stylish`]: !!restProps.stylish
  });
  return wrapSSR(
    stylish.wrapSSR(
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { style, className: containerClassName, children: [
          fixedHeader && pageHeaderDom ? (
            // 在 hasHeader 且 fixedHeader 的情況下，才需要設置高度
            /* @__PURE__ */ jsx(
              Affix,
              {
                offsetTop: value.hasHeader && value.fixedHeader ? token.layout?.header?.heightLayoutHeader : 1,
                ...affixProps,
                className: `${basePageContainer}-affix ${hashId}`.trim(),
                children: /* @__PURE__ */ jsx("div", { className: `${basePageContainer}-warp ${hashId}`.trim(), children: pageHeaderDom })
              }
            )
          ) : pageHeaderDom,
          renderContentDom && /* @__PURE__ */ jsx(GridContent, { children: renderContentDom })
        ] }),
        footer && /* @__PURE__ */ jsx(
          FooterToolbar,
          {
            stylish: restProps.footerStylish,
            prefixCls,
            ...footerToolBarProps,
            children: footer
          }
        )
      ] })
    )
  );
};
const PageContainer = (props) => {
  return /* @__PURE__ */ jsx(ProConfigProvider, { needDeps: true, children: /* @__PURE__ */ jsx(PageContainerBase, { ...props }) });
};

const genFooterToolBarStyle = (token) => {
  return {
    [token.componentCls]: {
      marginBlock: 0,
      marginBlockStart: 48,
      marginBlockEnd: 24,
      marginInline: 0,
      paddingBlock: 0,
      paddingInline: 16,
      "&-list": {
        marginBlockEnd: 8,
        color: token.colorTextSecondary,
        "&-link": {
          color: token.colorTextSecondary,
          textDecoration: token.linkDecoration
        },
        "*:not(:last-child)": {
          marginInlineEnd: 8
        },
        "&:hover": {
          color: token.colorPrimary
        }
      },
      "&-copyright": {
        fontSize: "14px",
        color: token.colorText,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ":first-child": {
          marginInlineEnd: 5
        }
      }
    }
  };
};
function useStyle$d(prefixCls) {
  return useStyle$A("ProLayoutFooter", (token) => {
    const proCardToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genFooterToolBarStyle(proCardToken)];
  });
}

const GlobalFooter = ({
  className,
  prefixCls,
  links,
  copyright,
  style
}) => {
  const context = useContext(ConfigProvider.ConfigContext);
  const baseClassName = context.getPrefixCls(prefixCls || "pro-global-footer");
  const { wrapSSR, hashId } = useStyle$d(baseClassName);
  if ((links == null || links === false || Array.isArray(links) && links.length === 0) && (copyright == null || copyright === false)) {
    return null;
  }
  return wrapSSR(
    /* @__PURE__ */ jsxs("div", { className: classNames(baseClassName, hashId, className), style, children: [
      links && /* @__PURE__ */ jsx("div", { className: `${baseClassName}-list ${hashId}`.trim(), children: links.map((link) => /* @__PURE__ */ jsx(
        "a",
        {
          className: `${baseClassName}-list-link ${hashId}`.trim(),
          title: link.key,
          target: link.blankTarget ? "_blank" : "_self",
          href: link.href,
          rel: "noreferrer",
          children: link.title
        },
        link.key
      )) }),
      copyright && /* @__PURE__ */ jsx("div", { className: `${baseClassName}-copyright ${hashId}`.trim(), children: copyright })
    ] })
  );
};

const { Footer } = Layout;
const DefaultFooter = ({
  links,
  copyright,
  style,
  className,
  prefixCls
}) => /* @__PURE__ */ jsx(Footer, { className, style: { padding: 0, ...style }, children: /* @__PURE__ */ jsx(
  GlobalFooter,
  {
    links,
    prefixCls,
    copyright: copyright === false ? null : /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx(CopyrightIcon, { fontSize: "small" }),
      " ",
      copyright
    ] })
  }
) });

const getOpenKeysFromMenuData = (menuData) => {
  return (menuData || []).reduce((pre, item) => {
    if (item.key) {
      pre.push(item.key);
    }
    if (item.children || item.routes) {
      const newArray = pre.concat(
        getOpenKeysFromMenuData(item.children || item.routes) || []
      );
      return newArray;
    }
    return pre;
  }, []);
};
function clearMenuItem(menusData) {
  return menusData.map((item) => {
    const children = item.children || [];
    const finalItem = { ...item };
    if (!finalItem.children && finalItem.routes) {
      finalItem.children = finalItem.routes;
    }
    if (!finalItem.name || finalItem.hideInMenu) {
      return null;
    }
    if (finalItem && finalItem?.children) {
      if (!finalItem.hideChildrenInMenu && children.some((child) => child && child.name && !child.hideInMenu)) {
        return {
          ...item,
          children: clearMenuItem(children)
        };
      }
      delete finalItem.children;
    }
    delete finalItem.routes;
    return finalItem;
  }).filter((item) => item);
}

const AppsLogo = () => /* @__PURE__ */ jsx(
  "svg",
  {
    width: "1em",
    height: "1em",
    viewBox: "0 0 12 12",
    fill: "currentColor",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx("path", { d: "M0 0h3v3H0V0zm4.5 0h3v3h-3V0zM9 0h3v3H9V0zM0 4.5h3v3H0v-3zm4.503 0h3v3h-3v-3zM9 4.5h3v3H9v-3zM0 9h3v3H0V9zm4.503 0h3v3h-3V9zM9 9h3v3H9V9z" })
  }
);

const DefaultContent = (props) => {
  const { appList, baseClassName, hashId, itemClick } = props;
  return /* @__PURE__ */ jsx("div", { className: `${baseClassName}-content ${hashId}`.trim(), children: /* @__PURE__ */ jsx("ul", { className: `${baseClassName}-content-list ${hashId}`.trim(), children: appList?.map((app, index) => {
    if (app?.children?.length) {
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `${baseClassName}-content-list-item-group ${hashId}`.trim(),
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `${baseClassName}-content-list-item-group-title ${hashId}`.trim(),
                children: app.title
              }
            ),
            /* @__PURE__ */ jsx(
              DefaultContent,
              {
                hashId,
                itemClick,
                appList: app?.children,
                baseClassName
              }
            )
          ]
        },
        index
      );
    }
    return /* @__PURE__ */ jsx(
      "li",
      {
        className: `${baseClassName}-content-list-item ${hashId}`.trim(),
        onClick: (e) => {
          e.stopPropagation();
          itemClick?.(app);
        },
        children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: itemClick ? void 0 : app.url,
            target: app.target,
            rel: "noreferrer",
            children: [
              defaultRenderLogo(app.icon),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { children: app.title }),
                app.desc ? /* @__PURE__ */ jsx("span", { children: app.desc }) : null
              ] })
            ]
          }
        )
      },
      index
    );
  }) }) });
};

const renderLogo$1 = (logo, title) => {
  if (logo && typeof logo === "string" && isUrl$1(logo)) {
    return /* @__PURE__ */ jsx("img", { src: logo, alt: "logo" });
  }
  if (typeof logo === "function") {
    return logo();
  }
  if (logo && typeof logo === "string") {
    return /* @__PURE__ */ jsx("div", { id: "avatarLogo", children: logo });
  }
  if (!logo && title && typeof title === "string") {
    const symbol = title.substring(0, 1);
    return /* @__PURE__ */ jsx("div", { id: "avatarLogo", children: symbol });
  }
  return logo;
};
const SimpleContent = (props) => {
  const { appList, baseClassName, hashId, itemClick } = props;
  return /* @__PURE__ */ jsx("div", { className: `${baseClassName}-content ${hashId}`.trim(), children: /* @__PURE__ */ jsx("ul", { className: `${baseClassName}-content-list ${hashId}`.trim(), children: appList?.map((app, index) => {
    if (app?.children?.length) {
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `${baseClassName}-content-list-item-group ${hashId}`.trim(),
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `${baseClassName}-content-list-item-group-title ${hashId}`.trim(),
                children: app.title
              }
            ),
            /* @__PURE__ */ jsx(
              SimpleContent,
              {
                hashId,
                itemClick,
                appList: app?.children,
                baseClassName
              }
            )
          ]
        },
        index
      );
    }
    return /* @__PURE__ */ jsx(
      "li",
      {
        className: `${baseClassName}-content-list-item ${hashId}`.trim(),
        onClick: (e) => {
          e.stopPropagation();
          itemClick?.(app);
        },
        children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: itemClick ? "javascript:;" : app.url,
            target: app.target,
            rel: "noreferrer",
            children: [
              renderLogo$1(app.icon, app.title),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { children: app.title }) })
            ]
          }
        )
      },
      index
    );
  }) }) });
};

const genAppsLogoComponentsDefaultListStyle = (token) => {
  return {
    "&-content": {
      maxHeight: "calc(100vh - 48px)",
      overflow: "auto",
      "&-list": {
        boxSizing: "content-box",
        maxWidth: 656,
        marginBlock: 0,
        marginInline: 0,
        paddingBlock: 0,
        paddingInline: 0,
        listStyle: "none",
        "&-item": {
          position: "relative",
          display: "inline-block",
          width: 328,
          height: 72,
          paddingInline: 16,
          paddingBlock: 16,
          verticalAlign: "top",
          listStyleType: "none",
          transition: "transform 0.2s cubic-bezier(0.333, 0, 0, 1)",
          borderRadius: token.borderRadius,
          "&-group": {
            marginBottom: 16,
            "&-title": {
              margin: "16px 0 8px 12px",
              fontWeight: 600,
              color: "rgba(0, 0, 0, 0.88)",
              fontSize: 16,
              opacity: 0.85,
              lineHeight: 1.5,
              "&:first-child": {
                marginTop: 12
              }
            }
          },
          "&:hover": {
            backgroundColor: token.colorBgTextHover
          },
          "* div": resetComponent?.(token),
          a: {
            display: "flex",
            height: "100%",
            fontSize: 12,
            textDecoration: "none",
            "& > img": {
              width: 40,
              height: 40
            },
            "& > div": {
              marginInlineStart: 14,
              color: token.colorTextHeading,
              fontSize: 14,
              lineHeight: "22px",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis"
            },
            "& > div > span": {
              color: token.colorTextSecondary,
              fontSize: 12,
              lineHeight: "20px"
            }
          }
        }
      }
    }
  };
};

const genAppsLogoComponentsSimpleListStyle = (token) => {
  return {
    "&-content": {
      maxHeight: "calc(100vh - 48px)",
      overflow: "auto",
      "&-list": {
        boxSizing: "border-box",
        maxWidth: 376,
        marginBlock: 0,
        marginInline: 0,
        paddingBlock: 0,
        paddingInline: 0,
        listStyle: "none",
        "&-item": {
          position: "relative",
          display: "inline-block",
          width: 104,
          height: 104,
          marginBlock: 8,
          marginInline: 8,
          paddingInline: 24,
          paddingBlock: 24,
          verticalAlign: "top",
          listStyleType: "none",
          transition: "transform 0.2s cubic-bezier(0.333, 0, 0, 1)",
          borderRadius: token.borderRadius,
          "&-group": {
            marginBottom: 16,
            "&-title": {
              margin: "16px 0 8px 12px",
              fontWeight: 600,
              color: "rgba(0, 0, 0, 0.88)",
              fontSize: 16,
              opacity: 0.85,
              lineHeight: 1.5,
              "&:first-child": {
                marginTop: 12
              }
            }
          },
          "&:hover": {
            backgroundColor: token.colorBgTextHover
          },
          a: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            fontSize: 12,
            textDecoration: "none",
            "& > #avatarLogo": {
              width: 40,
              height: 40,
              margin: "0 auto",
              color: token.colorPrimary,
              fontSize: 22,
              lineHeight: "40px",
              textAlign: "center",
              backgroundImage: "linear-gradient(180deg, #E8F0FB 0%, #F6F8FC 100%)",
              borderRadius: token.borderRadius
            },
            "& > img": {
              width: 40,
              height: 40
            },
            "& > div": {
              marginBlockStart: 5,
              marginInlineStart: 0,
              color: token.colorTextHeading,
              fontSize: 14,
              lineHeight: "22px",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis"
            },
            "& > div > span": {
              color: token.colorTextSecondary,
              fontSize: 12,
              lineHeight: "20px"
            }
          }
        }
      }
    }
  };
};

const genAppsLogoComponentsStyle = (token) => {
  return {
    [token.componentCls]: {
      "&-icon": {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        paddingInline: 4,
        paddingBlock: 0,
        fontSize: 14,
        lineHeight: "14px",
        height: 28,
        width: 28,
        cursor: "pointer",
        color: token.layout?.colorTextAppListIcon,
        borderRadius: token.borderRadius,
        "&:hover": {
          color: token.layout?.colorTextAppListIconHover,
          backgroundColor: token.layout?.colorBgAppListIconHover
        },
        "&-active": {
          color: token.layout?.colorTextAppListIconHover,
          backgroundColor: token.layout?.colorBgAppListIconHover
        }
      },
      "&-item-title": {
        marginInlineStart: "16px",
        marginInlineEnd: "8px",
        marginBlockStart: 0,
        marginBlockEnd: "12px",
        fontWeight: 600,
        color: "rgba(0, 0, 0, 0.88)",
        fontSize: 16,
        opacity: 0.85,
        lineHeight: 1.5,
        "&:first-child": {
          marginBlockStart: 12
        }
      },
      "&-popover": {
        [`${token.ipassCls}-popover-arrow`]: {
          display: "none"
        }
      },
      "&-simple": genAppsLogoComponentsSimpleListStyle(token),
      "&-default": genAppsLogoComponentsDefaultListStyle(token)
    }
  };
};
function useStyle$c(prefixCls) {
  return useStyle$A("AppsLogoComponents", (token) => {
    const proCardToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genAppsLogoComponentsStyle(proCardToken)];
  });
}

const defaultRenderLogo = (logo) => {
  if (typeof logo === "string") {
    return /* @__PURE__ */ jsx("img", { width: "auto", height: 22, src: logo, alt: "logo" });
  }
  if (typeof logo === "function") {
    return logo();
  }
  return logo;
};
const AppsLogoComponents = (props) => {
  const {
    appList,
    appListRender,
    prefixCls = "ipass",
    onItemClick: itemClick
  } = props;
  const ref = React__default.useRef(null);
  const popoverRef = React__default.useRef(null);
  const baseClassName = `${prefixCls}-layout-apps`;
  const { wrapSSR, hashId } = useStyle$c(baseClassName);
  const [open, setOpen] = useState(false);
  const cloneItemClick = (app) => {
    itemClick?.(app, popoverRef);
  };
  const defaultDomContent = useMemo(() => {
    const isSimple = appList?.some((app) => {
      return !app?.desc;
    });
    if (isSimple) {
      return /* @__PURE__ */ jsx(
        SimpleContent,
        {
          hashId,
          appList,
          itemClick: itemClick ? cloneItemClick : void 0,
          baseClassName: `${baseClassName}-simple`
        }
      );
    }
    return /* @__PURE__ */ jsx(
      DefaultContent,
      {
        hashId,
        appList,
        itemClick: itemClick ? cloneItemClick : void 0,
        baseClassName: `${baseClassName}-default`
      }
    );
  }, [appList, baseClassName, hashId]);
  if (!props?.appList?.length)
    return null;
  const popoverContent = appListRender ? appListRender(props?.appList, defaultDomContent) : defaultDomContent;
  const popoverOpenProps = openVisibleCompatible(
    void 0,
    (openChange) => setOpen(openChange)
  );
  return wrapSSR(
    /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          ref,
          onClick: (e) => {
            e.stopPropagation();
            e.preventDefault();
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Popover,
        {
          placement: "bottomRight",
          trigger: ["click"],
          zIndex: 9999,
          arrow: false,
          ...popoverOpenProps,
          overlayClassName: `${baseClassName}-popover ${hashId}`.trim(),
          content: popoverContent,
          getPopupContainer: () => ref.current || document.body,
          children: /* @__PURE__ */ jsx(
            "span",
            {
              ref: popoverRef,
              onClick: (e) => {
                e.stopPropagation();
              },
              className: classNames(`${baseClassName}-icon`, hashId, {
                [`${baseClassName}-icon-active`]: open
              }),
              children: /* @__PURE__ */ jsx(AppsLogo, {})
            }
          )
        }
      )
    ] })
  );
};

function ArrowSvgIcon() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "1em",
      height: "1em",
      viewBox: "0 0 12 12",
      fill: "currentColor",
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsx("path", { d: "M6.432 7.967a.448.448 0 01-.318.133h-.228a.46.46 0 01-.318-.133L2.488 4.85a.305.305 0 010-.43l.427-.43a.293.293 0 01.42 0L6 6.687l2.665-2.699a.299.299 0 01.426 0l.42.431a.305.305 0 010 .43L6.432 7.967z" })
    }
  );
}

const genSiderMenuStyle$1 = (token) => {
  return {
    [token.componentCls]: {
      position: "absolute",
      insetBlockStart: "18px",
      zIndex: "101",
      width: "24px",
      height: "24px",
      fontSize: ["14px", "16px"],
      textAlign: "center",
      borderRadius: "40px",
      insetInlineEnd: "-13px",
      transition: "transform 0.3s",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      color: token.layout?.sider?.colorTextCollapsedButton,
      backgroundColor: token.layout?.sider?.colorBgCollapsedButton,
      boxShadow: "0 2px 8px -2px rgba(0,0,0,0.05), 0 1px 4px -1px rgba(25,15,15,0.07), 0 0 1px 0 rgba(0,0,0,0.08)",
      "&:hover": {
        color: token.layout?.sider?.colorTextCollapsedButtonHover,
        boxShadow: "0 4px 16px -4px rgba(0,0,0,0.05), 0 2px 8px -2px rgba(25,15,15,0.07), 0 1px 2px 0 rgba(0,0,0,0.08)"
      },
      ".muiicon": {
        fontSize: "14px"
      },
      "& > svg": {
        transition: "transform  0.3s",
        transform: "rotate(90deg)"
      },
      "&-collapsed": {
        "& > svg": {
          transform: "rotate(-90deg)"
        }
      }
    }
  };
};
function useStyle$b(prefixCls) {
  return useStyle$A("SiderMenuCollapsedIcon", (token) => {
    const siderMenuToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genSiderMenuStyle$1(siderMenuToken)];
  });
}

const CollapsedIcon = (props) => {
  const { isMobile, collapsed, ...rest } = props;
  const { wrapSSR, hashId } = useStyle$b(props.className);
  if (isMobile && collapsed)
    return null;
  return wrapSSR(
    /* @__PURE__ */ jsx(
      "div",
      {
        ...rest,
        className: classNames(props.className, hashId, {
          [`${props.className}-collapsed`]: collapsed,
          [`${props.className}-is-mobile`]: isMobile
        }),
        children: /* @__PURE__ */ jsx(ArrowSvgIcon, {})
      }
    )
  );
};

const genProLayoutBaseMenuStyle = (token) => {
  const menuToken = token.layout?.sider;
  return {
    [`${token.componentCls}`]: {
      background: "transparent",
      color: menuToken?.colorTextMenu,
      border: "none",
      [`${token.componentCls}-menu-item`]: {
        transition: "none !important"
      },
      [`${token.componentCls}-submenu-has-icon`]: {
        [`> ${token.ipassCls}-menu-sub`]: {
          paddingInlineStart: 10
        }
      },
      [`${token.ipassCls}-menu-title-content`]: {
        width: "100%",
        height: "100%",
        display: "inline-flex"
      },
      [`${token.ipassCls}-menu-title-content`]: {
        "&:first-child": {
          width: "100%"
        }
      },
      [`${token.componentCls}-item-icon`]: {
        display: "flex",
        alignItems: "center"
      },
      [`&&-collapsed`]: {
        [`${token.ipassCls}-menu-item, 
        ${token.ipassCls}-menu-item-group > ${token.ipassCls}-menu-item-group-list > ${token.ipassCls}-menu-item, 
        ${token.ipassCls}-menu-item-group > ${token.ipassCls}-menu-item-group-list > ${token.ipassCls}-menu-submenu > ${token.ipassCls}-menu-submenu-title, 
        ${token.ipassCls}-menu-submenu > ${token.ipassCls}-menu-submenu-title`]: {
          paddingInline: "0 !important",
          marginBlock: "4px !important"
        },
        [`${token.ipassCls}-menu-item-group > ${token.ipassCls}-menu-item-group-list > ${token.ipassCls}-menu-submenu-selected > ${token.ipassCls}-menu-submenu-title, 
        ${token.ipassCls}-menu-submenu-selected > ${token.ipassCls}-menu-submenu-title`]: {
          backgroundColor: menuToken?.colorBgMenuItemSelected,
          borderRadius: token.borderRadiusLG
        },
        [`${token.componentCls}-group`]: {
          [`${token.ipassCls}-menu-item-group-title`]: {
            paddingInline: 0
          }
        }
      },
      "&-item-title": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: token.marginXS,
        [`${token.componentCls}-item-text`]: {
          maxWidth: "100%",
          textOverflow: "ellipsis",
          overflow: "hidden",
          wordBreak: "break-all",
          whiteSpace: "nowrap"
        },
        "&-collapsed": {
          minWidth: 40,
          height: 40,
          [`${token.componentCls}-item-icon`]: {
            height: "16px",
            width: "16px",
            lineHeight: "16px !important",
            ".muiicon": {
              lineHeight: "16px !important",
              height: "16px"
            }
          },
          [`${token.componentCls}-item-text-has-icon`]: {
            display: "none !important"
          }
        },
        "&-collapsed-level-0": {
          flexDirection: "column",
          justifyContent: "center"
        },
        [`&${token.componentCls}-group-item-title`]: {
          gap: token.marginXS,
          height: 18,
          overflow: "hidden"
        },
        [`&${token.componentCls}-item-collapsed-show-title`]: {
          lineHeight: "16px",
          gap: 0,
          [`&${token.componentCls}-item-title-collapsed`]: {
            display: "flex",
            [`${token.componentCls}-item-icon`]: {
              height: "16px",
              width: "16px",
              lineHeight: "16px !important",
              ".muiicon": {
                lineHeight: "16px!important",
                height: "16px"
              }
            },
            [`${token.componentCls}-item-text`]: {
              opacity: "1 !important",
              display: "inline !important",
              textAlign: "center",
              fontSize: 12,
              height: 12,
              lineHeight: "12px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "100%",
              margin: 0,
              padding: 0,
              marginBlockStart: 4
            }
          }
        }
      },
      "&-group": {
        [`${token.ipassCls}-menu-item-group-title`]: {
          fontSize: 12,
          color: token.colorTextLabel,
          ".muiicon": {
            marginInlineEnd: 8
          }
        }
      },
      "&-group-divider": {
        color: token.colorTextSecondary,
        fontSize: 12,
        lineHeight: 20
      }
    },
    // ...(mode.includes('horizontal')
    //   ? {}
    //   : {
    //     [`${token.ipassCls}-menu-submenu${token.ipassCls}-menu-submenu-popup`]: {
    //       [`${token.componentCls}-item-title`]: {
    //         alignItems: 'flex-start',
    //       },
    //     },
    //   }),
    [`${token.ipassCls}-menu-submenu${token.ipassCls}-menu-submenu-popup`]: {
      [`${token.componentCls}-item-title`]: {
        alignItems: "flex-start"
      }
    },
    [`${token.ipassCls}-menu-submenu-popup`]: {
      backgroundColor: "rgba(255, 255, 255, 0.42)",
      "-webkit-backdrop-filter": "blur(8px)",
      backdropFilter: "blur(8px)"
    }
  };
};
function useStyle$a(prefixCls, mode) {
  return useStyle$A("ProLayoutBaseMenu" + mode, (token) => {
    const proLayoutMenuToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genProLayoutBaseMenuStyle(proLayoutMenuToken)];
  });
}

const MenuItemTooltip = (props) => {
  const [collapsed, setCollapsed] = useState(props.collapsed);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
    setTimeout(() => {
      setCollapsed(props.collapsed);
    }, 400);
  }, [props.collapsed]);
  if (props.disable) {
    return props.children;
  }
  return /* @__PURE__ */ jsx(
    Tooltip,
    {
      title: props.title,
      open: collapsed && props.collapsed ? open : false,
      placement: "right",
      onOpenChange: setOpen,
      children: props.children
    }
  );
};
const getIcon = (icon, className) => {
  if (typeof icon === "string" && icon !== "") {
    if (isUrl$1(icon) || isImg(icon)) {
      return /* @__PURE__ */ jsx(
        Icon,
        {
          className,
          children: icon
        }
      );
    }
  }
  return icon;
};
const getMenuTitleSymbol = (title) => {
  if (title && typeof title === "string") {
    const symbol = title.substring(0, 1).toUpperCase();
    return symbol;
  }
  return null;
};
class MenuUtil {
  constructor(props) {
    this.getNavMenuItems = (menusData = [], level) => menusData.map((item) => this.getSubMenuOrItem(item, level)).filter((item) => item).flat(1);
    /** Get SubMenu or Item */
    this.getSubMenuOrItem = (item, level) => {
      const {
        subMenuItemRender,
        baseClassName,
        prefixCls,
        collapsed,
        menu,
        layout
      } = this.props;
      const isGroup = menu?.type === "group" && layout !== "top";
      const designToken = this.props.token;
      const name = this.getIntlName(item);
      const children = item?.children || item?.routes;
      const menuType = isGroup && level === 0 ? "group" : void 0;
      if (Array.isArray(children) && children.length > 0) {
        const shouldHasIcon = level === 0 || isGroup && level === 1;
        const iconDom = getIcon(
          item.icon,
          `${baseClassName}-icon ${this.props?.hashId}`
        );
        const defaultIcon = collapsed && shouldHasIcon ? getMenuTitleSymbol(name) : null;
        const defaultTitle = /* @__PURE__ */ jsxs(
          "div",
          {
            className: classNames(
              `${baseClassName}-item-title`,
              this.props?.hashId,
              {
                [`${baseClassName}-item-title-collapsed`]: collapsed,
                [`${baseClassName}-item-title-collapsed-level-${level}`]: collapsed,
                [`${baseClassName}-group-item-title`]: menuType === "group",
                [`${baseClassName}-item-collapsed-show-title`]: menu?.collapsedShowTitle && collapsed
              }
            ),
            children: [
              menuType === "group" && collapsed ? null : shouldHasIcon && iconDom ? /* @__PURE__ */ jsx(
                "span",
                {
                  className: `${baseClassName}-item-icon ${this.props?.hashId}`.trim(),
                  children: iconDom
                }
              ) : defaultIcon,
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: classNames(
                    `${baseClassName}-item-text`,
                    this.props?.hashId,
                    {
                      [`${baseClassName}-item-text-has-icon`]: menuType !== "group" && shouldHasIcon && (iconDom || defaultIcon)
                    }
                  ),
                  children: name
                }
              )
            ]
          }
        );
        const title = subMenuItemRender ? subMenuItemRender({ ...item, isUrl: false }, defaultTitle, this.props) : defaultTitle;
        const childrenList = this.getNavMenuItems(children, level + 1);
        if (isGroup && level === 0 && this.props.collapsed && !menu.collapsedShowGroupTitle) {
          return this.getNavMenuItems(children, level);
        }
        return [
          {
            type: menuType,
            key: item.key || item.path,
            label: title,
            onClick: isGroup ? void 0 : item.onTitleClick,
            children: childrenList,
            className: classNames({
              [`${baseClassName}-group`]: menuType === "group",
              [`${baseClassName}-submenu`]: menuType !== "group",
              [`${baseClassName}-submenu-has-icon`]: menuType !== "group" && shouldHasIcon && iconDom
            })
          },
          isGroup && level === 0 ? {
            type: "divider",
            prefixCls,
            className: `${baseClassName}-divider`,
            key: (item.key || item.path) + "-group-divider",
            style: {
              padding: 0,
              borderBlockEnd: 0,
              margin: this.props.collapsed ? "4px" : "6px 16px",
              marginBlockStart: this.props.collapsed ? 4 : 8,
              borderColor: designToken?.layout?.sider?.colorMenuItemDivider
            }
          } : void 0
        ].filter(Boolean);
      }
      return {
        className: `${baseClassName}-menu-item`,
        disabled: item.disabled,
        key: item.key || item.path,
        onClick: item.onTitleClick,
        label: this.getMenuItemPath(item, level)
      };
    };
    this.getIntlName = (item) => {
      const { name, locale } = item;
      const { menu, formatMessage } = this.props;
      if (locale && menu?.locale !== false) {
        return formatMessage?.({
          id: locale,
          defaultMessage: name
        });
      }
      return name;
    };
    /**
     * 判斷是否是http連結.返回 Link 或 a Judge whether it is http link.return a or Link
     *
     * @memberof SiderMenu
     */
    this.getMenuItemPath = (item, level) => {
      const itemPath = this.conversionPath(item.path || "/");
      const {
        location = { pathname: "/" },
        isMobile,
        onCollapse,
        menuItemRender
      } = this.props;
      const menuItemTitle = this.getIntlName(item);
      const { baseClassName, menu, collapsed } = this.props;
      const isGroup = menu?.type === "group";
      const hasIcon = level === 0 || isGroup && level === 1;
      const icon = !hasIcon ? null : getIcon(
        item.icon,
        `${baseClassName}-icon ${this.props?.hashId}`
      );
      const defaultIcon = collapsed && hasIcon ? getMenuTitleSymbol(menuItemTitle) : null;
      let defaultItem = /* @__PURE__ */ jsxs(
        "div",
        {
          className: classNames(
            `${baseClassName}-item-title`,
            this.props?.hashId,
            {
              [`${baseClassName}-item-title-collapsed`]: collapsed,
              [`${baseClassName}-item-title-collapsed-level-${level}`]: collapsed,
              [`${baseClassName}-item-collapsed-show-title`]: menu?.collapsedShowTitle && collapsed
            }
          ),
          children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `${baseClassName}-item-icon ${this.props?.hashId}`.trim(),
                style: {
                  display: defaultIcon === null && !icon ? "none" : ""
                },
                children: icon || /* @__PURE__ */ jsx("span", { className: "muiicon", children: defaultIcon })
              }
            ),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: classNames(
                  `${baseClassName}-item-text`,
                  this.props?.hashId,
                  {
                    [`${baseClassName}-item-text-has-icon`]: hasIcon && (icon || defaultIcon)
                  }
                ),
                children: menuItemTitle
              }
            )
          ]
        },
        itemPath
      );
      const isHttpUrl = isUrl$1(itemPath);
      if (isHttpUrl) {
        defaultItem = /* @__PURE__ */ jsxs(
          "span",
          {
            onClick: () => {
              window?.open?.(itemPath, "_blank");
            },
            className: classNames(
              `${baseClassName}-item-title`,
              this.props?.hashId,
              {
                [`${baseClassName}-item-title-collapsed`]: collapsed,
                [`${baseClassName}-item-title-collapsed-level-${level}`]: collapsed,
                [`${baseClassName}-item-link`]: true,
                [`${baseClassName}-item-collapsed-show-title`]: menu?.collapsedShowTitle && collapsed
              }
            ),
            children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: `${baseClassName}-item-icon ${this.props?.hashId}`.trim(),
                  style: {
                    display: defaultIcon === null && !icon ? "none" : ""
                  },
                  children: icon || /* @__PURE__ */ jsx("span", { className: "muiicon", children: defaultIcon })
                }
              ),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: classNames(
                    `${baseClassName}-item-text`,
                    this.props?.hashId,
                    {
                      [`${baseClassName}-item-text-has-icon`]: hasIcon && (icon || defaultIcon)
                    }
                  ),
                  children: menuItemTitle
                }
              )
            ]
          },
          itemPath
        );
      }
      if (menuItemRender) {
        const renderItemProps = {
          ...item,
          isUrl: isHttpUrl,
          itemPath,
          isMobile,
          replace: itemPath === location.pathname,
          onClick: () => onCollapse && onCollapse(true),
          children: void 0
        };
        return level === 0 ? /* @__PURE__ */ jsx(
          MenuItemTooltip,
          {
            collapsed,
            title: menuItemTitle,
            disable: item.disabledTooltip,
            children: menuItemRender(renderItemProps, defaultItem, this.props)
          }
        ) : menuItemRender(renderItemProps, defaultItem, this.props);
      }
      return level === 0 ? /* @__PURE__ */ jsx(
        MenuItemTooltip,
        {
          collapsed,
          title: menuItemTitle,
          disable: item.disabledTooltip,
          children: defaultItem
        }
      ) : defaultItem;
    };
    this.conversionPath = (path) => {
      if (path && path.indexOf("http") === 0) {
        return path;
      }
      return `/${path || ""}`.replace(/\/+/g, "/");
    };
    this.props = props;
  }
}
const getOpenKeysProps = (openKeys, { layout, collapsed }) => {
  let openKeysProps = {};
  if (openKeys && !collapsed && ["side", "mix"].includes(layout || "mix")) {
    openKeysProps = {
      openKeys
    };
  }
  return openKeysProps;
};
const BaseMenu = (props) => {
  const {
    mode,
    className,
    handleOpenChange,
    style,
    menuData,
    prefixCls,
    menu,
    matchMenuKeys,
    selectedKeys: propsSelectedKeys,
    onSelect,
    menuRenderType,
    openKeys: propsOpenKeys
  } = props;
  const { dark, token: designToken } = useContext(ProProvider);
  const baseClassName = `${prefixCls}-base-menu-${mode}`;
  const defaultOpenKeysRef = useRef([]);
  const [defaultOpenAll, setDefaultOpenAll] = useMergedState(
    menu?.defaultOpenAll
  );
  const [openKeys, setOpenKeys] = useMergedState(
    () => {
      if (menu?.defaultOpenAll) {
        return getOpenKeysFromMenuData(menuData) || [];
      }
      if (propsOpenKeys === false) {
        return false;
      }
      return [];
    },
    {
      value: propsOpenKeys === false ? void 0 : propsOpenKeys,
      onChange: handleOpenChange
    }
  );
  const [selectedKeys, setSelectedKeys] = useMergedState([], {
    value: propsSelectedKeys,
    onChange: onSelect ? (keys) => {
      if (onSelect && keys) {
        onSelect(keys);
      }
    } : void 0
  });
  useEffect(() => {
    if (menu?.defaultOpenAll || propsOpenKeys === false) {
      return;
    }
    if (matchMenuKeys) {
      setOpenKeys(matchMenuKeys);
      setSelectedKeys(matchMenuKeys);
    }
  }, [matchMenuKeys.join("-")]);
  useEffect(
    () => {
      if (matchMenuKeys.join("-") !== (selectedKeys || []).join("-")) {
        setSelectedKeys(matchMenuKeys);
      }
      if (!defaultOpenAll && propsOpenKeys !== false && matchMenuKeys.join("-") !== (openKeys || []).join("-")) {
        let newKeys = matchMenuKeys;
        if (menu?.autoClose === false) {
          newKeys = Array.from(
            /* @__PURE__ */ new Set([...matchMenuKeys, ...openKeys || []])
          );
        }
        setOpenKeys(newKeys);
      } else if (menu?.ignoreFlatMenu && defaultOpenAll) {
        setOpenKeys(getOpenKeysFromMenuData(menuData));
      } else {
        setDefaultOpenAll(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [matchMenuKeys.join("-")]
  );
  const openKeysProps = useMemo(
    () => getOpenKeysProps(openKeys, props),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [openKeys && openKeys.join(","), props.layout, props.collapsed]
  );
  const { wrapSSR, hashId } = useStyle$a(baseClassName, mode);
  const menuUtils = useMemo(() => {
    return new MenuUtil({
      ...props,
      token: designToken,
      menuRenderType,
      baseClassName,
      hashId
    });
  }, [props, designToken, menuRenderType, baseClassName, hashId]);
  if (menu?.loading) {
    return /* @__PURE__ */ jsx(
      "div",
      {
        style: mode?.includes("inline") ? { padding: 24 } : {
          marginBlockStart: 16
        },
        children: /* @__PURE__ */ jsx(
          Skeleton,
          {
            active: true,
            title: false,
            paragraph: {
              rows: mode?.includes("inline") ? 6 : 1
            }
          }
        )
      }
    );
  }
  if (props.openKeys === false && !props.handleOpenChange) {
    defaultOpenKeysRef.current = matchMenuKeys;
  }
  const finallyData = props.postMenuData ? props.postMenuData(menuData) : menuData;
  if (finallyData && finallyData?.length < 1) {
    return null;
  }
  return wrapSSR(
    /* @__PURE__ */ createElement(
      Menu,
      {
        ...openKeysProps,
        _internalDisableMenuItemTitleTooltip: true,
        key: "Menu",
        mode,
        inlineIndent: 16,
        defaultOpenKeys: defaultOpenKeysRef.current,
        theme: dark ? "dark" : "light",
        selectedKeys,
        style: {
          backgroundColor: "transparent",
          border: "none",
          ...style
        },
        className: classNames(className, hashId, baseClassName, {
          [`${baseClassName}-horizontal`]: mode === "horizontal",
          [`${baseClassName}-collapsed`]: props.collapsed
        }),
        items: menuUtils.getNavMenuItems(finallyData, 0),
        onOpenChange: (_openKeys) => {
          if (!props.collapsed) {
            setOpenKeys(_openKeys);
          }
        },
        ...props.menuProps
      }
    )
  );
};

function useStylish$1(prefixCls, {
  stylish,
  proLayoutCollapsedWidth
}) {
  return useStyle$A("ProLayoutSiderMenuStylish", (token) => {
    const siderMenuToken = {
      ...token,
      componentCls: `.${prefixCls}`,
      proLayoutCollapsedWidth
    };
    if (!stylish)
      return [];
    return [
      {
        [`div${token.proComponentsCls}-layout`]: {
          [`${siderMenuToken.componentCls}`]: stylish?.(siderMenuToken)
        }
      }
    ];
  });
}

const { Sider } = Layout;
const renderLogoAndTitle = (props, renderKey = "menuHeaderRender") => {
  const { logo, title, layout } = props;
  const renderFunction = props[renderKey];
  if (renderFunction === false) {
    return null;
  }
  const logoDom = defaultRenderLogo(logo);
  const titleDom = /* @__PURE__ */ jsx("h1", { children: title ?? "iPASS Customized UI framework" });
  if (renderFunction) {
    return renderFunction(logoDom, props.collapsed ? null : titleDom, props);
  }
  if (props.isMobile) {
    return null;
  }
  if (layout === "mix" && renderKey === "menuHeaderRender")
    return false;
  if (props.collapsed) {
    return /* @__PURE__ */ jsx("a", { children: logoDom }, "title");
  }
  return /* @__PURE__ */ jsxs("a", { children: [
    logoDom,
    titleDom
  ] }, "title");
};
const SiderMenu = (props) => {
  const {
    collapsed,
    originCollapsed,
    fixSiderbar,
    menuFooterRender,
    onCollapse,
    theme,
    siderWidth,
    isMobile,
    onMenuHeaderClick,
    breakpoint = "lg",
    style,
    layout,
    menuExtraRender = false,
    links,
    menuContentRender,
    collapsedButtonRender,
    prefixCls,
    // avatarProps,
    //@ts-ignore
    rightContentRender,
    actionsRender,
    onOpenChange,
    stylish,
    logoStyle
  } = props;
  const { hashId } = useContext(ProProvider);
  const showSiderExtraDom = useMemo(() => {
    if (isMobile)
      return false;
    if (layout === "mix")
      return false;
    return true;
  }, [isMobile, layout]);
  const baseClassName = `${prefixCls}-sider`;
  const collapsedWidth = 64;
  const stylishClassName = useStylish$1(
    `${baseClassName}.${baseClassName}-stylish`,
    {
      stylish,
      proLayoutCollapsedWidth: collapsedWidth
    }
  );
  const siderClassName = classNames(`${baseClassName}`, hashId, {
    [`${baseClassName}-fixed`]: fixSiderbar,
    [`${baseClassName}-collapsed`]: props.collapsed,
    [`${baseClassName}-layout-${layout}`]: layout && !isMobile,
    [`${baseClassName}-light`]: theme !== "dark",
    [`${baseClassName}-mix`]: layout === "mix" && !isMobile,
    [`${baseClassName}-stylish`]: !!stylish
  });
  const headerDom = renderLogoAndTitle(props);
  const extraDom = menuExtraRender && menuExtraRender(props);
  const menuDom = useMemo(
    () => menuContentRender !== false && /* @__PURE__ */ createElement(
      BaseMenu,
      {
        ...props,
        key: "base-menu",
        mode: collapsed && !isMobile ? "vertical" : "inline",
        handleOpenChange: onOpenChange,
        style: {
          width: "100%"
        },
        className: `${baseClassName}-menu ${hashId}`.trim()
      }
    ),
    [baseClassName, hashId, menuContentRender, onOpenChange, props]
  );
  const linksMenuItems = (links || []).map((node, index) => ({
    className: `${baseClassName}-link`,
    label: node,
    key: index
  }));
  const menuRenderDom = useMemo(() => {
    return menuContentRender ? menuContentRender(props, menuDom) : menuDom;
  }, [menuContentRender, menuDom, props]);
  const actionsDom = useMemo(
    () => {
      if (!actionsRender)
        return null;
      return /* @__PURE__ */ jsx(
        CompoundedSpace,
        {
          align: "center",
          size: 4,
          direction: collapsed ? "vertical" : "horizontal",
          className: classNames([
            `${baseClassName}-actions-list`,
            collapsed && `${baseClassName}-actions-list-collapsed`,
            hashId
          ]),
          children: actionsRender?.(props).map((item, index) => {
            return /* @__PURE__ */ jsx(
              "div",
              {
                className: `${baseClassName}-actions-list-item ${hashId}`.trim(),
                children: item
              },
              index
            );
          })
        }
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [actionsRender, baseClassName, collapsed]
  );
  const appsDom = useMemo(() => {
    return /* @__PURE__ */ jsx(
      AppsLogoComponents,
      {
        onItemClick: props.itemClick,
        appList: props.appList,
        prefixCls: props.prefixCls
      }
    );
  }, [props.appList, props.prefixCls]);
  const collapsedDom = useMemo(() => {
    if (collapsedButtonRender === false)
      return null;
    const dom = /* @__PURE__ */ jsx(
      CollapsedIcon,
      {
        isMobile,
        collapsed: originCollapsed,
        className: `${baseClassName}-collapsed-button`,
        onClick: () => {
          onCollapse?.(!originCollapsed);
        }
      }
    );
    if (collapsedButtonRender)
      return collapsedButtonRender(collapsed, dom);
    return dom;
  }, [
    collapsedButtonRender,
    isMobile,
    originCollapsed,
    baseClassName,
    collapsed,
    onCollapse
  ]);
  const actionAreaDom = useMemo(() => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: classNames(
          `${baseClassName}-actions`,
          hashId,
          collapsed && `${baseClassName}-actions-collapsed`
        ),
        children: actionsDom
      }
    );
  }, [actionsDom, baseClassName, collapsed, hashId]);
  const hideMenuWhenCollapsedClassName = useMemo(() => {
    if (props?.menu?.hideMenuWhenCollapsed && collapsed) {
      return `${baseClassName}-hide-menu-collapsed`;
    }
    return null;
  }, [baseClassName, collapsed, props?.menu?.hideMenuWhenCollapsed]);
  const menuFooterDom = menuFooterRender && menuFooterRender?.(props);
  const menuDomItems = /* @__PURE__ */ jsxs(Fragment, { children: [
    headerDom && /* @__PURE__ */ jsxs(
      "div",
      {
        className: classNames([
          classNames(`${baseClassName}-logo`, hashId, {
            [`${baseClassName}-logo-collapsed`]: collapsed
          })
        ]),
        onClick: showSiderExtraDom ? onMenuHeaderClick : void 0,
        id: "logo",
        style: logoStyle,
        children: [
          headerDom,
          appsDom
        ]
      }
    ),
    extraDom && /* @__PURE__ */ jsx(
      "div",
      {
        className: classNames([
          `${baseClassName}-extra`,
          !headerDom && `${baseClassName}-extra-no-logo`,
          hashId
        ]),
        children: extraDom
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden"
        },
        children: menuRenderDom
      }
    ),
    /* @__PURE__ */ jsxs(SiderContext.Provider, { value: {}, children: [
      links ? /* @__PURE__ */ jsx("div", { className: `${baseClassName}-links ${hashId}`.trim(), children: /* @__PURE__ */ jsx(
        Menu,
        {
          inlineIndent: 16,
          className: `${baseClassName}-link-menu ${hashId}`.trim(),
          selectedKeys: [],
          openKeys: [],
          theme,
          mode: "inline",
          items: linksMenuItems
        }
      ) }) : null,
      showSiderExtraDom && /* @__PURE__ */ jsxs(Fragment, { children: [
        actionAreaDom,
        !actionsDom && rightContentRender ? /* @__PURE__ */ jsx(
          "div",
          {
            className: classNames(`${baseClassName}-actions`, hashId, {
              [`${baseClassName}-actions-collapsed`]: collapsed
            }),
            children: rightContentRender?.(props)
          }
        ) : null
      ] }),
      menuFooterDom && /* @__PURE__ */ jsx(
        "div",
        {
          className: classNames([
            `${baseClassName}-footer`,
            hashId,
            { [`${baseClassName}-footer-collapsed`]: collapsed }
          ]),
          children: menuFooterDom
        }
      )
    ] })
  ] });
  return stylishClassName.wrapSSR(
    /* @__PURE__ */ jsxs(Fragment, { children: [
      fixSiderbar && !isMobile && !hideMenuWhenCollapsedClassName && /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            width: collapsed ? collapsedWidth : siderWidth,
            overflow: "hidden",
            flex: `0 0 ${collapsed ? collapsedWidth : siderWidth}px`,
            maxWidth: collapsed ? collapsedWidth : siderWidth,
            minWidth: collapsed ? collapsedWidth : siderWidth,
            transition: "all 0.2s ease 0s",
            ...style
          }
        }
      ),
      /* @__PURE__ */ jsxs(
        Sider,
        {
          collapsible: true,
          trigger: null,
          collapsed,
          breakpoint: breakpoint === false ? void 0 : breakpoint,
          onCollapse: (collapse) => {
            if (isMobile)
              return;
            onCollapse?.(collapse);
          },
          collapsedWidth,
          style,
          theme,
          width: siderWidth,
          className: classNames(
            siderClassName,
            hashId,
            hideMenuWhenCollapsedClassName
          ),
          children: [
            hideMenuWhenCollapsedClassName ? /* @__PURE__ */ jsx(
              "div",
              {
                className: `${baseClassName}-hide-when-collapsed ${hashId}`.trim(),
                style: {
                  height: "100%",
                  width: "100%",
                  opacity: hideMenuWhenCollapsedClassName ? 0 : 1
                },
                children: menuDomItems
              }
            ) : menuDomItems,
            collapsedDom
          ]
        }
      )
    ] })
  );
};

const genTopNavHeaderStyle$1 = (token) => {
  return {
    [token.componentCls]: {
      "&-header-actions": {
        display: "flex",
        height: "100%",
        "&-item": {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBlock: 0,
          paddingInline: 2,
          color: token.layout?.header?.colorTextRightActionsItem,
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: token.borderRadius,
          "> *": {
            paddingInline: 6,
            paddingBlock: 6,
            borderRadius: token.borderRadius,
            "&-hover:hover": {
              backgroundColor: token.layout?.header?.colorBgRightActionsItemHover
            }
          }
        },
        "&-avatar": {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          paddingInlineStart: token.padding,
          paddingInlineEnd: token.padding,
          cursor: "pointer",
          color: token.layout?.header?.colorTextRightActionsItem,
          "> div": {
            height: "44px",
            color: token.layout?.header?.colorTextRightActionsItem,
            paddingInline: 8,
            paddingBlock: 8,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            lineHeight: "44px",
            borderRadius: token.borderRadius,
            "&:hover": {
              backgroundColor: token.layout?.header?.colorBgRightActionsItemHover
            }
          }
        }
      }
    }
  };
};
function useStyle$9(prefixCls) {
  return useStyle$A("ProLayoutRightContent", (token) => {
    const proToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genTopNavHeaderStyle$1(proToken)];
  });
}

const ActionsContent = ({
  actionsRender,
  headerContentRender,
  ...props
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = `${getPrefixCls()}-pro-global-header`;
  const { wrapSSR, hashId } = useStyle$9(prefixCls);
  const [rightSize, setRightSize] = useState("auto");
  const rightActionsRender = actionsRender ? (restParams) => {
    let doms = actionsRender && actionsRender?.(restParams);
    if (!doms)
      return null;
    if (!Array.isArray(doms))
      doms = [doms];
    return wrapSSR(
      /* @__PURE__ */ jsx("div", { className: `${prefixCls}-header-actions ${hashId}`.trim(), children: doms.filter(Boolean).map((dom, index) => {
        let hideHover = false;
        if (React__default.isValidElement(dom)) {
          hideHover = !!dom?.props?.["aria-hidden"];
        }
        return /* @__PURE__ */ jsx(
          "div",
          {
            className: classNames(
              `${prefixCls}-header-actions-item ${hashId}`,
              {
                [`${prefixCls}-header-actions-hover`]: !hideHover
              }
            ),
            children: dom
          },
          index
        );
      }) })
    );
  } : void 0;
  const setRightSizeDebounceFn = useDebounceFn(async (width) => {
    setRightSize(width);
  }, 160);
  const contentRender = rightActionsRender;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `${prefixCls}-right-content ${hashId}`.trim(),
      style: {
        minWidth: rightSize,
        height: "100%"
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            height: "100%"
          },
          children: /* @__PURE__ */ jsx(
            ResizeObserver,
            {
              onResize: ({ width }) => {
                setRightSizeDebounceFn.run(width);
              },
              children: contentRender ? /* @__PURE__ */ jsx(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    justifyContent: "flex-end"
                  },
                  children: contentRender({
                    ...props,
                    // 測試專用
                    //@ts-ignore
                    rightContentSize: rightSize
                  })
                }
              ) : null
            }
          )
        }
      )
    }
  );
};

const genTopNavHeaderStyle = (token) => {
  return {
    [token.componentCls]: {
      position: "relative",
      width: "100%",
      height: "100%",
      backgroundColor: "transparent",
      ".muiicon": {
        color: "inherit"
      },
      "&-main": {
        display: "flex",
        height: "100%",
        paddingInlineStart: "16px",
        "&-left": {
          display: "flex",
          alignItems: "center",
          [`${token.proComponentsCls}-layout-apps-icon`]: {
            marginInlineEnd: 16,
            marginInlineStart: -8
          }
        }
      },
      "&-wide": {
        maxWidth: 1152,
        margin: "0 auto"
      },
      "&-logo": {
        position: "relative",
        display: "flex",
        height: "100%",
        alignItems: "center",
        overflow: "hidden",
        "> *:first-child": {
          display: "flex",
          alignItems: "center",
          minHeight: "22px",
          fontSize: "22px"
        },
        "> *:first-child > img": {
          display: "inline-block",
          height: "32px",
          verticalAlign: "middle"
        },
        "> *:first-child > h1": {
          display: "inline-block",
          marginBlock: 0,
          marginInline: 0,
          lineHeight: "24px",
          marginInlineStart: 6,
          fontWeight: "600",
          fontSize: "16px",
          color: token.layout?.header?.colorHeaderTitle,
          verticalAlign: "top"
        }
      },
      "&-menu": {
        minWidth: 0,
        display: "flex",
        alignItems: "center",
        paddingInline: 6,
        paddingBlock: 6,
        lineHeight: `${Math.max(
          (token.layout?.header?.heightLayoutHeader || 56) - 12,
          40
        )}px`
      }
    }
  };
};
function useStyle$8(prefixCls) {
  return useStyle$A("ProLayoutTopNavHeader", (token) => {
    const topNavHeaderToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genTopNavHeaderStyle(topNavHeaderToken)];
  });
}

const TopNavHeader = (props) => {
  const ref = useRef(null);
  const {
    onMenuHeaderClick,
    contentWidth,
    className: propsClassName,
    style,
    headerContentRender,
    layout,
    actionsRender
  } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const { dark } = useContext(ProProvider);
  const prefixCls = `${props.prefixCls || getPrefixCls("pro")}-top-nav-header`;
  const { wrapSSR, hashId } = useStyle$8(prefixCls);
  let renderKey = void 0;
  if (props.menuHeaderRender !== void 0) {
    renderKey = "menuHeaderRender";
  } else if (layout === "mix" || layout === "top") {
    renderKey = "headerTitleRender";
  }
  const headerDom = renderLogoAndTitle(
    { ...props, collapsed: false },
    renderKey
  );
  const { token } = useContext(ProProvider);
  const contentDom = useMemo(() => {
    const defaultDom = /* @__PURE__ */ jsx(
      ConfigProvider,
      {
        theme: {
          hashed: isNeedOpenHash(),
          components: {
            Layout: {
              headerBg: "transparent",
              bodyBg: "transparent"
            },
            Menu: {
              ...coverToNewToken({
                colorItemBg: token.layout?.header?.colorBgHeader || "transparent",
                colorSubItemBg: token.layout?.header?.colorBgHeader || "transparent",
                radiusItem: 4,
                colorItemBgSelected: token.layout?.header?.colorBgMenuItemSelected || token?.colorBgTextHover,
                itemHoverBg: token.layout?.header?.colorBgMenuItemHover || token?.colorBgTextHover,
                colorItemBgSelectedHorizontal: token.layout?.header?.colorBgMenuItemSelected || token?.colorBgTextHover,
                colorActiveBarWidth: 0,
                colorActiveBarHeight: 0,
                colorActiveBarBorderSize: 0,
                colorItemText: token.layout?.header?.colorTextMenu || token?.colorTextSecondary,
                colorItemTextHoverHorizontal: token.layout?.header?.colorTextMenuActive || token?.colorText,
                colorItemTextSelectedHorizontal: token.layout?.header?.colorTextMenuSelected || token?.colorTextBase,
                horizontalItemBorderRadius: 4,
                colorItemTextHover: token.layout?.header?.colorTextMenuActive || "rgba(0, 0, 0, 0.85)",
                horizontalItemHoverBg: token.layout?.header?.colorBgMenuItemHover || "rgba(0, 0, 0, 0.04)",
                colorItemTextSelected: token.layout?.header?.colorTextMenuSelected || "rgba(0, 0, 0, 1)",
                colorBgElevated: token.layout?.header?.colorBgMenuElevated || token.colorBgElevated
              })
            }
          },
          token: {
            colorBgElevated: token.layout?.header?.colorBgHeader || "transparent"
          }
        },
        children: /* @__PURE__ */ jsx(
          BaseMenu,
          {
            theme: dark ? "dark" : "light",
            ...props,
            className: `${prefixCls}-base-menu ${hashId}`.trim(),
            ...props.menuProps,
            style: {
              width: "100%",
              ...props.menuProps?.style
            },
            collapsed: false,
            menuRenderType: "header",
            mode: "horizontal"
          }
        )
      }
    );
    if (headerContentRender) {
      return headerContentRender(props, defaultDom);
    }
    return defaultDom;
  }, [
    token.layout?.header?.colorBgHeader,
    token.layout?.header?.colorBgMenuItemSelected,
    token.layout?.header?.colorBgMenuItemHover,
    token.layout?.header?.colorTextMenu,
    token.layout?.header?.colorTextMenuActive,
    token.layout?.header?.colorTextMenuSelected,
    token.layout?.header?.colorBgMenuElevated,
    token?.colorBgTextHover,
    token?.colorTextSecondary,
    token?.colorText,
    token?.colorTextBase,
    token.colorBgElevated,
    dark,
    props,
    prefixCls,
    hashId,
    headerContentRender
  ]);
  return wrapSSR(
    /* @__PURE__ */ jsx(
      "div",
      {
        className: classNames(prefixCls, hashId, propsClassName, {
          [`${prefixCls}-light`]: true
        }),
        style,
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            ref,
            className: classNames(`${prefixCls}-main`, hashId, {
              [`${prefixCls}-wide`]: contentWidth === "Fixed" && layout === "top"
            }),
            children: [
              headerDom && /* @__PURE__ */ jsxs(
                "div",
                {
                  className: classNames(`${prefixCls}-main-left ${hashId}`),
                  onClick: onMenuHeaderClick,
                  children: [
                    /* @__PURE__ */ jsx(AppsLogoComponents, { ...props }),
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: `${prefixCls}-logo ${hashId}`.trim(),
                        id: "logo",
                        children: headerDom
                      },
                      "logo"
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  style: { flex: 1 },
                  className: `${prefixCls}-menu ${hashId}`.trim(),
                  children: contentDom
                }
              ),
              actionsRender && /* @__PURE__ */ jsx(
                ActionsContent,
                {
                  actionsRender,
                  ...props,
                  prefixCls
                }
              )
            ]
          }
        )
      }
    )
  );
};

const genGlobalHeaderStyle = (token) => {
  return {
    [token.componentCls]: {
      position: "relative",
      background: "transparent",
      display: "flex",
      alignItems: "center",
      marginBlock: 0,
      marginInline: 16,
      height: token.layout?.header?.heightLayoutHeader || 56,
      boxSizing: "border-box",
      "> a": {
        height: "100%"
      },
      [`${token.proComponentsCls}-layout-apps-icon`]: {
        marginInlineEnd: 16
      },
      "&-collapsed-button": {
        minHeight: "22px",
        color: token.layout?.header?.colorHeaderTitle,
        fontSize: "18px",
        marginInlineEnd: "16px"
      },
      "&-logo": {
        position: "relative",
        marginInlineEnd: "16px",
        a: {
          display: "flex",
          alignItems: "center",
          height: "100%",
          minHeight: "22px",
          fontSize: "20px"
        },
        img: { height: "28px" },
        h1: {
          height: "32px",
          marginBlock: 0,
          marginInline: 0,
          marginInlineStart: 8,
          fontWeight: "600",
          color: token.layout?.header?.colorHeaderTitle || token.colorTextHeading,
          fontSize: "18px",
          lineHeight: "32px"
        },
        "&-mix": {
          display: "flex",
          alignItems: "center"
        }
      },
      "&-logo-mobile": {
        minWidth: "24px",
        marginInlineEnd: 0
      }
    }
  };
};
function useStyle$7(prefixCls) {
  return useStyle$A("ProLayoutGlobalHeader", (token) => {
    const GlobalHeaderToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genGlobalHeaderStyle(GlobalHeaderToken)];
  });
}

const renderLogo = (menuHeaderRender, logoDom) => {
  if (menuHeaderRender === false) {
    return null;
  }
  if (menuHeaderRender) {
    return menuHeaderRender(logoDom, null);
  }
  return logoDom;
};
const GlobalHeader = (props) => {
  const {
    isMobile,
    logo,
    collapsed,
    onCollapse,
    actionsRender,
    menuHeaderRender,
    onMenuHeaderClick,
    className: propClassName,
    style,
    layout,
    children,
    splitMenus,
    menuData,
    prefixCls
  } = props;
  const baseClassName = `${prefixCls}-global-header`;
  const { wrapSSR, hashId } = useStyle$7(baseClassName);
  const className = classNames(propClassName, baseClassName, hashId);
  if (layout === "mix" && !isMobile && splitMenus) {
    const noChildrenMenuData = (menuData || []).map((item) => ({
      ...item,
      children: void 0,
      routes: void 0
    }));
    const clearMenuData = clearMenuItem(noChildrenMenuData);
    return /* @__PURE__ */ jsx(
      TopNavHeader,
      {
        mode: "horizontal",
        ...props,
        splitMenus: false,
        menuData: clearMenuData
      }
    );
  }
  const logoClassNames = classNames(`${baseClassName}-logo`, hashId, {
    [`${baseClassName}-logo-mix`]: layout === "mix",
    [`${baseClassName}-logo-mobile`]: isMobile
  });
  const logoDom = /* @__PURE__ */ jsx("span", { className: logoClassNames, children: /* @__PURE__ */ jsx("a", { children: defaultRenderLogo(logo) }) }, "logo");
  return wrapSSR(
    /* @__PURE__ */ jsxs("div", { className, style: { ...style }, children: [
      isMobile && /* @__PURE__ */ jsx(
        "span",
        {
          className: `${baseClassName}-collapsed-button ${hashId}`.trim(),
          onClick: () => {
            onCollapse?.(!collapsed);
          },
          children: /* @__PURE__ */ jsx(MenuIcon, {})
        }
      ),
      isMobile && renderLogo(menuHeaderRender, logoDom),
      layout === "mix" && !isMobile && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(AppsLogoComponents, { ...props }),
        /* @__PURE__ */ jsx("div", { className: logoClassNames, onClick: onMenuHeaderClick, children: renderLogoAndTitle(
          { ...props, collapsed: false },
          "headerTitleRender"
        ) })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { flex: 1 }, children }),
      props.actionsRender && /* @__PURE__ */ jsx(ActionsContent, { actionsRender, ...props })
    ] })
  );
};

const genProLayoutHeaderStyle = (token) => {
  return {
    [`${token.proComponentsCls}-layout`]: {
      [`${token.ipassCls}-layout-header${token.componentCls}`]: {
        height: token.layout?.header?.heightLayoutHeader || 56,
        lineHeight: `${token.layout?.header?.heightLayoutHeader || 56}px`,
        // hitu 用了這個屬性，不能刪除
        zIndex: 19,
        width: "100%",
        paddingBlock: 0,
        paddingInline: 0,
        borderBlockEnd: `1px solid ${token.colorSplit}`,
        backgroundColor: token.layout?.header?.colorBgHeader || "rgba(255, 255, 255, 0.4)",
        WebkitBackdropFilter: "blur(8px)",
        backdropFilter: "blur(8px)",
        transition: "background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
        "&-fixed-header": {
          position: "fixed",
          insetBlockStart: 0,
          width: "100%",
          zIndex: 100,
          insetInlineEnd: 0
        },
        "&-fixed-header-scroll": {
          backgroundColor: token.layout?.header?.colorBgScrollHeader || "rgba(255, 255, 255, 0.8)"
        },
        "&-header-actions": {
          display: "flex",
          alignItems: "center",
          fontSize: "16",
          cursor: "pointer",
          "& &-item": {
            paddingBlock: 0,
            paddingInline: 8,
            "&:hover": {
              color: token.colorText
            }
          }
        },
        "&-header-realDark": { boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 65%)" },
        "&-header-actions-header-action": {
          transition: "width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)"
        }
      }
    }
  };
};
function useStyle$6(prefixCls) {
  return useStyle$A("ProLayoutHeader", (token) => {
    const ProLayoutHeaderToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genProLayoutHeaderStyle(ProLayoutHeaderToken)];
  });
}

function useStylish(prefixCls, {
  stylish,
  proLayoutCollapsedWidth
}) {
  return useStyle$A("ProLayoutHeaderStylish", (token) => {
    const stylishToken = {
      ...token,
      componentCls: `.${prefixCls}`,
      proLayoutCollapsedWidth
    };
    if (!stylish)
      return [];
    return [
      {
        [`div${token.proComponentsCls}-layout`]: {
          [`${stylishToken.componentCls}`]: stylish?.(stylishToken)
        }
      }
    ];
  });
}

const { Header } = Layout;
const DefaultHeader = (props) => {
  const {
    isMobile,
    fixedHeader,
    className: propsClassName,
    style,
    collapsed,
    prefixCls,
    onCollapse,
    layout,
    headerRender,
    headerContentRender
  } = props;
  const { token } = useContext(ProProvider);
  const context = useContext(ConfigProvider.ConfigContext);
  const [isFixedHeaderScroll, setIsFixedHeaderScroll] = useState(false);
  const needFixedHeader = fixedHeader || layout === "mix";
  const renderContent = useCallback(() => {
    const isTop2 = layout === "top";
    const clearMenuData = clearMenuItem(props.menuData || []);
    let defaultDom = /* @__PURE__ */ jsx(GlobalHeader, { onCollapse, ...props, menuData: clearMenuData, children: headerContentRender && headerContentRender(props, null) });
    if (isTop2 && !isMobile) {
      defaultDom = /* @__PURE__ */ jsx(
        TopNavHeader,
        {
          mode: "horizontal",
          onCollapse,
          ...props,
          menuData: clearMenuData
        }
      );
    }
    if (headerRender && typeof headerRender === "function") {
      return headerRender(props, defaultDom);
    }
    return defaultDom;
  }, [headerContentRender, headerRender, isMobile, layout, onCollapse, props]);
  useEffect(() => {
    const dom = context?.getTargetContainer?.() || document.body;
    const isFixedHeaderFn = () => {
      const scrollTop = dom.scrollTop;
      if (scrollTop > (token.layout?.header?.heightLayoutHeader || 56) && !isFixedHeaderScroll) {
        setIsFixedHeaderScroll(true);
        return true;
      }
      if (isFixedHeaderScroll) {
        setIsFixedHeaderScroll(false);
      }
      return false;
    };
    if (!needFixedHeader)
      return;
    if (typeof window === "undefined")
      return;
    dom.addEventListener("scroll", isFixedHeaderFn, {
      passive: true
    });
    return () => {
      dom.removeEventListener("scroll", isFixedHeaderFn);
    };
  }, [
    token.layout?.header?.heightLayoutHeader,
    needFixedHeader,
    isFixedHeaderScroll
  ]);
  const isTop = layout === "top";
  const baseClassName = `${prefixCls}-layout-header`;
  const { wrapSSR, hashId } = useStyle$6(baseClassName);
  const stylish = useStylish(`${baseClassName}.${baseClassName}-stylish`, {
    proLayoutCollapsedWidth: 64,
    stylish: props.stylish
  });
  const className = classNames(propsClassName, hashId, baseClassName, {
    [`${baseClassName}-fixed-header`]: needFixedHeader,
    [`${baseClassName}-fixed-header-scroll`]: isFixedHeaderScroll,
    [`${baseClassName}-mix`]: layout === "mix",
    [`${baseClassName}-fixed-header-action`]: !collapsed,
    [`${baseClassName}-top-menu`]: isTop,
    [`${baseClassName}-header`]: true,
    [`${baseClassName}-stylish`]: !!props.stylish
  });
  if (layout === "side" && !isMobile)
    return null;
  return stylish.wrapSSR(
    wrapSSR(
      /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
        ConfigProvider,
        {
          theme: {
            hashed: isNeedOpenHash(),
            components: {
              Layout: {
                headerBg: "transparent",
                bodyBg: "transparent"
              }
            }
          },
          children: [
            needFixedHeader && /* @__PURE__ */ jsx(
              Header,
              {
                style: {
                  height: token.layout?.header?.heightLayoutHeader || 56,
                  lineHeight: `${token.layout?.header?.heightLayoutHeader || 56}px`,
                  backgroundColor: "transparent",
                  zIndex: 19,
                  ...style
                }
              }
            ),
            /* @__PURE__ */ jsx(Header, { className, style, children: renderContent() })
          ]
        }
      ) })
    )
  );
};

const matchParamsPath = (pathname, breadcrumb, breadcrumbMap) => {
  if (breadcrumbMap) {
    const pathKey = [...breadcrumbMap.keys()].find(
      (key) => pathToRegexp(key).test(pathname)
    );
    if (pathKey) {
      return breadcrumbMap.get(pathKey);
    }
  }
  if (breadcrumb) {
    const pathKey = Object.keys(breadcrumb).find(
      (key) => pathToRegexp(key).test(pathname)
    );
    if (pathKey) {
      return breadcrumb[pathKey];
    }
  }
  return {
    path: ""
  };
};
const getPageTitleInfo = (props, ignoreTitle) => {
  const {
    pathname = "/",
    breadcrumb,
    breadcrumbMap,
    formatMessage,
    title,
    menu = {
      locale: false
    }
  } = props;
  const pageTitle = ignoreTitle ? "" : title || "";
  const currRouterData = matchParamsPath(pathname, breadcrumb, breadcrumbMap);
  if (!currRouterData) {
    return {
      title: pageTitle,
      id: "",
      pageName: pageTitle
    };
  }
  let pageName = currRouterData.name;
  if (menu.locale !== false && currRouterData.locale && formatMessage) {
    pageName = formatMessage({
      id: currRouterData.locale || "",
      defaultMessage: currRouterData.name
    });
  }
  if (!pageName) {
    return {
      title: pageTitle,
      id: currRouterData.locale || "",
      pageName: pageTitle
    };
  }
  if (ignoreTitle || !title) {
    return {
      title: pageName,
      id: currRouterData.locale || "",
      pageName
    };
  }
  return {
    title: `${pageName} - ${title}`,
    id: currRouterData.locale || "",
    pageName
  };
};
const getPageTitle = (props, ignoreTitle) => {
  return getPageTitleInfo(props, ignoreTitle).title;
};

const childrenPropsName = "routes";
function stripQueryStringAndHashFromPath(url) {
  return url.split("?")[0].split("#")[0];
}
const isUrl = (path) => {
  if (!path.startsWith("http")) {
    return false;
  }
  try {
    const url = new URL(path);
    return !!url;
  } catch (error) {
    return false;
  }
};
const getKeyByPath = (item) => {
  const { path } = item;
  if (!path || path === "/") {
    try {
      return `/${sha256(JSON.stringify(item))}`;
    } catch (error) {
    }
  }
  return path ? stripQueryStringAndHashFromPath(path) : path;
};
const getItemLocaleName = (item, parentName) => {
  const { name, locale } = item;
  if ("locale" in item && locale === false || !name) {
    return false;
  }
  return item.locale || `${parentName}.${name}`;
};
const mergePath = (path = "", parentPath = "/") => {
  if (path.endsWith("/*")) {
    return path.replace("/*", "/");
  }
  if ((path || parentPath).startsWith("/")) {
    return path;
  }
  if (isUrl(path)) {
    return path;
  }
  return `/${parentPath}/${path}`.replace(/\/\//g, "/").replace(/\/\//g, "/");
};
const bigfishCompatibleConversions = (route, props) => {
  const { menu = {}, indexRoute, path = "" } = route;
  const routerChildren = route.children || [];
  const {
    name = route.name,
    icon = route.icon,
    hideChildren = route.hideChildren,
    flatMenu = route.flatMenu
  } = menu;
  const childrenList = indexRoute && // 如果只有 redirect,不用處理的
  Object.keys(indexRoute).join(",") !== "redirect" ? [
    {
      path,
      menu,
      ...indexRoute
    }
  ].concat(routerChildren || []) : routerChildren;
  const result = {
    ...route
  };
  if (name) {
    result.name = name;
  }
  if (icon) {
    result.icon = icon;
  }
  if (childrenList && childrenList.length) {
    if (hideChildren) {
      delete result.children;
      return result;
    }
    const finalChildren = formatter(
      {
        ...props,
        data: childrenList
      },
      route
    );
    if (flatMenu) {
      return finalChildren;
    }
    delete result[childrenPropsName];
  }
  return result;
};
const notNullArray = (value) => Array.isArray(value) && value.length > 0;
function formatter(props, parent = { path: "/" }) {
  const { data, formatMessage, parentName, locale: menuLocale } = props;
  if (!data || !Array.isArray(data)) {
    return [];
  }
  return data.filter((item) => {
    if (!item)
      return false;
    if (notNullArray(item.children))
      return true;
    if (item.path)
      return true;
    if (item.originPath)
      return true;
    if (item.layout)
      return true;
    if (item.redirect)
      return false;
    if (item.unaccessible)
      return false;
    return false;
  }).filter((item) => {
    if (item?.menu?.name || item?.flatMenu || item?.menu?.flatMenu) {
      return true;
    }
    if (item.menu === false) {
      return false;
    }
    return true;
  }).map((finallyItem) => {
    const item = {
      ...finallyItem,
      path: finallyItem.path || finallyItem.originPath
    };
    if (!item.children && item[childrenPropsName]) {
      item.children = item[childrenPropsName];
      delete item[childrenPropsName];
    }
    if (item.unaccessible) {
      delete item.name;
    }
    if (item.path === "*") {
      item.path = ".";
    }
    if (item.path === "/*") {
      item.path = ".";
    }
    if (!item.path && item.originPath) {
      item.path = item.originPath;
    }
    return item;
  }).map((item = { path: "/" }) => {
    const routerChildren = item.children || item[childrenPropsName] || [];
    const path = mergePath(item.path, parent ? parent.path : "/");
    const { name } = item;
    const locale = getItemLocaleName(item, parentName || "menu");
    const localeName = locale !== false && menuLocale !== false && formatMessage && locale ? formatMessage({ id: locale, defaultMessage: name }) : name;
    const {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      pro_layout_parentKeys = [],
      children,
      icon,
      flatMenu,
      indexRoute,
      routes,
      ...restParent
    } = parent;
    const item_pro_layout_parentKeys = /* @__PURE__ */ new Set([
      ...pro_layout_parentKeys,
      ...item.parentKeys || []
    ]);
    if (parent.key) {
      item_pro_layout_parentKeys.add(parent.key);
    }
    const finallyItem = {
      ...restParent,
      menu: void 0,
      ...item,
      path,
      locale,
      key: item.key || getKeyByPath({ ...item, path }),
      pro_layout_parentKeys: Array.from(item_pro_layout_parentKeys).filter(
        (key) => key && key !== "/"
      )
    };
    if (localeName) {
      finallyItem.name = localeName;
    } else {
      delete finallyItem.name;
    }
    if (finallyItem.menu === void 0) {
      delete finallyItem.menu;
    }
    if (notNullArray(routerChildren)) {
      const formatterChildren = formatter(
        {
          ...props,
          data: routerChildren,
          parentName: locale || ""
        },
        finallyItem
      );
      if (notNullArray(formatterChildren)) {
        finallyItem.children = formatterChildren;
      }
    }
    return bigfishCompatibleConversions(finallyItem, props);
  }).flat(1);
}
const defaultFilterMenuData = (menuData = []) => menuData.filter(
  (item) => item && (item.name || notNullArray(item.children)) && !item.hideInMenu && !item.redirect
).map((item) => {
  const newItem = { ...item };
  const routerChildren = newItem.children || item[childrenPropsName] || [];
  delete newItem[childrenPropsName];
  if (notNullArray(routerChildren) && !newItem.hideChildrenInMenu && routerChildren.some((child) => child && !!child.name)) {
    const newChildren = defaultFilterMenuData(routerChildren);
    if (newChildren.length)
      return {
        ...newItem,
        children: newChildren
      };
  }
  return { ...item };
}).filter((item) => item);
class RouteListMap extends Map {
  get(pathname) {
    let routeValue;
    try {
      for (const [key, value] of this.entries()) {
        const path = stripQueryStringAndHashFromPath(key);
        if (!isUrl(key) && pathToRegexp(path, []).test(pathname)) {
          routeValue = value;
          break;
        }
      }
    } catch (error) {
      routeValue = void 0;
    }
    return routeValue;
  }
}
const getBreadcrumbNameMap = (menuData) => {
  const routerMap = new RouteListMap();
  const flattenMenuData = (data, parent) => {
    data.forEach((menuItem) => {
      const routerChildren = menuItem.children || menuItem[childrenPropsName] || [];
      if (notNullArray(routerChildren)) {
        flattenMenuData(routerChildren, menuItem);
      }
      const path = mergePath(menuItem.path, parent ? parent.path : "/");
      routerMap.set(stripQueryStringAndHashFromPath(path), menuItem);
    });
  };
  flattenMenuData(menuData);
  return routerMap;
};
const clearChildren = (menuData = []) => {
  return menuData.map((item) => {
    const routerChildren = item.children || item[childrenPropsName];
    if (notNullArray(routerChildren)) {
      const newChildren = clearChildren(routerChildren);
      if (newChildren.length)
        return { ...item };
    }
    const finallyItem = { ...item };
    delete finallyItem[childrenPropsName];
    delete finallyItem.children;
    return finallyItem;
  }).filter((item) => item);
};
const transformRoute = (routeList, locale, formatMessage, ignoreFilter) => {
  const originalMenuData = formatter({
    data: routeList,
    formatMessage,
    locale
  });
  const menuData = ignoreFilter ? clearChildren(originalMenuData) : defaultFilterMenuData(originalMenuData);
  const breadcrumb = getBreadcrumbNameMap(originalMenuData);
  return { breadcrumb, menuData };
};

const getFlatMenus = (menuData = []) => {
  let menus = {};
  menuData.forEach((mapItem) => {
    const item = { ...mapItem };
    if (!item || !item.key) {
      return;
    }
    if (!item.children && item[childrenPropsName]) {
      item.children = item[childrenPropsName];
      delete item[childrenPropsName];
    }
    const routerChildren = item.children || [];
    menus[stripQueryStringAndHashFromPath(item.path || item.key || "/")] = {
      ...item
    };
    menus[item.key || item.path || "/"] = { ...item };
    if (routerChildren) {
      menus = { ...menus, ...getFlatMenus(routerChildren) };
    }
  });
  return menus;
};

const getMenuMatches = (flatMenuKeys = [], path, exact) => flatMenuKeys.filter((item) => {
  if (item === "/" && path === "/") {
    return true;
  }
  if (item !== "/" && item !== "/*" && item && !isUrl(item)) {
    const pathKey = stripQueryStringAndHashFromPath(item);
    try {
      if (exact) {
        if (pathToRegexp(`${pathKey}`).test(path)) {
          return true;
        }
      }
      if (pathToRegexp(`${pathKey}`, []).test(path)) {
        return true;
      }
      if (pathToRegexp(`${pathKey}/(.*)`).test(path)) {
        return true;
      }
    } catch (error) {
      console.log(error, path);
    }
  }
  return false;
}).sort((a, b) => {
  if (a === path) {
    return 10;
  }
  if (b === path) {
    return -10;
  }
  return a.substr(1).split("/").length - b.substr(1).split("/").length;
});
const getMatchMenu = (pathname, menuData, fullKeys, exact) => {
  const flatMenus = getFlatMenus(menuData);
  const flatMenuKeys = Object.keys(flatMenus);
  let menuPathKeys = getMenuMatches(flatMenuKeys, pathname || "/", exact);
  if (!menuPathKeys || menuPathKeys.length < 1) {
    return [];
  }
  if (!fullKeys) {
    menuPathKeys = [menuPathKeys[menuPathKeys.length - 1]];
  }
  return menuPathKeys.map((menuPathKey) => {
    const menuItem = flatMenus[menuPathKey] || {
      pro_layout_parentKeys: "",
      key: ""
    };
    const map = /* @__PURE__ */ new Map();
    const parentItems = (menuItem.pro_layout_parentKeys || []).map((key) => {
      if (map.has(key)) {
        return null;
      }
      map.set(key, true);
      return flatMenus[key];
    }).filter((item) => item);
    if (menuItem.key) {
      parentItems.push(menuItem);
    }
    return parentItems;
  }).flat(1);
};

const proLayoutTitleHide = new Keyframes("ipassBadgeLoadingCircle", {
  "0%": { display: "none", opacity: 0, overflow: "hidden" },
  "80%": {
    overflow: "hidden"
  },
  "100%": {
    display: "unset",
    opacity: 1
  }
});
const genSiderMenuStyle = (token) => {
  return {
    [`${token.proComponentsCls}-layout`]: {
      [`${token.ipassCls}-layout-sider${token.componentCls}`]: {
        background: token.layout?.sider?.colorMenuBackground || "transparent"
      },
      [token.componentCls]: {
        position: "relative",
        boxSizing: "border-box",
        "&-menu": {
          position: "relative",
          zIndex: 10,
          minHeight: "100%"
        },
        [`& ${token.ipassCls}-layout-sider-children`]: {
          position: "relative",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          paddingInline: token.layout?.sider?.paddingInlineLayoutMenu,
          paddingBlock: token.layout?.sider?.paddingBlockLayoutMenu,
          borderInlineEnd: `1px solid ${token.colorSplit}`,
          marginInlineEnd: -1
        },
        [`${token.ipassCls}-menu`]: {
          [`${token.ipassCls}-menu-item-group-title`]: {
            fontSize: token.fontSizeSM,
            paddingBottom: 4
          },
          [`${token.ipassCls}-menu-item:hover`]: {
            color: token.layout?.sider?.colorTextMenuItemHover
          }
        },
        "&-logo": {
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingInline: 12,
          paddingBlock: 16,
          color: token.layout?.sider?.colorTextMenu,
          cursor: "pointer",
          borderBlockEnd: `1px solid ${token.layout?.sider?.colorMenuItemDivider}`,
          "> a": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 22,
            fontSize: 22,
            "> img": {
              display: "inline-block",
              height: 22,
              verticalAlign: "middle"
            },
            "> h1": {
              display: "inline-block",
              height: 22,
              marginBlock: 0,
              marginInlineEnd: 0,
              marginInlineStart: 6,
              color: token.layout?.sider?.colorTextMenuTitle,
              animationName: proLayoutTitleHide,
              animationDuration: ".4s",
              animationTimingFunction: "ease",
              fontWeight: 600,
              fontSize: 16,
              lineHeight: "22px",
              verticalAlign: "middle"
            }
          },
          "&-collapsed": {
            flexDirection: "column-reverse",
            margin: 0,
            padding: 12,
            [`${token.proComponentsCls}-layout-apps-icon`]: {
              marginBlockEnd: 8,
              fontSize: 16,
              transition: "font-size 0.2s ease-in-out,color 0.2s ease-in-out"
            }
          }
        },
        "&-actions": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBlock: 4,
          marginInline: 0,
          color: token.layout?.sider?.colorTextMenu,
          "&-collapsed": {
            flexDirection: "column-reverse",
            paddingBlock: 0,
            paddingInline: 8,
            fontSize: 16,
            transition: "font-size 0.3s ease-in-out"
          },
          "&-list": {
            color: token.layout?.sider?.colorTextMenuSecondary,
            "&-collapsed": {
              marginBlockEnd: 8,
              animationName: "none"
            },
            "&-item": {
              paddingInline: 6,
              paddingBlock: 6,
              lineHeight: "16px",
              fontSize: 16,
              cursor: "pointer",
              borderRadius: token.borderRadius,
              "&:hover": {
                background: token.colorBgTextHover
              }
            }
          },
          "&-avatar": {
            fontSize: 14,
            paddingInline: 8,
            paddingBlock: 8,
            display: "flex",
            alignItems: "center",
            gap: token.marginXS,
            borderRadius: token.borderRadius,
            "& *": {
              cursor: "pointer"
            },
            "&:hover": {
              background: token.colorBgTextHover
            }
          }
        },
        "&-hide-menu-collapsed": {
          insetInlineStart: `-${token.proLayoutCollapsedWidth - 12}px`,
          position: "absolute"
        },
        "&-extra": {
          marginBlockEnd: 16,
          marginBlock: 0,
          marginInline: 16,
          "&-no-logo": {
            marginBlockStart: 16
          }
        },
        "&-links": {
          width: "100%",
          ul: {
            height: "auto"
          }
        },
        "&-link-menu": {
          border: "none",
          boxShadow: "none",
          background: "transparent"
        },
        "&-footer": {
          color: token.layout?.sider?.colorTextMenuSecondary,
          paddingBlockEnd: 16,
          fontSize: token.fontSize,
          animationName: proLayoutTitleHide,
          animationDuration: ".4s",
          animationTimingFunction: "ease"
        }
      },
      [`${token.componentCls}${token.componentCls}-fixed`]: {
        position: "fixed",
        insetBlockStart: 0,
        insetInlineStart: 0,
        zIndex: "100",
        height: "100%",
        "&-mix": {
          height: `calc(100% - ${token.layout?.header?.heightLayoutHeader || 56}px)`,
          insetBlockStart: `${token.layout?.header?.heightLayoutHeader || 56}px`
        }
      }
    }
  };
};
function useStyle$5(prefixCls, {
  proLayoutCollapsedWidth
}) {
  return useStyle$A("ProLayoutSiderMenu", (token) => {
    const siderMenuToken = {
      ...token,
      componentCls: `.${prefixCls}`,
      proLayoutCollapsedWidth
    };
    return [genSiderMenuStyle(siderMenuToken)];
  });
}

const SiderMenuWrapper = (props) => {
  const {
    isMobile,
    siderWidth,
    collapsed,
    onCollapse,
    style,
    className,
    hide,
    prefixCls
  } = props;
  const { token } = useContext(ProProvider);
  const omitProps = omit(props, ["className", "style"]);
  const { wrapSSR, hashId } = useStyle$5(`${prefixCls}-sider`, {
    proLayoutCollapsedWidth: 64
  });
  const siderClassName = classNames(`${prefixCls}-sider`, className, hashId);
  if (hide) {
    return null;
  }
  const drawerOpenProps = openVisibleCompatible(
    !collapsed,
    () => onCollapse?.(true)
  );
  return wrapSSR(
    isMobile ? /* @__PURE__ */ jsx(
      Drawer,
      {
        placement: "left",
        className: classNames(`${prefixCls}-drawer-sider`, className),
        ...drawerOpenProps,
        style: {
          padding: 0,
          height: "100vh",
          ...style
        },
        onClose: () => {
          onCollapse?.(true);
        },
        maskClosable: true,
        closable: false,
        width: siderWidth,
        bodyStyle: {
          height: "100vh",
          padding: 0,
          display: "flex",
          flexDirection: "row",
          backgroundColor: token.layout?.sider?.colorMenuBackground
        },
        children: /* @__PURE__ */ jsx(
          SiderMenu,
          {
            ...omitProps,
            isMobile: true,
            className: siderClassName,
            collapsed: isMobile ? false : collapsed,
            splitMenus: false,
            originCollapsed: collapsed
          }
        )
      }
    ) : /* @__PURE__ */ jsx(
      SiderMenu,
      {
        className: siderClassName,
        originCollapsed: collapsed,
        ...omitProps,
        style
      }
    )
  );
};

const defaultSettings = {
  navTheme: "light",
  layout: "side",
  contentWidth: "Fluid",
  fixedHeader: false,
  fixSiderbar: true,
  iconfontUrl: "",
  colorPrimary: "#1677FF",
  splitMenus: false
};

const version = "5.1.7";
const getVersion = () => {
  if (typeof process === "undefined")
    return version;
  return process?.env?.VERSION || version;
};
const compatibleStyle = (token) => {
  if (getVersion()?.startsWith("5")) {
    return {};
  }
  return {
    [token.componentCls]: {
      width: "100%",
      height: "100%",
      [`${token.proComponentsCls}-base-menu`]: {
        color: token.layout?.sider?.colorTextMenu,
        [`${token.ipassCls}-menu-sub`]: {
          backgroundColor: "transparent!important",
          color: token.layout?.sider?.colorTextMenu
        },
        [`& ${token.ipassCls}-layout`]: {
          backgroundColor: "transparent",
          width: "100%"
        },
        [`${token.ipassCls}-menu-submenu-expand-icon, ${token.ipassCls}-menu-submenu-arrow`]: {
          color: "inherit"
        },
        [`&${token.ipassCls}-menu`]: {
          color: token.layout?.sider?.colorTextMenu,
          [`${token.ipassCls}-menu-item`]: {
            "*": {
              transition: "none !important"
            }
          },
          [`${token.ipassCls}-menu-item a`]: {
            color: "inherit"
          }
        },
        [`&${token.ipassCls}-menu-inline`]: {
          [`${token.ipassCls}-menu-selected::after,${token.ipassCls}-menu-item-selected::after`]: {
            display: "none"
          }
        },
        [`${token.ipassCls}-menu-sub ${token.ipassCls}-menu-inline`]: {
          backgroundColor: "transparent!important"
        },
        [`${token.ipassCls}-menu-item:active, 
        ${token.ipassCls}-menu-submenu-title:active`]: {
          backgroundColor: "transparent!important"
        },
        [`&${token.ipassCls}-menu-light`]: {
          [`${token.ipassCls}-menu-item:hover, 
            ${token.ipassCls}-menu-item-active,
            ${token.ipassCls}-menu-submenu-active, 
            ${token.ipassCls}-menu-submenu-title:hover`]: {
            color: token.layout?.sider?.colorTextMenuActive,
            borderRadius: token.borderRadius,
            [`${token.ipassCls}-menu-submenu-arrow`]: {
              color: token.layout?.sider?.colorTextMenuActive
            }
          }
        },
        [`&${token.ipassCls}-menu:not(${token.ipassCls}-menu-horizontal)`]: {
          [`${token.ipassCls}-menu-item-selected`]: {
            backgroundColor: token.layout?.sider?.colorBgMenuItemSelected,
            borderRadius: token.borderRadius
          },
          [`${token.ipassCls}-menu-item:hover, 
            ${token.ipassCls}-menu-item-active,
            ${token.ipassCls}-menu-submenu-title:hover`]: {
            color: token.layout?.sider?.colorTextMenuActive,
            borderRadius: token.borderRadius,
            backgroundColor: `${token.layout?.header?.colorBgMenuItemHover} !important`,
            [`${token.ipassCls}-menu-submenu-arrow`]: {
              color: token.layout?.sider?.colorTextMenuActive
            }
          }
        },
        [`${token.ipassCls}-menu-item-selected`]: {
          color: token.layout?.sider?.colorTextMenuSelected
        },
        [`${token.ipassCls}-menu-submenu-selected`]: {
          color: token.layout?.sider?.colorTextMenuSelected
        },
        [`&${token.ipassCls}-menu:not(${token.ipassCls}-menu-inline) ${token.ipassCls}-menu-submenu-open`]: {
          color: token.layout?.sider?.colorTextMenuSelected
        },
        [`&${token.ipassCls}-menu-vertical`]: {
          [`${token.ipassCls}-menu-submenu-selected`]: {
            borderRadius: token.borderRadius,
            color: token.layout?.sider?.colorTextMenuSelected
          }
        },
        [`${token.ipassCls}-menu-submenu:hover > ${token.ipassCls}-menu-submenu-title > ${token.ipassCls}-menu-submenu-arrow`]: {
          color: token.layout?.sider?.colorTextMenuActive
        },
        [`&${token.ipassCls}-menu-horizontal`]: {
          [`${token.ipassCls}-menu-item:hover,
          ${token.ipassCls}-menu-submenu:hover,
          ${token.ipassCls}-menu-item-active,
          ${token.ipassCls}-menu-submenu-active`]: {
            borderRadius: 4,
            transition: "none",
            color: token.layout?.header?.colorTextMenuActive,
            backgroundColor: `${token.layout?.header?.colorBgMenuItemHover} !important`
          },
          [`${token.ipassCls}-menu-item-open,
          ${token.ipassCls}-menu-submenu-open,
          ${token.ipassCls}-menu-item-selected,
          ${token.ipassCls}-menu-submenu-selected`]: {
            backgroundColor: token.layout?.header?.colorBgMenuItemSelected,
            borderRadius: token.borderRadius,
            transition: "none",
            color: `${token.layout?.header?.colorTextMenuSelected} !important`,
            [`${token.ipassCls}-menu-submenu-arrow`]: {
              color: `${token.layout?.header?.colorTextMenuSelected} !important`
            }
          },
          [`> ${token.ipassCls}-menu-item, > ${token.ipassCls}-menu-submenu`]: {
            paddingInline: 16,
            marginInline: 4
          },
          [`> ${token.ipassCls}-menu-item::after, > ${token.ipassCls}-menu-submenu::after`]: {
            display: "none"
          }
        }
      },
      [`${token.proComponentsCls}-top-nav-header-base-menu`]: {
        [`&${token.ipassCls}-menu`]: {
          color: token.layout?.header?.colorTextMenu,
          [`${token.ipassCls}-menu-item a`]: {
            color: "inherit"
          }
        },
        [`&${token.ipassCls}-menu-light`]: {
          [`${token.ipassCls}-menu-item:hover, 
            ${token.ipassCls}-menu-item-active,
            ${token.ipassCls}-menu-submenu-active, 
            ${token.ipassCls}-menu-submenu-title:hover`]: {
            color: token.layout?.header?.colorTextMenuActive,
            borderRadius: token.borderRadius,
            transition: "none",
            backgroundColor: token.layout?.header?.colorBgMenuItemSelected,
            [`${token.ipassCls}-menu-submenu-arrow`]: {
              color: token.layout?.header?.colorTextMenuActive
            }
          },
          [`${token.ipassCls}-menu-item-selected`]: {
            color: token.layout?.header?.colorTextMenuSelected,
            borderRadius: token.borderRadius,
            backgroundColor: token.layout?.header?.colorBgMenuItemSelected
          }
        }
      }
    },
    [`${token.ipassCls}-menu-sub${token.ipassCls}-menu-inline`]: {
      backgroundColor: "transparent!important"
    },
    [`${token.ipassCls}-menu-submenu-popup`]: {
      backgroundColor: "rgba(255, 255, 255, 0.42)",
      "-webkit-backdrop-filter": "blur(8px)",
      backdropFilter: "blur(8px)",
      [`${token.ipassCls}-menu`]: {
        background: "transparent !important",
        backgroundColor: "transparent !important",
        [`${token.ipassCls}-menu-item:active, 
        ${token.ipassCls}-menu-submenu-title:active`]: {
          backgroundColor: "transparent!important"
        }
      },
      [`${token.ipassCls}-menu-item-selected`]: {
        color: token.layout?.sider?.colorTextMenuSelected
      },
      [`${token.ipassCls}-menu-submenu-selected`]: {
        color: token.layout?.sider?.colorTextMenuSelected
      },
      [`${token.ipassCls}-menu:not(${token.ipassCls}-menu-horizontal)`]: {
        [`${token.ipassCls}-menu-item-selected`]: {
          backgroundColor: "rgba(0, 0, 0, 0.04)",
          borderRadius: token.borderRadius,
          color: token.layout?.sider?.colorTextMenuSelected
        },
        [`${token.ipassCls}-menu-item:hover, 
          ${token.ipassCls}-menu-item-active,
          ${token.ipassCls}-menu-submenu-title:hover`]: {
          color: token.layout?.sider?.colorTextMenuActive,
          borderRadius: token.borderRadius,
          [`${token.ipassCls}-menu-submenu-arrow`]: {
            color: token.layout?.sider?.colorTextMenuActive
          }
        }
      }
    }
  };
};
const genProLayoutStyle = (token) => {
  return {
    [`${token.ipassCls}-layout`]: {
      backgroundColor: "transparent !important"
    },
    [token.componentCls]: {
      [`& ${token.ipassCls}-layout`]: {
        display: "flex",
        backgroundColor: "transparent",
        width: "100%"
      },
      [`${token.componentCls}-content`]: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: token.layout?.pageContainer?.colorBgPageContainer || "transparent",
        position: "relative",
        paddingBlock: token.layout?.pageContainer?.paddingBlockPageContainerContent,
        paddingInline: token.layout?.pageContainer?.paddingInlinePageContainerContent,
        "&-has-page-container": {
          padding: 0
        }
      },
      [`${token.componentCls}-container`]: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        minHeight: 0,
        backgroundColor: "transparent"
      },
      [`${token.componentCls}-bg-list`]: {
        pointerEvents: "none",
        position: "fixed",
        overflow: "hidden",
        insetBlockStart: 0,
        insetInlineStart: 0,
        zIndex: 0,
        height: "100%",
        width: "100%",
        background: token.layout?.bgLayout
      }
    }
  };
};
function useStyle$4(prefixCls) {
  return useStyle$A("ProLayout", (token) => {
    const proLayoutToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genProLayoutStyle(proLayoutToken), compatibleStyle(proLayoutToken)];
  });
}

function fromEntries(iterable) {
  return [...iterable].reduce(
    (obj, [key, val]) => {
      obj[key] = val;
      return obj;
    },
    {}
  );
}
const getMenuData = (routes, menu, formatMessage, menuDataRender) => {
  const { menuData, breadcrumb } = transformRoute(
    routes,
    menu?.locale || false,
    formatMessage,
    true
  );
  if (!menuDataRender) {
    return {
      breadcrumb: fromEntries(breadcrumb),
      breadcrumbMap: breadcrumb,
      menuData
    };
  }
  return getMenuData(menuDataRender(menuData), menu, formatMessage, void 0);
};

const useCurrentMenuLayoutProps = (currentMenu) => {
  const [currentMenuLayoutProps, setCurrentMenuLayoutProps] = useState({});
  useEffect(() => {
    setCurrentMenuLayoutProps(
      omitUndefined({
        // 有時候會變成對象，是原來的方式
        layout: typeof currentMenu.layout !== "object" ? currentMenu.layout : void 0,
        navTheme: currentMenu.navTheme,
        menuRender: currentMenu.menuRender,
        footerRender: currentMenu.footerRender,
        menuHeaderRender: currentMenu.menuHeaderRender,
        headerRender: currentMenu.headerRender,
        fixSiderbar: currentMenu.fixSiderbar
      })
    );
  }, [
    currentMenu.layout,
    currentMenu.navTheme,
    currentMenu.menuRender,
    currentMenu.footerRender,
    currentMenu.menuHeaderRender,
    currentMenu.headerRender,
    currentMenu.fixSiderbar
  ]);
  return currentMenuLayoutProps;
};

function urlToList(url) {
  if (!url || url === "/") {
    return ["/"];
  }
  const urlList = url.split("/").filter((i) => i);
  return urlList.map(
    (urlItem, index) => `/${urlList.slice(0, index + 1).join("/")}`
  );
}

const defaultItemRender = (route, _, routes) => {
  const { breadcrumbName, title, path } = route;
  const last = routes.findIndex(
    (i) => (
      // @ts-ignore
      i.linkPath === route.path
    )
  ) === routes.length - 1;
  return last ? /* @__PURE__ */ jsx("span", { children: title || breadcrumbName }) : /* @__PURE__ */ jsx("span", { onClick: path ? () => location.href = path : void 0, children: title || breadcrumbName });
};
const renderItemLocal = (item, props) => {
  const { formatMessage } = props;
  if (item.locale && formatMessage) {
    return formatMessage({ id: item.locale, defaultMessage: item.name });
  }
  return item.name;
};
const getBreadcrumb = (breadcrumbMap, url) => {
  let breadcrumbItem = breadcrumbMap.get(url);
  if (!breadcrumbItem) {
    const keys = Array.from(breadcrumbMap.keys()) || [];
    const targetPath = keys.find(
      (path) => (
        // remove ? ,不然會重複
        pathToRegexp(path.replace("?", "")).test(url)
      )
    );
    if (targetPath)
      breadcrumbItem = breadcrumbMap.get(targetPath);
  }
  return breadcrumbItem || { path: "" };
};
const getBreadcrumbFromProps = (props) => {
  const { location: location2, breadcrumbMap } = props;
  return {
    location: location2,
    breadcrumbMap
  };
};
const genBreadcrumbProps = (props) => {
  const { location: location2, breadcrumbMap } = getBreadcrumbFromProps(props);
  if (location2 && location2.pathname && breadcrumbMap) {
    const pathSnippets = urlToList(location2?.pathname);
    const extraBreadcrumbItems = pathSnippets.map((url) => {
      const currentBreadcrumb = getBreadcrumb(breadcrumbMap, url);
      const name = renderItemLocal(currentBreadcrumb, props);
      const { hideInBreadcrumb } = currentBreadcrumb;
      return name && !hideInBreadcrumb ? {
        href: url,
        breadcrumbName: name,
        title: name,
        component: currentBreadcrumb.component
      } : { linkPath: "", breadcrumbName: "", title: "" };
    }).filter((item) => item && item.linkPath);
    return extraBreadcrumbItems;
  }
  return [];
};
const getBreadcrumbProps = (props, layoutPros) => {
  const { breadcrumbRender, itemRender: propsItemRender } = props;
  const minLength = 2;
  const routesArray = genBreadcrumbProps(props);
  const itemRender = (item, ...rest) => {
    const renderFunction = propsItemRender || defaultItemRender;
    return renderFunction?.(
      {
        ...item,
        // 如果item.linkPath存在，則使用item.linkPath，否則使用item.path
        // @ts-ignore
        path: item.linkPath || item.path
      },
      ...rest
    );
  };
  let items = routesArray;
  if (breadcrumbRender) {
    items = breadcrumbRender(items || []) || void 0;
  }
  if (items && items.length < minLength || breadcrumbRender === false) {
    items = void 0;
  }
  return {
    items,
    itemRender
  };
};

const WrapContent = (props) => {
  const { hashId } = useContext(ProProvider);
  const { style, prefixCls, children, hasPageContainer = 0 } = props;
  const contentClassName = classNames(`${prefixCls}-content`, hashId, {
    [`${prefixCls}-has-header`]: props.hasHeader,
    [`${prefixCls}-content-has-page-container`]: hasPageContainer > 0
  });
  const ErrorComponent = props.ErrorBoundary || ErrorBoundary;
  return props.ErrorBoundary === false ? /* @__PURE__ */ jsx(Layout.Content, { className: contentClassName, style, children }) : /* @__PURE__ */ jsx(ErrorComponent, { children: /* @__PURE__ */ jsx(Layout.Content, { className: contentClassName, style, children }) });
};

let layoutIndex = 0;
const headerRender = (props, matchMenuKeys) => {
  if (props.headerRender === false || props.pure) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    DefaultHeader,
    {
      matchMenuKeys,
      ...props,
      stylish: props.stylish?.header
    }
  );
};
const footerRender = (props) => {
  if (props.footerRender === false || props.pure) {
    return null;
  }
  if (props.footerRender) {
    return props.footerRender({ ...props }, /* @__PURE__ */ jsx(DefaultFooter, {}));
  }
  return null;
};
const renderSiderMenu = (props, matchMenuKeys) => {
  const {
    layout,
    isMobile,
    selectedKeys,
    openKeys,
    splitMenus,
    suppressSiderWhenMenuEmpty,
    menuRender
  } = props;
  if (props.menuRender === false || props.pure) {
    return null;
  }
  let { menuData } = props;
  if (splitMenus && (openKeys !== false || layout === "mix") && !isMobile) {
    const [key] = selectedKeys || matchMenuKeys;
    if (key) {
      menuData = props.menuData?.find((item) => item.key === key)?.children || [];
    } else {
      menuData = [];
    }
  }
  const clearMenuData = clearMenuItem(menuData || []);
  if (clearMenuData && clearMenuData?.length < 1 && (splitMenus || suppressSiderWhenMenuEmpty)) {
    return null;
  }
  if (layout === "top" && !isMobile) {
    return /* @__PURE__ */ jsx(
      SiderMenuWrapper,
      {
        matchMenuKeys,
        ...props,
        hide: true,
        stylish: props.stylish?.sider
      }
    );
  }
  const defaultDom = /* @__PURE__ */ jsx(
    SiderMenuWrapper,
    {
      matchMenuKeys,
      ...props,
      menuData: clearMenuData,
      stylish: props.stylish?.sider
    }
  );
  if (menuRender) {
    return menuRender(props, defaultDom);
  }
  return defaultDom;
};
const defaultPageTitleRender = (pageProps, props) => {
  const { pageTitleRender } = props;
  const pageTitleInfo = getPageTitleInfo(pageProps);
  if (pageTitleRender === false) {
    return {
      title: props.title || "",
      id: "",
      pageName: ""
    };
  }
  if (pageTitleRender) {
    const title = pageTitleRender(
      pageProps,
      pageTitleInfo.title,
      pageTitleInfo
    );
    if (typeof title === "string") {
      return getPageTitleInfo({
        ...pageTitleInfo,
        title
      });
    }
    warning(
      typeof title === "string",
      "pro-layout: renderPageTitle return value should be a string"
    );
  }
  return pageTitleInfo;
};
const getPaddingInlineStart = (hasLeftPadding, collapsed, siderWidth) => {
  if (hasLeftPadding) {
    return collapsed ? 64 : siderWidth;
  }
  return 0;
};
const BaseProLayout = (props) => {
  const {
    children,
    onCollapse: propsOnCollapse,
    contentStyle,
    route,
    defaultCollapsed,
    style,
    siderWidth: propsSiderWidth,
    menu,
    siderMenuType,
    isChildrenLayout: propsIsChildrenLayout,
    menuDataRender,
    actionRef,
    bgLayoutImgList,
    loading
  } = props || {};
  const siderWidth = useMemo(() => {
    if (propsSiderWidth)
      return propsSiderWidth;
    if (props.layout === "mix")
      return 215;
    return 256;
  }, [props.layout, propsSiderWidth]);
  const pathname = usePathname();
  const intl = useIntl();
  const { formatMessage } = intl;
  const context = useContext(ConfigProvider.ConfigContext);
  const prefixCls = props.prefixCls ?? context.getPrefixCls("pro");
  const [menuLoading, setMenuLoading] = useMergedState(false, {
    value: menu?.loading,
    onChange: menu?.onLoadingChange
  });
  const [defaultId] = useState(() => {
    layoutIndex += 1;
    return `pro-layout-${layoutIndex}`;
  });
  const { data, mutate, isLoading } = useSWR(
    [defaultId, menu?.params],
    async ([, params]) => {
      setMenuLoading(true);
      const menuDataItems = await menu?.request?.(
        params || {},
        route?.children || route?.routes || []
      );
      setMenuLoading(false);
      return menuDataItems;
    },
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      revalidateOnReconnect: false
    }
  );
  useEffect(() => {
    setMenuLoading(isLoading);
  }, [isLoading]);
  const { cache } = useSWRConfig();
  useEffect(() => {
    return () => {
      if (cache instanceof Map)
        cache.clear();
    };
  }, []);
  const menuInfoData = useMemo(
    () => getMenuData(
      data || route?.children || route?.routes || [],
      menu,
      formatMessage,
      menuDataRender
    ),
    [formatMessage, menu, menuDataRender, data, route?.children, route?.routes]
  );
  const { breadcrumb = {}, breadcrumbMap, menuData = [] } = menuInfoData || {};
  if (actionRef && menu?.request) {
    actionRef.current = {
      reload: () => {
        mutate();
      }
    };
  }
  const matchMenus = useMemo(() => {
    return getMatchMenu(pathname || "/", menuData || [], true);
  }, [pathname, menuData]);
  const matchMenuKeys = useMemo(
    () => (
      // @ts-ignore
      Array.from(new Set(matchMenus.map((item) => item.key || item.path || "")))
    ),
    [matchMenus]
  );
  const currentMenu = matchMenus[matchMenus.length - 1] || {};
  const currentMenuLayoutProps = useCurrentMenuLayoutProps(currentMenu);
  const {
    // @ts-ignore
    fixSiderbar,
    // @ts-ignore
    navTheme,
    // @ts-ignore
    layout: propsLayout,
    ...rest
  } = {
    ...props,
    ...currentMenuLayoutProps
  };
  const colSize = useBreakpoint();
  const isMobile = useMemo(() => {
    return (colSize === "sm" || colSize === "xs") && !props.disableMobile;
  }, [colSize, props.disableMobile]);
  const hasLeftPadding = propsLayout !== "top" && !isMobile;
  const [collapsed, onCollapse] = useMergedState$1(
    () => {
      if (defaultCollapsed !== void 0)
        return defaultCollapsed;
      if (isMobile)
        return true;
      if (colSize === "md")
        return true;
      return false;
    },
    {
      value: props.collapsed,
      onChange: propsOnCollapse
    }
  );
  const defaultProps = omit(
    {
      prefixCls,
      ...props,
      siderWidth,
      ...currentMenuLayoutProps,
      formatMessage,
      breadcrumb,
      menu: {
        ...menu,
        type: siderMenuType || menu?.type,
        loading: menuLoading
      },
      layout: propsLayout
    },
    ["className", "breadcrumbRender"]
  );
  const pageTitleInfo = defaultPageTitleRender(
    {
      pathname: pathname ?? void 0,
      ...defaultProps,
      breadcrumbMap
    },
    props
  );
  const breadcrumbProps = getBreadcrumbProps(
    {
      ...defaultProps,
      breadcrumbRender: props.breadcrumbRender,
      breadcrumbMap
    });
  const siderMenuDom = renderSiderMenu(
    {
      ...defaultProps,
      menuData,
      onCollapse,
      isMobile,
      collapsed
    },
    matchMenuKeys
  );
  const headerDom = headerRender(
    {
      ...defaultProps,
      children: null,
      hasSiderMenu: !!siderMenuDom,
      menuData,
      isMobile,
      collapsed,
      onCollapse
    },
    matchMenuKeys
  );
  const footerDom = footerRender({
    isMobile,
    collapsed,
    ...defaultProps
  });
  const { isChildrenLayout: contextIsChildrenLayout } = useContext(RouteContext);
  const isChildrenLayout = propsIsChildrenLayout !== void 0 ? propsIsChildrenLayout : contextIsChildrenLayout;
  const proLayoutClassName = `${prefixCls}-layout`;
  const { wrapSSR, hashId } = useStyle$4(proLayoutClassName);
  const className = classNames(
    props.className,
    hashId,
    "ipass-pro-layout",
    proLayoutClassName,
    {
      // FIXME: Nextjs said mismatched className between server and client.
      // [`screen-${colSize}`]: colSize,
      [`${proLayoutClassName}-top-menu`]: propsLayout === "top",
      [`${proLayoutClassName}-is-children`]: isChildrenLayout,
      [`${proLayoutClassName}-fix-siderbar`]: fixSiderbar,
      [`${proLayoutClassName}-${propsLayout}`]: propsLayout
    }
  );
  const leftSiderWidth = getPaddingInlineStart(
    !!hasLeftPadding,
    collapsed,
    siderWidth
  );
  const genLayoutStyle = {
    position: "relative"
  };
  if (isChildrenLayout || contentStyle && contentStyle.minHeight) {
    genLayoutStyle.minHeight = 0;
  }
  const [hasFooterToolbar, setHasFooterToolbar] = useState(false);
  const [hasPageContainer, setHasPageContainer] = useState(0);
  const bgImgStyleList = useMemo(() => {
    if (bgLayoutImgList && bgLayoutImgList.length > 0) {
      return bgLayoutImgList.map((item, index) => {
        return /* @__PURE__ */ jsx(
          "img",
          {
            src: item.src,
            style: {
              position: "absolute",
              ...item
            }
          },
          index
        );
      });
    }
    return null;
  }, [bgLayoutImgList]);
  const { token } = useContext(ProProvider);
  return wrapSSR(
    /* @__PURE__ */ jsx(
      RouteContext.Provider,
      {
        value: {
          ...defaultProps,
          breadcrumb: breadcrumbProps,
          menuData,
          isMobile,
          collapsed,
          hasPageContainer,
          setHasPageContainer,
          isChildrenLayout: true,
          title: pageTitleInfo.pageName,
          hasSiderMenu: !!siderMenuDom,
          hasHeader: !!headerDom,
          siderWidth: leftSiderWidth,
          hasFooter: !!footerDom,
          hasFooterToolbar,
          setHasFooterToolbar,
          pageTitleInfo,
          matchMenus,
          matchMenuKeys,
          currentMenu
        },
        children: props.pure ? /* @__PURE__ */ jsx(Fragment, { children }) : /* @__PURE__ */ jsxs("div", { className, children: [
          /* @__PURE__ */ jsx("div", { className: classNames(`${proLayoutClassName}-bg-list`, hashId), children: bgImgStyleList }),
          /* @__PURE__ */ jsxs(
            Layout,
            {
              style: {
                minHeight: "100%",
                // hack style
                flexDirection: siderMenuDom ? "row" : void 0,
                ...style
              },
              children: [
                /* @__PURE__ */ jsx(
                  ConfigProvider,
                  {
                    theme: {
                      hashed: isNeedOpenHash(),
                      components: {
                        Menu: coverToNewToken({
                          itemBg: token.layout?.sider?.colorMenuBackground || "transparent",
                          subMenuItemBg: token.layout?.sider?.colorMenuBackground || "transparent",
                          itemBorderRadius: 4,
                          controlHeightLG: token.layout?.sider?.menuHeight || token?.controlHeightLG,
                          itemSelectedBg: token.layout?.sider?.colorBgMenuItemSelected || token?.colorBgTextHover,
                          itemHoverBg: token.layout?.sider?.colorBgMenuItemHover || token?.colorBgTextHover,
                          itemActiveBg: token.layout?.sider?.colorBgMenuItemActive || token?.colorBgTextActive,
                          horizontalItemSelectedBg: token.layout?.sider?.colorBgMenuItemSelected || token?.colorBgTextHover,
                          colorActiveBarWidth: 0,
                          colorActiveBarHeight: 0,
                          colorActiveBarBorderSize: 0,
                          itemColor: token.layout?.sider?.colorTextMenu || token?.colorTextSecondary,
                          itemHoverColor: token.layout?.sider?.colorTextMenuItemHover || "rgba(0, 0, 0, 0.85)",
                          // 懸浮態
                          itemSelectedColor: token.layout?.sider?.colorTextMenuSelected || "rgba(0, 0, 0, 1)",
                          colorBgElevated: token.layout?.sider?.colorBgMenuItemCollapsedElevated || "#fff"
                        })
                      }
                    },
                    children: siderMenuDom
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    style: genLayoutStyle,
                    className: `${proLayoutClassName}-container ${hashId}`.trim(),
                    children: [
                      headerDom,
                      /* @__PURE__ */ jsx(
                        WrapContent,
                        {
                          hasPageContainer,
                          isChildrenLayout,
                          ...rest,
                          hasHeader: !!headerDom,
                          prefixCls: proLayoutClassName,
                          style: contentStyle,
                          children: loading ? /* @__PURE__ */ jsx(PageLoading, {}) : children
                        }
                      ),
                      footerDom,
                      hasFooterToolbar && /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: `${proLayoutClassName}-has-footer`,
                          style: {
                            height: 64,
                            marginBlockStart: token.layout?.pageContainer?.paddingBlockPageContainerContent
                          }
                        }
                      )
                    ]
                  }
                )
              ]
            }
          )
        ] })
      }
    )
  );
};
const ProLayout = (props) => {
  const { colorPrimary } = props;
  const darkProps = props.navTheme !== void 0 ? {
    dark: props.navTheme === "realDark"
  } : {};
  if (props.muiTheme) {
    return /* @__PURE__ */ jsx(ThemeProvider, { theme: props.muiTheme, children: /* @__PURE__ */ jsx(IntlProvider, { locale: props.locale, defaultLocale: props.defaultLocale, messages: props.messages, children: /* @__PURE__ */ jsx(
      ConfigProvider,
      {
        theme: colorPrimary ? {
          token: {
            colorPrimary
          }
        } : void 0,
        children: /* @__PURE__ */ jsx(
          ProConfigProvider,
          {
            autoClearCache: true,
            ...darkProps,
            token: props.token,
            prefixCls: props.prefixCls,
            children: /* @__PURE__ */ jsx(
              BaseProLayout,
              {
                logo: "/logo.svg",
                ...defaultSettings,
                location: isBrowser() ? window.location : void 0,
                ...props
              }
            )
          }
        )
      }
    ) }) });
  }
  props.defaultCollapsed;
  return /* @__PURE__ */ jsx(IntlProvider, { locale: props.locale, defaultLocale: props.defaultLocale, messages: props.messages, children: /* @__PURE__ */ jsx(
    ConfigProvider,
    {
      theme: colorPrimary ? {
        token: {
          colorPrimary
        }
      } : void 0,
      children: /* @__PURE__ */ jsx(
        ProConfigProvider,
        {
          autoClearCache: true,
          ...darkProps,
          token: props.token,
          prefixCls: props.prefixCls,
          children: /* @__PURE__ */ jsx(
            BaseProLayout,
            {
              logo: "/logo.svg",
              ...defaultSettings,
              location: isBrowser() ? window.location : void 0,
              ...props
            }
          )
        }
      )
    }
  ) });
};

const Line = ({ padding }) => /* @__PURE__ */ jsx(
  "div",
  {
    style: {
      padding: padding || "0 24px"
    },
    children: /* @__PURE__ */ jsx(Divider, { style: { margin: 0 } })
  }
);
const MediaQueryKeyEnum$1 = {
  xs: 2,
  sm: 2,
  md: 4,
  lg: 4,
  xl: 6,
  xxl: 6
};
const StatisticSkeleton = ({ size, active }) => {
  const defaultCol = useMemo(
    () => ({
      lg: true,
      md: true,
      sm: false,
      xl: false,
      xs: false,
      xxl: false
    }),
    []
  );
  const col = Grid.useBreakpoint() || defaultCol;
  const colSize = Object.keys(col).filter((key) => col[key] === true)[0] || "md";
  const arraySize = size === void 0 ? MediaQueryKeyEnum$1[colSize] || 6 : size;
  const firstWidth = (index) => {
    if (index === 0) {
      return 0;
    }
    if (arraySize > 2) {
      return 42;
    }
    return 16;
  };
  return /* @__PURE__ */ jsx(
    Card$1,
    {
      bordered: false,
      style: {
        marginBlockEnd: 16
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            width: "100%",
            justifyContent: "space-between",
            display: "flex"
          },
          children: new Array(arraySize).fill(null).map((_, index) => /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                borderInlineStart: arraySize > 2 && index === 1 ? "1px solid rgba(0,0,0,0.06)" : void 0,
                paddingInlineStart: firstWidth(index),
                flex: 1,
                marginInlineEnd: index === 0 ? 16 : 0
              },
              children: [
                /* @__PURE__ */ jsx(
                  Skeleton,
                  {
                    active,
                    paragraph: false,
                    title: {
                      width: 100,
                      style: { marginBlockStart: 0 }
                    }
                  }
                ),
                /* @__PURE__ */ jsx(
                  Skeleton.Button,
                  {
                    active,
                    style: {
                      height: 48
                    }
                  }
                )
              ]
            },
            index
          ))
        }
      )
    }
  );
};
const ListSkeletonItem = ({ active }) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(
    Card$1,
    {
      bordered: false,
      style: {
        borderRadius: 0
      },
      bodyStyle: {
        padding: 24
      },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          },
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  maxWidth: "100%",
                  flex: 1
                },
                children: /* @__PURE__ */ jsx(
                  Skeleton,
                  {
                    active,
                    title: {
                      width: 100,
                      style: {
                        marginBlockStart: 0
                      }
                    },
                    paragraph: {
                      rows: 1,
                      style: {
                        margin: 0
                      }
                    }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(
              Skeleton.Button,
              {
                active,
                size: "small",
                style: { width: 165, marginBlockStart: 12 }
              }
            )
          ]
        }
      )
    }
  ),
  /* @__PURE__ */ jsx(Line, {})
] });
const ListSkeleton = ({ size, active = true, actionButton }) => /* @__PURE__ */ jsxs(
  Card$1,
  {
    bordered: false,
    bodyStyle: {
      padding: 0
    },
    children: [
      new Array(size).fill(null).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ jsx(ListSkeletonItem, { active: !!active }, index)
      )),
      actionButton !== false && /* @__PURE__ */ jsx(
        Card$1,
        {
          bordered: false,
          style: {
            borderStartEndRadius: 0,
            borderTopLeftRadius: 0
          },
          bodyStyle: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: /* @__PURE__ */ jsx(
            Skeleton.Button,
            {
              style: {
                width: 102
              },
              active,
              size: "small"
            }
          )
        }
      )
    ]
  }
);
const PageHeaderSkeleton = ({ active }) => /* @__PURE__ */ jsxs(
  "div",
  {
    style: {
      marginBlockEnd: 16
    },
    children: [
      /* @__PURE__ */ jsx(
        Skeleton,
        {
          paragraph: false,
          title: {
            width: 185
          }
        }
      ),
      /* @__PURE__ */ jsx(Skeleton.Button, { active, size: "small" })
    ]
  }
);
const ListToolbarSkeleton = ({ active }) => /* @__PURE__ */ jsx(
  Card$1,
  {
    bordered: false,
    style: {
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0
    },
    bodyStyle: {
      paddingBlockEnd: 8
    },
    children: /* @__PURE__ */ jsxs(
      CompoundedSpace,
      {
        style: {
          width: "100%",
          justifyContent: "space-between"
        },
        children: [
          /* @__PURE__ */ jsx(Skeleton.Button, { active, style: { width: 200 }, size: "small" }),
          /* @__PURE__ */ jsxs(CompoundedSpace, { children: [
            /* @__PURE__ */ jsx(Skeleton.Button, { active, size: "small", style: { width: 120 } }),
            /* @__PURE__ */ jsx(Skeleton.Button, { active, size: "small", style: { width: 80 } })
          ] })
        ]
      }
    )
  }
);
const ListPageSkeleton = ({
  active = true,
  statistic,
  actionButton,
  toolbar,
  pageHeader,
  list = 5
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    style: {
      width: "100%"
    },
    children: [
      pageHeader !== false && /* @__PURE__ */ jsx(PageHeaderSkeleton, { active }),
      statistic !== false && /* @__PURE__ */ jsx(StatisticSkeleton, { size: statistic, active }),
      (toolbar !== false || list !== false) && /* @__PURE__ */ jsxs(
        Card$1,
        {
          bordered: false,
          bodyStyle: {
            padding: 0
          },
          children: [
            toolbar !== false && /* @__PURE__ */ jsx(ListToolbarSkeleton, { active }),
            list !== false && /* @__PURE__ */ jsx(
              ListSkeleton,
              {
                size: list,
                active,
                actionButton
              }
            )
          ]
        }
      )
    ]
  }
);

const MediaQueryKeyEnum = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 3,
  xl: 3,
  xxl: 4
};
const DescriptionsLargeItemSkeleton = ({ active }) => /* @__PURE__ */ jsxs(
  "div",
  {
    style: {
      marginBlockStart: 32
    },
    children: [
      /* @__PURE__ */ jsx(
        Skeleton.Button,
        {
          active,
          size: "small",
          style: { width: 100, marginBlockEnd: 16 }
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            width: "100%",
            justifyContent: "space-between",
            display: "flex"
          },
          children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                style: {
                  flex: 1,
                  marginInlineEnd: 24,
                  maxWidth: 300
                },
                children: [
                  /* @__PURE__ */ jsx(
                    Skeleton,
                    {
                      active,
                      paragraph: false,
                      title: {
                        style: { marginBlockStart: 0 }
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Skeleton,
                    {
                      active,
                      paragraph: false,
                      title: {
                        style: { marginBlockStart: 8 }
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Skeleton,
                    {
                      active,
                      paragraph: false,
                      title: {
                        style: { marginBlockStart: 8 }
                      }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: /* @__PURE__ */ jsxs(
                  "div",
                  {
                    style: {
                      maxWidth: 300,
                      margin: "auto"
                    },
                    children: [
                      /* @__PURE__ */ jsx(
                        Skeleton,
                        {
                          active,
                          paragraph: false,
                          title: {
                            style: { marginBlockStart: 0 }
                          }
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Skeleton,
                        {
                          active,
                          paragraph: false,
                          title: {
                            style: { marginBlockStart: 8 }
                          }
                        }
                      )
                    ]
                  }
                )
              }
            )
          ]
        }
      )
    ]
  }
);
const DescriptionsItemSkeleton = ({ size, active }) => {
  const defaultCol = useMemo(
    () => ({
      lg: true,
      md: true,
      sm: false,
      xl: false,
      xs: false,
      xxl: false
    }),
    []
  );
  const col = Grid.useBreakpoint() || defaultCol;
  const colSize = (
    // @ts-ignore
    Object.keys(col).filter((key) => col[key] === true)[0] || "md"
  );
  const arraySize = size === void 0 ? MediaQueryKeyEnum[colSize] || 3 : size;
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        width: "100%",
        justifyContent: "space-between",
        display: "flex"
      },
      children: new Array(arraySize).fill(null).map((_, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            flex: 1,
            paddingInlineStart: index === 0 ? 0 : 24,
            paddingInlineEnd: index === arraySize - 1 ? 0 : 24
          },
          children: [
            /* @__PURE__ */ jsx(
              Skeleton,
              {
                active,
                paragraph: false,
                title: {
                  style: { marginBlockStart: 0 }
                }
              }
            ),
            /* @__PURE__ */ jsx(
              Skeleton,
              {
                active,
                paragraph: false,
                title: {
                  style: { marginBlockStart: 8 }
                }
              }
            ),
            /* @__PURE__ */ jsx(
              Skeleton,
              {
                active,
                paragraph: false,
                title: {
                  style: { marginBlockStart: 8 }
                }
              }
            )
          ]
        },
        index
      ))
    }
  );
};
const TableItemSkeleton = ({
  active,
  header = false
}) => {
  const defaultCol = useMemo(
    () => ({
      lg: true,
      md: true,
      sm: false,
      xl: false,
      xs: false,
      xxl: false
    }),
    []
  );
  const col = Grid.useBreakpoint() || defaultCol;
  const colSize = Object.keys(col).filter((key) => col[key] === true)[0] || "md";
  const arraySize = MediaQueryKeyEnum[colSize] || 3;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          display: "flex",
          background: header ? "rgba(0,0,0,0.02)" : "none",
          padding: "24px 8px"
        },
        children: [
          new Array(arraySize).fill(null).map((_, index) => /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                flex: 1,
                paddingInlineStart: header && index === 0 ? 0 : 20,
                paddingInlineEnd: 32
              },
              children: /* @__PURE__ */ jsx(
                Skeleton,
                {
                  active,
                  paragraph: false,
                  title: {
                    style: {
                      margin: 0,
                      height: 24,
                      width: header ? "75px" : "100%"
                    }
                  }
                }
              )
            },
            index
          )),
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                flex: 3,
                paddingInlineStart: 32
              },
              children: /* @__PURE__ */ jsx(
                Skeleton,
                {
                  active,
                  paragraph: false,
                  title: {
                    style: { margin: 0, height: 24, width: header ? "75px" : "100%" }
                  }
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(Line, { padding: "0px 0px" })
  ] });
};
const TableSkeleton = ({ active, size = 4 }) => /* @__PURE__ */ jsxs(Card$1, { bordered: false, children: [
  /* @__PURE__ */ jsx(
    Skeleton.Button,
    {
      active,
      size: "small",
      style: { width: 100, marginBlockEnd: 16 }
    }
  ),
  /* @__PURE__ */ jsx(TableItemSkeleton, { header: true, active }),
  new Array(size).fill(null).map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ jsx(TableItemSkeleton, { active }, index)
  )),
  /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "flex-end",
        paddingBlockStart: 16
      },
      children: /* @__PURE__ */ jsx(
        Skeleton,
        {
          active,
          paragraph: false,
          title: {
            style: {
              margin: 0,
              height: 32,
              float: "right",
              maxWidth: "630px"
            }
          }
        }
      )
    }
  )
] });
const DescriptionsSkeleton = ({ active }) => /* @__PURE__ */ jsxs(
  Card$1,
  {
    bordered: false,
    style: {
      borderStartEndRadius: 0,
      borderTopLeftRadius: 0
    },
    children: [
      /* @__PURE__ */ jsx(
        Skeleton.Button,
        {
          active,
          size: "small",
          style: { width: 100, marginBlockEnd: 16 }
        }
      ),
      /* @__PURE__ */ jsx(DescriptionsItemSkeleton, { active }),
      /* @__PURE__ */ jsx(DescriptionsLargeItemSkeleton, { active })
    ]
  }
);
const DescriptionsPageSkeleton = ({
  active = true,
  pageHeader,
  list
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    style: {
      width: "100%"
    },
    children: [
      pageHeader !== false && /* @__PURE__ */ jsx(PageHeaderSkeleton, { active }),
      /* @__PURE__ */ jsx(DescriptionsSkeleton, { active }),
      list !== false && /* @__PURE__ */ jsx(Line, {}),
      list !== false && /* @__PURE__ */ jsx(TableSkeleton, { active, size: list })
    ]
  }
);

const ResultPageSkeleton = ({
  active = true,
  pageHeader
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    style: {
      width: "100%"
    },
    children: [
      pageHeader !== false && /* @__PURE__ */ jsx(PageHeaderSkeleton, { active }),
      /* @__PURE__ */ jsx(Card$1, { children: /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: 128
          },
          children: [
            /* @__PURE__ */ jsx(
              Skeleton.Avatar,
              {
                size: 64,
                style: {
                  marginBlockEnd: 32
                }
              }
            ),
            /* @__PURE__ */ jsx(
              Skeleton.Button,
              {
                active,
                style: { width: 214, marginBlockEnd: 8 }
              }
            ),
            /* @__PURE__ */ jsx(Skeleton.Button, { active, style: { width: 328 }, size: "small" }),
            /* @__PURE__ */ jsxs(
              CompoundedSpace,
              {
                style: {
                  marginBlockStart: 24
                },
                children: [
                  /* @__PURE__ */ jsx(Skeleton.Button, { active, style: { width: 116 } }),
                  /* @__PURE__ */ jsx(Skeleton.Button, { active, style: { width: 116 } })
                ]
              }
            )
          ]
        }
      ) })
    ]
  }
);

const ProSkeleton = ({ type = "list", ...rest }) => {
  if (type === "result") {
    return /* @__PURE__ */ jsx(ResultPageSkeleton, { ...rest });
  }
  if (type === "descriptions") {
    return /* @__PURE__ */ jsx(DescriptionsPageSkeleton, { ...rest });
  }
  return /* @__PURE__ */ jsx(ListPageSkeleton, { ...rest });
};

function toLowerLine(str) {
  let temp = str.replace(/[A-Z]/g, (match) => {
    return `-${match.toLowerCase()}`;
  });
  if (temp.startsWith("-")) {
    temp = temp.slice(1);
  }
  return temp;
}
const getFormCompetent = (isForm, searchConfig) => {
  if (!isForm && searchConfig !== false) {
    if (searchConfig?.filterType === "light") {
      return "LightFilter";
    }
    return "QueryFilter";
  }
  return "Form";
};
const getFromProps = (isForm, searchConfig, name) => {
  if (!isForm && name === "LightFilter") {
    return omit(
      {
        ...searchConfig
      },
      ["labelWidth", "defaultCollapsed", "filterType"]
    );
  }
  if (!isForm) {
    return omit(
      {
        labelWidth: searchConfig ? searchConfig?.labelWidth : void 0,
        defaultCollapsed: true,
        ...searchConfig
      },
      ["filterType"]
    );
  }
  return {};
};
const getFormConfigs = (isForm, formConfig) => {
  if (isForm) {
    return omit(formConfig, ["ignoreRules"]);
  }
  return { ignoreRules: true, ...formConfig };
};
const FormRender = ({
  onSubmit,
  formRef,
  dateFormatter = "string",
  type,
  columns,
  action,
  ghost,
  manualRequest,
  onReset,
  submitButtonLoading,
  search: searchConfig,
  form: formConfig,
  bordered
}) => {
  const { hashId } = useContext(ProProvider);
  const isForm = type === "form";
  const submit = async (values, firstLoad) => {
    if (onSubmit) {
      onSubmit(values, firstLoad);
    }
  };
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const columnsList = useMemo(() => {
    return columns.filter((item) => {
      if (item === ForwardTable.EXPAND_COLUMN) {
        return false;
      }
      if ((item.hideInSearch || item.search === false) && type !== "form") {
        return false;
      }
      if (type === "form" && item.hideInForm) {
        return false;
      }
      return true;
    }).map((item) => {
      const finalValueType = !item.valueType || ["textarea", "jsonCode", "code"].includes(item?.valueType) && type === "table" ? "text" : item?.valueType;
      const columnKey = item?.key || item?.dataIndex?.toString();
      return {
        ...item,
        width: void 0,
        ...item.search ? item.search : {},
        valueType: finalValueType,
        proFieldProps: {
          ...item.proFieldProps,
          proFieldKey: columnKey ? `table-field-${columnKey}` : void 0
        }
      };
    });
  }, [columns, type]);
  const className = getPrefixCls("pro-table-search");
  const formClassName = getPrefixCls("pro-table-form");
  const competentName = useMemo(
    () => getFormCompetent(isForm, searchConfig),
    [searchConfig, isForm]
  );
  const loadingProps = useMemo(
    () => ({
      submitter: {
        submitButtonProps: {
          loading: submitButtonLoading
        }
      }
    }),
    [submitButtonLoading]
  );
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: classNames(hashId, {
        [getPrefixCls("pro-card")]: true,
        [`${getPrefixCls("pro-card")}-border`]: !!bordered,
        [`${getPrefixCls("pro-card")}-bordered`]: !!bordered,
        [`${getPrefixCls("pro-card")}-ghost`]: !!ghost,
        [className]: true,
        [formClassName]: isForm,
        [getPrefixCls(`pro-table-search-${toLowerLine(competentName)}`)]: true,
        [`${className}-ghost`]: ghost,
        [searchConfig?.className]: searchConfig !== false && searchConfig?.className
      }),
      children: /* @__PURE__ */ jsx(
        BetaSchemaForm,
        {
          layoutType: competentName,
          columns: columnsList,
          type,
          ...loadingProps,
          ...getFromProps(isForm, searchConfig, competentName),
          ...getFormConfigs(isForm, formConfig || {}),
          formRef,
          action,
          dateFormatter,
          onInit: (values, form) => {
            formRef.current = form;
            if (type !== "form") {
              const pageInfo = action.current?.pageInfo;
              const {
                current = pageInfo?.current,
                pageSize = pageInfo?.pageSize
              } = values;
              action.current?.setPageInfo?.({
                ...pageInfo,
                current: parseInt(current, 10),
                pageSize: parseInt(pageSize, 10)
              });
              if (manualRequest)
                return;
              submit(values, true);
            }
          },
          onReset: (values) => {
            onReset?.(values);
          },
          onFinish: (values) => {
            submit(values, false);
          },
          initialValues: formConfig?.initialValues
        }
      )
    }
  );
};

function mergePagination(pagination, pageInfo, intl) {
  if (pagination === false) {
    return false;
  }
  const { total, current, pageSize, setPageInfo } = pageInfo;
  const defaultPagination = typeof pagination === "object" ? pagination : {};
  return {
    showTotal: (all, range) => `${intl.formatMessage({ id: "pagination.total.range", defaultMessage: "第" })} ${range[0]}-${range[1]} ${intl.formatMessage({
      id: "pagination.total.total",
      defaultMessage: "條/總共"
    })} ${all} ${intl.formatMessage({ id: "pagination.total.item", defaultMessage: "條" })}`,
    total,
    ...defaultPagination,
    current: pagination !== true && pagination ? pagination.current ?? current : current,
    pageSize: pagination !== true && pagination ? pagination.pageSize ?? pageSize : pageSize,
    onChange: (page, newPageSize) => {
      const { onChange } = pagination;
      onChange?.(page, newPageSize || 20);
      if (newPageSize !== pageSize || current !== page) {
        setPageInfo({ pageSize: newPageSize, current: page });
      }
    }
  };
}
function useActionType(ref, action, props) {
  const userAction = {
    pageInfo: action.pageInfo,
    reload: async (resetPageIndex) => {
      if (resetPageIndex) {
        await action.setPageInfo({
          current: 1
        });
      }
      await action?.reload();
    },
    reloadAndRest: async () => {
      props.onCleanSelected();
      await action.setPageInfo({
        current: 1
      });
      await action?.reload();
    },
    reset: async () => {
      await props.resetAll();
      await action?.reset?.();
      await action?.reload();
    },
    fullScreen: () => props.fullScreen(),
    clearSelected: () => props.onCleanSelected(),
    setPageInfo: (rest) => action.setPageInfo(rest)
  };
  ref.current = userAction;
}
function postDataPipeline(data, pipeline) {
  if (pipeline.filter((item) => item).length < 1) {
    return data;
  }
  return pipeline.reduce((pre, postData) => {
    return postData(pre);
  }, data);
}
const isBordered = (borderType, border) => {
  if (border === void 0) {
    return false;
  }
  if (typeof border === "boolean") {
    return border;
  }
  return border[borderType];
};
const isMergeCell = (dom) => dom && typeof dom === "object" && dom?.props?.colSpan;
const genColumnKey = (key, index) => {
  if (key) {
    return Array.isArray(key) ? key.join("-") : key.toString();
  }
  return `${index}`;
};
function parseDataIndex(dataIndex) {
  if (Array.isArray(dataIndex)) {
    return dataIndex.join(",");
  }
  return dataIndex?.toString();
}
function parseDefaultColumnConfig(columns) {
  const filter = {};
  const sort = {};
  columns.forEach((column) => {
    const dataIndex = parseDataIndex(column.dataIndex);
    if (!dataIndex) {
      return;
    }
    if (column.filters) {
      const defaultFilteredValue = column.defaultFilteredValue;
      if (defaultFilteredValue === void 0) {
        filter[dataIndex] = null;
      } else {
        filter[dataIndex] = column.defaultFilteredValue;
      }
    }
    if (column.sorter && column.defaultSortOrder) {
      sort[dataIndex] = column.defaultSortOrder;
    }
  });
  return { sort, filter };
}

class FormSearch extends React__default.Component {
  constructor() {
    super(...arguments);
    /** 查詢表單相關的配置 */
    this.onSubmit = (value, firstLoad) => {
      const {
        pagination,
        beforeSearchSubmit = (searchParams) => searchParams,
        action,
        onSubmit,
        onFormSearchSubmit
      } = this.props;
      const pageInfo = pagination ? omitUndefined({
        current: pagination.current,
        pageSize: pagination.pageSize
      }) : {};
      const submitParams = {
        ...value,
        _timestamp: Date.now(),
        ...pageInfo
      };
      const omitParams = omit(
        beforeSearchSubmit(submitParams),
        Object.keys(pageInfo)
      );
      onFormSearchSubmit(omitParams);
      if (!firstLoad) {
        action.current?.setPageInfo?.({
          current: 1
        });
      }
      if (onSubmit && !firstLoad) {
        onSubmit?.(value);
      }
    };
    this.onReset = (value) => {
      const {
        pagination,
        beforeSearchSubmit = (searchParams) => searchParams,
        action,
        onFormSearchSubmit,
        onReset
      } = this.props;
      const pageInfo = pagination ? omitUndefined({
        current: pagination.current,
        pageSize: pagination.pageSize
      }) : {};
      const omitParams = omit(
        beforeSearchSubmit({ ...value, ...pageInfo }),
        Object.keys(pageInfo)
      );
      onFormSearchSubmit(omitParams);
      action.current?.setPageInfo?.({
        current: 1
      });
      onReset?.();
    };
    /**
     * 只 Diff 需要用的 props，能減少 5 次左右的render
     *
     * @param next
     * @see 因為 hooks 每次的 setFormSearch 都是新的，所以每次都觸發 render
     * @see action 也是同樣的原因
     * @returns
     */
    this.isEqual = (next) => {
      const {
        columns,
        loading,
        formRef,
        type,
        cardBordered,
        dateFormatter,
        form,
        search,
        manualRequest
      } = this.props;
      const diffProps = {
        columns,
        loading,
        formRef,
        type,
        cardBordered,
        dateFormatter,
        form,
        search,
        manualRequest
      };
      return !isDeepEqualReact(diffProps, {
        columns: next.columns,
        formRef: next.formRef,
        loading: next.loading,
        type: next.type,
        cardBordered: next.cardBordered,
        dateFormatter: next.dateFormatter,
        form: next.form,
        search: next.search,
        manualRequest: next.manualRequest
      });
    };
    this.shouldComponentUpdate = (next) => {
      return this.isEqual(next);
    };
    this.render = () => {
      const {
        columns,
        loading,
        formRef,
        type,
        action,
        cardBordered,
        dateFormatter,
        form,
        search,
        pagination,
        ghost,
        manualRequest
      } = this.props;
      const pageInfo = pagination ? omitUndefined({
        current: pagination.current,
        pageSize: pagination.pageSize
      }) : {};
      return /* @__PURE__ */ jsx(
        FormRender,
        {
          submitButtonLoading: loading,
          columns,
          type,
          ghost,
          formRef,
          onSubmit: this.onSubmit,
          manualRequest,
          onReset: this.onReset,
          dateFormatter,
          search,
          form: {
            autoFocusFirstInput: false,
            ...form,
            extraUrlParams: {
              ...pageInfo,
              ...form?.extraUrlParams
            }
          },
          action,
          bordered: isBordered("search", cardBordered)
        }
      );
    };
  }
}

function useContainer(props = {}) {
  const actionRef = useRef();
  const rootDomRef = useRef(null);
  const prefixNameRef = useRef();
  const propsRef = useRef();
  const [keyWords, setKeyWords] = useState("");
  const sortKeyColumns = useRef([]);
  const [tableSize, setTableSize] = useMergedState(
    () => props.size || props.defaultSize || "medium",
    {
      value: props.size,
      onChange: props.onSizeChange
    }
  );
  const defaultColumnKeyMap = useMemo(() => {
    if (props?.columnsState?.defaultValue)
      return props.columnsState.defaultValue;
    const columnKeyMap = {};
    props.columns?.forEach(({ key, dataIndex, fixed, disable }, index) => {
      const columnKey = genColumnKey(key ?? dataIndex, index);
      if (columnKey) {
        columnKeyMap[columnKey] = {
          show: true,
          fixed,
          disable
        };
      }
    });
    return columnKeyMap;
  }, [props.columns]);
  const [columnsMap, setColumnsMap] = useMergedState(
    () => {
      const { persistenceType, persistenceKey } = props.columnsState || {};
      if (persistenceKey && persistenceType && typeof window !== "undefined") {
        const storage = window[persistenceType];
        try {
          const storageValue = storage?.getItem(persistenceKey);
          if (storageValue) {
            return JSON.parse(storageValue);
          }
        } catch (error) {
          console.warn(error);
        }
      }
      return props.columnsStateMap || props.columnsState?.value || props.columnsState?.defaultValue || defaultColumnKeyMap;
    },
    {
      value: props.columnsState?.value || props.columnsStateMap,
      onChange: props.columnsState?.onChange || props.onColumnsStateChange
    }
  );
  useEffect(() => {
    const { persistenceType, persistenceKey } = props.columnsState || {};
    if (persistenceKey && persistenceType && typeof window !== "undefined") {
      const storage = window[persistenceType];
      try {
        const storageValue = storage?.getItem(persistenceKey);
        if (storageValue) {
          setColumnsMap(JSON.parse(storageValue));
        } else {
          setColumnsMap(defaultColumnKeyMap);
        }
      } catch (error) {
        console.warn(error);
      }
    }
  }, [
    props.columnsState?.persistenceKey,
    props.columnsState?.persistenceType,
    defaultColumnKeyMap
  ]);
  noteOnce(
    !props.columnsStateMap,
    "columnsStateMap已經廢棄，請使用 columnsState.value 替換"
  );
  noteOnce(
    !props.columnsStateMap,
    "columnsStateMap has been discarded, please use columnsState.value replacement"
  );
  const clearPersistenceStorage = useCallback(() => {
    const { persistenceType, persistenceKey } = props.columnsState || {};
    if (!persistenceKey || !persistenceType || typeof window === "undefined")
      return;
    const storage = window[persistenceType];
    try {
      storage?.removeItem(persistenceKey);
    } catch (error) {
      console.warn(error);
    }
  }, [props.columnsState]);
  useEffect(() => {
    if (!props.columnsState?.persistenceKey || !props.columnsState?.persistenceType) {
      return;
    }
    if (typeof window === "undefined")
      return;
    const { persistenceType, persistenceKey } = props.columnsState;
    const storage = window[persistenceType];
    try {
      storage?.setItem(persistenceKey, JSON.stringify(columnsMap));
    } catch (error) {
      console.warn(error);
      clearPersistenceStorage();
    }
  }, [
    props.columnsState?.persistenceKey,
    columnsMap,
    props.columnsState?.persistenceType
  ]);
  const renderValue = {
    action: actionRef.current,
    setAction: (newAction) => {
      actionRef.current = newAction;
    },
    sortKeyColumns: sortKeyColumns.current,
    setSortKeyColumns: (keys) => {
      sortKeyColumns.current = keys;
    },
    propsRef,
    columnsMap,
    keyWords,
    setKeyWords: (k) => setKeyWords(k),
    setTableSize,
    tableSize,
    prefixName: prefixNameRef.current,
    setPrefixName: (name) => {
      prefixNameRef.current = name;
    },
    setColumnsMap,
    columns: props.columns,
    rootDomRef,
    clearPersistenceStorage,
    defaultColumnKeyMap
  };
  Object.defineProperty(renderValue, "prefixName", {
    get: () => prefixNameRef.current
  });
  Object.defineProperty(renderValue, "sortKeyColumns", {
    get: () => sortKeyColumns.current
  });
  Object.defineProperty(renderValue, "action", {
    get: () => actionRef.current
  });
  return renderValue;
}
const TableContext = createContext({});
const Container = (props) => {
  const value = useContainer(props.initValue);
  return /* @__PURE__ */ jsx(TableContext.Provider, { value, children: props.children });
};

const genProStyle = (token) => {
  return {
    [token.componentCls]: {
      width: "auto",
      "&-title": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "32px"
      },
      "&-overlay": {
        [`${token.ipassCls}-popover-inner-content`]: {
          width: "200px",
          paddingBlock: 0,
          paddingInline: 0,
          paddingBlockEnd: 8
        },
        [`${token.ipassCls}-tree-node-content-wrapper:hover`]: {
          backgroundColor: "transparent"
        },
        [`${token.ipassCls}-tree-draggable-icon`]: { cursor: "grab" },
        [`${token.ipassCls}-tree-treenode`]: {
          alignItems: "center",
          "&:hover": {
            [`${token.componentCls}-list-item-option`]: {
              display: "block"
            }
          },
          [`${token.ipassCls}-tree-checkbox`]: {
            marginInlineEnd: "4px"
          },
          [`${token.ipassCls}-tree-title`]: {
            width: "100%"
          }
        }
      }
    },
    [`${token.componentCls}-action-rest-button`]: {
      color: token.colorPrimary
    },
    [`${token.componentCls}-list`]: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      paddingBlockStart: 8,
      [`&${token.componentCls}-list-group`]: {
        paddingBlockStart: 0
      },
      "&-title": {
        marginBlockStart: "6px",
        marginBlockEnd: "6px",
        paddingInlineStart: "24px",
        color: token.colorTextSecondary,
        fontSize: "12px"
      },
      "&-item": {
        display: "flex",
        alignItems: "center",
        maxHeight: 24,
        justifyContent: "space-between",
        "&-title": {
          flex: 1,
          maxWidth: 80,
          textOverflow: "ellipsis",
          overflow: "hidden",
          wordBreak: "break-all",
          whiteSpace: "nowrap"
        },
        "&-option": {
          display: "none",
          float: "right",
          cursor: "pointer",
          "> span": {
            "> span.muiicon": {
              color: token.colorPrimary
            }
          },
          "> span + span": {
            marginInlineStart: 4
          }
        }
      }
    }
  };
};
function useStyle$3(prefixCls) {
  return useStyle$A("ColumnSetting", (token) => {
    const proToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genProStyle(proToken)];
  });
}

const ToolTipIcon = ({ title, show, children, columnKey, fixed }) => {
  const { columnsMap, setColumnsMap } = useContext(TableContext);
  if (!show) {
    return null;
  }
  return /* @__PURE__ */ jsx(Tooltip, { title, children: /* @__PURE__ */ jsx(
    "span",
    {
      onClick: (e) => {
        e.stopPropagation();
        e.preventDefault();
        const config = columnsMap[columnKey] || {};
        const columnKeyMap = {
          ...columnsMap,
          [columnKey]: { ...config, fixed }
        };
        setColumnsMap(columnKeyMap);
      },
      children
    }
  ) });
};
const CheckboxListItem = ({ columnKey, isLeaf, title, className, fixed, showListItemOption }) => {
  const intl = useIntl();
  const { hashId } = useContext(ProProvider);
  const dom = /* @__PURE__ */ jsxs("span", { className: `${className}-list-item-option ${hashId}`.trim(), children: [
    /* @__PURE__ */ jsx(
      ToolTipIcon,
      {
        columnKey,
        fixed: "left",
        title: intl.formatMessage({
          id: "tableToolBar.leftPin",
          defaultMessage: "固定在列首"
        }),
        show: fixed !== "left",
        children: /* @__PURE__ */ jsx(VerticalAlignTop, {})
      }
    ),
    /* @__PURE__ */ jsx(
      ToolTipIcon,
      {
        columnKey,
        fixed: void 0,
        title: intl.formatMessage({
          id: "tableToolBar.noFixed",
          defaultMessage: "不固定"
        }),
        show: !!fixed,
        children: /* @__PURE__ */ jsx(VerticalAlignCenter, {})
      }
    ),
    /* @__PURE__ */ jsx(
      ToolTipIcon,
      {
        columnKey,
        fixed: "right",
        title: intl.formatMessage({
          id: "tableToolBar.rightPin",
          defaultMessage: "固定在列尾"
        }),
        show: fixed !== "right",
        children: /* @__PURE__ */ jsx(VerticalAlignBottomIcon, {})
      }
    )
  ] });
  return /* @__PURE__ */ jsxs("span", { className: `${className}-list-item ${hashId}`.trim(), children: [
    /* @__PURE__ */ jsx("div", { className: `${className}-list-item-title ${hashId}`.trim(), children: title }),
    showListItemOption && !isLeaf ? dom : null
  ] }, columnKey);
};
const CheckboxList = ({
  list,
  draggable,
  checkable,
  showListItemOption,
  className,
  showTitle = true,
  title: listTitle,
  listHeight = 280
}) => {
  const { hashId } = useContext(ProProvider);
  const { columnsMap, setColumnsMap, sortKeyColumns, setSortKeyColumns } = useContext(TableContext);
  const show = list && list.length > 0;
  const treeDataConfig = useMemo(() => {
    if (!show)
      return {};
    const checkedKeys = [];
    const treeMap = /* @__PURE__ */ new Map();
    const loopData = (data, parentConfig) => data.map(({ key, dataIndex, children, ...rest }) => {
      const columnKey = genColumnKey(
        key,
        [parentConfig?.columnKey, rest.index].filter(Boolean).join("-")
      );
      const config = columnsMap[columnKey || "null"] || { show: true };
      if (config.show !== false && !children) {
        checkedKeys.push(columnKey);
      }
      const item = {
        key: columnKey,
        ...omit(rest, ["className"]),
        selectable: false,
        disabled: config.disable === true,
        disableCheckbox: typeof config.disable === "boolean" ? config.disable : config.disable?.checkbox,
        isLeaf: parentConfig ? true : void 0
      };
      if (children) {
        item.children = loopData(children, {
          ...config,
          columnKey
        });
        if (item.children?.every(
          (childrenItem) => checkedKeys?.includes(childrenItem.key)
        )) {
          checkedKeys.push(columnKey);
        }
      }
      treeMap.set(key, item);
      return item;
    });
    return { list: loopData(list), keys: checkedKeys, map: treeMap };
  }, [columnsMap, list, show]);
  const move = useRefFunction(
    (id, targetId, dropPosition) => {
      const newMap = { ...columnsMap };
      const newColumns = [...sortKeyColumns];
      const findIndex = newColumns.findIndex((columnKey) => columnKey === id);
      const targetIndex = newColumns.findIndex(
        (columnKey) => columnKey === targetId
      );
      const isDownWard = dropPosition > findIndex;
      if (findIndex < 0)
        return;
      const targetItem = newColumns[findIndex];
      newColumns.splice(findIndex, 1);
      if (dropPosition === 0) {
        newColumns.unshift(targetItem);
      } else {
        newColumns.splice(
          isDownWard ? targetIndex : targetIndex + 1,
          0,
          targetItem
        );
      }
      newColumns.forEach((key, order) => {
        newMap[key] = { ...newMap[key] || {}, order };
      });
      setColumnsMap(newMap);
      setSortKeyColumns(newColumns);
    }
  );
  const onCheckTree = useRefFunction((e) => {
    const newColumnMap = { ...columnsMap };
    const loopSetShow = (key) => {
      const newSetting = { ...newColumnMap[key] };
      newSetting.show = e.checked;
      if (treeDataConfig.map?.get(key)?.children) {
        treeDataConfig.map.get(key)?.children?.forEach((item) => loopSetShow(item.key));
      }
      newColumnMap[key] = newSetting;
    };
    loopSetShow(e.node.key);
    setColumnsMap({ ...newColumnMap });
  });
  if (!show) {
    return null;
  }
  const listDom = /* @__PURE__ */ jsx(
    Tree,
    {
      itemHeight: 24,
      draggable: draggable && !!treeDataConfig.list?.length && treeDataConfig.list?.length > 1,
      checkable,
      onDrop: (info) => {
        const dropKey = info.node.key;
        const dragKey = info.dragNode.key;
        const { dropPosition, dropToGap } = info;
        const position = dropPosition === -1 || !dropToGap ? dropPosition + 1 : dropPosition;
        move(dragKey, dropKey, position);
      },
      blockNode: true,
      onCheck: (_, e) => onCheckTree(e),
      checkedKeys: treeDataConfig.keys,
      showLine: false,
      titleRender: (_node) => {
        const node = { ..._node, children: void 0 };
        if (!node.title)
          return null;
        return /* @__PURE__ */ jsx(
          CheckboxListItem,
          {
            className,
            ...node,
            showListItemOption,
            title: runFunction(node.title, node),
            columnKey: node.key
          }
        );
      },
      height: listHeight,
      treeData: treeDataConfig.list?.map(
        ({
          disabled,
          ...config
        }) => config
      )
    }
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    showTitle && /* @__PURE__ */ jsx("span", { className: `${className}-list-title ${hashId}`.trim(), children: listTitle }),
    listDom
  ] });
};
const GroupCheckboxList = ({
  localColumns,
  className,
  draggable,
  checkable,
  showListItemOption,
  listsHeight
}) => {
  const { hashId } = useContext(ProProvider);
  const rightList = [];
  const leftList = [];
  const list = [];
  const intl = useIntl();
  localColumns.forEach((item) => {
    if (item.hideInSetting) {
      return;
    }
    const { fixed } = item;
    if (fixed === "left") {
      leftList.push(item);
      return;
    }
    if (fixed === "right") {
      rightList.push(item);
      return;
    }
    list.push(item);
  });
  const showRight = rightList && rightList.length > 0;
  const showLeft = leftList && leftList.length > 0;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: classNames(`${className}-list`, hashId, {
        [`${className}-list-group`]: showRight || showLeft
      }),
      children: [
        /* @__PURE__ */ jsx(
          CheckboxList,
          {
            title: intl.formatMessage({
              id: "tableToolBar.leftFixedTitle",
              defaultMessage: "固定在左側"
            }),
            list: leftList,
            draggable,
            checkable,
            showListItemOption,
            className,
            listHeight: listsHeight
          }
        ),
        /* @__PURE__ */ jsx(
          CheckboxList,
          {
            list,
            draggable,
            checkable,
            showListItemOption,
            title: intl.formatMessage({
              id: "tableToolBar.noFixedTitle",
              defaultMessage: "不固定"
            }),
            showTitle: showLeft || showRight,
            className,
            listHeight: listsHeight
          }
        ),
        /* @__PURE__ */ jsx(
          CheckboxList,
          {
            title: intl.formatMessage({
              id: "tableToolBar.rightFixedTitle",
              defaultMessage: "固定在右側"
            }),
            list: rightList,
            draggable,
            checkable,
            showListItemOption,
            className,
            listHeight: listsHeight
          }
        )
      ]
    }
  );
};
function ColumnSetting(props) {
  const columnRef = useRef(null);
  const counter = useContext(TableContext);
  const localColumns = props.columns;
  const { checkedReset = true } = props;
  const { columnsMap, setColumnsMap, clearPersistenceStorage } = counter;
  useEffect(() => {
    if (counter.propsRef.current?.columnsState?.value) {
      columnRef.current = JSON.parse(
        JSON.stringify(counter.propsRef.current?.columnsState?.value || {})
      );
    }
  }, []);
  const setAllSelectAction = useRefFunction((show = true) => {
    const columnKeyMap = {};
    const loopColumns = (columns) => {
      columns.forEach(({ key, fixed, index, children, disable }) => {
        const columnKey = genColumnKey(key, index);
        if (columnKey) {
          columnKeyMap[columnKey] = {
            // 子節點 disable 時，不修改節點顯示狀態
            show: disable ? columnsMap[columnKey]?.show : show,
            fixed,
            disable,
            order: columnsMap[columnKey]?.order
          };
        }
        if (children) {
          loopColumns(children);
        }
      });
    };
    loopColumns(localColumns);
    setColumnsMap(columnKeyMap);
  });
  const checkedAll = useRefFunction((e) => {
    if (e.target.checked) {
      setAllSelectAction();
    } else {
      setAllSelectAction(false);
    }
  });
  const clearClick = useRefFunction(() => {
    clearPersistenceStorage?.();
    setColumnsMap(
      counter.propsRef.current?.columnsState?.defaultValue || columnRef.current || counter.defaultColumnKeyMap
    );
  });
  const unCheckedKeys = Object.values(columnsMap).filter(
    (value) => !value || value.show === false
  );
  const indeterminate = unCheckedKeys.length > 0 && unCheckedKeys.length !== localColumns.length;
  const intl = useIntl();
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const className = getPrefixCls("pro-table-column-setting");
  const { wrapSSR, hashId } = useStyle$3(className);
  return wrapSSR(
    /* @__PURE__ */ jsx(
      Popover,
      {
        arrow: false,
        title: /* @__PURE__ */ jsxs("div", { className: `${className}-title ${hashId}`.trim(), children: [
          props.checkable === false ? /* @__PURE__ */ jsx("div", {}) : /* @__PURE__ */ jsx(
            Checkbox,
            {
              indeterminate,
              checked: unCheckedKeys.length === 0 && unCheckedKeys.length !== localColumns.length,
              onChange: (e) => {
                checkedAll(e);
              },
              children: intl.formatMessage({
                id: "tableToolBar.columnDisplay",
                defaultMessage: "顯示列"
              })
            }
          ),
          checkedReset ? /* @__PURE__ */ jsx(
            "a",
            {
              onClick: clearClick,
              className: `${className}-action-rest-button ${hashId}`.trim(),
              children: intl.formatMessage({
                id: "tableToolBar.reset",
                defaultMessage: "重設"
              })
            }
          ) : null,
          props?.extra ? /* @__PURE__ */ jsx(CompoundedSpace, { size: 12, align: "center", children: props.extra }) : null
        ] }),
        overlayClassName: `${className}-overlay ${hashId}`.trim(),
        trigger: "click",
        placement: "bottomRight",
        content: /* @__PURE__ */ jsx(
          GroupCheckboxList,
          {
            checkable: props.checkable ?? true,
            draggable: props.draggable ?? true,
            showListItemOption: props.showListItemOption ?? true,
            className,
            localColumns,
            listsHeight: props.listsHeight
          }
        ),
        children: props.children || /* @__PURE__ */ jsx(
          Tooltip,
          {
            title: intl.formatMessage({
              id: "tableToolBar.columnSetting",
              defaultMessage: "列設定"
            }),
            children: props.settingIcon ?? /* @__PURE__ */ jsx(SettingsIcon, {})
          }
        )
      }
    )
  );
}

const HeaderMenu = (props) => {
  const { hashId } = useContext(ProProvider);
  const [anchorEl, setAnchorEl] = React__default.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const {
    items = [],
    type = "inline",
    prefixCls,
    activeKey: propActiveKey,
    defaultActiveKey
  } = props;
  const [activeKey, setActiveKey] = useMergedState(
    propActiveKey || defaultActiveKey,
    {
      value: propActiveKey,
      onChange: props.onChange
    }
  );
  if (items.length < 1) {
    return null;
  }
  const activeItem = items.find((item) => {
    return item.key === activeKey;
  }) || items[0];
  if (type === "inline") {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: classNames(
          `${prefixCls}-menu`,
          `${prefixCls}-inline-menu`,
          hashId
        ),
        children: items.map((item, index) => /* @__PURE__ */ jsx(
          "div",
          {
            onClick: () => {
              setActiveKey(item.key);
            },
            className: classNames(
              `${prefixCls}-inline-menu-item`,
              activeItem.key === item.key ? `${prefixCls}-inline-menu-item-active` : void 0,
              hashId
            ),
            children: item.label
          },
          item.key || index
        ))
      }
    );
  }
  if (type === "tab") {
    return /* @__PURE__ */ jsx(
      Tabs,
      {
        items: items.map((item) => ({
          ...item,
          key: item.key?.toString()
        })),
        activeKey: activeItem.key,
        onTabClick: (key) => setActiveKey(key),
        children: items?.map((item, index) => {
          return /* @__PURE__ */ createElement(
            Tabs.TabPane,
            {
              ...item,
              key: item.key || index,
              tab: item.label
            }
          );
        })
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: classNames(`${prefixCls}-menu`, `${prefixCls}-dropdownmenu`),
      children: [
        /* @__PURE__ */ jsxs(CompoundedSpace, { className: `${prefixCls}-dropdownmenu-label`, onClick: handleClick, children: [
          activeItem.label,
          /* @__PURE__ */ jsx(ExpandMoreIcon, {})
        ] }),
        /* @__PURE__ */ jsx(
          Menu$1,
          {
            anchorEl,
            open,
            onClose: handleClose,
            MenuListProps: {
              "aria-labelledby": "basic-button"
            },
            children: items.map((item, index) => /* @__PURE__ */ jsx(
              MenuItem,
              {
                disabled: item.disabled,
                selected: activeItem.key === item.key,
                onClick: () => {
                  setActiveKey(item.key);
                  handleClose();
                },
                children: item.label
              },
              item.key
            ))
          }
        )
      ]
    }
  );
};

const genProListStyle$2 = (token) => {
  return {
    [token.componentCls]: {
      lineHeight: "1",
      "&-container": {
        display: "flex",
        justifyContent: "space-between",
        paddingBlock: token.padding,
        paddingInline: 0,
        "&-mobile": { flexDirection: "column" }
      },
      "&-title": {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        color: token.colorTextHeading,
        fontWeight: "500",
        fontSize: token.fontSizeLG
      },
      "&-search:not(:last-child)": {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
      },
      "&-setting-item": {
        margin: 0,
        color: token.colorIconHover,
        fontSize: token.fontSizeLG,
        cursor: "pointer",
        "> span": { display: "block", width: "100%", height: "100%" },
        "&:hover": {
          color: token.colorPrimary
        }
      },
      "&-left": {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: token.marginXS,
        justifyContent: "flex-start",
        maxWidth: "calc(100% - 200px)",
        flex: 1,
        [`${token.ipassCls}-tabs`]: {
          width: "100%"
        },
        "&-has-tabs": {
          overflow: "hidden"
        }
      },
      "&-right": {
        flex: 1,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-end",
        gap: token.marginXS
      },
      "&-extra-line": { marginBlockEnd: token.margin },
      "&-setting-items": {
        display: "flex",
        gap: token.marginXS / 4,
        lineHeight: "32px",
        alignItems: "center"
      },
      "&-filter": {
        "&:not(:last-child)": { marginInlineEnd: token.margin },
        display: "flex",
        alignItems: "center",
        [`div$${token.ipassCls}-pro-table-search`]: {
          marginBlock: 0,
          marginInline: 0,
          paddingBlock: 0,
          paddingInline: 0
        }
      },
      "&-inline-menu-item": {
        display: "inline-block",
        marginInlineEnd: token.marginLG,
        cursor: "pointer",
        opacity: "0.75",
        "&-active": { fontWeight: "bold", opacity: "1" }
      },
      [`${token.ipassCls}-tabs-top > ${token.ipassCls}-tabs-nav`]: {
        marginBlockEnd: 0,
        "&::before": { borderBlockEnd: 0 },
        [`${token.ipassCls}-tabs-nav-list`]: {
          marginBlockStart: 0,
          "${token.ipassCls}-tabs-tab": {
            paddingBlockStart: 0
          }
        }
      },
      "&-dropdownmenu-label": {
        fontWeight: "bold",
        fontSize: token.fontSizeIcon,
        textAlign: "center",
        cursor: "pointer"
      },
      "@media (max-width: 768px)": {
        [token.componentCls]: {
          "&-container": {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column"
          },
          "&-left": { marginBlockEnd: "16px", maxWidth: "100%" }
        }
      }
    }
  };
};
function useStyle$2(prefixCls) {
  return useStyle$A("ProTableListToolBar", (token) => {
    const proListToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genProListStyle$2(proListToken)];
  });
}

function getSettingItem(setting) {
  if (React__default.isValidElement(setting)) {
    return setting;
  }
  if (setting) {
    const settingConfig = setting;
    const { icon, tooltip, onClick, key } = settingConfig;
    if (icon && tooltip) {
      return /* @__PURE__ */ jsx(Tooltip, { title: tooltip, children: /* @__PURE__ */ jsx(
        "span",
        {
          onClick: () => {
            if (onClick) {
              onClick(key);
            }
          },
          children: icon
        },
        key
      ) });
    }
    return icon;
  }
  return null;
}
const ListToolBarTabBar = ({ prefixCls, tabs = {}, multipleLine, filtersNode }) => {
  if (!multipleLine)
    return null;
  return /* @__PURE__ */ jsx("div", { className: `${prefixCls}-extra-line`, children: tabs.items && tabs.items.length ? /* @__PURE__ */ jsx(
    Tabs,
    {
      style: {
        width: "100%"
      },
      defaultActiveKey: tabs.defaultActiveKey,
      activeKey: tabs.activeKey,
      items: tabs.items.map((item, index) => ({
        label: item.tab,
        ...item,
        key: item.key?.toString() || index?.toString()
      })),
      onChange: tabs.onChange,
      tabBarExtraContent: filtersNode,
      children: tabs.items?.map((item, index) => /* @__PURE__ */ createElement(Tabs.TabPane, { ...item, key: item.key || index, tab: item.tab }))
    }
  ) : filtersNode });
};
const ListToolBar = ({
  prefixCls: customizePrefixCls,
  title,
  subTitle,
  tooltip,
  className,
  style,
  search,
  onSearch,
  multipleLine = false,
  filter,
  actions = [],
  settings = [],
  tabs = {},
  menu
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const { token } = proTheme.useToken();
  const prefixCls = getPrefixCls("pro-table-list-toolbar", customizePrefixCls);
  const { wrapSSR, hashId } = useStyle$2(prefixCls);
  const intl = useIntl();
  const [isMobile, setIsMobile] = useState(false);
  const placeholder = intl.formatMessage({
    id: "tableForm.inputPlaceholder",
    defaultMessage: "請輸入"
  });
  const searchNode = useMemo(() => {
    if (!search) {
      return null;
    }
    if (React__default.isValidElement(search)) {
      return search;
    }
    return /* @__PURE__ */ jsx(
      Input.Search,
      {
        style: { width: 200 },
        placeholder,
        ...search,
        onSearch: async (...restParams) => {
          const success = await search.onSearch?.(...restParams);
          if (success !== false) {
            onSearch?.(restParams?.[0]);
          }
        }
      }
    );
  }, [placeholder, onSearch, search]);
  const filtersNode = useMemo(() => {
    if (filter)
      return /* @__PURE__ */ jsx("div", { className: `${prefixCls}-filter ${hashId}`.trim(), children: filter });
    return null;
  }, [filter, hashId, prefixCls]);
  const hasTitle = useMemo(
    () => menu || title || subTitle || tooltip,
    [menu, subTitle, title, tooltip]
  );
  const actionDom = useMemo(() => {
    if (!Array.isArray(actions)) {
      return actions;
    }
    if (actions.length < 1) {
      return null;
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: token.marginXS
        },
        children: actions.map((action, index) => {
          if (!React__default.isValidElement(action)) {
            return /* @__PURE__ */ jsx(React__default.Fragment, { children: action }, index);
          }
          return React__default.cloneElement(action, {
            // eslint-disable-next-line react/no-array-index-key
            key: index,
            ...action?.props
          });
        })
      }
    );
  }, [actions]);
  const hasRight = useMemo(() => {
    return hasTitle && searchNode || !multipleLine && filtersNode || actionDom || settings?.length;
  }, [
    actionDom,
    filtersNode,
    hasTitle,
    multipleLine,
    searchNode,
    settings?.length
  ]);
  const hasLeft = useMemo(
    () => tooltip || title || subTitle || menu || !hasTitle && searchNode,
    [hasTitle, menu, searchNode, subTitle, title, tooltip]
  );
  const leftTitleDom = useMemo(() => {
    if (!hasLeft && hasRight) {
      return /* @__PURE__ */ jsx("div", { className: `${prefixCls}-left ${hashId}`.trim() });
    }
    if (!menu && (hasTitle || !searchNode)) {
      return /* @__PURE__ */ jsx("div", { className: `${prefixCls}-left ${hashId}`.trim(), children: /* @__PURE__ */ jsx("div", { className: `${prefixCls}-title ${hashId}`.trim(), children: /* @__PURE__ */ jsx(LabelIconTip, { tooltip, label: title, subTitle }) }) });
    }
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: classNames(`${prefixCls}-left`, hashId, {
          [`${prefixCls}-left-has-tabs`]: menu?.type === "tab",
          [`${prefixCls}-left-has-dropdown`]: menu?.type === "dropdown",
          [`${prefixCls}-left-has-inline-menu`]: menu?.type === "inline"
        }),
        children: [
          hasTitle && !menu && /* @__PURE__ */ jsx("div", { className: `${prefixCls}-title ${hashId}`.trim(), children: /* @__PURE__ */ jsx(LabelIconTip, { tooltip, label: title, subTitle }) }),
          menu && // 這裡面實現了 tabs 的邏輯
          /* @__PURE__ */ jsx(HeaderMenu, { ...menu, prefixCls }),
          !hasTitle && searchNode ? /* @__PURE__ */ jsx("div", { className: `${prefixCls}-search ${hashId}`.trim(), children: searchNode }) : null
        ]
      }
    );
  }, [
    hasLeft,
    hasRight,
    hasTitle,
    hashId,
    menu,
    prefixCls,
    searchNode,
    subTitle,
    title,
    tooltip
  ]);
  const rightTitleDom = useMemo(() => {
    if (!hasRight)
      return null;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: `${prefixCls}-right ${hashId}`.trim(),
        style: isMobile ? {} : { alignItems: "center" },
        children: [
          !multipleLine ? filtersNode : null,
          hasTitle && searchNode ? /* @__PURE__ */ jsx("div", { className: `${prefixCls}-search ${hashId}`.trim(), children: searchNode }) : null,
          actionDom,
          settings?.length ? /* @__PURE__ */ jsx("div", { className: `${prefixCls}-setting-items ${hashId}`.trim(), children: settings.map((setting, index) => {
            const settingItem = getSettingItem(setting);
            return (
              // eslint-disable-next-line react/no-array-index-key
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `${prefixCls}-setting-item ${hashId}`.trim(),
                  children: settingItem
                },
                index
              )
            );
          }) }) : null
        ]
      }
    );
  }, [
    hasRight,
    prefixCls,
    hashId,
    isMobile,
    hasTitle,
    searchNode,
    multipleLine,
    filtersNode,
    actionDom,
    settings
  ]);
  const titleNode = useMemo(() => {
    if (!hasRight && !hasLeft)
      return null;
    const containerClassName = classNames(`${prefixCls}-container`, hashId, {
      [`${prefixCls}-container-mobile`]: isMobile
    });
    return /* @__PURE__ */ jsxs("div", { className: containerClassName, children: [
      leftTitleDom,
      rightTitleDom
    ] });
  }, [
    hasLeft,
    hasRight,
    hashId,
    isMobile,
    leftTitleDom,
    prefixCls,
    rightTitleDom
  ]);
  return wrapSSR(
    /* @__PURE__ */ jsx(
      ResizeObserver,
      {
        onResize: (size) => {
          if (size.width < 375 !== isMobile) {
            setIsMobile(size.width < 375);
          }
        },
        children: /* @__PURE__ */ jsxs("div", { style, className: classNames(prefixCls, hashId, className), children: [
          titleNode,
          /* @__PURE__ */ jsx(
            ListToolBarTabBar,
            {
              filtersNode,
              prefixCls,
              tabs,
              multipleLine
            }
          )
        ] })
      }
    )
  );
};

const DensityIcon = () => {
  const counter = useContext(TableContext);
  const intl = useIntl();
  const [anchorEl, setAnchorEl] = React__default.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const items = [
    {
      key: "large",
      label: intl.formatMessage({ id: "tableToolBar.densityLarger", defaultMessage: "預設" })
    },
    {
      key: "medium",
      label: intl.formatMessage({ id: "tableToolBar.densityMiddle", defaultMessage: "中等" })
    },
    {
      key: "small",
      label: intl.formatMessage({ id: "tableToolBar.densitySmall", defaultMessage: "緊湊" })
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Tooltip, { title: intl.formatMessage({ id: "tableToolBar.density", defaultMessage: "表格密度" }), children: /* @__PURE__ */ jsx(IconButton, { onClick: handleClick, children: /* @__PURE__ */ jsx(HeightIcon, {}) }) }),
    /* @__PURE__ */ jsx(
      Menu$1,
      {
        anchorEl,
        open,
        onClose: handleClose,
        MenuListProps: {
          "aria-labelledby": "basic-button"
        },
        children: items.map((item, index) => /* @__PURE__ */ jsx(
          MenuItem,
          {
            selected: counter.tableSize === item.key,
            onClick: () => {
              counter.setTableSize?.(item.key);
              handleClose();
            },
            children: item.label
          },
          item.key
        ))
      }
    )
  ] });
};
const DensityIcon$1 = React__default.memo(DensityIcon);

const FullScreenIcon = () => {
  const intl = useIntl();
  const [fullscreen, setFullscreen] = useState(false);
  useEffect(() => {
    if (!isBrowser()) {
      return;
    }
    document.onfullscreenchange = () => {
      setFullscreen(!!document.fullscreenElement);
    };
  }, []);
  return fullscreen ? /* @__PURE__ */ jsx(Tooltip, { title: intl.formatMessage({ id: "tableToolBar.exitFullScreen", defaultMessage: "全螢幕" }), children: /* @__PURE__ */ jsx(FullscreenExitIcon, {}) }) : /* @__PURE__ */ jsx(Tooltip, { title: intl.formatMessage({ id: "tableToolBar.fullScreen", defaultMessage: "全螢幕" }), children: /* @__PURE__ */ jsx(FullscreenIcon, {}) });
};
const FullScreenIcon$1 = React__default.memo(FullScreenIcon);

function getButtonText({
  intl
}, options) {
  return {
    reload: {
      text: intl.formatMessage({
        id: "tableToolBar.reload",
        defaultMessage: "更新"
      }),
      icon: options.reloadIcon ?? /* @__PURE__ */ jsx(RefreshIcon, {})
    },
    fullScreen: {
      text: intl.formatMessage({
        id: "tableToolBar.fullScreen",
        defaultMessage: "全螢幕"
      }),
      icon: /* @__PURE__ */ jsx(FullScreenIcon$1, {})
    }
  };
}
function renderDefaultOption(options, defaultOptions, actions, columns) {
  return Object.keys(options).filter((item) => item).map((key) => {
    const value = options[key];
    if (!value) {
      return null;
    }
    let onClick = value === true ? defaultOptions[key] : (event) => value?.(event, actions.current);
    if (typeof onClick !== "function") {
      onClick = () => {
      };
    }
    if (key === "setting") {
      return /* @__PURE__ */ jsx(IconButton, { children: /* @__PURE__ */ createElement(
        ColumnSetting,
        {
          ...options[key],
          columns,
          key
        }
      ) }, `table-toolbar-iconbutton-${key}`);
    }
    if (key === "fullScreen") {
      return /* @__PURE__ */ jsx(IconButton, { onClick, children: /* @__PURE__ */ jsx(FullScreenIcon$1, {}) }, `table-toolbar-iconbutton-${key}`);
    }
    if (key === "density") {
      return /* @__PURE__ */ jsx(DensityIcon$1, {}, `table-toolbar-iconbutton-${key}`);
    }
    const optionItem = getButtonText(defaultOptions, options)[key];
    if (optionItem) {
      return /* @__PURE__ */ jsx(Tooltip, { title: optionItem.text, children: /* @__PURE__ */ jsx(IconButton, { onClick, children: optionItem.icon }, `table-toolbar-iconbutton-${key}`) }, `table-toolbar-tooltip-${key}`);
    }
    return null;
  }).filter((item) => item);
}
function ToolBar({
  headerTitle,
  tooltip,
  toolBarRender,
  action,
  options: propsOptions,
  selectedRowKeys,
  selectedRows,
  toolbar,
  onSearch,
  columns,
  optionsRender,
  ...rest
}) {
  const counter = useContext(TableContext);
  const intl = useIntl();
  const optionDom = useMemo(() => {
    const defaultOptions = {
      reload: () => action?.current?.reload(),
      density: true,
      setting: true,
      search: false,
      fullScreen: () => action?.current?.fullScreen?.()
    };
    if (propsOptions === false) {
      return [];
    }
    const options = {
      ...defaultOptions,
      fullScreen: false,
      ...propsOptions
    };
    const settings = renderDefaultOption(
      options,
      {
        ...defaultOptions,
        intl
      },
      action,
      columns
    );
    if (optionsRender) {
      return optionsRender(
        {
          headerTitle,
          tooltip,
          toolBarRender,
          action,
          options: propsOptions,
          selectedRowKeys,
          selectedRows,
          toolbar,
          onSearch,
          columns,
          optionsRender,
          ...rest
        },
        settings
      );
    }
    return settings;
  }, [
    action,
    columns,
    headerTitle,
    intl,
    onSearch,
    optionsRender,
    propsOptions,
    rest,
    selectedRowKeys,
    selectedRows,
    toolBarRender,
    toolbar,
    tooltip
  ]);
  const actions = toolBarRender ? toolBarRender(action?.current, { selectedRowKeys, selectedRows }) : [];
  const searchConfig = useMemo(() => {
    if (!propsOptions) {
      return false;
    }
    if (!propsOptions.search)
      return false;
    const defaultSearchConfig = {
      value: counter.keyWords,
      onChange: (e) => counter.setKeyWords(e.target.value)
    };
    if (propsOptions.search === true)
      return defaultSearchConfig;
    return {
      ...defaultSearchConfig,
      ...propsOptions.search
    };
  }, [counter, propsOptions]);
  useEffect(() => {
    if (counter.keyWords === void 0) {
      onSearch?.("");
    }
  }, [counter.keyWords, onSearch]);
  return /* @__PURE__ */ jsx(
    ListToolBar,
    {
      title: headerTitle,
      tooltip,
      search: searchConfig,
      onSearch,
      actions,
      settings: optionDom,
      ...toolbar
    }
  );
}
class ToolbarRender extends React__default.Component {
  constructor() {
    super(...arguments);
    this.onSearch = (keyword) => {
      const { options, onFormSearchSubmit, actionRef } = this.props;
      if (!options || !options.search) {
        return;
      }
      const { name = "keyword" } = options.search === true ? {} : options.search;
      const success = options.search?.onSearch?.(keyword);
      if (success === false)
        return;
      actionRef?.current?.setPageInfo?.({
        current: 1
      });
      onFormSearchSubmit(
        omitUndefined({
          _timestamp: Date.now(),
          [name]: keyword
        })
      );
    };
    this.isEquals = (next) => {
      const {
        hideToolbar,
        tableColumn,
        options,
        tooltip,
        toolbar,
        selectedRows,
        selectedRowKeys,
        headerTitle,
        actionRef,
        toolBarRender
      } = this.props;
      return isDeepEqualReact(
        {
          hideToolbar,
          tableColumn,
          options,
          tooltip,
          toolbar,
          selectedRows,
          selectedRowKeys,
          headerTitle,
          actionRef,
          toolBarRender
        },
        {
          hideToolbar: next.hideToolbar,
          tableColumn: next.tableColumn,
          options: next.options,
          tooltip: next.tooltip,
          toolbar: next.toolbar,
          selectedRows: next.selectedRows,
          selectedRowKeys: next.selectedRowKeys,
          headerTitle: next.headerTitle,
          actionRef: next.actionRef,
          toolBarRender: next.toolBarRender
        },
        ["render", "renderFormItem"]
      );
    };
    this.shouldComponentUpdate = (next) => {
      if (next.searchNode) {
        return true;
      }
      return !this.isEquals(next);
    };
    this.render = () => {
      const {
        hideToolbar,
        tableColumn,
        options,
        searchNode,
        tooltip,
        toolbar,
        selectedRows,
        selectedRowKeys,
        headerTitle,
        actionRef,
        toolBarRender,
        optionsRender
      } = this.props;
      if (hideToolbar) {
        return null;
      }
      return /* @__PURE__ */ jsx(
        ToolBar,
        {
          tooltip,
          columns: tableColumn,
          options,
          headerTitle,
          action: actionRef,
          onSearch: this.onSearch,
          selectedRows,
          selectedRowKeys,
          toolBarRender,
          toolbar: {
            filter: searchNode,
            ...toolbar
          },
          optionsRender
        }
      );
    };
  }
}

const turn = new Keyframes("turn", {
  "0%": { transform: "rotate(0deg)" },
  "25%": { transform: "rotate(90deg)" },
  "50%": { transform: "rotate(180deg)" },
  "75%": { transform: "rotate(270deg)" },
  "100%": { transform: "rotate(360deg)" }
});
const genProListStyle$1 = (token) => {
  return {
    [token.componentCls]: {
      zIndex: 1,
      [`${token.ipassCls}-table-wrapper ${token.ipassCls}-table-pagination${token.ipassCls}-pagination`]: {
        marginBlockEnd: 0
      },
      "&:not(:root):fullscreen": {
        minHeight: "100vh",
        overflow: "auto",
        background: token.colorBgContainer
      },
      "&-extra": {
        marginBlockEnd: 16
      },
      "&-polling": {
        [`${token.componentCls}-list-toolbar-setting-item`]: {
          ".muiicon.muiicon-reload": {
            transform: "rotate(0deg)",
            animationName: turn,
            animationDuration: "1s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite"
          }
        }
      },
      [`td${token.ipassCls}-table-cell`]: {
        ">a": {
          fontSize: token.fontSize
        },
        [`& ${token.ipassCls}-form-item`]: {
          marginBottom: 0
        }
      },
      [`${token.ipassCls}-table${token.ipassCls}-table-tbody${token.ipassCls}-table-wrapper:only-child${token.ipassCls}-table`]: {
        marginBlock: 0,
        marginInline: 0
      },
      [`${token.ipassCls}-table${token.ipassCls}-table-middle ${token.componentCls}`]: {
        marginBlock: 0,
        marginInline: -8,
        [`${token.proComponentsCls}-card`]: {
          backgroundColor: "initial"
        }
      },
      "& &-search": {
        marginBlockEnd: "16px",
        background: token.colorBgContainer,
        "&-ghost": {
          background: "transparent"
        },
        [`&${token.componentCls}-form`]: {
          marginBlock: 0,
          marginInline: 0,
          paddingBlock: 0,
          paddingInline: 16,
          overflow: "unset"
        },
        "&-light-filter": {
          marginBlockEnd: 0,
          paddingBlock: 0,
          paddingInline: 0
        },
        "&-form-option": {
          [`${token.ipassCls}-form-item`]: {},
          [`${token.ipassCls}-form-item-label`]: {},
          [`${token.ipassCls}-form-item-control-input`]: {}
        },
        "@media (max-width: 575px)": {
          [token.componentCls]: {
            height: "auto !important",
            paddingBlockEnd: "24px",
            [`${token.ipassCls}-form-item-label`]: {
              minWidth: "80px",
              textAlign: "start"
            }
          }
        }
      },
      "&-toolbar": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "64px",
        paddingInline: 24,
        paddingBlock: 0,
        "&-option": {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end"
        },
        "&-title": {
          flex: "1",
          color: token.colorTextLabel,
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "24px",
          opacity: "0.85"
        }
      }
    },
    [`@media (max-width: ${token.screenXS})px`]: {
      [token.componentCls]: {
        [`${token.ipassCls}-table`]: {
          width: "100%",
          overflowX: "auto",
          "&-thead > tr,&-tbody > tr": {
            "> th,> td": {
              whiteSpace: "pre",
              ">span": {
                display: "block"
              }
            }
          }
        }
      }
    },
    "@media (max-width: 575px)": {
      [`${token.componentCls}-toolbar`]: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        height: "auto",
        marginBlockEnd: "16px",
        marginInlineStart: "16px",
        paddingBlock: 8,
        paddingInline: 8,
        paddingBlockStart: "16px",
        lineHeight: "normal",
        "&-title": {
          marginBlockEnd: 16
        },
        "&-option": {
          display: "flex",
          justifyContent: "space-between",
          width: "100%"
        },
        "&-default-option": {
          display: "flex",
          flex: "1",
          alignItems: "center",
          justifyContent: "flex-end"
        }
      }
    }
  };
};
function useStyle$1(prefixCls) {
  return useStyle$A("ProTable", (token) => {
    const proListToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genProListStyle$1(proListToken)];
  });
}

const mergeOptionAndPageInfo = ({ pageInfo }) => {
  if (pageInfo) {
    const { current, defaultCurrent, pageSize, defaultPageSize } = pageInfo;
    return {
      current: current || defaultCurrent || 1,
      total: 0,
      pageSize: pageSize || defaultPageSize || 20
    };
  }
  return { current: 1, total: 0, pageSize: 20 };
};
const useFetchData = (getData, defaultData, options) => {
  const umountRef = useRef(false);
  const abortRef = useRef(null);
  const {
    onLoad,
    manual,
    polling,
    onRequestError,
    debounceTime = 20,
    effects = []
  } = options || {};
  const manualRequestRef = useRef(manual);
  const pollingSetTimeRef = useRef();
  const [tableDataList, setTableDataList] = useMergedState(defaultData, {
    value: options?.dataSource,
    onChange: options?.onDataSourceChange
  });
  const [tableLoading, setTableLoading] = useMergedState(false, {
    value: options?.loading,
    onChange: options?.onLoadingChange
  });
  const [pageInfo, setPageInfoState] = useMergedState(
    () => mergeOptionAndPageInfo(options),
    {
      onChange: options?.onPageInfoChange
    }
  );
  const setPageInfo = useRefFunction((changePageInfo) => {
    if (changePageInfo.current !== pageInfo.current || changePageInfo.pageSize !== pageInfo.pageSize || changePageInfo.total !== pageInfo.total) {
      setPageInfoState(changePageInfo);
    }
  });
  const [pollingLoading, setPollingLoading] = useMergedState(false);
  const setDataAndLoading = (newData, dataTotal) => {
    unstable_batchedUpdates(() => {
      setTableDataList(newData);
      if (pageInfo?.total !== dataTotal) {
        setPageInfo({
          ...pageInfo,
          total: dataTotal || newData.length
        });
      }
    });
  };
  const prePage = usePrevious(pageInfo?.current);
  const prePageSize = usePrevious(pageInfo?.pageSize);
  const prePolling = usePrevious(polling);
  const requestFinally = useRefFunction(() => {
    unstable_batchedUpdates(() => {
      setTableLoading(false);
      setPollingLoading(false);
    });
  });
  const fetchList = async (isPolling) => {
    if (manualRequestRef.current) {
      manualRequestRef.current = false;
      return;
    }
    if (!isPolling) {
      setTableLoading(true);
    } else {
      setPollingLoading(true);
    }
    const { pageSize, current } = pageInfo || {};
    try {
      const pageParams = options?.pageInfo !== false ? {
        current,
        pageSize
      } : void 0;
      const {
        data = [],
        success,
        total = 0,
        ...rest
      } = await getData?.(pageParams) || {};
      if (success === false)
        return [];
      const responseData = postDataPipeline(
        data,
        [options.postData].filter((item) => item)
      );
      setDataAndLoading(responseData, total);
      onLoad?.(responseData, rest);
      return responseData;
    } catch (e) {
      if (onRequestError === void 0)
        throw new Error(e);
      if (tableDataList === void 0)
        setTableDataList([]);
      onRequestError(e);
    } finally {
      requestFinally();
    }
    return [];
  };
  const fetchListDebounce = useDebounceFn(async (isPolling) => {
    if (pollingSetTimeRef.current) {
      clearTimeout(pollingSetTimeRef.current);
    }
    if (!getData) {
      return;
    }
    const abort = new AbortController();
    abortRef.current = abort;
    try {
      const msg = await Promise.race([
        fetchList(isPolling),
        new Promise((_, reject) => {
          abortRef.current?.signal?.addEventListener?.("abort", () => {
            reject("aborted");
            fetchListDebounce.cancel();
            requestFinally();
          });
        })
      ]);
      if (abort.signal.aborted)
        return;
      const needPolling = runFunction(polling, msg);
      if (needPolling && !umountRef.current) {
        pollingSetTimeRef.current = setTimeout(() => {
          fetchListDebounce.run(needPolling);
        }, Math.max(needPolling, 2e3));
      }
      return msg;
    } catch (error) {
      if (error === "aborted") {
        return;
      }
      throw error;
    }
  }, debounceTime || 30);
  const abortFetch = () => {
    abortRef.current?.abort();
    fetchListDebounce.cancel();
    requestFinally();
  };
  useEffect(() => {
    if (!polling) {
      clearTimeout(pollingSetTimeRef.current);
    }
    if (!prePolling && polling) {
      fetchListDebounce.run(true);
    }
    return () => {
      clearTimeout(pollingSetTimeRef.current);
    };
  }, [polling]);
  useEffect(() => {
    umountRef.current = false;
    return () => {
      umountRef.current = true;
    };
  }, []);
  useEffect(() => {
    const { current, pageSize } = pageInfo || {};
    if ((!prePage || prePage === current) && (!prePageSize || prePageSize === pageSize)) {
      return;
    }
    if (options.pageInfo && tableDataList && tableDataList?.length > pageSize || 0) {
      return;
    }
    if (current !== void 0 && tableDataList && tableDataList.length <= pageSize) {
      abortFetch();
      fetchListDebounce.run(false);
    }
  }, [pageInfo?.current]);
  useEffect(() => {
    if (!prePageSize) {
      return;
    }
    abortFetch();
    fetchListDebounce.run(false);
  }, [pageInfo?.pageSize]);
  useDeepCompareEffect(() => {
    abortFetch();
    fetchListDebounce.run(false);
    if (!manual) {
      manualRequestRef.current = false;
    }
    return () => {
      abortFetch();
    };
  }, [...effects, manual]);
  return {
    /**
     * 表格的資料列表。
     * @type {DataSource[]}
     */
    dataSource: tableDataList,
    /**
     * 用於設置表格資料列表的 setter 函數。
     * @type {function}
     * @param {DataSource[]} list - 更新後的表格資料列表。
     */
    setDataSource: setTableDataList,
    /**
     * 表示表格是否正在載入資料的標誌。
     * @type {boolean}
     */
    loading: tableLoading,
    /**
     * 重新載入表格資料的函數。
     * @type {function}
     * @async
     * @returns {Promise<boolean>} - 資料重新載入完成後解決為 true 的 Promise。
     */
    reload: async () => {
      abortFetch();
      return fetchListDebounce.run(false);
    },
    /**
     * 當前的分頁資訊。
     * @type {Object}
     * @prop {number} current - 當前頁碼。
     * @prop {number} total - 總資料數量。
     * @prop {number} pageSize - 每頁資料數量。
     */
    pageInfo,
    /**
     * 表示表格是否正在進行輪詢請求的標誌。
     * @type {boolean}
     */
    pollingLoading,
    /**
     * 重設分頁資訊為其初始值的函數。
     * @type {function}
     * @async
     * @returns {Promise<void>} - 重設完成後解決的 Promise。
     */
    reset: async () => {
      const { pageInfo: optionPageInfo } = options || {};
      const { defaultCurrent = 1, defaultPageSize = 20 } = optionPageInfo || {};
      const initialPageInfo = {
        current: defaultCurrent,
        total: 0,
        pageSize: defaultPageSize
      };
      setPageInfo(initialPageInfo);
    },
    /**
     * 更新分頁資訊的函數。
     * @type {function}
     * @async
     * @param {Object} info - 新的分頁資訊。
     * @prop {number} [current] - 新的當前頁碼。
     * @prop {number} [total] - 新的總資料數量。
     * @prop {number} [pageSize] - 新的每頁資料數量。
     * @returns {Promise<void>} - 更新完成後解決的 Promise。
     */
    setPageInfo: async (info) => {
      setPageInfo({
        ...pageInfo,
        ...info
      });
    }
  };
};

const columnSort = (columnsMap) => (a, b) => {
  const { fixed: aFixed, index: aIndex } = a;
  const { fixed: bFixed, index: bIndex } = b;
  if (aFixed === "left" && bFixed !== "left" || bFixed === "right" && aFixed !== "right") {
    return -2;
  }
  if (bFixed === "left" && aFixed !== "left" || aFixed === "right" && bFixed !== "right") {
    return 2;
  }
  const aKey = a.key || `${aIndex}`;
  const bKey = b.key || `${bIndex}`;
  if (columnsMap[aKey]?.order || columnsMap[bKey]?.order) {
    return (columnsMap[aKey]?.order || 0) - (columnsMap[bKey]?.order || 0);
  }
  return (a.index || 0) - (b.index || 0);
};

const SHOW_EMPTY_TEXT_LIST = ["", null, void 0];
const spellNamePath = (...rest) => {
  return rest.filter((index) => index !== void 0).map((item) => {
    if (typeof item === "number") {
      return item.toString();
    }
    return item;
  }).flat(1);
};
const CellRenderFromItem = (props) => {
  const formContext = useContext(FieldContext);
  const {
    columnProps,
    prefixName,
    text,
    counter,
    rowData,
    index,
    recordKey,
    subName,
    proFieldProps
  } = props;
  const editableForm = ProForm.useFormInstance();
  const key = recordKey || index;
  const [formItemName, setName] = useState(
    () => spellNamePath(
      prefixName,
      prefixName ? subName : [],
      prefixName ? index : key,
      columnProps?.key ?? columnProps?.dataIndex ?? index
    )
  );
  const rowName = useMemo(() => {
    return formItemName.slice(0, -1);
  }, [formItemName]);
  useEffect(() => {
    const value = spellNamePath(
      prefixName,
      prefixName ? subName : [],
      prefixName ? index : key,
      columnProps?.key ?? columnProps?.dataIndex ?? index
    );
    if (value.join("-") !== formItemName.join("-"))
      setName(value);
  }, [
    columnProps?.dataIndex,
    columnProps?.key,
    index,
    recordKey,
    prefixName,
    key,
    subName,
    formItemName
  ]);
  const needProps = useMemo(
    () => [
      editableForm,
      {
        ...columnProps,
        rowKey: rowName,
        rowIndex: index,
        isEditable: true
      }
    ],
    [columnProps, editableForm, index, rowName]
  );
  const InlineItem = useCallback(
    ({ children, ...restProps }) => /* @__PURE__ */ jsx(
      InlineErrorFormItem,
      {
        popoverProps: {
          getPopupContainer: formContext.getPopupContainer || (() => counter.rootDomRef.current || document.body)
        },
        errorType: "popover",
        name: formItemName,
        ...restProps,
        children
      },
      key
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key, formItemName]
  );
  const generateFormItem = useCallback(() => {
    const formItemProps = {
      ...getFieldPropsOrFormItemProps(columnProps?.formItemProps, ...needProps)
    };
    formItemProps.messageVariables = {
      label: columnProps?.title || "此項",
      type: columnProps?.valueType || "文字",
      ...formItemProps?.messageVariables
    };
    formItemProps.initialValue = (prefixName ? null : text) ?? formItemProps?.initialValue ?? columnProps?.initialValue;
    let fieldDom = /* @__PURE__ */ jsx(
      ProFormField,
      {
        cacheForSwr: true,
        name: formItemName,
        proFormFieldKey: key,
        ignoreFormItem: true,
        fieldProps: getFieldPropsOrFormItemProps(
          columnProps?.fieldProps,
          ...needProps
        ),
        ...proFieldProps
      },
      formItemName.join("-")
    );
    if (columnProps?.renderFormItem) {
      fieldDom = columnProps.renderFormItem(
        {
          ...columnProps,
          index,
          isEditable: true,
          type: "table"
        },
        {
          defaultRender: () => /* @__PURE__ */ jsx(Fragment, { children: fieldDom }),
          type: "form",
          recordKey,
          record: {
            ...rowData,
            ...editableForm?.getFieldValue([key])
          },
          isEditable: true
        },
        editableForm
      );
      if (columnProps.ignoreFormItem)
        return /* @__PURE__ */ jsx(Fragment, { children: fieldDom });
    }
    return /* @__PURE__ */ jsx(InlineItem, { ...formItemProps, children: fieldDom }, formItemName.join("-"));
  }, [
    columnProps,
    needProps,
    prefixName,
    text,
    key,
    formItemName,
    proFieldProps,
    InlineItem,
    index,
    recordKey,
    rowData,
    editableForm
  ]);
  if (formItemName.length === 0)
    return null;
  if (typeof columnProps?.renderFormItem === "function" || typeof columnProps?.fieldProps === "function" || typeof columnProps?.formItemProps === "function") {
    return /* @__PURE__ */ jsx(
      Form.Item,
      {
        noStyle: true,
        shouldUpdate: (pre, next) => {
          if (pre === next)
            return false;
          const shouldName = [rowName].flat(1);
          try {
            return JSON.stringify(get$1(pre, shouldName)) !== JSON.stringify(get$1(next, shouldName));
          } catch (error) {
            return true;
          }
        },
        children: () => generateFormItem()
      }
    );
  }
  return generateFormItem();
};
function cellRenderToFromItem(config) {
  const { text, valueType, rowData, columnProps, index } = config;
  if ((!valueType || ["textarea", "text"].includes(valueType.toString())) && // valueEnum 存在說明是個select
  !columnProps?.valueEnum && config.mode === "read") {
    return SHOW_EMPTY_TEXT_LIST.includes(text) ? config.columnEmptyText : text;
  }
  if (typeof valueType === "function" && rowData) {
    return cellRenderToFromItem({
      ...config,
      valueType: valueType(rowData, config.type) || "text"
    });
  }
  const columnKey = columnProps?.key || columnProps?.dataIndex?.toString();
  const dependencies = columnProps?.dependencies ? [
    config.prefixName,
    config.prefixName ? index?.toString() : config.recordKey?.toString(),
    columnProps?.dependencies
  ].filter(Boolean).flat(1) : [];
  const proFieldProps = {
    valueEnum: runFunction(columnProps?.valueEnum, rowData),
    request: columnProps?.request,
    dependencies: columnProps?.dependencies ? [dependencies] : void 0,
    originDependencies: columnProps?.dependencies ? [columnProps?.dependencies] : void 0,
    params: runFunction(columnProps?.params, rowData, columnProps),
    readonly: columnProps?.readonly,
    text: valueType === "index" || valueType === "indexBorder" ? config.index : text,
    mode: config.mode,
    renderFormItem: void 0,
    valueType,
    // @ts-ignore
    record: rowData,
    proFieldProps: {
      emptyText: config.columnEmptyText,
      proFieldKey: columnKey ? `table-field-${columnKey}` : void 0
    }
  };
  if (config.mode !== "edit") {
    return /* @__PURE__ */ jsx(
      ProFormField,
      {
        mode: "read",
        ignoreFormItem: true,
        fieldProps: getFieldPropsOrFormItemProps(
          columnProps?.fieldProps,
          null,
          columnProps
        ),
        ...proFieldProps
      }
    );
  }
  return /* @__PURE__ */ jsx(
    CellRenderFromItem,
    {
      ...config,
      proFieldProps
    },
    config.recordKey
  );
}

const renderColumnsTitle = (item) => {
  const { title } = item;
  const ellipsis = typeof item?.ellipsis === "boolean" ? item?.ellipsis : item?.ellipsis?.showTitle;
  if (title && typeof title === "function") {
    return title(
      item,
      "table",
      /* @__PURE__ */ jsx(LabelIconTip, { label: null, tooltip: item.tooltip || item.tip })
    );
  }
  return /* @__PURE__ */ jsx(
    LabelIconTip,
    {
      label: title,
      tooltip: item.tooltip || item.tip,
      ellipsis
    }
  );
};
const defaultOnFilter = (value, record, dataIndex) => {
  const recordElement = Array.isArray(dataIndex) ? get$1(record, dataIndex) : record[dataIndex];
  const itemValue = String(recordElement);
  return String(itemValue) === String(value);
};
function columnRender({
  columnProps,
  text,
  rowData,
  index,
  columnEmptyText,
  counter,
  type,
  subName,
  marginSM
}) {
  const { action, prefixName } = counter;
  const { renderText = (val) => val } = columnProps;
  const renderTextStr = renderText(text, rowData, index, action);
  const mode = "read";
  const itemProps = {
    text: renderTextStr,
    valueType: columnProps.valueType || "text",
    index,
    rowData,
    subName,
    columnProps: {
      ...columnProps,
      entity: rowData
    },
    counter,
    columnEmptyText,
    type,
    mode,
    prefixName
  };
  const textDom = cellRenderToFromItem(itemProps);
  const dom = genCopyable(textDom, columnProps, renderTextStr);
  if (!columnProps.render) {
    const isReactRenderNode = React__default.isValidElement(dom) || ["string", "number"].includes(typeof dom);
    return !isNil(dom) && isReactRenderNode ? dom : null;
  }
  const renderDom = columnProps.render(
    dom,
    rowData,
    index,
    action,
    {
      ...columnProps,
      type: "table"
    }
  );
  if (isMergeCell(renderDom)) {
    return renderDom;
  }
  if (renderDom && columnProps.valueType === "option" && Array.isArray(renderDom)) {
    return /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 8
        },
        children: renderDom
      }
    );
  }
  return renderDom;
}

function genProColumnToColumn(params, parents) {
  const {
    columns,
    counter,
    columnEmptyText,
    type,
    marginSM,
    rowKey = "id",
    childrenColumnName = "children"
  } = params;
  const subNameRecord = /* @__PURE__ */ new Map();
  return columns?.map((columnProps, columnsIndex) => {
    if (columnProps === ForwardTable.EXPAND_COLUMN)
      return columnProps;
    const {
      key,
      dataIndex,
      valueEnum,
      valueType = "text",
      children,
      onFilter,
      filters = []
    } = columnProps;
    const columnKey = genColumnKey(
      key || dataIndex?.toString(),
      [parents?.key, columnsIndex].filter(Boolean).join("-")
    );
    const noNeedPro = !valueEnum && !valueType && !children;
    if (noNeedPro) {
      return {
        index: columnsIndex,
        ...columnProps
      };
    }
    const isExtraColumns = columnProps === ForwardTable.EXPAND_COLUMN;
    if (isExtraColumns) {
      return {
        index: columnsIndex,
        isExtraColumns: true,
        hideInSearch: true,
        hideInTable: false,
        hideInForm: true,
        hideInSetting: true,
        extraColumn: columnProps
      };
    }
    const config = counter.columnsMap[columnKey] || {
      fixed: columnProps.fixed
    };
    const genOnFilter = () => {
      if (onFilter === true) {
        return (value, row) => defaultOnFilter(value, row, dataIndex);
      }
      return omitBoolean(onFilter);
    };
    let keyName = rowKey;
    const tempColumns = {
      index: columnsIndex,
      key: columnKey,
      ...columnProps,
      title: renderColumnsTitle(columnProps),
      valueEnum,
      filters: filters === true ? proFieldParsingValueEnumToArray(
        runFunction(valueEnum, void 0)
      ).filter((valueItem) => valueItem && valueItem.value !== "all") : filters,
      onFilter: genOnFilter(),
      fixed: config.fixed,
      width: columnProps.width || (columnProps.fixed ? 200 : void 0),
      children: columnProps.children ? genProColumnToColumn(
        {
          ...params,
          columns: columnProps?.children || []
        },
        { ...columnProps, key: columnKey }
      ) : void 0,
      render: (text, rowData, index) => {
        if (typeof rowKey === "function") {
          keyName = rowKey(rowData, index);
        }
        let uniqueKey;
        if (typeof rowData === "object" && rowData !== null && Reflect.has(rowData, keyName)) {
          uniqueKey = rowData[keyName];
          const parentInfo = subNameRecord.get(uniqueKey) || [];
          rowData[childrenColumnName]?.forEach((item) => {
            const itemUniqueKey = item[keyName];
            if (!subNameRecord.has(itemUniqueKey)) {
              subNameRecord.set(
                itemUniqueKey,
                parentInfo.concat([index, childrenColumnName])
              );
            }
          });
        }
        const renderProps = {
          columnProps,
          text,
          rowData,
          index,
          columnEmptyText,
          counter,
          type,
          marginSM,
          subName: subNameRecord.get(uniqueKey)
        };
        return columnRender(renderProps);
      }
    };
    return omitUndefinedAndEmptyArr(tempColumns);
  })?.filter((item) => !item.hideInTable);
}

function TableRender(props) {
  const {
    rowKey,
    tableClassName,
    defaultClassName,
    action,
    tableColumn: tableColumns,
    type,
    pagination,
    size,
    defaultSize,
    tableStyle,
    toolbarDom,
    searchNode,
    style,
    cardProps: propsCardProps,
    alertDom,
    name,
    onSortChange,
    onFilterChange,
    options,
    isLightFilter,
    className,
    cardBordered,
    getRowKey,
    ...rest
  } = props;
  const counter = useContext(TableContext);
  const columns = useMemo(() => {
    const loopFilter = (column) => {
      return column.map((item) => {
        const columnKey = genColumnKey(item.key, item.index);
        const config = counter.columnsMap[columnKey];
        if (config && config.show === false) {
          return false;
        }
        if (item.children) {
          return {
            ...item,
            children: loopFilter(item.children)
          };
        }
        return item;
      }).filter(Boolean);
    };
    return loopFilter(tableColumns);
  }, [counter.columnsMap, tableColumns]);
  const useLocaleFilter = useMemo(() => {
    const _columns = [];
    const loopColumns = (data) => {
      for (let i = 0; i < data.length; i++) {
        const _curItem = data[i];
        if (_curItem.children) {
          loopColumns(_curItem.children);
        } else {
          _columns.push(_curItem);
        }
      }
    };
    loopColumns(columns);
    return _columns?.every((column) => {
      return !!column.filters && !!column.onFilter || column.filters === void 0 && column.onFilter === void 0;
    });
  }, [columns]);
  const getTableProps = () => ({
    ...rest,
    size,
    className: tableClassName,
    style: tableStyle,
    columns: columns.map(
      (item) => item.isExtraColumns ? item.extraColumn : item
    ),
    loading: action.loading,
    dataSource: action.dataSource,
    pagination,
    onChange: (changePagination, filters, sorter, extra) => {
      rest.onChange?.(changePagination, filters, sorter, extra);
      if (!useLocaleFilter) {
        onFilterChange(omitUndefined(filters));
      }
      if (Array.isArray(sorter)) {
        const data = sorter.reduce(
          (pre, value) => ({
            ...pre,
            [`${value.field}`]: value.order
          }),
          {}
        );
        onSortChange(omitUndefined(data));
      } else {
        const sorterOfColumn = sorter.column?.sorter;
        const isSortByField = sorterOfColumn?.toString() === sorterOfColumn;
        onSortChange(
          omitUndefined({
            [`${isSortByField ? sorterOfColumn : sorter.field}`]: sorter.order
          })
        );
      }
    }
  });
  const notNeedCardDom = useMemo(() => {
    if (props.search === false && !props.headerTitle && props.toolBarRender === false) {
      return true;
    }
    return false;
  }, []);
  const baseTableDom = /* @__PURE__ */ jsx(
    GridContext.Provider,
    {
      value: {
        grid: false,
        colProps: void 0,
        rowProps: void 0
      },
      children: /* @__PURE__ */ jsx(ForwardTable, { ...getTableProps(), rowKey })
    }
  );
  const tableDom = props.tableViewRender ? props.tableViewRender(
    {
      ...getTableProps()
    },
    baseTableDom
  ) : baseTableDom;
  const tableContentDom = useMemo(() => {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      toolbarDom,
      alertDom,
      tableDom
    ] });
  }, [alertDom, props.loading, tableDom, toolbarDom]);
  const cardBodyStyle = useMemo(() => {
    if (propsCardProps === false || notNeedCardDom === true || !!props.name)
      return {};
    if (toolbarDom) {
      return {
        paddingBlockStart: 0
      };
    }
    if (toolbarDom && pagination === false) {
      return {
        paddingBlockStart: 0
      };
    }
    return {
      padding: 0
    };
  }, [notNeedCardDom, pagination, props.name, propsCardProps, toolbarDom]);
  const tableAreaDom = (
    // cardProps 或者 有了name 就不需要這個padding了，不然會導致不好對齊
    propsCardProps === false || notNeedCardDom === true || !!props.name ? tableContentDom : /* @__PURE__ */ jsx(
      ProCard,
      {
        ghost: props.ghost,
        bordered: isBordered("table", cardBordered),
        bodyStyle: cardBodyStyle,
        ...propsCardProps,
        children: tableContentDom
      }
    )
  );
  const renderTable = () => {
    if (props.tableRender) {
      return props.tableRender(props, tableAreaDom, {
        toolbar: toolbarDom || void 0,
        alert: alertDom || void 0,
        table: tableDom || void 0
      });
    }
    return tableAreaDom;
  };
  const proTableDom = /* @__PURE__ */ jsxs(
    "div",
    {
      className: classNames(className, {
        [`${defaultClassName}-polling`]: action.pollingLoading
      }),
      style,
      ref: counter.rootDomRef,
      children: [
        isLightFilter ? null : searchNode,
        type !== "form" && props.tableExtraRender && /* @__PURE__ */ jsx("div", { className: classNames(className, `${defaultClassName}-extra`), children: props.tableExtraRender(props, action.dataSource || []) }),
        type !== "form" && renderTable()
      ]
    }
  );
  if (!options || !options?.fullScreen) {
    return proTableDom;
  }
  return /* @__PURE__ */ jsx(
    ConfigProvider,
    {
      getPopupContainer: () => {
        return counter.rootDomRef.current || document.body;
      },
      children: proTableDom
    }
  );
}
const emptyObj = {};
const ProTable = (props) => {
  const {
    cardBordered,
    request,
    className: propsClassName,
    params = emptyObj,
    defaultData,
    headerTitle,
    postData,
    ghost,
    pagination: propsPagination,
    actionRef: propsActionRef,
    columns: propsColumns = [],
    toolBarRender,
    optionsRender,
    onLoad,
    onRequestError,
    style,
    cardProps,
    tableStyle,
    tableClassName,
    columnsStateMap,
    onColumnsStateChange,
    options,
    search,
    name: isEditorTable,
    onLoadingChange,
    beforeSearchSubmit,
    tableAlertRender,
    defaultClassName,
    formRef: propRef,
    type = "table",
    columnEmptyText = "-",
    toolbar,
    rowKey,
    manualRequest,
    polling,
    tooltip,
    revalidateOnFocus = false,
    searchFormRender,
    ...rest
  } = props;
  const { wrapSSR, hashId } = useStyle$1(props.defaultClassName);
  const className = classNames(defaultClassName, propsClassName, hashId);
  const actionRef = useRef();
  const defaultFormRef = useRef();
  const formRef = propRef || defaultFormRef;
  useImperativeHandle(propsActionRef, () => actionRef.current);
  const [formSearch, setFormSearch] = useMergedState(() => {
    if (manualRequest || search !== false) {
      return void 0;
    }
    return {};
  });
  const [proFilter, setProFilter] = useMergedState({});
  const [proSort, setProSort] = useMergedState(
    {}
  );
  useEffect(() => {
    const { sort, filter } = parseDefaultColumnConfig(propsColumns);
    setProFilter(filter);
    setProSort(sort);
  }, []);
  const intl = useIntl();
  const fetchPagination = typeof propsPagination === "object" ? propsPagination : { defaultCurrent: 1, defaultPageSize: 20, pageSize: 20, current: 1 };
  const counter = useContext(TableContext);
  const fetchData = useMemo(() => {
    if (!request)
      return void 0;
    return async (pageParams) => {
      const actionParams = {
        ...pageParams || {},
        ...formSearch,
        ...params
      };
      delete actionParams._timestamp;
      const response = await request(
        actionParams,
        proSort,
        proFilter
      );
      return response;
    };
  }, [formSearch, params, proFilter, proSort, request]);
  const action = useFetchData(fetchData, defaultData, {
    pageInfo: propsPagination === false ? false : fetchPagination,
    loading: props.loading,
    dataSource: props.dataSource,
    onDataSourceChange: props.onDataSourceChange,
    onLoad,
    onLoadingChange,
    onRequestError,
    postData,
    revalidateOnFocus,
    manual: formSearch === void 0,
    polling,
    effects: [
      stringify(params),
      stringify(formSearch),
      stringify(proFilter),
      stringify(proSort)
    ],
    debounceTime: props.debounceTime,
    onPageInfoChange: (pageInfo) => {
      if (!propsPagination || !fetchData)
        return;
      propsPagination?.onChange?.(pageInfo.current, pageInfo.pageSize);
      propsPagination?.onShowSizeChange?.(pageInfo.current, pageInfo.pageSize);
    }
  });
  useEffect(() => {
    if (props.manualRequest || !props.request || !revalidateOnFocus || props.form?.ignoreRules)
      return;
    const visibilitychange = () => {
      if (document.visibilityState === "visible") {
        action.reload();
      }
    };
    document.addEventListener("visibilitychange", visibilitychange);
    return () => document.removeEventListener("visibilitychange", visibilitychange);
  }, []);
  const preserveRecordsRef = React__default.useRef(/* @__PURE__ */ new Map());
  const getRowKey = React__default.useMemo(() => {
    if (typeof rowKey === "function") {
      return rowKey;
    }
    return (record, index) => {
      if (index === -1) {
        return record?.[rowKey];
      }
      if (props.name) {
        return index?.toString();
      }
      return record?.[rowKey] ?? index?.toString();
    };
  }, [props.name, rowKey]);
  useMemo(() => {
    if (action.dataSource?.length) {
      const keys = action.dataSource.map((data) => {
        const dataRowKey = getRowKey(data, -1);
        preserveRecordsRef.current.set(dataRowKey, data);
        return dataRowKey;
      });
      return keys;
    }
    return [];
  }, [action.dataSource, getRowKey]);
  const pagination = useMemo(() => {
    const newPropsPagination = propsPagination === false ? false : { ...propsPagination };
    const pageConfig = {
      ...action.pageInfo,
      setPageInfo: ({ pageSize, current }) => {
        const { pageInfo } = action;
        if (pageSize === pageInfo.pageSize || pageInfo.current === 1) {
          action.setPageInfo({ pageSize, current });
          return;
        }
        if (request)
          action.setDataSource([]);
        action.setPageInfo({
          pageSize,
          // 目前只有 List 和 Table 支持分頁, List 有分頁的時候 還是使用之前的當前頁碼
          current: type === "list" ? current : 1
        });
      }
    };
    if (request && newPropsPagination) {
      delete newPropsPagination.onChange;
      delete newPropsPagination.onShowSizeChange;
    }
    return mergePagination(newPropsPagination, pageConfig, intl);
  }, [propsPagination, action, intl]);
  useDeepCompareEffect(() => {
    if (props.request && params && action.dataSource && action?.pageInfo?.current !== 1) {
      action.setPageInfo({
        current: 1
      });
    }
  }, [params]);
  counter.setPrefixName(props.name);
  counter.propsRef.current = props;
  const { token } = proTheme?.useToken();
  useActionType(actionRef, action, {
    fullScreen: () => {
      if (!counter.rootDomRef?.current || !document.fullscreenEnabled) {
        return;
      }
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        counter.rootDomRef?.current.requestFullscreen();
      }
    },
    onCleanSelected: () => {
    },
    resetAll: () => {
      setProFilter({});
      setProSort({});
      counter.setKeyWords(void 0);
      action.setPageInfo({
        current: 1
      });
      formRef?.current?.resetFields();
      setFormSearch({});
    }
  });
  counter.setAction(actionRef.current);
  if (propsActionRef) {
    propsActionRef.current = actionRef.current;
  }
  const tableColumn = useMemo(() => {
    return genProColumnToColumn({
      columns: propsColumns,
      counter,
      columnEmptyText,
      type,
      marginSM: token.marginSM,
      rowKey,
      childrenColumnName: props.expandable?.childrenColumnName
    }).sort(columnSort(counter.columnsMap));
  }, [
    propsColumns,
    counter?.sortKeyColumns,
    counter?.columnsMap,
    columnEmptyText,
    type
  ]);
  useDeepCompareEffectDebounce(
    () => {
      if (tableColumn && tableColumn.length > 0) {
        const columnKeys = tableColumn.map(
          (item) => genColumnKey(item.key, item.index)
        );
        counter.setSortKeyColumns(columnKeys);
      }
    },
    [tableColumn],
    ["render", "renderFormItem"],
    100
  );
  useDeepCompareEffect(() => {
    const { pageInfo } = action;
    const { current = pageInfo?.current, pageSize = pageInfo?.pageSize } = propsPagination || {};
    if (propsPagination && (current || pageSize) && (pageSize !== pageInfo?.pageSize || current !== pageInfo?.current)) {
      action.setPageInfo({
        pageSize: pageSize || pageInfo.pageSize,
        current: current || pageInfo.current
      });
    }
  }, [
    propsPagination && propsPagination.pageSize,
    propsPagination && propsPagination.current
  ]);
  const isLightFilter = search !== false && search?.filterType === "light";
  const onFormSearchSubmit = useCallback(
    (values) => {
      if (options && options.search) {
        const { name = "keyword" } = options.search === true ? {} : options.search;
        const success = options.search?.onSearch?.(
          counter.keyWords
        );
        if (success !== false) {
          setFormSearch({
            ...values,
            [name]: counter.keyWords
          });
          return;
        }
      }
      setFormSearch(values);
    },
    [counter.keyWords, options, setFormSearch]
  );
  const loading = useMemo(() => {
    if (typeof action.loading === "object") {
      return action.loading || false;
    }
    return action.loading;
  }, [action.loading]);
  const searchNode = useMemo(() => {
    const node = search === false && type !== "form" ? null : /* @__PURE__ */ jsx(
      FormSearch,
      {
        pagination,
        beforeSearchSubmit,
        action: actionRef,
        columns: propsColumns,
        onFormSearchSubmit: (values) => {
          onFormSearchSubmit(values);
        },
        ghost,
        onReset: props.onReset,
        onSubmit: props.onSubmit,
        loading: !!loading,
        manualRequest,
        search,
        form: props.form,
        formRef,
        type: props.type || "table",
        cardBordered: props.cardBordered,
        dateFormatter: props.dateFormatter
      }
    );
    if (searchFormRender && node) {
      return /* @__PURE__ */ jsx(Fragment, { children: searchFormRender(props, node) });
    } else {
      return node;
    }
  }, [
    beforeSearchSubmit,
    formRef,
    ghost,
    loading,
    manualRequest,
    onFormSearchSubmit,
    pagination,
    props,
    propsColumns,
    search,
    searchFormRender,
    type
  ]);
  const toolbarDom = toolBarRender === false ? null : /* @__PURE__ */ jsx(
    ToolbarRender,
    {
      headerTitle,
      hideToolbar: options === false && !headerTitle && !toolBarRender && !toolbar && !isLightFilter,
      selectedRows: [],
      selectedRowKeys: [],
      tableColumn,
      tooltip,
      toolbar,
      onFormSearchSubmit: (newValues) => {
        setFormSearch({
          ...formSearch,
          ...newValues
        });
      },
      searchNode: isLightFilter ? searchNode : null,
      options,
      optionsRender,
      actionRef,
      toolBarRender
    }
  );
  return wrapSSR(
    /* @__PURE__ */ jsx(
      TableRender,
      {
        ...props,
        name: isEditorTable,
        defaultClassName,
        size: counter.tableSize,
        onSizeChange: counter.setTableSize,
        pagination,
        searchNode,
        className,
        tableColumn,
        isLightFilter,
        action,
        alertDom: null,
        toolbarDom,
        onSortChange: (sortConfig) => {
          if (proSort === sortConfig)
            return;
          setProSort(sortConfig ?? {});
        },
        onFilterChange: (filterConfig) => {
          if (filterConfig === proFilter)
            return;
          setProFilter(filterConfig);
        },
        getRowKey
      }
    )
  );
};
const ProviderTableContainer = (props) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const ErrorComponent = props.ErrorBoundary === false ? React__default.Fragment : props.ErrorBoundary || ErrorBoundary;
  return /* @__PURE__ */ jsx(Container, { initValue: props, children: /* @__PURE__ */ jsx(ProConfigProvider, { needDeps: true, children: /* @__PURE__ */ jsx(ErrorComponent, { children: /* @__PURE__ */ jsx(
    ProTable,
    {
      defaultClassName: `${getPrefixCls("pro-table")}`,
      ...props
    }
  ) }) }) });
};
ProviderTableContainer.Summary = ForwardTable.Summary;

const CSS = /*#__PURE__*/Object.freeze({
  Translate: {
    toString(transform) {
      if (!transform) {
        return;
      }

      const {
        x,
        y
      } = transform;
      return "translate3d(" + (x ? Math.round(x) : 0) + "px, " + (y ? Math.round(y) : 0) + "px, 0)";
    }

  },
  Scale: {
    toString(transform) {
      if (!transform) {
        return;
      }

      const {
        scaleX,
        scaleY
      } = transform;
      return "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
    }

  },
  Transform: {
    toString(transform) {
      if (!transform) {
        return;
      }

      return [CSS.Translate.toString(transform), CSS.Scale.toString(transform)].join(' ');
    }

  },
  Transition: {
    toString(_ref) {
      let {
        property,
        duration,
        easing
      } = _ref;
      return property + " " + duration + "ms " + easing;
    }

  }
});

const SortableItemContextValue = createContext({ handle: null });
const SortableRow = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    ...props?.style
  };
  const { DragHandle, dragSortKey, ...rest } = props;
  if (dragSortKey) {
    const doms = [];
    React__default.Children.forEach(rest.children, (child, index) => {
      if (child.key === dragSortKey) {
        doms.push(
          /* @__PURE__ */ jsx(
            SortableItemContextValue.Provider,
            {
              value: {
                handle: /* @__PURE__ */ jsx(
                  DragHandle,
                  {
                    rowData: child?.props?.record,
                    index: child?.props?.index,
                    ...listeners,
                    ...attributes
                  }
                )
              },
              children: child
            },
            child.key || index
          )
        );
        return;
      }
      doms.push(child);
    });
    return /* @__PURE__ */ jsx("tr", { ...rest, ref: setNodeRef, style, children: doms });
  }
  return /* @__PURE__ */ jsx(
    "tr",
    {
      ...rest,
      ref: setNodeRef,
      style,
      ...attributes,
      ...listeners
    }
  );
};
const SortableItemCell = React__default.memo((props) => {
  const { dragSortKey, ...rest } = props;
  const { handle } = useContext(SortableItemContextValue);
  if (handle) {
    return /* @__PURE__ */ jsx("td", { ...rest, children: /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center"
        },
        children: [
          handle,
          " ",
          rest.children
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsx("td", { ...rest });
});
const SortContainer = (p) => /* @__PURE__ */ jsx("tbody", { ...p });
function useDragSort(props) {
  const { dataSource = [], onDragSortEnd, DragHandle, dragSortKey } = props;
  const sensors = useSensors(useSensor(PointerSensor), useSensor(MouseSensor));
  const handleDragEnd = useCallback(
    (event) => {
      const { active, over } = event;
      if (over?.id?.toString() && active.id !== over?.id) {
        const newData = arrayMove(
          dataSource || [],
          parseInt(active.id),
          parseInt(over.id)
        );
        onDragSortEnd?.(newData || []);
      }
    },
    [dataSource, onDragSortEnd]
  );
  const DraggableContainer = useRefFunction((p) => /* @__PURE__ */ jsx(
    SortableContext,
    {
      items: dataSource.map((_, index) => index?.toString()),
      strategy: verticalListSortingStrategy,
      children: /* @__PURE__ */ jsx(SortContainer, { ...p })
    }
  ));
  const DraggableBodyRow = useRefFunction((p) => {
    const { ...restProps } = p;
    const index = dataSource.findIndex(
      (item) => item[props.rowKey ?? "index"] === restProps["data-row-key"]
    )?.toString();
    return /* @__PURE__ */ jsx(
      SortableRow,
      {
        id: index,
        dragSortKey,
        DragHandle,
        ...restProps
      },
      index
    );
  });
  const components = props.components || {};
  if (dragSortKey) {
    components.body = {
      ...props.components?.body || {},
      wrapper: DraggableContainer,
      row: DraggableBodyRow,
      cell: SortableItemCell
    };
  }
  const memoDndContext = useMemo(
    () => (contextProps) => {
      return /* @__PURE__ */ jsx(
        DndContext,
        {
          modifiers: [restrictToVerticalAxis],
          sensors,
          collisionDetection: closestCenter,
          onDragEnd: handleDragEnd,
          children: contextProps.children
        }
      );
    },
    [handleDragEnd, sensors]
  );
  return {
    DndContext: memoDndContext,
    components
  };
}

const genProListStyle = (token) => {
  return {
    [token.componentCls]: {
      "&-icon": {
        marginInlineEnd: 8,
        color: token.colorTextSecondary,
        cursor: "grab !important",
        padding: 4,
        fontSize: 12,
        borderRadius: token.borderRadius,
        "&:hover": {
          color: token.colorText,
          backgroundColor: token.colorInfoBg
        }
      }
    }
  };
};
function useStyle(prefixCls) {
  return useStyle$A("DragSortTable", (token) => {
    const proListToken = {
      ...token,
      componentCls: `.${prefixCls}`
    };
    return [genProListStyle(proListToken)];
  });
}

function DragSortTable(props) {
  const {
    rowKey,
    dragSortKey,
    dragSortHandlerRender,
    onDragSortEnd,
    onDataSourceChange,
    defaultData,
    dataSource: originDataSource,
    onLoad,
    ...otherProps
  } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const [dataSource, setDataSource] = useMergedState(
    () => defaultData || [],
    {
      value: originDataSource,
      onChange: onDataSourceChange
    }
  );
  const { wrapSSR, hashId } = useStyle(getPrefixCls("pro-table-drag"));
  const DragHandle = useMemo(() => {
    return (dragHandleProps) => {
      const { rowData, index, className, ...rest } = dragHandleProps;
      const defaultDom = /* @__PURE__ */ jsx(
        DragIndicatorIcon,
        {
          ...rest,
          className: `${getPrefixCls("pro-table-drag-icon")} ${className || ""} ${hashId || ""}`.trim()
        }
      );
      const handel = dragSortHandlerRender ? dragSortHandlerRender(
        dragHandleProps?.rowData,
        dragHandleProps?.index
      ) : defaultDom;
      return /* @__PURE__ */ jsx("div", { ...rest, children: handel });
    };
  }, [getPrefixCls]);
  const { components, DndContext } = useDragSort({
    dataSource: dataSource?.slice(),
    dragSortKey,
    onDragSortEnd,
    components: props.components,
    rowKey,
    DragHandle
  });
  const wrapOnload = async (ds) => {
    setDataSource(ds);
    return onLoad?.(ds);
  };
  return wrapSSR(
    /* @__PURE__ */ jsx(
      ProviderTableContainer,
      {
        ...otherProps,
        columns: otherProps.columns?.map((item) => {
          if (item.dataIndex == dragSortKey || item.key === dragSortKey) {
            if (!item.render) {
              item.render = () => null;
            }
          }
          return item;
        }),
        onLoad: wrapOnload,
        rowKey,
        tableViewRender: (_, defaultDom) => {
          return /* @__PURE__ */ jsx(DndContext, { children: defaultDom });
        },
        dataSource,
        components,
        onDataSourceChange
      }
    )
  );
}

const DropdownButton = ({
  children,
  menus,
  onSelect,
  className,
  style
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const tempClassName = getPrefixCls("pro-table-dropdown");
  const [anchorEl, setAnchorEl] = React__default.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        className: classNames(tempClassName, className),
        style,
        endIcon: /* @__PURE__ */ jsx(ExpandMoreIcon, {}),
        "aria-controls": open ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": open ? "true" : void 0,
        onClick: handleClick,
        children
      }
    ),
    /* @__PURE__ */ jsx(
      Menu$1,
      {
        anchorEl,
        open,
        onClose: handleClose,
        MenuListProps: {
          "aria-labelledby": "basic-button"
        },
        children: menus?.map((item) => /* @__PURE__ */ jsx(
          MenuItem,
          {
            onClick: () => {
              onSelect && onSelect(item.key);
              handleClose();
            },
            children: item.name
          },
          item.key
        ))
      }
    )
  ] });
};
const TableDropdown = ({ className: propsClassName, style, onSelect, menus = [], children }) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const className = getPrefixCls("pro-table-dropdown");
  const [anchorEl, setAnchorEl] = React__default.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        className: classNames(className, propsClassName),
        style,
        "aria-controls": open ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": open ? "true" : void 0,
        onClick: handleClick,
        children: children || /* @__PURE__ */ jsx(MoreHorizIcon, {})
      }
    ),
    /* @__PURE__ */ jsx(
      Menu$1,
      {
        anchorEl,
        open,
        onClose: handleClose,
        MenuListProps: {
          "aria-labelledby": "basic-button"
        },
        children: menus.map(({ key, name, ...rest }) => /* @__PURE__ */ jsx(
          MenuItem,
          {
            onClick: () => {
              onSelect && onSelect(key);
              handleClose();
            },
            title: rest.title,
            children: name
          },
          key
        ))
      }
    )
  ] });
};
TableDropdown.Button = DropdownButton;

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  BetaSchemaForm,
  CheckCard,
  ConfigConsumer,
  DefaultFooter,
  DefaultHeader,
  DescriptionsSkeleton,
  DragSortTable,
  DrawerForm,
  ErrorBoundary,
  FieldContext,
  FieldDatePicker: FieldDatePicker$1,
  FieldIndexColumn,
  FieldLabel,
  FieldMoney: FieldMoney$1,
  FieldPercent: FieldPercent$1,
  FieldRangePicker: FieldRangePicker$1,
  FieldRender,
  FieldSelect: FieldSelect$1,
  FieldStatus: Status,
  FieldText: FieldText$1,
  FieldTimePicker: FieldTimePicker$1,
  FooterToolbar,
  FormItemProvide,
  FormListContext,
  GridContent,
  GridContext,
  Group,
  IndexColumn: FieldIndexColumn,
  InlineErrorFormItem,
  IntlConsumer: ConfigConsumer,
  LabelIconTip,
  ListPageSkeleton,
  ListSkeleton,
  ListSkeletonItem,
  ListToolBar,
  ListToolbarSkeleton,
  LoginForm,
  LoginFormPage,
  ModalForm,
  PageContainer,
  PageHeader,
  PageHeaderSkeleton,
  PageLoading,
  ProCard,
  ProConfigProvider,
  ProDescriptions,
  ProField,
  ProForm,
  ProFormCheckbox: WrappedProFormCheckbox,
  ProFormContext,
  ProFormDateMonthRangePicker: DateMonthRangePicker,
  ProFormDatePicker: ExportComponent,
  ProFormDateQuarterRangePicker: DateQuarterRangePicker,
  ProFormDateRangePicker,
  ProFormDateTimePicker,
  ProFormDateTimeRangePicker,
  ProFormDateWeekRangePicker: DateWeekRangePicker,
  ProFormDateYearRangePicker: DateYearRangePicker,
  ProFormDependency,
  ProFormDigit: ForwardRefProFormDigit,
  ProFormDigitRange: index$3,
  ProFormField,
  ProFormFieldSet,
  ProFormGroup,
  ProFormItem,
  ProFormList,
  ProFormMoney: index$2,
  ProFormRadio: WrappedProFormRadio,
  ProFormSelect: WrappedProFormSelect,
  ProFormSwitch,
  ProFormText: WrappedProFormText,
  ProFormTextArea: index$1,
  ProFormTimePicker: WrappedProFormTimePicker,
  ProLayout,
  ProProvider,
  ProSkeleton,
  ProTable: ProviderTableContainer,
  QueryFilter,
  RouteContext,
  Search: FormSearch,
  Statistic,
  StatisticCard,
  StepsForm: StepsFormWarp,
  Submitter,
  TableDropdown,
  TableItemSkeleton,
  TableSkeleton,
  TableStatus: Status,
  TopNavHeader,
  compareVersions,
  conversionMomentValue,
  conversionSubmitValue: conversionMomentValue,
  convertMoment,
  coverToNewToken,
  createIntl,
  dateArrayFormatter,
  dateFormatterMap,
  defaultRenderText,
  defaultSettings,
  enUSIntl,
  findIntlKeyByLocaleKey,
  genCopyable,
  getFieldPropsOrFormItemProps,
  getMenuData,
  getPageTitle,
  intlMap: intlMap$1,
  intlMapKeys,
  isBrowser,
  isDeepEqualReact,
  isDropdownValueType,
  isImg,
  isNeedOpenHash,
  isNil,
  isUrl: isUrl$1,
  lighten,
  merge,
  nanoid,
  omitBoolean,
  omitUndefined,
  omitUndefinedAndEmptyArr,
  openVisibleCompatible,
  operationUnit,
  parseValueToDay,
  pickProFormItemProps,
  pickProProps,
  proFieldParsingText,
  proFieldParsingValueEnumToArray,
  proTheme,
  resetComponent,
  roundedArrow,
  runFunction,
  setAlpha,
  sha256,
  stringify,
  transformKeySubmitValue,
  useBreakpoint,
  useDebounceFn,
  useDebounceValue,
  useDeepCompareEffect,
  useDeepCompareEffectDebounce,
  useDeepCompareMemo,
  useFetchData: useFetchData$2,
  useLatest,
  useMountMergeState: useMergedState,
  usePrevious,
  useReactiveRef,
  useRefCallback,
  useRefFunction,
  useStyle: useStyle$A,
  useToken,
  zhTWIntl
}, Symbol.toStringTag, { value: 'Module' }));

export { BetaSchemaForm, CheckCard, ConfigConsumer, DefaultFooter, DefaultHeader, DescriptionsSkeleton, DragSortTable, DrawerForm, ErrorBoundary, FieldContext, FieldDatePicker$1 as FieldDatePicker, FieldIndexColumn, FieldLabel, FieldMoney$1 as FieldMoney, FieldPercent$1 as FieldPercent, FieldRangePicker$1 as FieldRangePicker, FieldRender, FieldSelect$1 as FieldSelect, Status as FieldStatus, FieldText$1 as FieldText, FieldTimePicker$1 as FieldTimePicker, FooterToolbar, FormItemProvide, FormListContext, GridContent, GridContext, Group, FieldIndexColumn as IndexColumn, InlineErrorFormItem, ConfigConsumer as IntlConsumer, LabelIconTip, ListPageSkeleton, ListSkeleton, ListSkeletonItem, ListToolBar, ListToolbarSkeleton, LoginForm, LoginFormPage, ModalForm, PageContainer, PageHeader, PageHeaderSkeleton, PageLoading, ProCard, ProConfigProvider, ProDescriptions, ProField, ProForm, WrappedProFormCheckbox as ProFormCheckbox, ProFormContext, DateMonthRangePicker as ProFormDateMonthRangePicker, ExportComponent as ProFormDatePicker, DateQuarterRangePicker as ProFormDateQuarterRangePicker, ProFormDateRangePicker, ProFormDateTimePicker, ProFormDateTimeRangePicker, DateWeekRangePicker as ProFormDateWeekRangePicker, DateYearRangePicker as ProFormDateYearRangePicker, ProFormDependency, ForwardRefProFormDigit as ProFormDigit, index$3 as ProFormDigitRange, ProFormField, ProFormFieldSet, ProFormGroup, ProFormItem, ProFormList, index$2 as ProFormMoney, WrappedProFormRadio as ProFormRadio, WrappedProFormSelect as ProFormSelect, ProFormSwitch, WrappedProFormText as ProFormText, index$1 as ProFormTextArea, WrappedProFormTimePicker as ProFormTimePicker, ProLayout, ProProvider, ProSkeleton, ProviderTableContainer as ProTable, QueryFilter, RouteContext, FormSearch as Search, Statistic, StatisticCard, StepsFormWarp as StepsForm, Submitter, TableDropdown, TableItemSkeleton, TableSkeleton, Status as TableStatus, TopNavHeader, compareVersions, conversionMomentValue, conversionMomentValue as conversionSubmitValue, convertMoment, coverToNewToken, createIntl, dateArrayFormatter, dateFormatterMap, defaultRenderText, defaultSettings, enUSIntl, findIntlKeyByLocaleKey, genCopyable, getFieldPropsOrFormItemProps, getMenuData, getPageTitle, index as i, intlMap$1 as intlMap, intlMapKeys, isBrowser, isDeepEqualReact, isDropdownValueType, isImg, isNeedOpenHash, isNil, isUrl$1 as isUrl, lighten, merge, nanoid, omitBoolean, omitUndefined, omitUndefinedAndEmptyArr, openVisibleCompatible, operationUnit, parseValueToDay, pickProFormItemProps, pickProProps, proFieldParsingText, proFieldParsingValueEnumToArray, proTheme, resetComponent, roundedArrow, runFunction, setAlpha, sha256, stringify, transformKeySubmitValue, useBreakpoint, useDebounceFn, useDebounceValue, useDeepCompareEffect, useDeepCompareEffectDebounce, useDeepCompareMemo, useFetchData$2 as useFetchData, useLatest, usePrevious, useReactiveRef, useRefCallback, useRefFunction, useStyle$A as useStyle, useToken, zhTWIntl };
