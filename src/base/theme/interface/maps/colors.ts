export interface ColorNeutralMapToken {
  /**
   * @internal
   */
  colorTextBase: string

  /**
   * @internal
   */
  colorBgBase: string

  // ----------   Text   ---------- //

  /**
   * @nameZH 一級文字色
   * @nameEN Text Color
   * @desc 最深的文字色。為了符合W3C標準，預設的文字顏色使用了該色，同時這個顏色也是最深的中性色。
   * @descEN Default text color which comply with W3C standards, and this color is also the darkest neutral color.
   */
  colorText: string

  /**
   * @nameZH 二級文字色
   * @nameEN Secondary Text Color
   * @desc 作為第二變化的文字色，一般用在不那麼需要強化文字顏色的場景，例如 Label 文字、Menu 的文字選中態等場景。
   * @descEN The second level of text color is generally used in scenarios where text color is not emphasized, such as label text, menu text selection state, etc.
   */
  colorTextSecondary: string

  /**
   * @nameZH 三級文字色
   * @desc 第三級文字色一般用於描述性文字，例如表單的中的補充說明文字、列表的描述性文字等場景。
   * @descEN The third level of text color is generally used for descriptive text, such as form supplementary explanation text, list descriptive text, etc.
   */
  colorTextTertiary: string

  /**
   * @nameZH 四級文字色
   * @desc 第四級文字色是最淺的文字色，例如表單的輸入提示文字、禁用色文字等。
   * @descEN The fourth level of text color is the lightest text color, such as form input prompt text, disabled color text, etc.
   */
  colorTextQuaternary: string

  // ----------   Border   ---------- //

  /**
   * @nameZH 一級邊框色
   * @nameEN Default Border Color
   * @desc 預設使用的邊框顏色, 用於分割不同的元素，例如：表單的分割線、卡片的分割線等。
   * @descEN Default border color, used to separate different elements, such as: form separator, card separator, etc.
   */
  colorBorder: string

  /**
   * @nameZH 二級邊框色
   * @nameEN Secondary Border Color
   * @desc 比預設使用的邊框色要淺一級，此顏色和 colorSplit 的顏色一致。使用的是實色。
   * @descEN Slightly lighter than the default border color, this color is the same as `colorSplit`. Solid color is used.
   */
  colorBorderSecondary: string

  // ----------   Fill   ---------- //

  /**
   * @nameZH 一級填充色
   * @desc 最深的填充色，用於拉開與二、三級填充色的區分度，目前只用在 Slider 的 hover 效果。
   * @descEN The darkest fill color is used to distinguish between the second and third level of fill color, and is currently only used in the hover effect of Slider.
   */
  colorFill: string

  /**
   * @nameZH 二級填充色
   * @desc 二級填充色可以較為明顯地勾勒出元素形體，如 Rate、Skeleton 等。也可以作為三級填充色的 Hover 狀態，如 Table 等。
   * @descEN The second level of fill color can outline the shape of the element more clearly, such as Rate, Skeleton, etc. It can also be used as the Hover state of the third level of fill color, such as Table, etc.
   */
  colorFillSecondary: string

  /**
   * @nameZH 三級填充色
   * @desc 三級填充色用於勾勒出元素形體的場景，如 Slider、Segmented 等。如無強調需求的情況下，建議使用三級填色作為預設填色。
   * @descEN The third level of fill color is used to outline the shape of the element, such as Slider, Segmented, etc. If there is no emphasis requirement, it is recommended to use the third level of fill color as the default fill color.
   */
  colorFillTertiary: string

  /**
   * @nameZH 四級填充色
   * @desc 最弱一級的填充色，適用於不易引起注意的色塊，例如斑馬紋、區分邊界的色塊等。
   * @descEN The weakest level of fill color is suitable for color blocks that are not easy to attract attention, such as zebra stripes, color blocks that distinguish boundaries, etc.
   */
  colorFillQuaternary: string

  // ----------   Surface   ---------- //

  /**
   * @nameZH 布局背景色
   * @nameEN Layout Background Color
   * @desc 該色用於頁面整體布局的背景色，只有需要在頁面中處於 B1 的視覺層級時才會使用該 token，其他用法都是錯誤的
   * @descEN This color is used for the background color of the overall layout of the page. This token will only be used when it is necessary to be at the B1 visual level in the page. Other usages are wrong.
   */
  colorBgLayout: string

  /**
   * @nameZH 元件容器背景色
   * @desc 元件的容器背景色，例如：預設按鈕、輸入框等。務必不要將其與 `colorBgElevated` 混淆。
   * @descEN Container background color, e.g: default button, input box, etc. Be sure not to confuse this with `colorBgElevated`.
   */
  colorBgContainer: string

  /**
   * @nameZH 浮層容器背景色
   * @desc 浮層容器背景色，在暗色模式下該 token 的色值會比 `colorBgContainer` 要亮一些。例如：模態框、彈出框、菜單等。
   * @descEN Container background color of the popup layer, in dark mode the color value of this token will be a little brighter than `colorBgContainer`. E.g: modal, pop-up, menu, etc.
   */
  colorBgElevated: string

  /**
   * @nameZH 引起注意的背景色
   * @desc 該色用於引起用戶強烈關注注意的背景色，目前只用在 Tooltip 的背景色上。
   * @descEN This color is used to draw the user's strong attention to the background color, and is currently only used in the background color of Tooltip.
   */
  colorBgSpotlight: string
}

