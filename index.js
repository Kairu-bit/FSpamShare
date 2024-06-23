const _0x126d41 = _0x5ccf;
(function (_0x4f84f5, _0x3a2941) {
    const _0x467544 = _0x5ccf, _0x283fc6 = _0x4f84f5();
    while (!![]) {
        try {
            const _0x238788 = parseInt(_0x467544(0x1c5)) / (-0x2 * 0x17e + -0x5 * 0x779 + 0x285a) * (parseInt(_0x467544(0x123)) / (0x25e6 + 0x65 * -0x17 + -0x1 * 0x1cd1)) + parseInt(_0x467544(0x178)) / (0xb * 0x29d + -0x3 * -0x18e + -0x2166) * (parseInt(_0x467544(0x77)) / (0x14cb + -0x254a + 0x1083)) + -parseInt(_0x467544(0xf1)) / (-0x2441 + 0x5 * -0x559 + 0x39 * 0x11b) * (-parseInt(_0x467544(0x8b)) / (-0x959 + -0x1994 + 0x1 * 0x22f3)) + -parseInt(_0x467544(0x11e)) / (-0x1 * -0xb0a + -0x8dd * -0x4 + -0x2e77 * 0x1) * (parseInt(_0x467544(0x13b)) / (-0x248c + -0xf * 0x15d + -0x463 * -0xd)) + -parseInt(_0x467544(0x19b)) / (0x1 * -0x1adb + -0x1 * 0x1acb + 0x35af) + -parseInt(_0x467544(0xe6)) / (-0x4e5 * -0x1 + -0x287 * 0x3 + -0x2ba * -0x1) * (parseInt(_0x467544(0xc3)) / (-0x21fa + 0x1 * 0x151d + 0xce8)) + -parseInt(_0x467544(0xbb)) / (-0x233 + 0x2507 + 0xc * -0x2e6);
            if (_0x238788 === _0x3a2941)
                break;
            else
                _0x283fc6['push'](_0x283fc6['shift']());
        } catch (_0x1dc9d1) {
            _0x283fc6['push'](_0x283fc6['shift']());
        }
    }
}(_0x5199, -0x1 * 0x8e85 + 0x39899 * 0x3 + -0x43360));
import _0x556273 from 'fs';
import _0xf86467 from 'circular-json';
import { execSync } from 'child_process';
import _0x4839b2 from 'uuid';
import _0x442b4c from 'axios';
import { exit } from 'process';
import _0x5051ed from 'https';
const yellow = _0x126d41(0x100), green = _0x126d41(0x1c9), red = _0x126d41(0x172), white = _0x126d41(0xdf), cyan = _0x126d41(0x13f), blue = '\x1b[1;34m', underline = _0x126d41(0x1a4), reset = '\x1b[0m', info = blue + _0x126d41(0xb3) + white + '\x20', error = red + _0x126d41(0x7b) + white + '\x20', ask = yellow + _0x126d41(0x1cd) + white + '\x20', tokenfile = './token.json', sharelogf = _0x126d41(0xec);
try {
    console[_0x126d41(0x190)](getTimeStamp() + info + _0x126d41(0x11d));
    const response = execSync(_0x126d41(0xfb))[_0x126d41(0xeb)]();
    if (response[_0x126d41(0x19f)](_0x126d41(0x1b3)))
        console[_0x126d41(0x190)](getTimeStamp() + info + 'No\x20updates\x20found.');
    else {
        const commitMessage = execSync(_0x126d41(0x1b8))[_0x126d41(0xeb)]();
        console[_0x126d41(0x190)](getTimeStamp() + info + 'Update\x20successful.\x20Please\x20run\x20the\x20script\x20again\x20using:\x20' + yellow + _0x126d41(0x1a0)), console['log'](getTimeStamp() + info + (_0x126d41(0x177) + (green + commitMessage))), process[_0x126d41(0x12f)]();
    }
} catch (_0x5b1176) {
    console[_0x126d41(0x190)](getTimeStamp() + error + _0x126d41(0x134)), console['log'](getTimeStamp() + error + _0x5b1176['message']), process[_0x126d41(0x12f)]();
}
const mainchoices = [
        green + _0x126d41(0x1bd) + white + '-\x20' + yellow + '(Spam\x20Share\x20Post\x20on\x20Facebook)',
        green + _0x126d41(0x136) + white + '-\x20' + yellow + _0x126d41(0x160),
        green + _0x126d41(0x107) + white + '-\x20' + yellow + '(Manage\x20Tokens)',
        green + _0x126d41(0x145) + white + '-\x20' + yellow + '(Give\x20Feedback\x20&\x20Suggestions)',
        green + 'EXIT\x20' + white + '-\x20' + yellow + _0x126d41(0x13d)
    ], tokenchoices = [
        green + _0x126d41(0xe3) + white + '-\x20' + yellow + '(Add\x20Facebook\x20Access\x20Token)',
        green + _0x126d41(0xc2) + white + '-\x20' + yellow + _0x126d41(0xdd),
        green + 'BACK\x20' + white + '-\x20' + yellow + _0x126d41(0xa7)
    ], workerschoices = [
        green + '1\x20' + yellow + '(Speed:\x20' + green + _0x126d41(0x13c) + yellow + ',\x20Safety:\x20' + green + 'Super\x20Safe' + yellow + ')\x20' + blue + _0x126d41(0x1c8) + reset,
        green + '2\x20' + yellow + _0x126d41(0xbf) + green + _0x126d41(0x191) + yellow + _0x126d41(0x171) + green + _0x126d41(0x1aa) + yellow + ')++' + reset
    ], removeTokenHelp = '\x0a' + info + _0x126d41(0x14f) + green + 'a\x20' + white + '-\x20' + yellow + _0x126d41(0xa8) + green + 'b\x20' + white + '-\x20' + yellow + _0x126d41(0x106);
