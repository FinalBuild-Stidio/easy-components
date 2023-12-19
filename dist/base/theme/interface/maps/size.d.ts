export interface SizeMapToken {
    /**
     * @nameZH XXL
     * @default 48
     */
    sizeXXL: number;
    /**
     * @nameZH XL
     * @default 32
     */
    sizeXL: number;
    /**
     * @nameZH LG
     * @default 24
     */
    sizeLG: number;
    /**
     * @nameZH MD
     * @default 20
     */
    sizeMD: number;
    /** Same as size by default, but could be larger in compact mode */
    sizeMS: number;
    /**
     * @nameZH 預設
     * @desc 預設尺寸
     * @default 16
     */
    size: number;
    /**
     * @nameZH SM
     * @default 12
     */
    sizeSM: number;
    /**
     * @nameZH XS
     * @default 8
     */
    sizeXS: number;
    /**
     * @nameZH XXS
     * @default 4
     */
    sizeXXS: number;
}
export interface HeightMapToken {
    /** Only Used for control inside component like Multiple Select inner selection item */
    /**
     * @nameZH 更小的元件高度
     * @nameEN XS component height
     * @desc 更小的元件高度
     * @descEN XS component height
     */
    controlHeightXS: number;
    /**
     * @nameZH 較小的元件高度
     * @nameEN SM component height
     * @desc 較小的元件高度
     * @descEN SM component height
     */
    controlHeightSM: number;
    /**
     * @nameZH 較高的元件高度
     * @nameEN LG component height
     * @desc 較高的元件高度
     * @descEN LG component height
     */
    controlHeightLG: number;
}
