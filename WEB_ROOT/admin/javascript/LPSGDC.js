$j(document).ready(function() {
  addLPSGDFields();
  LPSGDRestyle();
  if ( $j(".collapseHeader").length < 1 ) { makeCollapsible() }

  $j( "#LPS-GDCustomhiddentable" ).remove(); /* Remove hidden LPSGDC templates */
  
  window.setTimeout(addLegalandDOB, 3000);
  
});
function addLegalandDOB() {
  $legalFields = $j("#legalLastName, #legalGenderSelect").parent().parent().addClass("row-legal");
  $legalFields.insertAfter("#trLegal_Gender");
  $j("#trLegal_Gender, #trLegal_FullName").remove();
  
}
/* Insert custom fields & comment box into Demographics page */
function addLPSGDFields() {
  const $trHomePhone =  $j("#fieldHomePhone").parent().parent();
  const $trRaceCode = $j( "form td:contains('MA Race Code')" ).parent();
  const $trGradYear = $j("#fieldGradYear").parent().parent();
  const $trStuNum = $j("#fieldStuNum").parent().parent();
  //const $trMomHomePhone = $j("#fieldMotherHomePhone").parent().parent();
  
  /*================NOTES:======================================================
  -Sections of entirely custom fields are inserted after MA Race Code, need
      them in table & don't think original placement matters. Race code
      defaults to bottom, so this should avoid conflicts.
      -Contacts Table is wrapped in a <div>, copied from Contacts page minus
      certain features.
      ============================================================================*/
      $trHomePhone.after( $j("#LPS-GDCustomhiddentable tr.row-student") ); /* Student          */
  $trHomePhone.after( $j("#LPS-GDCustomhiddentable tr.row-contacts") );/* Contacts - Old   */
  $trHomePhone.after( $j("#demoContactsTable") );                      /* Contacts         */
  $trRaceCode.after( $j("#LPS-GDCustomhiddentable tr.row-ethRace") );  /* Ethnicity & Race */
  $trRaceCode.after( $j("#LPS-GDCustomhiddentable tr.row-office") );   /* Adminstration    */
  $trGradYear.after( $j("#LPS-GDCustomhiddentable tr.row-grad") );     /* Graduation       */
  $trRaceCode.after( $j("#LPS-GDCustomhiddentable tr.row-legal") );    /* Legal            */
  $trStuNum.after( $j("#LPS-GDCustomhiddentable tr.row-other") );      /* Other            */
  $j("form>div.box-round:first-child").after( $j("#demoComments") );   /* Comment Box      */
  $j("#content-main form").before( $j("#demoNavTabs") )                /* Navigation Tabs  */
  .appendTo( $j("#demoNavTabs") );                                   /*~~~~~~~~~~~~~~~~~~*/
  $j("div.pds-app-header-bar-center").append( $j("#demoNavBar") );     /* Navigation Bar   */
}

