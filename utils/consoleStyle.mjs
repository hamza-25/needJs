const consoleStyle = (message='', color='gray', bold=false) => {
    const style = {
        red: '\x1b[31m',
        green: '\x1b[32m',
        yellow: '\x1b[33m',
        blue: '\x1b[34m',
        magenta: '\x1b[35m',
        cyan: '\x1b[36m',
        white: '\x1b[37m',
        black: '\x1b[30m',
        rest: '\x1b[0m',
        bold: '\x1b[1m',
        gray: '\x1b[90m',
        end: '\x1b[0m',
    }

    if (!(color in style))
        return `${style.gray}${message}${style.end}`;

    return `${bold ? style.bold : style.rest}${style[color]}${message}${style.end}`;
}

export default consoleStyle;