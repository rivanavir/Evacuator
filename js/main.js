/*! Mail js scripts
 *  */

 $(function() {
 	$( "#contact-field" ).sortable({
 		revert: true
 	});
 	$( "#draggable" ).draggable({
 		connectToSortable: "#sortable",
 		helper: "clone",
 		revert: "invalid"
 	});
 	$( "ul, li" ).disableSelection();
 });

 $('#optionsRadiosInline1').click(function() {
 	hideall();
 	$('#makemodel').show(200);
 });

 $('#optionsRadiosInline2').click(function() {
 	hideall();
 	$('#gabarits').show(200);
 	$('#weights').show(200);
 	$('#makemodel').show(200);
 });

 $('#optionsRadiosInline3').click(function() {
 	hideall();
 	$('#gabarits').show(200);
 	$('#makemodel').show(200);
 	$('#weights').show(200);
 	$('#osis').show(200);
 });

 $('#optionsRadiosInline4').click(function() {
 	hideall();
 	$('#makemodel').show(200);
 });

 $('#optionsRadiosInline5').click(function() {
 	hideall();
 	$('#makemodel').show(200);
 });

 $('#optionsRadiosInline6').click(function() {
 	hideall();
 	$('#makemodel').show(200);
 });

 $('#optionsRadiosInline7').click(function() {
 	hideall();
 	$('#makemodel').show(200);
 });

 $('#optionsRadiosInline8').click(function() {
 	hideall();
 	$('#makemodel').show(200);
 });

 $('.superbox').SuperBox();

