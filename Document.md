# misaka document

<!-- TOC -->
- [Variables](#misaka-variables)
     - [Folder and File names](#Folder-and-File-names)
       - [`%Misaka_Path{'SpringLang'}%`](#misaka_pathspringlang)
       - [`%Misaka_Path{'DeviceType'}%`](#misaka_pathdevicetype)
       - [`%Misaka_AppUUID{'bundle id', 'Bundle'}%`](#misaka_appuuidbundle-id-bundle)
       - [`%Misaka_Segment{Name: 'target file name', [(Identifier: 'iOSver', Value: '16')]}%`](#misaka_segmentName-target-file-name-identifier-iOSver-Value-16)
       - [`%Misaka_Binary%`](#misaka_binary)
     - [Inside Plist and Loctable files](#Inside-Plist-and-Loctable-files)
       - [`%Misaka_Overwrite%`](#misaka_overwrite)
       - [`%Misaka_Remove%`](#misaka_remove)
       - [`%Misaka_Path{'SpringLang'}%`](#misaka_pathspringlang-1)
- [Config.plist(Advanced Settings)](#configplistadvanced-settings)
     - [Basic form](#basic-form)
       - [Link](#link)
       - [Image](#image)
       - [Text(Readme)](#textreadme)
       - [ImagePicker](#imagepicker)
       - [FilePicker](#filepicker)
       - [ColorPicker](#colorpicker)
       - [ColorPicker_Hex](#colorpicker_hex)
       - [Int](#int)
       - [Double](#double)
       - [Toggle](#toggle)
       - [Segment](#segment)
       - [Navigation link](#navigation-link)
       - [Picker](#picker)
       - [Hider toggle](#hider-toggle)
       - [Preset](#preset)
     - [How to combine with variables](#how-to-combine-with-variables)
       - [File names](#file-names)
       - [Inside files](#inside-files)
 
<!-- /TOC -->

# Variables

## Folder and File names

### `%Misaka_Path{'SpringLang'}%`

```
ja.lproj / CoverSheet.strings
↓
%Misaka_Path{'SpringLang'}%.lproj / CoverSheet.strings
```

### `%Misaka_Path{'DeviceType'}%`

```
DefaultModuleSettings~iphone.plist
↓
DefaultModuleSettings~%Misaka_Path{'DeviceType'}%.plist
```

### `%Misaka_AppUUID{'bundle id', 'Bundle'}%`
### `%Misaka_AppUUID{'bundle id', 'Data'}%`
### `%Misaka_AppUUID{'bundle id', 'AppGroup'}%`

```
Application / 0B0E8030-EC09-4FE2-A6D9-D225F4A46C44
↓
Application / %Misaka_AppUUID{'org.mozilla.ios.Firefox', 'Bundle'}%
```

### `%Misaka_Segment{Name: 'target file name', [(Identifier: 'iOSver', Value: '16')]}%`
### `%Misaka_Segment{Name: 'target file name', [(Identifier: 'Notched', Value: 'Yes')]}%`
### `%Misaka_Segment{Name: 'target file name', [(Identifier: 'Option', Value: 'Option1')]}%`

```
BackBoardServices.framework
↓
%Misaka_Segment{Name: 'BackBoardServices.framework', [(Identifier: 'resplogo', Value: 'SANS'), (Identifier: 'iOSver', Value: '16')]}%
```

### `%Optional%`

```
lock@2x-812h.ca / main.caml
lock@3x-d73.ca / main.caml
↓
lock@2x-812h.ca / %Optional%main.caml
lock@3x-d73.ca / %Optional%main.caml
```

### `%Misaka_Regex%`

```
1880.WWDC_2021-414w-896h@2x~iphone.wallpaper
↓
%Misaka_Regex%1880.WWDC_2021-(.+)~iphone.wallpaper
```

### `%Misaka_Resize%`

**Deprecated**
```
en-0---white.png
↓
%Misaka_Resize%en-0---white.png
```

### `%Misaka_Binary%`

```
LightStandard.car
↓
%Misaka_Binary%LightStandard.car
```

Inside Files
```
{
    "Overwrite": {
        "16088": "darkAccent",
        "16248": "darkAccent"
    }
}
```

## Inside Plist and Loctable files

### `%Misaka_Overwrite%`
### `%Misaka_Remove%`

`%Misaka_Remove%` is used to reduce file size.

```
<key>%Misaka_Overwrite%</key> <string></string>
<key>Key2</key> <string>Edited</string>
<key>Key5</key> <string>%Misaka_Remove%</string>
```

### `%Misaka_Path{'SpringLang'}%`

Inside loctable files(ios16)
```
<key>en</key>
<key>ja</key>
↓
<key>%Misaka_Path{'SpringLang'}%</key>
```

# Config.plist(Advanced Settings)

File structure
```
ColorCC(tweak name)
  ├─config.plist
  └─Overwrite
      └─System
          └─...
```

## Basic form
```
Root
  ├─Item 0[Dictionary]
  │   ├─Category
  │   └─Tweaks[Array]
  │       ├─Item 0[Dictionary]
  │       │   ├─Label(Exmaple)
  │       │   ├─Type(String)
  │       │   ├─UI(Link)
  │       │   └─URL(https://exmple.com)
  │       │
  │       └─...Item x
  └─...Item x
```

## Link
![Sample Link](/Sample/Sample.Link.jpg)

[Sample file](https://raw.githubusercontent.com/shimajiron/Misaka_Network/main/Sample/Sample.Link.misaka)
```
└─Item 0[Dictionary]
    ├─Label(Straight Tamago)
    ├─UI(Link)
    └─URL(https://example.com)
```

## Image
![Sample Image](/Sample/Sample.Image.jpg)

[Sample file](https://raw.githubusercontent.com/shimajiron/Misaka_Network/main/Sample/Sample.Image.misaka)
```
└─Item 1[Dictionary]
    ├─UI(Image)
    ├─URL(https://exmple.com/exmaple.jpg)
    ├─Height(0)
    └─Width(0)
```

## Text(Readme)
![Sample TextReadme](/Sample/Sample.TextReadme.jpg)

[Sample file](https://raw.githubusercontent.com/shimajiron/Misaka_Network/main/Sample/Sample.TextReadme.misaka)
```
└─Item 2[Dictionary]
    ├─Label(Hello.)
    └─UI(Text)
```

## Text input
![Sample TextInput](/Sample/Sample.TextInput.jpg)

[Sample file](https://raw.githubusercontent.com/shimajiron/Misaka_Network/main/Sample/Sample.TextInput.misaka)
```
└─Item 3[Dictionary]
    ├─Identifier
    ├─Label(Widget text)
    ├─Type(String)
    └─Value(Hello)
```

## ImagePicker
![Sample ImagePicker](/Sample/Sample.ImagePicker.jpg)

[Sample file](https://raw.githubusercontent.com/shimajiron/Misaka_Network/main/Sample/Sample.ImagePicker.misaka)
```
└─Item 4[Dictionary]
    ├─Label(Slect image)
    ├─UI(ImagePicker)
    └─URL(/var/mobile/Documents/sample.jp)
```

## FilePicker
![Sample FilePicker](/Sample/Sample.FilePicker.jpg)

[Sample file](https://raw.githubusercontent.com/shimajiron/Misaka_Network/main/Sample/Sample.FilePicker.misaka)
```
└─Item 5[Dictionary]
    ├─Label(Slect file) 
    ├─UI(FilePicker)
    └─URL(/System/Library/Fonts/CoreUI/SFUI.ttf)
```

## ColorPicker
![Sample ColorPicker](/Sample/Sample.ColorPicker.jpg)

[Sample file](https://raw.githubusercontent.com/shimajiron/Misaka_Network/main/Sample/Sample.ColorPicker.misaka)
```
└─Item 6[Dictionary]
    ├─Identifier
    ├─Label(Slect color) 
    ├─Type(Color_Tinting)
    └─Value[Dictionary]
        ├─tintAlpha(0.8) [Number]
        └─tintColor[Dictionary]
            ├─alpha(1) [Number]
            ├─blue(0.76) [Number]
            ├─green(0.76) [Number]
            └─red(0.76) [Number]
```

## ColorPicker_Hex
```
└─Item 7[Dictionary]
    ├─Identifier
    ├─Label(Color select) 
    ├─Type(Color_Hex)
    ├─Value(C46661FF)
    └─Param
        ├─BGRA[Boolean]
        └─NoHash[Boolean]
```

## Int
![Sample Int](/Sample/Sample.Int.jpg)

[Sample file](https://raw.githubusercontent.com/shimajiron/Misaka_Network/main/Sample/Sample.Int.misaka)
```
└─Item 8[Dictionary]
    ├─Identifier
    ├─Label(Blur)
    ├─Type(Int)
    ├─Min(0) [Number]
    ├─Max(100) [Number]
    ├─Step(2) [Number]
    └─Value(66) [Number]
```

## Double
![Sample Double](/Sample/Sample.Double.jpg)

[Sample file](https://raw.githubusercontent.com/shimajiron/Misaka_Network/main/Sample/Sample.Double.misaka)
```
└─Item 9[Dictionary]
    ├─Identifier
    ├─Label(Blur)
    ├─Type(Double)
    ├─Min(0) [Number]
    ├─Max(100) [Number]
    ├─Step(1) [Number]
    └─Value(66) [Number]
```

## Toggle
![Sample Toggle](/Sample/Sample.Toggle.jpg)

[Sample file](https://raw.githubusercontent.com/shimajiron/Misaka_Network/main/Sample/Sample.Toggle.misaka)
```
└─Item 10[Dictionary]
    ├─Identifier
    ├─Label(ConnecitivityModule)
    ├─Type(Bool)
    ├─UI(Toggle)
    └─Value[Boolean]
```

## Segment
![Sample Segment](/Sample/Sample.Segment.jpg)

[Sample file](https://raw.githubusercontent.com/shimajiron/Misaka_Network/main/Sample/Sample.Segment.misaka)
```
└─Item 11[Dictionary]
    ├─Identifier
    ├─Type(String)
    ├─UI(SegmentedControl)
    ├─Value(sample.segment1)
    └─Selection[Array]
        ├─Item 0[Dictionary]
        │   ├─Label(ConnecitivityModule)
        │   └─Value(sample.segment1)
        ├─Item 1[Dictionary]
        │   ├─Label(Nowplyaing)
        │   └─Value(sample.segment2)
        └─...Item x
```

## Navigation link
![Sample NavigationLink](/Sample/Sample.NavigationLink.jpg)

[Sample file](https://raw.githubusercontent.com/shimajiron/Misaka_Network/main/Sample/Sample.NavigationLink.misaka)
```
└─Item 12[Dictionary]
    ├─Label(Links)
    ├─UI(NavigationLink)
    └─Categories[Array]
        ├─Item 0[Dictionary]
        │   ├─Category
        │   └─Tweaks[Array]
        │       ├─Item 0[Dictionary]
        │       │   ├─Label(Twitter)
        │       │   ├─UI(Link)
        │       │   └─URL(https://exmple.com)
        │       ├─Item 1[Dictionary]
        │       │   ├─Label(Bento)
        │       │   ├─UI(Link)
        │       │   └─URL(https://exmple2.com)
        │       └─...Item x
        └─...Item x
```

## Picker
![Sample Picker](/Sample/Sample.Picker.jpg)

[Sample file](https://raw.githubusercontent.com/shimajiron/Misaka_Network/main/Sample/Sample.Picker.misaka)
```
└─Item 13[Dictionary]
    ├─Identifier
    ├─Label(Slect)
    ├─LabelPosition(Left)
    ├─UI(Picker)
    ├─Value(sample.picker2)
    └─Selection[Array]
        ├─Item 0[Dictionary]
        │   ├─Label(ConnecitivityModule)
        │   └─Value(sample.picker1)
        ├─Item 1[Dictionary]
        │   ├─Label(Nowplyaing)
        │   └─Value(sample.picker2)
        └─...Item x
```

## Hider toggle
![Sample HiderToggle](/Sample/Sample.HiderToggle.jpg)

[Sample file](https://raw.githubusercontent.com/shimajiron/Misaka_Network/main/Sample/Sample.HiderToggle.misaka)
```
├─Item 14[Dictionary]
│   ├─Label(Advanced)
│   ├─UI(Hider_Toggle)
│   ├─Value[Boolean]
│   └─Identifiers[Dictionary]
│       ├─To_Disable[Array]
│       │   └─Item 0(link1)
│       └─To_Enable[Array]
│           └─Item 0(link2)
├─Item 15[Dictionary]
│   ├─Identifier(link1)
│   ├─Label(exmaple.com)
│   ├─UI(Link)
│   └─URL(https://exmple.com)
├─Item 16[Dictionary]
│   ├─Disabled(YES) [Boolean]
│   ├─Identifier(link2)
│   ├─Label(Twitter)
│   ├─UI(Link)
│   └─URL(https://exmple2.com)
└─...Item x
```

## Preset
![Sample Preset](/Sample/Sample.Preset.jpg)

[Sample file](https://raw.githubusercontent.com/shimajiron/Misaka_Network/main/Sample/Sample.Preset.misaka)
```
├─Item 17[Dictionary]
│   ├─Identifier(sample.preset1)
│   ├─Label(Module Blur)
│   ├─Type(Double)
│   ├─Min(0) [Number]
│   ├─Max(100) [Number]
│   ├─Step(1) [Number]
│   └─Value(27) [Number]
├─Item 18[Dictionary]
│   ├─Label(preset1)
│   ├─UI(Preset)
│   └─Presets[Array]
│       └─Item 0[Dictionary]
│           ├─Identifier(sample.preset1)
│           └─value(50) [Number]
└─...Item x
```
## How to combine with variables

### File names
Switching between two files.
```
%Misaka_Segment{Name: 'BackBoardServices.framework', [(Identifier: 'resplogo', Value: 'sans')]}%
%Misaka_Segment{Name: 'BackBoardServices.framework', [(Identifier: 'resplogo', Value: 'toriel')]}%
↓
Item 0[Dictionary]
  ├─Identifier(resplogo) ←
  ├─UI(SegmentedControl)
  └─Selection[Array]
      ├─Item 0[Dictionary]
      │   ├─Label(Option 1)
      │   └─Value(sans) ←
      └─Item 1[Dictionary]
          ├─Label(Option 2)
          └─Value(toriel) ←
```

### Inside files
Enable text input from Advanced Settings.
```
<key>%Misaka_Overwrite%</key> <string></string>
<key>SWIPE_UP_TO_OPEN</key> <string>custom.opentext</string>
<key>SWIPE_UP_TO_UNLOCK</key> <string>custom.unlocktext</string>
↓
├─Item 0[Dictionary]
│   ├─Identifier(custom.opentext) ←
│   ├─Label(Open text)
│   ├─Type(String)
│   └─Value(Hello)
└─Item 1[Dictionary]
    ├─Identifier(custom.unlocktext) ←
    ├─Label(Unlock text)
    ├─Type(String)
    └─Value(Good morning)
```
