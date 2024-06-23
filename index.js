const _0x205b25 = _0x4273;
(function (_0x421cb7, _0x31eb4c) {
    const _0x53b1b1 = _0x4273, _0x58261a = _0x421cb7();
    while (!![]) {
        try {
            const _0x524328 = -parseInt(_0x53b1b1(0x15a)) / (0x134a + -0x373 * 0x7 + 0x4dc) + -parseInt(_0x53b1b1(0x130)) / (-0x1b88 + -0x225d + 0x3de7) * (-parseInt(_0x53b1b1(0x1e5)) / (-0x1a3 * -0xd + -0x99a + -0xbaa * 0x1)) + -parseInt(_0x53b1b1(0x1ee)) / (-0x798 + -0x24b * -0x2 + 0x306) * (-parseInt(_0x53b1b1(0x1e8)) / (-0xe89 * -0x1 + 0x56 + -0xeda * 0x1)) + -parseInt(_0x53b1b1(0x144)) / (0x1bd9 + 0x1af5 + 0x6d9 * -0x8) + parseInt(_0x53b1b1(0x25c)) / (0x1c31 + 0x12ec + -0x2f16) + -parseInt(_0x53b1b1(0x1fe)) / (0x13 * -0x104 + -0x220f + 0xad * 0x4f) * (-parseInt(_0x53b1b1(0x12f)) / (-0x1b7 + 0x4 * 0x2fb + 0x6 * -0x1b2)) + -parseInt(_0x53b1b1(0x150)) / (-0x235c + -0x1124 * 0x2 + 0x173a * 0x3);
            if (_0x524328 === _0x31eb4c)
                break;
            else
                _0x58261a['push'](_0x58261a['shift']());
        } catch (_0x4cfca5) {
            _0x58261a['push'](_0x58261a['shift']());
        }
    }
}(_0x1d44, -0x51c1b + -0x1e60e + 0x1 * 0x1461f7));
import _0x2809f9 from 'fs';
import _0x5c36cf from 'circular-json';
import { execSync } from 'child_process';
import { v4 as _0x1ac437 } from 'uuid';
import _0x324347 from 'axios';
import { exit } from 'process';
import _0x198f7a from 'https';
const yellow = _0x205b25(0x1e0), green = _0x205b25(0x232), red = _0x205b25(0x25f), white = '\x1b[1;37m', cyan = _0x205b25(0x27d), blue = '\x1b[1;34m', underline = _0x205b25(0x123), reset = '\x1b[0m', info = blue + _0x205b25(0x12c) + white + '\x20', error = red + _0x205b25(0x251) + white + '\x20', ask = yellow + _0x205b25(0x13c) + white + '\x20', tokenfile = _0x205b25(0x23f), sharelogf = './share.log';
try {
    console[_0x205b25(0x23c)](getTimeStamp() + info + 'Checking\x20for\x20updates...');
    const response = execSync(_0x205b25(0x240))[_0x205b25(0x1ce)]();
    if (response[_0x205b25(0x1c7)](_0x205b25(0x1c4)))
        console[_0x205b25(0x23c)](getTimeStamp() + info + _0x205b25(0x258));
    else {
        const commitMessage = execSync('git\x20log\x20-1\x20--pretty=%B')['toString']();
        console['log'](getTimeStamp() + info + _0x205b25(0x253) + yellow + 'FSS'), console['log'](getTimeStamp() + info + ('Update\x20Message\x20:\x20' + (green + commitMessage))), process[_0x205b25(0x143)]();
    }
} catch (_0x3f5091) {
    console[_0x205b25(0x23c)](getTimeStamp() + error + 'Update\x20failed.'), console['log'](getTimeStamp() + error + _0x3f5091[_0x205b25(0x1b4)]), process[_0x205b25(0x143)]();
}
const mainchoices = [
        green + _0x205b25(0x175) + white + '-\x20' + yellow + _0x205b25(0x192),
        green + 'SHOW\x20TOKENS\x20' + white + '-\x20' + yellow + '(Display\x20Tokens)',
        green + _0x205b25(0x177) + white + '-\x20' + yellow + _0x205b25(0x20c),
        green + _0x205b25(0x152) + white + '-\x20' + yellow + _0x205b25(0x228),
        green + 'EXIT\x20' + white + '-\x20' + yellow + _0x205b25(0x249)
    ], tokenchoices = [
        green + 'ADD\x20TOKEN\x20' + white + '-\x20' + yellow + '(Add\x20Facebook\x20Access\x20Token)',
        green + _0x205b25(0x11d) + white + '-\x20' + yellow + _0x205b25(0x230),
        green + _0x205b25(0x24e) + white + '-\x20' + yellow + _0x205b25(0x217)
    ], workerschoices = [
        green + '1\x20' + yellow + _0x205b25(0x1aa) + green + 'Slow' + yellow + _0x205b25(0x27e) + green + _0x205b25(0x1ad) + yellow + ')\x20' + blue + '(recommended)' + reset,
        green + '2\x20' + yellow + '(Speed:\x20' + green + 'Normal' + yellow + _0x205b25(0x27e) + green + 'Standard' + yellow + _0x205b25(0x21a) + reset
    ], removeTokenHelp = '\x0a' + info + _0x205b25(0x275) + green + 'a\x20' + white + '-\x20' + yellow + _0x205b25(0x1f5) + green + 'b\x20' + white + '-\x20' + yellow + _0x205b25(0x215);
