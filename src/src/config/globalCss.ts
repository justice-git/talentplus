import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

const globalStyles = makeStyles((theme: Theme) => ({
    btnOutlined: {
        borderRadius: '10px',
        border: '1px solid #520231',
        borderColor: '#520231',
        color: '#EC008B',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: '20px',
        textTransform: 'none',
        background: 'unset',
        '&:hover': {
            // border: 0,
            background: 'rgba(5, 6, 15, 0.15)',
            color: '#520231',
            // fontWeight: 600,
            // fontSize: 17,
            // lineHeight: '22px',
        },
    },
    btnSmallOutlined: {
        background: '#EB078C',
        borderRadius: '10px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 16,
        lineHeight: '19.36px',
        textTransform: 'capitalize',
        color: theme.palette.common.white,
        border: '1px solid #EB078C',
        borderColor: '#EB078C',
        height: '50px',
        width: '160px',
        [theme.breakpoints.down('lg')]: {
            height: '50px',
            width: '153px',
            fontSize: 16,
        },
        // '&:hover': {
        //     border: 0,
        //     fontSize: 19,
        //     lineHeight: '23.24px',
        //     color: theme.palette.common.white,
        //     background:
        //         'linear-gradient(110.16deg, rgba(82, 2, 49, 0.8) -3.22%, rgba(249, 178, 219, 0.8) 104.03%), #EB078C',
        //     [theme.breakpoints.down('lg')]: {
        //         lineHeight: '20px',
        //         fontSize: 18,
        //     },
        // },cx
    },
    btnBigOutlined: {
        background: '#EB078C',
        borderRadius: '10px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 16,
        lineHeight: '29px',
        textTransform: 'capitalize',
        color: theme.palette.common.white,
        border: '1px solid #EB078C',
        borderColor: '#EB078C',
        height: '60px',
        width: '200px',
        [theme.breakpoints.down('lg')]: {
            height: '50px',
            width: '180px',
            fontSize: 16,
        },
        // '&:hover': {
        //     border: 0,
        //     fontSize: 27,
        //     lineHeight: '33px',
        //     color: theme.palette.common.white,
        //     background:
        //         'linear-gradient(110.16deg, rgba(82, 2, 49, 0.8) -3.22%, rgba(249, 178, 219, 0.8) 104.03%), #EB078C',
        //     [theme.breakpoints.down('lg')]: {
        //         lineHeight: '20px',
        //         fontSize: 18,
        //     },
        // },
    },
    btnContained: {
        background: '#EB078C',
        borderRadius: '10px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 16,
        lineHeight: '18px',
        textTransform: 'none',
        color: theme.palette.common.white,
        border: '1px solid #EB078C',
        borderColor: '#EB078C',
        // '&:hover': {
        //     border: 0,
        //     fontSize: 18,
        //     lineHeight: '23px',
        //     color: theme.palette.common.white,
        //     background:
        //         'linear-gradient(110.16deg, rgba(82, 2, 49, 0.8) -3.22%, rgba(249, 178, 219, 0.8) 104.03%), #EB078C',
        // },
    },
    btnOutlinedDrawer: {
        borderRadius: '4px',
        border: '1px solid #520231',
        borderColor: '#520231',
        color: '#EC008B',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: '19px',
        textTransform: 'none',
        width: '100%',
        height: '50px',
        background: 'unset',
        // '&:hover': {
        //     border: 0,
        //     background: 'rgba(5, 6, 15, 0.15)',
        //     color: '#520231',
        //     fontWeight: 600,
        //     fontSize: 19,
        //     lineHeight: '23px',
        // },
    },
    btnContainedDrawer: {
        background: '#EB078C',
        borderRadius: '4px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 16,
        lineHeight: '18px',
        textTransform: 'none',
        color: theme.palette.common.white,
        border: '1px solid #EB078C',
        borderColor: '#EB078C',
        width: '100%',
        height: '50px',
        // '&:hover': {
        //     border: 0,
        //     fontSize: 19,
        //     lineHeight: '23px',
        //     color: theme.palette.common.white,
        //     background:
        //         'linear-gradient(110.16deg, rgba(82, 2, 49, 0.8) -3.22%, rgba(249, 178, 219, 0.8) 104.03%), #EB078C',
        // },
    },
    btnLinks: {
        border: 0,
        color: '#EC008B',
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 15,
        lineHeight: '18px',
        textTransform: 'none',
        background: 'unset',
        boxShadow: 'unset',
        '&:hover': {
            border: 0,
            boxShadow: 'unset',
            background: 'unset',
            color: '#520231',
            fontWeight: 400,
            fontSize: 15,
            lineHeight: '18px',
        },
    },
    btnContainedRose: {
        width: 'auto',
        background: '#FEE7F4',
        borderRadius: '10px',
        border: '1px solid #FEE7F4',
        borderColor: '#FEE7F4',
        height: '28px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 10,
        lineHeight: '12px',
        textTransform: 'none',
        color: '#FF3AAE',
        '&:hover': {
            border: 0,
            fontSize: 11,
            lineHeight: '13px',
            color: theme.palette.common.white,
            background:
                'linear-gradient(110.16deg, rgba(82, 2, 49, 0.8) -3.22%, rgba(249, 178, 219, 0.8) 104.03%), #EB078C',
        },
    },
    btnContainedGreen: {
        background: '#2E7D32',
        borderRadius: '10px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 16,
        lineHeight: '18px',
        textTransform: 'none',
        color: theme.palette.common.white,
        border: '1px solid #2E7D32',
        borderColor: '#2E7D32',
        '&:hover': {
            border: 0,
            fontSize: 17,
            lineHeight: '20px',
            color: theme.palette.common.white,
            background:
                'linear-gradient(110.16deg, rgba(82, 2, 49, 0.8) -3.22%, rgba(249, 178, 219, 0.8) 104.03%), #EB078C',
        },
    },
    btnOutlinedRed: {
        borderRadius: '10px',
        border: '1px solid #D32F2F',
        borderColor: '#D32F2F',
        color: '#D32F2F',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: '20px',
        textTransform: 'none',
        background: 'unset',
        '&:hover': {
            border: 0,
            background: 'rgba(5, 6, 15, 0.15)',
            color: '#520231',
            fontWeight: 600,
            fontSize: 17,
            lineHeight: '21px',
        },
    },
    numberTxt: {
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '24px',
        color: '#EC008B',
        [theme.breakpoints.down('lg')]: {
            fontSize: 15,
            lineHeight: '22.5px',
        },
    },
    btnLinksInter: {
        border: 0,
        color: '#EC008B',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: '20px',
        textTransform: 'none',
        background: 'unset',
        boxShadow: 'unset',
        '&:hover': {
            border: 0,
            boxShadow: 'unset',
            background: 'unset',
            color: '#520231',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: '20px',
        },
    },

    title: {
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 24,
        lineHeight: '24px',
        color: theme.palette.common.black,
    },
    titlePink: {
        fontSize: 16,
        fontWeight: '700',
        color: theme.palette.roseTxt,
    },
    subTitle: {
        fontSize: 16,
        color: theme.palette.lightGreyTxt,
    },
    titleDialog: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 16,
        lineHeight: '19px',
        color: theme.palette.common.black,
    },
    titleDashboard: {
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 30,
        lineHeight: '45px',
        color: theme.palette.titleDarkRed,
    },
    subTitleDashboard: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,
        color: theme.palette.common.black,
    },
    dashboardDesc: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 15,
        lineHeight: '22.5px',
        color: theme.palette.lightGreyTxt,
    },
    descriptionTxt: {
        color: theme.palette.baseColorTxt,
        fontSize: '0.9rem',
    },
    baseBtnDashboard: {
        color: theme.palette.baseColor,
        backgroundColor: theme.palette.common.white,
        fontSize: '0.8rem',
        '&:focus': {
            backgroundColor: theme.palette.baseColor,
            color: theme.palette.common.white,
        },
        '&:hover': {
            backgroundColor: theme.palette.baseColor,
            color: theme.palette.common.white,
        },
    },
    linkBtn: {
        color: theme.palette.baseColor,
        fontSize: 13,
        fontFamily: 'Inter',
        fontWeight: 400,
        textTransform: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    txtLinkBtn: {
        color: theme.palette.lightGreyTxt,
        backgroundColor: theme.palette.common.white,
        textDecoration: 'none !important',
        fontSize: '0.8rem',
        margin: 0,
        lineHeight: 1.43,
        letterSpacing: '0.01071em',
        textDecorationColor: 'rgba(0, 0, 0, 0.4)',
        '&:hover': {
            textDecoration: 'none',
            color: theme.palette.baseColor,
        },
    },
    alternativeBtn: {
        color: theme.palette.primary.light,
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.common.white,
        border: '1px solid transparent',
        '&:focus': {
            backgroundColor: theme.palette.baseColor,
            color: theme.palette.common.white,
        },
        '&:hover': {
            backgroundColor: theme.palette.baseColor,
            color: theme.palette.common.white,
        },
    },
    fieldDisplayTitle: {
        color: theme.palette.lightGreyTxt,
        fontSize: 13,
        fontWeight: 'bold',
    },
    fieldDisplayTxt: {
        color: theme.palette.lightGreyTxt,
        fontSize: 13,
    },
    tabs: {
        '& .MuiTabs-indicator': {
            backgroundColor: theme.palette.baseColor,
        },
    },
    tab: {
        maxWidth: 63,
        width: '100%',
        backgroundColor: theme.palette.common.white,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 14,
        letterSpacing: 0.4,
        color: 'rgba(0, 0, 0, 0.6)',
        textTransform: 'capitalize',
        marginLeft: 24,
        '&:hover': {
            color: theme.palette.baseColor,
        },
        '&.Mui-selected': {
            color: theme.palette.baseColor,
            fontSize: 16,
        },
        /* '&.Mui-focusVisible': {
            backgroundColor: '#d1eaff',
            color: theme.palette.common.white,
        }, */
    },
    radioBox: {
        color: 'rgba(0, 0, 0, 0.6)',
        '&.Mui-checked': {
            color: theme.palette.baseColor,
        },
    },
    radioBoxLabel: {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: '24px',
        color: theme.palette.common.black,
    },
    radioBoxLabelActiveTxt: {
        color: '#EC008B',
    },
    activeLink: {
        color: '#EC008B !important',
    },

    gridBtnLogin: {
        marginTop: '24px',
        maxWidth: '95px !important',
        [theme.breakpoints.down('lg')]: {
            maxWidth: 'unset',
        },
    },

    gridBtnRegister: {
        maxWidth: '159.11px !important',
        [theme.breakpoints.down('lg')]: {
            maxWidth: 'unset',
        },
        marginTop: '24px',
        marginLeft: '16px',
    },
    baseText: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: '15px',
    },
    textTitle: {
        color: 'rgba(0, 0, 0, 0.6)',
    },
    textDesc: {
        color: theme.palette.common.black,
        fontWeight: 600,
    },
    txtDrag: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: '20px',
        color: '#667085',
    },
}));

export default globalStyles;