/* Add LPS classes to default fields & wrap class groups in section containers */
function LPSGDRestyle() {
  const stdFieldRow = (rowSelectors, rowClassNames) => { return $j(rowSelectors).parent().parent().addClass(rowClassNames) };
  
  /* Student
  -----------------Name--------------- */
  $trStuName = stdFieldRow("#lastName", "row-student student-general" );
  $j("#studentAge").parent().addClass( "row-student student-general" ).insertAfter($trStuName);
  stdFieldRow("#fieldDOB", "row-student student-general" ).insertAfter($trStuName);
  stdFieldRow("#selectGender", "row-student student-general" ).insertAfter($trStuName);
  stdFieldRow("#fieldname_suffix", "row-student student-general" ).insertAfter($trStuName);
  
  // Organizes "information" section and legal section
  $j("tr.row-legal").insertAfter($j("#studentAge").parent());
  // Header for the legal section
  $j("form tr.row-legal:first").before(` <tr class="headerrow row-legal"> <td colspan="2" class="bold" width="100%"> Information <span style="color: red; padding: 2px 4px;">(Sent to DESE for State Reporting if filled in)</span> </td> </td> </tr> `); 
  // Contains the input fields for the legal section
  stdFieldRow("#legalLastName, #legalGenderSelect", "row-legal"); 

  /* ----------Home_Address----------- */
  $j( "form td:contains('Home Address')" ).not("td:contains('Mailing Address')").parent().addClass( "row-student student-address" );
  stdFieldRow("#pstreet, #papt, #pcity, #pstate, #pzip, #pgeocode, #validatePrimaryAddress", "row-student student-address");
  /* ---------Mailing_Address--------- */
  $j( "form td:contains('Mailing Address -')" ).parent().addClass( "row-student student-mail" ).removeClass("student-address"); /* Gets class cause it has "Home address" in the field */
  $j( "form td:contains('~[text:psx.html.admin_students.generaldemographics.mailing_address_]')" ).parent().addClass( "row-student student-mail" );
  stdFieldRow("#mstreet, #mapt, #mcity, #mstate, #mzip, #mgeocode, #validateMailingAddress", "row-student student-mail");
  /*adds red text to mailing address*/
  $j('tr.headerrow.row-student.student-mail td').append(" <b>If Foster/Homeless/Variance, don’t touch the address and reach out to FRC.</b>").children('b').css('color', 'red')
  /* -----------Phone/Email----------- */
  stdFieldRow("#fieldHomePhone", "row-student student-contactInfo");

  /* Contacts */
  $j( "#father").parent().remove();
  $j( "input[id^='fieldFather']").parent().parent().remove();
  $j( "#mother").parent().remove();
  $j( "input[id^='fieldMother']").parent().parent().remove();
  $j( "#fieldGuardianEmail").parent().parent().remove();
  

  /* Ethnicity & Race */
  $j( "form td:contains('Federal Ethnicity and Race')" ).parent().addClass( "row-ethRace ethrace-select" );
  $j( "form td:contains('Massachusetts State Information')" ).parent().addClass( "row-ethRace ethrace-select" );
  $j( "#radioFedEthYes" ).parent().parent().parent().parent().addClass( "row-ethRace ethrace-select" );
  $j( "#race_A" ).parent().parent().parent().parent().addClass( "row-ethRace ethrace-select" );
  $j( "form td:contains('MA Race Code')" ).parent().addClass( "row-ethRace ethrace-select" );

  /* Administration - All fields are initialized in LPS-GDCustomhiddentable */
  $j('form td:contains("days of membership")').parent().addClass("row-office office-general");

  /* Graduation */
  stdFieldRow("#fieldGradYear", "row-grad");


  /* Other */
  stdFieldRow("#fieldArea, #primaryethnicity, #fieldGuardianship, #fieldPrevStuId, #fieldSSN, #fieldStuNum", "row-other other-builtIn");
  $j( "form td:contains('Grade Level')" ).parent().addClass( "row-other other-builtIn" );  /* DOE016 */

  /* Wrap Student Section */
  $j("form tr.row-student").wrapAll('<div id="StudentSection" style="margin:0"><div class="row" style="margin:0"><table class="linkDescList" width="100%"><tbody></tbody></table></div></div>'); /* Starts at top */
  /* Subsections */
  $j("form tr.student-contactInfo:first").before('<tr class="headerrow row-student student-contactInfo"><td colspan="2" class="bold" width="100%">Phone & Email</td></tr>');
  $j("form tr.student-general:first").before('<tr class="headerrow row-student student-general" style="width:100%"><td colspan="2" class="bold" width="100%">Personal</td></tr>');
  /* Wrap Other Section */
  $j("form tr.row-other").wrapAll('<div id="OtherSection"><div class="row"><table class="linkDescList" width="100%"><tbody></tbody></table></div></div>');
  $j("#OtherSection").insertAfter( $j("#StudentSection") );
  /* Subsections */
  $j("form tr.row-other:first").before('<tr class="headerrow row-other"><td colspan="2" class="bold" width="100%">Information</td></tr>');


  /* Wrap Grad Section */
  $j("form tr.row-grad").wrapAll('<div id="GradSection"><div class="row"><table class="linkDescList" width="100%"><tbody></tbody></table></div></div>');
  $j("#GradSection").insertAfter( $j("#StudentSection") );
  /* Subsections */
  $j("form tr.row-grad:first").before('<tr class="headerrow row-grad"><td colspan="2" class="bold" width="100%">Information</td></tr>');

  /* Wrap Office Section*/
  $j("form tr.row-office").wrapAll('<div id="OfficeSection"><div class="row"><table class="linkDescList" width="100%"><tbody></tbody></table></div></div>');
  $j("#OfficeSection").insertAfter( $j("#StudentSection") );
  /* Subsections */
  $j("form tr.office-general:first").before('<tr class="headerrow row-office office-general"><td colspan="2" class="bold" width="100%">District Information</td></tr>');
  $j("form tr.office-el:first").before('<tr class="headerrow row-office office-el"><td colspan="2" class="bold" width="100%">EL Information</td></tr>');
  $j("form tr.office-sped:first").before('<tr class="headerrow row-office office-sped"><td colspan="2" class="bold" width="100%">SPED Information</td></tr>');

  /* Wrap Race Section */
  $j("form div#stateIncludeWrapper").wrapAll('<tr class="row-ethRace ethrace-other" width="100%"><td colspan="2"></td></tr>');
  $j("form tr.row-ethRace").wrapAll('<div id="EthRaceSection" class=""><div class="row"><table class="linkDescList" width="100%"><tbody></tbody></table></div></div>');
  $j("#EthRaceSection").insertAfter( $j("#StudentSection") );
  /* Subsections */
  $j("form tr.ethrace-select:first").before('<tr class="headerrow row-ethRace ethrace-select"><td colspan="2" class="bold" width="100%">Ethnicity & Race</td></tr>');
  $j("form tr.ethrace-other:first").before('<tr class="headerrow row-ethRace ethrace-other"><td colspan="2" class="bold" width="100%">Other State General</td></tr>');

  /* Wrap Contacts Section */
  $j("form div#demoContactsTable").wrapAll('<tr class="row-contacts contacts-table" width="100%"><td colspan="2"></td></tr>');
  $j("form tr.row-contacts").wrapAll('<div id="ContactsSection" class=""><div class="row"><table class="linkDescList" width="100%"><tbody></tbody></table></div></div>');
  $j("#ContactsSection").insertAfter( $j("form div#StudentSection") );
  /* Subsections */
  $j("form tr.contacts-guardiansOld:first").before('<tr class="headerrow row-contacts contacts-guardiansOld"> <td colspan="2" class="bold" width="100%">Guardians - Old (will be phased out)</td> </tr>'); 
  $j("form tr.contacts-guardian1:first").before('<tr class="headerrow row-contacts contacts-guardiansOld contacts-guardian1"> <td colspan="2" class="bold" style="background-color:rgb(183, 201, 224)">Guardian 1 - Old</td> </tr>');
  $j("form tr.contacts-guardian2:first").before('<tr class="headerrow row-contacts contacts-guardiansOld contacts-guardian2"> <td colspan="2" class="bold" style="background-color:rgb(183, 201, 224)">Guardian 2 - Old</td> </tr>');
  $j("tr.contacts-ECOld:first").before('<tr class="headerrow row-contacts contacts-ECOld"> <td colspan="2" class="bold" width="100%">Emergency  Contacts - Old (will be phased out)</td> </tr>');
  $j("form tr.contacts-EC1Old:first").before('<tr class="headerrow row-contacts ontacts-ECOld contacts-EC1Old"> <td colspan="2" class="bold" style="background-color:rgb(183, 201, 224)">Emergency Contact 1 - Old</td> </tr>');
  $j("form tr.contacts-EC2Old:first").before('<tr class="headerrow row-contacts ontacts-ECOld contacts-EC2Old"> <td colspan="2" class="bold" style="background-color:rgb(183, 201, 224)">Emergency Contact 2 - Old</td> </tr>');
  /* $j("form tr.contacts-parentsOld:first").before('<tr class="headerrow row-contacts contacts-parentsOld"> <td colspan="2" class="bold" width="100%">Parents - Old (will be phased out)</td> </tr>');*/
  /*$j("form tr.contacts-fatherOld:first").before('<tr class="headerrow row-contacts contacts-parentsOld contacts-fatherOld"> <td colspan="2" class="bold" style="background-color:rgb(183, 201, 224)">Father - Old</td> </tr>'); */
  /*$j("form tr.contacts-motherOld:first").before('<tr class="headerrow row-contacts contacts-parentsOld contacts-motherOld"> <td colspan="2" class="bold" style="background-color:rgb(183, 201, 224)">Mother - Old</td> </tr>'); */
/*moving the ethicity field*/
$j("#primaryethnicity").parent().parent().insertAfter($j("#EthRaceSection tr:nth-child(4)"))

  /* Remove Original Table */
  $j("#StudentSection").unwrap().unwrap();
  $j("#StudentSection").prev("colgroup").remove();
}

