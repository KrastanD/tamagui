import { SvgProps } from 'react-native-svg';
export declare type IconProps = Omit<SvgProps, 'onPress' | 'onPressIn' | 'onPressOut'> & {
    size?: number;
    color?: string;
    style?: any;
    onClick?: ()=> void;
};
//# sourceMappingURL=IconProps.d.ts.map