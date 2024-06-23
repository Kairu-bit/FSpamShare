const _0x524a1d = _0xb8cf;
(function (_0x4502ed, _0x1fdcc8) {
    const _0x1f22bc = _0xb8cf, _0x4de03c = _0x4502ed();
    while (!![]) {
        try {
            const _0x5ba2dd = parseInt(_0x1f22bc(0x21d)) / (-0x962 + 0x105 * 0x6 + 0x1f * 0x1b) + parseInt(_0x1f22bc(0x181)) / (0x109d + 0xe4b + -0x1ee6) * (-parseInt(_0x1f22bc(0x1a3)) / (-0x85d * 0x2 + -0x3e6 + -0x14a3 * -0x1)) + -parseInt(_0x1f22bc(0x1fd)) / (0x3c5 * -0x3 + 0x1c46 + -0x10f3) * (-parseInt(_0x1f22bc(0x186)) / (0x18a9 + 0x1d * -0x5d + -0xe1b)) + parseInt(_0x1f22bc(0x2a2)) / (0x23 * 0x9b + 0xa0b + 0x1f36 * -0x1) * (-parseInt(_0x1f22bc(0x1b5)) / (0x58a + -0x2648 + 0x20c5)) + -parseInt(_0x1f22bc(0x2a6)) / (-0x81f + 0xb * 0x38b + -0x1ed2) * (parseInt(_0x1f22bc(0x2a9)) / (0x6 * -0x266 + -0x23b2 + 0x3db * 0xd)) + parseInt(_0x1f22bc(0x209)) / (-0x16 * 0x9d + -0x1c5a + 0x6fb * 0x6) + parseInt(_0x1f22bc(0x1e9)) / (-0x2173 + 0xc3d + 0x1541) * (parseInt(_0x1f22bc(0x259)) / (0x1108 + 0x3 * 0xa0b + 0x6bb * -0x7));
            if (_0x5ba2dd === _0x1fdcc8)
                break;
            else
                _0x4de03c['push'](_0x4de03c['shift']());
        } catch (_0x18952f) {
            _0x4de03c['push'](_0x4de03c['shift']());
        }
    }
}(_0x4cf7, -0x29a1b * 0x5 + -0xe200f + 0x25020a));
import _0x764e31 from 'fs';
import _0x5b2494 from 'circular-json';
import { execSync } from 'child_process';
import _0x1bcf79 from 'uuid';
import _0x4b9485 from 'axios';
import { exit } from 'process';
import _0xc27b18 from 'https';
const yellow = '\x1b[1;33m', green = _0x524a1d(0x233), red = _0x524a1d(0x230), white = _0x524a1d(0x26e), cyan = _0x524a1d(0x1bf), blue = _0x524a1d(0x241), underline = _0x524a1d(0x194), reset = _0x524a1d(0x218), info = blue + _0x524a1d(0x288) + white + '\x20', error = red + _0x524a1d(0x20e) + white + '\x20', ask = yellow + _0x524a1d(0x21b) + white + '\x20', tokenfile = './token.json', sharelogf = _0x524a1d(0x1b7);
try {
    console[_0x524a1d(0x1c8)](getTimeStamp() + info + _0x524a1d(0x299));
    const response = execSync(_0x524a1d(0x28c))[_0x524a1d(0x214)]();
    if (response[_0x524a1d(0x294)](_0x524a1d(0x27e)))
        console[_0x524a1d(0x1c8)](getTimeStamp() + info + _0x524a1d(0x281));
    else {
        const commitMessage = execSync('git\x20log\x20-1\x20--pretty=%B')[_0x524a1d(0x214)]();
        console['log'](getTimeStamp() + info + _0x524a1d(0x1b3) + yellow + _0x524a1d(0x202)), console[_0x524a1d(0x1c8)](getTimeStamp() + info + (_0x524a1d(0x2ab) + (green + commitMessage))), process[_0x524a1d(0x203)]();
    }
} catch (_0xf0fd32) {
    console[_0x524a1d(0x1c8)](getTimeStamp() + error + _0x524a1d(0x177)), console[_0x524a1d(0x1c8)](getTimeStamp() + error + _0xf0fd32['message']), process[_0x524a1d(0x203)]();
}
const mainchoices = [
        green + _0x524a1d(0x215) + white + '-\x20' + yellow + '(Spam\x20Share\x20Post\x20on\x20Facebook)',
        green + 'SHOW\x20TOKENS\x20' + white + '-\x20' + yellow + _0x524a1d(0x1bc),
        green + 'TOKEN\x20MANAGEMENT\x20' + white + '-\x20' + yellow + _0x524a1d(0x17a),
        green + _0x524a1d(0x286) + white + '-\x20' + yellow + _0x524a1d(0x21a),
        green + _0x524a1d(0x271) + white + '-\x20' + yellow + '(Exit\x20The\x20Program)'
    ], tokenchoices = [
        green + _0x524a1d(0x1ac) + white + '-\x20' + yellow + _0x524a1d(0x229),
        green + 'DELETE\x20TOKENS\x20' + white + '-\x20' + yellow + _0x524a1d(0x1c6),
        green + _0x524a1d(0x232) + white + '-\x20' + yellow + '(Previous\x20Menu)'
    ], workerschoices = [
        green + '1\x20' + yellow + _0x524a1d(0x1c2) + green + _0x524a1d(0x173) + yellow + ',\x20Safety:\x20' + green + _0x524a1d(0x1e6) + yellow + ')\x20' + blue + _0x524a1d(0x22d) + reset,
        green + '2\x20' + yellow + _0x524a1d(0x1c2) + green + _0x524a1d(0x20b) + yellow + _0x524a1d(0x1ba) + green + _0x524a1d(0x184) + yellow + _0x524a1d(0x285) + reset
    ], removeTokenHelp = '\x0a' + info + _0x524a1d(0x16b) + green + 'a\x20' + white + '-\x20' + yellow + _0x524a1d(0x266) + green + 'b\x20' + white + '-\x20' + yellow + _0x524a1d(0x1f7);