/**
 * 品牌色變化變數
 */
interface ColorPrimaryMapToken {
  /**
   * @nameZH 品牌主色
   * @nameEN Primary color of the brand
   * @desc 品牌色是體現產品特性和傳播理念最直觀的視覺元素之一，用於產品的主色調、主按鈕、主圖示、主文字等
   * @descEN The brand color is one of the most intuitive visual elements that reflects product characteristics and communication concepts, and is used for the main color tone, main buttons, main icons, main text, etc. of the product.
   */
  colorPrimary: string // 6

  /**
   * @nameZH 主色淺色背景色
   * @nameEN Light background color of primary color
   * @desc 主色淺色背景顏色，一般用於視覺層級較弱的選中狀態。
   * @descEN Light background color of primary color, usually used for weak visual level selection state.
   */
  colorPrimaryBg: string // 1

  /**
   * @nameZH 主色淺色背景懸浮態
   * @nameEN Hover state of light background color of primary color
   * @desc 與主色淺色背景顏色相對應的懸浮態顏色。
   * @descEN The hover state color corresponding to the light background color of the primary color.
   */
  colorPrimaryBgHover: string // 2

  /**
   * @nameZH 主色描邊色
   * @nameEN Border color of primary color
   * @desc 主色變化下的描邊用色，用在 Slider 等元件的描邊上。
   * @descEN The stroke color under the main color gradient, used on the stroke of components such as Slider.
   */
  colorPrimaryBorder: string // 3

  /**
   * @nameZH 主色描邊色懸浮態
   * @nameEN Hover state of border color of primary color
   * @desc 主色變化下的描邊用色的懸浮態，Slider 、Button 等元件的描邊 Hover 時會使用。
   * @descEN The hover state of the stroke color under the main color gradient, which will be used when the stroke Hover of components such as Slider and Button.
   */
  colorPrimaryBorderHover: string // 4

  /**
   * @nameZH 主色懸浮態
   * @nameEN Hover state of primary color
   * @desc 主色變化下的懸浮態。
   * @descEN Hover state under the main color gradient.
   */
  colorPrimaryHover: string // 5

  /**
   * @nameZH 主色啟用態
   * @nameEN Active state of primary color
   * @desc 主色變化下的深色啟用態。
   * @descEN Dark active state under the main color gradient.
   */
  colorPrimaryActive: string // 7

  /**
   * @nameZH 主色文字懸浮態
   * @nameEN Hover state of text color of primary color
   * @desc 主色變化下的文字懸浮態。
   * @descEN Hover state of text color under the main color gradient.
   */
  colorPrimaryTextHover: string // 8