var headers = {
    'authority': _0x205b25(0x14a),
    'user-agent': 'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/107.0.0.0\x20Safari/537.36',
    'accept': _0x205b25(0x147),
    'accept-language': _0x205b25(0x1b5),
    'sec-ch-ua': _0x205b25(0x246),
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': _0x205b25(0x21b),
    'sec-fetch-dest': _0x205b25(0x1df),
    'sec-fetch-mode': _0x205b25(0x274),
    'sec-fetch-site': _0x205b25(0x18f),
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1'
};
const httpsAgent = new _0x198f7a[(_0x205b25(0x173))]({
    'rejectUnauthorized': ![],
    'secureProtocol': _0x205b25(0x118)
});
function getTime() {
    const _0x231caa = _0x205b25, _0x5240b2 = {
            'PCVYw': _0x231caa(0x121),
            'kllAr': _0x231caa(0x140)
        }, _0x2da9ec = new Date(), _0x3fc291 = new Intl['DateTimeFormat'](_0x5240b2['PCVYw'], {
            'day': _0x5240b2[_0x231caa(0x1d1)],
            'hour': _0x5240b2['kllAr'],
            'minute': _0x5240b2['kllAr'],
            'hour12': !![]
        })[_0x231caa(0x15c)](_0x2da9ec);
    return _0x3fc291;
}
String['prototype'][_0x205b25(0x1b1)] = function () {
    const _0x4c2e9d = _0x205b25, _0x2710a2 = {
            'fmhQc': function (_0x1f82c9, _0x3b7c55) {
                return _0x1f82c9 + _0x3b7c55;
            }
        }, _0x4a18d3 = this[_0x4c2e9d(0x1f0)](0xb21 * -0x2 + 0x1c2c + 0x2f5 * -0x2, 0x29 * 0xbf + 0x1 * -0x221d + -0x387 * -0x1)['toUpperCase']();
    return _0x2710a2[_0x4c2e9d(0x277)](_0x4a18d3, this[_0x4c2e9d(0x1f0)](-0x1d6 + 0x1 * 0x1ff9 + -0x1e22, undefined));
};
function setClear() {
    const _0x46b99d = _0x205b25, _0x506e54 = {
            'EERUY': function (_0x4150e9, _0x28123d) {
                return _0x4150e9 === _0x28123d;
            },
            'siYcq': _0x46b99d(0x24d),
            'NJnIR': function (_0x2a2a43, _0x3ca610, _0x5a82e0) {
                return _0x2a2a43(_0x3ca610, _0x5a82e0);
            },
            'nzuSf': function (_0x120f72, _0x452de3, _0x4cd0e3) {
                return _0x120f72(_0x452de3, _0x4cd0e3);
            },
            'DwOBi': 'clear',
            'oUIaa': 'inherit'
        };
    if (_0x506e54[_0x46b99d(0x206)](process['platform'], _0x506e54[_0x46b99d(0x181)])) {
        _0x506e54['NJnIR'](execSync, 'cls', { 'stdio': 'inherit' });
        return;
    }
    _0x506e54[_0x46b99d(0x1cb)](execSync, _0x506e54['DwOBi'], { 'stdio': _0x506e54[_0x46b99d(0x166)] });
}
let tokenParsed, tokens, emails;
function updateToken() {
    const _0x4a707f = _0x205b25, _0x1a5a18 = {
            'rOzDZ': _0x4a707f(0x21f),
            'HbqFM': function (_0x52e0c9, _0x34e6b5) {
                return _0x52e0c9 + _0x34e6b5;
            },
            'yypRz': function (_0x6ea971, _0x3507e3) {
                return _0x6ea971 + _0x3507e3;
            },
            'SYkVL': function (_0x8530eb) {
                return _0x8530eb();
            }
        };
    try {
        const _0x4f2551 = _0x2809f9[_0x4a707f(0x25a)](tokenfile, _0x1a5a18['rOzDZ']);
        tokenParsed = JSON[_0x4a707f(0x269)](_0x4f2551), tokens = tokenParsed[_0x4a707f(0x124)], emails = tokenParsed[_0x4a707f(0x13f)];
    } catch (_0x51d3b5) {
        console['log'](_0x1a5a18['HbqFM'](_0x1a5a18['yypRz'](_0x1a5a18[_0x4a707f(0x136)](getTimeStamp), error), _0x51d3b5[_0x4a707f(0x1b4)])), _0x1a5a18[_0x4a707f(0x136)](exit);
    }
}
updateToken();
const version = _0x205b25(0x213), banner = green + '\x20___\x20___\x20___\x20_\x20\x20' + yellow + _0x205b25(0x1db) + blue + _0x205b25(0x133) + (red + underline) + '(' + version + ').' + reset + green + _0x205b25(0x17b);
function getTimeStamp() {
    const _0x2e7f2d = _0x205b25, _0x17b508 = {
            'wiCxy': function (_0x3e2d48, _0x21379d) {
                return _0x3e2d48(_0x21379d);
            },
            'NYHaa': function (_0x266b62, _0x505ae4) {
                return _0x266b62(_0x505ae4);
            }
        }, _0x2dd181 = new Date(), _0x313985 = _0x17b508['wiCxy'](String, _0x2dd181['getHours']())[_0x2e7f2d(0x126)](0x218f + -0x55d + -0x1c30, '0'), _0xdeadd8 = _0x17b508[_0x2e7f2d(0x1a5)](String, _0x2dd181[_0x2e7f2d(0x13b)]())[_0x2e7f2d(0x126)](-0x1f88 + 0x18a + 0x1e00, '0'), _0x3b75c8 = _0x17b508[_0x2e7f2d(0x138)](String, _0x2dd181['getSeconds']())[_0x2e7f2d(0x126)](-0x203a + -0x8 * 0x2a5 + -0x33 * -0x10c, '0');
    return yellow + '[' + _0x313985 + ':' + _0xdeadd8 + ':' + _0x3b75c8 + ']' + reset + '\x20';
}
const {default: inquirer} = await import(_0x205b25(0x15f)), {default: getPassword} = await import(_0x205b25(0x19f));
function delay(_0x3e5d12) {
    return new Promise(_0x53549f => setTimeout(_0x53549f, _0x3e5d12));
}
async function animate(_0x1c1e2d, _0x350a9a = 0x17e5 + 0x884 + -0x2065 * 0x1) {
    const _0x2dd427 = _0x205b25, _0x316b51 = {
            'zMGJF': _0x2dd427(0x205),
            'oElWz': _0x2dd427(0x141)
        };
    _0x1c1e2d = _0x1c1e2d[_0x2dd427(0x1ce)]();
    for (const _0x44ea82 of _0x1c1e2d) {
        await delay(_0x350a9a), process[_0x316b51[_0x2dd427(0x197)]][_0x316b51[_0x2dd427(0x245)]](_0x44ea82);
    }
    console[_0x2dd427(0x23c)]();
}
let currentUTCDate = new Date(), offset = 0xb * -0xed + 0x24d3 + 0xd * -0x20c, currentDate = new Date(currentUTCDate[_0x205b25(0x259)]() + offset * (-0x26c7 + 0x14b4 + 0x2023) * (-0xf0d + -0x1a46 + 0x1 * 0x2d3b)), expirationDate = new Date(_0x205b25(0x184));
const monthNames = [
    _0x205b25(0x1af),
    _0x205b25(0x12d),
    _0x205b25(0x267),
    _0x205b25(0x148),
    _0x205b25(0x139),
    _0x205b25(0x1bf),
    _0x205b25(0x235),
    _0x205b25(0x23b),
    _0x205b25(0x203),
    _0x205b25(0x242),
    'November',
    'December'
];
currentDate >= expirationDate && (console[_0x205b25(0x23c)](getTimeStamp() + error + _0x205b25(0x1fc)), exit());
console['log'](getTimeStamp() + info + (_0x205b25(0x1a3) + (yellow + underline + monthNames[expirationDate[_0x205b25(0x1f6)]()]) + '\x20' + expirationDate['getDate']() + '\x20' + (expirationDate['getFullYear']() + reset))), await delay(0xd0c + 0x1a * -0x9d + -0x9 * -0x27e), setClear();
class prompts {
    static [_0x205b25(0x264)] = {
        'name': _0x205b25(0x1ff),
        'type': 'input',
        'prefix': '',
        'message': ask + _0x205b25(0x238),
        'validate': cmd => {
            const _0x788f11 = _0x205b25, nOzdoy = {
                    'XlpRc': _0x788f11(0x17a),
                    'iOMDI': function (x, y) {
                        return x === y;
                    },
                    'YOCmn': function (x, y) {
                        return x + y;
                    },
                    'dSWIS': _0x788f11(0x26f),
                    'VVrfn': function (callee, param1) {
                        return callee(param1);
                    },
                    'dREbf': function (x, y) {
                        return x <= y;
                    },
                    'Jnzex': function (x, y) {
                        return x > y;
                    }
                }, aWgsKP = nOzdoy[_0x788f11(0x15b)][_0x788f11(0x1f1)]('|');
            let gAwuvF = 0x7 * -0x193 + 0x2 * 0xdd8 + -0x10ab;
            while (!![]) {
                switch (aWgsKP[gAwuvF++]) {
                case '0':
                    if (nOzdoy[_0x788f11(0x1cd)](cmd[_0x788f11(0x262)](), ''))
                        return nOzdoy[_0x788f11(0x23a)](info, _0x788f11(0x202));
                    continue;
                case '1':
                    if (!/^\d+$/[_0x788f11(0x15e)](cmd))
                        return nOzdoy[_0x788f11(0x23a)](info, nOzdoy[_0x788f11(0x151)]);
                    continue;
                case '2':
                    return !![];
                case '3':
                    cmd = nOzdoy[_0x788f11(0x24a)](parseInt, cmd);
                    continue;
                case '4':
                    if (nOzdoy[_0x788f11(0x1a9)](cmd, 0x22f3 + 0x30d + -0x2600) || nOzdoy['Jnzex'](cmd, -0x252a + 0x1ea8 + 0x686))
                        return nOzdoy[_0x788f11(0x23a)](error, _0x788f11(0x244));
                    continue;
                }
                break;
            }
        }
    };
    static [_0x205b25(0x12b)] = {
        'name': 'url',
        'type': 'input',
        'prefix': '',
        'message': ask + _0x205b25(0x210),
        'validate': url => {
            const _0x3e2f76 = _0x205b25, pYZTGc = {
                    'WZcht': function (x, y) {
                        return x === y;
                    },
                    'pkgNh': function (x, y) {
                        return x + y;
                    },
                    'thsNG': _0x3e2f76(0x17f)
                };
            if (pYZTGc[_0x3e2f76(0x196)](url[_0x3e2f76(0x262)](), ''))
                return pYZTGc[_0x3e2f76(0x12a)](error, _0x3e2f76(0x1f4));
            if (!url[_0x3e2f76(0x224)]('http://www.facebook.com/') && !url['startsWith'](pYZTGc[_0x3e2f76(0x1d0)]))
                return error + _0x3e2f76(0x159);
            return !![];
        }
    };
    static [_0x205b25(0x1e7)] = {
        'name': 'amount',
        'type': _0x205b25(0x1e3),
        'prefix': '',
        'message': ask + 'Share\x20Amount?~#',
        'validate': amount => {
            const _0x333b70 = _0x205b25, tDZnxN = {
                    'mmDAV': function (x, y) {
                        return x === y;
                    },
                    'zsZzC': _0x333b70(0x1f4),
                    'xzRLI': function (x, y) {
                        return x + y;
                    },
                    'sMzZt': function (callee, param1) {
                        return callee(param1);
                    },
                    'Ubsrj': function (x, y) {
                        return x <= y;
                    }
                };
            if (tDZnxN[_0x333b70(0x255)](amount[_0x333b70(0x262)](), ''))
                return error + tDZnxN[_0x333b70(0x186)];
            if (!/^\d+$/[_0x333b70(0x15e)](amount))
                return tDZnxN[_0x333b70(0x158)](error, _0x333b70(0x26f));
            amount = tDZnxN[_0x333b70(0x222)](parseInt, amount);
            if (tDZnxN['Ubsrj'](amount, 0x1 * 0x1eaf + -0x8bf + 0x30 * -0x75))
                return error + _0x333b70(0x159);
            return !![];
        }
    };
    static ['getUserName'] = {
        'name': _0x205b25(0x180),
        'type': _0x205b25(0x1e3),
        'prefix': '',
        'message': ask + _0x205b25(0x220),
        'validate': username => {
            const _0x1cbfbc = _0x205b25, aoyFtr = {
                    'cEsMy': function (x, y) {
                        return x === y;
                    },
                    'xOjQC': function (x, y) {
                        return x + y;
                    },
                    'wkple': _0x1cbfbc(0x1f4)
                };
            if (aoyFtr[_0x1cbfbc(0x1eb)](username[_0x1cbfbc(0x262)](), ''))
                return aoyFtr['xOjQC'](error, aoyFtr[_0x1cbfbc(0x1c9)]);
            return !![];
        }
    };
    static ['askBack'] = {
        'name': _0x205b25(0x195),
        'type': _0x205b25(0x1e3),
        'prefix': '',
        'message': ask + _0x205b25(0x157)
    };
    static [_0x205b25(0x254)] = {
        'name': '_',
        'type': 'input',
        'prefix': '',
        'message': ask + _0x205b25(0x1d9)
    };
    static ['tokenManagement'] = {
        'name': _0x205b25(0x218),
        'type': _0x205b25(0x1e3),
        'prefix': '',
        'message': ask + _0x205b25(0x1e2),
        'validate': tokencmd => {
            const _0x26296e = _0x205b25, yGiIMG = {
                    'ccAKP': '4|0|3|1|2',
                    'IEYju': function (x, y) {
                        return x + y;
                    },
                    'MtglQ': function (x, y) {
                        return x > y;
                    },
                    'Ajxbj': _0x26296e(0x244),
                    'VKaxw': function (callee, param1) {
                        return callee(param1);
                    },
                    'PsefO': function (x, y) {
                        return x === y;
                    }
                }, EFDpwj = yGiIMG['ccAKP'][_0x26296e(0x1f1)]('|');
            let uEyovP = -0x80a + -0x12a1 + -0x1aab * -0x1;
            while (!![]) {
                switch (EFDpwj[uEyovP++]) {
                case '0':
                    if (!/^\d+$/['test'](tokencmd))
                        return yGiIMG[_0x26296e(0x1ec)](error, _0x26296e(0x26f));
                    continue;
                case '1':
                    if (tokencmd <= -0x191 * 0x1 + -0xa7e * 0x3 + 0x210b || yGiIMG[_0x26296e(0x189)](tokencmd, 0x2003 + -0x1b48 + -0x4b8))
                        return yGiIMG[_0x26296e(0x1ec)](error, yGiIMG[_0x26296e(0x243)]);
                    continue;
                case '2':
                    return !![];
                case '3':
                    tokencmd = yGiIMG[_0x26296e(0x1ae)](parseInt, tokencmd);
                    continue;
                case '4':
                    if (yGiIMG[_0x26296e(0x169)](tokencmd[_0x26296e(0x262)](), ''))
                        return error + _0x26296e(0x1a2);
                    continue;
                }
                break;
            }
        }
    };
    static ['getWorkers'] = {
        'name': _0x205b25(0x194),
        'type': _0x205b25(0x268),
        'prefix': '',
        'message': ask + 'Number\x20of\x20Workers~#',
        'choices': workerschoices
    };
    static [_0x205b25(0x26c)] = {
        'name': _0x205b25(0x256),
        'type': _0x205b25(0x1e3),
        'prefix': '',
        'message': ask + 'Remove\x20Token\x20(press\x20h\x20for\x20help)~#',
        'validate': tokenIndex => {
            const _0x11021b = _0x205b25, sphHkr = {
                    'RKFQK': function (x, y) {
                        return x === y;
                    },
                    'MfVKW': function (x, y) {
                        return x + y;
                    },
                    'TdArG': function (x, y) {
                        return x === y;
                    },
                    'SULlp': function (x, y) {
                        return x === y;
                    },
                    'MEBEX': 'Please\x20Enter\x20Only\x20Numbers',
                    'LzmOK': function (callee, param1) {
                        return callee(param1);
                    },
                    'dkYPD': function (x, y) {
                        return x <= y;
                    },
                    'HwLRX': _0x11021b(0x244)
                };
            if (sphHkr[_0x11021b(0x1c8)](tokenIndex['trim'](), ''))
                return sphHkr[_0x11021b(0x1f9)](error, _0x11021b(0x159));
            if (sphHkr['TdArG'](tokenIndex[_0x11021b(0x1ef)](), 'h'))
                return removeTokenHelp;
            if (sphHkr[_0x11021b(0x18d)](tokenIndex[_0x11021b(0x1ef)](), 'a') || tokenIndex[_0x11021b(0x1ef)]() === 'b')
                return !![];
            if (!/^\d+$/[_0x11021b(0x15e)](tokenIndex))
                return sphHkr['MfVKW'](error, sphHkr[_0x11021b(0x1de)]);
            tokenIndex = sphHkr['LzmOK'](parseInt, tokenIndex);
            if (sphHkr['dkYPD'](tokenIndex, 0x933 + -0xd6e + 0x43b) || tokenIndex > tokens[_0x11021b(0x146)])
                return sphHkr[_0x11021b(0x1f9)](error, sphHkr['HwLRX']);
            return !![];
        }
    };
    static [_0x205b25(0x1b2)] = {
        'name': 'selectedToken',
        'type': _0x205b25(0x1e3),
        'prefix': '',
        'message': ask + _0x205b25(0x19a),
        'validate': token => {
            const _0x1c61c1 = _0x205b25, iJUwYM = {
                    'cgSmL': _0x1c61c1(0x1ac),
                    'yBhML': function (x, y) {
                        return x <= y;
                    },
                    'jkCvf': function (x, y) {
                        return x > y;
                    },
                    'QnFGN': function (x, y) {
                        return x + y;
                    },
                    'scmgB': _0x1c61c1(0x244),
                    'rIRyW': function (callee, param1) {
                        return callee(param1);
                    },
                    'BnPjs': function (x, y) {
                        return x === y;
                    },
                    'MKINw': _0x1c61c1(0x159),
                    'ivrAA': function (x, y) {
                        return x + y;
                    }
                }, RUzqyr = iJUwYM[_0x1c61c1(0x1dc)]['split']('|');
            let jcsATL = 0xc28 + -0x24ae + -0x56 * -0x49;
            while (!![]) {
                switch (RUzqyr[jcsATL++]) {
                case '0':
                    if (iJUwYM['yBhML'](token, -0xe * -0xf7 + -0x82 * 0x25 + 0x152 * 0x4) || iJUwYM[_0x1c61c1(0x14f)](token, tokens[_0x1c61c1(0x146)]))
                        return iJUwYM[_0x1c61c1(0x1fa)](error, iJUwYM[_0x1c61c1(0x19d)]);
                    continue;
                case '1':
                    token = iJUwYM[_0x1c61c1(0x227)](parseInt, token);
                    continue;
                case '2':
                    if (iJUwYM['BnPjs'](token['trim'](), ''))
                        return error + iJUwYM[_0x1c61c1(0x1dd)];
                    continue;
                case '3':
                    if (!/^\d+$/[_0x1c61c1(0x15e)](token))
                        return iJUwYM['ivrAA'](error, _0x1c61c1(0x26f));
                    continue;
                case '4':
                    return !![];
                }
                break;
            }
        }
    };
}
async function getCmd() {
    const _0x339e13 = _0x205b25, _0x578de7 = {
            'MrMoj': function (_0x4b76c0, _0x4a6271) {
                return _0x4b76c0(_0x4a6271);
            }
        }, {cmd: _0x2604f8} = await inquirer[_0x339e13(0x129)](prompts[_0x339e13(0x264)]);
    return _0x578de7[_0x339e13(0x149)](parseInt, _0x2604f8);
}
async function getToken() {
    const _0x134928 = _0x205b25, _0x5c7d8f = {
            'GmwIM': function (_0x54460b) {
                return _0x54460b();
            },
            'ltZJU': function (_0xfc34ac, _0x32bd43) {
                return _0xfc34ac(_0x32bd43);
            },
            'zpbDR': function (_0x1f0c68, _0x43b68b) {
                return _0x1f0c68 + _0x43b68b;
            },
            'ooCfr': function (_0x42ca0b, _0x29589c) {
                return _0x42ca0b + _0x29589c;
            },
            'xuzkh': function (_0x3ba5f8, _0x5d9a13, _0x5505b9) {
                return _0x3ba5f8(_0x5d9a13, _0x5505b9);
            },
            'FKwST': function (_0x57191e, _0x78be5b) {
                return _0x57191e + _0x78be5b;
            },
            'ikpas': _0x134928(0x229),
            'xWYLY': _0x134928(0x185),
            'dYYIo': _0x134928(0x132),
            'qpSTH': _0x134928(0x241),
            'ZqalL': _0x134928(0x207),
            'EvpCX': _0x134928(0x122),
            'EEszH': function (_0x186b24) {
                return _0x186b24();
            },
            'xaRyB': _0x134928(0x1d5),
            'rjEvJ': _0x134928(0x125),
            'YPzPx': 'false',
            'SoiIZ': _0x134928(0x1c5),
            'gRhZd': function (_0x2be82a, _0x5c7992) {
                return _0x2be82a in _0x5c7992;
            },
            'atfJq': _0x134928(0x171),
            'zHiXM': function (_0x11b602, _0x2dda87) {
                return _0x11b602 + _0x2dda87;
            },
            'SbAyn': function (_0x54a3b2, _0x26e348) {
                return _0x54a3b2 + _0x26e348;
            },
            'XARGX': function (_0x15e6b0) {
                return _0x15e6b0();
            },
            'FbkdQ': function (_0x3e6f52) {
                return _0x3e6f52();
            },
            'dLQqE': function (_0x53d3ff, _0x78f3d2) {
                return _0x53d3ff + _0x78f3d2;
            },
            'ljNAC': _0x134928(0x13a),
            'JMSBT': function (_0x2b080b) {
                return _0x2b080b();
            },
            'HHrik': function (_0x1df4e7, _0x938c9c) {
                return _0x1df4e7 + _0x938c9c;
            },
            'jEndF': function (_0x18eb17, _0x4fc791) {
                return _0x18eb17 + _0x4fc791;
            },
            'INhQn': function (_0x232586) {
                return _0x232586();
            },
            'lrJzg': function (_0x4093ed, _0x239283) {
                return _0x4093ed === _0x239283;
            },
            'ogkqe': function (_0x371c58, _0x227eed) {
                return _0x371c58 + _0x227eed;
            },
            'JKAHT': function (_0x30b74a, _0x2d473c) {
                return _0x30b74a + _0x2d473c;
            },
            'TykDh': function (_0x30f16a, _0x5bb0e3) {
                return _0x30f16a === _0x5bb0e3;
            },
            'XbGLp': _0x134928(0x137),
            'ufMbw': function (_0x3b20a6, _0x4073) {
                return _0x3b20a6 + _0x4073;
            },
            'oCiTa': _0x134928(0x26a),
            'OApQL': function (_0xe3d88d, _0x4aa029) {
                return _0xe3d88d + _0x4aa029;
            },
            'bHjHo': function (_0x1efa94) {
                return _0x1efa94();
            },
            'JdxNV': function (_0x306f52, _0x741c54) {
                return _0x306f52 + _0x741c54;
            },
            'QLDDr': function (_0x1a44ed, _0x5717f9) {
                return _0x1a44ed + _0x5717f9;
            },
            'GhPIk': function (_0x51c964, _0x4bb243) {
                return _0x51c964 + _0x4bb243;
            },
            'nxwiB': function (_0x1a1747, _0x3812cd) {
                return _0x1a1747 + _0x3812cd;
            }
        };
    try {
        _0x5c7d8f[_0x134928(0x208)](setClear), await _0x5c7d8f[_0x134928(0x226)](animate, banner), await animate(_0x5c7d8f[_0x134928(0x200)](_0x5c7d8f[_0x134928(0x208)](getTimeStamp) + error, yellow + _0x134928(0x14e) + red + _0x134928(0x23e)), -0x1630 + -0xa3 * 0x22 + 0x1 * 0x2be0);
        let {username: _0x44e64f} = await inquirer[_0x134928(0x129)](prompts[_0x134928(0x266)]);
        _0x44e64f[_0x134928(0x224)]('09') && (_0x44e64f = _0x44e64f[_0x134928(0x1f0)](-0x26c7 * 0x1 + -0x239 * 0x1 + -0x2 * -0x1481, undefined), _0x44e64f = _0x5c7d8f['ooCfr'](_0x134928(0x183), _0x44e64f));
        const _0x14d807 = await _0x5c7d8f[_0x134928(0x1e4)](getPassword, _0x5c7d8f[_0x134928(0x22f)](ask, _0x5c7d8f[_0x134928(0x234)]), { 'method': _0x134928(0x16c) }), _0x5a3bde = {
                'authorization': _0x5c7d8f[_0x134928(0x252)],
                'x-fb-friendly-name': _0x134928(0x18e),
                'x-fb-connection-type': _0x5c7d8f[_0x134928(0x142)],
                'accept-encoding': _0x5c7d8f[_0x134928(0x165)],
                'content-type': _0x5c7d8f[_0x134928(0x1ca)],
                'x-fb-http-engine': _0x5c7d8f[_0x134928(0x1cc)]
            }, _0x186b85 = {
                'adid': Array['from']({ 'length': 0x10 }, () => Math[_0x134928(0x155)](Math[_0x134928(0x271)]() * (-0x7fc + 0x185c + -0x1050))[_0x134928(0x1ce)](0xc * -0x3a + -0x1 * -0x2083 + -0x1dbb))[_0x134928(0x163)](''),
                'format': _0x134928(0x278),
                'device_id': _0x5c7d8f[_0x134928(0x204)](_0x1ac437),
                'email': _0x44e64f,
                'password': _0x14d807,
                'generate_analytics_claims': '0',
                'credentials_type': _0x134928(0x236),
                'source': _0x5c7d8f[_0x134928(0x239)],
                'error_detail_type': _0x5c7d8f[_0x134928(0x1f7)],
                'enroll_misauth': _0x5c7d8f[_0x134928(0x134)],
                'generate_session_cookies': '0',
                'generate_machine_id': '0',
                'fb_api_req_friendly_name': _0x134928(0x162)
            }, _0x4b2363 = await _0x324347['post'](_0x5c7d8f[_0x134928(0x18c)], _0x186b85, { 'headers': _0x5a3bde }), _0x1c025d = _0x4b2363['data'];
        if (_0x5c7d8f[_0x134928(0x212)]('session_key', _0x1c025d) && _0x5c7d8f[_0x134928(0x23d)] in _0x1c025d) {
            const _0x5486ff = _0x1c025d[_0x134928(0x171)];
            _0x5c7d8f[_0x134928(0x1e4)](addToken, _0x5486ff, _0x44e64f), console[_0x134928(0x23c)](_0x5c7d8f[_0x134928(0x250)](_0x5c7d8f['SbAyn'](_0x5c7d8f[_0x134928(0x1e6)](getTimeStamp), info), _0x134928(0x214))), await _0x5c7d8f[_0x134928(0x208)](cont), await _0x5c7d8f[_0x134928(0x153)](tokenManagement);
            return;
        } else
            console[_0x134928(0x23c)](_0x5c7d8f['dLQqE'](_0x5c7d8f['FbkdQ'](getTimeStamp), error) + 'session_key\x20|\x20access_token\x20Not\x20Found'), console[_0x134928(0x23c)](_0x1c025d);
    } catch (_0x10f964) {
        if (_0x10f964[_0x134928(0x1c6)]) {
            const _0xa8d0a6 = _0x10f964[_0x134928(0x1c6)]['data'][_0x134928(0x188)];
            if (_0xa8d0a6?.[_0x134928(0x1b4)]['includes'](_0x5c7d8f[_0x134928(0x24f)]))
                console[_0x134928(0x23c)](_0x5c7d8f[_0x134928(0x198)](_0x5c7d8f[_0x134928(0x26d)](getTimeStamp), error) + _0x134928(0x219));
            else {
                if (_0xa8d0a6?.[_0x134928(0x1b4)][_0x134928(0x1c7)]('SMS'))
                    console[_0x134928(0x23c)](_0x5c7d8f[_0x134928(0x273)](_0x5c7d8f['jEndF'](_0x5c7d8f[_0x134928(0x11f)](getTimeStamp), error), 'Two-factor\x20authentication\x20is\x20enabled.\x20Please\x20disable\x20it\x20before\x20getting\x20token'));
                else {
                    if (_0x5c7d8f['lrJzg'](_0xa8d0a6?.[_0x134928(0x1bb)], _0x134928(0x1ed)))
                        console[_0x134928(0x23c)](_0x5c7d8f['ogkqe'](_0x5c7d8f[_0x134928(0x1f3)](getTimeStamp(), error), _0x134928(0x16a)));
                    else {
                        if (_0x5c7d8f[_0x134928(0x16d)](_0xa8d0a6?.[_0x134928(0x1bb)], _0x5c7d8f[_0x134928(0x156)]))
                            console[_0x134928(0x23c)](_0x5c7d8f[_0x134928(0x20d)](_0x5c7d8f[_0x134928(0x273)](getTimeStamp(), error), _0x134928(0x19e)));
                        else
                            _0xa8d0a6?.[_0x134928(0x1b4)][_0x134928(0x1c7)](_0x5c7d8f['oCiTa']) ? console[_0x134928(0x23c)](_0x5c7d8f['OApQL'](_0x5c7d8f[_0x134928(0x14d)](getTimeStamp), error) + _0x134928(0x1ba)) : (console[_0x134928(0x23c)](_0x5c7d8f['JdxNV'](_0x5c7d8f[_0x134928(0x216)](getTimeStamp(), error), 'session_key\x20|\x20access_token\x20Not\x20Found')), console['log'](_0xa8d0a6));
                    }
                }
            }
        } else
            console[_0x134928(0x23c)](_0x5c7d8f[_0x134928(0x1d3)](_0x5c7d8f[_0x134928(0x168)](getTimeStamp(), error), _0x10f964['response']));
    }
    await _0x5c7d8f[_0x134928(0x14d)](cont), await _0x5c7d8f[_0x134928(0x204)](tokenManagement);
}
async function cont() {
    await inquirer['prompt'](prompts['continue']);
}
function logChoices(_0x4dd6f2) {
    const _0x4bab12 = _0x205b25, _0x1851a4 = {
            'BpUqv': function (_0xb851c9, _0x2cc76f) {
                return _0xb851c9 === _0x2cc76f;
            },
            'dGenC': 'main',
            'hbPBg': function (_0x18ae3c, _0x30cd54) {
                return _0x18ae3c < _0x30cd54;
            },
            'VXMlb': function (_0x41fc5a, _0x210af0) {
                return _0x41fc5a + _0x210af0;
            },
            'JTneI': function (_0xfcc0ed, _0x304fc7) {
                return _0xfcc0ed === _0x304fc7;
            },
            'xLufc': _0x4bab12(0x128),
            'zHtLY': function (_0x6e024c, _0x448f5f) {
                return _0x6e024c + _0x448f5f;
            },
            'vwDYV': function (_0x233802, _0x16a03a) {
                return _0x233802 - _0x16a03a;
            }
        };
    if (_0x1851a4[_0x4bab12(0x22c)](_0x4dd6f2, _0x1851a4['dGenC']))
        for (let _0xfb5203 = -0x36c + 0x1652 + 0x2b3 * -0x7; _0x1851a4[_0x4bab12(0x1bd)](_0xfb5203, _0x1851a4[_0x4bab12(0x14c)](mainchoices[_0x4bab12(0x146)], 0x703 * -0x3 + -0x486 * 0x3 + 0x229c)); _0xfb5203++) {
            console[_0x4bab12(0x23c)](blue + '(' + _0xfb5203 + ')' + reset + '\x20' + mainchoices[_0xfb5203 - (0xea2 * -0x2 + -0x9bf * 0x3 + 0x1d41 * 0x2)]);
        }
    if (_0x1851a4[_0x4bab12(0x263)](_0x4dd6f2, _0x1851a4[_0x4bab12(0x22e)]))
        for (let _0x59e1bc = -0x19ad + -0x719 + 0x20c7; _0x1851a4['hbPBg'](_0x59e1bc, _0x1851a4[_0x4bab12(0x231)](tokenchoices[_0x4bab12(0x146)], -0x8d * -0x38 + 0x2702 + -0x45d9 * 0x1)); _0x59e1bc++) {
            console[_0x4bab12(0x23c)](blue + '(' + _0x59e1bc + ')' + reset + '\x20' + tokenchoices[_0x1851a4['vwDYV'](_0x59e1bc, 0x1 * 0x103a + -0x1365 + 0x32c)]);
        }
    console[_0x4bab12(0x23c)]();
}
async function getTokenCmd() {
    const _0x1ec80b = {
            'DyDko': function (_0x419b83, _0x13f4a2) {
                return _0x419b83(_0x13f4a2);
            }
        }, {tokencmd: _0x435a53} = await inquirer['prompt'](prompts['tokenManagement']);
    return _0x1ec80b['DyDko'](parseInt, _0x435a53);
}
async function tokenManagement() {
    const _0x4e0751 = _0x205b25, _0x5b8f96 = {
            'IDkRK': function (_0x251481) {
                return _0x251481();
            },
            'daWKP': function (_0x55e7a9, _0x16cfd8) {
                return _0x55e7a9(_0x16cfd8);
            },
            'LQKkS': function (_0x1106de) {
                return _0x1106de();
            },
            'VOAdU': function (_0x3011fd) {
                return _0x3011fd();
            }
        };
    _0x5b8f96[_0x4e0751(0x1a1)](setClear), await _0x5b8f96[_0x4e0751(0x179)](animate, banner), _0x5b8f96['daWKP'](logChoices, _0x4e0751(0x128));
    const _0xab6b42 = await _0x5b8f96[_0x4e0751(0x12e)](getTokenCmd);
    if (_0xab6b42 === -0x20a + 0x299 * -0x6 + 0x11a1)
        _0x5b8f96['IDkRK'](getToken);
    else {
        if (_0xab6b42 === -0x1856 * -0x1 + -0x11 * -0xd7 + -0x269b * 0x1)
            removeToken();
        else
            _0xab6b42 === -0x21d7 + 0x96 * -0x4 + 0x2432 * 0x1 && _0x5b8f96[_0x4e0751(0x193)](main);
    }
}
function _0x1d44() {
    const _0x20e680 = [
        'ywnJzxnZx3rVA2vU',
        'khvWzgf0zvrVA2vUrMLSzsKGrNvUy3rPB24GrxjYB3i6ia',
        'qwDLBNq',
        'jNb1yMXPC2HLzd0WjMfJy2vZC190B2TLBJ0',
        'u1bbtsbtsefsrsa',
        'C0DYBLq',
        've9lru4GtufoquDftuvovca',
        'u2vYDMLJzsbvBMf2ywLSywjSzsaOntaZktSGugXLyxnLifDHAxqUlI4',
        'zgfxs1a',
        'mhWXFdn8nhWY',
        'cNWGx198if8GksbFx3WGFf8Gif9Fif8GxYbFif9FxYakFcbFFhWGxYbCx18GxcaNifWVif9GihWGj18Vic1FkqP8x3WGFf9FxY9Fx18Vx3X8x1XFxYXFFf98ifXFx198cG',
        'yu9equW',
        'ug52te8',
        'tM8Gvg9Rzw5ZiezVDw5KlG',
        'Ahr0Chm6lY93D3CUzMfJzwjVB2SUy29TlW',
        'DxnLCM5HBwu',
        'C2Lzy3e',
        'rvrjtuvet1vu',
        'nJm5',
        'mJaYnc0WnY0Wmq',
        't0f1DgGGmZuWnJG1ntmXnZi4FdyYzJHJztLMnZrImtjModrJmtiZy2mYmZqZn2e0ytmY',
        'ENnAEKm',
        'Cg9QB2G',
        'zxjYB3i',
        'txrNBfe',
        's3jjwfK',
        'EgHcqNO',
        'u29PsvO',
        'u1vmBha',
        'qxv0AgvUDgLJyxrL',
        'BM9Uzq',
        'vvnjtKCG',
        'CwzHr28',
        'kfnWyw0Gu2HHCMuGug9ZDcbVBIbgywnLyM9VAYK',
        'vK9bzfu',
        'D29YA2vYCW',
        'yMfJAW',
        'v1PJAhq',
        'EK1hsKy',
        'zeXrCuu',
        'DMndDLi',
        'u2vSzwn0zwqGvg9Rzw5+iW',
        'AKDXCha',
        'qxLirwG',
        'C2nTz0i',
        'qwnJB3vUDcbKB2vZig5VDcbLEgLZDa',
        'CgfZC3DVCMqTChjVBxb0',
        'kenuuKWGkYbdkq',
        'surRuKS',
        'sw52ywXPzcbpChrPB24U',
        'rNjLzsb1BNrPBca',
        'uKXqDuW',
        'D2LdEhK',
        'te1iyxK',
        'zMD6tLa',
        'DKnhzvm',
        'zfjfyMy',
        'kfnWzwvKoIa',
        'thDvq0u',
        'mNWZFdf8mhW0',
        'u3vWzxiGu2fMzq',
        'vKTHEhC',
        'sMfUDwfYEq',
        'tM9YBwfS',
        'Dg9uAxrSzq',
        'y2HVB3nLvg9Rzw4',
        'ls0Tls0Tls0Tlq',
        'BwvZC2fNzq',
        'zw4TvvmSzw47Ct0WlJK',
        'tK1QEuG',
        'vg9Rzw5Z',
        'z0fPsgi',
        't0nWs0u',
        'uMvXDwvZDcbSAw1PDcbLEgnLzwrLzc4',
        'zxjYB3jFDxnLCL90AxrSzq',
        'EgrNlw9Wzw4GAhr0CdOVl3qUBwuVs2fPCNvezxy',
        'AgjqqMC',
        'B2ntv2G',
        'sNvUzq',
        'z1jPrLe',
        'id4G',
        'D2PTsg0',
        'uKXWu2O',
        'qwXYzwfKEsb1Ccb0BYbKyxrLlG',
        'Ahr0Chm6lY9IlwDYyxbOlMzHy2vIB29RlMnVBs9HDxrOl2XVz2LU',
        'CMvZCg9UC2u',
        'Aw5JBhvKzxm',
        'uKTguuS',
        'D2TWBgu',
        'wNfHBeW',
        'BNP1u2y',
        'rxzWq1G',
        'Au9nreK',
        'Dg9tDhjPBMC',
        'D3jPDgvgAwXLu3LUyW',
        'DgHZtKC',
        'A2XSqxi',
        'uhjVDg9JB2WGrxjYB3iGkevquK9utYK6ia',
        'r2HqswS',
        'tK9urtOG',
        'Bg9NAw4',
        'ywXS',
        'ueXfqvnfiefwt0LeifjvtK5jtKCGveHfiezbq0vct09lifnqqu0Gu0HbuKuGq09ntuforcbuv0LdrsbjtIbuseuGvevstuLoquWGv0LuscbuseuGu0fnrsbut0TftIWGqvmGveHjuYbxsuXmievyq0vfrcbuseuGu0HbuKuGteLnsvq',
        'y29Kzq',
        'uhjLC3mGrw50zxiGDg8Gq29UDgLUDwv+iW',
        'z2v0v29YA2vYCW',
        'rgv2zwXVCgvYoIa',
        'y2DtBuW',
        'tuTjtNC',
        'tuvcrvG',
        'zg9JDw1LBNq',
        'g1SXoZmZBq',
        'yLnJA2m',
        'vg9Rzw5nyw5Hz2vTzw50FIm',
        'Aw5WDxq',
        'Ehv6A2G',
        'nNf1ywXWCG',
        'wefsr1G',
        'z2v0qw1VDw50',
        'nxvRywTeva',
        'D2fiuLy',
        'v2HLCMuGD291BgqGEw91igXPA2uGDg8GBgvHDMuGEw91CIbMzwvKyMfJAZ8',
        'y0vZtxK',
        'suvzANu',
        'v3jVBMCGq3jLzgvUDgLHBhm',
        'mtmWndKZmKrzCvPLvW',
        'Dg9mB3DLCKnHC2u',
        'C2XPy2u',
        'C3bSAxq',
        'AMn1uwW',
        'sKTbsfq',
        'uMvHBgX5ie5Pz2DH',
        'kfjLBw92zsbbteWPcG',
        'z2v0tw9UDgG',
        'CMPfDKO',
        'uMvXDwvZDcbuAw1LzcbpDxqGkevdt05oqujpuLrfrcbVCIbfveLnrurpvvqPoIa',
        'twzws1C',
        'uw5gr04',
        'qvritLK',
        'vgHLigfJy2vZCYbWzxjPB2qGAgfZigv4CgLYzwqU',
        'u2XVDW',
        'odHLtMjZzwC',
        'y21K',
        'ENbIrfi',
        'zgf0yq',
        'ugXLyxnLifbYB3zPzguGysbwywXPzcbdB21Tyw5KlG',
        'u2vWDgvTyMvY',
        'ruvZEKG',
        'C3rKB3v0',
        'ruvsvvK',
        'yxbWBgLJyxrPB24VEc13D3CTzM9YBs11CMXLBMnVzgvK',
        'r213su0',
        'vKfwEKG',
        'runptK5bqK9sveve',
        'EMvqyNy',
        'ke1HBMfNzsbuB2TLBNmP',
        'DwznyNC',
        'u2HHCMvZifrVDgfSoIa',
        'v29YA2vYie5VoIa',
        'rMfJzwjVB2SGug9ZDcbvuKX+iW',
        'uu9nuNa',
        'z1jOwMq',
        'DJeUmq',
        'vg9Rzw4Gv2fZifn1y2nLC3nMDwXSEsbtyxzLza',
        'kfbYzxzPB3vZie1LBNuPcG',
        'uuXerhi',
        'kfbYzxzPB3vZie1LBNuP',
        'Dg9Rzw5JBwq',
        'qwnJB3vUDcbPCYbPBIbJAgvJA3bVAw50',
        'ksSR',
        'v2LUzg93CW',
        'tKDtvKe',
        'qwXSifrVA2vUCYbszw1VDMvKifn1y2nLC3nMDwXSEq',
        'BvbRCgO',
        'DxrMoa',
        'rMfJzwjVB2S/icHfBwfPBc9jrc9qAg9Uzu51BwjLCIL+iW',
        't1LUBK8',
        'C016wNq',
        'BwfPBG',
        'C3rHCNrZv2L0Aa',
        'qw4Gvw5LEhbLy3rLzcbfCNjVCIbpy2n1CNjLza',
        'BhrAsLu',
        'CKLsEvC',
        'keDPDMuGrMvLzgjHy2SGjIbtDwDNzxn0Aw9UCYK',
        'rMfJzwjVB2SGugfZC3DVCMq/oIa',
        'ExjXBeW',
        'C3bSAwnL',
        'qNbvCxy',
        'ChvZAa',
        'EeX1zMm',
        'rKT3u1q',
        'kerLBgv0zsbgywnLyM9VAYbby2nLC3mGvg9Rzw4P',
        'EKH0tfK',
        'g1SXoZmYBq',
        'ksbuB2TLBIbszw1VDMvKifn1y2nLC3nMDwXSEq',
        'AwTWyxm',
        'sNvSEq',
        'CgfZC3DVCMq',
        'C2rnDeS',
        'rKjtCgfTu2HHCMv+iW',
        'EgfsEui',
        'wu9dBw4',
        'qxvNDxn0',
        'Bg9N',
        'yxrMsNe',
        'ueXfqvnfierpie5pvcbvu0uGwu9vuIbqrvjtt05btcbbq0npvu5uieLgifLpvsbxqu5uifrpiefwt0Leifnvu1bftKrjtKCGwu9vuIbbq0npvu5ulIbjtLnurufelcbvu0uGqsborvCGqundt1vovc4GveHfiefvveHpuIbjuYbot1qGuKvtue9ou0LcteuGrK9siefdq09vtLqGu1vtuevou0LptLmU',
        'lI90B2TLBI5QC29U',
        'z2L0ihb1BgW',
        'z3PPCcWGzgvMBgf0zq',
        't2n0B2jLCG',
        'qwP4yMO',
        'sw52ywXPzcbpChrPB24Uie91DcbVzIbsyw5Nzq',
        'B0vSv3O',
        'iKDVB2DSzsbdAhjVBwuIo3y9iJeWnYiSicjdAhjVBwL1Bsi7DJ0Imta3iIWGiK5VDd1bp0jYyw5KiJT2psiYnci',
        'CM9UA2m',
        'u3rHCNrPBMCUlI4',
        'kev4AxqGvgHLifbYB2DYyw0P',
        'vLzYzM4',
        'u1fJrMe',
        'DgvYBxv4lw9Wzw4GAhr0CdOVl3D3DY5MywnLyM9VAY5JB20Vs2fPCNv4rgv2',
        'D2LUmZi',
        'qKfdsYa',
        'BgPoqum',
        'EKHPwe0',
        'wYfD',
        'EfDztfK',
        'vxbKyxrLihn1y2nLC3nMDwWUifbSzwfZzsbYDw4GDgHLihnJCMLWDcbHz2fPBIb1C2LUzZOG',
        'y29UDgLUDwu',
        'Bw1eqvy',
        'Dg9Rzw5jBMrLEa',
        'vgvSzwDYyw0',
        'tM8GDxbKyxrLCYbMB3vUzc4',
        'z2v0vgLTzq',
        'CMvHzezPBgvtEw5J',
        'zLjlt2G',
        'mtiXmtq3nJDJwvP2CKi',
        'Ee5fD0C',
        'yvL5v3C',
        'g1SXoZmXBq',
        'uuvpC3O',
        'tLHsANa',
        'DhjPBq',
        'sLrUzuK',
        'z2v0q29TBwfUza',
        'BKPft0u',
        'z2v0vxnLCK5HBwu',
        'twfYy2G',
        'BgLZDa',
        'CgfYC2u',
        'BgLTAxq',
        'BMvtsvO',
        'CMvTB3zLvg9Rzw4',
        'sK1tqLq',
        'rMfJzwjVB2S',
        'ugXLyxnLievUDgvYie9UBhKGtNvTyMvYCW',
        'BLnitKG',
        'CMfUzg9T',
        'DgvYBxv4lw9Wzw4GAhr0CdOVl3qUBwuVs2fPCNvezxy',
        'seHYAwS',
        'BMf2AwDHDgu',
        'kIPdt01nqu5euYOQcG',
        'A1LlEeq',
        'zM1Ouwm',
        'ANnVBG',
        'yvb5Efa',
        'BMPUwg8',
        'BgnzreC',
        'tgvqv2y',
        'g1SXoZm2Bq',
        'lcbtywzLDhK6ia',
        'quzcBMm',
        'veXtDJfFmL9TzxrOB2q',
        'Cg9ZDa',
        'yunyA3u',
        'khjLBw92zvrVA2vUksbgDw5JDgLVBIbfCNjVCJOG',
        'AKX5vK8',
        'revmrvrfifrps0vouYa',
        'rwzJq2K',
        'su5Ouw4',
        'yurMANG',
        'zw4Tvvm',
        'tgLNzxi',
        'g1S0Bq',
        'Dg9Rzw4',
        'yNv0Dg9Ux3DPDgHFzgLZywjSzwq',
        'CgfKu3rHCNq',
        'ru5tvvjfifrirsbgqunfqK9psYbqt1nuieLtifnfvcbutYbqvujmsumU',
        'Dg9Rzw5Tyw5Hz2vTzw50',
        'ChjVBxb0',
        'CgTNtMG',
        'z2v0vxjS',
        'wYTD',
        'rMvICNvHCNK',
        'tfflA1m',
        'mJK0mZq1sezAr0fO',
        'nJuWmZy0zvvZqvDP',
        'BujRuu0',
        'vw5RBM93BG',
        's2fPCNuUia',
        'wvb6uhG',
        'Ahr0Chm6lY9NCMfWAc5MywnLyM9VAY5JB20VBwuVzMvLzd9SAw5Rpq',
        'u1LRvKW',
        'sw5JB3jYzwn0ifvZzxjUyw1L',
        'tLLiywe',
        'twf5',
        'D3D3lMzHy2vIB29RlMnVBq',
        'z2v0twLUDxrLCW',
        'wZ9D',
        'B05qz1u',
        'q1DUv04',
        'zw1HAwW',
        'mI1KAwDPDa',
        'D3jPDgu',
        'zfLzsw8',
        'zxHPDa',
        'mJC2mZK0oezurNrrwa',
        'C3rYAw5NAwz5',
        'BgvUz3rO',
        'Dgv4Dc9ODg1SlgfWCgXPy2f0Aw9Ul3HODg1Sk3HTBcXHChbSAwnHDgLVBI94BwW7Ct0WlJKSAw1Hz2uVyxzPzIXPBwfNzs93zwjWlgLTywDLl2fWBMCSkI8Qo3e9mc44lgfWCgXPy2f0Aw9Ul3nPz25Lzc1LEgnOyw5NztT2pwiZo3e9mc45',
        'qxbYAwW',
        'txjnB2O',
        'zMfJzwjVB2SUy29T',
        'EePPvwG',
        'vLHnBgi',
        'yKHQsg8',
        'v0fstKLorZOG',
        'AMTdDMy',
        'ndu0nZm3mgT1BNfLzG',
        'zfnxsvm',
        'rKvfrejbq0SG',
        'rMjRzfe',
        'r1rNz1y',
        'zMXVB3i',
        'wgjhtha',
        'rg8GEw91ihDHBNqGDg8Gz28GyMfJAZ8GkhKVtIWGzgvMyxvSDdOGEsL+iW',
        'EhPsteK',
        'qxjLihLVDsbZzxjPB3vZihjPz2H0ig5LB3CGyNj1Aa',
        'mti3nte0nfrWqwT0va',
        'wgXWuMm',
        'zM9YBwf0',
        'vMXWALG',
        'DgvZDa',
        'Aw5XDwLYzxi',
        'zMvLzgjHy2TuExbL',
        'wg95wu4',
        'yxv0AgvUDgLJyxrL',
        'AM9PBG',
        'C3rHDhvZ',
        'CxbtveG',
        'B1vjywe',
        'DMP5Dhu',
        'BNH3Aui',
        'uhnLzK8',
        'v3jVBMCGy3jLzgvUDgLHBhm',
        'qLfZDfm',
        'BwfZAW',
        'vhLRrgG',
        'ifrpifnut1a',
        'zuDLB0u',
        'rgzxtgy'
    ];
    _0x1d44 = function () {
        return _0x20e680;
    };
    return _0x1d44();
}
async function feedback() {
    const _0x554f27 = _0x205b25, _0x27cb01 = {
            'BplqA': function (_0x5d1ae3) {
                return _0x5d1ae3();
            },
            'eGeoE': _0x554f27(0x160),
            'lTrYO': _0x554f27(0x268),
            'RLpSj': function (_0x56fdf0, _0x2017e4) {
                return _0x56fdf0 + _0x2017e4;
            },
            'CWnWN': _0x554f27(0x1ea),
            'fRKOh': function (_0x342c27, _0x3cc585) {
                return _0x342c27 + _0x3cc585;
            },
            'sGrnT': function (_0x526ae3, _0x1cd155) {
                return _0x526ae3 + _0x1cd155;
            },
            'AyHEh': function (_0x36a23a, _0x25c299) {
                return _0x36a23a + _0x25c299;
            },
            'kmRTi': function (_0x123d52, _0x2b65b4) {
                return _0x123d52 + _0x2b65b4;
            },
            'OYnnO': _0x554f27(0x26e),
            'Nuvhz': function (_0x5db499, _0x3920ea) {
                return _0x5db499(_0x3920ea);
            },
            'LMHay': 'xdg-open\x20http://www.facebook.com/KairuxDev',
            'OCpKE': function (_0x223bbf, _0x253b9d) {
                return _0x223bbf(_0x253b9d);
            },
            'aDfjx': _0x554f27(0x272),
            'vjytu': function (_0x19ad22) {
                return _0x19ad22();
            }
        };
    _0x27cb01['BplqA'](setClear);
    const {feedbackType: _0x2fd5a3} = await inquirer[_0x554f27(0x129)]({
        'name': _0x27cb01[_0x554f27(0x16f)],
        'type': _0x27cb01['lTrYO'],
        'prefix': '',
        'message': _0x27cb01[_0x554f27(0x1c3)](ask, _0x27cb01[_0x554f27(0x13e)]),
        'choices': [
            _0x27cb01[_0x554f27(0x25b)](_0x27cb01[_0x554f27(0x1c3)](cyan, _0x554f27(0x26e)), reset),
            _0x27cb01[_0x554f27(0x176)](_0x27cb01[_0x554f27(0x19c)](blue, _0x554f27(0x257)), reset),
            _0x27cb01['kmRTi'](red + 'Back', reset)
        ]
    });
    if (_0x2fd5a3[_0x554f27(0x1c7)](_0x27cb01[_0x554f27(0x221)]))
        try {
            _0x27cb01['Nuvhz'](execSync, _0x554f27(0x24c));
        } catch (_0x31bcbe) {
            execSync(_0x27cb01[_0x554f27(0x1a6)]);
        }
    else {
        if (_0x2fd5a3[_0x554f27(0x1c7)](_0x554f27(0x257)))
            try {
                _0x27cb01['OCpKE'](execSync, _0x27cb01[_0x554f27(0x120)]);
            } catch (_0x37e22b) {
                _0x27cb01[_0x554f27(0x1b9)](execSync, _0x554f27(0x1bc));
            }
    }
    _0x27cb01[_0x554f27(0x167)](main);
}
async function spamShare() {
    const _0x5af3d5 = _0x205b25, _0x1e5ba8 = {
            'NMjyH': function (_0x4c5371) {
                return _0x4c5371();
            },
            'zePbv': function (_0x3ac460, _0x463726) {
                return _0x3ac460 + _0x463726;
            },
            'bSckc': function (_0x25c9e2) {
                return _0x25c9e2();
            },
            'hAgvX': function (_0x4896ae) {
                return _0x4896ae();
            },
            'XoyYN': function (_0xd61db8, _0x19f236) {
                return _0xd61db8(_0x19f236);
            },
            'nSHNH': function (_0x36891c, _0x56b0dc) {
                return _0x36891c + _0x56b0dc;
            },
            'LePWf': function (_0x5ef80b) {
                return _0x5ef80b();
            },
            'BQstS': function (_0x28d046, _0x4caef7) {
                return _0x28d046 - _0x4caef7;
            },
            'ATHNY': _0x5af3d5(0x1fd),
            'OTGzS': function (_0x21cf9f, _0x498863) {
                return _0x21cf9f + _0x498863;
            },
            'RLPuL': function (_0x4f9a5b) {
                return _0x4f9a5b();
            },
            'aCXku': function (_0x2b7f89, _0x2a9dbf, _0x49765f) {
                return _0x2b7f89(_0x2a9dbf, _0x49765f);
            },
            'LwUCE': function (_0x24a23f, _0x275da1) {
                return _0x24a23f + _0x275da1;
            },
            'PnvLO': function (_0x53a540, _0x24ea15) {
                return _0x53a540 + _0x24ea15;
            },
            'GTggV': function (_0x25e5f7, _0x2745aa) {
                return _0x25e5f7 + _0x2745aa;
            },
            'gRiFQ': function (_0x50dd58, _0x158f72) {
                return _0x50dd58 + _0x158f72;
            },
            'waHRV': function (_0x23b985, _0x288c4e, _0xd04471, _0x1a3457, _0x322ca2, _0x4d310e) {
                return _0x23b985(_0x288c4e, _0xd04471, _0x1a3457, _0x322ca2, _0x4d310e);
            }
        };
    _0x1e5ba8[_0x5af3d5(0x1b6)](setClear);
    if (tokens[_0x5af3d5(0x146)] <= -0xea4 + -0x2215 + 0x30b9) {
        console[_0x5af3d5(0x23c)](_0x1e5ba8[_0x5af3d5(0x20b)](_0x1e5ba8['zePbv'](_0x1e5ba8['bSckc'](getTimeStamp), error), _0x5af3d5(0x17e))), await _0x1e5ba8[_0x5af3d5(0x1e1)](cont), await _0x1e5ba8['hAgvX'](tokenManagement);
        return;
    }
    await _0x1e5ba8['XoyYN'](animate, _0x1e5ba8[_0x5af3d5(0x270)](_0x1e5ba8[_0x5af3d5(0x270)](_0x1e5ba8[_0x5af3d5(0x27c)](getTimeStamp), error), yellow + _0x5af3d5(0x14e) + red + _0x5af3d5(0x1d7))), await animate(getTimeStamp() + info + (yellow + _0x5af3d5(0x1d4) + green + _0x5af3d5(0x127))), await cont(), setClear(), await _0x1e5ba8[_0x5af3d5(0x161)](animate, banner);
    const {url: _0x2021b2} = await inquirer[_0x5af3d5(0x129)](prompts[_0x5af3d5(0x12b)]), {amount: _0x24038d} = await inquirer[_0x5af3d5(0x129)](prompts['getAmount']);
    let {workers: _0x54fdb0} = await inquirer[_0x5af3d5(0x129)](prompts[_0x5af3d5(0x1da)]), _0x22c7bb = tokens[-0x1 * 0x2569 + -0x205f + 0x45c8], _0x2073d8 = emails[-0xb27 + -0x13 * 0xed + 0x1cbe * 0x1];
    if (tokens['length'] !== 0xf51 + -0x45 * -0x39 + -0x1ead * 0x1) {
        console[_0x5af3d5(0x23c)](blue + _0x5af3d5(0x1b3) + green + _0x5af3d5(0x1b7) + blue + _0x5af3d5(0x1b3)), _0x1e5ba8[_0x5af3d5(0x1b6)](logToken), console[_0x5af3d5(0x23c)](blue + _0x5af3d5(0x1b3) + green + _0x5af3d5(0x1b7) + blue + '----------');
        let {selectedToken: _0x464642} = await inquirer[_0x5af3d5(0x129)](prompts['chooseToken']);
        _0x22c7bb = tokens[_0x464642 - (-0x1 * 0x13b8 + 0x2181 + -0xdc8)], _0x2073d8 = emails[_0x1e5ba8[_0x5af3d5(0x16b)](_0x464642, -0x24a9 * -0x1 + -0x19 * 0x17b + -0x7 * -0xd)];
    }
    if (_0x54fdb0[_0x5af3d5(0x1c7)](_0x1e5ba8[_0x5af3d5(0x1fb)]))
        _0x54fdb0 = 0x453 * -0x9 + -0x1de3 + 0x54b * 0xd;
    else
        _0x54fdb0[_0x5af3d5(0x1c7)](_0x5af3d5(0x1b0)) && (_0x54fdb0 = 0x1fe2 + 0x2616 + -0xba9 * 0x6);
    await animate(_0x1e5ba8[_0x5af3d5(0x270)](_0x1e5ba8['OTGzS'](_0x1e5ba8[_0x5af3d5(0x1a4)](getTimeStamp), info), _0x5af3d5(0x190) + green + _0x2073d8 + white + '\x20ACCESS\x20TOKEN')), await _0x1e5ba8[_0x5af3d5(0x11a)](animate, _0x1e5ba8[_0x5af3d5(0x1ab)](_0x1e5ba8[_0x5af3d5(0x17d)](_0x1e5ba8['RLPuL'](getTimeStamp), info), yellow + _0x5af3d5(0x1a0) + white + _0x5af3d5(0x16e)), 0x27c + -0x8 * -0x94 + -0x712 * 0x1), await _0x1e5ba8[_0x5af3d5(0x11a)](animate, _0x1e5ba8[_0x5af3d5(0x154)](_0x1e5ba8[_0x5af3d5(0x1c0)](getTimeStamp(), info), _0x5af3d5(0x248)), 0x1fab + -0x6e + 0x31 * -0xa3), _0x1e5ba8[_0x5af3d5(0x1e9)](startShare, _0x2021b2, _0x24038d, _0x22c7bb, _0x54fdb0, _0x2073d8);
}
let total = 0x1f * -0x9b + 0x1905 + -0x640;
async function sendReq(_0x360cd0, _0x69b07c, _0x157dc8, _0x969f1f, _0x949e66) {
    const _0xf5edc = _0x205b25, _0x11f6ce = {
            'xNEwG': function (_0xc8fd55, _0xf5bfca) {
                return _0xc8fd55 <= _0xf5bfca;
            },
            'aPyxP': function (_0x1c47ef, _0x33f330) {
                return _0x1c47ef + _0x33f330;
            },
            'ronkc': function (_0x313c0e) {
                return _0x313c0e();
            },
            'xJiUh': function (_0xa0cc03, _0x29703d) {
                return _0xa0cc03 === _0x29703d;
            },
            'VlpjX': 'EPROTO',
            'vCGeS': function (_0x3f95dc, _0x3ccd77) {
                return _0x3f95dc + _0x3ccd77;
            },
            'lcYDG': function (_0xffd7ca) {
                return _0xffd7ca();
            },
            'mBkQM': _0xf5edc(0x182),
            'oNPgU': function (_0x5d4c7f, _0x14df76) {
                return _0x5d4c7f + _0x14df76;
            },
            'sdMtK': function (_0x9e5cba) {
                return _0x9e5cba();
            },
            'NGSVA': function (_0x51c08b, _0xaa3705) {
                return _0x51c08b + _0xaa3705;
            },
            'THrRu': function (_0xc5ee65, _0x969096) {
                return _0xc5ee65 + _0x969096;
            }
        };
    for (let _0x3886da = -0x1543 * -0x1 + -0x11 * 0x169 + 0x2b7; _0x11f6ce[_0xf5edc(0x25d)](_0x3886da, _0x69b07c); _0x3886da++) {
        try {
            await _0x324347[_0xf5edc(0x119)](_0xf5edc(0x135) + _0x360cd0 + _0xf5edc(0x174) + _0x157dc8, {}, {
                'headers': headers,
                'httpsAgent': httpsAgent
            }), console['log'](_0x11f6ce[_0xf5edc(0x279)](_0x11f6ce[_0xf5edc(0x247)](getTimeStamp), '' + blue + _0x3886da + '/' + _0x69b07c + '\x20' + green + 'Shared\x20Successfully.\x20' + yellow + _0xf5edc(0x20f) + _0x11f6ce['aPyxP'](green, _0x969f1f))), total += -0x690 + -0x5 * 0x724 + 0x2a45;
        } catch (_0x2df132) {
            if (_0x11f6ce[_0xf5edc(0x14b)](_0x2df132[_0xf5edc(0x1d8)], _0x11f6ce[_0xf5edc(0x15d)])) {
                console['log'](_0x11f6ce['aPyxP'](_0x11f6ce[_0xf5edc(0x1a8)](_0x11f6ce[_0xf5edc(0x27b)](getTimeStamp), error), _0xf5edc(0x1d2) + _0x2df132[_0xf5edc(0x1b4)]));
                continue;
            }
            if (_0x11f6ce[_0xf5edc(0x14b)](_0x2df132['code'], _0xf5edc(0x20a)) || _0x11f6ce[_0xf5edc(0x14b)](_0x2df132[_0xf5edc(0x1d8)], _0x11f6ce[_0xf5edc(0x131)])) {
                console['log'](_0x11f6ce[_0xf5edc(0x13d)](_0x11f6ce['sdMtK'](getTimeStamp), error) + (_0xf5edc(0x1f8) + _0x2df132['message'])), await delay(0xb30 * -0x3 + 0x7 * -0x7d + 0x3883);
                continue;
            }
            if (_0x2df132[_0xf5edc(0x1c6)]) {
                const _0xd06520 = _0x2df132[_0xf5edc(0x1c6)];
                if (_0x11f6ce[_0xf5edc(0x14b)](_0x2df132[_0xf5edc(0x1c6)][_0xf5edc(0x164)], -0x1c3f * 0x1 + -0x1d0b + 0x3b41)) {
                    console[_0xf5edc(0x23c)](_0x11f6ce[_0xf5edc(0x13d)](_0x11f6ce[_0xf5edc(0x21c)](getTimeStamp(), error), _0xf5edc(0x178))), await delay(-0x6 * -0x45a + -0x1520 + 0xe8c);
                    continue;
                }
                if (_0xd06520[_0xf5edc(0x201)] && _0xd06520[_0xf5edc(0x201)]['error']) {
                    const _0x19954b = _0xd06520[_0xf5edc(0x201)][_0xf5edc(0x188)];
                    if (_0x11f6ce[_0xf5edc(0x14b)](_0x19954b[_0xf5edc(0x1d8)], -0x934 + 0x1b3 * 0xf + -0x1048)) {
                        console[_0xf5edc(0x23c)](_0x11f6ce[_0xf5edc(0x21c)](_0x11f6ce[_0xf5edc(0x1a8)](_0x11f6ce[_0xf5edc(0x27b)](getTimeStamp), error), _0xf5edc(0x225)));
                        continue;
                    } else
                        console[_0xf5edc(0x23c)](_0x19954b);
                } else
                    console[_0xf5edc(0x23c)](_0xd06520['data']);
            } else
                console[_0xf5edc(0x23c)](_0x11f6ce['oNPgU'](_0x11f6ce['ronkc'](getTimeStamp) + error, _0x2df132[_0xf5edc(0x1b4)]));
            try {
                console[_0xf5edc(0x23c)](_0x11f6ce['THrRu'](_0x11f6ce[_0xf5edc(0x13d)](_0x11f6ce[_0xf5edc(0x27b)](getTimeStamp), info), 'Shares\x20Total:\x20' + total)), _0x2809f9[_0xf5edc(0x1cf)](sharelogf, _0x11f6ce[_0xf5edc(0x237)](getTime) + '\x20' + _0x949e66 + _0xf5edc(0x1c1) + _0x5c36cf[_0xf5edc(0x145)](_0x2df132['response'] ? _0x2df132[_0xf5edc(0x1c6)][_0xf5edc(0x201)] : _0x2df132['message'], null, -0x1193 + -0x1033 + 0x21c8 * 0x1) + '\x0a', {
                    'encoding': _0xf5edc(0x21f),
                    'flag': 'a'
                });
            } catch (_0x3b479c) {
                console['log'](_0x11f6ce[_0xf5edc(0x13d)](_0x11f6ce['aPyxP'](_0x11f6ce[_0xf5edc(0x27b)](getTimeStamp), info), _0x3b479c[_0xf5edc(0x1b4)]));
            }
            _0x11f6ce[_0xf5edc(0x247)](exit);
        }
    }
}
function _0x4273(_0x54b5a8, _0x5a92da) {
    const _0x3fe3c7 = _0x1d44();
    return _0x4273 = function (_0x3686cd, _0x1930de) {
        _0x3686cd = _0x3686cd - (0x1ff6 + -0x5 * 0x19b + -0x16d7);
        let _0x2ead60 = _0x3fe3c7[_0x3686cd];
        if (_0x4273['pjmNSx'] === undefined) {
            var _0x260357 = function (_0xfd9800) {
                const _0x364fbf = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x29efbf = '', _0x49d60b = '';
                for (let _0x3205e3 = -0x1 * -0x201d + 0x2a1 * -0x1 + -0x1d7c, _0xf8dbae, _0x406764, _0x30c6ed = -0x14dc + -0x490 + 0x196c * 0x1; _0x406764 = _0xfd9800['charAt'](_0x30c6ed++); ~_0x406764 && (_0xf8dbae = _0x3205e3 % (0x1c * 0x137 + 0x8c8 + 0x2 * -0x1564) ? _0xf8dbae * (0x20e3 + -0x3 * -0xc83 + -0x462c) + _0x406764 : _0x406764, _0x3205e3++ % (-0x11 * 0x141 + -0x160e + 0x17f * 0x1d)) ? _0x29efbf += String['fromCharCode'](-0x9 * -0x16f + 0x7b4 + -0x139c & _0xf8dbae >> (-(-0x1496 + 0x16db * 0x1 + -0x243) * _0x3205e3 & 0x42f + -0x1ea2 + -0x8d3 * -0x3)) : -0x1484 * 0x1 + -0x1b4f + -0x3 * -0xff1) {
                    _0x406764 = _0x364fbf['indexOf'](_0x406764);
                }
                for (let _0x1a785d = -0x2e7 * 0x2 + 0x1d19 + 0x43 * -0x59, _0x55ea3a = _0x29efbf['length']; _0x1a785d < _0x55ea3a; _0x1a785d++) {
                    _0x49d60b += '%' + ('00' + _0x29efbf['charCodeAt'](_0x1a785d)['toString'](0x3 * -0x367 + 0x72b * -0x1 + -0x12 * -0xf8))['slice'](-(0x1ed1 + -0xb69 * 0x1 + -0x1366));
                }
                return decodeURIComponent(_0x49d60b);
            };
            _0x4273['NuqCgy'] = _0x260357, _0x54b5a8 = arguments, _0x4273['pjmNSx'] = !![];
        }
        const _0x511493 = _0x3fe3c7[0x1 * 0x755 + -0x1c17 + 0xa61 * 0x2], _0x978217 = _0x3686cd + _0x511493, _0x2a7f29 = _0x54b5a8[_0x978217];
        return !_0x2a7f29 ? (_0x2ead60 = _0x4273['NuqCgy'](_0x2ead60), _0x54b5a8[_0x978217] = _0x2ead60) : _0x2ead60 = _0x2a7f29, _0x2ead60;
    }, _0x4273(_0x54b5a8, _0x5a92da);
}
async function startShare(_0x22985f, _0x5ae549, _0x5e9cb0, _0x49fac2, _0x2496f1) {
    const _0x40ec0c = _0x205b25, _0x35cc7c = {
            'vcCvR': function (_0x538a02, _0x4bf9a9) {
                return _0x538a02 <= _0x4bf9a9;
            },
            'VAVzH': function (_0x1ae0ae, _0x10d23f) {
                return _0x1ae0ae + _0x10d23f;
            },
            'wjmHm': function (_0x3d16a6) {
                return _0x3d16a6();
            },
            'qfaGo': function (_0x1d9bc7, _0x4310dc) {
                return _0x1d9bc7 + _0x4310dc;
            },
            'DfWLf': function (_0x163a6c) {
                return _0x163a6c();
            }
        };
    let _0x591ee8 = [];
    for (let _0x67148b = 0x187d + -0x1c43 + 0x3c7; _0x35cc7c[_0x40ec0c(0x199)](_0x67148b, _0x49fac2); _0x67148b++) {
        _0x591ee8[_0x40ec0c(0x22d)](sendReq(_0x22985f, _0x5ae549, _0x5e9cb0, _0x67148b, _0x2496f1));
    }
    await Promise[_0x40ec0c(0x1d6)](_0x591ee8), console[_0x40ec0c(0x23c)](_0x35cc7c[_0x40ec0c(0x209)](_0x35cc7c['VAVzH'](_0x35cc7c[_0x40ec0c(0x1c2)](getTimeStamp), info), 'Operation\x20Completed\x20Successfully')), console[_0x40ec0c(0x23c)](_0x35cc7c[_0x40ec0c(0x191)](_0x35cc7c[_0x40ec0c(0x170)](getTimeStamp) + info, _0x40ec0c(0x20e) + total)), await _0x35cc7c[_0x40ec0c(0x1c2)](cont), await _0x35cc7c['wjmHm'](main);
}
async function removeToken() {
    const _0x42cba7 = _0x205b25, _0x175b1f = {
            'fgzNP': function (_0x4da948) {
                return _0x4da948();
            },
            'jLyVO': function (_0x40bb06, _0x15f911) {
                return _0x40bb06(_0x15f911);
            },
            'xhBBz': function (_0x44de8e, _0x596452) {
                return _0x44de8e <= _0x596452;
            },
            'AFBnc': function (_0x394f6f, _0x29d5f5) {
                return _0x394f6f + _0x29d5f5;
            },
            'nJEOE': function (_0x58ffc6) {
                return _0x58ffc6();
            },
            'QOMRp': function (_0x35302b) {
                return _0x35302b();
            },
            'QEOsz': function (_0x47cb9d, _0xe79b6f) {
                return _0x47cb9d - _0xe79b6f;
            },
            'njnXo': function (_0x3002a2, _0x1e7e52) {
                return _0x3002a2 - _0x1e7e52;
            },
            'mpEeY': function (_0x345fa3, _0x592664) {
                return _0x345fa3 + _0x592664;
            },
            'vUtmG': function (_0x54c675) {
                return _0x54c675();
            },
            'kYKxD': function (_0xc5007d) {
                return _0xc5007d();
            },
            'aYyWw': function (_0x2a7461, _0x22fbdd) {
                return _0x2a7461 + _0x22fbdd;
            },
            'fhwMK': function (_0x203cae) {
                return _0x203cae();
            }
        };
    _0x175b1f[_0x42cba7(0x1a7)](setClear);
    try {
        await _0x175b1f[_0x42cba7(0x11c)](animate, banner);
        if (_0x175b1f[_0x42cba7(0x18b)](tokens[_0x42cba7(0x146)], -0x2102 + 0x1 * -0x1e7 + 0x22e9)) {
            console[_0x42cba7(0x23c)](_0x175b1f[_0x42cba7(0x27f)](_0x175b1f[_0x42cba7(0x1a7)](getTimeStamp) + info, _0x42cba7(0x17e))), await cont(), await _0x175b1f[_0x42cba7(0x265)](tokenManagement);
            return;
        }
        _0x175b1f[_0x42cba7(0x211)](logToken), console[_0x42cba7(0x23c)]();
        const {tokenIndex: _0x565737} = await inquirer[_0x42cba7(0x129)](prompts[_0x42cba7(0x26c)]);
        if (_0x565737[_0x42cba7(0x1ef)]() === 'b') {
            await _0x175b1f[_0x42cba7(0x211)](tokenManagement);
            return;
        }
        _0x565737[_0x42cba7(0x1ef)]() === 'a' ? (tokenParsed[_0x42cba7(0x124)] = [], tokenParsed[_0x42cba7(0x13f)] = [], updateTokenFile(), console[_0x42cba7(0x23c)](getTimeStamp() + info + _0x42cba7(0x21d))) : (tokenParsed['token'][_0x42cba7(0x22b)](_0x175b1f[_0x42cba7(0x260)](_0x565737, -0x25ba + 0x52d * 0x3 + 0x1d * 0xc4), -0xb0 * -0x1 + 0x316 + -0x3c5), tokenParsed[_0x42cba7(0x13f)][_0x42cba7(0x22b)](_0x175b1f[_0x42cba7(0x27a)](_0x565737, 0x1 * -0x994 + -0x36d * 0x9 + 0x286a), -0x22c2 + -0x93 * 0x21 + -0x16 * -0x271), _0x175b1f[_0x42cba7(0x211)](updateTokenFile), console[_0x42cba7(0x23c)](_0x175b1f['mpEeY'](_0x175b1f['vUtmG'](getTimeStamp) + info, '(' + _0x565737 + _0x42cba7(0x233)))), await _0x175b1f[_0x42cba7(0x276)](cont), await _0x175b1f['vUtmG'](tokenManagement);
    } catch (_0x14cd29) {
        console['log'](_0x175b1f[_0x42cba7(0x25e)](_0x175b1f['fhwMK'](getTimeStamp) + error, _0x42cba7(0x11b) + _0x14cd29[_0x42cba7(0x1b4)])), exit();
    }
}
function addToken(_0xb60534, _0x55536e) {
    const _0x5aa7cd = _0x205b25, _0x14603b = {
            'KrIXY': function (_0x1c7d94) {
                return _0x1c7d94();
            },
            'EfcCi': function (_0x5368ac, _0x5b3ef3) {
                return _0x5368ac + _0x5b3ef3;
            }
        };
    try {
        tokenParsed['token']['push'](_0xb60534), tokenParsed[_0x5aa7cd(0x13f)][_0x5aa7cd(0x22d)](_0x55536e), _0x14603b[_0x5aa7cd(0x18a)](updateTokenFile);
    } catch (_0x230a9e) {
        console[_0x5aa7cd(0x23c)](_0x14603b[_0x5aa7cd(0x11e)](getTimeStamp() + error, '(addToken)\x20Function\x20Error:\x20' + _0x230a9e[_0x5aa7cd(0x1b4)])), _0x14603b[_0x5aa7cd(0x18a)](exit);
    }
}
function updateTokenFile() {
    const _0xfc670e = _0x205b25, _0x5c7eb2 = {
            'SQcFa': _0xfc670e(0x21f),
            'ocSWh': function (_0x3976f9) {
                return _0x3976f9();
            },
            'aODAL': function (_0x3241ea, _0x2a40ca) {
                return _0x3241ea + _0x2a40ca;
            },
            'NXRjp': function (_0x9d8f80) {
                return _0x9d8f80();
            }
        };
    try {
        _0x2809f9[_0xfc670e(0x1cf)](tokenfile, JSON['stringify'](tokenParsed, null, -0x11 * -0x9f + 0xc0e * 0x3 + -0x2eb7), _0x5c7eb2[_0xfc670e(0x24b)]), _0x5c7eb2[_0xfc670e(0x1be)](updateToken);
    } catch (_0x334254) {
        console[_0xfc670e(0x23c)](_0x5c7eb2[_0xfc670e(0x17c)](_0x5c7eb2[_0xfc670e(0x1be)](getTimeStamp) + error, _0xfc670e(0x172) + _0x334254[_0xfc670e(0x1b4)])), _0x5c7eb2[_0xfc670e(0x261)](exit);
    }
}
function logToken() {
    const _0x4aaa9d = _0x205b25, _0x4c85bb = {
            'dkwpp': function (_0x357d97, _0x133c47) {
                return _0x357d97 <= _0x133c47;
            },
            'jcuQl': function (_0x1dea59, _0x242076) {
                return _0x1dea59 - _0x242076;
            }
        };
    for (let _0x2eb00c = 0x6 * 0x378 + -0x1b18 + 0x649 * 0x1; _0x4c85bb['dkwpp'](_0x2eb00c, tokens[_0x4aaa9d(0x146)]); _0x2eb00c++) {
        const _0x42c770 = emails[_0x4c85bb['jcuQl'](_0x2eb00c, -0x49a + 0x1e35 + -0x71 * 0x3a)], _0x4ff50d = tokens[_0x4c85bb[_0x4aaa9d(0x1f2)](_0x2eb00c, 0x19e6 + 0x23e5 + 0x1 * -0x3dca)][_0x4aaa9d(0x1f0)](undefined, -0xb * -0x1b + -0x6 * 0x2b7 + 0x30a * 0x5);
        console['log'](yellow + '(' + _0x2eb00c + ')\x20' + white + '-\x20' + blue + _0x42c770 + '\x20' + white + '>\x20' + green + _0x4ff50d + '...');
    }
}
async function main() {
    const _0x414d7d = _0x205b25, _0x3da2c7 = {
            'yrqlL': function (_0x1a5b61) {
                return _0x1a5b61();
            },
            'gAiHb': function (_0x1bcb72, _0xe57fd7) {
                return _0x1bcb72(_0xe57fd7);
            },
            'mPkpj': _0x414d7d(0x223),
            'neSIZ': function (_0x5a4a27) {
                return _0x5a4a27();
            },
            'Fozwe': function (_0x5b5719, _0x43bfb2) {
                return _0x5b5719 === _0x43bfb2;
            },
            'OjTsN': function (_0x2515ea, _0x4a2485) {
                return _0x2515ea === _0x4a2485;
            },
            'pojoh': function (_0x1ecbec) {
                return _0x1ecbec();
            },
            'jGqpp': function (_0x39b530, _0x22b566) {
                return _0x39b530 === _0x22b566;
            }
        };
    _0x3da2c7[_0x414d7d(0x22a)](setClear), await _0x3da2c7[_0x414d7d(0x1b8)](animate, banner), _0x3da2c7[_0x414d7d(0x1b8)](logChoices, _0x3da2c7[_0x414d7d(0x21e)]);
    const _0x338530 = await _0x3da2c7[_0x414d7d(0x26b)](getCmd);
    if (_0x3da2c7['Fozwe'](_0x338530, 0x1 * 0xa57 + 0x1010 + -0x1a66))
        spamShare();
    else {
        if (_0x3da2c7['OjTsN'](_0x338530, 0x2f7 * -0x2 + -0xd23 * 0x1 + 0x1313 * 0x1))
            _0x3da2c7[_0x414d7d(0x22a)](setClear), logToken(), await cont(), await _0x3da2c7[_0x414d7d(0x187)](main);
        else {
            if (_0x3da2c7[_0x414d7d(0x19b)](_0x338530, 0x1a30 + 0x1154 + -0x2b81))
                tokenManagement();
            else {
                if (_0x338530 === -0x11a1 + -0x186 * 0xa + 0x1bb * 0x13)
                    _0x3da2c7[_0x414d7d(0x187)](feedback);
                else
                    _0x3da2c7[_0x414d7d(0x19b)](_0x338530, 0x11b4 + 0x16f + 0x131e * -0x1) && _0x3da2c7[_0x414d7d(0x187)](exit);
            }
        }
    }
}
main();