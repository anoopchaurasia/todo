fm.Package("common");
fm.Class("InlineEditor");
common.InlineEditor = function () {
	
	function createTextArea(  div ) {
		var text = $.trim(div.html()).replace(	/\s+/g, " ").replace(/<br\s*\/?>/mgi,"\n");
		$(this).hide();
		var pos = $( div ).position();
		var height = 0;
		var html = "<textarea>" + text + "</textarea>";
		var textarea = $( html ).insertBefore( "body" );
		textarea.css({
			left:pos.left + parseInt( div.css("margin-left")) -1,
			top:pos.top + parseInt( div.css("margin-top")) -1 ,
			position:"absolute",
			width:div.width() ,
			height:div.height(),
			"max-height": div.height(),
			"font-size": div.css("font-size"),
			"font-weight":div.css("font-weight"),
			display:"block",
			border:"1px solid #ccc",
			"font-family":div.css("font-family"),
			"overflow-x": "auto",
			"overflow-y": "hidden"
		}).blur( function() {
			div.html( this.value.replace(/\n/g, "<br>") );
			div.css("visibility","visible");
			$( this).remove();
		}).keyup(function(e) {
			
			if( height !=  this.scrollHeight ){
				$(this).height( this.scrollHeight ).css( "max-height", this.scrollHeight);
			}		
		});
		textarea.focus();
		div.css("visibility","hidden");
		 
	}
	
	function makeEditable() {
		createTextArea( $( this ) );
	}
	this.InlineEditor = function(element) {
		
		element.click(makeEditable);
	};
};