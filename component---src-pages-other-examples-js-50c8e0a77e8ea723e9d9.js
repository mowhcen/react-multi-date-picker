(self.webpackChunkdate_picker=self.webpackChunkdate_picker||[]).push([[430],{6858:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var a=n(7294),i=n(316),r=n(7821),c=n(6724);function l(e,t,n){var i=(0,a.useState)(new r.NT({calendar:"en"===t?"gregorian":"persian",locale:t})),l=i[0],o=i[1];function s(e,t){l[e]+=t,o(new r.NT(l))}var d={display:"inline-block",width:"90px",fontSize:"16px"},u={title:"Opening Calendar On The Specified Date",description:a.createElement(a.Fragment,null,a.createElement("p",null,"en"===t?"The currentDate prop forces the datepicker & calendar to open on a specific date.":"پراپرتی currentDate تقویم را مجبور به باز شدن در زمان تعیین شده میکند."),a.createElement("p",null,"en"===t?"For example if you want the datepicker opens in February 2021 , you can set the currentDate prop to new DateObject ({ year:2021,month:2,day:1})":"به عنوان نمونه برای باز شدن تقویم در اسفند 1399 مانند مثال زیر عمل کنید:")),code:"<DatePicker\n  currentDate={\n    new DateObject({"+("en"===t?"":'\n      calendar: "persian", ')+" \n      year: "+("en"===t?2021:1399)+",\n      month: "+("en"===t?"2":"12")+",\n      day: 1\n    })\n  }\n/>",jsx:a.createElement(r.ZP,Object.assign({currentDate:new r.NT({calendar:"en"===t?"gregorian":"persian",year:"en"===t?2021:1399,month:"en"===t?2:12,day:1,locale:t})},n))},b={title:"Manually Set Year And Month In DatePicker",code:'import React, { useState } from "react";\nimport DatePicker, { DateObject } from "react-multi-date-picker";\n\nexport default function Example() {\n  const [date, setDate] = useState(\n    new DateObject('+("en"===t?"":'{ calendar: "persian", locale: "fa" }')+'),\n  );\n\n  function update(key, value) {\n    date[key] += value;\n\n    setDate(new DateObject(date));\n  }\n\n  const style = {\n    display: "inline-block",\n    width: "90px",\n    fontSize: "16px",\n  };\n\n  return (\n    <div style={{ textAlign: "center" }}>\n      <div>\n        <button onClick={() => update("month", 1)}>+</button>\n        <span style={style}>{date.month.name}</span>\n        <button onClick={() => update("month", -1)}>-</button>\n      </div>\n      <div>\n        <button onClick={() => update("year", 1)}>+</button>\n        <span style={style}>{date.year}</span>\n        <button onClick={() => update("year", -1)}>-</button>\n      </div>\n      <DatePicker \n        currentDate={date}\n        calendarPosition="bottom-center"\n      '+("en"===t?"/>":'  calendar="persian" \n        locale="fa" \n      />')+"\n    </div>\n  )\n}  ",jsx:a.createElement("div",{style:{textAlign:"center"}},a.createElement("div",null,a.createElement("button",{onClick:function(){return s("month",1)}},"+"),a.createElement("span",{style:d},l.month.name),a.createElement("button",{onClick:function(){return s("month",-1)}},"-")),a.createElement("div",null,a.createElement("button",{onClick:function(){return s("year",1)}},"+"),a.createElement("span",{style:d},l.year),a.createElement("button",{onClick:function(){return s("year",-1)}},"-")),a.createElement(r.ZP,Object.assign({currentDate:l},Object.assign({},n,{calendarPosition:"bottom-center"}))))},m={title:"Changing Start Day Of The Week",description:"start_day",code:"<DatePicker \n  weekStartDayIndex={1} \n/>",jsx:a.createElement(r.ZP,Object.assign({weekStartDayIndex:1},n))},p={title:"Animation",code:"<DatePicker \n  animation \n/>",jsx:a.createElement(r.ZP,Object.assign({animation:!0},n))},D={title:"Other Days",code:"<DatePicker \n  showOtherDays \n/>",jsx:a.createElement(r.ZP,Object.assign({showOtherDays:!0},n))},k={title:"Disabling Scroll Sensitivity",description:"disable_scroll",code:"<DatePicker \n  scrollSensitive={false} \n/>",jsx:a.createElement(r.ZP,Object.assign({scrollSensitive:!1},n))},g={title:"Hide On Scroll",code:"<DatePicker \n  hideOnScroll \n/>",jsx:a.createElement(r.ZP,Object.assign({hideOnScroll:!0},n))},j={title:"Ignore Formatting",code:'<DatePickers\n  format="Date:YYYY/MM/DD, Time:HH:mm:ss"\n  formattingIgnoreList={["Date", "Time"]}\n  plugins={[\n    <TimePicker position="bottom" />\n  ]}\n/>',jsx:a.createElement(r.ZP,Object.assign({format:"Date:YYYY/MM/DD, Time:HH:mm:ss",formattingIgnoreList:["Date","Time"],plugins:[a.createElement(c.Z,{position:"bottom"})]},n))},P={title:"Disable Virtual Keyboard",code:'<DatePicker\n  inputMode="none"\n/>',jsx:a.createElement(r.ZP,Object.assign({inputMode:"none"},n))},O={title:"Disable Editing",description:"disable_edit",code:"<DatePicker\n  editable={false}\n/>",jsx:a.createElement(r.ZP,Object.assign({editable:!1},n))},y={title:"Placeholder",code:'<DatePicker\n  placeholder="click to open"\n/>',jsx:a.createElement(r.ZP,Object.assign({placeholder:"click to open"},n))},h={title:"Disable Year Picker",code:"<DatePicker \n  disableYearPicker \n/>",jsx:a.createElement(r.ZP,Object.assign({disableYearPicker:!0},n))},f={title:"Disable Month Picker",code:"<DatePicker \n  disableMonthPicker \n/>",jsx:a.createElement(r.ZP,Object.assign({disableMonthPicker:!0,mind:!0},n))},E={title:"Hiding Month From Header",code:"<DatePicker \n  hideMonth \n/>",jsx:a.createElement(r.ZP,Object.assign({hideMonth:!0},n))},x={title:"Hiding Year From Header",code:"<DatePicker \n  hideYear \n/>",jsx:a.createElement(r.ZP,Object.assign({hideYear:!0},n))},v={title:"Read Only Calendar",description:"read_only_calendar",code:"<Calendar\n  value={[\n    new DateObject("+("en"===t?"":'{ calendar: "persian" }')+").toFirstOfWeek(),\n    new DateObject("+("en"===t?"":'{ calendar: "persian" }')+").toLastOfWeek(),\n  ]}\n  range\n  readOnly\n/>",jsx:a.createElement(r.f,Object.assign({value:[new r.NT({calendar:"en"===t?"gregorian":"persian"}).toFirstOfWeek(),new r.NT({calendar:"en"===t?"gregorian":"persian"}).toLastOfWeek()],range:!0,readOnly:!0},n))};return[u,b,m,p,D,k,g,j,P,O,y,h,f,x,E,{title:"Read Only DatePicker",code:"<DatePicker \n  value={new Date()} \n  readOnly\n/>",jsx:a.createElement(r.ZP,Object.assign({value:new Date,readOnly:!0},n))},v,{title:"Disabled Calendar",code:"<Calendar \n  value={new DateObject()} \n  disabled \n/>",jsx:a.createElement(r.f,Object.assign({value:new r.NT,disabled:!0},n))},{title:"Disabled Input",code:"<DatePicker \n  disabled \n/>",jsx:a.createElement(r.ZP,Object.assign({disabled:!0},n))},{title:"Disabled Button",code:'<DatePicker\n  type="button"\n  placeholder="this button is disabled"\n  disabled\n/>',jsx:a.createElement(r.ZP,Object.assign({type:"button",placeholder:"this button is disabled",disabled:!0},n))}]}function o(e){var t=e.pageContext.language||"en";return a.createElement(i.Z,{language:t,doc:l})}}}]);
//# sourceMappingURL=component---src-pages-other-examples-js-50c8e0a77e8ea723e9d9.js.map