////////*////
 	function hideall() {
 		$('#gabarits').hide();
 		$('#weights').hide();
 		$('#osis').hide();
 		$('#makemodel').hide();
 	}
 	/* create field */
 	var data = [];
 	var guid = (function() {
 		function s4() {
 			return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
 		}
 		return function() {
 			return s4();
 		};
 	})();
 	function point() {
 		var  container = $('#point-field');
 		var uuid = guid();
 		var input = $('<div class="clearfix"><label for="point-' +uuid+ '" class="col-md-1 col-xs-1 try"><span class="label label-success">&nbsp;</span></label>\
 									<label class="col-md-11 col-xs-11 input">\
 										<input type="text" class="input-sm" id="point-' +uuid+ '" name="point-' +uuid+ '" placeholder="Промежуточный пункт">\
 									</label><a data-dismiss="alert" class="icon-append close-point"><i class="fa fa-times-circle"></i></a></div>');
 		data.push(input);
 		container.append(input);
 	}
 	function contact() {
 		var  container = $('#contact-field');
 		var uuid = guid();
 		var input = $('<div class="ui-state-default clearfix"><label class="col col-6 input name"><i class="icon-prepend fa fa-user"></i><input type="text" name="clientName" placeholder="Имя"></label>\
 									<div class="drag-lab"></div><a data-dismiss="alert" class="icon-append close-point delete-contact"><i class="fa fa-times-circle"></i></a>\
 									<label class="col col-6 input"><i class="icon-prepend fa fa-phone"></i>\
 										<input type="text" id="phone' +uuid+ '" name="phone' +uuid+ '" placeholder="Телефон">\
 										<a class="btn-primary btn-xs call" type="button">Вызов</a>\
 									</label></div>');
 		data.push(input);
 		container.append(input);
 	}

 	// resizing window
 	$(function() {
 		$(window).resize(function(){
 			if($(window).width() < 980) {
 				$("#item2").insertAfter("#item1");
 				$("#item4").insertAfter("#item3");
 				$("#item6").insertAfter("#item5");
 			};
 			if($(window).width() > 979) {
 				$("#item2").insertAfter("#container2 .tst");
 				$("#item4").insertAfter("#item2");
 				$("#item6").insertAfter("#item4");
 			};
 		});
 	});

 	


 	function timeZone( ) {
 			var current_date = new Date( );
 			var gmt_offset = current_date.getTimezoneOffset( )/60;
 			return gmt_offset;
 	}
 	$('#offset i').html( timeZone( ) );

 	$(document).ready(function() {

 		//show form order
 		$(".est").click(function(){
 			$(".right-order-table").toggleClass('show');
 		});

 		//tooltip
 		$("[data-toggle=tooltip]").tooltip({
         placement : 'top'
     });

 		//dotted
 		$(".short-txt").shorten({
 			"showChars" : 30,
 			"moreText"  : "",
 			"lessText"  : "",
 		});

 		//comment
 		$(".comment-link").click(function(){
 			if(!$(this).parent().children().hasClass('popover')){
 			$(this).parent().append('<div role="tooltip" class="popover top editable-container editable-popup show-up" id="">\
 						<a class="close" href="#" data-dismiss="alert"><i class="fa fa-times"></i></a>\
 						<div class="arrow"></div>\
 						<h3 class="popover-title">Комментарий</h3>\
 						<div class="popover-content">\
 							<div class="editableform-loading" style="display: none;"></div>\
 							<form class="form-inline editableform" method="post" style="">\
 								<div class="control-group form-group">\
 									<div>\
 										<div class="editable-input">\
 											<textarea class="form-control input-large txtar" placeholder="Ваш комментарий..." ></textarea>\
 										</div>\
 										<div class="editable-buttons editable-buttons-bottom">\
 											<input class="btn btn-primary btn-xs editable-submit" type="submit">\
 										</div>\
 									</div>\
 									<div class="editable-error-block help-block" style="display: none;"></div>\
 								</div>\
 							</form>\
 						</div>\
 					</div>');}
 			else{$(this).parent().find('div.popover').remove();}
 		});

 		//audio
 		$('.audio-player > audio').each(function(){
 			$(this).mediaelementplayer({
 				alwaysShowControls: true,
 				features: ['playpause','progress','volume'],
 				audioVolume: 'horizontal',
 				audioWidth: 100,
 				audioHeight: 10,
 				iPadUseNativeControls: true,
 				iPhoneUseNativeControls: true,
 				AndroidUseNativeControls: true
 			});
 		});

 		$('.multiselect').multiselect({
 			nonSelectedText: 'Все',
 			nSelectedText: 'позиции',
 			numberDisplayed: 1
 		});
 		$('.multiselect1').multiselect({
 			nonSelectedText: '',
 			nSelectedText: '',
 			numberDisplayed: 1
 		});
 		$('.multiselect2').multiselect({
 			nonSelectedText: '',
 			nSelectedText: '',
 			numberDisplayed: 1
 		});
 		$('.multiselect3').multiselect({
 			nonSelectedText: 'Все линии',
 			nSelectedText: 'позиции',
 			numberDisplayed: 1
 		});
 		$('.cooperator').multiselect({
 			nonSelectedText: 'Все сотрудники',
 			nSelectedText: 'позиции',
 			numberDisplayed: 1
 		});

 		// DO NOT REMOVE : GLOBAL FUNCTIONS!
 		pageSetUp();

 			/* BASIC ;*/
 				var responsiveHelper_dt_basic = undefined;
 				var responsiveHelper_datatable_fixed_column = undefined;
 				var responsiveHelper_datatable_col_reorder = undefined;
 				var responsiveHelper_datatable_tabletools = undefined;
 				
 				var breakpointDefinition = {
 					tablet : 1024,
 					phone : 480
 				};
 			
 			/* COLUMN FILTER  */
 				var otable = $('#datatable_fixed_column').DataTable({
 					//"bFilter": false,
 					//"bInfo": false,
 					//"bLengthChange": false
 					//"bAutoWidth": false,
 					//"bPaginate": false,
 					//"bStateSave": true // saves sort state using localStorage
 				"sDom": "<'dt-toolbar'<'col-sm-6 col-xs-6 pull-right'C>>"+
 						"t"+
 						"<'dt-toolbar-footer'<'col-sm-6 col-xs-12'i><'col-sm-6 col-xs-12'p>>",
 				"autoWidth" : true,
 				"preDrawCallback" : function() {
 					// Initialize the responsive datatables helper once.
 					if (!responsiveHelper_datatable_fixed_column) {
 						responsiveHelper_datatable_fixed_column = new ResponsiveDatatablesHelper($('#datatable_fixed_column'), breakpointDefinition);
 					}
 				},
 				"rowCallback" : function(nRow) {
 					responsiveHelper_datatable_fixed_column.createExpandIcon(nRow);
 				},
 				"drawCallback" : function(oSettings) {
 					responsiveHelper_datatable_fixed_column.respond();
 				}		
 				
 				});
 				
 				// custom toolbar
 				$("div.toolbar").html('<div class="text-right"><img src="img/logo.png" alt="SmartAdmin" style="width: 111px; margin-top: 3px; margin-right: 10px;"></div>');
 						 
 				// Apply the filter
 				$("#datatable_fixed_column thead th input[type=text]").on( 'keyup change', function () {
 					
 						otable
 								.column( $(this).parent().index()+':visible' )
 								.search( this.value )
 								.draw();
 								
 				} );

 				var otable = $('#datatable_fixed_column1').DataTable({
 					//"bFilter": false,
 					//"bInfo": false,
 					//"bLengthChange": false
 					//"bAutoWidth": false,
 					//"bPaginate": false,
 					//"bStateSave": true // saves sort state using localStorage
 				"sDom": "<'dt-toolbar'<'col-sm-6 col-xs-6 pull-right'C>>"+
 						"t"+
 						"<'dt-toolbar-footer'<'col-sm-6 col-xs-12'i><'col-sm-6 col-xs-12'p>>",
 				"autoWidth" : true,
 				"preDrawCallback" : function() {
 					// Initialize the responsive datatables helper once.
 					if (!responsiveHelper_datatable_fixed_column) {
 						responsiveHelper_datatable_fixed_column = new ResponsiveDatatablesHelper($('#datatable_fixed_column1'), breakpointDefinition);
 					}
 				},
 				"rowCallback" : function(nRow) {
 					responsiveHelper_datatable_fixed_column.createExpandIcon(nRow);
 				},
 				"drawCallback" : function(oSettings) {
 					responsiveHelper_datatable_fixed_column.respond();
 				}		
 				
 				});
 				
 				// custom toolbar
 				$("div.toolbar").html('<div class="text-right"><img src="img/logo.png" alt="SmartAdmin" style="width: 111px; margin-top: 3px; margin-right: 10px;"></div>');
 						 
 				// Apply the filter
 				$("#datatable_fixed_column1 thead th input[type=text]").on( 'keyup change', function () {
 					
 						otable
 								.column( $(this).parent().index()+':visible' )
 								.search( this.value )
 								.draw();
 								
 				} );
 				/* END COLUMN FILTER */   

 		/*
 		 * X-EDITABLES
 		 */
 		
 		$('#inline').on('change', function (e) {
 				if ($(this).prop('checked')) {
 						window.location.href = '?mode=inline#ajax/plugins.html';
 				} else {
 						window.location.href = '?#ajax/plugins.html';
 				}
 		});
 		
 		if (window.location.href.indexOf("?mode=inline") > -1) {
 				$('#inline').prop('checked', true);
 				$.fn.editable.defaults.mode = 'inline';
 		} else {
 				$('#inline').prop('checked', false);
 				$.fn.editable.defaults.mode = 'popup';
 		}

 		$('#call-sort').editable({
 				pk: 1,
 				limit: 1,
 				source: [{
 						value: 1,
 						text: 'Выбрать все'
 				}, {
 						value: 2,
 						text: 'Входящий'
 				}, {
 						value: 3,
 						text: 'Исходящий'
 				}, {
 						value: 4,
 						text: 'Исх. водителю'
 				}, {
 						value: 5,
 						text: 'Внутренний'
 				}, {
 						value: 6,
 						text: 'Вх. от водителя'
 				}, {
 						value: 7,
 						text: 'Пропущенный'
 				}]
 		});
 		$('#line-call-sort').editable({
 			source: [{
 					value: 1,
 					text: 'MSK-SOS Yandex'
 			}, {
 					value: 2,
 					text: 'MSK-SOS Yandex'
 			}, {
 					value: 3,
 					text: 'MSK-SOS Yandex'
 			}, {
 					value: 7,
 					text: 'MSK-SOS Yandex'
 			}]
 		});
 		$('#call-from-sort').editable({
 			source: [{
 					value: 1,
 					text: 'Владимир'
 			}, {
 					value: 2,
 					text: 'Владимир'
 			}, {
 					value: 7,
 					text: 'Владимир'
 			}]
 		});
 		$('#to-call-sort').editable({
 			source: [{
 					value: 1,
 					text: 'Ирина'
 			}, {
 					value: 2,
 					text: 'Иван'
 			}, {
 					value: 7,
 					text: 'Сергей'
 			}]
 		});
 		$('#indent-sort').editable({
 			source: [{
 					value: 1,
 					text: '3578'
 			}, {
 					value: 2,
 					text: '7894'
 			}, {
 					value: 3,
 					text: '4431'
 			}, {
 					value: 4,
 					text: '4567'
 			}, {
 					value: 5,
 					text: '1594'
 			}, {
 					value: 7,
 					text: '9874'
 			}]
 		});

 		// comments
 		// $('#comments1').editable({
 		// 		showbuttons: 'bottom'
 		// });
 		// $('#comments2').editable({
 		// 		showbuttons: 'bottom'
 		// });
 		// $('#comments3').editable({
 		// 		showbuttons: 'bottom'
 		// });
 		// $('#comments4').editable({
 		// 		showbuttons: 'bottom'
 		// });
 		// $('#comments5').editable({
 		// 		showbuttons: 'bottom'
 		// });
 		// $('#comments6').editable({
 		// 		showbuttons: 'bottom'
 		// });

 		// datetimepicker
 		$('.form_datetime').datetimepicker({
 			language:  'ru',
 			weekStart: 1,
 			todayBtn:  1,
 			autoclose: 1,
 			todayHighlight: 1,
 			startView: 2,
 			showTimezone: true,
 			format: 'yyyy-mm-dd hh:ii'
 		});

 		/* choose table line */
 		$('#tabs-b .table-striped > tbody > tr').click(function(){
 			$(this).parent('tbody').find('tr>td').removeClass('td-background');
 			$(this).find('td').toggleClass('td-background');
 		});

 		/*
 		 * PAGE RELATED SCRIPTS
 		 */
 		// 
 		 

 		 /*
 			* AUTO COMPLETE AJAX
 			*/
 		 
 		 function log(message) {
 			$("<div>").text(message).prependTo("#log");
 			$("#log").scrollTop(0);
 		 }
 		 
 		 $("#avto").autocomplete({
 			source : function(request, response) {
 				$.ajax({
 					url : "http://ws.geonames.org/searchJSON",
 					dataType : "jsonp",
 					data : {
 						featureClass : "P",
 						style : "full",
 						maxRows : 12,
 						name_startsWith : request.term
 					},
 					success : function(data) {
 						response($.map(data.geonames, function(item) {
 							return {
 								label : item.name + (item.adminName1 ? ", " + item.adminName1 : "") + ", " + item.countryName,
 								value : item.name
 							}
 						}));
 					}
 				});
 			},
 			minLength : 2,
 			select : function(event, ui) {
 				log(ui.item ? "Selected: " + ui.item.label : "Nothing selected, input was " + this.value);
 			}
 		 });

 		$(".js-status-update a").click(function() {
 			var selText = $(this).text();
 			var $this = $(this);
 			$this.parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
 			$this.parents('.dropdown-menu').find('li').removeClass('active');
 			$this.parent().addClass('active');
 		});

 		$('#clientName').keyup(function(e) {
 			$('#name1').val($(this).val());
 		});

 		// initialize sortable
 		$(function() {
 			$("#sortable1, #sortable2").sortable({
 				handle : '.handle',
 				connectWith : ".todo",
 				update : countTasks
 			}).disableSelection();
 		});

 		// check and uncheck
 		$('.todo .checkbox > input[type="checkbox"]').click(function() {
 			var $this = $(this).parent().parent().parent();

 			if ($(this).prop('checked')) {
 				$this.addClass("complete");

 				// remove this if you want to undo a check list once checked
 				//$(this).attr("disabled", true);
 				$(this).parent().hide();

 				// once clicked - add class, copy to memory then remove and add to sortable3
 				$this.slideUp(500, function() {
 					$this.clone().prependTo("#sortable3").effect("highlight", {}, 800);
 					$this.remove();
 					countTasks();
 				});
 			} else {
 				// insert undo code here...
 			}

 		})
 		// count tasks
 		function countTasks() {

 			$('.todo-group-title').each(function() {
 				var $this = $(this);
 				$this.find(".num-of-tasks").text($this.next().find("li").size());
 			});

 		}
 	});

 	/*datepicker*/

 	$.datepicker._defaults.onAfterUpdate = null;
 	var datepicker__updateDatepicker = $.datepicker._updateDatepicker;
 	$.datepicker._updateDatepicker = function( inst ) {
 		datepicker__updateDatepicker.call( this, inst );
 		var onAfterUpdate = this._get(inst, 'onAfterUpdate');
 		if (onAfterUpdate)
 			onAfterUpdate.apply((inst.input ? inst.input[0] : null),
 			[(inst.input ? inst.input.val() : ''), inst]);
 	}

 	$(function() {
 		var cur = -1, prv = -1;
 		
 		$('#jrange div').datepicker({
 			//numberOfMonths: 3,
 			changeMonth: true,
 			changeYear: true,
 			showButtonPanel: true,
 			beforeShowDay: function ( date ) {
 				return [true, ( (date.getTime() >= Math.min(prv, cur) && date.getTime() <= Math.max(prv, cur)) ? 'date-range-selected' : '')];
 			},
 			onSelect: function ( dateText, inst ) {
 				var d1, d2;
 				prv = cur;
 				cur = (new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay)).getTime();
 				if ( prv == -1 || prv == cur ) {
 					prv = cur;
 					$('#jrange input').val( dateText );
 				} else {
 					d1 = $.datepicker.formatDate( 'mm/dd/y', new Date(Math.min(prv,cur)), {} );
 					d2 = $.datepicker.formatDate( 'mm/dd/y', new Date(Math.max(prv,cur)), {} );
 					$('#jrange input').val( d1+' - '+d2 );
 				}
 			},
 			onChangeMonthYear: function ( year, month, inst ) {
 			// prv = cur = -1;
 			},
 			onAfterUpdate: function ( inst ) {
 				$('<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">Done</button>')
 				.appendTo($('#jrange div .ui-datepicker-buttonpane'))
 				.on('click', function () { $('#jrange div').hide(); });
 			}
 		})
 		.position({
 			my: 'left top',
 			at: 'left bottom',
 			of: $('#jrange input')
 		})
 		.hide();
 		$('#jrange input').on('focus', function (e) {
 			var v = this.value,
 			d;
 			try {
 				if ( v.indexOf(' - ') > -1 ) {
 					d = v.split(' - ');
 					prv = $.datepicker.parseDate( 'mm/dd/y', d[0] ).getTime();
 					cur = $.datepicker.parseDate( 'mm/dd/y', d[1] ).getTime();
 				} else if ( v.length > 0 ) {
 					prv = cur = $.datepicker.parseDate( 'mm/dd/y', v ).getTime();
 				}
 			} catch ( e ) {
 				cur = prv = -1;
 			}
 			if ( cur > -1 )
 				$('#jrange div').datepicker('setDate', new Date(cur));
 				$('#jrange div').datepicker('refresh').show();
 		});
 	});/*datepicker end*/


 	/*google map*/
 	function initialize() {
 		var myLatlng = new google.maps.LatLng(55.749792,37.6324949);
 		var mapOptions = {
 			zoom: 10,
 			center: myLatlng,
 			mapTypeControl: true,
 			mapTypeControlOptions: {
 				style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
 			},

 		}
 		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

 		var marker = new google.maps.Marker({
 				position: myLatlng,
 				map: map,
 				title: 'Hello World!'
 		});
 	}

 	function calcRoute() {
 		var start = document.getElementById("start").value;
 		var end = document.getElementById("end").value;
 		var request = {
 			origin:start,
 			destination:end,
 			travelMode: google.maps.TravelMode.DRIVING
 		};
 		directionsService.route(request, function(result, status) {
 			if (status == google.maps.DirectionsStatus.OK) {
 				directionsDisplay.setDirections(result);
 			}
 		});
 	}

 	google.maps.event.addDomListener(window, 'load', initialize);
 	/*google map end*/
