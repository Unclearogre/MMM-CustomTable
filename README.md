# MMM-CustomTable
A Magic Mirror Module to display a simple HTML table.

## How to use
1. Clone this repo into your Magic Mirrors modules directory with the following command:
```bash
cd ~/MagicMirror/modules
git clone https://github.com/Unclearogre/MMM-CustomTable.git
```
2. Update your Magic Mirror Config to setup a Module Instance.  See the configuration options and examples below.

## Configuration Options
### Module Configuration Options
| Option | Description |
|---|---|
| tableData | Defines the data to be loaded in the table |
| tableStyle | Sets table properties |

### tableData Configuration Options
| Option | Example | Description |
|---|---|---|
| font | font: "fontname" | Specifies the font for the cell |
| size | size: "20px" | Specifies the font size for the cell |
| color | color: "blue" | Specifies the color of the text in the cell |
| bold | bold: true | Turns on boldface for this cell |
| italic | italic: true | Turns on italics for this cell |
| underline | underline: true | Turns on bold for this cell |

### tableStyle Configuration Options
| Option | Description |
|---|---|
| border | Defines the table border |
| padding | Defines the cell padding - Note that this maybe be partially overridden by the rowSpacing and columnSpacing options |
| columnSpacing | Defines the padding for the right side of each column except the last column |
| rowSpacing | Defines the padding for the bottom of each cell except the last row |
| lineHeight | Defines the text line height |

### Defining rows and cells

The tableData property contains a list of rows, each of which contains a list of one or more cells.  The lists are enclosed in square brackets ("[]") with each entry (row or cell) enclosed in curly braces ("{}") and separated by commas.

This means that, at its simplest, a table would be defined as:
```
tableData: [ { cells: [ { value: "cell data", } ] } ],
```
Column headings are simply another row, generally with added styling (bold, underline, etc.).

More complex examples are shown below.

## Examples

### Single row, multiple columns
This is based on an instance I use to identify calendar colors in MMM-CalendarExt3.  It lives at the bottom of the calendar as a sort of legend.

```javascript
{
    module: "MMM-CustomTable",
    position: "bottom_bar",
    classes: "page3",
    config: {
        tableData: [
            {
                cells: [
                    {  value:  "Family",         color: "#C0FFFF",  size: "small", },   // Family Calendar
                    {  value:  "Dad",            color: "#FFCC00",  size: "small", },   // Dad's Calendar
                    {  value:  "Dad's Work",     color: "#DD9900",  size: "small", },   // Dad's Work Schedule
                    {  value:  "Mom",            color: "#00FFFF",  size: "small", },   // Mom's Calendar
                    {  value:  "Mom's Work",     color: "#00DDDD",  size: "small", },   // Mom's Work Schedule
                    {  value:  "Billy",          color: "#00FF00",  size: "small", },   // Billy's Calendar
                    {  value:  "Billy's School", color: "#1D9C4B",  size: "small", },   // Billy's School Calendar
                    {  value:  "Susie",          color: "#9B9DFD",  size: "small", },   // Susie's Calendar
                    {  value:  "Susie's School", color: "#7777FF",  size: "small", },   // Susie's School Calendar
                    {  value:  "Timmy",          color: "#FF0000",  size: "small", },   // Timmy's Calendar
                    {  value:  "Timmy's School", color: "#FF344D",  size: "small", },   // Timmy's School Calendar
                ]
            },
        ],
        tableStyle: {
            border: "0px", // Customize the border style
            padding: "0px"            // Customize the padding
        }
    }
},
```

<img width="1080" height="27" alt="MMM-CustomTable - Sample 1" src="https://github.com/user-attachments/assets/9a47d01e-b801-4691-a021-191363168e2d" />


### Seven rows, two columns, with headers

```javascript
{
    module: "MMM-CustomTable",
    position: "top_left",
    classes: "page3",
    header: 'Setting the Table',
    config: {
        tableData: [
            {
                cells: [
                    {  value:  "Weekday", bold: true, underline: true, },
                    {  value:  "Person",  bold: true, underline: true, },
		        ]},
            {
                cells: [
                    {  value:  "Monday",     },
                    {  value:  "Dad",     },
		        ]},
            { 	cells: [
            		{  value:  "Tuesday",   },
                    {  value:  "Mom",    },
		        ]},
            { 	cells: [
                    {  value:  "Wednesday", },
                    {  value:  "Billy",     },
		        ]},
            { 	cells: [
                    {  value:  "Thursday",  },
                    {  value:  "Susie",      },
		        ]},
            { 	cells: [
                    {  value:  "Friday",    },
                    {  value:  "Timmy",      },
		        ]},
            { 	cells: [
                    {  value:  "Saturday",  },
                    {  value:  "Dad",      },
                ]
            },
        ],
        tableStyle: {
            border:          "0px solid", // Customize the border style
            padding:         "0px", // Customize the padding
            columnSpacing:   "40px",
            rowSpacing:      "0px",
            lineHeight:      "25px",
        }
    }
},
```
<img width="230" height="230" alt="MMM-CustomTable - Sample 2" src="https://github.com/user-attachments/assets/08f115ae-9ad3-4a93-b69b-4e6147434bd0" />