  /**
   * @nameZH 主色文字
   * @nameEN Text color of primary color
   * @desc 主色變化下的文字顏色。
   * @descEN Text color under the main color gradient.
   */
  colorPrimaryText: string // 9

  /**
   * @nameZH 主色文字啟用態
   * @nameEN Active state of text color of primary color
   * @desc 主色變化下的文字啟用態。
   * @descEN Active state of text color under the main color gradient.
   */
  colorPrimaryTextActive: string // 10
}

interface ColorSuccessMapToken {
  /**
   * @nameZH 成功色的淺色背景顏色
   * @nameEN Light Background Color of Success Color
   * @desc 成功色的淺色背景顏色，用於 Tag 和 Alert 的成功態背景色
   * @descEN Light background color of success color, used for Tag and Alert success state background color
   */
  colorSuccessBg: string // 1

  /**
   * @nameZH 成功色的淺色背景色懸浮態
   * @nameEN Hover State Color of Light Success Background
   * @desc 成功色淺色背景顏色，一般用於視覺層級較弱的選中狀態，不過 ipass customized lib 目前沒有使用到該 token
   * @descEN Light background color of success color, but ipass customized lib does not use this token currently
   */
  colorSuccessBgHover: string // 2

  /**
   * @nameZH 成功色的描邊色
   * @nameEN Border Color of Success Color
   * @desc 成功色的描邊色，用於 Tag 和 Alert 的成功態描邊色
   * @descEN Border color of success color, used for Tag and Alert success state border color
   */
  colorSuccessBorder: string // 3

  /**
   * @nameZH 成功色的描邊色懸浮態
   * @nameEN Hover State Color of Success Border
   * @desc 成功色的描邊色懸浮態
   * @descEN Hover state color of success color border
   */
  colorSuccessBorderHover: string // 4

  /**
   * @nameZH 成功色的深色懸浮態
   * @nameEN Hover State Color of Dark Success
   * @desc 成功色的深色懸浮態
   * @descEN Hover state color of dark success color
   */
  colorSuccessHover: string // 5

  /**
   * @nameZH 成功色
   * @nameEN Success Color
   * @desc 預設的成功色，如 Result、Progress 等元件中都有使用該顏色
   * @descEN Default success color, used in components such as Result and Progress
   */
  colorSuccess: string // 6

  /**
   * @nameZH 成功色的深色啟用態
   * @nameEN Active State Color of Dark Success
   * @desc 成功色的深色啟用態
   * @descEN Active state color of dark success color
   */
  colorSuccessActive: string // 7

  /**
   * @nameZH 成功色的文字懸浮態
   * @nameEN Hover State Color of Success Text
   * @desc 成功色的文字懸浮態
   * @descEN Hover state color of success color text
   */
  colorSuccessTextHover: string // 8

  /**
   * @nameZH 成功色的文字預設態
   * @nameEN Default State Color of Success Text
   * @desc 成功色的文字預設態
   * @descEN Default state color of success color text
   */
  colorSuccessText: string // 9

  /**
   * @nameZH 成功色的文字啟用態
   * @nameEN Active State Color of Success Text
   * @desc 成功色的文字啟用態
   * @descEN Active state color of success color text
   */
  colorSuccessTextActive: string // 10
}

interface ColorWarningMapToken {
  /**
   * @nameZH 警戒色的淺色背景顏色
   * @nameEN Warning background color
   * @desc 警戒色的淺色背景顏色
   * @descEN The background color of the warning state.
   */
  colorWarningBg: string // 1

  /**
   * @nameZH 警戒色的淺色背景色懸浮態
   * @nameEN Warning background color hover state
   * @desc 警戒色的淺色背景色懸浮態
   * @descEN The hover state background color of the warning state.
   */
  colorWarningBgHover: string // 2

  /**
   * @nameZH 警戒色的描邊色
   * @nameEN Warning border color
   * @desc 警戒色的描邊色
   * @descEN The border color of the warning state.
   */
  colorWarningBorder: string // 3

