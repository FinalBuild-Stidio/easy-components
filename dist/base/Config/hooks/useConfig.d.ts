declare function useConfig(): {
    componentDisabled: import("../DisabledContext").DisabledType;
    componentSize: import("../SizeContext").OrginSizeType;
};
export default useConfig;
