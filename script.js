document.addEventListener('DOMContentLoaded', () => {
    const originalContent = `//不要
UserRes	#FFFFFF
SysRes	#FFFFFF
DlcRes	#FFFFFF
SelectedUserRes	#FFFFFF
SelectedSysRes	#FFFFFF
SelectedDlcRes	#FFFFFF
//位置マーカーに対する色
BattleEnemyMark	#EF0031
BattlePlayerMark	#285DFA

//ボタン等の文字/背景色
//文字色
//ForeText	#E6E6E6
ForeText	#D8D8D8
//マウスが載った時の文字色
HoverText	#FBFBFB
//選択される文字（ボタン）で選択されてない時の文字色 とトップメニューの右側のボタンが非選択時。適用ボタンの非選択時
DisableText	#999999
//文字の背景色
//Back	#000000
//Back	#1b1c1d
Back	#292829

//グリッドビュー関連　カラムの境界線
PropertyGridCellBorderColor	#0e0e0e
//PropertyGridCellBorderColor	#6a6a6a

//グループ行オレンジ見出しの背景色
BackPropertyGroup	#3A3A3A
//グループ行オレンジ見出しの文字色
//ForePropertyGroup	#E6E6E6
ForePropertyGroup	#E0E0E0
//通常行の背景色
BackPropertyBase	#1D1C1D
//通常行の文字色
ForePropertyText	#E6E6E6
//選択アイテムの背景色（ツリービューも反応している）
//BackPropertySelection	#505050 ツリーで選択状態の項目のバックカラー　　　
BackPropertySelection	#444344
//選択アイテムの文字色（ツリービューも反応している）
ForePropertySelection	#FEFCF2
//フォーカスが無いグリッドビューの選択アイテムの背景色（ツリービューは反応していない）
BackPropertyHideSelection	#323132
// フォーカスが無いグリッドビューの選択アイテムの文字色（ツリービューは反応していない）★★現在反応していない。これは修正？　★★
ForePropertyHideSelection	#bEbCb2
//ツリービューのドロップ位置の線の色
DropTargetLine	#FB0000

//マスターメニュー関連　マスターはサブ要素なので文字色はやや暗めに、地の色は明るめに。
//BackMasterMenuBase	#323132
BackMasterMenuBase	#282a2c
ForeMasterMenuText	#a2a9b0
//マスターメニューの選択カーソル？
ForeMasterMenuSelection	#0052A6


//Bakinフォームのテロップ部　
//SBEditorFormStatusBackColor	#201f20
SBEditorFormStatusBackColor	#2d2c2d
MultiplyButton	#807F80
//Bakinフォームのキャプション部の背景色(上部）
SBEditorFormCaptionBackColor	#201f20
//SBEditorFormCaptionBackColor	#2d2c2d
//Bakinフォームのキャプション部の文字色
SBEditorFormCaptionForeColor	#E6E6E6

//イベントエディターパネルモード背景色（通常）
FlowchartNormalBackColor	#101118
//イベントエディターパネルモード背景色（コモンほか）
FlowchartCommonBackColor	#101811

//イベントエディタ・パネル表示のパネル自体の背景色
//EventCommandPanelColor	#323132
EventCommandPanelColor	#363536
//イベントエディタ・パネル選択時（編集時）の枠の色ラベル
PanelSelectFrameColor	#0052A6

//イベントエディタ・イベント開始条件パネルとイベント終了パネル自体の背景色
EventStartEndPanelColor	#363536

//イベントエディタ・分岐のはいいいえのテキスト色
EventDescriptionTextColor	#D0D0D0

//道具パレットのボタン画像に対するグレースケール化用/ダイアログ下部にある「前」「次」「保存」ボタンについてアイコン/データベースのカスタムイベントボタンのアイコン/TOPMENU内のアイコン付きボタン
//MultiplyGrayScaleImage	#dddddd
MultiplyGrayScaleImage	#E3E3E3

//非選択タブの背景色
OnButton	#202020
//選択タブの背景色
PressedButton	#505050
//非選択タブのボーダー線色
BorderButton	#404040
//レベル曲線等のグラフの背景色（コメントアウトして不適用）★★これはなぜ？
BackGraphArea	#404040
//スプリッター色（エディタのドッキングライブラリの境界線は未対応）★★
SplitterColor	#404040
//テロップ色（下部にOK/キャンセル/適用等があるダイアログのテロップには不適用）★★
TelopColor	#D8D8D8

// Appendix
//テキストボックスの背景（テキスト入力ができる場所のボックスの背景色）
SBTextBoxBackColor	#1D1C1D



//グリッドビューの余白部分の色 
PropertyBackColor	#100f10
//キャプションバーグレー見出しの背景色
SBCaptionBarBackColor #3c3b3c
//SBCaptionBarBackColor #5E5E5E
//キャプションバーグレー見出しの文字色
SBCaptionBarForeColor #C8C8C8
//キャプションバーグレー見出しの検索ボックスの背景色
SBCaptionBarSeachBoxBackColor #504f50
//キャプションバーグレー見出しの検索ボックスの文字色
SBCaptionBarSeachBoxForeColor #E6E6E6

PropertyBackColor	#302f30

//グリッドビューの上のカラムヘッダの背景色　データベースのステータス設定欄のようにグリッドビューの上の白い項目見出しの行。
PropertyColumnHeaderBackColor	#4B4a4B

//リストビューの背景色（ローカライズツールのようなダイアログ）
ListViewBackColor	#302f30
//リストビューのカラムヘッダの背景色
ListViewColumnHeaderBackColor	#403f40
//リストビューの偶数行の背景色　（特殊書式挿入のように行ごとに色が変わるダイアログ） 
//ListViewEvenRowBackColor	#202820
ListViewEvenRowBackColor	#20201f
//リストビューの奇数行の背景色　
ListViewOddRowBackColor	#202328

//ツールストリップの背景色（配置リスト等の上にあるボタン等が並ぶバー）
ToolStripBackColor	#302f30

//グリッドビューの読み取り専用行の色指定 Backが背景、Foreが文字色
PropertyReadOnlyBackColor	#404040
//PropertyReadOnlyForeColor	#A0A0A0
PropertyReadOnlyForeColor	#999999

//ダイアログのタイトル::::型の文字　通常テキストよりは暗くする
CaptionImageText	#E0E0E0
//キャプション背景(:::)の色指定追加
CaptionNameBGColor	#808080

//マップエディター上部などドロップダウンメニューにチェックが付いた場合の背景色用ラベル
MenuCheckBackColor	#3d3c3d

//透明部分市松画像と掛け算する色のラベルを用意しました。　RGBが全て同じ値（グレー系）を設定してください。白で変化なしになります。
TransparentTileAdjustColor	#2d2d2d`;

    const lines = originalContent.split('\n');
    const data = [];

    lines.forEach(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith('//') || trimmed === '') {
            data.push({ type: 'comment', text: line });
        } else {
            const parts = line.split('#');
            if (parts.length >= 2) {
                const prefixRaw = parts[0];
                const name = prefixRaw.trim();
                const separator = prefixRaw.slice(name.length);
                const colorPart = parts.slice(1).join('#').trim();
                const isUpperCase = colorPart === colorPart.toUpperCase();
                data.push({ type: 'entry', name, separator, color: colorPart, isUpperCase: isUpperCase });
            } else {
                data.push({ type: 'comment', text: line });
            }
        }
    });

    // Store original colors
    data.forEach(item => {
        if (item.type === 'entry') {
            item.originalColor = item.color;
        }
    });

    const nameToItem = {};
    data.forEach(item => {
        if (item.type === 'entry') {
            nameToItem[item.name] = item;
        }
    });

    const groups = [
        { label: 'White Resources', baseName: 'UserRes', associates: ['SysRes', 'DlcRes', 'SelectedUserRes', 'SelectedSysRes', 'SelectedDlcRes'] },
        { label: 'Light Text', baseName: 'ForeText', associates: ['TelopColor', 'EventDescriptionTextColor', 'ForePropertyText', 'SBEditorFormCaptionForeColor', 'SBCaptionBarSeachBoxForeColor', 'CaptionImageText', 'ForePropertyGroup', 'SBCaptionBarForeColor'] },
        { label: 'Dark Background', baseName: 'Back', associates: ['BackMasterMenuBase', 'SBEditorFormStatusBackColor', 'SBEditorFormCaptionBackColor', 'SBTextBoxBackColor', 'ListViewBackColor', 'ToolStripBackColor', 'ListViewEvenRowBackColor', 'ListViewOddRowBackColor', 'OnButton', 'EventCommandPanelColor', 'EventStartEndPanelColor', 'BackPropertyBase', 'SBCaptionBarBackColor', 'MenuCheckBackColor', 'TransparentTileAdjustColor', 'PropertyBackColor', 'BackPropertyHideSelection'] },
        { label: 'Medium Background', baseName: 'PressedButton', associates: ['PropertyColumnHeaderBackColor', 'ListViewColumnHeaderBackColor', 'BackGraphArea', 'SplitterColor', 'BorderButton', 'PropertyReadOnlyBackColor', 'SBCaptionBarSeachBoxBackColor', 'BackPropertySelection', 'BackPropertyGroup'] },
        { label: 'Very Dark Background', baseName: 'FlowchartNormalBackColor', associates: ['FlowchartCommonBackColor', 'PropertyGridCellBorderColor'] },
        { label: 'Disabled Text', baseName: 'DisableText', associates: ['PropertyReadOnlyForeColor'] },
        { label: 'Accent Blue', baseName: 'PanelSelectFrameColor', associates: ['ForeMasterMenuSelection', 'BattlePlayerMark'] },
        { label: 'Accent Red', baseName: 'DropTargetLine', associates: ['BattleEnemyMark'] },
        { label: 'Other Light', baseName: 'HoverText', associates: ['MultiplyGrayScaleImage', 'ForePropertySelection'] },
        { label: 'Muted Text', baseName: 'ForeMasterMenuText', associates: ['ForePropertyHideSelection'] },
        { label: 'Medium Gray', baseName: 'CaptionNameBGColor', associates: ['MultiplyButton'] }
    ];

    // Compute offsets for groups
    groups.forEach(group => {
        group.offsets = {};
        const baseOriginalRgb = hexToRgb(nameToItem[group.baseName].originalColor);
        group.associates.forEach(assoc => {
            const assocOriginalRgb = hexToRgb(nameToItem[assoc].originalColor);
            group.offsets[assoc] = {
                r: assocOriginalRgb.r - baseOriginalRgb.r,
                g: assocOriginalRgb.g - baseOriginalRgb.g,
                b: assocOriginalRgb.b - baseOriginalRgb.b
            };
        });
    });

    // Preset colors
    const presetColors = {
        'ms_office_dark': {
            'UserRes': 'FFFFFF',
            'ForeText': 'CCCCCC',
            'Back': '1E1E1E',
            'PressedButton': '2D2D2D',
            'FlowchartNormalBackColor': '121212',
            'DisableText': '808080',
            'PanelSelectFrameColor': '0078D4',
            'DropTargetLine': 'D13438',
            'HoverText': 'FFFFFF',
            'ForeMasterMenuText': 'A0A0A0',
            'CaptionNameBGColor': '404040'
        },
        'ms_office_light': {
            'UserRes': '000000',
            'ForeText': '333333',
            'Back': 'FFFFFF',
            'PressedButton': 'E5E5E5',
            'FlowchartNormalBackColor': 'F3F3F3',
            'DisableText': '767676',
            'PanelSelectFrameColor': '0078D4',
            'DropTargetLine': 'A31515',
            'HoverText': '000000',
            'ForeMasterMenuText': '666666',
            'CaptionNameBGColor': 'D0D0D0'
        },
        'vscode_dark': {
            'UserRes': 'FFFFFF',
            'ForeText': 'CCCCCC',
            'Back': '252526',
            'PressedButton': '3E3E42',
            'FlowchartNormalBackColor': '1E1E1E',
            'DisableText': '858585',
            'PanelSelectFrameColor': '007ACC',
            'DropTargetLine': 'F44747',
            'HoverText': 'DCDCDC',
            'ForeMasterMenuText': '858585',
            'CaptionNameBGColor': '2D2D30'
        },
        'vscode_light': {
            'UserRes': '000000',
            'ForeText': '333333',
            'Back': 'FFFFFF',
            'PressedButton': 'EEEEEE',
            'FlowchartNormalBackColor': 'F0F0F0',
            'DisableText': '767676',
            'PanelSelectFrameColor': '007ACC',
            'DropTargetLine': 'A31515',
            'HoverText': '000000',
            'ForeMasterMenuText': '767676',
            'CaptionNameBGColor': 'DDDDDD'
        },
        'solarized_dark': {
            'UserRes': '93A1A1',
            'ForeText': '839496',
            'Back': '073642',
            'PressedButton': '002B36',
            'FlowchartNormalBackColor': '002B36',
            'DisableText': '586E75',
            'PanelSelectFrameColor': '268BD2',
            'DropTargetLine': 'DC322F',
            'HoverText': '93A1A1',
            'ForeMasterMenuText': '586E75',
            'CaptionNameBGColor': '657B83'
        },
        'solarized_light': {
            'UserRes': '073642',
            'ForeText': '657B83',
            'Back': 'EEE8D5',
            'PressedButton': 'FDF6E3',
            'FlowchartNormalBackColor': 'FDF6E3',
            'DisableText': '93A1A1',
            'PanelSelectFrameColor': '268BD2',
            'DropTargetLine': 'DC322F',
            'HoverText': '002B36',
            'ForeMasterMenuText': '93A1A1',
            'CaptionNameBGColor': '839496'
        },
        'dracula': {
            'UserRes': 'F8F8F2',
            'ForeText': 'F8F8F2',
            'Back': '282A36',
            'PressedButton': '44475A',
            'FlowchartNormalBackColor': '21222C',
            'DisableText': '6272A4',
            'PanelSelectFrameColor': 'BD93F9',
            'DropTargetLine': 'FF5555',
            'HoverText': 'F1FA8C',
            'ForeMasterMenuText': '6272A4',
            'CaptionNameBGColor': '6272A4'
        },
        'nord': {
            'UserRes': 'ECEFF4',
            'ForeText': 'D8DEE9',
            'Back': '3B4252',
            'PressedButton': '434C5E',
            'FlowchartNormalBackColor': '2E3440',
            'DisableText': '4C566A',
            'PanelSelectFrameColor': '5E81AC',
            'DropTargetLine': 'BF616A',
            'HoverText': 'E5E9F0',
            'ForeMasterMenuText': '4C566A',
            'CaptionNameBGColor': '434C5E'
        },
        'gruvbox_dark': {
            'UserRes': 'EBDbb2',
            'ForeText': 'EBDbb2',
            'Back': '3C3836',
            'PressedButton': '504945',
            'FlowchartNormalBackColor': '282828',
            'DisableText': '928374',
            'PanelSelectFrameColor': '458588',
            'DropTargetLine': 'CC241D',
            'HoverText': 'FBF1C7',
            'ForeMasterMenuText': '928374',
            'CaptionNameBGColor': '7C6F64'
        },
        'monokai': {
            'UserRes': 'D6D6D6',
            'ForeText': 'D6D6D6',
            'Back': '2D2D2D',
            'PressedButton': '49483E',
            'FlowchartNormalBackColor': '272822',
            'DisableText': '797979',
            'PanelSelectFrameColor': '66D9EF',
            'DropTargetLine': 'F92672',
            'HoverText': 'FFFFFF',
            'ForeMasterMenuText': '797979',
            'CaptionNameBGColor': '75715E'
        },
        'one_dark': {
            'UserRes': 'ABB2BF',
            'ForeText': 'ABB2BF',
            'Back': '282C34',
            'PressedButton': '3C4048',
            'FlowchartNormalBackColor': '21252B',
            'DisableText': '5C6370',
            'PanelSelectFrameColor': '61AFEF',
            'DropTargetLine': 'E06C75',
            'HoverText': 'C8CCD4',
            'ForeMasterMenuText': '5C6370',
            'CaptionNameBGColor': '4B5263'
        },
        'windows_95': {
            'UserRes': '000000',
            'ForeText': '000000',
            'Back': 'C0C0C0',
            'PressedButton': '808080',
            'FlowchartNormalBackColor': '808080',
            'DisableText': '808080',
            'PanelSelectFrameColor': '000080',
            'DropTargetLine': '800000',
            'HoverText': 'FFFFFF',
            'ForeMasterMenuText': '000000',
            'CaptionNameBGColor': '008080'
        },
        'cyberpunk': {
            'UserRes': '00FFFF',
            'ForeText': '00FF00',
            'Back': '0A0A0A',
            'PressedButton': '1F1F1F',
            'FlowchartNormalBackColor': '050505',
            'DisableText': '808080',
            'PanelSelectFrameColor': 'FF00FF',
            'DropTargetLine': 'FFFF00',
            'HoverText': 'FFFFFF',
            'ForeMasterMenuText': '00FFFF',
            'CaptionNameBGColor': '404040'
        }
    };

    // Helper functions
    function hexToRgb(hex) {
        return {
            r: parseInt(hex.substr(0, 2), 16),
            g: parseInt(hex.substr(2, 2), 16),
            b: parseInt(hex.substr(4, 2), 16)
        };
    }

    function rgbToHex(rgb, upperCase) {
        let hex = ((rgb.r << 16) | (rgb.g << 8) | rgb.b).toString(16).padStart(6, '0');
        return upperCase ? hex.toUpperCase() : hex.toLowerCase();
    }

    function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }

    function invertHex(hex, isUpperCase) {
        const rgb = hexToRgb(hex);
        const invertedRgb = {
            r: 255 - rgb.r,
            g: 255 - rgb.g,
            b: 255 - rgb.b
        };
        return rgbToHex(invertedRgb, isUpperCase);
    }

    function updateEntryUI(item) {
        item.entrySwatch.style.backgroundColor = '#' + item.color;
        item.entryHex.textContent = '#' + item.color;
    }

    function setGroupColor(group, newHex) {
        const baseItem = nameToItem[group.baseName];
        baseItem.color = newHex;
        updateEntryUI(baseItem);

        const newRgb = hexToRgb(newHex);
        group.associates.forEach(assoc => {
            const off = group.offsets[assoc];
            const assocRgb = {
                r: clamp(newRgb.r + off.r, 0, 255),
                g: clamp(newRgb.g + off.g, 0, 255),
                b: clamp(newRgb.b + off.b, 0, 255)
            };
            const assocHex = rgbToHex(assocRgb, nameToItem[assoc].isUpperCase);
            nameToItem[assoc].color = assocHex;
            updateEntryUI(nameToItem[assoc]);
        });

        group.batchSwatch.style.backgroundColor = '#' + newHex;
        group.batchHex.textContent = '#' + newHex;
    }

    // Create batch UI
    const batchesDiv = document.getElementById('batches');
    groups.forEach(group => {
        const div = document.createElement('div');
        div.className = 'batch-line';

        const label = document.createElement('span');
        label.className = 'batch-label';
        label.textContent = group.label + ':';

        const swatch = document.createElement('button');
        swatch.className = 'swatch';
        swatch.style.backgroundColor = '#' + nameToItem[group.baseName].color;

        const hex = document.createElement('span');
        hex.className = 'hex';
        hex.textContent = '#' + nameToItem[group.baseName].color;

        const input = document.createElement('input');
        input.type = 'color';
        input.value = '#' + nameToItem[group.baseName].color;
        input.style.display = 'none';

        input.addEventListener('input', (e) => {
            let newColor = e.target.value.substring(1);
            newColor = nameToItem[group.baseName].isUpperCase ? newColor.toUpperCase() : newColor.toLowerCase();
            setGroupColor(group, newColor);
        });

        swatch.addEventListener('click', () => input.click());

        div.appendChild(label);
        div.appendChild(swatch);
        div.appendChild(hex);
        div.appendChild(input);

        group.batchSwatch = swatch;
        group.batchHex = hex;

        batchesDiv.appendChild(div);
    });

    // Preset handler
    const presetSelect = document.getElementById('presetSelect');
    presetSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val === 'original') {
            data.forEach(item => {
                if (item.type === 'entry') {
                    item.color = item.originalColor;
                    if (item.entrySwatch) {
                        updateEntryUI(item);
                    }
                }
            });
            groups.forEach(group => {
                const col = nameToItem[group.baseName].color;
                group.batchSwatch.style.backgroundColor = '#' + col;
                group.batchHex.textContent = '#' + col;
            });
        } else if (val === 'light') {
            groups.forEach(group => {
                const baseItem = nameToItem[group.baseName];
                const orig = baseItem.originalColor;
                const invHex = invertHex(orig, baseItem.isUpperCase);
                setGroupColor(group, invHex);
            });
        } else if (presetColors[val]) {
            groups.forEach(group => {
                let newColor = presetColors[val][group.baseName];
                const isUpper = nameToItem[group.baseName].isUpperCase;
                newColor = isUpper ? newColor.toUpperCase() : newColor.toLowerCase();
                setGroupColor(group, newColor);
            });
        } else if (val === 'random') {
            groups.forEach(group => {
                const baseItem = nameToItem[group.baseName];
                let randomColor = Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');
                randomColor = baseItem.isUpperCase ? randomColor.toUpperCase() : randomColor.toLowerCase();
                setGroupColor(group, randomColor);
            });
        }
        e.target.value = ''; // Reset select
    });

    // Map of color entry names to image paths (unchanged from previous)
    const imageMap = {
        'UserRes': 'images/UserRes.png',
        'SysRes': 'images/SysRes.png',
        'DlcRes': 'images/DlcRes.png',
        'SelectedUserRes': 'images/SelectedUserRes.png',
        'SelectedSysRes': 'images/SelectedSysRes.png',
        'SelectedDlcRes': 'images/SelectedDlcRes.png',
        'BattleEnemyMark': 'images/BattleEnemyMark.png',
        'BattlePlayerMark': 'images/BattlePlayerMark.png',
        'ForeText': 'images/ForeText.png',
        'HoverText': 'images/HoverText.png',
        'DisableText': 'images/DisableText.png',
        'Back': 'images/Back.png',
        'PropertyGridCellBorderColor': 'images/PropertyGridCellBorderColor.png',
        'BackPropertyGroup': 'images/BackPropertyGroup.png',
        'ForePropertyGroup': 'images/ForePropertyGroup.png',
        'BackPropertyBase': 'images/BackPropertyBase.png',
        'ForePropertyText': 'images/ForePropertyText.png',
        'BackPropertySelection': 'images/BackPropertySelection.png',
        'ForePropertySelection': 'images/ForePropertySelection.png',
        'BackPropertyHideSelection': 'images/BackPropertyHideSelection.png',
        'ForePropertyHideSelection': 'images/ForePropertyHideSelection.png',
        'DropTargetLine': 'images/DropTargetLine.png',
        'BackMasterMenuBase': 'images/BackMasterMenuBase.png',
        'ForeMasterMenuText': 'images/ForeMasterMenuText.png',
        'ForeMasterMenuSelection': 'images/ForeMasterMenuSelection.png',
        'SBEditorFormStatusBackColor': 'images/SBEditorFormStatusBackColor.png',
        'MultiplyButton': 'images/MultiplyButton.png',
        'SBEditorFormCaptionBackColor': 'images/SBEditorFormCaptionBackColor.png',
        'SBEditorFormCaptionForeColor': 'images/SBEditorFormCaptionForeColor.png',
        'FlowchartNormalBackColor': 'images/FlowchartNormalBackColor.png',
        'FlowchartCommonBackColor': 'images/FlowchartCommonBackColor.png',
        'EventCommandPanelColor': 'images/EventCommandPanelColor.png',
        'PanelSelectFrameColor': 'images/PanelSelectFrameColor.png',
        'EventStartEndPanelColor': 'images/EventStartEndPanelColor.png',
        'EventDescriptionTextColor': 'images/EventDescriptionTextColor.png',
        'MultiplyGrayScaleImage': 'images/MultiplyGrayScaleImage.png',
        'OnButton': 'images/OnButton.png',
        'PressedButton': 'images/PressedButton.png',
        'BorderButton': 'images/BorderButton.png',
        'BackGraphArea': 'images/BackGraphArea.png',
        'SplitterColor': 'images/SplitterColor.png',
        'TelopColor': 'images/TelopColor.png',
        'SBTextBoxBackColor': 'images/SBTextBoxBackColor.png',
        'PropertyBackColor': 'images/PropertyBackColor.png',
        'SBCaptionBarBackColor': 'images/SBCaptionBarBackColor.png',
        'SBCaptionBarForeColor': 'images/SBCaptionBarForeColor.png',
        'SBCaptionBarSeachBoxBackColor': 'images/SBCaptionBarSeachBoxBackColor.png',
        'SBCaptionBarSeachBoxForeColor': 'images/SBCaptionBarSeachBoxForeColor.png',
        'PropertyColumnHeaderBackColor': 'images/PropertyColumnHeaderBackColor.png',
        'ListViewBackColor': 'images/ListViewBackColor.png',
        'ListViewColumnHeaderBackColor': 'images/ListViewColumnHeaderBackColor.png',
        'ListViewEvenRowBackColor': 'images/ListViewEvenRowBackColor.png',
        'ListViewOddRowBackColor': 'images/ListViewOddRowBackColor.png',
        'ToolStripBackColor': 'images/ToolStripBackColor.png',
        'PropertyReadOnlyBackColor': 'images/PropertyReadOnlyBackColor.png',
        'PropertyReadOnlyForeColor': 'images/PropertyReadOnlyForeColor.png',
        'CaptionImageText': 'images/CaptionImageText.png',
        'CaptionNameBGColor': 'images/CaptionNameBGColor.png',
        'MenuCheckBackColor': 'images/MenuCheckBackColor.png',
        'TransparentTileAdjustColor': 'images/TransparentTileAdjustColor.png'
    };

    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');
    let entryCount = 0;

    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'line';
        if (item.type === 'comment') {
            div.classList.add('comment');
            div.textContent = item.text;
        } else {
            div.classList.add('entry');
            const spanPrefix = document.createElement('span');
            spanPrefix.className = 'prefix';
            spanPrefix.textContent = item.name;
            const swatch = document.createElement('button');
            swatch.className = 'swatch';
            swatch.style.backgroundColor = '#' + item.color;
            const spanHex = document.createElement('span');
            spanHex.className = 'hex';
            spanHex.textContent = '#' + item.color;
            const input = document.createElement('input');
            input.type = 'color';
            input.id = 'picker_' + entryCount;
            input.value = '#' + item.color;
            input.style.display = 'none';
            input.addEventListener('input', (e) => {
                const newColor = e.target.value.substring(1);
                item.color = item.isUpperCase ? newColor.toUpperCase() : newColor.toLowerCase();
                spanHex.textContent = '#' + item.color;
                swatch.style.backgroundColor = '#' + item.color;
            });
            swatch.addEventListener('click', () => {
                input.click();
            });
            div.appendChild(spanPrefix);
            div.appendChild(swatch);
            div.appendChild(spanHex);
            div.appendChild(input);
            div.addEventListener('mouseenter', () => {
                const imagePath = imageMap[item.name] || 'https://placehold.co/400x300?text=No+Preview';
                preview.src = imagePath;
            });
            div.addEventListener('mouseleave', () => {
                preview.src = '';
            });
            item.entrySwatch = swatch;
            item.entryHex = spanHex;
            entryCount++;
        }
        editor.appendChild(div);
    });

    document.getElementById('export').addEventListener('click', () => {
        const output = data.map(item => {
            if (item.type === 'comment') {
                return item.text;
            } else {
                return item.name + item.separator + '#' + item.color;
            }
        }).join('\r\n');
        const blob = new Blob([output], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'ToolColorTable.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});