  /**
   * @nameZH 警戒色的描邊色懸浮態
   * @nameEN Warning border color hover state
   * @desc 警戒色的描邊色懸浮態
   * @descEN The hover state border color of the warning state.
   */
  colorWarningBorderHover: string // 4

  /**
   * @nameZH 警戒色的深色懸浮態
   * @nameEN Warning hover color
   * @desc 警戒色的深色懸浮態
   * @descEN The hover state of the warning color.
   */
  colorWarningHover: string // 5

  /**
   * @nameZH 警戒色
   * @nameEN Warning color
   * @desc 最常用的警戒色，例如 Notification、 Alert等警告類元件或 Input 輸入類等元件會使用該顏色
   * @descEN The most commonly used warning color, used for warning components such as Notification, Alert, or input components.
   */
  colorWarning: string // 6

  /**
   * @nameZH 警戒色的深色啟用態
   * @nameEN Warning active color
   * @desc 警戒色的深色啟用態
   * @descEN The active state of the warning color.
   */
  colorWarningActive: string // 7

  /**
   * @nameZH 警戒色的文字懸浮態
   * @nameEN Warning text hover state
   * @desc 警戒色的文字懸浮態
   * @descEN The hover state of the text in the warning color.
   */
  colorWarningTextHover: string // 8

  /**
   * @nameZH 警戒色的文字預設態
   * @nameEN Warning text default state
   * @desc 警戒色的文字預設態
   * @descEN The default state of the text in the warning color.
   */
  colorWarningText: string // 9

  /**
   * @nameZH 警戒色的文字啟用態
   * @nameEN Warning text active state
   * @desc 警戒色的文字啟用態
   * @descEN The active state of the text in the warning color.
   */
  colorWarningTextActive: string // 10
}

interface ColorInfoMapToken {
  /**
   * @nameZH 資訊色的淺色背景顏色
   * @nameEN Light background color of information color
   * @desc 資訊色的淺色背景顏色。
   * @descEN Light background color of information color.
   */
  colorInfoBg: string // 1

  /**
   * @nameZH 資訊色的淺色背景色懸浮態
   * @nameEN Hover state of light background color of information color
   * @desc 資訊色的淺色背景色懸浮態。
   * @descEN Hover state of light background color of information color.
   */
  colorInfoBgHover: string // 2

  /**
   * @nameZH 資訊色的描邊色
   * @nameEN Border color of information color
   * @desc 資訊色的描邊色。
   * @descEN Border color of information color.
   */
  colorInfoBorder: string // 3

  /**
   * @nameZH 資訊色的描邊色懸浮態
   * @nameEN Hover state of border color of information color
   * @desc 資訊色的描邊色懸浮態。
   * @descEN Hover state of border color of information color.
   */
  colorInfoBorderHover: string // 4

  /**
   * @nameZH 資訊色的深色懸浮態
   * @nameEN Hover state of dark color of information color
   * @desc 資訊色的深色懸浮態。
   * @descEN Hover state of dark color of information color.
   */
  colorInfoHover: string // 5

  /**
   * @nameZH 資訊色
   * @nameEN Information color
   * @desc 資訊色。
   * @descEN Information color.
   */
  colorInfo: string // 6

  /**
   * @nameZH 資訊色的深色啟用態
   * @nameEN Active state of dark color of information color
   * @desc 資訊色的深色啟用態。
   * @descEN Active state of dark color of information color.
   */
  colorInfoActive: string // 7

  /**
   * @nameZH 資訊色的文字懸浮態
   * @nameEN Hover state of text color of information color
   * @desc 資訊色的文字懸浮態。
   * @descEN Hover state of text color of information color.
   */
  colorInfoTextHover: string // 8

  /**
   * @nameZH 資訊色的文字預設態
   * @nameEN Default state of text color of information color
   * @desc 資訊色的文字預設態。
   * @descEN Default state of text color of information color.
   */
  colorInfoText: string // 9

  /**
   * @nameZH 資訊色的文字啟用態
   * @nameEN Active state of text color of information color
   * @desc 資訊色的文字啟用態。
   * @descEN Active state of text color of information color.
   */
  colorInfoTextActive: string // 10
}