/* Add collapsible headers + activate navBar */
function makeCollapsible() {

  const createCollapseHeader = (title) => { return '<h2 class="toggle expanded collapseHeader" title="Click here to expand or collapse">' + title + ' <small>(Click to Expand/Collapse)</small></h2>' };

  $j("#StudentSection").before( createCollapseHeader("Student Information") );
  $j("#OtherSection").before( createCollapseHeader("Other") );
  $j("#LegalSection").before( createCollapseHeader("Legal Information") );
  $j("#GradSection").before( createCollapseHeader("Graduation Information") );
  $j("#OfficeSection").before( createCollapseHeader("Administrative Information") );
  $j("#EthRaceSection").before( createCollapseHeader("Ethnicity/Race Information") );
  $j("#ContactsSection").before( createCollapseHeader("Contacts") );
  $j("form div").css("display", "box");
  $j("#demoNavBar").css("display", "inline-flex");
  $j("form div.row").parent().css("margin", "0 11px 0 11px");
  $j("form div.row").css("margin", "0");
  /* Sections start collapsed */
  //$j('form > div.box-round > table.linkDescList > tbody > h2').each(function() {
  //  hideCollapseClasses($j(this));
  //  hideCollapseText($j(this));
  //  hideCollapseTarget($j(this));
  //});

  //disable legal section
  //$j(".psTextWidget, .legalNameSuffix, #legalGenderSelect").attr('disabled', 'disabled');

  /* Navbar Event Listeners */

  $j(".sectLink").on('click', function(event) {
    /* Check for hash(anchor link) value NOTE: this.hash returns part of URL beginning with '#' aka the id of the linked element */
    if (this.hash !== "") {
      event.preventDefault();
      var $sectionAnchor = $j(this.hash);

      if ( $sectionAnchor.hasClass("hide") ) {
        $sectionAnchor.prev().toggleClass("collapsed expanded");
        $sectionAnchor.toggleClass("hide");
      }
      if ( $sectionAnchor.length < 1 ) {
        alert("Error: Section " + this.hash + " does not exist");
        return false;
      }

      /* Animate smooth scroll + add hash (#) to URL when done (default click behavior) */
      var scrollDest = $sectionAnchor.offset().top - 50;
      $j('html, body').animate( { scrollTop: scrollDest}, 600);
    }
    $j("a.sectLink").css("border", "2px outset #00629c");
    $j(this).css("border", "2px inset #00629c");
  });
  /* Navbar - Expand All */
  $j("#expandAll").on('click', function(event) {
    event.preventDefault();
    $j(".sectLink").each( function(index, elmnt) {
      var $section = $j(elmnt.hash);
      $section.removeClass("hide");
      $section.prev().removeClass("collapsed").addClass("expanded");
    });
  });
  /* Navbar - Collapse All */
  $j("#collapseAll").on('click', function(event) {
    event.preventDefault();
    $j(".sectLink").each( function(index, elmnt) {
      var $section = $j(elmnt.hash);
      $section.addClass("hide");
      $section.prev().removeClass("expanded").addClass("collapsed");
    });
  });
  $j(window).on("scroll", function(event) {
    if(window.pageYOffset > 50){
      $j("#demoNavBar, a.sectLink").css( {'display':'inline-block'} );
      $j("#demoNavBar").css( {'position':'fixed','top':'0','left':'0','width':'100%'} );
      $j("a.sectLink").css( {'width':'8%'} );
    } else {
      $j("#demoNavBar, a.sectLink").css( {'display':'inline-flex','width':'auto'} );
      $j("#demoNavBar").css( {'position':'initial','top':'initial'} );
    }
  })
}

