document.addEventListener('DOMContentLoaded', () => {
    // Translation object
    const translations = {
        en: {
            title: 'Bakin Theme Editor',
            toggleLanguage: '日本語',
            description: 'Edit the colors below using the color pickers. Use batch editors for grouped changes. Click on preview elements or use "Export" to download the modified file.',
            presetLabel: 'Select Preset Theme:',
            presetOriginal: 'Original Dark',
            presetLight: 'Light Theme',
            presetMSOfficeDark: 'MS Office Dark',
            presetMSOfficeLight: 'MS Office Light',
            presetIntelliJ: 'IntelliJ IDEA',
            presetSublimeText: 'Sublime Text',
            presetPhotoshop: 'Photoshop',
            presetCanva: 'Canva',
            presetTrello: 'Trello',
            presetFigma: 'Figma',
            presetNotion: 'Notion',
            presetSlack: 'Slack',
            presetAirtable: 'Airtable',
            presetMiro: 'Miro',
            presetAsana: 'Asana',
            presetRandom: 'Random Colors',
            batchEditors: 'Batch Editors',
            export: 'Export File',
            installTitle: 'How to Install',
            installInstructions: 'To use the customized theme, place the downloaded <code>ToolColorTable.txt</code> file into your <code>Program Files (x86)\\Steam\\steamapps\\common\\BAKIN\\lib\\sysresource</code> folder. This overrides the dark theme, so make sure to make a backup of the file first.\nThanks to Stryfek for spotting a bug that caused some colors to not apply properly.'
        },
        ja: {
            title: 'Bakin テーマエディター',
            toggleLanguage: 'English',
            description: '以下のカラーを使って色を編集してください。バッチエディターを使用してグループ編集してください。プレビュー要素をクリックするか、「エクスポート」をクリックして変更したファイルをダウンロードしてください。',
            presetLabel: 'プリセットテーマを選択：',
            presetOriginal: 'オリジナルダーク',
            presetLight: 'ライトテーマ',
            presetMSOfficeDark: 'MS Office ダーク',
            presetMSOfficeLight: 'MS Office ライト',
            presetIntelliJ: 'IntelliJ IDEA',
            presetSublimeText: 'Sublime Text',
            presetPhotoshop: 'Photoshop',
            presetCanva: 'Canva',
            presetTrello: 'Trello',
            presetFigma: 'Figma',
            presetNotion: 'Notion',
            presetSlack: 'Slack',
            presetAirtable: 'Airtable',
            presetMiro: 'Miro',
            presetAsana: 'Asana',
            presetRandom: 'ランダムカラー',
            batchEditors: 'バッチエディター',
            export: 'ファイルをエクスポート',
            installTitle: 'インストール方法',
            installInstructions: 'カスタマイズしたテーマを使用するには、ダウンロードした <code>ToolColorTable.txt</code> ファイルを <code>Program Files (x86)\\Steam\\steamapps\\common\\BAKIN\\lib\\sysresource</code> フォルダーに配置してください。この操作はダークテーマを上書きするため、最初にファイルのバックアップを作成してください。 Stryfek さんが一部の色が正しく適用されないバグを発見してくれたことに感謝します。'
        }
    };


    // Language state
    let currentLanguage = localStorage.getItem('language') || 'en';

    function updateLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (key === 'installInstructions') {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        document.getElementById('languageToggle').textContent = lang === 'en' ? translations.en.toggleLanguage : translations.ja.toggleLanguage;
    }

    // Initialize language
    updateLanguage(currentLanguage);

    // Language toggle handler
    document.getElementById('languageToggle').addEventListener('click', () => {
        updateLanguage(currentLanguage === 'en' ? 'ja' : 'en');
    });

    const originalContent = `version	1
//Core Tool Components/ツール基本要素
BaseTextForeColor	#D8D8D8
BaseTextHoverColor	#FBFBFB
BaseTextDisableColor	#999999
BaseTextBackColor	#292829

//Dialog Related/ダイアログ関連
EditorFormTitleForeColor	#E0E0E0
EditorFormTitleBackColor	#808080
EditorFormCaptionBackColor	#201f20
EditorFormCaptionForeColor	#E6E6E6
EditorFormStatusBarBackColor	#2d2c2d
SplitterColor	#404040
TelopColor	#D8D8D8

//Map Editor Dropdowns & Tabs/マップエディタードロップダウンメニュー&タブ関連
ButtonHoverColor	#202020
ButtonPressedColor	#505050
ButtonBorderColor	#404040
MenuCheckBackColor	#3d3c3d

//Property Grid Related/プロパティグリッド関連
PropertyGridBaseBackColor	#171617
PropertyGridGroupBackColor	#3A3A3A
PropertyGridGroupForeColor	#E0E0E0
PropertyGridCellBackColor	#1D1C1D
PropertyGridCellForeColor	#E6E6E6
PropertyGridCellBorderColor	#0e0e0e
PropertyGridSelectedBackColor	#444344
PropertyGridSelectedForeColor	#FEFCF2
PropertyGridInactiveSelectedBackColor	#323132
PropertyGridInactiveSelectedForeColor	#bEbCb2
PropertyGridColumnHeaderBackColor	#4B4a4B
PropertyGridReadOnlyBackColor	#404040
PropertyGridReadOnlyForeColor	#999999

//Toolstrip Section (e.g. Copy/Delete Buttons)/ツールストリップ関連（コピー/削除ボタンなどが並ぶセクション）
ToolStripBackColor	#302f30

//Master Menu Related/マスターメニュー関連
MasterMenuBackColor	#282a2c
MasterMenuForeColor	#a2a9b0
MasterMenuSelectedColor	#0052A6

//Caption Bar Related/キャプションバー hearsay
CaptionBarBackColor	#3c3b3c
CaptionBarForeColor	#C8C8C8
CaptionBarSeachBoxBackColor	#504f50
CaptionBarSeachBoxForeColor	#E6E6E6

//List View Related/リストビュー関連
ListViewBackColor	#232223
ListViewColumnHeaderBackColor	#403f40
ListViewEvenRowBackColor	#20201f
ListViewOddRowBackColor	#202328

//Textbox Related/テキストボックス関係
TextBoxBackColor	#1D1C1D

//Resource & Camera Tool List/リソース・カメラツールのリスト関連
ResIconUserResColor	#FFFFFF
ResIconSysResColor	#FFFFFF
ResIconDlcResColor	#FFFFFF
ResIconSelectedUserResColor	#FFFFFF
ResIconSelectedSysResColor	#FFFFFF
ResIconSelectedDlcResColor	#FFFFFF

//Drop Line Indicator in Tree Views/ツリーへ項目をドロップした際のライン
DropTargetLineColor	#FB0000

//Graph Related/グラフ関係
GraphAreaBackColor	#404040

//Adjustment Color (Multiply on Target)/調整色（対象に乗算）
BlendButtonColor	#807F80
BlendGrayScaleImageColor	#E3E3E3
BlendTransparentTileColor	#2d2d2d

//Event Editor Related/イベントエディター関連
EventEditorPanelModeNormalEventBackColor	#101118
EventEditorPanelModeCommonEventBackColor	#101811
EventEditorCommandPanelColor	#363536
EventEditorCommandPanelSelectedFrameColor	#0052A6
EventEditorCommandStartEndPanelColor	#363536
EventEditorCommandSummaryTextColor	#D0D0D0

//Battle Layout Dialog Markers/バトルレイアウトダイアログマーカー
BattleLayoutEnemyMarkColor	#EF0031
BattleLayoutPlayerMarkColor	#285DFA`;

    // Parse the content
    const lines = originalContent.split('\n');
    const data = [];
    lines.forEach(line => {
        line = line.trim();
        if (line.startsWith('//') || line === '') {
            data.push({ type: 'comment', text: line });
        } else {
            const parts = line.split(/\s+/);
            if (parts.length === 2 && parts[1].startsWith('#')) {
                const name = parts[0];
                let color = parts[1].substring(1).toUpperCase();
                data.push({
                    type: 'entry',
                    name,
                    separator: '\t',
                    color,
                    originalColor: color,
                    isUpperCase: true
                });
            } else {
                data.push({ type: 'comment', text: line });
            }
        }
    });

    // Map names to items for easy access
    const nameToItem = {};
    data.forEach(item => {
        if (item.type === 'entry') {
            nameToItem[item.name] = item;
        }
    });

    // Define groups with new names
    const groups = [
        {
            label: 'Text',
            baseName: 'BaseTextForeColor',
            associates: ['BaseTextHoverColor', 'BaseTextDisableColor'],
            offsets: {
                'BaseTextHoverColor': { r: 37, g: 37, b: 37 },
                'BaseTextDisableColor': { r: -121, g: -121, b: -121 }
            }
        },
        {
            label: 'Background',
            baseName: 'BaseTextBackColor',
            associates: [],
            offsets: {}
        },
        {
            label: 'Property Grid',
            baseName: 'PropertyGridCellBackColor',
            associates: ['PropertyGridGroupBackColor', 'PropertyGridSelectedBackColor', 'PropertyGridInactiveSelectedBackColor', 'PropertyGridBaseBackColor', 'TextBoxBackColor'],
            offsets: {
                'PropertyGridGroupBackColor': { r: 29, g: 30, b: 29 },
                'PropertyGridSelectedBackColor': { r: 39, g: 39, b: 39 },
                'PropertyGridInactiveSelectedBackColor': { r: 20, g: 20, b: 20 },
                'PropertyGridBaseBackColor': { r: -6, g: -5, b: -6 },
                'TextBoxBackColor': { r: 0, g: -1, b: 0 }
            }
        },
        {
            label: 'Property Text',
            baseName: 'PropertyGridCellForeColor',
            associates: ['PropertyGridGroupForeColor', 'PropertyGridSelectedForeColor', 'PropertyGridInactiveSelectedForeColor'],
            offsets: {
                'PropertyGridGroupForeColor': { r: -6, g: -6, b: -6 },
                'PropertyGridSelectedForeColor': { r: 24, g: 22, b: 12 },
                'PropertyGridInactiveSelectedForeColor': { r: -40, g: -44, b: -52 }
            }
        },
        {
            label: 'Caption Bar',
            baseName: 'CaptionBarBackColor',
            associates: ['CaptionBarForeColor', 'CaptionBarSeachBoxBackColor', 'CaptionBarSeachBoxForeColor'],
            offsets: {
                'CaptionBarForeColor': { r: 140, g: 141, b: 140 },
                'CaptionBarSeachBoxBackColor': { r: 18, g: 18, b: 18 },
                'CaptionBarSeachBoxForeColor': { r: 170, g: 169, b: 170 }
            }
        },
        {
            label: 'List View',
            baseName: 'ListViewBackColor',
            associates: ['ListViewEvenRowBackColor', 'ListViewOddRowBackColor', 'ListViewColumnHeaderBackColor'],
            offsets: {
                'ListViewEvenRowBackColor': { r: -3, g: -3, b: -4 },
                'ListViewOddRowBackColor': { r: 0, g: 1, b: 0 },
                'ListViewColumnHeaderBackColor': { r: 29, g: 28, b: 29 }
            }
        },
        {
            label: 'Buttons',
            baseName: 'ButtonHoverColor',
            associates: ['ButtonPressedColor', 'ButtonBorderColor'],
            offsets: {
                'ButtonPressedColor': { r: 48, g: 48, b: 48 },
                'ButtonBorderColor': { r: 32, g: 32, b: 32 }
            }
        },
        {
            label: 'Event Editor',
            baseName: 'EventEditorPanelModeNormalEventBackColor',
            associates: ['EventEditorPanelModeCommonEventBackColor', 'EventEditorCommandPanelColor', 'EventEditorCommandStartEndPanelColor'],
            offsets: {
                'EventEditorPanelModeCommonEventBackColor': { r: 0, g: 7, b: -7 },
                'EventEditorCommandPanelColor': { r: 38, g: 37, b: 32 },
                'EventEditorCommandStartEndPanelColor': { r: 38, g: 37, b: 32 }
            }
        },
        {
            label: 'Form Caption',
            baseName: 'EditorFormCaptionBackColor',
            associates: ['EditorFormCaptionForeColor', 'EditorFormStatusBarBackColor'],
            offsets: {
                'EditorFormCaptionForeColor': { r: 198, g: 199, b: 198 },
                'EditorFormStatusBarBackColor': { r: 13, g: 13, b: 13 }
            }
        },
        {
            label: 'Master Menu',
            baseName: 'MasterMenuBackColor',
            associates: ['MasterMenuForeColor', 'MasterMenuSelectedColor'],
            offsets: {
                'MasterMenuForeColor': { r: 122, g: 127, b: 132 },
                'MasterMenuSelectedColor': { r: -40, g: -86, b: -86 }
            }
        },
        {
            label: 'Other',
            baseName: 'BlendGrayScaleImageColor',
            associates: ['BlendButtonColor', 'BlendTransparentTileColor'],
            offsets: {
                'BlendButtonColor': { r: -99, g: -100, b: -99 },
                'BlendTransparentTileColor': { r: -178, g: -178, b: -178 }
            }
        }
    ];

    // Utility functions
    function hexToRgb(hex) {
        return {
            r: parseInt(hex.substr(0, 2), 16),
            g: parseInt(hex.substr(2, 2), 16),
            b: parseInt(hex.substr(4, 2), 16)
        };
    }

    function rgbToHex(rgb, upper) {
        let hex = ((rgb.r << 16) | (rgb.g << 8) | rgb.b).toString(16).padStart(6, '0');
        return upper ? hex.toUpperCase() : hex.toLowerCase();
    }

    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function invertHex(hex, upper) {
        hex = hex.toUpperCase();
        let r = (255 - parseInt(hex.substr(0, 2), 16)).toString(16).padStart(2, '0');
        let g = (255 - parseInt(hex.substr(2, 2), 16)).toString(16).padStart(2, '0');
        let b = (255 - parseInt(hex.substr(4, 2), 16)).toString(16).padStart(2, '0');
        let inv = r + g + b;
        return upper ? inv.toUpperCase() : inv.toLowerCase();
    }

    function updateEntryUI(item) {
        if (item.entrySwatch) {
            item.entrySwatch.style.backgroundColor = '#' + item.color;
            item.entryHex.textContent = '#' + item.color;
        }
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
        updatePreview();
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
        group.input = input; // Store input for preview clicks

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
                    updateEntryUI(item);
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
            data.forEach(item => {
                if (item.type === 'entry' && presetColors[val][item.name]) {
                    const newColor = item.isUpperCase ? presetColors[val][item.name].toUpperCase() : presetColors[val][item.name].toLowerCase();
                    item.color = newColor;
                    updateEntryUI(item);
                }
            });
            groups.forEach(group => {
                const col = nameToItem[group.baseName].color;
                group.batchSwatch.style.backgroundColor = '#' + col;
                group.batchHex.textContent = '#' + col;
            });
        } else if (val === 'random') {
            groups.forEach(group => {
                const baseItem = nameToItem[group.baseName];
                let randomColor = Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');
                randomColor = baseItem.isUpperCase ? randomColor.toUpperCase() : randomColor.toLowerCase();
                setGroupColor(group, randomColor);
            });
        }
        updatePreview();
        e.target.value = ''; // Reset select
    });

    const editor = document.getElementById('editor');
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
                updatePreview();
                // Update batch UI if this entry is a baseName
                const group = groups.find(g => g.baseName === item.name);
                if (group) {
                    group.batchSwatch.style.backgroundColor = '#' + item.color;
                    group.batchHex.textContent = '#' + item.color;
                }
            });
            swatch.addEventListener('click', () => {
                input.click();
            });
            div.appendChild(spanPrefix);
            div.appendChild(swatch);
            div.appendChild(spanHex);
            div.appendChild(input);
            item.entrySwatch = swatch;
            item.entryHex = spanHex;
            item.input = input; // Store input for preview clicks
            entryCount++;
        }
        editor.appendChild(div);
    });

    function updatePreview() {
        const preview = document.getElementById('preview');
        data.forEach(item => {
            if (item.type === 'entry') {
                preview.style.setProperty(`--${item.name}`, `#${item.color}`);
            }
        });
    }

    // Handle preview clicks
    const colorElements = document.querySelectorAll('#preview [data-color], #preview [data-foreground]');
    colorElements.forEach(element => {
        element.style.cursor = 'pointer';
        element.addEventListener('click', () => {
            const bgColorKey = element.getAttribute('data-color');
            const fgColorKey = element.getAttribute('data-foreground');
            const colorKey = bgColorKey || fgColorKey;

            if (!colorKey) return;

            // Find the group or entry for this color
            let group = groups.find(g => g.baseName === colorKey || g.associates.includes(colorKey));
            let item = nameToItem[colorKey];

            if (group) {
                // Trigger the group's color picker
                group.input.click();
            } else if (item) {
                // Trigger the individual entry's color picker
                item.input.click();
            }
        });
    });

    // Initial update
    updatePreview();

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