var headers = {
    'authority': 'facebook.com',
    'user-agent': _0x524a1d(0x277),
    'accept': _0x524a1d(0x250),
    'accept-language': 'en-US,en;q=0.9',
    'sec-ch-ua': '\x22Google\x20Chrome\x22;v=\x22107\x22,\x20\x22Chromium\x22;v=\x22107\x22,\x20\x22Not=A?Brand\x22;v=\x2224\x22',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': 'Windows',
    'sec-fetch-dest': _0x524a1d(0x28b),
    'sec-fetch-mode': _0x524a1d(0x2b8),
    'sec-fetch-site': 'none',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1'
};
function _0xb8cf(_0x580eb9, _0x32c9b3) {
    const _0x51e44e = _0x4cf7();
    return _0xb8cf = function (_0x2313a6, _0x2d85e2) {
        _0x2313a6 = _0x2313a6 - (-0x171a * -0x1 + 0x85 + -0x1637);
        let _0x132387 = _0x51e44e[_0x2313a6];
        if (_0xb8cf['fMnLPH'] === undefined) {
            var _0x24d6b8 = function (_0xfee4dd) {
                const _0x1bd766 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x1e0e37 = '', _0x48c1f8 = '';
                for (let _0x3fe1d5 = 0x2 * 0x314 + 0x192 * 0x10 + -0x5b * 0x58, _0x858b3a, _0x4fae66, _0x212caa = 0x1ac7 + -0x39 * 0x24 + 0x641 * -0x3; _0x4fae66 = _0xfee4dd['charAt'](_0x212caa++); ~_0x4fae66 && (_0x858b3a = _0x3fe1d5 % (-0x18d7 + -0x23f3 + 0x3cce) ? _0x858b3a * (-0xc * -0xa2 + 0x1c8d + -0x23e5) + _0x4fae66 : _0x4fae66, _0x3fe1d5++ % (-0x83 * 0x29 + -0x1 * -0x2267 + -0xd68)) ? _0x1e0e37 += String['fromCharCode'](-0x11 * 0xd0 + -0xe0f * 0x2 + 0x2aed & _0x858b3a >> (-(0x1d25 + -0x1 * -0x1d3a + -0xdf * 0x43) * _0x3fe1d5 & -0x1cd + -0x118a + 0x135d)) : -0x1d7b + 0xe * 0x2a7 + 0x1 * -0x7a7) {
                    _0x4fae66 = _0x1bd766['indexOf'](_0x4fae66);
                }
                for (let _0x192cdb = -0x189d + 0x1cde + -0x21 * 0x21, _0x3d3164 = _0x1e0e37['length']; _0x192cdb < _0x3d3164; _0x192cdb++) {
                    _0x48c1f8 += '%' + ('00' + _0x1e0e37['charCodeAt'](_0x192cdb)['toString'](-0x1 * -0x18a + 0x1fc5 * 0x1 + -0x213f))['slice'](-(0xf46 + 0x2 * 0xe35 + -0x2bae));
                }
                return decodeURIComponent(_0x48c1f8);
            };
            _0xb8cf['iqsFBA'] = _0x24d6b8, _0x580eb9 = arguments, _0xb8cf['fMnLPH'] = !![];
        }
        const _0x3e7b1c = _0x51e44e[-0x1e23 + 0x47b * 0x2 + -0x1a1 * -0xd], _0x23da33 = _0x2313a6 + _0x3e7b1c, _0xe0c169 = _0x580eb9[_0x23da33];
        return !_0xe0c169 ? (_0x132387 = _0xb8cf['iqsFBA'](_0x132387), _0x580eb9[_0x23da33] = _0x132387) : _0x132387 = _0xe0c169, _0x132387;
    }, _0xb8cf(_0x580eb9, _0x32c9b3);
}
const httpsAgent = new _0xc27b18[(_0x524a1d(0x18b))]({
    'rejectUnauthorized': ![],
    'secureProtocol': _0x524a1d(0x293)
});
function getTime() {
    const _0x523192 = _0x524a1d, _0x3d1a50 = {
            'soFTF': _0x523192(0x292),
            'hmWSi': _0x523192(0x16c)
        }, _0x5c8c4d = new Date(), _0x3986ff = new Intl[(_0x523192(0x25e))](_0x3d1a50[_0x523192(0x2b9)], {
            'day': _0x3d1a50['hmWSi'],
            'hour': _0x523192(0x16c),
            'minute': _0x3d1a50[_0x523192(0x1dd)],
            'hour12': !![]
        })['format'](_0x5c8c4d);
    return _0x3986ff;
}
String[_0x524a1d(0x2b4)][_0x524a1d(0x22c)] = function () {
    const _0x9fd745 = _0x524a1d, _0x5741a9 = {
            'ovjdg': function (_0x39c76a, _0x383c6b) {
                return _0x39c76a + _0x383c6b;
            }
        }, _0x16315f = this['slice'](0x19 * -0x3f + -0xed0 * -0x1 + -0x8a9, -0x139 * 0x1f + 0x1c82 * 0x1 + 0x966)['toUpperCase']();
    return _0x5741a9[_0x9fd745(0x2af)](_0x16315f, this['slice'](-0xd20 + 0x1 * -0xdf + 0xe00, undefined));
};
function setClear() {
    const _0x729b8a = _0x524a1d, _0x1edabe = {
            'BVUxM': function (_0x4b90c5, _0x4749ec) {
                return _0x4b90c5 === _0x4749ec;
            },
            'SmNGs': function (_0xe21ca2, _0x56864d, _0x4df962) {
                return _0xe21ca2(_0x56864d, _0x4df962);
            },
            'fFWSi': 'cls',
            'tykuc': function (_0x533465, _0x53d7b7, _0x40c60a) {
                return _0x533465(_0x53d7b7, _0x40c60a);
            },
            'ipqNI': _0x729b8a(0x256),
            'sncbU': _0x729b8a(0x264)
        };
    if (_0x1edabe[_0x729b8a(0x1e5)](process[_0x729b8a(0x2c5)], _0x729b8a(0x1f5))) {
        _0x1edabe['SmNGs'](execSync, _0x1edabe['fFWSi'], { 'stdio': _0x729b8a(0x264) });
        return;
    }
    _0x1edabe['tykuc'](execSync, _0x1edabe[_0x729b8a(0x1cb)], { 'stdio': _0x1edabe[_0x729b8a(0x269)] });
}
let tokenParsed, tokens, emails;
function updateToken() {
    const _0x29aef7 = _0x524a1d, _0x2cbe0b = {
            'bfsrT': 'utf8',
            'zXSGS': function (_0x350aa1, _0xc8d724) {
                return _0x350aa1 + _0xc8d724;
            }
        };
    try {
        const _0xc13ae8 = _0x764e31[_0x29aef7(0x1d7)](tokenfile, _0x2cbe0b[_0x29aef7(0x248)]);
        tokenParsed = JSON[_0x29aef7(0x16d)](_0xc13ae8), tokens = tokenParsed['token'], emails = tokenParsed[_0x29aef7(0x22e)];
    } catch (_0x260d77) {
        console[_0x29aef7(0x1c8)](_0x2cbe0b['zXSGS'](_0x2cbe0b[_0x29aef7(0x1fa)](getTimeStamp(), error), _0x260d77[_0x29aef7(0x197)])), exit();
    }
}
updateToken();
const version = _0x524a1d(0x284), banner = green + _0x524a1d(0x27b) + yellow + _0x524a1d(0x1be) + blue + 'Kairu.\x20' + (red + underline) + '(' + version + ').' + reset + green + _0x524a1d(0x23c);
function getTimeStamp() {
    const _0x1d2855 = _0x524a1d, _0x364112 = {
            'PJiPp': function (_0x3576ed, _0xf44301) {
                return _0x3576ed(_0xf44301);
            }
        }, _0x281c8f = new Date(), _0x3e425e = _0x364112[_0x1d2855(0x210)](String, _0x281c8f['getHours']())[_0x1d2855(0x1dc)](0x2238 + -0x256e + 0x338, '0'), _0xde3416 = String(_0x281c8f['getMinutes']())['padStart'](0xcc7 * -0x2 + 0x3d0 + 0x15c0, '0'), _0x29c2c6 = String(_0x281c8f[_0x1d2855(0x1da)]())[_0x1d2855(0x1dc)](-0xb * -0x29d + -0x15f + -0xe2 * 0x1f, '0');
    return yellow + '[' + _0x3e425e + ':' + _0xde3416 + ':' + _0x29c2c6 + ']' + reset + '\x20';
}
const {default: inquirer} = await import(_0x524a1d(0x24c)), {default: getPassword} = await import(_0x524a1d(0x1a0));
function delay(_0x50c389) {
    return new Promise(_0x23757d => setTimeout(_0x23757d, _0x50c389));
}
async function animate(_0x3df664, _0x2ace39 = -0xe3 * 0x29 + 0x1 * -0x1589 + 0x39e8) {
    const _0x5d0e75 = _0x524a1d, _0x2a736f = {
            'XSqBm': function (_0x311aed, _0x28aea3) {
                return _0x311aed(_0x28aea3);
            },
            'GhreJ': _0x5d0e75(0x26a)
        };
    _0x3df664 = _0x3df664[_0x5d0e75(0x214)]();
    for (const _0x31144b of _0x3df664) {
        await _0x2a736f[_0x5d0e75(0x23a)](delay, _0x2ace39), process['stdout'][_0x2a736f[_0x5d0e75(0x238)]](_0x31144b);
    }
    console[_0x5d0e75(0x1c8)]();
}
let currentUTCDate = new Date(), offset = -0x8e5 + -0x17 * -0xc2 + -0x881, currentDate = new Date(currentUTCDate[_0x524a1d(0x212)]() + offset * (-0x12df * -0x2 + 0x1450 + -0x755 * 0x6) * (0x6cc * -0x5 + 0x7 * 0x1c3 + -0x198f * -0x1)), expirationDate = new Date(_0x524a1d(0x2ce));
const monthNames = [
    _0x524a1d(0x237),
    _0x524a1d(0x2c7),
    _0x524a1d(0x2bd),
    _0x524a1d(0x188),
    _0x524a1d(0x296),
    _0x524a1d(0x20a),
    _0x524a1d(0x2b7),
    _0x524a1d(0x279),
    _0x524a1d(0x265),
    _0x524a1d(0x2b6),
    _0x524a1d(0x224),
    _0x524a1d(0x1c9)
];
currentDate >= expirationDate && (console['log'](getTimeStamp() + error + 'The\x20access\x20period\x20has\x20expired.'), exit());
console[_0x524a1d(0x1c8)](getTimeStamp() + info + (_0x524a1d(0x220) + (yellow + underline + monthNames[expirationDate[_0x524a1d(0x29e)]()]) + '\x20' + expirationDate['getDate']() + '\x20' + (expirationDate[_0x524a1d(0x2a8)]() + reset))), await delay(-0x353 + 0x1 * 0x3fd + 0x12de), setClear();
function _0x4cf7() {
    const _0x5c3b5d = [
        'vg9Rzw5Z',
        'C3rHDhvZ',
        'uMvTB3zLifrVA2vUicHWCMvZCYbOigzVCIbOzwXWkx4J',
        'CKT1CKK',
        'ifrpifnut1a',
        'Aw5OzxjPDa',
        'u2vWDgvTyMvY',
        'kfjLBw92zsbbteWPcG',
        'D3HIu3C',
        'svzysxm',
        'C25JyLu',
        'D3jPDgu',
        'sKPeyKG',
        'Bg9NAw4',
        'qKzKvg8',
        'g1SXoZm3Bq',
        'sNrACxy',
        'yMfJAW',
        'rvHjvca',
        'D3D3lMzHy2vIB29RlMnVBq',
        'C21lBgy',
        'tuDJwvK',
        'Dg9Rzw5JBwq',
        'y29Kzq',
        'tw96AwXSys81lJaGkfDPBMrVD3mGtLqGmtaUmdSGv2LUnJq7ihG2ncKGqxbWBgvxzwjlAxqVntm3lJm2icHlsfrntcWGBgLRzsbhzwnRBYKGq2HYB21LlZeWnY4WlJaUmcbtywzHCMKVntm3lJm2',
        'r2jysNm',
        'qxvNDxn0',
        'u2HHCMvKifn1y2nLC3nMDwXSEs4G',
        'if9FxYbFx18Gx19Fif8Gia',
        'Dg9Rzw5jBMrLEa',
        'v2HLCMuGD291BgqGEw91igXPA2uGDg8GBgvHDMuGEw91CIbMzwvKyMfJAZ8',
        'qwXYzwfKEsb1Ccb0BYbKyxrLlG',
        'wgfmBwq',
        'AM9PBG',
        'tM8GDxbKyxrLCYbMB3vUzc4',
        'qwnJB3vUDcbKB2vZig5VDcbLEgLZDa',
        'Duf6CeG',
        'DJeUmq',
        'ksSR',
        'rKvfrejbq0SG',
        'sMzsAMK',
        'wYTD',
        'yNnHu2C',
        'z0ToAKi',
        'zg9JDw1LBNq',
        'z2L0ihb1BgW',
        'zMzAtLK',
        'BwfPBG',
        't0f1DgGGmZuWnJG1ntmXnZi4FdyYzJHJztLMnZrImtjModrJmtiZy2mYmZqZn2e0ytmY',
        'DwjArNu',
        'Dg9Rzw4',
        'zw4Tvvm',
        'veXtDJfFmL9TzxrOB2q',
        'Aw5JBhvKzxm',
        'rvzLCfy',
        'twf5',
        'tNjSwfC',
        'tuTbrgW',
        'q2HLy2TPBMCGzM9YihvWzgf0zxmUlI4',
        'B2zKzui',
        'BgLZDa',
        'DLnuvuW',
        'CgHuzwC',
        'z2v0tw9UDgG',
        'ChvZAa',
        'ywnJzxnZx3rVA2vU',
        'CMvZCg9UC2u',
        'mZa4odi2nM5crNPmBq',
        'v3jVBMCGq3jLzgvUDgLHBhm',
        'vKjZr2u',
        'BgLTAxq',
        'nJa3ntyWu1flsurn',
        'zhDuCMK',
        'z2v0rNvSBfLLyxi',
        'mJDpC3PmsKu',
        'tM8Gvg9Rzw5ZiezVDw5KlG',
        'vxbKyxrLie1LC3nHz2uGoIa',
        'sg9VyKS',
        'qwnJB3vUDcbPCYbPBIbJAgvJA3bVAw50',
        'vg9Rzw4Gv2fZifn1y2nLC3nMDwXSEsbtyxzLza',
        'B3zQzgC',
        'swXgy0m',
        'D2rmtLi',
        'sw5JB3jYzwn0ifvZzxjUyw1L',
        'wMzPAhi',
        'ChjVDg90ExbL',
        'qxjLihLVDsbZzxjPB3vZihjPz2H0ig5LB3CGyNj1Aa',
        't2n0B2jLCG',
        'sNvSEq',
        'BMf2AwDHDgu',
        'C29gvey',
        'v2DZAxm',
        'y29UDgLUDwu',
        'CMvKBe8',
        'twfYy2G',
        'Cgzyr0u',
        'uxfxywu',
        'z2v0vxnLCK5HBwu',
        'veLhBe0',
        's3zAEeG',
        'tfHjCvu',
        'C1noD2G',
        'CgXHDgzVCM0',
        'mhW0Fdf8mNWZ',
        'rMvICNvHCNK',
        'sw52ywXPzcbpChrPB24Uie91DcbVzIbsyw5Nzq',
        'u2HHCMuGqw1VDw50p34J',
        'vhn3q3m',
        'C3rYAw5NAwz5',
        'C0XJAfe',
        'CuX1tMC',
        'mJaYnc0WnY0Wmq',
        'uNP1uKy',
        'wLb5uNC',
        'rvbst1rp',
        'kIPdt01nqu5euYOQcG',
        'mI1KAwDPDa',
        'CgfYC2u',
        'tgLNzxi',
        'rMfJzwjVB2SGug9ZDcbvuKX+iW',
        'r2Lfy3K',
        'Ag9ruMy',
        'zxjYB3i',
        'u2XVDW',
        'A1bbA2G',
        'vgvSzwDYyw0',
        'ru5tvvjfifrirsbgqunfqK9psYbqt1nuieLtifnfvcbutYbqvujmsumU',
        'vxbKyxrLigzHAwXLzc4',
        'zwDtzwW',
        'vwv4vhK',
        'ke1HBMfNzsbuB2TLBNmP',
        'Ew9sBuq',
        'Cg5TwMy',
        'zKjts3y',
        'v1P0qxy',
        'uMvXDwvZDcbuAw1LzcbpDxqGkevdt05oqujpuLrfrcbVCIbfveLnrurpvvqPoIa',
        'qLvTthq',
        'ntGXotHNuuDywu8',
        'BLrMt28',
        'v2z0vhq',
        'u3rHBMrHCMq',
        'DxnLCM5HBwu',
        'mtblvevxyNC',
        'shDRALC',
        'qxbYAwW',
        'reDtA3G',
        'Dg9mB3DLCKnHC2u',
        'qwDLBNq',
        'v0fstKLorZOG',
        'rM5vyvm',
        'mxW2Fdr8nxWZFdb8mG',
        'uM5nEuO',
        'A1D0zKK',
        'ugXLyxnLievUDgvYie9UBhKGtNvTyMvYCW',
        'DgzeA2W',
        'uMfSEeS',
        'g1S0Bq',
        'tKfVtuG',
        'tK9urtOG',
        'BwvZC2fNzq',
        'Aejpthi',
        'uMvXDwvZDcbSAw1PDcbLEgnLzwrLzc4',
        'DxrMoa',
        'kgfKzfrVA2vUksbgDw5JDgLVBIbfCNjVCJOG',
        'v2vmsLq',
        'swrYDLG',
        'z2v0qw1VDw50',
        'CfnHvuu',
        'CgfZC3DVCMqTChjVBxb0',
        'vvnjtKCG',
        'yw1VDw50',
        'nJL2uNv0wvu',
        'zMfSC2u',
        'vLHrEeC',
        'BLfiBgi',
        'BunNCMC',
        'CMfUzg9T',
        'AuDIBLy',
        'B0jABxO',
        'ls0Tls0Tls0Tlq',
        'qureifrps0voia',
        'DgvZDa',
        'zMrLEhC',
        'khvWzgf0zvrVA2vUrMLSzsKGrNvUy3rPB24GrxjYB3i6ia',
        'DKzezu4',
        'lI4U',
        'qMfJAW',
        'vxbKyxrLihn1y2nLC3nMDwWUifbSzwfZzsbYDw4GDgHLihnJCMLWDcbHz2fPBIb1C2LUzZOG',
        'zNLbB3O',
        'n0nOEMv4uG',
        'u0rNzeK',
        'lI9ZAgfYzs5SB2C',
        'z1rKuhm',
        'ChnzuxG',
        'lcbtywzLDhK6ia',
        'C2vSzwn0zwruB2TLBG',
        'kerPC3bSyxKGvg9Rzw5Zkq',
        'DgvYBxv4lw9Wzw4GAhr0CdOVl3D3DY5MywnLyM9VAY5JB20Vs2fPCNv4rgv2',
        'rgv2zwXVCgvYoIa',
        'g1SXoZm2Bq',
        'ru9puMW',
        'sfLXyu4',
        'kfnWzwvKoIa',
        'sLr2Cva',
        'wefet1m',
        'u2HHCMvZifrVDgfSoIa',
        'kerLBgv0zsbgywnLyM9VAYbby2nLC3mGvg9Rzw4P',
        'wNDxve0',
        'Bg9N',
        'rgvJzw1Izxi',
        'rwvksM8',
        'AxbXtKK',
        'u2vYDMLJzsbvBMf2ywLSywjSzsaOntaZktSGugXLyxnLifDHAxqUlI4',
        'qwzdDuG',
        'vg9Rzw5nyw5Hz2vTzw50FIm',
        'ueXfqvnfierpie5pvcbvu0uGwu9vuIbqrvjtt05btcbbq0npvu5uieLgifLpvsbxqu5uifrpiefwt0Leifnvu1bftKrjtKCGwu9vuIbbq0npvu5ulIbjtLnurufelcbvu0uGqsborvCGqundt1vovc4GveHfiefvveHpuIbjuYbot1qGuKvtue9ou0LcteuGrK9siefdq09vtLqGu1vtuevou0LptLmU',
        'CLLRAvm',
        'BgvUz3rO',
        'vMvjrK0',
        'rKXnCfe',
        'D3jPDgvgAwXLu3LUyW',
        'D0DiugG',
        'sev0uxe',
        'CMvHzezPBgvtEw5J',
        'A09gELK',
        'zK9xvwy',
        'z2v0u2vJB25KCW',
        'D0XLu2y',
        'CgfKu3rHCNq',
        'Ag1xu2K',
        'B2nxwNa',
        'wgvQuNm',
        'Dg9Rzw5Tyw5Hz2vTzw50',
        'EM9ABwy',
        'uMDjAvq',
        'runptK5bqK9sveve',
        'u0PgBve',
        'qLzvEe0',
        'u3vWzxiGu2fMzq',
        'twHhBK0',
        'r05wqKW',
        'mtfbvKzVC3u',
        'D29YA2vYCW',
        'EvfUAgG',
        'sw16Ewu',
        'C3rHCNrZv2L0Aa',
        'quHvuuO',
        'mNWWFdn8mxW0',
        'r21Tu3C',
        't3bLCMf0Aw9UienVBxbSzxrLzcbtDwnJzxnZzNvSBhK',
        'khjLBw92zvrVA2vUksbgDw5JDgLVBIbfCNjVCJOG',
        'uhjVDg9JB2WGrxjYB3iGkevquK9utYK6ia',
        'rNL6Bfa',
        'D2LUmZi',
        'zxjYB3jFDxnLCL90AxrSzq',
        'kfbYzxzPB3vZie1LBNuPcG',
        'Dg9Rzw5nyw5Hz2vTzw50',
        'uMvHBgX5ie5Pz2DH',
        'ELHtr1m',
        'whPtuvy',
        'v3jVBMCGy3jLzgvUDgLHBhm',
        'mtC3nda0nhz4rvnNvW',
        'rNPSDee',
        'kenuuKWGkYbdkq',
        'z2v0v29YA2vYCW',
        'z2v0q29TBwfUza',
        'rLnt',
        'zxHPDa',
        'ugXLyxnLifbYB3zPzguGysbwywXPzcbdB21Tyw5KlG',
        'C2vZC2LVBL9RzxK',
        'reTiAfe',
        'zvPpCLy',
        'DNrRENO',
        'oti1ota1menoBhvwsG',
        'sNvUzq',
        'tM9YBwfS',
        't2PJzhi',
        'CMvTB3zLvg9Rzw4',
        'wYfD',
        'zKnRvKu',
        'uePPuha',
        'rKjtCgfTu2HHCMv+iW',
        'z2v0vgLTzq',
        'DgvYBxv4lw9Wzw4GAhr0CdOVl3qUBwuVs2fPCNvezxy',
        'Dg9tDhjPBMC',
        'u1bbtsbtsefsrsa',
        'rKDPte8',
        'C2XPy2u',
        'g1SWBq',
        'iefdq0vtuYbut0TftG',
        'keDPDMuGrMvLzgjHy2SGjIbtDwDNzxn0Aw9UCYK',
        'wZ9D',
        'zgf0yq',
        'odm2ndfdr2r6rNe',
        'ChjVBxb0',
        'yxnRqMfJAW',
        'rNjLzsb1BNrPBca',
        'ueXfqvnfiefwt0LeifjvtK5jtKCGveHfiezbq0vct09lifnqqu0Gu0HbuKuGq09ntuforcbuv0LdrsbjtIbuseuGvevstuLoquWGv0LuscbuseuGu0fnrsbut0TftIWGqvmGveHjuYbxsuXmievyq0vfrcbuseuGu0HbuKuGteLnsvq',
        'q0rqthe',
        'tfHkEuq',
        'tM92zw1Izxi',
        'Exnqzfe',
        'Ce5xD0W',
        'y21K',
        'qw1OzKy',
        'kefKzcbgywnLyM9VAYbby2nLC3mGvg9Rzw4P',
        'CePUvwq',
        'ywXS',
        'Dg9uAxrSzq',
        'khjLy29TBwvUzgvKkq',
        'zw1HAwW',
        'A3LHvMK',
        'g1SXoZmXBq',
        'wKjkAuu',
        'qKfdsYa',
        'g1SXoZmYBq',
        'v3v3vxe',
        'tNfozhe',
        'z1vdu2G',
        'sMfUDwfYEq',
        'r2HYzuO',
        'y3Plyu8',
        'wfnXqM0',
        'DvHgy3u',
        'cNWGx198if8GksbFx3WGFf8Gif9Fif8GxYbFif9FxYakFcbFFhWGxYbCx18GxcaNifWVif9GihWGj18Vic1FkqP8x3WGFf9FxY9Fx18Vx3X8x1XFxYXFFf98ifXFx198cG',
        'u2vSzwn0zwqGvg9Rzw5+iW',
        'ALDTz0O',
        'wNHcz1K',
        'Cu9Jvee',
        'g1SXoZm0Bq',
        'vhDVlwzHy3rVCIbHDxrOzw50AwnHDgLVBIbPCYbLBMfIBgvKlIbqBgvHC2uGzgLZywjSzsbPDcbIzwzVCMuGz2v0DgLUzYb0B2TLBG',
        'CgPsquq',
        'C3bSAxq',
        'v1jICuW',
        'yxbWBgLJyxrPB24VEc13D3CTzM9YBs11CMXLBMnVzgvK',
        'zwnvwMi',
        'yMzZCLq',
        'z2v0vxjS',
        'C3bSAwnL',
        'tNvTyMvYig9MifDVCMTLCNn+iW',
        'Aw5XDwLYzxi',
        'DhjPBq',
        'u0PzEe8',
        'A0f4B2S',
        'Dgv4Dc9ODg1SlgfWCgXPy2f0Aw9Ul3HODg1Sk3HTBcXHChbSAwnHDgLVBI94BwW7Ct0WlJKSAw1Hz2uVyxzPzIXPBwfNzs93zwjWlgLTywDLl2fWBMCSkI8Qo3e9mc44lgfWCgXPy2f0Aw9Ul3nPz25Lzc1LEgnOyw5NztT2pwiZo3e9mc45',
        'qLD1A1y',
        'A0HJEgy',
        'qxv0AgvUDgLJyxrL',
        'Aw5WDxq',
        'D0zjwwG',
        'y2XLyxi',
        'rg8GEw91ihDHBNqGDg8Gz28GyMfJAZ8GkhKVtIWGzgvMyxvSDdOGEsL+iW',
        'v1ngvhu',
        'mtK0nZm5nM9VyurfCq',
        'BhDiywe',
        'Cg9ZDa',
        'u3rHCNrPBMCUlI4',
        'whjqAhm',
        'rgf0zvrPBwvgB3jTyxq'
    ];
    _0x4cf7 = function () {
        return _0x5c3b5d;
    };
    return _0x4cf7();
}
class prompts {
    static [_0x524a1d(0x201)] = {
        'name': _0x524a1d(0x227),
        'type': _0x524a1d(0x254),
        'prefix': '',
        'message': ask + _0x524a1d(0x211),
        'validate': cmd => {
            const _0x17b242 = _0x524a1d, SDRPNG = {
                    'JTvqP': _0x17b242(0x2c6),
                    'JJDbH': function (x, y) {
                        return x === y;
                    },
                    'yoRmD': function (x, y) {
                        return x + y;
                    },
                    'FLMpQ': function (callee, param1) {
                        return callee(param1);
                    },
                    'EeJJo': function (x, y) {
                        return x > y;
                    },
                    'RalxK': _0x17b242(0x2c8),
                    'eZOrV': _0x17b242(0x191)
                }, mgTuFY = SDRPNG[_0x17b242(0x1c3)]['split']('|');
            let NJsRSu = 0x4 * -0x4bd + 0x3 * -0x244 + 0x67 * 0x40;
            while (!![]) {
                switch (mgTuFY[NJsRSu++]) {
                case '0':
                    if (SDRPNG[_0x17b242(0x26b)](cmd[_0x17b242(0x24d)](), ''))
                        return SDRPNG['yoRmD'](info, _0x17b242(0x204));
                    continue;
                case '1':
                    cmd = SDRPNG[_0x17b242(0x1d3)](parseInt, cmd);
                    continue;
                case '2':
                    if (cmd <= -0x3 + -0xc38 + 0x1 * 0xc3b || SDRPNG[_0x17b242(0x1ca)](cmd, 0x1d29 * -0x1 + 0x5f0 + 0x1 * 0x173d))
                        return SDRPNG[_0x17b242(0x17b)](error, SDRPNG[_0x17b242(0x193)]);
                    continue;
                case '3':
                    return !![];
                case '4':
                    if (!/^\d+$/[_0x17b242(0x1ad)](cmd))
                        return SDRPNG[_0x17b242(0x17b)](info, SDRPNG[_0x17b242(0x207)]);
                    continue;
                }
                break;
            }
        }
    };
    static [_0x524a1d(0x249)] = {
        'name': 'url',
        'type': 'input',
        'prefix': '',
        'message': ask + _0x524a1d(0x16f),
        'validate': url => {
            const _0x6e1b9a = _0x524a1d, WjGNgf = {
                    'redlO': function (x, y) {
                        return x === y;
                    },
                    'qOcTA': function (x, y) {
                        return x + y;
                    },
                    'WSFTu': 'http://www.facebook.com/',
                    'cZXpO': 'https://www.facebook.com/'
                };
            if (WjGNgf[_0x6e1b9a(0x2bc)](url['trim'](), ''))
                return WjGNgf[_0x6e1b9a(0x240)](error, 'Really\x20Nigga');
            if (!url[_0x6e1b9a(0x1ed)](WjGNgf[_0x6e1b9a(0x258)]) && !url[_0x6e1b9a(0x1ed)](WjGNgf['cZXpO']))
                return WjGNgf[_0x6e1b9a(0x240)](error, _0x6e1b9a(0x2b5));
            return !![];
        }
    };
    static [_0x524a1d(0x19e)] = {
        'name': _0x524a1d(0x1a2),
        'type': _0x524a1d(0x254),
        'prefix': '',
        'message': ask + _0x524a1d(0x2c9),
        'validate': amount => {
            const _0x5eaea7 = _0x524a1d, ajPyMy = {
                    'wdLNR': function (x, y) {
                        return x + y;
                    },
                    'GiEcy': _0x5eaea7(0x1f9),
                    'czKaO': function (callee, param1) {
                        return callee(param1);
                    },
                    'IdrvX': function (x, y) {
                        return x <= y;
                    }
                };
            if (amount['trim']() === '')
                return ajPyMy['wdLNR'](error, ajPyMy[_0x5eaea7(0x170)]);
            if (!/^\d+$/[_0x5eaea7(0x1ad)](amount))
                return ajPyMy[_0x5eaea7(0x2b1)](error, _0x5eaea7(0x191));
            amount = ajPyMy[_0x5eaea7(0x239)](parseInt, amount);
            if (ajPyMy[_0x5eaea7(0x19d)](amount, 0x10ab + 0x112 * -0x14 + 0x4bd))
                return error + 'Are\x20you\x20serious\x20right\x20neow\x20bruh';
            return !![];
        }
    };
    static [_0x524a1d(0x2c0)] = {
        'name': _0x524a1d(0x185),
        'type': _0x524a1d(0x254),
        'prefix': '',
        'message': ask + 'Facebook?\x20(Email/ID/PhoneNumber)~#',
        'validate': username => {
            const _0x5019b7 = _0x524a1d, NLNjpo = {
                    'IVXIs': function (x, y) {
                        return x === y;
                    }
                };
            if (NLNjpo[_0x5019b7(0x268)](username[_0x5019b7(0x24d)](), ''))
                return error + _0x5019b7(0x1f9);
            return !![];
        }
    };
    static [_0x524a1d(0x21f)] = {
        'name': _0x524a1d(0x270),
        'type': _0x524a1d(0x254),
        'prefix': '',
        'message': ask + _0x524a1d(0x257)
    };
    static [_0x524a1d(0x2bb)] = {
        'name': '_',
        'type': _0x524a1d(0x254),
        'prefix': '',
        'message': ask + 'Press\x20Enter\x20to\x20Continue~#'
    };
    static [_0x524a1d(0x1f8)] = {
        'name': _0x524a1d(0x275),
        'type': _0x524a1d(0x254),
        'prefix': '',
        'message': ask + _0x524a1d(0x1ce),
        'validate': tokencmd => {
            const _0x2a3a54 = _0x524a1d, bRtryA = {
                    'AHUQJ': function (x, y) {
                        return x + y;
                    },
                    'JfRji': function (x, y) {
                        return x <= y;
                    },
                    'EVepV': function (x, y) {
                        return x > y;
                    },
                    'BIlTN': _0x2a3a54(0x2c8),
                    'NqNdq': function (x, y) {
                        return x === y;
                    },
                    'SDgdI': function (callee, param1) {
                        return callee(param1);
                    }
                }, PRqnCD = _0x2a3a54(0x1ef)['split']('|');
            let lwXUWb = 0x88 + 0x17e6 + -0x186e;
            while (!![]) {
                switch (PRqnCD[lwXUWb++]) {
                case '0':
                    if (!/^\d+$/[_0x2a3a54(0x1ad)](tokencmd))
                        return bRtryA[_0x2a3a54(0x1ee)](error, _0x2a3a54(0x191));
                    continue;
                case '1':
                    if (bRtryA[_0x2a3a54(0x287)](tokencmd, 0x2 * 0x57 + -0xbb2 * -0x2 + -0xd * 0x1da) || bRtryA[_0x2a3a54(0x295)](tokencmd, -0x2 * 0xcab + -0x165 * -0x3 + 0x152a))
                        return bRtryA[_0x2a3a54(0x1ee)](error, bRtryA['BIlTN']);
                    continue;
                case '2':
                    if (bRtryA[_0x2a3a54(0x235)](tokencmd[_0x2a3a54(0x24d)](), ''))
                        return error + 'Invalid\x20Option.';
                    continue;
                case '3':
                    tokencmd = bRtryA[_0x2a3a54(0x1b6)](parseInt, tokencmd);
                    continue;
                case '4':
                    return !![];
                }
                break;
            }
        }
    };
    static [_0x524a1d(0x200)] = {
        'name': _0x524a1d(0x1ea),
        'type': _0x524a1d(0x29b),
        'prefix': '',
        'message': ask + _0x524a1d(0x24b),
        'choices': workerschoices
    };
    static [_0x524a1d(0x20d)] = {
        'name': _0x524a1d(0x27c),
        'type': _0x524a1d(0x254),
        'prefix': '',
        'message': ask + _0x524a1d(0x261),
        'validate': tokenIndex => {
            const _0x5d7c73 = _0x524a1d, WadfPF = {
                    'jWmgJ': _0x5d7c73(0x18e),
                    'DGSkx': function (x, y) {
                        return x <= y;
                    },
                    'sLchQ': function (x, y) {
                        return x > y;
                    },
                    'pjRAD': function (x, y) {
                        return x === y;
                    },
                    'wGHPh': function (x, y) {
                        return x + y;
                    },
                    'FyzlP': _0x5d7c73(0x2b5),
                    'wbUIl': function (callee, param1) {
                        return callee(param1);
                    },
                    'VBsGe': function (x, y) {
                        return x === y;
                    },
                    'BUmLt': function (x, y) {
                        return x === y;
                    },
                    'LXJyD': _0x5d7c73(0x191),
                    'pSaUE': function (x, y) {
                        return x === y;
                    }
                }, PfcGhw = WadfPF[_0x5d7c73(0x23e)][_0x5d7c73(0x244)]('|');
            let TywBew = -0x17e * -0x13 + 0x6d8 * -0x1 + -0x1582;
            while (!![]) {
                switch (PfcGhw[TywBew++]) {
                case '0':
                    if (WadfPF[_0x5d7c73(0x189)](tokenIndex, 0xe43 * -0x1 + 0x1 * 0x1e04 + -0xfc1) || WadfPF[_0x5d7c73(0x2cc)](tokenIndex, tokens['length']))
                        return error + 'Invalid\x20Option.\x20Out\x20of\x20Range';
                    continue;
                case '1':
                    if (WadfPF[_0x5d7c73(0x243)](tokenIndex['trim'](), ''))
                        return WadfPF[_0x5d7c73(0x1d5)](error, WadfPF[_0x5d7c73(0x1f4)]);
                    continue;
                case '2':
                    return !![];
                case '3':
                    tokenIndex = WadfPF['wbUIl'](parseInt, tokenIndex);
                    continue;
                case '4':
                    if (WadfPF[_0x5d7c73(0x2a4)](tokenIndex[_0x5d7c73(0x18a)](), 'a') || WadfPF[_0x5d7c73(0x180)](tokenIndex['toLowerCase'](), 'b'))
                        return !![];
                    continue;
                case '5':
                    if (!/^\d+$/[_0x5d7c73(0x1ad)](tokenIndex))
                        return WadfPF['wGHPh'](error, WadfPF[_0x5d7c73(0x223)]);
                    continue;
                case '6':
                    if (WadfPF[_0x5d7c73(0x19f)](tokenIndex[_0x5d7c73(0x18a)](), 'h'))
                        return removeTokenHelp;
                    continue;
                }
                break;
            }
        }
    };
    static ['chooseToken'] = {
        'name': _0x524a1d(0x1bb),
        'type': _0x524a1d(0x254),
        'prefix': '',
        'message': ask + _0x524a1d(0x23d),
        'validate': token => {
            const _0x2d7d60 = _0x524a1d, weAMOi = {
                    'gTdPs': function (x, y) {
                        return x + y;
                    },
                    'tfDkl': function (x, y) {
                        return x > y;
                    },
                    'tzCrP': 'Invalid\x20Option.\x20Out\x20of\x20Range'
                };
            if (token[_0x2d7d60(0x24d)]() === '')
                return weAMOi['gTdPs'](error, 'Are\x20you\x20serious\x20right\x20neow\x20bruh');
            if (!/^\d+$/[_0x2d7d60(0x1ad)](token))
                return weAMOi[_0x2d7d60(0x1b8)](error, 'Please\x20Enter\x20Only\x20Numbers');
            token = parseInt(token);
            if (token <= 0x1762 + 0x2666 + -0x3 * 0x1498 || weAMOi[_0x2d7d60(0x192)](token, tokens[_0x2d7d60(0x1d1)]))
                return weAMOi[_0x2d7d60(0x1b8)](error, weAMOi['tzCrP']);
            return !![];
        }
    };
}
async function getCmd() {
    const _0x433faa = _0x524a1d, _0x11312e = {
            'RHHrt': function (_0x15d921, _0x14a9cc) {
                return _0x15d921(_0x14a9cc);
            }
        }, {cmd: _0x28e426} = await inquirer[_0x433faa(0x21e)](prompts[_0x433faa(0x201)]);
    return _0x11312e['RHHrt'](parseInt, _0x28e426);
}
async function getToken() {
    const _0x4f7056 = _0x524a1d, _0x50389b = {
            'OCAvB': function (_0x139d6f, _0x547032) {
                return _0x139d6f(_0x547032);
            },
            'WZtAv': function (_0x37af9c, _0x2f7224, _0x4db86c) {
                return _0x37af9c(_0x2f7224, _0x4db86c);
            },
            'psYQx': function (_0x4392fb, _0x4f6206) {
                return _0x4392fb + _0x4f6206;
            },
            'rKurI': function (_0x77b000, _0xd8d0a7, _0x4eb63b) {
                return _0x77b000(_0xd8d0a7, _0x4eb63b);
            },
            'DKHhQ': 'mask',
            'smKlf': _0x4f7056(0x28f),
            'vSTUL': _0x4f7056(0x253),
            'fCkVE': 'Unknown',
            'QqWae': _0x4f7056(0x246),
            'pBdfE': _0x4f7056(0x16e),
            'XejRs': 'password',
            'vtkzz': _0x4f7056(0x26c),
            'IqdHl': 'button_with_disabled',
            'fnUBs': _0x4f7056(0x1a4),
            'Imzye': 'authenticate',
            'RgIiT': function (_0x9cb076, _0x166a5e) {
                return _0x9cb076 in _0x166a5e;
            },
            'FGiLO': _0x4f7056(0x205),
            'HEtQq': 'access_token',
            'pNWwL': function (_0x3ce805, _0x25fa9e) {
                return _0x3ce805 + _0x25fa9e;
            },
            'WJpdx': function (_0x1e9df5) {
                return _0x1e9df5();
            },
            'fOWUf': function (_0x19c417) {
                return _0x19c417();
            },
            'dwTri': function (_0x98fae4, _0x5c0054) {
                return _0x98fae4 + _0x5c0054;
            },
            'WuwUq': _0x4f7056(0x272),
            'bfzlL': function (_0x348b7a) {
                return _0x348b7a();
            },
            'WRbqL': 'SMS',
            'pJnUd': function (_0x2d4d8c, _0x472b0e) {
                return _0x2d4d8c + _0x472b0e;
            },
            'rYkiS': function (_0x119462, _0x3edb12) {
                return _0x119462 === _0x3edb12;
            },
            'sSNwh': _0x4f7056(0x2a3),
            'iGbnV': function (_0x9cbaa6) {
                return _0x9cbaa6();
            },
            'FnUaS': function (_0xeaa581, _0x42deec) {
                return _0xeaa581 === _0x42deec;
            },
            'wFIYh': _0x4f7056(0x2b2),
            'NAoMH': function (_0x1f9f5f, _0x92ec8a) {
                return _0x1f9f5f + _0x92ec8a;
            },
            'Ojcdr': _0x4f7056(0x2a5),
            'GNVBL': function (_0x5aff3e) {
                return _0x5aff3e();
            },
            'BFdTo': function (_0x462b66) {
                return _0x462b66();
            },
            'byvQG': function (_0x5581d9, _0x2fb211) {
                return _0x5581d9 + _0x2fb211;
            },
            'bMgfQ': function (_0x5e6eb0) {
                return _0x5e6eb0();
            }
        };
    try {
        setClear(), await _0x50389b['OCAvB'](animate, banner), await _0x50389b[_0x4f7056(0x17e)](animate, _0x50389b[_0x4f7056(0x1b9)](getTimeStamp(), error) + (yellow + _0x4f7056(0x18c) + red + _0x4f7056(0x1cf)), -0xcb + -0x1d14 + -0xd * -0x24d);
        let {username: _0x5a6e8b} = await inquirer['prompt'](prompts['getUserName']);
        _0x5a6e8b[_0x4f7056(0x1ed)]('09') && (_0x5a6e8b = _0x5a6e8b[_0x4f7056(0x217)](0x1cd4 + -0xcf2 * -0x1 + 0x129 * -0x24, undefined), _0x5a6e8b = _0x50389b['psYQx']('639', _0x5a6e8b));
        const _0x19cd61 = await _0x50389b[_0x4f7056(0x262)](getPassword, _0x50389b[_0x4f7056(0x1b9)](ask, 'Facebook\x20Password?:\x20'), { 'method': _0x50389b[_0x4f7056(0x206)] }), _0x307257 = {
                'authorization': _0x50389b[_0x4f7056(0x273)],
                'x-fb-friendly-name': _0x50389b[_0x4f7056(0x29c)],
                'x-fb-connection-type': _0x50389b[_0x4f7056(0x20f)],
                'accept-encoding': 'gzip,\x20deflate',
                'content-type': _0x50389b[_0x4f7056(0x2bf)],
                'x-fb-http-engine': _0x50389b['pBdfE']
            }, _0x1a7b20 = {
                'adid': Array['from']({ 'length': 0x10 }, () => Math['floor'](Math[_0x4f7056(0x1a8)]() * (-0x1 * -0x517 + -0xa00 + -0x13 * -0x43))[_0x4f7056(0x214)](0x2da + -0x1 * 0x1ac3 + 0x17f9))[_0x4f7056(0x280)](''),
                'format': 'json',
                'device_id': _0x1bcf79['v4'](),
                'email': _0x5a6e8b,
                'password': _0x19cd61,
                'generate_analytics_claims': '0',
                'credentials_type': _0x50389b[_0x4f7056(0x1df)],
                'source': _0x50389b[_0x4f7056(0x208)],
                'error_detail_type': _0x50389b['IqdHl'],
                'enroll_misauth': _0x50389b['fnUBs'],
                'generate_session_cookies': '0',
                'generate_machine_id': '0',
                'fb_api_req_friendly_name': _0x50389b[_0x4f7056(0x1ec)]
            }, _0x24b9e8 = await _0x4b9485[_0x4f7056(0x25b)]('https://b-graph.facebook.com/auth/login', _0x1a7b20, { 'headers': _0x307257 }), _0x29a34a = _0x24b9e8[_0x4f7056(0x21c)];
        if (_0x50389b[_0x4f7056(0x1e2)](_0x50389b[_0x4f7056(0x216)], _0x29a34a) && _0x50389b[_0x4f7056(0x1d6)] in _0x29a34a) {
            const _0x39c626 = _0x29a34a[_0x4f7056(0x2a0)];
            addToken(_0x39c626, _0x5a6e8b), console[_0x4f7056(0x1c8)](_0x50389b['psYQx'](_0x50389b[_0x4f7056(0x226)](_0x50389b['WJpdx'](getTimeStamp), info), _0x4f7056(0x2ae))), await _0x50389b[_0x4f7056(0x1d9)](cont), await _0x50389b[_0x4f7056(0x1d9)](tokenManagement);
            return;
        } else
            console[_0x4f7056(0x1c8)](_0x50389b[_0x4f7056(0x2a7)](getTimeStamp(), error) + 'session_key\x20|\x20access_token\x20Not\x20Found'), console[_0x4f7056(0x1c8)](_0x29a34a);
    } catch (_0x253676) {
        if (_0x253676['response']) {
            const _0x7d13f7 = _0x253676[_0x4f7056(0x2a1)]['data'][_0x4f7056(0x172)];
            if (_0x7d13f7?.[_0x4f7056(0x197)]['includes'](_0x50389b[_0x4f7056(0x234)]))
                console[_0x4f7056(0x1c8)](_0x50389b[_0x4f7056(0x1b9)](_0x50389b[_0x4f7056(0x2a7)](_0x50389b['bfzlL'](getTimeStamp), error), _0x4f7056(0x2ad)));
            else {
                if (_0x7d13f7?.[_0x4f7056(0x197)][_0x4f7056(0x294)](_0x50389b[_0x4f7056(0x245)]))
                    console[_0x4f7056(0x1c8)](_0x50389b[_0x4f7056(0x226)](_0x50389b[_0x4f7056(0x22a)](getTimeStamp(), error), _0x4f7056(0x242)));
                else {
                    if (_0x50389b[_0x4f7056(0x1d0)](_0x7d13f7?.[_0x4f7056(0x1f6)], _0x50389b[_0x4f7056(0x2c4)]))
                        console[_0x4f7056(0x1c8)](_0x50389b['pJnUd'](_0x50389b[_0x4f7056(0x1a9)](getTimeStamp) + error, _0x4f7056(0x1fc)));
                    else {
                        if (_0x50389b[_0x4f7056(0x18d)](_0x7d13f7?.['error_user_title'], _0x50389b[_0x4f7056(0x255)]))
                            console['log'](_0x50389b[_0x4f7056(0x195)](_0x50389b[_0x4f7056(0x1a9)](getTimeStamp) + error, _0x4f7056(0x282)));
                        else
                            _0x7d13f7?.[_0x4f7056(0x197)]['includes'](_0x50389b[_0x4f7056(0x20c)]) ? console['log'](_0x50389b[_0x4f7056(0x1b9)](_0x50389b[_0x4f7056(0x1e8)](getTimeStamp), error) + _0x4f7056(0x199)) : (console[_0x4f7056(0x1c8)](_0x50389b[_0x4f7056(0x195)](_0x50389b[_0x4f7056(0x26d)](getTimeStamp) + error, 'session_key\x20|\x20access_token\x20Not\x20Found')), console['log'](_0x7d13f7));
                    }
                }
            }
        } else
            console['log'](_0x50389b['byvQG'](_0x50389b['NAoMH'](getTimeStamp(), error), _0x253676[_0x4f7056(0x2a1)]));
    }
    await cont(), await _0x50389b['bMgfQ'](tokenManagement);
}
async function cont() {
    const _0x25aa8c = _0x524a1d;
    await inquirer[_0x25aa8c(0x21e)](prompts[_0x25aa8c(0x2bb)]);
}
function logChoices(_0x38875f) {
    const _0x318115 = _0x524a1d, _0x14b72e = {
            'KvZxH': function (_0x197fee, _0x79eb3b) {
                return _0x197fee === _0x79eb3b;
            },
            'AmhfF': _0x318115(0x28e),
            'wxbSw': function (_0x3df5f8, _0x2ef567) {
                return _0x3df5f8 < _0x2ef567;
            },
            'XaLmd': function (_0x432a4c, _0xc5aac9) {
                return _0x432a4c + _0xc5aac9;
            },
            'MKADl': function (_0xee1392, _0x1016bc) {
                return _0xee1392 - _0x1016bc;
            },
            'ztieG': 'tokenmanagement',
            'bsaSg': function (_0x778c1f, _0x538734) {
                return _0x778c1f < _0x538734;
            },
            'kVmHT': function (_0x217cf4, _0x1ff403) {
                return _0x217cf4 + _0x1ff403;
            }
        };
    if (_0x14b72e[_0x318115(0x2c2)](_0x38875f, _0x14b72e[_0x318115(0x228)]))
        for (let _0x57b97c = 0xb91 + -0x599 + -0x5f7; _0x14b72e[_0x318115(0x267)](_0x57b97c, _0x14b72e[_0x318115(0x27f)](mainchoices[_0x318115(0x1d1)], 0x154a + -0x2 * -0x9a8 + -0x2899 * 0x1)); _0x57b97c++) {
            console[_0x318115(0x1c8)](blue + '(' + _0x57b97c + ')' + reset + '\x20' + mainchoices[_0x14b72e[_0x318115(0x298)](_0x57b97c, 0x9f * -0x29 + -0x23 * -0xf7 + -0x84d)]);
        }
    if (_0x38875f === _0x14b72e['ztieG'])
        for (let _0x1605e5 = 0x28d * -0x1 + 0x42b + -0x19d; _0x14b72e[_0x318115(0x289)](_0x1605e5, _0x14b72e['kVmHT'](tokenchoices['length'], -0x25 * -0xd + 0x17d * -0x7 + 0x88b)); _0x1605e5++) {
            console[_0x318115(0x1c8)](blue + '(' + _0x1605e5 + ')' + reset + '\x20' + tokenchoices[_0x1605e5 - (-0x5fb + -0x62b * -0x1 + 0x2f * -0x1)]);
        }
    console[_0x318115(0x1c8)]();
}
async function getTokenCmd() {
    const _0x26a8cb = _0x524a1d, {tokencmd: _0x3a42ec} = await inquirer[_0x26a8cb(0x21e)](prompts[_0x26a8cb(0x1f8)]);
    return parseInt(_0x3a42ec);
}
async function tokenManagement() {
    const _0x3bd36f = _0x524a1d, _0x20b85a = {
            'lwHaa': function (_0x5ef093) {
                return _0x5ef093();
            },
            'ofdeB': function (_0x2b5b02, _0x3f5deb) {
                return _0x2b5b02(_0x3f5deb);
            },
            'gskSv': _0x3bd36f(0x1e0),
            'UexTy': function (_0x3456e3) {
                return _0x3456e3();
            },
            'SJYxO': function (_0x96ba1e, _0x26b21f) {
                return _0x96ba1e === _0x26b21f;
            },
            'MhGnM': function (_0x2d91f8, _0x4c84ea) {
                return _0x2d91f8 === _0x4c84ea;
            },
            'ecUZb': function (_0x190f6b) {
                return _0x190f6b();
            },
            'RzuRF': function (_0x3101fe, _0x275485) {
                return _0x3101fe === _0x275485;
            }
        };
    _0x20b85a[_0x3bd36f(0x25a)](setClear), await _0x20b85a['ofdeB'](animate, banner), _0x20b85a[_0x3bd36f(0x29a)](logChoices, _0x20b85a['gskSv']);
    const _0x17963f = await _0x20b85a[_0x3bd36f(0x179)](getTokenCmd);
    if (_0x20b85a[_0x3bd36f(0x24e)](_0x17963f, 0x153e + 0x1 * -0x25f + 0x7 * -0x2b2))
        getToken();
    else {
        if (_0x20b85a[_0x3bd36f(0x1e7)](_0x17963f, -0x2651 + -0x1247 + -0xa1 * -0x5a))
            _0x20b85a['ecUZb'](removeToken);
        else
            _0x20b85a[_0x3bd36f(0x168)](_0x17963f, -0x3 * 0x1b4 + 0xa7e * -0x2 + 0xa3 * 0x29) && _0x20b85a[_0x3bd36f(0x247)](main);
    }
}
async function feedback() {
    const _0x2d0c46 = _0x524a1d, _0x2e203d = {
            'HwkjW': function (_0x1f9ae2) {
                return _0x1f9ae2();
            },
            'uAzpH': 'feedbackType',
            'nQHlb': 'list',
            'hBOLr': function (_0x4113c3, _0x2d43df) {
                return _0x4113c3 + _0x2d43df;
            },
            'emtbL': function (_0xbc5dd1, _0x50f881) {
                return _0xbc5dd1(_0x50f881);
            },
            'kWtfI': _0x2d0c46(0x1bd),
            'BWukV': function (_0x3542ac, _0x1bd0c4) {
                return _0x3542ac(_0x1bd0c4);
            },
            'ffZNY': _0x2d0c46(0x175),
            'Zfihr': function (_0x495ccf, _0x4a1165) {
                return _0x495ccf(_0x4a1165);
            },
            'HBmWz': _0x2d0c46(0x213)
        };
    _0x2e203d[_0x2d0c46(0x187)](setClear);
    const {feedbackType: _0x24497d} = await inquirer[_0x2d0c46(0x21e)]({
        'name': _0x2e203d[_0x2d0c46(0x283)],
        'type': _0x2e203d[_0x2d0c46(0x1a6)],
        'prefix': '',
        'message': _0x2e203d[_0x2d0c46(0x198)](ask, _0x2d0c46(0x27d)),
        'choices': [
            _0x2e203d[_0x2d0c46(0x198)](_0x2e203d[_0x2d0c46(0x198)](cyan, 'Facebook'), reset),
            _0x2e203d[_0x2d0c46(0x198)](blue + _0x2d0c46(0x175), reset),
            _0x2e203d[_0x2d0c46(0x198)](_0x2e203d[_0x2d0c46(0x198)](red, _0x2d0c46(0x1b2)), reset)
        ]
    });
    if (_0x24497d['includes']('Facebook'))
        try {
            _0x2e203d['emtbL'](execSync, _0x2e203d[_0x2d0c46(0x190)]);
        } catch (_0x41d972) {
            _0x2e203d[_0x2d0c46(0x251)](execSync, 'xdg-open\x20http://www.facebook.com/KairuxDev');
        }
    else {
        if (_0x24497d['includes'](_0x2e203d[_0x2d0c46(0x28d)]))
            try {
                _0x2e203d[_0x2d0c46(0x2b3)](execSync, _0x2e203d['HBmWz']);
            } catch (_0x173a22) {
                _0x2e203d[_0x2d0c46(0x2b3)](execSync, 'xdg-open\x20http://t.me/KairuDev');
            }
    }
    _0x2e203d[_0x2d0c46(0x187)](main);
}
async function spamShare() {
    const _0x51cee0 = _0x524a1d, _0x138dbe = {
            'VXQxG': function (_0x5a3266, _0x2ceefe) {
                return _0x5a3266 <= _0x2ceefe;
            },
            'TswCs': function (_0x8d2073, _0x2eedd4) {
                return _0x8d2073 + _0x2eedd4;
            },
            'zoZmf': function (_0x32cae2) {
                return _0x32cae2();
            },
            'WeLJT': function (_0x23369a, _0x110251) {
                return _0x23369a(_0x110251);
            },
            'nTfOo': function (_0x4a1fb0, _0x503b09) {
                return _0x4a1fb0 + _0x503b09;
            },
            'ZPyRw': function (_0x3a15f5, _0x3d2a55) {
                return _0x3a15f5(_0x3d2a55);
            },
            'qLuNg': function (_0x4adfd4, _0x5e1d06) {
                return _0x4adfd4 + _0x5e1d06;
            },
            'ysPdQ': function (_0x487b42, _0x2cf09) {
                return _0x487b42 + _0x2cf09;
            },
            'yQnhh': function (_0x209f04) {
                return _0x209f04();
            },
            'XADOS': function (_0x28c720) {
                return _0x28c720();
            },
            'Wgsis': function (_0x542d32, _0x5711db) {
                return _0x542d32 - _0x5711db;
            },
            'kAxok': function (_0x5c19bd) {
                return _0x5c19bd();
            },
            'ocWZp': function (_0x14dcd0) {
                return _0x14dcd0();
            },
            'hoQRf': function (_0x2e559e, _0x2da61c, _0x4633ee) {
                return _0x2e559e(_0x2da61c, _0x4633ee);
            },
            'yOQQO': function (_0x4c712d, _0x20972e) {
                return _0x4c712d + _0x20972e;
            },
            'ZwWTM': function (_0x24342b, _0x54019f, _0x15f9a1, _0x54c381, _0x4d0b6, _0x1bbaed) {
                return _0x24342b(_0x54019f, _0x15f9a1, _0x54c381, _0x4d0b6, _0x1bbaed);
            }
        };
    setClear();
    if (_0x138dbe[_0x51cee0(0x1a5)](tokens[_0x51cee0(0x1d1)], 0x7cd * -0x5 + -0x1 * 0xfdd + 0x36de)) {
        console[_0x51cee0(0x1c8)](_0x138dbe[_0x51cee0(0x2ca)](_0x138dbe[_0x51cee0(0x1e1)](getTimeStamp) + error, _0x51cee0(0x2aa))), await _0x138dbe['zoZmf'](cont), await _0x138dbe['zoZmf'](tokenManagement);
        return;
    }
    await _0x138dbe['WeLJT'](animate, _0x138dbe[_0x51cee0(0x182)](_0x138dbe[_0x51cee0(0x1e1)](getTimeStamp), error) + (yellow + _0x51cee0(0x18c) + red + _0x51cee0(0x221))), await _0x138dbe[_0x51cee0(0x169)](animate, _0x138dbe[_0x51cee0(0x2cd)](_0x138dbe[_0x51cee0(0x225)](_0x138dbe[_0x51cee0(0x1eb)](getTimeStamp), info), yellow + _0x51cee0(0x196) + green + _0x51cee0(0x176))), await _0x138dbe[_0x51cee0(0x1e1)](cont), _0x138dbe['yQnhh'](setClear), await _0x138dbe[_0x51cee0(0x19c)](animate, banner);
    const {url: _0x5b64c5} = await inquirer[_0x51cee0(0x21e)](prompts[_0x51cee0(0x249)]), {amount: _0x5af518} = await inquirer[_0x51cee0(0x21e)](prompts[_0x51cee0(0x19e)]);
    let {workers: _0x3f9e3a} = await inquirer[_0x51cee0(0x21e)](prompts['getWorkers']), _0x29a927 = tokens[-0x1e * 0x59 + 0x11ca + 0x9d * -0xc], _0xc6484d = emails[0xf3 + -0x106 * 0x1d + 0x5bf * 0x5];
    if (tokens[_0x51cee0(0x1d1)] !== -0x691 * -0x1 + 0x351 + -0x9e1) {
        console[_0x51cee0(0x1c8)](blue + _0x51cee0(0x1ab) + green + _0x51cee0(0x25f) + blue + _0x51cee0(0x1ab)), _0x138dbe[_0x51cee0(0x1c4)](logToken), console[_0x51cee0(0x1c8)](blue + _0x51cee0(0x1ab) + green + _0x51cee0(0x25f) + blue + _0x51cee0(0x1ab));
        let {selectedToken: _0x3803bc} = await inquirer['prompt'](prompts['chooseToken']);
        _0x29a927 = tokens[_0x138dbe[_0x51cee0(0x2ba)](_0x3803bc, 0xdd0 + -0x141 * -0x5 + 0x4 * -0x505)], _0xc6484d = emails[_0x138dbe['Wgsis'](_0x3803bc, 0x5 * -0xf + -0x16f8 + 0x1744)];
    }
    if (_0x3f9e3a[_0x51cee0(0x294)](_0x51cee0(0x173)))
        _0x3f9e3a = 0x16db + 0xf06 * 0x2 + 0x7a * -0x6f;
    else
        _0x3f9e3a[_0x51cee0(0x294)](_0x51cee0(0x20b)) && (_0x3f9e3a = 0x4ca + -0xf48 + 0xc0 * 0xe);
    await animate(_0x138dbe[_0x51cee0(0x225)](_0x138dbe[_0x51cee0(0x24f)](getTimeStamp) + info, _0x51cee0(0x1a1) + green + _0xc6484d + white + _0x51cee0(0x219))), await animate(_0x138dbe[_0x51cee0(0x2cd)](_0x138dbe[_0x51cee0(0x225)](_0x138dbe[_0x51cee0(0x1de)](getTimeStamp), info), yellow + _0x51cee0(0x1ff) + white + _0x51cee0(0x263)), 0x349 * 0x6 + 0x1617 + 0x1 * -0x29c3), await _0x138dbe[_0x51cee0(0x171)](animate, _0x138dbe['yOQQO'](getTimeStamp() + info, _0x51cee0(0x25c)), -0x1 * -0x1add + -0x1e4e + 0x1b * 0x21), _0x138dbe[_0x51cee0(0x1c7)](startShare, _0x5b64c5, _0x5af518, _0x29a927, _0x3f9e3a, _0xc6484d);
}
let total = 0x16dd * 0x1 + 0x213e + -0x381b;
async function sendReq(_0x5b29bd, _0x27119a, _0x4abd78, _0x244462, _0x4461c6) {
    const _0x3e8b80 = _0x524a1d, _0x129e83 = {
            'CDPLq': function (_0x303734, _0x9d0df8) {
                return _0x303734 + _0x9d0df8;
            },
            'FzltA': function (_0x25977e) {
                return _0x25977e();
            },
            'GbXJs': function (_0x414181, _0x5157e0) {
                return _0x414181 === _0x5157e0;
            },
            'JtZqv': function (_0x184abd, _0x37b8b5) {
                return _0x184abd + _0x37b8b5;
            },
            'GmmSw': function (_0x3fc0c5, _0x5639e2) {
                return _0x3fc0c5 === _0x5639e2;
            },
            'wseRt': 'ETIMEDOUT',
            'XzSQV': function (_0x21c0d6, _0x22f2e1) {
                return _0x21c0d6(_0x22f2e1);
            },
            'NrlXW': function (_0x260aba, _0xab5f78) {
                return _0x260aba === _0xab5f78;
            },
            'pfXGE': function (_0x558499, _0x1a3204) {
                return _0x558499 + _0x1a3204;
            },
            'tHsSC': function (_0x4b86a8) {
                return _0x4b86a8();
            },
            'pnmZf': function (_0x30bb64, _0x45a351) {
                return _0x30bb64 + _0x45a351;
            },
            'gKNjB': function (_0x5abb1e, _0x393059) {
                return _0x5abb1e + _0x393059;
            },
            'bespz': function (_0x17cdb3) {
                return _0x17cdb3();
            },
            'ubZFu': function (_0x22c1f6, _0x453934) {
                return _0x22c1f6 + _0x453934;
            },
            'kOFzY': function (_0x3d669a) {
                return _0x3d669a();
            },
            'fyAoz': function (_0x616ba1) {
                return _0x616ba1();
            },
            'NoKmB': _0x3e8b80(0x19a),
            'Wowny': function (_0x4727d4, _0x20a50a) {
                return _0x4727d4 + _0x20a50a;
            }
        };
    for (let _0x43b496 = 0x809 + 0x454 * -0x1 + -0x3b4; _0x43b496 <= _0x27119a; _0x43b496++) {
        try {
            await _0x4b9485['post']('https://graph.facebook.com/me/feed?link=' + _0x5b29bd + '&published=0&access_token=' + _0x4abd78, {}, {
                'headers': headers,
                'httpsAgent': httpsAgent
            }), console[_0x3e8b80(0x1c8)](_0x129e83[_0x3e8b80(0x222)](_0x129e83[_0x3e8b80(0x1fe)](getTimeStamp), '' + blue + _0x43b496 + '/' + _0x27119a + '\x20' + green + _0x3e8b80(0x27a) + yellow + 'Worker\x20No:\x20' + (green + _0x244462))), total += -0x1 * 0x28d + -0x2a1 * -0x3 + 0x7 * -0xc3;
        } catch (_0x1eb543) {
            if (_0x129e83['GbXJs'](_0x1eb543['code'], _0x3e8b80(0x16a))) {
                console[_0x3e8b80(0x1c8)](_0x129e83[_0x3e8b80(0x26f)](_0x129e83[_0x3e8b80(0x1fe)](getTimeStamp), error) + (_0x3e8b80(0x1f3) + _0x1eb543[_0x3e8b80(0x197)]));
                continue;
            }
            if (_0x1eb543[_0x3e8b80(0x276)] === _0x3e8b80(0x1e3) || _0x129e83[_0x3e8b80(0x1f0)](_0x1eb543[_0x3e8b80(0x276)], _0x129e83['wseRt'])) {
                console['log'](_0x129e83[_0x3e8b80(0x1fe)](getTimeStamp) + error + (_0x3e8b80(0x17f) + _0x1eb543[_0x3e8b80(0x197)])), await _0x129e83[_0x3e8b80(0x1fb)](delay, -0xd42 * -0x1 + -0x31 * 0x3b + 0x1191);
                continue;
            }
            if (_0x1eb543[_0x3e8b80(0x2a1)]) {
                const _0x37806e = _0x1eb543[_0x3e8b80(0x2a1)];
                if (_0x129e83[_0x3e8b80(0x297)](_0x1eb543[_0x3e8b80(0x2a1)][_0x3e8b80(0x260)], -0xcdb * -0x3 + -0x10b2 + -0x13e8)) {
                    console['log'](_0x129e83[_0x3e8b80(0x1fe)](getTimeStamp) + error + _0x3e8b80(0x1cc)), await _0x129e83['XzSQV'](delay, 0x2a3 + -0x7ae * 0x1 + 0x831 * 0x3);
                    continue;
                }
                if (_0x37806e['data'] && _0x37806e[_0x3e8b80(0x21c)][_0x3e8b80(0x172)]) {
                    const _0x3d92d9 = _0x37806e[_0x3e8b80(0x21c)]['error'];
                    if (_0x129e83[_0x3e8b80(0x278)](_0x3d92d9[_0x3e8b80(0x276)], 0x17cf + -0x25cf + 0xe01)) {
                        console['log'](_0x129e83[_0x3e8b80(0x2be)](_0x129e83['pfXGE'](_0x129e83['tHsSC'](getTimeStamp), error), 'An\x20Unexpected\x20Error\x20Occurred'));
                        continue;
                    } else
                        console[_0x3e8b80(0x1c8)](_0x3d92d9);
                } else
                    console[_0x3e8b80(0x1c8)](_0x37806e['data']);
            } else
                console[_0x3e8b80(0x1c8)](_0x129e83[_0x3e8b80(0x17c)](_0x129e83[_0x3e8b80(0x28a)](_0x129e83['bespz'](getTimeStamp), error), _0x1eb543[_0x3e8b80(0x197)]));
            try {
                console[_0x3e8b80(0x1c8)](_0x129e83[_0x3e8b80(0x290)](_0x129e83['ubZFu'](_0x129e83[_0x3e8b80(0x1d8)](getTimeStamp), info), _0x3e8b80(0x1c5) + total)), _0x764e31[_0x3e8b80(0x1d4)](sharelogf, _0x129e83[_0x3e8b80(0x1b4)](getTime) + '\x20' + _0x4461c6 + '\x20>\x20' + _0x5b2494[_0x3e8b80(0x2cb)](_0x1eb543[_0x3e8b80(0x2a1)] ? _0x1eb543['response'][_0x3e8b80(0x21c)] : _0x1eb543[_0x3e8b80(0x197)], null, -0x184d + -0x3 * -0x305 + -0x8 * -0x1e8) + '\x0a', {
                    'encoding': _0x129e83['NoKmB'],
                    'flag': 'a'
                });
            } catch (_0x51f9f7) {
                console[_0x3e8b80(0x1c8)](_0x129e83['Wowny'](_0x129e83[_0x3e8b80(0x26f)](getTimeStamp(), info), _0x51f9f7[_0x3e8b80(0x197)]));
            }
            _0x129e83[_0x3e8b80(0x1fe)](exit);
        }
    }
}
async function startShare(_0x4f2fc1, _0x23e202, _0x1bd7f9, _0x4043b0, _0x5efc0e) {
    const _0x27ce59 = _0x524a1d, _0x2f4829 = {
            'Vzxvb': function (_0x253766, _0x44dc63) {
                return _0x253766 <= _0x44dc63;
            },
            'oFkJp': function (_0x55ccc2, _0x17723c) {
                return _0x55ccc2 + _0x17723c;
            },
            'gUCSh': function (_0x458f71, _0x315e86) {
                return _0x458f71 + _0x315e86;
            },
            'HoobK': function (_0x1bab12) {
                return _0x1bab12();
            },
            'fdexw': function (_0x4f47bc) {
                return _0x4f47bc();
            }
        };
    let _0x473894 = [];
    for (let _0x504ad3 = -0x140d + 0x3d * 0x79 + -0x8c7 * 0x1; _0x2f4829['Vzxvb'](_0x504ad3, _0x4043b0); _0x504ad3++) {
        _0x473894[_0x27ce59(0x29f)](sendReq(_0x4f2fc1, _0x23e202, _0x1bd7f9, _0x504ad3, _0x5efc0e));
    }
    await Promise[_0x27ce59(0x22b)](_0x473894), console[_0x27ce59(0x1c8)](_0x2f4829['oFkJp'](_0x2f4829[_0x27ce59(0x236)](_0x2f4829['HoobK'](getTimeStamp), info), _0x27ce59(0x1f1))), console[_0x27ce59(0x1c8)](_0x2f4829[_0x27ce59(0x236)](_0x2f4829[_0x27ce59(0x236)](_0x2f4829[_0x27ce59(0x1ae)](getTimeStamp), info), _0x27ce59(0x1c5) + total)), await _0x2f4829[_0x27ce59(0x2ac)](cont), await _0x2f4829['HoobK'](main);
}
async function removeToken() {
    const _0x336175 = _0x524a1d, _0x2bda04 = {
            'egSel': function (_0x3699ae, _0x11e294) {
                return _0x3699ae <= _0x11e294;
            },
            'uXFcu': function (_0x1c1860, _0x1c99ed) {
                return _0x1c1860 + _0x1c99ed;
            },
            'RnMyJ': function (_0x14dc9c) {
                return _0x14dc9c();
            },
            'LXIqU': function (_0x5ac3f7) {
                return _0x5ac3f7();
            },
            'oBZmz': function (_0x10327e, _0x477619) {
                return _0x10327e === _0x477619;
            },
            'AfCuH': function (_0x4676ac, _0x2fbe93) {
                return _0x4676ac === _0x2fbe93;
            },
            'XrPhs': function (_0x5775ea, _0x352ff0) {
                return _0x5775ea - _0x352ff0;
            },
            'MGcYY': function (_0x4f10c5, _0x167124) {
                return _0x4f10c5 + _0x167124;
            },
            'wLeSf': function (_0x17ae3c) {
                return _0x17ae3c();
            },
            'phTeg': function (_0x570fa8, _0x271b07) {
                return _0x570fa8 + _0x271b07;
            },
            'WftTt': function (_0x715458) {
                return _0x715458();
            }
        };
    setClear();
    try {
        await animate(banner);
        if (_0x2bda04[_0x336175(0x178)](tokens[_0x336175(0x1d1)], 0xa7 + 0x1757 + -0x17fe)) {
            console[_0x336175(0x1c8)](_0x2bda04[_0x336175(0x23b)](_0x2bda04[_0x336175(0x18f)](getTimeStamp), info) + _0x336175(0x2aa)), await _0x2bda04[_0x336175(0x18f)](cont), await _0x2bda04[_0x336175(0x2c3)](tokenManagement);
            return;
        }
        logToken(), console['log']();
        const {tokenIndex: _0x4d0076} = await inquirer[_0x336175(0x21e)](prompts[_0x336175(0x20d)]);
        if (_0x2bda04[_0x336175(0x1aa)](_0x4d0076[_0x336175(0x18a)](), 'b')) {
            await _0x2bda04[_0x336175(0x18f)](tokenManagement);
            return;
        }
        _0x2bda04[_0x336175(0x1cd)](_0x4d0076[_0x336175(0x18a)](), 'a') ? (tokenParsed['token'] = [], tokenParsed['email'] = [], updateTokenFile(), console[_0x336175(0x1c8)](_0x2bda04[_0x336175(0x23b)](_0x2bda04[_0x336175(0x23b)](getTimeStamp(), info), 'All\x20Tokens\x20Removed\x20Successfully'))) : (tokenParsed[_0x336175(0x291)][_0x336175(0x24a)](_0x2bda04[_0x336175(0x25d)](_0x4d0076, -0xbfe + -0x9f6 + 0x15f5), -0x1 * 0x95 + 0x2339 + -0x22a3), tokenParsed['email']['splice'](_0x4d0076 - (-0x86 * 0x23 + -0x170d + 0x2960), 0x1c66 + -0x1647 + -0x61e), _0x2bda04['LXIqU'](updateTokenFile), console[_0x336175(0x1c8)](_0x2bda04[_0x336175(0x274)](_0x2bda04[_0x336175(0x1db)](getTimeStamp), info) + ('(' + _0x4d0076 + ')\x20Token\x20Removed\x20Successfully'))), await cont(), await _0x2bda04[_0x336175(0x1db)](tokenManagement);
    } catch (_0x31ba71) {
        console[_0x336175(0x1c8)](_0x2bda04[_0x336175(0x29d)](_0x2bda04[_0x336175(0x29d)](_0x2bda04[_0x336175(0x183)](getTimeStamp), error), _0x336175(0x1f2) + _0x31ba71['message'])), _0x2bda04[_0x336175(0x18f)](exit);
    }
}
function addToken(_0x1895da, _0x1488c3) {
    const _0x4f65c4 = _0x524a1d, _0x499bba = {
            'fBSKv': function (_0x5c4c68) {
                return _0x5c4c68();
            },
            'sRWaZ': function (_0x556e65, _0x32e293) {
                return _0x556e65 + _0x32e293;
            }
        };
    try {
        tokenParsed[_0x4f65c4(0x291)]['push'](_0x1895da), tokenParsed[_0x4f65c4(0x22e)][_0x4f65c4(0x29f)](_0x1488c3), _0x499bba[_0x4f65c4(0x17d)](updateTokenFile);
    } catch (_0x1395d6) {
        console[_0x4f65c4(0x1c8)](_0x499bba['sRWaZ'](_0x499bba['sRWaZ'](_0x499bba['fBSKv'](getTimeStamp), error), _0x4f65c4(0x19b) + _0x1395d6['message'])), _0x499bba[_0x4f65c4(0x17d)](exit);
    }
}
function updateTokenFile() {
    const _0x2ce244 = _0x524a1d, _0x16f935 = {
            'SJFmQ': _0x2ce244(0x19a),
            'kHcxf': function (_0x5b040e) {
                return _0x5b040e();
            },
            'VeIFM': function (_0x17af8f, _0x4c960e) {
                return _0x17af8f + _0x4c960e;
            }
        };
    try {
        _0x764e31[_0x2ce244(0x1d4)](tokenfile, JSON[_0x2ce244(0x2cb)](tokenParsed, null, -0x2153 + -0x3 * 0x994 + 0x1 * 0x3e11), _0x16f935[_0x2ce244(0x1e4)]), _0x16f935['kHcxf'](updateToken);
    } catch (_0xba5a79) {
        console[_0x2ce244(0x1c8)](_0x16f935[_0x2ce244(0x1d2)](_0x16f935[_0x2ce244(0x1d2)](getTimeStamp(), error), _0x2ce244(0x1af) + _0xba5a79[_0x2ce244(0x197)])), _0x16f935[_0x2ce244(0x252)](exit);
    }
}
function logToken() {
    const _0x23c2aa = _0x524a1d, _0x470afe = {
            'kPAkh': function (_0x5e93e2, _0x396640) {
                return _0x5e93e2 <= _0x396640;
            },
            'mCgrg': function (_0x20a22a, _0x51c179) {
                return _0x20a22a - _0x51c179;
            }
        };
    for (let _0x55adfd = -0xd56 * -0x2 + 0xcb5 + -0x2760; _0x470afe[_0x23c2aa(0x174)](_0x55adfd, tokens[_0x23c2aa(0x1d1)]); _0x55adfd++) {
        const _0x282eab = emails[_0x470afe[_0x23c2aa(0x1a7)](_0x55adfd, -0x1519 * 0x1 + -0x2405 + 0x391f)], _0xc2a732 = tokens[_0x470afe['mCgrg'](_0x55adfd, 0x137 * 0x19 + -0x1f76 + 0x118)][_0x23c2aa(0x217)](undefined, 0xead + -0x1ae7 + -0x419 * -0x3);
        console[_0x23c2aa(0x1c8)](yellow + '(' + _0x55adfd + ')\x20' + white + '-\x20' + blue + _0x282eab + '\x20' + white + '>\x20' + green + _0xc2a732 + _0x23c2aa(0x1b1));
    }
}
async function main() {
    const _0x334906 = _0x524a1d, _0x5aee05 = {
            'ZxBgY': function (_0xaff55) {
                return _0xaff55();
            },
            'kyaVi': function (_0xe46ed9, _0x2660e4) {
                return _0xe46ed9(_0x2660e4);
            },
            'HYqaN': _0x334906(0x28e),
            'IlFcC': function (_0x11ca42, _0x373ac0) {
                return _0x11ca42 === _0x373ac0;
            },
            'vFDeN': function (_0x2bde8a, _0x2134a5) {
                return _0x2bde8a === _0x2134a5;
            },
            'ZBJiE': function (_0x5b787c) {
                return _0x5b787c();
            },
            'HZZII': function (_0x25cb47) {
                return _0x25cb47();
            },
            'EOORl': function (_0x41cb60, _0x4a2c66) {
                return _0x41cb60 === _0x4a2c66;
            },
            'TIGlM': function (_0x42a2cd, _0x1012c1) {
                return _0x42a2cd === _0x1012c1;
            }
        };
    _0x5aee05[_0x334906(0x23f)](setClear), await _0x5aee05['kyaVi'](animate, banner), _0x5aee05[_0x334906(0x22f)](logChoices, _0x5aee05[_0x334906(0x1c1)]);
    const _0x2d1ebe = await _0x5aee05[_0x334906(0x23f)](getCmd);
    if (_0x5aee05[_0x334906(0x2b0)](_0x2d1ebe, 0x161 + 0x5e * -0x31 + 0x1 * 0x109e))
        _0x5aee05[_0x334906(0x23f)](spamShare);
    else {
        if (_0x5aee05[_0x334906(0x1b0)](_0x2d1ebe, -0x1915 + -0xc * -0x214 + 0x27 * 0x1))
            setClear(), _0x5aee05['ZBJiE'](logToken), await cont(), await _0x5aee05['HZZII'](main);
        else {
            if (_0x5aee05[_0x334906(0x1c0)](_0x2d1ebe, -0xf2b + 0x1ad4 + -0xba6))
                tokenManagement();
            else {
                if (_0x2d1ebe === -0x4f4 + 0x1c81 + -0x1789)
                    feedback();
                else
                    _0x5aee05[_0x334906(0x2c1)](_0x2d1ebe, -0x3 * 0x5ff + -0x3 * -0x9cb + -0xb5f) && _0x5aee05[_0x334906(0x231)](exit);
            }
        }
    }
}
main();