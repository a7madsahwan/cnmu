﻿ 

        /***********************************************
        * Dynamic Countdown script- © Dynamic Drive (http://www.dynamicdrive.com)
        * This notice MUST stay intact for legal use
        * Visit http://www.dynamicdrive.com/ for this script and 100s more.
        ***********************************************/

        function cdtime(container, targetdate) {
            if (!document.getElementById || !document.getElementById(container)) return
            this.container = document.getElementById(container)
            this.currentTime = new Date()
            this.targetdate = new Date(targetdate)
            this.timesup = false
            this.updateTime()
        }

        cdtime.prototype.updateTime = function () {
            var thisobj = this
            this.currentTime.setSeconds(this.currentTime.getSeconds() + 1)
            setTimeout(function () { thisobj.updateTime() }, 1000) //update time every second
        }

        cdtime.prototype.displaycountdown = function (baseunit, functionref) {
            this.baseunit = baseunit
            this.formatresults = functionref
            this.showresults()
        }

        cdtime.prototype.showresults = function () {
            var thisobj = this


            var timediff = (this.targetdate - this.currentTime) / 1000 //difference btw target date and current date, in seconds
            if (timediff < 0) { //if time is up
                this.timesup = true
                this.container.innerHTML = this.formatresults()
                return
            }
            var oneMinute = 60 //minute unit in seconds
            var oneHour = 60 * 60 //hour unit in seconds
            var oneDay = 60 * 60 * 24 //day unit in seconds
            var dayfield = Math.floor(timediff / oneDay)
            var hourfield = Math.floor((timediff - dayfield * oneDay) / oneHour)
            var minutefield = Math.floor((timediff - dayfield * oneDay - hourfield * oneHour) / oneMinute)
            var secondfield = Math.floor((timediff - dayfield * oneDay - hourfield * oneHour - minutefield * oneMinute))
            if (this.baseunit == "hours") { //if base unit is hours, set "hourfield" to be topmost level
                hourfield = dayfield * 24 + hourfield
                dayfield = "n/a"
            }
            else if (this.baseunit == "minutes") { //if base unit is minutes, set "minutefield" to be topmost level
                minutefield = dayfield * 24 * 60 + hourfield * 60 + minutefield
                dayfield = hourfield = "n/a"
            }
            else if (this.baseunit == "seconds") { //if base unit is seconds, set "secondfield" to be topmost level
                var secondfield = timediff
                dayfield = hourfield = minutefield = "n/a"
            }
            this.container.innerHTML = this.formatresults(dayfield, hourfield, minutefield, secondfield)
            setTimeout(function () { thisobj.showresults() }, 1000) //update results every second
        }

        /////CUSTOM FORMAT OUTPUT FUNCTIONS BELOW//////////////////////////////

        //Create your own custom format function to pass into cdtime.displaycountdown()
        //Use arguments[0] to access "Days" left
        //Use arguments[1] to access "Hours" left
        //Use arguments[2] to access "Minutes" left
        //Use arguments[3] to access "Seconds" left

        //The values of these arguments may change depending on the "baseunit" parameter of cdtime.displaycountdown()
        //For example, if "baseunit" is set to "hours", arguments[0] becomes meaningless and contains "n/a"
        //For example, if "baseunit" is set to "minutes", arguments[0] and arguments[1] become meaningless etc


        function formatresults() {
            if (this.timesup == false) {//if target date/time not yet met
                // var displaystring = "<table style='font-size:30;font-weight:bold;color:black' width='98%'></table>" + "<table style='font-size:30;font-weight:bold;color:black' width='100%'   cellspacing='2'><tr><td >" + arguments[3] + "</td><td >" + arguments[2] + "</td><td>" + arguments[1] + "</td><td>" + arguments[0] + "</td></tr><tr><td>ثانية</td><td>دقيقة</td><td>ساعة</td><td >يوم</td><tr></table>" //"<div class='lcdstyle' style='background-image: url(Images/subbg.gif); background-repeat: repeat-x;direction:rtl'>" + arguments[0] + " يوم " + arguments[1] + " ساعة " + arguments[2] + " دقيقة " + arguments[3] + "ثانية" + "</div>"
               // var displaystring = "<table border='0'  cellpadding='0' cellspacing='0' height='31' width='154' style=' background-image:url(images/index_towCounter2.jpg); background-repeat:no-repeat;'><tr  ><td   style='width:25%;Color:#3d2611;text-align:center'>" + arguments[0] + "</td><td   style='width:25%;Color:#8a5117;text-align:center'>" + arguments[1] + "</td><td  style='width:25%;Color:#cc9d09;text-align:center'>" + arguments[2] + "</td><td   style='width:25%;Color:#a8951d;text-align:center'>" + arguments[3] + "</td></tr></table>"


                var displaystring = "<div style='float:left;width:38px;height:26px;text-align:center;padding-top:5px;color:#3d2611;font-weight:bold;'>" + arguments[0] + "</div><div style='float:left;width:39px;height:26px;text-align:center;padding-top:5px;Color:#8a5117;font-weight:bold ;'>" + arguments[1] + "</div><div style='float:left;width:39px;height:26px;text-align:center;padding-top:5px;Color:#cc9d09;font-weight:bold ; '>" + arguments[2] + "</div><div style='float:right;width:37px;height:26px;text-align:center;padding-top:5px;Color:#a8951d;font-weight:bold ; '>" + arguments[3] + "</div>";



            }
            else { //else if target date/time met
                var displaystring = ""
            }
            return displaystring
        }

        function formatresults2() {
            if (this.timesup == false) { //if target date/time not yet met
                //   var displaystring = "<span class='lcdstyle'>" + arguments[0] + " <sup>days</sup> " + arguments[1] + " <sup>hours</sup> " + arguments[2] + " <sup>minutes</sup> " + arguments[3] + " <sup>seconds</sup></span> left until this Christmas"
                // var displaystring = "<table style='font-size:30;font-weight:bold;color:black' width='98%'></table>" + "<table style='font-size:30;font-weight:bold;color:black' width='100%'   cellspacing='2'><tr><td >" + arguments[3] + "</td><td>" + arguments[2] + "</td><td>" + arguments[1] + "</td><td>" + arguments[0] + "</td></tr><tr><td>ثانية</td><td>دقيقة</td><td>ساعة</td><td >يوم</td><tr></table>" //"<div class='lcdstyle' style='background-image: url(Images/subbg.gif); background-repeat: repeat-x;direction:rtl'>" + arguments[0] + " يوم " + arguments[1] + " ساعة " + arguments[2] + " دقيقة " + arguments[3] + "ثانية" + "</div>"
                // var displaystring = "<table border='0' cellpadding='0' cellspacing='0' height='31' width='154' style=' background-image:url(images/index_towCounter2.jpg); background-repeat:no-repeat;'><tr ><td  style='width:25%;Color:#3d2611;text-align:center'>" + arguments[0] + "</td><td style='width:25%;Color:#8a5117;text-align:center'>" + arguments[1] + "</td><td   style='width:25%;Color:#cc9d09;text-align:center'>" + arguments[2] + "</td><td   style='width:25%;Color:#a8951d;text-align:center'>" + arguments[3] + "</td></tr></table>"
                var displaystring = "<div style='float:left;width:38px;height:26px;text-align:center;padding-top:5px;color:#3d2611;font-weight:bold;'>" + arguments[0] + "</div><div style='float:left;width:39px;height:26px;text-align:center;padding-top:5px;color:#8a5117;font-weight:bold; '>" + arguments[1] + "</div><div style='float:left;width:39px;height:26px;text-align:center;padding-top:5px;color:#cc9d09;font-weight:bold; '>" + arguments[2] + "</div><div style='float:right;width:37px;height:26px;text-align:center;padding-top:5px;color:#a8951d;font-weight:bold; '>" + arguments[3] + "</div>";


            }
            else { //else if target date/time met
                var displaystring = "" //Don't display any text
                alert("Christmas is here!") //Instead, perform a custom alert
            }
            return displaystring
        }
 