var headers = {
    'authority': 'facebook.com',
    'user-agent': _0x126d41(0x138),
    'accept': _0x126d41(0x1d5),
    'accept-language': _0x126d41(0x18f),
    'sec-ch-ua': _0x126d41(0x198),
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': _0x126d41(0xa3),
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': _0x126d41(0xb8),
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1'
};
const httpsAgent = new _0x5051ed['Agent']({
    'rejectUnauthorized': ![],
    'secureProtocol': 'TLSv1_2_method'
});
function getTime() {
    const _0x22acab = _0x126d41, _0x4d307f = { 'TpoOr': _0x22acab(0x13a) }, _0x9aec74 = new Date(), _0x4051cc = new Intl[(_0x22acab(0x133))](_0x22acab(0xdb), {
            'day': _0x4d307f[_0x22acab(0x1d1)],
            'hour': _0x22acab(0x13a),
            'minute': _0x4d307f[_0x22acab(0x1d1)],
            'hour12': !![]
        })[_0x22acab(0x155)](_0x9aec74);
    return _0x4051cc;
}
String[_0x126d41(0x167)][_0x126d41(0xbe)] = function () {
    const _0x547a95 = _0x126d41, _0x267f37 = {
            'nJwvw': function (_0x1611b6, _0x2d0742) {
                return _0x1611b6 + _0x2d0742;
            }
        }, _0x194d05 = this['slice'](-0x9a * 0x2a + -0x1fd * -0x1 + -0x1 * -0x1747, 0x681 + -0x9db * 0x3 + 0x1711)[_0x547a95(0x121)]();
    return _0x267f37[_0x547a95(0xb9)](_0x194d05, this[_0x547a95(0x16b)](0x35 * -0x2f + 0x11 * -0xda + 0x1836, undefined));
};
function setClear() {
    const _0x83e925 = _0x126d41, _0x1e81f3 = {
            'arQBx': function (_0x3b66b3, _0x8679ab) {
                return _0x3b66b3 === _0x8679ab;
            },
            'GVbLI': 'cls',
            'zDQck': _0x83e925(0x194),
            'mwQzP': function (_0x22536a, _0x5f2b5f, _0x374b74) {
                return _0x22536a(_0x5f2b5f, _0x374b74);
            },
            'qRccI': 'clear'
        };
    if (_0x1e81f3[_0x83e925(0xa9)](process[_0x83e925(0x197)], _0x83e925(0x7e))) {
        execSync(_0x1e81f3['GVbLI'], { 'stdio': _0x1e81f3[_0x83e925(0x1cb)] });
        return;
    }
    _0x1e81f3[_0x83e925(0x75)](execSync, _0x1e81f3[_0x83e925(0x1c6)], { 'stdio': _0x1e81f3['zDQck'] });
}
let tokenParsed, tokens, emails;
function updateToken() {
    const _0x21cc43 = _0x126d41, _0x169282 = {
            'baMNw': _0x21cc43(0xde),
            'gIOEE': function (_0x43ba04, _0x5d4a7b) {
                return _0x43ba04 + _0x5d4a7b;
            }
        };
    try {
        const _0x21f185 = _0x556273[_0x21cc43(0x1ca)](tokenfile, _0x169282[_0x21cc43(0x11a)]);
        tokenParsed = JSON[_0x21cc43(0x103)](_0x21f185), tokens = tokenParsed['token'], emails = tokenParsed[_0x21cc43(0x1be)];
    } catch (_0x377d54) {
        console['log'](_0x169282[_0x21cc43(0x10e)](getTimeStamp(), error) + _0x377d54[_0x21cc43(0xd8)]), exit();
    }
}
updateToken();
const version = 'v1.1', banner = green + _0x126d41(0x184) + yellow + _0x126d41(0x15b) + blue + _0x126d41(0x1d8) + (red + underline) + '(' + version + ').' + reset + green + _0x126d41(0x1ba);
function getTimeStamp() {
    const _0x3e18ed = _0x126d41, _0x3b530f = {
            'lWGPO': function (_0x1915d9, _0x20c97a) {
                return _0x1915d9(_0x20c97a);
            },
            'GKAMT': function (_0x122310, _0x489c4c) {
                return _0x122310(_0x489c4c);
            }
        }, _0x5a64be = new Date(), _0x34a9dc = _0x3b530f[_0x3e18ed(0x17b)](String, _0x5a64be[_0x3e18ed(0xe2)]())[_0x3e18ed(0xe9)](0xd * 0x1 + 0x321 + -0x74 * 0x7, '0'), _0x1dfdd9 = String(_0x5a64be[_0x3e18ed(0x19c)]())[_0x3e18ed(0xe9)](0x26b6 + -0x1221 * -0x1 + -0x38d5, '0'), _0x464571 = _0x3b530f[_0x3e18ed(0xfe)](String, _0x5a64be[_0x3e18ed(0x1b2)]())['padStart'](0x9c0 * 0x4 + -0x2566 + -0x198, '0');
    return yellow + '[' + _0x34a9dc + ':' + _0x1dfdd9 + ':' + _0x464571 + ']' + reset + '\x20';
}
const {default: inquirer} = await import(_0x126d41(0xc4)), {default: getPassword} = await import(_0x126d41(0x169));
function delay(_0x43c5be) {
    return new Promise(_0x1e6a11 => setTimeout(_0x1e6a11, _0x43c5be));
}
async function animate(_0x411a0f, _0x9b38c8 = 0x1e08 * -0x1 + -0x200f + 0x3e1b) {
    const _0x58ad4e = _0x126d41, _0x5a4eb8 = {
            'kKbdb': function (_0x1bc027, _0x268c4a) {
                return _0x1bc027(_0x268c4a);
            },
            'FvPSo': 'stdout',
            'BFCLl': _0x58ad4e(0x10a)
        };
    _0x411a0f = _0x411a0f[_0x58ad4e(0xeb)]();
    for (const _0x1034d2 of _0x411a0f) {
        await _0x5a4eb8['kKbdb'](delay, _0x9b38c8), process[_0x5a4eb8[_0x58ad4e(0xe0)]][_0x5a4eb8[_0x58ad4e(0x1b5)]](_0x1034d2);
    }
    console['log']();
}
let currentUTCDate = new Date(), offset = 0x1372 + -0x269 * 0x9 + -0x1 * -0x247, currentDate = new Date(currentUTCDate[_0x126d41(0x92)]() + offset * (-0x262c + -0x1 * 0x2b2 + 0x1b77 * 0x2) * (0x131f + -0x25e8 + 0x16b1)), expirationDate = new Date(_0x126d41(0x1a2));
const monthNames = [
    'January',
    _0x126d41(0x1c7),
    _0x126d41(0x174),
    _0x126d41(0xbc),
    _0x126d41(0x11c),
    'June',
    'July',
    _0x126d41(0x158),
    _0x126d41(0x15c),
    'October',
    _0x126d41(0x7a),
    _0x126d41(0x95)
];
currentDate >= expirationDate && (console[_0x126d41(0x190)](getTimeStamp() + error + _0x126d41(0x19a)), exit());
function _0x5199() {
    const _0x3ae573 = [
        'qw1OuxK',
        'iefdq0vtuYbut0TftG',
        'kIPdt01nqu5euYOQcG',
        'vhDVlwzHy3rVCIbHDxrOzw50AwnHDgLVBIbPCYbLBMfIBgvKlIbqBgvHC2uGzgLZywjSzsbPDcbIzwzVCMuGz2v0DgLUzYb0B2TLBG',
        's3rtwvy',
        'uMvTB3zLifrVA2vUicHWCMvZCYbOigzVCIbOzwXWkx4J',
        'AMzwCKu',
        'z3PPCcWGzgvMBgf0zq',
        'zM9YBwf0',
        'z2v0vxjS',
        'CfHgCuu',
        'qxvNDxn0',
        'rKjtCgfTu2HHCMv+iW',
        'v0vhz2u',
        'rgv2zwXVCgvYoIa',
        'u2vWDgvTyMvY',
        'u2vYDMLJzsbvBMf2ywLSywjSzsaOntaZktSGugXLyxnLifDHAxqUlI4',
        'D3D3lMzHy2vIB29RlMnVBq',
        'zMXVB3i',
        'kerPC3bSyxKGvg9Rzw5Zkq',
        'CMvTB3zLvg9Rzw4',
        'CxrgwuG',
        'DgvZDa',
        'CLfMzLC',
        'weL0zgm',
        'txPTtgq',
        'ChjVDg90ExbL',
        'BhPJv1a',
        'CgfZC3DVCMqTChjVBxb0',
        'uNbKC3C',
        'C2XPy2u',
        'vK10BLu',
        'q1fIuLi',
        'shrhDMm',
        'v2fsAvO',
        'r2PUAeO',
        'lcbtywzLDhK6ia',
        'g1SXoZmXBq',
        'vg9Rzw4Gv2fZifn1y2nLC3nMDwXSEsbtyxzLza',
        'twfYy2G',
        'rxjpwhu',
        'zxjYB3i',
        'vxbKyxrLie1LC3nHz2uGoIa',
        'ntuWoezNEgv1yq',
        'Dg9Rzw5nyw5Hz2vTzw50',
        'A2PRyKy',
        'BfDhue8',
        'ywXS',
        'ls0Tls0Tls0Tlq',
        'BgvUz3rO',
        'C3rHDhvZ',
        'yLnmBKO',
        'u1nPDg8',
        'AK1ZA1C',
        'q1LMyMe',
        'if9FxYbFx18Gx19Fif8Gia',
        'v0vAAvC',
        'CNngueK',
        'vg9Rzw5Z',
        'vKPVCLG',
        'v3PAwMO',
        'Dg9mB3DLCKnHC2u',
        'DenurxO',
        'C2vSzwn0zwruB2TLBG',
        'CMvZCg9UC2u',
        'BgLTAxq',
        'zw4TvvmSzw47Ct0WlJK',
        'Bg9N',
        'tM9YBwfS',
        'Axrku2y',
        'EgrNlw9Wzw4GAhr0CdOVl3D3DY5MywnLyM9VAY5JB20Vs2fPCNv4rgv2',
        'Aw5OzxjPDa',
        'D29YA2vYCW',
        'wKrhBge',
        'CgXHDgzVCM0',
        'iKDVB2DSzsbdAhjVBwuIo3y9iJeWnYiSicjdAhjVBwL1Bsi7DJ0Imta3iIWGiK5VDd1bp0jYyw5KiJT2psiYnci',
        'zujyDvy',
        'vgHLigfJy2vZCYbWzxjPB2qGAgfZigv4CgLYzwqU',
        'ndu5mZzcChzishq',
        'z2v0twLUDxrLCW',
        'runptK5bqK9sveve',
        'rg8GEw91ihDHBNqGDg8Gz28GyMfJAZ8GkhKVtIWGzgvMyxvSDdOGEsL+iW',
        'Aw5JBhvKzxm',
        'rLnt',
        'zxjYB3jFDxnLCL90AxrSzq',
        'mJaYnc0WnY0Wmq',
        'we9mq1a',
        'g1S0Bq',
        'EhrlvNi',
        'z0zYq2y',
        'whjwseW',
        'Dg9Rzw4',
        'z2v0qw1VDw50',
        'u3rHBMrHCMq',
        'CxDWD3C',
        'CxL6EvG',
        'swTyEfq',
        'uwzmsKW',
        'yLnmv2C',
        'Ahr0Chm6lY9NCMfWAc5MywnLyM9VAY5JB20VBwuVzMvLzd9SAw5Rpq',
        'uNzzt0y',
        'z2v0u2vJB25KCW',
        'qwXYzwfKEsb1Ccb0BYbKyxrLlG',
        'ChjVBxb0',
        'qKzdtgW',
        'qK10BgK',
        'kgfKzfrVA2vUksbgDw5JDgLVBIbfCNjVCJOG',
        'z2L0igXVzYaTmsaTlxbYzxr0Et0LqG',
        'D2f5r1G',
        'cNWGx198if8GksbFx3WGFf8Gif9Fif8GxYbFif9FxYakFcbFFhWGxYbCx18GxcaNifWVif9GihWGj18Vic1FkqP8x3WGFf9FxY9Fx18Vx3X8x1XFxYXFFf98ifXFx198cG',
        'ueXfqvnfierpie5pvcbvu0uGwu9vuIbqrvjtt05btcbbq0npvu5uieLgifLpvsbxqu5uifrpiefwt0Leifnvu1bftKrjtKCGwu9vuIbbq0npvu5ulIbjtLnurufelcbvu0uGqsborvCGqundt1vovc4GveHfiefvveHpuIbjuYbot1qGuKvtue9ou0LcteuGrK9siefdq09vtLqGu1vtuevou0LptLmU',
        'tK9urtOG',
        'u1bbtsbtsefsrsa',
        'zw1HAwW',
        'zMTjAgO',
        'vuHeqLi',
        'vgvSzwDYyw0',
        'wNzjwe4',
        'zxPqveS',
        'weTJAfi',
        'mJG1odjJswvXzKu',
        'CvjJy0K',
        'rMvICNvHCNK',
        'khjLy29TBwvUzgvKkq',
        'g1SXoZmYBq',
        'CMvHzezPBgvtEw5J',
        'EKrry2S',
        'EKnwBM0',
        'wZ9D',
        'u3rHCNrPBMCUlI4',
        'rvbst1rp',
        'AM9PBG',
        'vhbVt3i',
        'ugXLyxnLifbYB3zPzguGysbwywXPzcbdB21Tyw5KlG',
        'zMfKrKu',
        'zwTiwfq',
        'Dgv4Dc9ODg1SlgfWCgXPy2f0Aw9Ul3HODg1Sk3HTBcXHChbSAwnHDgLVBI94BwW7Ct0WlJKSAw1Hz2uVyxzPzIXPBwfNzs93zwjWlgLTywDLl2fWBMCSkI8Qo3e9mc44lgfWCgXPy2f0Aw9Ul3nPz25Lzc1LEgnOyw5NztT2pwiZo3e9mc45',
        't2fjuw4',
        'zNv6Eui',
        's2fPCNuUia',
        'qxjLihLVDsbZzxjPB3vZihjPz2H0ig5LB3CGyNj1Aa',
        'uNPgvKW',
        'Dfzouwy',
        'ifrpifnut1a',
        'Dgrrsw0',
        'DwruvNC',
        'khvWzgf0zvrVA2vUrMLSzsKGrNvUy3rPB24GrxjYB3i6ia',
        'D3jPDgvgAwXLu3LUyW',
        'CxPiBwu',
        'rhHzz1q',
        'DgvYBxv4lw9Wzw4GAhr0CdOVl3D3DY5MywnLyM9VAY5JB20Vs2fPCNv4rgv2',
        'Cw5KwKO',
        'vvHJt1q',
        'BxDrELa',
        'u2HHCMvKifn1y2nLC3nMDwXSEs4G',
        'mtu0oenxseD6yG',
        'AvLQrxe',
        'z2v0tw9UDgG',
        'tM92zw1Izxi',
        'wYfD',
        'EgvJs1G',
        'uhLiu0m',
        'D2LUmZi',
        'Cg9ZDa',
        't1bsyNm',
        'uuPxq0q',
        'DvfUqNC',
        'C3bSAwnL',
        'ExzuzNK',
        'ufLKrvm',
        'CLDQy1q',
        'BuHKB0O',
        'sM1vCNm',
        'qwnJB3vUDcbKB2vZig5VDcbLEgLZDa',
        'q0DZAMy',
        'mtGWmgriBMDfsa',
        'DNPuv1u',
        'sNn6A1u',
        'ufnNuha',
        'ywnJzxnZx3rVA2vU',
        'rNfiwei',
        's2DwCMG',
        'z2v0vgLTzq',
        'yw1VDw50',
        'wgj5DKm',
        'rgvJzw1Izxi',
        'ChvZAa',
        'yNv0Dg9Ux3DPDgHFzgLZywjSzwq',
        'vw5RBM93BG',
        'qM5vAvm',
        'v29YA2vYie5VoIa',
        'Ahr0Chm6lY93D3CUzMfJzwjVB2SUy29TlW',
        'y29Kzq',
        'BgDeDhe',
        'seLNALm',
        'rMfJzwjVB2SGugfZC3DVCMq/oIa',
        'D3rvq1y',
        'vwfyEeK',
        'Ewrpz1e',
        'v2LUzg93CW',
        'C3bSAxq',
        'C3rHCNrZv2L0Aa',
        'ChrlyMi',
        'kfbYzxzPB3vZie1LBNuP',
        'kfjLBw92zsbbteWPcG',
        'yxjrqNG',
        'v3jVBMCGy3jLzgvUDgLHBhm',
        'zgf0yq',
        'v1POwMC',
        'Agrrq1y',
        'A1nAsgK',
        'rMvdvMm',
        'tM8Gvg9Rzw5ZiezVDw5KlG',
        'CKrjsgi',
        'BxDyzhy',
        'wYTD',
        'Dg9Rzw5Tyw5Hz2vTzw50',
        'rMfJzwjVB2SGug9ZDcbvuKX+iW',
        'z2v0q29TBwfUza',
        'vNjoA1e',
        'BM9Uzq',
        'BKP3DNC',
        'u3HNAuW',
        'mtmZmJK5otzzz2TfyM8',
        'qxbYAwW',
        'BgfTz0O',
        'Dg9uAxrSzq',
        'kfnWzwvKoIa',
        'qw4Gvw5LEhbLy3rLzcbfCNjVCIbpy2n1CNjLza',
        'qwnJB3vUDcbPCYbPBIbJAgvJA3bVAw50',
        'revmrvrfifrps0vouYa',
        'mtfQteriuvO',
        'Aw5XDwLYzxi',
        'B2rdzgC',
        'Egvbs3O',
        'qxnetwy',
        'y29UDgLUDwu',
        'BwfPBG',
        'BMjisfu',
        'ruvrCxK',
        'rMfJzwjVB2S',
        'lI4U',
        'y3L3z1e',
        'jNb1yMXPC2HLzd0WjMfJy2vZC190B2TLBJ0',
        'yMPvB2e',
        'ELLzuMy',
        'Ahr0Chm6lY9IlwDYyxbOlMzHy2vIB29RlMnVBs9HDxrOl2XVz2LU',
        'BLvjt3q',
        'v0fstKLorZOG',
        'weTcvLi',
        'wMXWsNm',
        't3bLCMf0Aw9UienVBxbSzxrLzcbtDwnJzxnZzNvSBhK',
        'BwvZC2fNzq',
        'z2v0v29YA2vYCW',
        'tLvuzey',
        'zw4Tvvm',
        'uwnKvhG',
        'kerLBgv0zsbgywnLyM9VAYbby2nLC3mGvg9Rzw4P',
        'DxrMoa',
        'g1SXoZm3Bq',
        'rNzqu28',
        'ru5tvvjfifrirsbgqunfqK9psYbqt1nuieLtifnfvcbutYbqvujmsumU',
        'z2v0sg91CNm',
        'qureifrps0voia',
        'yxv0AgvUDgLJyxrL',
        'vLPmDNu',
        'ndu4otyZmeP3y09cEa',
        'u2HHCMvZifrVDgfSoIa',
        'zMvLzgjHy2TuExbL',
        'CgfKu3rHCNq',
        'DhjPBq',
        'Dg9tDhjPBMC',
        'lI9ZAgfYzs5SB2C',
        'rvPAufq',
        'BNjSEhC',
        'mNWZFdr8mxWW',
        'uMf0vwS',
        'mtmWnZvryK9yy1O',
        'Bg9NAw4',
        'DfnrAhe',
        'DgvYBxv4lw9Wzw4GAhr0CdOVl3qUBwuVs2fPCNvezxy',
        'wuzWq3G',
        'mNWZFdf8mhW0',
        'Cg50qM8',
        'ug1ABNm',
        'u09crMu',
        't25gufi',
        'z2L0ihb1BgW',
        'uKL5zNq',
        'rLfuD3i',
        'r0Tbtvq',
        'C3rYAw5NAwz5',
        'g1SXoZmZBq',
        'zhfHDe8',
        'z2v0vxnLCK5HBwu',
        'CgfYC2u',
        'uMvHBgX5ie5Pz2DH',
        'EvbKt2C',
        'kfbYzxzPB3vZie1LBNuPcG',
        've9lru4GtufoquDftuvovca',
        'sw5JB3jYzwn0ifvZzxjUyw1L',
        'yxLHsM4',
        'D3jPDgu',
        'BM5Pque',
        'EMLwz2y',
        'vvHyzhC',
        'z0Lpruu',
        'ksbuB2TLBIbszw1VDMvKifn1y2nLC3nMDwXSEq',
        'zNjVBq',
        'zeLHqwO',
        'qKXsD2m',
        'EwPXy1O',
        'y0vAEhO',
        'u01t',
        'q3rhv1O',
        'qvDUvLq',
        'z2v0rgf0zq',
        'zNHRBvm',
        'yMfntNC',
        'nhWZFdb8mNWX',
        'twf5',
        'q2HLy2TPBMCGzM9YihvWzgf0zxmUlI4',
        'nJuXr2HXz0fs',
        'sw52ywXPzcbpChrPB24Uie91DcbVzIbsyw5Nzq',
        'A1zMBvq',
        'Dg9vChbLCKnHC2u',
        'C2vZC2LVBL9RzxKGFcbHy2nLC3nFDg9Rzw4GtM90iezVDw5K',
        'mZrVu05ZwwS',
        'nJm5',
        'ugXLyxnLievUDgvYie9UBhKGtNvTyMvYCW',
        'Bhf3zvi',
        'CNLVB28',
        'sw52ywXPzcbpChrPB24U',
        'vhLmtg0',
        'C2vZC2LVBL9RzxK',
        'Dg9Rzw5jBMrLEa',
        'zgLerg8',
        'Aw5WDxq',
        'zM5pEgS',
        'zxHPDa',
        'tu5fv2e',
        'u0XLvfO',
        'tLHeA3a',
        'rgf0zvrPBwvgB3jTyxq',
        'vxbKyxrLigzHAwXLzc4',
        'D21ls0i',
        'u0HpvYbut0TftLmG',
        'rw1ru1u',
        'tw96AwXSys81lJaGkfDPBMrVD3mGtLqGmtaUmdSGv2LUnJq7ihG2ncKGqxbWBgvxzwjlAxqVntm3lJm2icHlsfrntcWGBgLRzsbhzwnRBYKGq2HYB21LlZeWnY4WlJaUmcbtywzHCMKVntm3lJm2',
        'zLPVzvK',
        'mI1KAwDPDa',
        'oti4yMTzz29X',
        'u2XVDW',
        'kev4AxqGvgHLifbYB2DYyw0P',
        'qLbPvKe',
        'g1SXoZm2Bq',
        'DxnLCM5HBwu',
        'BwfZAW',
        'Ahr0CdOVl3D3DY5MywnLyM9VAY5JB20V',
        'Bvn0r1O',
        'kenuuKWGkYbdkq',
        'rKvfrejbq0SG',
        'ueXfqvnfiefwt0LeifjvtK5jtKCGveHfiezbq0vct09lifnqqu0Gu0HbuKuGq09ntuforcbuv0LdrsbjtIbuseuGvevstuLoquWGv0LuscbuseuGu0fnrsbut0TftIWGqvmGveHjuYbxsuXmievyq0vfrcbuseuGu0HbuKuGteLnsvq',
        'CuPYBwu',
        'EeT2CgK',
        'yLz4Afm',
        'rK1Vy1G',
        'CMfUzg9T',
        'y2HVB3nLvg9Rzw4'
    ];
    _0x5199 = function () {
        return _0x3ae573;
    };
    return _0x5199();
}
console[_0x126d41(0x190)](getTimeStamp() + info + ('Free\x20until\x20' + (yellow + underline + monthNames[expirationDate[_0x126d41(0x79)]()]) + '\x20' + expirationDate[_0x126d41(0x118)]() + '\x20' + (expirationDate['getFullYear']() + reset))), await delay(-0x3 * 0x22 + 0xb1 * 0x3 + 0x11db), setClear();
class prompts {
    static [_0x126d41(0xb6)] = {
        'name': 'cmd',
        'type': 'input',
        'prefix': '',
        'message': ask + _0x126d41(0x159),
        'validate': cmd => {
            const _0x43909f = _0x126d41, wJwCNB = {
                    'xQKBH': _0x43909f(0x125),
                    'OnFPR': function (callee, param1) {
                        return callee(param1);
                    },
                    'qtFYH': function (x, y) {
                        return x <= y;
                    },
                    'udTVw': function (x, y) {
                        return x > y;
                    },
                    'SOBFe': function (x, y) {
                        return x + y;
                    },
                    'UXcOT': _0x43909f(0x11f),
                    'MNEWa': function (x, y) {
                        return x === y;
                    }
                }, yBnOVP = '4|0|1|3|2'[_0x43909f(0xa4)]('|');
            let RjBNbc = 0x47b * -0x4 + -0x1 * 0x30f + 0x14fb;
            while (!![]) {
                switch (yBnOVP[RjBNbc++]) {
                case '0':
                    if (!/^\d+$/['test'](cmd))
                        return info + wJwCNB['xQKBH'];
                    continue;
                case '1':
                    cmd = wJwCNB[_0x43909f(0xfa)](parseInt, cmd);
                    continue;
                case '2':
                    return !![];
                case '3':
                    if (wJwCNB[_0x43909f(0x162)](cmd, -0x121d + 0x6c8 + 0xb55) || wJwCNB[_0x43909f(0x1de)](cmd, -0x1846 + 0x1 * 0x128c + -0x1e * -0x31))
                        return wJwCNB[_0x43909f(0xf9)](error, wJwCNB[_0x43909f(0x74)]);
                    continue;
                case '4':
                    if (wJwCNB[_0x43909f(0x130)](cmd['trim'](), ''))
                        return info + _0x43909f(0x1d2);
                    continue;
                }
                break;
            }
        }
    };
    static ['getUrl'] = {
        'name': 'url',
        'type': _0x126d41(0x12d),
        'prefix': '',
        'message': ask + _0x126d41(0xb5),
        'validate': url => {
            const _0x63bd22 = _0x126d41, cOBkhc = {
                    'SnaLo': function (x, y) {
                        return x === y;
                    },
                    'EKYYr': function (x, y) {
                        return x + y;
                    },
                    'diDDo': _0x63bd22(0x142),
                    'ZDGla': _0x63bd22(0x9b)
                };
            if (cOBkhc['SnaLo'](url[_0x63bd22(0xea)](), ''))
                return cOBkhc['EKYYr'](error, _0x63bd22(0x104));
            if (!url[_0x63bd22(0xa5)](cOBkhc[_0x63bd22(0x12c)]) && !url['startsWith'](cOBkhc[_0x63bd22(0x196)]))
                return error + _0x63bd22(0x1d9);
            return !![];
        }
    };
    static [_0x126d41(0x1a9)] = {
        'name': _0x126d41(0x93),
        'type': _0x126d41(0x12d),
        'prefix': '',
        'message': ask + 'Share\x20Amount?~#',
        'validate': amount => {
            const _0x13c34a = _0x126d41, vlVlJJ = {
                    'fVwyh': _0x13c34a(0xef),
                    'VJorX': function (x, y) {
                        return x <= y;
                    },
                    'XKBVR': function (x, y) {
                        return x + y;
                    },
                    'QJWCD': function (x, y) {
                        return x === y;
                    },
                    'STFwd': _0x13c34a(0x104),
                    'KgVrh': function (x, y) {
                        return x + y;
                    }
                }, nsWNsC = vlVlJJ['fVwyh'][_0x13c34a(0xa4)]('|');
            let ferddk = 0x1822 * 0x1 + -0x29 * -0x85 + -0x2d6f;
            while (!![]) {
                switch (nsWNsC[ferddk++]) {
                case '0':
                    return !![];
                case '1':
                    if (vlVlJJ[_0x13c34a(0x188)](amount, 0x2fb + -0x2532 + 0x2237))
                        return vlVlJJ[_0x13c34a(0xd5)](error, _0x13c34a(0x1d9));
                    continue;
                case '2':
                    if (vlVlJJ[_0x13c34a(0x81)](amount[_0x13c34a(0xea)](), ''))
                        return vlVlJJ['XKBVR'](error, vlVlJJ['STFwd']);
                    continue;
                case '3':
                    if (!/^\d+$/['test'](amount))
                        return vlVlJJ[_0x13c34a(0x91)](error, _0x13c34a(0x125));
                    continue;
                case '4':
                    amount = parseInt(amount);
                    continue;
                }
                break;
            }
        }
    };
    static [_0x126d41(0x102)] = {
        'name': _0x126d41(0x140),
        'type': 'input',
        'prefix': '',
        'message': ask + 'Facebook?\x20(Email/ID/PhoneNumber)~#',
        'validate': username => {
            const _0x54a67f = _0x126d41, EVatfi = {
                    'AsDMf': function (x, y) {
                        return x === y;
                    }
                };
            if (EVatfi[_0x54a67f(0xc7)](username[_0x54a67f(0xea)](), ''))
                return error + _0x54a67f(0x104);
            return !![];
        }
    };
    static ['askBack'] = {
        'name': 'back',
        'type': _0x126d41(0x12d),
        'prefix': '',
        'message': ask + _0x126d41(0x19e)
    };
    static [_0x126d41(0xc8)] = {
        'name': '_',
        'type': _0x126d41(0x12d),
        'prefix': '',
        'message': ask + 'Press\x20Enter\x20to\x20Continue~#'
    };
    static [_0x126d41(0x179)] = {
        'name': 'tokencmd',
        'type': _0x126d41(0x12d),
        'prefix': '',
        'message': ask + 'TokenManagement~#',
        'validate': tokencmd => {
            const _0x2fd200 = _0x126d41, Jhecms = {
                    'AmhQy': _0x2fd200(0xf6),
                    'XItdc': function (x, y) {
                        return x > y;
                    },
                    'qzHme': function (x, y) {
                        return x + y;
                    },
                    'ziVgf': _0x2fd200(0x11f),
                    'WEGge': function (callee, param1) {
                        return callee(param1);
                    }
                }, bAYeAV = Jhecms[_0x2fd200(0x14d)][_0x2fd200(0xa4)]('|');
            let hkHyEg = 0x66d + -0x331 + -0x33c;
            while (!![]) {
                switch (bAYeAV[hkHyEg++]) {
                case '0':
                    if (tokencmd <= -0x1 * 0x6bf + -0x18e7 + 0x1fa6 || Jhecms[_0x2fd200(0x165)](tokencmd, -0x1516 + -0x34b * -0x7 + -0x64 * 0x5))
                        return Jhecms[_0x2fd200(0x70)](error, Jhecms[_0x2fd200(0x10c)]);
                    continue;
                case '1':
                    tokencmd = Jhecms[_0x2fd200(0x15a)](parseInt, tokencmd);
                    continue;
                case '2':
                    if (tokencmd[_0x2fd200(0xea)]() === '')
                        return Jhecms[_0x2fd200(0x70)](error, _0x2fd200(0x128));
                    continue;
                case '3':
                    if (!/^\d+$/[_0x2fd200(0x163)](tokencmd))
                        return error + 'Please\x20Enter\x20Only\x20Numbers';
                    continue;
                case '4':
                    return !![];
                }
                break;
            }
        }
    };
    static ['getWorkers'] = {
        'name': _0x126d41(0x195),
        'type': 'list',
        'prefix': '',
        'message': ask + 'Number\x20of\x20Workers~#',
        'choices': workerschoices
    };
    static [_0x126d41(0x161)] = {
        'name': _0x126d41(0x12b),
        'type': _0x126d41(0x12d),
        'prefix': '',
        'message': ask + _0x126d41(0x152),
        'validate': tokenIndex => {
            const _0x248da0 = _0x126d41, NKudcQ = {
                    'ayaJn': '4|5|6|1|3|2|0',
                    'CdNCL': _0x248da0(0x125),
                    'CYfba': function (x, y) {
                        return x + y;
                    },
                    'wmKKB': _0x248da0(0x11f),
                    'zYYRf': function (callee, param1) {
                        return callee(param1);
                    },
                    'HtGvc': function (x, y) {
                        return x === y;
                    }
                }, jgOaob = NKudcQ[_0x248da0(0x109)][_0x248da0(0xa4)]('|');
            let pivEOk = 0x11 * -0xe5 + 0x1 * 0x1a4e + -0xb19;
            while (!![]) {
                switch (jgOaob[pivEOk++]) {
                case '0':
                    return !![];
                case '1':
                    if (!/^\d+$/[_0x248da0(0x163)](tokenIndex))
                        return error + NKudcQ['CdNCL'];
                    continue;
                case '2':
                    if (tokenIndex <= -0x196f + -0x2008 + 0x3977 || tokenIndex > tokens[_0x248da0(0x17e)])
                        return NKudcQ[_0x248da0(0x183)](error, NKudcQ[_0x248da0(0x135)]);
                    continue;
                case '3':
                    tokenIndex = NKudcQ[_0x248da0(0xd1)](parseInt, tokenIndex);
                    continue;
                case '4':
                    if (NKudcQ[_0x248da0(0x16e)](tokenIndex[_0x248da0(0xea)](), ''))
                        return NKudcQ[_0x248da0(0x183)](error, 'Are\x20you\x20serious\x20right\x20neow\x20bruh');
                    continue;
                case '5':
                    if (NKudcQ[_0x248da0(0x16e)](tokenIndex[_0x248da0(0x18a)](), 'h'))
                        return removeTokenHelp;
                    continue;
                case '6':
                    if (NKudcQ['HtGvc'](tokenIndex[_0x248da0(0x18a)](), 'a') || NKudcQ['HtGvc'](tokenIndex[_0x248da0(0x18a)](), 'b'))
                        return !![];
                    continue;
                }
                break;
            }
        }
    };
    static [_0x126d41(0x14c)] = {
        'name': _0x126d41(0x18c),
        'type': _0x126d41(0x12d),
        'prefix': '',
        'message': ask + 'Selected\x20Token~#',
        'validate': token => {
            const _0x5d1c27 = _0x126d41, ArSMKF = {
                    'QfLJL': _0x5d1c27(0x11b),
                    'YCOew': function (callee, param1) {
                        return callee(param1);
                    },
                    'odCdg': function (x, y) {
                        return x > y;
                    },
                    'OPRbs': _0x5d1c27(0x11f),
                    'PSgPp': function (x, y) {
                        return x + y;
                    },
                    'nrlxw': function (x, y) {
                        return x === y;
                    },
                    'bSLWg': function (x, y) {
                        return x + y;
                    },
                    'mwXdv': _0x5d1c27(0x1d9)
                }, MSpGdw = ArSMKF[_0x5d1c27(0x1ae)]['split']('|');
            let OoIpBw = -0x9b + -0x14c7 + 0x77 * 0x2e;
            while (!![]) {
                switch (MSpGdw[OoIpBw++]) {
                case '0':
                    token = ArSMKF['YCOew'](parseInt, token);
                    continue;
                case '1':
                    return !![];
                case '2':
                    if (token <= -0x1e2a + -0x55d * 0x1 + -0x2387 * -0x1 || ArSMKF[_0x5d1c27(0xc5)](token, tokens[_0x5d1c27(0x17e)]))
                        return error + ArSMKF[_0x5d1c27(0x80)];
                    continue;
                case '3':
                    if (!/^\d+$/[_0x5d1c27(0x163)](token))
                        return ArSMKF[_0x5d1c27(0x8e)](error, _0x5d1c27(0x125));
                    continue;
                case '4':
                    if (ArSMKF[_0x5d1c27(0xee)](token[_0x5d1c27(0xea)](), ''))
                        return ArSMKF[_0x5d1c27(0x1af)](error, ArSMKF[_0x5d1c27(0xb2)]);
                    continue;
                }
                break;
            }
        }
    };
}
function _0x5ccf(_0x1e3188, _0x1af221) {
    const _0x16a298 = _0x5199();
    return _0x5ccf = function (_0x296a16, _0x4d5f80) {
        _0x296a16 = _0x296a16 - (0xafa * -0x1 + 0x53b + 0x62f);
        let _0x2f41b3 = _0x16a298[_0x296a16];
        if (_0x5ccf['Ktixuz'] === undefined) {
            var _0x4b7a9e = function (_0x4f1988) {
                const _0x48060b = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x475a07 = '', _0x3f1445 = '';
                for (let _0x1ca422 = -0x132 + -0x17c8 + 0x18fa, _0x1efd8e, _0x28e77e, _0xc10095 = 0x1787 * -0x1 + -0x1fa6 + 0x372d; _0x28e77e = _0x4f1988['charAt'](_0xc10095++); ~_0x28e77e && (_0x1efd8e = _0x1ca422 % (-0x1 * -0xa0 + 0xb3 * 0x1c + -0x1430) ? _0x1efd8e * (-0x86e + 0x1d0a + -0x4 * 0x517) + _0x28e77e : _0x28e77e, _0x1ca422++ % (-0x1 * -0x1f93 + 0x1 * 0x41e + -0x23ad)) ? _0x475a07 += String['fromCharCode'](0x6d8 + 0x1239 + -0x1812 & _0x1efd8e >> (-(0xec4 + 0x7b4 + -0x1676) * _0x1ca422 & -0x7 * 0x256 + -0x1341 + 0x23a1)) : -0x3 * 0x295 + 0x103 + -0x2 * -0x35e) {
                    _0x28e77e = _0x48060b['indexOf'](_0x28e77e);
                }
                for (let _0x4e2507 = 0x17 * 0xc7 + -0x24bc * 0x1 + 0x12db, _0x416b37 = _0x475a07['length']; _0x4e2507 < _0x416b37; _0x4e2507++) {
                    _0x3f1445 += '%' + ('00' + _0x475a07['charCodeAt'](_0x4e2507)['toString'](0x1968 + 0x39 * 0x9 + -0x1b59))['slice'](-(-0xd32 * -0x1 + 0x6 * 0x18e + -0x1684));
                }
                return decodeURIComponent(_0x3f1445);
            };
            _0x5ccf['TbtDgw'] = _0x4b7a9e, _0x1e3188 = arguments, _0x5ccf['Ktixuz'] = !![];
        }
        const _0x2b66cb = _0x16a298[0x1d7 * 0xb + -0xe6 + -0x1357], _0x3ed562 = _0x296a16 + _0x2b66cb, _0x1e08e5 = _0x1e3188[_0x3ed562];
        return !_0x1e08e5 ? (_0x2f41b3 = _0x5ccf['TbtDgw'](_0x2f41b3), _0x1e3188[_0x3ed562] = _0x2f41b3) : _0x2f41b3 = _0x1e08e5, _0x2f41b3;
    }, _0x5ccf(_0x1e3188, _0x1af221);
}
async function getCmd() {
    const _0x597d7c = _0x126d41, _0x18c770 = {
            'tVNQf': function (_0x1a7cb9, _0x9ba998) {
                return _0x1a7cb9(_0x9ba998);
            }
        }, {cmd: _0x563e47} = await inquirer[_0x597d7c(0x1b4)](prompts[_0x597d7c(0xb6)]);
    return _0x18c770[_0x597d7c(0x1db)](parseInt, _0x563e47);
}
async function getToken() {
    const _0x4b0071 = _0x126d41, _0x40da6e = {
            'HIgjS': function (_0x5f0a2b) {
                return _0x5f0a2b();
            },
            'VMtnU': function (_0x6c8769, _0xf6684f) {
                return _0x6c8769(_0xf6684f);
            },
            'Rpdsw': function (_0x5babf7, _0x12575d) {
                return _0x5babf7 + _0x12575d;
            },
            'IkXxT': function (_0x3c48fc, _0x417e59) {
                return _0x3c48fc + _0x417e59;
            },
            'fadFE': _0x4b0071(0x124),
            'LwToy': function (_0x3dcf88, _0x26bf23, _0x1ce00a) {
                return _0x3dcf88(_0x26bf23, _0x1ce00a);
            },
            'EZZPT': _0x4b0071(0x9f),
            'wtUCV': 'OAuth\x20350685531728|62f8ce9f74b12f84c123cc23437a4a32',
            'KdcWZ': 'Authenticate',
            'VrNkQ': _0x4b0071(0x98),
            'TyLLm': _0x4b0071(0x154),
            'hdQCV': 'application/x-www-form-urlencoded',
            'BMtli': 'Liger',
            'fuzyB': 'json',
            'PmZns': 'password',
            'mTMHo': _0x4b0071(0x97),
            'tdQIm': _0x4b0071(0xe4),
            'lgDtq': _0x4b0071(0xd2),
            'zCVnm': function (_0x13e518, _0x5a6259) {
                return _0x13e518 in _0x5a6259;
            },
            'ryooo': _0x4b0071(0x12a),
            'lunGO': function (_0x2c910c, _0x48f44b) {
                return _0x2c910c in _0x48f44b;
            },
            'WEZiW': _0x4b0071(0x8f),
            'FMocX': function (_0x1df09e, _0x4513c9) {
                return _0x1df09e + _0x4513c9;
            },
            'nbHHU': _0x4b0071(0x15e),
            'mStGZ': function (_0x136b13, _0x375a9c) {
                return _0x136b13 + _0x375a9c;
            },
            'nUIOt': function (_0x395ad0, _0x3dbd85) {
                return _0x395ad0 + _0x3dbd85;
            },
            'fnOxk': _0x4b0071(0x115),
            'jfVrE': function (_0x4495ad) {
                return _0x4495ad();
            },
            'ezPTK': function (_0x3a5a03, _0x12a3dd) {
                return _0x3a5a03 + _0x12a3dd;
            },
            'gyYpW': function (_0x10a29e, _0x205457) {
                return _0x10a29e + _0x205457;
            },
            'yvTfy': function (_0x576001, _0x16be06) {
                return _0x576001 === _0x16be06;
            },
            'AjWpI': _0x4b0071(0x108),
            'aXKDC': function (_0x2fbc29, _0x4a5277) {
                return _0x2fbc29 + _0x4a5277;
            },
            'NZsLo': _0x4b0071(0x18e),
            'NXDkp': function (_0x163d06, _0x584483) {
                return _0x163d06 + _0x584483;
            },
            'AWnVT': function (_0xe87ea4, _0x262da3) {
                return _0xe87ea4 + _0x262da3;
            }
        };
    try {
        _0x40da6e[_0x4b0071(0x9e)](setClear), await _0x40da6e[_0x4b0071(0x16c)](animate, banner), await animate(_0x40da6e[_0x4b0071(0x16a)](_0x40da6e[_0x4b0071(0x1ad)](getTimeStamp(), error), yellow + _0x4b0071(0xd4) + red + _0x4b0071(0x1bb)), 0x2486 + -0x125 * -0xa + 0x1e * -0x199);
        let {username: _0x4d7c2c} = await inquirer[_0x4b0071(0x1b4)](prompts['getUserName']);
        _0x4d7c2c[_0x4b0071(0xa5)]('09') && (_0x4d7c2c = _0x4d7c2c[_0x4b0071(0x16b)](-0x1f6a + 0x1d49 + 0x223, undefined), _0x4d7c2c = _0x40da6e[_0x4b0071(0x1d3)] + _0x4d7c2c);
        const _0x242ec9 = await _0x40da6e['LwToy'](getPassword, _0x40da6e[_0x4b0071(0x16a)](ask, _0x40da6e[_0x4b0071(0xed)]), { 'method': _0x4b0071(0x141) }), _0x33dbfd = {
                'authorization': _0x40da6e[_0x4b0071(0xa0)],
                'x-fb-friendly-name': _0x40da6e['KdcWZ'],
                'x-fb-connection-type': _0x40da6e[_0x4b0071(0xb7)],
                'accept-encoding': _0x40da6e[_0x4b0071(0x129)],
                'content-type': _0x40da6e[_0x4b0071(0xad)],
                'x-fb-http-engine': _0x40da6e[_0x4b0071(0x1b6)]
            }, _0x3e452d = {
                'adid': Array[_0x4b0071(0x110)]({ 'length': 0x10 }, () => Math[_0x4b0071(0x15f)](Math[_0x4b0071(0x14b)]() * (-0xbd2 * 0x1 + -0x10f + 0xcf1))[_0x4b0071(0xeb)](-0x1153 + 0xa * 0x1fc + -0x275))[_0x4b0071(0x1d0)](''),
                'format': _0x40da6e[_0x4b0071(0x1d7)],
                'device_id': _0x4839b2['v4'](),
                'email': _0x4d7c2c,
                'password': _0x242ec9,
                'generate_analytics_claims': '0',
                'credentials_type': _0x40da6e[_0x4b0071(0xf8)],
                'source': _0x4b0071(0xf2),
                'error_detail_type': _0x40da6e['mTMHo'],
                'enroll_misauth': 'false',
                'generate_session_cookies': '0',
                'generate_machine_id': '0',
                'fb_api_req_friendly_name': _0x40da6e[_0x4b0071(0x1dd)]
            }, _0xffa660 = await _0x442b4c[_0x4b0071(0x7f)](_0x40da6e[_0x4b0071(0x9d)], _0x3e452d, { 'headers': _0x33dbfd }), _0xb45365 = _0xffa660[_0x4b0071(0xab)];
        if (_0x40da6e[_0x4b0071(0x1cc)](_0x40da6e[_0x4b0071(0x127)], _0xb45365) && _0x40da6e['lunGO'](_0x40da6e[_0x4b0071(0x185)], _0xb45365)) {
            const _0x4f582c = _0xb45365[_0x4b0071(0x8f)];
            _0x40da6e['LwToy'](addToken, _0x4f582c, _0x4d7c2c), console['log'](_0x40da6e[_0x4b0071(0x16a)](_0x40da6e[_0x4b0071(0x1ad)](_0x40da6e[_0x4b0071(0x9e)](getTimeStamp), info), _0x4b0071(0x173))), await cont(), await _0x40da6e[_0x4b0071(0x9e)](tokenManagement);
            return;
        } else
            console[_0x4b0071(0x190)](_0x40da6e[_0x4b0071(0x1ad)](_0x40da6e[_0x4b0071(0x14a)](_0x40da6e[_0x4b0071(0x9e)](getTimeStamp), error), _0x4b0071(0x122))), console[_0x4b0071(0x190)](_0xb45365);
    } catch (_0x422ded) {
        if (_0x422ded['response']) {
            const _0x40322f = _0x422ded['response']['data'][_0x4b0071(0x176)];
            if (_0x40322f?.[_0x4b0071(0xd8)][_0x4b0071(0x19f)](_0x40da6e[_0x4b0071(0xca)]))
                console['log'](_0x40da6e[_0x4b0071(0x143)](_0x40da6e['nUIOt'](_0x40da6e[_0x4b0071(0x9e)](getTimeStamp), error), _0x4b0071(0xc1)));
            else {
                if (_0x40322f?.[_0x4b0071(0xd8)][_0x4b0071(0x19f)](_0x40da6e[_0x4b0071(0x12e)]))
                    console['log'](_0x40da6e[_0x4b0071(0x1ad)](_0x40da6e['IkXxT'](_0x40da6e[_0x4b0071(0x153)](getTimeStamp), error), _0x4b0071(0x150)));
                else {
                    if (_0x40322f?.[_0x4b0071(0x1a1)] === 'Wrong\x20Credentials')
                        console[_0x4b0071(0x190)](_0x40da6e[_0x4b0071(0x1c3)](_0x40da6e['gyYpW'](_0x40da6e[_0x4b0071(0x153)](getTimeStamp), error), _0x4b0071(0xaa)));
                    else {
                        if (_0x40da6e[_0x4b0071(0x84)](_0x40322f?.[_0x4b0071(0x1a1)], _0x40da6e['AjWpI']))
                            console[_0x4b0071(0x190)](_0x40da6e['aXKDC'](getTimeStamp() + error, _0x4b0071(0x89)));
                        else
                            _0x40322f?.[_0x4b0071(0xd8)]['includes'](_0x40da6e['NZsLo']) ? console[_0x4b0071(0x190)](_0x40da6e[_0x4b0071(0xd3)](_0x40da6e['jfVrE'](getTimeStamp), error) + 'Request\x20limit\x20exceeded.') : (console[_0x4b0071(0x190)](_0x40da6e[_0x4b0071(0x132)](_0x40da6e[_0x4b0071(0x117)](_0x40da6e[_0x4b0071(0x153)](getTimeStamp), error), 'session_key\x20|\x20access_token\x20Not\x20Found')), console[_0x4b0071(0x190)](_0x40322f));
                    }
                }
            }
        } else
            console[_0x4b0071(0x190)](_0x40da6e[_0x4b0071(0x1c3)](_0x40da6e[_0x4b0071(0x1ad)](_0x40da6e['jfVrE'](getTimeStamp), error), _0x422ded[_0x4b0071(0x18d)]));
    }
    await cont(), await _0x40da6e[_0x4b0071(0x153)](tokenManagement);
}
async function cont() {
    const _0x3ca7ba = _0x126d41;
    await inquirer['prompt'](prompts[_0x3ca7ba(0xc8)]);
}
function logChoices(_0x3d35fb) {
    const _0x5efac4 = _0x126d41, _0x5322b9 = {
            'tCTEz': function (_0x42e668, _0x44df34) {
                return _0x42e668 === _0x44df34;
            },
            'LTxzg': _0x5efac4(0xc9),
            'YFpCx': function (_0x245ec9, _0x156387) {
                return _0x245ec9 + _0x156387;
            },
            'ekHXT': function (_0x30c210, _0x5350b0) {
                return _0x30c210 - _0x5350b0;
            },
            'WFSWk': _0x5efac4(0xb4),
            'SxgiL': function (_0x4cf3fa, _0x283492) {
                return _0x4cf3fa - _0x283492;
            }
        };
    if (_0x5322b9[_0x5efac4(0x18b)](_0x3d35fb, _0x5322b9['LTxzg']))
        for (let _0x4c20b3 = -0x1a * -0x3a + -0x176 + -0x46d; _0x4c20b3 < _0x5322b9[_0x5efac4(0xf5)](mainchoices['length'], 0x56 * -0x4f + 0x95 * -0x11 + 0x2470 * 0x1); _0x4c20b3++) {
            console[_0x5efac4(0x190)](blue + '(' + _0x4c20b3 + ')' + reset + '\x20' + mainchoices[_0x5322b9[_0x5efac4(0x1d4)](_0x4c20b3, -0x2 * 0xb95 + 0xc03 + -0x54 * -0x22)]);
        }
    if (_0x5322b9[_0x5efac4(0x18b)](_0x3d35fb, _0x5322b9['WFSWk']))
        for (let _0x14ffd3 = 0x19e0 + 0x4d * -0x2c + -0xca3; _0x14ffd3 < _0x5322b9[_0x5efac4(0xf5)](tokenchoices['length'], -0x26c * 0x5 + -0x3b * -0xa7 + 0x4 * -0x698); _0x14ffd3++) {
            console[_0x5efac4(0x190)](blue + '(' + _0x14ffd3 + ')' + reset + '\x20' + tokenchoices[_0x5322b9[_0x5efac4(0xba)](_0x14ffd3, 0x1 * -0x12b2 + 0x8d * 0xb + -0x329 * -0x4)]);
        }
    console[_0x5efac4(0x190)]();
}
async function getTokenCmd() {
    const _0xc54e5b = _0x126d41, _0x4bf5b1 = {
            'FQTwr': function (_0x214b1f, _0xfccdc9) {
                return _0x214b1f(_0xfccdc9);
            }
        }, {tokencmd: _0x1c162b} = await inquirer['prompt'](prompts['tokenManagement']);
    return _0x4bf5b1[_0xc54e5b(0xfd)](parseInt, _0x1c162b);
}
async function tokenManagement() {
    const _0x307455 = _0x126d41, _0x1b2fb4 = {
            'dIaAj': function (_0x20d899) {
                return _0x20d899();
            },
            'RBpkp': function (_0xd2ebd1, _0x497ca1) {
                return _0xd2ebd1(_0x497ca1);
            },
            'UHDBR': function (_0x420083, _0x569d92) {
                return _0x420083(_0x569d92);
            },
            'MzmLd': _0x307455(0xb4),
            'xtKVr': function (_0x20525f, _0x44181b) {
                return _0x20525f === _0x44181b;
            },
            'XOLCP': function (_0x2a8720, _0x226c38) {
                return _0x2a8720 === _0x226c38;
            }
        };
    _0x1b2fb4[_0x307455(0x111)](setClear), await _0x1b2fb4['RBpkp'](animate, banner), _0x1b2fb4[_0x307455(0x1c0)](logChoices, _0x1b2fb4[_0x307455(0x166)]);
    const _0x1d4ab2 = await _0x1b2fb4[_0x307455(0x111)](getTokenCmd);
    if (_0x1b2fb4[_0x307455(0x1a5)](_0x1d4ab2, 0xe9 * -0x18 + 0xa28 + -0x1 * -0xbb1))
        getToken();
    else {
        if (_0x1b2fb4[_0x307455(0x1a3)](_0x1d4ab2, -0x1 * 0x127a + 0x124f + 0x2d))
            removeToken();
        else
            _0x1b2fb4[_0x307455(0x1a3)](_0x1d4ab2, 0x127d + 0x1d0a + -0x4 * 0xbe1) && main();
    }
}
async function feedback() {
    const _0x1143a7 = _0x126d41, _0x2b9d27 = {
            'KtSYV': function (_0x8935d8) {
                return _0x8935d8();
            },
            'xecKX': _0x1143a7(0xe8),
            'RIyft': 'list',
            'wayGX': 'Where\x20would\x20you\x20like\x20to\x20leave\x20your\x20feedback?',
            'cywgQ': function (_0x5c5180, _0x307428) {
                return _0x5c5180 + _0x307428;
            },
            'SSito': function (_0x15542e, _0x3c44ba) {
                return _0x15542e + _0x3c44ba;
            },
            'lqweR': _0x1143a7(0xcc),
            'qJrme': function (_0x1257fb, _0x20ed82) {
                return _0x1257fb(_0x20ed82);
            },
            'fkIhj': function (_0x16bd01, _0x3d7e98) {
                return _0x16bd01(_0x3d7e98);
            },
            'JmUrs': function (_0x3a6c0a, _0xdfc926) {
                return _0x3a6c0a(_0xdfc926);
            },
            'SmRYF': _0x1143a7(0xf4),
            'CGsjf': 'xdg-open\x20http://t.me/KairuDev',
            'kVfmT': function (_0x265d5c) {
                return _0x265d5c();
            }
        };
    _0x2b9d27[_0x1143a7(0x151)](setClear);
    const {feedbackType: _0x312388} = await inquirer[_0x1143a7(0x1b4)]({
        'name': _0x2b9d27[_0x1143a7(0x7c)],
        'type': _0x2b9d27[_0x1143a7(0xfc)],
        'prefix': '',
        'message': ask + _0x2b9d27[_0x1143a7(0x1b9)],
        'choices': [
            cyan + _0x1143a7(0xcc) + reset,
            _0x2b9d27[_0x1143a7(0xce)](_0x2b9d27[_0x1143a7(0x181)](blue, _0x1143a7(0x1c1)), reset),
            red + 'Back' + reset
        ]
    });
    if (_0x312388[_0x1143a7(0x19f)](_0x2b9d27[_0x1143a7(0x126)]))
        try {
            _0x2b9d27[_0x1143a7(0x147)](execSync, _0x1143a7(0x72));
        } catch (_0x249618) {
            _0x2b9d27[_0x1143a7(0x1bf)](execSync, _0x1143a7(0x193));
        }
    else {
        if (_0x312388[_0x1143a7(0x19f)](_0x1143a7(0x1c1)))
            try {
                _0x2b9d27[_0x1143a7(0x88)](execSync, _0x2b9d27['SmRYF']);
            } catch (_0x5d65b0) {
                _0x2b9d27['fkIhj'](execSync, _0x2b9d27[_0x1143a7(0x8a)]);
            }
    }
    _0x2b9d27[_0x1143a7(0x120)](main);
}
async function spamShare() {
    const _0x16f8e2 = _0x126d41, _0x57f2da = {
            'VZLvu': function (_0x317a65) {
                return _0x317a65();
            },
            'UaXxI': function (_0x41d9a5, _0x152907) {
                return _0x41d9a5 <= _0x152907;
            },
            'gFrCf': function (_0x5ae6b1, _0x30d5b5) {
                return _0x5ae6b1 + _0x30d5b5;
            },
            'ZvIXN': function (_0x41b053, _0x2e65fd) {
                return _0x41b053 + _0x2e65fd;
            },
            'uQnBw': function (_0x1dea63) {
                return _0x1dea63();
            },
            'EmQSU': function (_0x302cde, _0x66e74a) {
                return _0x302cde + _0x66e74a;
            },
            'DxYgT': function (_0xe855d3, _0x57c148) {
                return _0xe855d3(_0x57c148);
            },
            'CPKsZ': function (_0x16faae, _0x2516b7) {
                return _0x16faae + _0x2516b7;
            },
            'BPiVA': function (_0x41f0d6) {
                return _0x41f0d6();
            },
            'eBXuV': function (_0x35664d) {
                return _0x35664d();
            },
            'WaRiZ': function (_0x43fed9, _0x57fc0e) {
                return _0x43fed9 !== _0x57fc0e;
            },
            'JszkU': function (_0x20f339, _0x1771c0) {
                return _0x20f339 - _0x1771c0;
            },
            'QcdTx': _0x16f8e2(0x13c),
            'XbyvC': _0x16f8e2(0x191),
            'RvYOF': function (_0x33ae60, _0x39607c) {
                return _0x33ae60(_0x39607c);
            },
            'rQffW': function (_0xb31cc7) {
                return _0xb31cc7();
            },
            'FqHXB': function (_0x4712e0, _0x10cc5f, _0x431e38) {
                return _0x4712e0(_0x10cc5f, _0x431e38);
            },
            'mHdoJ': function (_0x4d35ea, _0x1a5032) {
                return _0x4d35ea + _0x1a5032;
            },
            'pXFqE': function (_0x212acc, _0x4342d0, _0x45da53, _0x9d50b5, _0x14c1b0, _0x4d5c60) {
                return _0x212acc(_0x4342d0, _0x45da53, _0x9d50b5, _0x14c1b0, _0x4d5c60);
            }
        };
    _0x57f2da[_0x16f8e2(0xe5)](setClear);
    if (_0x57f2da[_0x16f8e2(0xa1)](tokens[_0x16f8e2(0x17e)], 0x2383 * -0x1 + -0x72d + -0xaac * -0x4)) {
        console[_0x16f8e2(0x190)](_0x57f2da[_0x16f8e2(0x1a6)](_0x57f2da['ZvIXN'](_0x57f2da[_0x16f8e2(0xe5)](getTimeStamp), error), _0x16f8e2(0xb0))), await cont(), await _0x57f2da['uQnBw'](tokenManagement);
        return;
    }
    await animate(_0x57f2da[_0x16f8e2(0x137)](_0x57f2da[_0x16f8e2(0x137)](_0x57f2da[_0x16f8e2(0xe5)](getTimeStamp), error), yellow + _0x16f8e2(0xd4) + red + _0x16f8e2(0x146))), await _0x57f2da[_0x16f8e2(0x71)](animate, _0x57f2da[_0x16f8e2(0x137)](_0x57f2da['CPKsZ'](_0x57f2da[_0x16f8e2(0x82)](getTimeStamp), info), yellow + _0x16f8e2(0x1bc) + green + _0x16f8e2(0xe1))), await _0x57f2da[_0x16f8e2(0x13e)](cont), _0x57f2da[_0x16f8e2(0x199)](setClear), await _0x57f2da['DxYgT'](animate, banner);
    const {url: _0x307061} = await inquirer[_0x16f8e2(0x1b4)](prompts[_0x16f8e2(0x156)]), {amount: _0xc8c945} = await inquirer[_0x16f8e2(0x1b4)](prompts[_0x16f8e2(0x1a9)]);
    let {workers: _0x171498} = await inquirer[_0x16f8e2(0x1b4)](prompts[_0x16f8e2(0xd9)]), _0x378d98 = tokens[0x2388 + -0x10b8 + -0x25a * 0x8], _0x30d84a = emails[-0x476 * 0x1 + -0x74 * 0x21 + 0x136a];
    if (_0x57f2da[_0x16f8e2(0x16f)](tokens[_0x16f8e2(0x17e)], 0x229b + -0xd4 * 0x1a + -0xd12)) {
        console[_0x16f8e2(0x190)](blue + '----------' + green + _0x16f8e2(0x187) + blue + _0x16f8e2(0x17d)), _0x57f2da[_0x16f8e2(0x199)](logToken), console['log'](blue + _0x16f8e2(0x17d) + green + _0x16f8e2(0x187) + blue + '----------');
        let {selectedToken: _0x4cb5d0} = await inquirer['prompt'](prompts[_0x16f8e2(0x14c)]);
        _0x378d98 = tokens[_0x57f2da['JszkU'](_0x4cb5d0, -0x1 * 0x1351 + 0x1 * -0x86d + 0x1bbf * 0x1)], _0x30d84a = emails[_0x57f2da[_0x16f8e2(0x8d)](_0x4cb5d0, 0x215a + -0x1 * -0x21c7 + -0x4320)];
    }
    if (_0x171498[_0x16f8e2(0x19f)](_0x57f2da[_0x16f8e2(0xdc)]))
        _0x171498 = 0x1 * -0x17f3 + 0x4 * -0x63b + 0x30e0;
    else
        _0x171498[_0x16f8e2(0x19f)](_0x57f2da[_0x16f8e2(0x94)]) && (_0x171498 = -0x1 * 0x101f + 0xab7 + 0x56a);
    await _0x57f2da[_0x16f8e2(0x1b1)](animate, _0x57f2da[_0x16f8e2(0x1a6)](_0x57f2da[_0x16f8e2(0x164)](getTimeStamp), info) + ('USING\x20' + green + _0x30d84a + white + _0x16f8e2(0x14e))), await _0x57f2da[_0x16f8e2(0x90)](animate, _0x57f2da[_0x16f8e2(0x1c2)](_0x57f2da['CPKsZ'](_0x57f2da[_0x16f8e2(0x199)](getTimeStamp), info), yellow + _0x16f8e2(0x144) + white + _0x16f8e2(0x1dc)), 0x21 * -0x3 + -0x1 * 0x184a + 0x18b7), await _0x57f2da[_0x16f8e2(0x90)](animate, _0x57f2da[_0x16f8e2(0x87)](getTimeStamp() + info, _0x16f8e2(0x1ce)), -0x2b7 + -0x189e + 0x1b5f), _0x57f2da[_0x16f8e2(0x157)](startShare, _0x307061, _0xc8c945, _0x378d98, _0x171498, _0x30d84a);
}
let total = 0x1968 + 0x26e8 + -0x188 * 0x2a;
async function sendReq(_0xea44b9, _0x1d81f1, _0x14a582, _0x53a486, _0x394486) {
    const _0x552333 = _0x126d41, _0x18ce68 = {
            'QjafI': function (_0x45f63c, _0x400a00) {
                return _0x45f63c <= _0x400a00;
            },
            'fxkmS': function (_0x147cbf, _0xa70348) {
                return _0x147cbf + _0xa70348;
            },
            'itJSf': function (_0x34da05) {
                return _0x34da05();
            },
            'CQbRR': function (_0x5777c2, _0x5e13e6) {
                return _0x5777c2 === _0x5e13e6;
            },
            'XKchR': _0x552333(0x1cf),
            'kSZHi': function (_0x4b8d0f, _0x2c8c7e) {
                return _0x4b8d0f + _0x2c8c7e;
            },
            'PYdES': function (_0x49f251) {
                return _0x49f251();
            },
            'xKvpi': _0x552333(0x19d),
            'ZlpJs': function (_0xda197, _0x549194) {
                return _0xda197 === _0x549194;
            },
            'lzcWP': 'ETIMEDOUT',
            'XrVHL': function (_0xf98315, _0x1628b9) {
                return _0xf98315 + _0x1628b9;
            },
            'yPdOg': function (_0xf67575) {
                return _0xf67575();
            },
            'qyzyX': function (_0x476e42, _0x3cdd5a) {
                return _0x476e42(_0x3cdd5a);
            },
            'vzTWU': function (_0x526db4, _0x5e6ea2) {
                return _0x526db4 + _0x5e6ea2;
            },
            'bVxhS': function (_0x19e7df) {
                return _0x19e7df();
            },
            'HzTEe': function (_0x548748, _0xc4c024) {
                return _0x548748 === _0xc4c024;
            },
            'rWjcT': function (_0xf804d2, _0x496e54) {
                return _0xf804d2 + _0x496e54;
            },
            'SLeTZ': function (_0xacf206) {
                return _0xacf206();
            },
            'PyHSC': function (_0x6b654f, _0x422649) {
                return _0x6b654f + _0x422649;
            },
            'rsFPI': function (_0x2027ab, _0x176853) {
                return _0x2027ab + _0x176853;
            },
            'gEeSR': function (_0x6a3085, _0x3a3278) {
                return _0x6a3085 + _0x3a3278;
            },
            'qndZJ': function (_0x29d5a3, _0xc8894f) {
                return _0x29d5a3 + _0xc8894f;
            },
            'GjnhJ': function (_0x31b484) {
                return _0x31b484();
            },
            'xeAKz': function (_0x32eb2f) {
                return _0x32eb2f();
            }
        };
    for (let _0x2a9cd7 = 0x37a + 0x295 * 0xd + 0x2 * -0x1285; _0x18ce68['QjafI'](_0x2a9cd7, _0x1d81f1); _0x2a9cd7++) {
        try {
            await _0x442b4c[_0x552333(0x7f)](_0x552333(0x1b0) + _0xea44b9 + _0x552333(0xcf) + _0x14a582, {}, {
                'headers': headers,
                'httpsAgent': httpsAgent
            }), console[_0x552333(0x190)](_0x18ce68['fxkmS'](_0x18ce68[_0x552333(0x192)](getTimeStamp), '' + blue + _0x2a9cd7 + '/' + _0x1d81f1 + '\x20' + green + _0x552333(0x76) + yellow + _0x552333(0x9a) + _0x18ce68['fxkmS'](green, _0x53a486))), total += 0x1aa5 + 0x1f * 0xba + 0xcb * -0x3e;
        } catch (_0x3b181f) {
            if (_0x18ce68[_0x552333(0x16d)](_0x3b181f[_0x552333(0x9c)], _0x18ce68[_0x552333(0x1c4)])) {
                console['log'](_0x18ce68[_0x552333(0x119)](_0x18ce68[_0x552333(0xae)](_0x18ce68[_0x552333(0x85)](getTimeStamp), error), 'Protocol\x20Error\x20(EPROTO):\x20' + _0x3b181f[_0x552333(0xd8)]));
                continue;
            }
            if (_0x18ce68['CQbRR'](_0x3b181f['code'], _0x18ce68[_0x552333(0x148)]) || _0x18ce68[_0x552333(0xd6)](_0x3b181f[_0x552333(0x9c)], _0x18ce68[_0x552333(0x168)])) {
                console['log'](_0x18ce68[_0x552333(0x1a7)](_0x18ce68[_0x552333(0x1a7)](_0x18ce68[_0x552333(0x105)](getTimeStamp), error), 'Request\x20Timed\x20Out\x20(ECONNABORTED\x20or\x20ETIMEDOUT):\x20' + _0x3b181f[_0x552333(0xd8)])), await _0x18ce68[_0x552333(0x1ac)](delay, 0xd93 * 0x1 + -0x1e3a + 0x242f * 0x1);
                continue;
            }
            if (_0x3b181f[_0x552333(0x18d)]) {
                const _0x365316 = _0x3b181f[_0x552333(0x18d)];
                if (_0x3b181f[_0x552333(0x18d)][_0x552333(0x17f)] === 0x2029 * -0x1 + -0x4ec + -0x15 * -0x1dc) {
                    console[_0x552333(0x190)](_0x18ce68['fxkmS'](_0x18ce68[_0x552333(0x8c)](_0x18ce68[_0x552333(0x149)](getTimeStamp), error), _0x552333(0x15d))), await delay(0xb79 + -0xfb0 * -0x1 + -0x7a1);
                    continue;
                }
                if (_0x365316[_0x552333(0xab)] && _0x365316[_0x552333(0xab)]['error']) {
                    const _0x15ddfe = _0x365316[_0x552333(0xab)][_0x552333(0x176)];
                    if (_0x18ce68['HzTEe'](_0x15ddfe[_0x552333(0x9c)], -0xd8d * -0x1 + -0x2596 + -0xc05 * -0x2)) {
                        console['log'](_0x18ce68[_0x552333(0xae)](_0x18ce68[_0x552333(0x86)](_0x18ce68[_0x552333(0x131)](getTimeStamp), error), _0x552333(0xc0)));
                        continue;
                    } else
                        console[_0x552333(0x190)](_0x15ddfe);
                } else
                    console[_0x552333(0x190)](_0x365316[_0x552333(0xab)]);
            } else
                console[_0x552333(0x190)](_0x18ce68[_0x552333(0x7d)](getTimeStamp() + error, _0x3b181f[_0x552333(0xd8)]));
            try {
                console[_0x552333(0x190)](_0x18ce68[_0x552333(0x186)](_0x18ce68['fxkmS'](getTimeStamp(), info), _0x552333(0xe7) + total)), _0x556273[_0x552333(0x1e0)](sharelogf, _0x18ce68[_0x552333(0x192)](getTime) + '\x20' + _0x394486 + '\x20>\x20' + _0xf86467['stringify'](_0x3b181f['response'] ? _0x3b181f[_0x552333(0x18d)]['data'] : _0x3b181f[_0x552333(0xd8)], null, 0xec0 + 0x1946 + -0x2804) + '\x0a', {
                    'encoding': _0x552333(0xde),
                    'flag': 'a'
                });
            } catch (_0x21b1d0) {
                console[_0x552333(0x190)](_0x18ce68['gEeSR'](_0x18ce68[_0x552333(0x73)](_0x18ce68[_0x552333(0x170)](getTimeStamp), info), _0x21b1d0[_0x552333(0xd8)]));
            }
            _0x18ce68[_0x552333(0xc6)](exit);
        }
    }
}
async function startShare(_0x1d9442, _0x22b63d, _0x433632, _0x4f436f, _0x200315) {
    const _0x629af8 = _0x126d41, _0x23a8d8 = {
            'TbFHA': function (_0x45dc67, _0x53a78d) {
                return _0x45dc67 <= _0x53a78d;
            },
            'CtGWZ': function (_0x52e3b2, _0x3b8c5f, _0x5ebab2, _0x4d3711, _0x301683, _0x3cf7a0) {
                return _0x52e3b2(_0x3b8c5f, _0x5ebab2, _0x4d3711, _0x301683, _0x3cf7a0);
            },
            'RzFVL': function (_0x225a21, _0x1543c2) {
                return _0x225a21 + _0x1543c2;
            },
            'cBaae': function (_0x364473, _0x22c17b) {
                return _0x364473 + _0x22c17b;
            },
            'fZoeY': function (_0xda2369) {
                return _0xda2369();
            },
            'jbCgo': function (_0x534f06, _0x357a83) {
                return _0x534f06 + _0x357a83;
            },
            'AtAJs': function (_0xa869c1, _0x4b5f9a) {
                return _0xa869c1 + _0x4b5f9a;
            },
            'DjCRL': function (_0x2a9518) {
                return _0x2a9518();
            },
            'iYjEq': function (_0x537b9c) {
                return _0x537b9c();
            }
        };
    let _0x22a23a = [];
    for (let _0x390ead = 0x7 * 0x2a7 + -0x2547 * -0x1 + -0x3 * 0x129d; _0x23a8d8['TbFHA'](_0x390ead, _0x4f436f); _0x390ead++) {
        _0x22a23a[_0x629af8(0x96)](_0x23a8d8[_0x629af8(0x116)](sendReq, _0x1d9442, _0x22b63d, _0x433632, _0x390ead, _0x200315));
    }
    await Promise[_0x629af8(0x17c)](_0x22a23a), console[_0x629af8(0x190)](_0x23a8d8[_0x629af8(0x1da)](_0x23a8d8['cBaae'](_0x23a8d8[_0x629af8(0x139)](getTimeStamp), info), _0x629af8(0xd7))), console['log'](_0x23a8d8['jbCgo'](_0x23a8d8['AtAJs'](_0x23a8d8['DjCRL'](getTimeStamp), info), _0x629af8(0xe7) + total)), await cont(), await _0x23a8d8[_0x629af8(0x78)](main);
}
async function removeToken() {
    const _0x1782ff = _0x126d41, _0x19c0f5 = {
            'BnUiS': function (_0x9b7763) {
                return _0x9b7763();
            },
            'ErOXu': function (_0x35cc47, _0x3b03e8) {
                return _0x35cc47(_0x3b03e8);
            },
            'rDIHb': function (_0x62fc1f, _0x4461e5) {
                return _0x62fc1f <= _0x4461e5;
            },
            'WZhZg': function (_0x216633, _0x3a3ffc) {
                return _0x216633 + _0x3a3ffc;
            },
            'kjkbF': function (_0x48cfa5) {
                return _0x48cfa5();
            },
            'RQPAR': function (_0x350066) {
                return _0x350066();
            },
            'ptKbb': function (_0x27f896, _0x4c376f) {
                return _0x27f896 === _0x4c376f;
            },
            'qwpww': function (_0x102284) {
                return _0x102284();
            },
            'OaIQn': function (_0x33a2de, _0x5dc0c3) {
                return _0x33a2de - _0x5dc0c3;
            },
            'bjUoa': function (_0x393f4d) {
                return _0x393f4d();
            },
            'NUTdF': function (_0x2a97e9, _0x25edbe) {
                return _0x2a97e9 + _0x25edbe;
            },
            'yjqcZ': function (_0x521554, _0x18b901) {
                return _0x521554 + _0x18b901;
            },
            'ekdbD': function (_0x4e3b64) {
                return _0x4e3b64();
            },
            'pntBo': function (_0x4bb8de, _0x532e2a) {
                return _0x4bb8de + _0x532e2a;
            },
            'ydOgQ': function (_0x3c7a18) {
                return _0x3c7a18();
            }
        };
    _0x19c0f5[_0x1782ff(0x99)](setClear);
    try {
        await _0x19c0f5[_0x1782ff(0x175)](animate, banner);
        if (_0x19c0f5[_0x1782ff(0xb1)](tokens[_0x1782ff(0x17e)], -0x52 * -0x4a + -0x45f * -0x5 + 0x6b * -0x6d)) {
            console[_0x1782ff(0x190)](_0x19c0f5[_0x1782ff(0xac)](_0x19c0f5[_0x1782ff(0xac)](getTimeStamp(), info), 'No\x20Tokens\x20Found.')), await _0x19c0f5[_0x1782ff(0x17a)](cont), await _0x19c0f5['RQPAR'](tokenManagement);
            return;
        }
        _0x19c0f5[_0x1782ff(0x17a)](logToken), console[_0x1782ff(0x190)]();
        const {tokenIndex: _0x273ada} = await inquirer[_0x1782ff(0x1b4)](prompts[_0x1782ff(0x161)]);
        if (_0x19c0f5[_0x1782ff(0xa6)](_0x273ada[_0x1782ff(0x18a)](), 'b')) {
            await _0x19c0f5[_0x1782ff(0x1ab)](tokenManagement);
            return;
        }
        _0x19c0f5[_0x1782ff(0xa6)](_0x273ada[_0x1782ff(0x18a)](), 'a') ? (tokenParsed[_0x1782ff(0x1a8)] = [], tokenParsed[_0x1782ff(0x1be)] = [], _0x19c0f5[_0x1782ff(0x99)](updateTokenFile), console[_0x1782ff(0x190)](_0x19c0f5[_0x1782ff(0xac)](_0x19c0f5[_0x1782ff(0xac)](getTimeStamp(), info), 'All\x20Tokens\x20Removed\x20Successfully'))) : (tokenParsed[_0x1782ff(0x1a8)][_0x1782ff(0x83)](_0x19c0f5['OaIQn'](_0x273ada, -0x429 + -0x44d * -0x2 + -0x470), 0x1c * -0xef + -0x25e3 * -0x1 + 0x12 * -0xa7), tokenParsed[_0x1782ff(0x1be)][_0x1782ff(0x83)](_0x19c0f5[_0x1782ff(0x1d6)](_0x273ada, 0x1 * 0x23ae + -0x1a31 + 0x1 * -0x97c), 0x5 * -0x49e + 0xeb0 + -0x2cd * -0x3), _0x19c0f5[_0x1782ff(0xd0)](updateTokenFile), console[_0x1782ff(0x190)](_0x19c0f5['NUTdF'](_0x19c0f5[_0x1782ff(0x113)](_0x19c0f5['qwpww'](getTimeStamp), info), '(' + _0x273ada + _0x1782ff(0x10f)))), await cont(), await _0x19c0f5['ekdbD'](tokenManagement);
    } catch (_0x6e1197) {
        console['log'](_0x19c0f5[_0x1782ff(0xf7)](_0x19c0f5[_0x1782ff(0xda)](_0x19c0f5[_0x1782ff(0xa2)](getTimeStamp), error), '(removeToken)\x20Function\x20Error:\x20' + _0x6e1197['message'])), _0x19c0f5['RQPAR'](exit);
    }
}
function addToken(_0x589ed3, _0x1b777b) {
    const _0x46c8a9 = _0x126d41, _0x1210eb = {
            'cEZxz': function (_0x3c91b5) {
                return _0x3c91b5();
            },
            'zEEeR': function (_0x579914, _0x348089) {
                return _0x579914 + _0x348089;
            },
            'SWLOK': function (_0x46ad58, _0x243f84) {
                return _0x46ad58 + _0x243f84;
            }
        };
    try {
        tokenParsed[_0x46c8a9(0x1a8)][_0x46c8a9(0x96)](_0x589ed3), tokenParsed[_0x46c8a9(0x1be)]['push'](_0x1b777b), _0x1210eb[_0x46c8a9(0x114)](updateTokenFile);
    } catch (_0x514e43) {
        console['log'](_0x1210eb['zEEeR'](_0x1210eb['SWLOK'](getTimeStamp(), error), _0x46c8a9(0x1b7) + _0x514e43[_0x46c8a9(0xd8)])), exit();
    }
}
function updateTokenFile() {
    const _0x3128d8 = _0x126d41, _0x5a0409 = {
            'lamgJ': 'utf8',
            'UXXdw': function (_0x38ebd8, _0x2840ad) {
                return _0x38ebd8 + _0x2840ad;
            },
            'nniAA': function (_0x51d30f) {
                return _0x51d30f();
            }
        };
    try {
        _0x556273[_0x3128d8(0x1e0)](tokenfile, JSON[_0x3128d8(0xff)](tokenParsed, null, 0x1d1c + -0x2f * -0xb5 + -0x9 * 0x6ed), _0x5a0409[_0x3128d8(0xbd)]), updateToken();
    } catch (_0x2dd24d) {
        console[_0x3128d8(0x190)](_0x5a0409[_0x3128d8(0x10d)](_0x5a0409[_0x3128d8(0x10d)](_0x5a0409[_0x3128d8(0x10b)](getTimeStamp), error), _0x3128d8(0x1df) + _0x2dd24d[_0x3128d8(0xd8)])), _0x5a0409[_0x3128d8(0x10b)](exit);
    }
}
function logToken() {
    const _0x309aa9 = _0x126d41, _0x133c61 = {
            'dqatO': function (_0x31e3d3, _0x4ab8ec) {
                return _0x31e3d3 <= _0x4ab8ec;
            },
            'bSLnJ': function (_0x2c07ff, _0x5ab1a6) {
                return _0x2c07ff - _0x5ab1a6;
            }
        };
    for (let _0x39cd8f = -0x90a + 0x26 * -0x29 + 0xf21; _0x133c61[_0x309aa9(0x101)](_0x39cd8f, tokens[_0x309aa9(0x17e)]); _0x39cd8f++) {
        const _0x2fd49c = emails[_0x133c61[_0x309aa9(0x180)](_0x39cd8f, -0x5 * 0x3ec + 0x6c * 0x8 + 0x1 * 0x103d)], _0x4beac1 = tokens[_0x133c61[_0x309aa9(0x180)](_0x39cd8f, 0x1b71 + 0x157 * -0x11 + -0x4a9)][_0x309aa9(0x16b)](undefined, -0x16ff + 0x1dea + -0x6da);
        console[_0x309aa9(0x190)](yellow + '(' + _0x39cd8f + ')\x20' + white + '-\x20' + blue + _0x2fd49c + '\x20' + white + '>\x20' + green + _0x4beac1 + _0x309aa9(0xcd));
    }
}
async function main() {
    const _0x1be46f = _0x126d41, _0x3ce678 = {
            'WzZZj': function (_0x1e0e02) {
                return _0x1e0e02();
            },
            'jMskW': function (_0x238e04, _0x2f93e5) {
                return _0x238e04(_0x2f93e5);
            },
            'RatUk': 'main',
            'BLRwc': function (_0xb3bd1, _0x41e6bf) {
                return _0xb3bd1 === _0x41e6bf;
            },
            'EEQqy': function (_0x37a6e2) {
                return _0x37a6e2();
            },
            'lVPXx': function (_0x2caf1f) {
                return _0x2caf1f();
            },
            'tSQhq': function (_0x170715) {
                return _0x170715();
            },
            'FeCVc': function (_0x29b826) {
                return _0x29b826();
            }
        };
    _0x3ce678['WzZZj'](setClear), await _0x3ce678[_0x1be46f(0x182)](animate, banner), _0x3ce678['jMskW'](logChoices, _0x3ce678[_0x1be46f(0xf0)]);
    const _0x590fdd = await _0x3ce678[_0x1be46f(0x189)](getCmd);
    if (_0x3ce678[_0x1be46f(0x112)](_0x590fdd, 0x1c0e + -0xd * -0x92 + -0x2377))
        spamShare();
    else {
        if (_0x590fdd === -0x15 * 0x7a + -0x142a + -0xf17 * -0x2)
            _0x3ce678[_0x1be46f(0x189)](setClear), _0x3ce678[_0x1be46f(0x189)](logToken), await _0x3ce678[_0x1be46f(0xcb)](cont), await _0x3ce678['lVPXx'](main);
        else {
            if (_0x3ce678[_0x1be46f(0x112)](_0x590fdd, -0x14da + -0x9 * 0x277 + 0x2b0c))
                _0x3ce678[_0x1be46f(0xcb)](tokenManagement);
            else {
                if (_0x590fdd === 0x223d + -0x6de + 0x1b5b * -0x1)
                    _0x3ce678[_0x1be46f(0xf3)](feedback);
                else
                    _0x3ce678['BLRwc'](_0x590fdd, 0x1977 + -0x145b + -0x517) && _0x3ce678[_0x1be46f(0xaf)](exit);
            }
        }
    }
}
main();