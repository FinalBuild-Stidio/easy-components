export type ContentWidth = 'Fluid' | 'Fixed';
export type RenderSetting = {
    headerRender?: false;
    footerRender?: false;
    menuRender?: false;
    menuHeaderRender?: false;
};
export type PureSettings = {
    /**
     * @name theme for nav menu
     *
     * @type  'realDark' | 'light' | undefined
     */
    navTheme?: 'realDark' | 'light' | undefined;
    /**
     * @name layout 的布局方式
     * @type  'side' | 'top' | 'mix'
     *
     * @example 頂部選單 layout="top"
     * @example 側邊選單 layout="side"
     * @example 混合布局 既有頂部也有側邊 layout="mix"
     */
    layout?: 'side' | 'top' | 'mix';
    /** @name layout of content: `Fluid` or `Fixed`, only works when layout is top */
    contentWidth?: ContentWidth;
    /** @name sticky header */
    fixedHeader?: boolean;
    /** @name sticky siderbar */
    fixSiderbar?: boolean;
    /**
     * @name menu 相關的一些配置，可以配置選單的行為
     *
     * @example 關閉選單國際化  menu={{ locale: false }}
     * @example 默認打開所有的選單 menu={{ defaultOpenAll:true }}
     * @example 讓選單處於loading 狀態 menu={{ loading: true }}
     * @example 非同步載入選單資料 menu={{params:{ pathname } request: async (params) => { return [{name:"首頁",path=params.pathname}]} }}
     * @example 使用 MenuGroup 來聚合選單 menu={{ mode: 'group' }}
     * @example 取消自動關閉選單 menu={{ autoClose: false }}
     * @example 忽略收起時自動關閉選單 menu={{ ignoreFlatMenu: true }}
     */
    menu?: {
        /**
         * @name 選單國際化的配置
         */
        locale?: boolean;
        hideMenuWhenCollapsed?: boolean;
        /**
         * 收起時也展示標題
         */
        collapsedShowTitle?: boolean;
        /**
         * 收起時也展示 分組選單的標題
         */
        collapsedShowGroupTitle?: boolean;
        /**
         * @name 默認打開所有的選單
         */
        defaultOpenAll?: boolean;
        /**
         * @name 是否忽略用戶手動摺疊過的選單狀態，如選擇忽略，摺疊按鈕切換之後也可實現展開所有選單
         */
        ignoreFlatMenu?: boolean;
        /**
         * @name 選單的 loading 配置
         */
        loading?: boolean;
        /**
         * @name 選單的 loading 發生改變
         */
        onLoadingChange?: (loading?: boolean) => void;
        /**
         * @name 選單 API 請求時用的參數，只有 params 變化才會重新觸發 request
         *
         */
        params?: Record<string, any>;
        /**
         * @name 選單 API 請求的方法，只有 params 變化才會重新觸發 request
         */
        request?: (params: Record<string, any>, defaultMenuData: any) => Promise<any>;
        /**
         * @name 選單聚合的模式
         */
        type?: 'sub' | 'group';
        /**
         * @name 取消自動關閉選單
         */
        autoClose?: false;
    };
    /**
     * 設置為 false，在 layout 中只展示 pageName，而不是 pageName - title
     *
     * @name Layout 的 title，也會顯示在瀏覽器標籤上
     */
    title?: string | false;
    /**
     * Your custom iconfont Symbol script Url eg：//at.alicdn.com/t/font_1039637_btcrd5co4w.js
     * 注意：如果需要圖示多色，Iconfont 圖示項目裡要進行批次去色處理 Usage
     */
    iconfontUrl?: string;
    /** @name 主色，需要配合 umi 使用 */
    colorPrimary?: string;
    /** @name 全局增加濾鏡 */
    colorWeak?: boolean;
    /**
     * 只在 mix 模式下生效
     *
     * @name 切割選單
     */
    splitMenus?: boolean;
    /**
     * @name 在選單為空時隱藏Sider
     */
    suppressSiderWhenMenuEmpty?: boolean;
    /**
     * 側邊選單模式
     */
    siderMenuType?: 'sub' | 'group';
};
export type ProSettings = PureSettings & RenderSetting;
declare const defaultSettings: ProSettings;
export { defaultSettings };