interface ColorErrorMapToken {
  /**
   * @nameZH 錯誤色的淺色背景顏色
   * @nameEN Error background color
   * @desc 錯誤色的淺色背景顏色
   * @descEN The background color of the error state.
   */
  colorErrorBg: string // 1

  /**
   * @nameZH 錯誤色的淺色背景色懸浮態
   * @nameEN Error background color hover state
   * @desc 錯誤色的淺色背景色懸浮態
   * @descEN The hover state background color of the error state.
   */
  colorErrorBgHover: string // 2

  /**
   * @nameZH 錯誤色的描邊色
   * @nameEN Error border color
   * @desc 錯誤色的描邊色
   * @descEN The border color of the error state.
   */
  colorErrorBorder: string // 3

  /**
   * @nameZH 錯誤色的描邊色懸浮態
   * @nameEN Error border color hover state
   * @desc 錯誤色的描邊色懸浮態
   * @descEN The hover state border color of the error state.
   */
  colorErrorBorderHover: string // 4

  /**
   * @nameZH 錯誤色的深色懸浮態
   * @nameEN Error hover color
   * @desc 錯誤色的深色懸浮態
   * @descEN The hover state of the error color.
   */
  colorErrorHover: string // 5

  /**
   * @nameZH 錯誤色
   * @nameEN Error color
   * @desc 錯誤色
   * @descEN The color of the error state.
   */
  colorError: string // 6

  /**
   * @nameZH 錯誤色的深色啟用態
   * @nameEN Error active color
   * @desc 錯誤色的深色啟用態
   * @descEN The active state of the error color.
   */
  colorErrorActive: string // 7

  /**
   * @nameZH 錯誤色的文字懸浮態
   * @nameEN Error text hover state
   * @desc 錯誤色的文字懸浮態
   * @descEN The hover state of the text in the error color.
   */
  colorErrorTextHover: string // 8

  /**
   * @nameZH 錯誤色的文字預設態
   * @nameEN Error text default state
   * @desc 錯誤色的文字預設態
   * @descEN The default state of the text in the error color.
   */
  colorErrorText: string // 9

  /**
   * @nameZH 錯誤色的文字啟用態
   * @nameEN Error text active state
   * @desc 錯誤色的文字啟用態
   * @descEN The active state of the text in the error color.
   */
  colorErrorTextActive: string // 10
}

export interface ColorLinkMapToken {
  /**
   * @nameZH 超連結顏色
   * @nameEN Hyperlink color
   * @desc 控制超連結的顏色。
   * @descEN Control the color of hyperlink.
   */
  colorLink: string
  /**
   * @nameZH 超連結懸浮顏色
   * @nameEN Hyperlink hover color
   * @desc 控制超連結懸浮時的顏色。
   * @descEN Control the color of hyperlink when hovering.
   */
  colorLinkHover: string
  /**
   * @nameZH 超連結啟用顏色
   * @nameEN Hyperlink active color
   * @desc 控制超連結被點擊時的顏色。
   * @descEN Control the color of hyperlink when clicked.
   */
  colorLinkActive: string
}

export interface ColorMapToken
  extends ColorNeutralMapToken,
  ColorPrimaryMapToken,
  ColorSuccessMapToken,
  ColorWarningMapToken,
  ColorErrorMapToken,
  ColorInfoMapToken,
  ColorLinkMapToken {
  /**
   * @nameZH 純白色
   * @desc 不隨主題變化的純白色
   * @descEN Pure white color don't changed by theme
   * @default #FFFFFF
   */
  colorWhite: string

  /**
   * @nameZH 浮層的背景蒙層顏色
   * @nameEN Background color of the mask
   * @desc 浮層的背景蒙層顏色，用於遮罩浮層下面的內容，Modal、Drawer 等元件的蒙層使用的是該 token
   * @descEN The background color of the mask, used to cover the content below the mask, Modal, Drawer and other components use this token
   */
  colorBgMask: string

  /**
   * @nameZH 純黑色
   * @desc 不隨主題變化的純黑色
   * @default #0000
   */
  // colorBlack: string;
}
