export interface StyleMapToken {
  /**
   * @nameZH 線寬
   * @nameEN Line Width
   * @desc 描邊類元件的預設線寬，如 Button、Input、Select 等輸入類控制項。
   * @descEN The default line width of the outline class components, such as Button, Input, Select, etc.
   * @default 1
   */
  lineWidthBold: number

  /**
   * @nameZH XS號圓角
   * @nameEN XS Border Radius
   * @desc XS號圓角，用於元件中的一些小圓角，如 Segmented 、Arrow 等一些內部圓角的元件 style 中。
   * @descEN XS size border radius, used in some small border radius components, such as Segmented, Arrow and other components with small border radius.
   * @default 2
   */
  borderRadiusXS: number
  /**
   * @nameZH SM號圓角
   * @nameEN SM Border Radius
   * @desc SM號圓角，用於元件小尺寸下的圓角，如 Button、Input、Select 等輸入類控制項在 small size 下的圓角
   * @descEN SM size border radius, used in small size components, such as Button, Input, Select and other input components in small size
   * @default 4
   */
  borderRadiusSM: number
  /**
   * @nameZH LG號圓角
   * @nameEN LG Border Radius
   * @desc LG號圓角，用於元件中的一些大圓角，如 Card、Modal 等一些元件 style 。
   * @descEN LG size border radius, used in some large border radius components, such as Card, Modal and other components.
   * @default 8
   */
  borderRadiusLG: number
  /**
   * @nameZH 外部圓角
   * @nameEN Outer Border Radius
   * @default 4
   * @desc 外部圓角
   * @descEN Outer border radius
   */
  borderRadiusOuter: number
}
