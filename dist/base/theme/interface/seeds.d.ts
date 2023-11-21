import type { PresetColorType } from './presetColors';
export interface SeedToken extends PresetColorType {
    /**
     * @nameZH 品牌主色
     * @nameEN Brand Color
     * @desc 品牌色是體現產品特性和傳播理念最直觀的視覺元素之一。在你完成品牌主色的選取之後，我們會自動幫你生成一套完整的色板，並賦予它們有效的設計語義
     * @descEN Brand color is one of the most direct visual elements to reflect the characteristics and communication of the product. After you have selected the brand color, we will automatically generate a complete color palette and assign it effective design semantics.
     */
    colorPrimary: string;
    /**
     * @nameZH 成功色
     * @nameEN Success Color
     * @desc 用於表示操作成功的 Token 序列，如 Result、Progress 等元件會使用該組梯度變數。
     * @descEN Used to represent the token sequence of operation success, such as Result, Progress and other components will use these map tokens.
     */
    colorSuccess: string;
    /**
     * @nameZH 警戒色
     * @nameEN Warning Color
     * @desc 用於表示操作警告的 Token 序列，如 Notification、 Alert等警告類元件或 Input 輸入類等元件會使用該組梯度變數。
     * @descEN Used to represent the warning map token, such as Notification, Alert, etc. Alert or Control component(like Input) will use these map tokens.
     */
    colorWarning: string;
    /**
     * @nameZH 錯誤色
     * @nameEN Error Color
     * @desc 用於表示操作失敗的 Token 序列，如失敗按鈕、錯誤狀態提示（Result）元件等。
     * @descEN Used to represent the visual elements of the operation failure, such as the error Button, error Result component, etc.
     */
    colorError: string;
    /**
     * @nameZH 資訊色
     * @nameEN Info Color
     * @desc 用於表示操作資訊的 Token 序列，如 Alert 、Tag、 Progress 等元件都有用到該組梯度變數。
     * @descEN Used to represent the operation information of the Token sequence, such as Alert, Tag, Progress, and other components use these map tokens.
     */
    colorInfo: string;
    /**
     * @nameZH 基礎文本色
     * @nameEN Seed Text Color
     * @desc 用於派生文本色梯度的基礎變數，v5 中我們新增了一層文本色的派生算法可以產出梯度明確的文本色的梯度變數。但請不要在程式碼中直接使用該 Seed Token ！
     * @descEN Used to derive the base variable of the text color gradient. In v5, we added a layer of text color derivation algorithm to produce gradient variables of text color gradient. But please do not use this Seed Token directly in the code!
     */
    colorTextBase: string;
    /**
     * @nameZH 基礎背景色
     * @nameEN Seed Background Color
     * @desc 用於派生背景色梯度的基礎變數，v5 中我們新增了一層背景色的派生算法可以產出梯度明確的背景色的梯度變數。但請不要在程式碼中直接使用該 Seed Token ！
     * @descEN Used to derive the base variable of the background color gradient. In v5, we added a layer of background color derivation algorithm to produce map token of background color. But PLEASE DO NOT USE this Seed Token directly in the code!
     */
    colorBgBase: string;
    /**
     * @nameZH 超連結顏色
     * @nameEN Hyperlink color
     * @desc 控制超連結的顏色。
     * @descEN Control the color of hyperlink.
     */
    colorLink: string;
    /**
     * @nameZH 字體
     * @nameEN Font family for default text
     * @desc Ant Design 的字體家族中優先使用系統預設的界面字體，同時提供了一套利於屏顯的備用字體庫，來維護在不同平台以及瀏覽器的顯示下，字體始終保持良好的易讀性和可讀性，體現了友好、穩定和專業的特性。
     * @descEN The font family of Ant Design prioritizes the default interface font of the system, and provides a set of alternative font libraries that are suitable for screen display to maintain the readability and readability of the font under different platforms and browsers, reflecting the friendly, stable and professional characteristics.
     */
    fontFamily: string;
    /**
     * @nameZH 程式碼字體
     * @nameEN Font family for code text
     * @desc 程式碼字體，用於 Typography 內的 code、pre 和 kbd 類型的元素
     * @descEN Code font, used for code, pre and kbd elements in Typography
     */
    fontFamilyCode: string;
    /**
     * @nameZH 預設字號
     * @nameEN Default Font Size
     * @desc 設計系統中使用最廣泛的字體大小，文本梯度也將基於該字號進行派生。
     * @descEN The most widely used font size in the design system, from which the text gradient will be derived.
     * @default 14
     */
    fontSize: number;
    /**
     * @nameZH 基礎線寬
     * @nameEN Base Line Width
     * @desc 用於控制元件邊框、分割線等的寬度
     * @descEN Border width of base components
     */
    lineWidth: number;
    /**
     * @nameZH 線條 style
     * @nameEN Line Style
     * @desc 用於控制元件邊框、分割線等的 style ，預設是實線
     * @descEN Border style of base components
     */
    lineType: string;
    /**
     * @nameZH 基礎圓角
     * @nameEN Base Border Radius
     * @descEN Border radius of base components
     * @desc 基礎元件的圓角大小，例如按鈕、輸入框、卡片等
     */
    borderRadius: number;
    /**
     * @nameZH 尺寸變化單位
     * @nameEN Size Change Unit
     * @desc 用於控制元件尺寸的變化單位，在 Ant Design 中我們的基礎單位為 4 ，便於更加細緻地控制尺寸梯度
     * @descEN The unit of size change, in Ant Design, our base unit is 4, which is more fine-grained control of the size step
     * @default 4
     */
    sizeUnit: number;
    /**
     * @nameZH 尺寸步長
     * @nameEN Size Base Step
     * @desc 用於控制元件尺寸的基礎步長，尺寸步長結合尺寸變化單位，就可以派生各種尺寸梯度。通過調整步長即可得到不同的布局模式，例如 V5 緊湊模式下的尺寸步長為 2
     * @descEN The base step of size change, the size step combined with the size change unit, can derive various size steps. By adjusting the step, you can get different layout modes, such as the size step of the compact mode of V5 is 2
     * @default 4
     */
    sizeStep: number;
    /**
     * @nameZH 元件箭頭尺寸
     * @desc 元件箭頭的尺寸
     * @descEN The size of the component arrow
     */
    sizePopupArrow: number;
    /**
     * @nameZH 基礎高度
     * @nameEN Base Control Height
     * @desc Ant Design 中按鈕和輸入框等基礎控制項的高度
     * @descEN The height of the basic controls such as buttons and input boxes in Ant Design
     * @default 32
     */
    controlHeight: number;
    /**
     * @nameZH 基礎 zIndex
     * @nameEN Base zIndex
     * @desc 所有元件的基礎 Z 軸值，用於一些懸浮類的元件的可以基於該值 Z 軸控制層級，例如 BackTop、 Affix 等
     * @descEN The base Z axis value of all components, which can be used to control the level of some floating components based on the Z axis value, such as BackTop, Affix, etc.
     *
     * @default 0
     */
    zIndexBase: number;
    /**
     * @nameZH 浮層基礎 zIndex
     * @nameEN popup base zIndex
     * @desc 浮層類元件的基礎 Z 軸值，用於一些懸浮類的元件的可以基於該值 Z 軸控制層級，例如 FloatButton、 Affix、Modal 等
     * @descEN Base zIndex of component like FloatButton, Affix which can be cover by large popup
     * @default 1000
     */
    zIndexPopupBase: number;
    /**
     * @nameZH 圖片不透明度
     * @nameEN Define default Image opacity. Useful when in dark-like theme
     */
    opacityImage: number;
    /**
     * @nameZH 動畫時長變化單位
     * @nameEN Animation Duration Unit
     * @desc 用於控制動畫時長的變化單位
     * @descEN The unit of animation duration change
     * @default 100ms
     */
    motionUnit: number;
    /**
     * @nameZH 動畫基礎時長。
     * @nameEN Animation Base Duration.
     */
    motionBase: number;
    /**
     * @desc 預設動效曲率
     * @descEN Preset motion curve.
     */
    motionEaseOutCirc: string;
    /**
     * @desc 預設動效曲率
     * @descEN Preset motion curve.
     */
    motionEaseInOutCirc: string;
    /**
     * @desc 預設動效曲率
     * @descEN Preset motion curve.
     */
    motionEaseInOut: string;
    /**
     * @desc 預設動效曲率
     * @descEN Preset motion curve.
     */
    motionEaseOutBack: string;
    /**
     * @desc 預設動效曲率
     * @descEN Preset motion curve.
     */
    motionEaseInBack: string;
    /**
     * @desc 預設動效曲率
     * @descEN Preset motion curve.
     */
    motionEaseInQuint: string;
    /**
     * @desc 預設動效曲率
     * @descEN Preset motion curve.
     */
    motionEaseOutQuint: string;
    /**
     * @desc 預設動效曲率
     * @descEN Preset motion curve.
     */
    motionEaseOut: string;
    /**
     * @nameZH 線框風格
     * @nameEN Wireframe Style
     * @desc 用於將元件的視覺效果變為線框化，如果需要使用 V4 的效果，需要開啟設定項
     * @descEN Used to change the visual effect of the component to wireframe, if you need to use the V4 effect, you need to enable the configuration item
     * @default false
     */
    wireframe: boolean;
    /**
     * @nameZH 動畫風格
     * @nameEN Motion Style
     * @desc 用於設定動畫效果，為 `false` 時則關閉動畫
     * @descEN Used to configure the motion effect, when it is `false`, the motion is turned off
     * @default false
     */
    motion: boolean;
}
