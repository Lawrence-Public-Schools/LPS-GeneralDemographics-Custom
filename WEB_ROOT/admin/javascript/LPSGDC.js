$j(document).ready(function() {
  addLPSGDFields();
  LPSGDRestyle();
  selectViewStyle();

  $j( "#LPS-GDCustomhiddentable" ).remove(); /* Remove hidden LPSGDC templates */
  $j( "input" ).val(function( index, value ) { return value.trim(); }); /* Remove extra whitespace from field values */
  decodeDemoVals(); /* Translate DOE Codes - 'fieldName_DOE###' (Moved to seperate function for readability) */
  
  /* Event Listeners */
  $j(window.location).on("hashchange", selectViewStyle());
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
  const $trMomHomePhone = $j("#fieldMotherHomePhone").parent().parent();

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
  /* ----------Home_Address----------- */
  $j( "form td:contains('Home Address')" ).not("td:contains('Mailing Address')").parent().addClass( "row-student student-address" );
  stdFieldRow("#pstreet, #papt, #pcity, #pstate, #pzip, #pgeocode, #validatePrimaryAddress", "row-student student-address");
  /* ---------Mailing_Address--------- */
  $j( "form td:contains('Mailing Address -')" ).parent().addClass( "row-student student-mail" ).removeClass("student-address"); /* Gets class cause it has "Home address" in the field */
  $j( "form td:contains('~[text:psx.html.admin_students.generaldemographics.mailing_address_]')" ).parent().addClass( "row-student student-mail" );
  stdFieldRow("#mstreet, #mapt, #mcity, #mstate, #mzip, #mgeocode, #validateMailingAddress", "row-student student-mail");
  /* -----------Phone/Email----------- */
  stdFieldRow("#fieldHomePhone", "row-student student-contactInfo");

  /* Contacts */
  $j( "#father" ).parent().addClass("row-contacts contacts-parentsOld contacts-fatherOld");
  stdFieldRow("input[id^='fieldFather']", "row-contacts contacts-parentsOld contacts-fatherOld");
  $j( "#mother" ).parent().addClass("row-contacts contacts-parentsOld contacts-motherOld");
  stdFieldRow("input[id^='fieldMother']", "row-contacts contacts-parentsOld contacts-motherOld");
  stdFieldRow("#fieldGuardianEmail", "row-contacts contacts-guardiansOld").insertAfter("#trContactsLivesWith");
  
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

  /* Legal : CREATES TEMPORARY SECTION */
  stdFieldRow("#legalLastName, #legalGenderSelect", "row-legal");

  /* Other */
  stdFieldRow("#fieldArea, #primaryethnicity, #fieldGuardianship, #fieldPrevStuId, #fieldSSN, #fieldStuNum", "row-other other-builtIn");
  $j( "form td:contains('Grade Level')" ).parent().addClass( "row-other other-builtIn" );  /* DOE016 */
   
  /*============'EVERYTHING ELSE' Catcher============*/
  $VarEverythingElse = $j("form > div.box-round > table.linkDescList > tbody > tr").not(".row-student, .row-contacts, .row-ethrace, .row-office, .row-grad, .row-legal, row-other");
  $VarEverythingElse.addClass( "row-everythingElse" );
  
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
  
  /* Wrap Legal Section */
   $j("form tr.row-legal").wrapAll('<div id="LegalSection"><div class="row"><table class="linkDescList" width="100%"><tbody></tbody></table></div></div>');
  $j("#LegalSection").insertAfter( $j("#StudentSection") );
  /* Subsections */
  $j("form tr.row-legal:first").before('<tr class="headerrow row-legal"><td colspan="2" class="bold" width="100%">Information</td></tr>');
  
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
  $j("tr.contacts-ECOld:first").before('<tr class="headerrow row-contacts contacts-ECOld"> <td colspan="2" class="bold" width="100%">Emergency Contacts - Old (will be phased out)</td> </tr>');
  $j("form tr.contacts-EC1Old:first").before('<tr class="headerrow row-contacts ontacts-ECOld contacts-EC1Old"> <td colspan="2" class="bold" style="background-color:rgb(183, 201, 224)">Emergency Contact 1 - Old</td> </tr>');
  $j("form tr.contacts-EC2Old:first").before('<tr class="headerrow row-contacts ontacts-ECOld contacts-EC2Old"> <td colspan="2" class="bold" style="background-color:rgb(183, 201, 224)">Emergency Contact 2 - Old</td> </tr>');
  $j("form tr.contacts-parentsOld:first").before('<tr class="headerrow row-contacts contacts-parentsOld"> <td colspan="2" class="bold" width="100%">Parents - Old (will be phased out)</td> </tr>');
  $j("form tr.contacts-fatherOld:first").before('<tr class="headerrow row-contacts contacts-parentsOld contacts-fatherOld"> <td colspan="2" class="bold" style="background-color:rgb(183, 201, 224)">Father - Old</td> </tr>');
  $j("form tr.contacts-motherOld:first").before('<tr class="headerrow row-contacts contacts-parentsOld contacts-motherOld"> <td colspan="2" class="bold" style="background-color:rgb(183, 201, 224)">Mother - Old</td> </tr>');

  /* Remove Original Table */
  $j("#StudentSection").unwrap().unwrap();
  $j("#StudentSection").prev("colgroup").remove();
}

/*
  Check URL for view tag and edit accordingly
    -Try using html template files to dynamically add/remove the navbar and tabs instead of hiding them?
*/
function selectViewStyle() {
  switch( window.location.hash.replace('#/','#') ) {
    case "#TabView":
      /* Remove Collapsible Headers & NavBar */
      $j(".collapseHeader").remove();
      $j("#demoNavBar").css("display", "none");
      $j("#demoNavBar").off();
      
      /* re-enable tab display */
      $j('form div[id$="Section"]').removeClass("hide").css("display", "none");
      $j("#demoNavTabs > ul").prop("hidden", false);
      
      /*
        -Section <div>s don't receive PS 'ui-tabs' classes until clicked, simulate click
          on each tab when page loads then return to default ('#StudentSection')
      */
      $j("a.sectTab").click();
      $j('a.sectTab[href="#StudentSection"]').click();
      break;
    case "#CollapseView":
      /* Remove NavTabs */
      $j("#demoNavTabs > ul").prop("hidden", true);
      if( $j(".collapseHeader").length < 1 ) {
        showCollapsed();
      }break;
    default:
      window.location.hash = "CollapseView";
      window.location.reload();
      break;
  }
}

/* Add toggle-collapse headers to sections & activate navbar functions */
function showCollapsed() {
  
  const createCollapseHeader = (title) => { return '<h2 class="toggle expanded collapseHeader" title="Click here to expand or collapse">' + title + '</h2>' };
  
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

  /* Load page with all sections collapsed */
  $j('form > div.box-round > table.linkDescList > tbody > h2').each(function() {
    hideCollapseClasses($j(this));
    hideCollapseText($j(this));
    hideCollapseTarget($j(this));
  });

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

/* Decode DOE fields + fields w/ ambiguous values */
function decodeDemoVals() {
  var $enrollmentStatus_012 = $j("#fieldEnrollmentStatus");
  var $firstYearEL_021 = $j("#fieldFirstYearEL");
  var $immigrantStatus_022 = $j("#fieldImmigrantStatus");
  var $isEL_025 = $j("#fieldIsEL");
  var $ELStatus_026 = $j("#fieldELStatus");
  var $militaryStat_029 = $j("#fieldMilitaryStatus");
  var $gradPlan_033 = $j("#fieldGradPlan");
  var $coreCompletion_037 = $j("#fieldCoreCompletion");
  var $504Plan_039 = $j("#field504Plan");
  
  switch( $enrollmentStatus_012.val() ) {
    case '01':
      $enrollmentStatus_012.val("Enrolled");
      break;
    case '04':
      $enrollmentStatus_012.val("Graduate with Competency Determination");
      break;
    case '05':
      $enrollmentStatus_012.val("Expelled");
      break;
    case '06':
      $enrollmentStatus_012.val("Deceased");
      break;
    case '09':
      $enrollmentStatus_012.val("Reached max age, did not graduate or receive a Certificate of attainment");
      break;
    case '10':
      $enrollmentStatus_012.val("Certificate of Attainment");
      break;
    case '11':
      $enrollmentStatus_012.val("11	Completed grade 12 and district-approved program. (District does not offer a Certificate of Attainment)");
      break;
    case '20':
      $enrollmentStatus_012.val("Transferred — In state public");
      break;
    case '21':
      $enrollmentStatus_012.val("Transferred — In state private");
      break;
    case '22':
      $enrollmentStatus_012.val("Transferred — Out-of-State (public or private)");
      break;
    case '23':
      $enrollmentStatus_012.val("Transferred — Home-school");
      break;
    case '24':
      $enrollmentStatus_012.val("Transferred — Adult diploma program, leading to MA diploma");
      break;
    case '30':
      $enrollmentStatus_012.val("Dropout — Enrolled in a non-diploma granting adult education or HiSET program");
      break;
    case '31':
      $enrollmentStatus_012.val("Dropout — Entered Job Corps");
      break;
    case '32':
      $enrollmentStatus_012.val("Dropout — Entered the military");
      break;
    case '33':
      $enrollmentStatus_012.val("Dropout — Incarcerated, district no longer providing educational services");
      break;
    case '34':
      $enrollmentStatus_012.val("Dropout — Left due to employment");
      break;
    case '35':
      $enrollmentStatus_012.val("Dropout — Confirmed Dropout, plans unknown");
      break;
    case '36':
      $enrollmentStatus_012.val("Dropout — and/or student status/location unknown");
      break;
    case '40':
      $enrollmentStatus_012.val("Not enrolled but receiving special education services only");
      break;
    case '41':
      $enrollmentStatus_012.val("Transferred — no longer receiving special education services only");
      break;
    default:
      $enrollmentStatus_012.val("No value found");
      $enrollmentStatus_012.addClass("noValue");
      break;
  }  
  switch( $firstYearEL_021.val() ) {
    case '00':
      $firstYearEL_021.val("Does not apply");
      break;
    case '01':
      $firstYearEL_021.val("Student in first year of U.S. Schooling");
      break;
    case '02':
      $firstYearEL_021.val("Student not in first year of U.S. Schooling");
      break;
    default:
      $firstYearEL_021.val("No value found");
      $firstYearEL_021.addClass("noValue");
      break;
  }
  switch( $immigrantStatus_022.val() ) {
    case '00':
      $immigrantStatus_022.val("Student is not an immigrant student");
      break;
    case '01':
      $immigrantStatus_022.val("Student is an immigrant student");
      break;
    default:
      $immigrantStatus_022.val("No value found");
      $immigrantStatus_022.addClass("noValue");
      break;
  }
  switch( $isEL_025.val() ) {
    case '00':
      $isEL_025.val("Student is not an English Learner");
      break;
    case '01':
      $isEL_025.val("Student is an English Learner");
      break;
    default:
      $isEL_025.val("No value found");
      $isEL_025.addClass("noValue");
      break;
  }
  switch( $ELStatus_026.val() ) {
    case '00':
      $ELStatus_026.val("Not Enrolled in EL Program");
      break;
    case '01':
      $ELStatus_026.val("Sheltered English Immersion");
      break;
    case '02':
      $ELStatus_026.val("Dual Language Education");
      break;
    case '03':
      $ELStatus_026.val("Other Bilingual Program");
      break;
    case '04':
      $ELStatus_026.val("Consented to opt out of all ELE programs offered in the district");
      break;
    case '05':
      $ELStatus_026.val("Transitional Bilingual Education");
      break;
    default:
      
      $ELStatus_026.val("No value found");
      $ELStatus_026.addClass("noValue");
      break;
  }
  switch( $militaryStat_029.val() ) {
    case '00':
      $militaryStat_029.val("Not a member of a military family");
      break;
    case '01':
      $militaryStat_029.val("Yes, child of active duty member");
      break;
    case '02':
      $militaryStat_029.val("Yes, child of member who was medically discharged or retired in the last year");
      break;
    case '03':
      $militaryStat_029.val("Yes, child of member who perished in the line of duty in the last year");
      break;
    default:
      $militaryStat_029.val("No value found");
      $militaryStat_029.addClass("noValue");
      break;
  }
  switch( $gradPlan_033.val() ) {
    case '01':
      $gradPlan_033.val("Four-Year Public College");
      break;
    case '02':
      $gradPlan_033.val("Two-Year Public College");
      break;
    case '03':
      $gradPlan_033.val("Four-Year Private College");
      break;
    case '04':
      $gradPlan_033.val("Two-Year Private College");
      break;
    case '05':
      $gradPlan_033.val("Other Post Secondary (Trade School)");
      break;
    case '06':
      $gradPlan_033.val("Work");
      break;
    case '07':
      $gradPlan_033.val("Military");
      break;
    case '08':
      $gradPlan_033.val("Other (e.g., travel, family");
      break;
    case '09':
      $gradPlan_033.val("Plans Unknown");
      break;
    case '10':
      $gradPlan_033.val("Registered Apprenticeship");
      break;
    case '500':
      $gradPlan_033.val("Post-Graduate Plans does not apply to this student at this time");
      break;
    default:
      $gradPlan_033.val("No value found");
      $gradPlan_033.addClass("noValue");
      break;
  }
  switch( $coreCompletion_037.val() ) {
    case '00':
      $coreCompletion_037.val("Student is not a graduate");
      break;
    case '01':
      $coreCompletion_037.val("Student graduated and successfully completed the Massachusetts Core Curriculum");
      break;
    case '02':
      $coreCompletion_037.val("Student graduated and did not successfully complete the Massachusetts Core Curriculum");
      break;
    default:
      $coreCompletion_037.val("No value found");
      $coreCompletion_037.addClass("noValue");
      break;
  }
  switch( $504Plan_039.val() ) {
    case '00':
      $504Plan_039.val("Has not been on a 504 plan at all this school year");
      break;
    case '01':
      $504Plan_039.val("Currently on a 504 plan");
      break;
    case '02':
      $504Plan_039.val("Student is not currently on a 504 plan, but was earlier this school year");
      break;
    default:
      $504Plan_039.val("No value found");
      $504Plan_039.addClass("noValue");
      break;
  }
  
  /* Decode ambiguous non-DOE values */
  var $excludeState = $j("#fieldExcludeState");
  var $includeSIMS = $j("#fieldIncludeSIMS");
  var $includeSASID = $j("#fieldIncludeSASID");
  var $entryGrade = $j("#fieldEntryGrade");
  var $title1NCLB = $j("#fieldNCLB"); 
  
  switch( $excludeState.val() ) {
    case 'False':
      $excludeState.val("No, do not exclude from state reporting");
      break;
    case 'True':
      $excludeState.val("Yes, exclude from state reporting");
      break;
    default:
      $excludeState.val("No value found");
      $excludeState.addClass("noValue");
      break;
  }
  switch( $includeSIMS.val() ) {
    case '0':
      $includeSIMS.val("No, do not include in SIMS report");
      break;
    case '1':
      $includeSIMS.val("Yes, include in SIMS report");
      break;
    default:
      $includeSIMS.val("No value found");
      $includeSIMS.addClass("noValue");
      break;
  }
  switch( $includeSASID.val() ) {
    case '0':
      $includeSASID.val("No, do not include in SASID report");
      break;
    case '1':
      $includeSASID.val("Yes, include in SASID report");
      break;
    default:
      $includeSASID.val("No value found");
      $includeSASID.addClass("noValue");
      break;
  }
  switch( $entryGrade.val() ) {
    case '0':
      $entryGrade.val("K");
      break;
    case '-2':
      $entryGrade.val("PK");
      break;
    default:
      $entryGrade.val("No value found");
      $entryGrade.addClass("noValue");
  }
  switch( $title1NCLB.val() ) {
    case '00':
      $title1NCLB.val("Does not apply")
      break;
    case '01':
      $title1NCLB.val("Student transferred from underperforming school")
      break;
    default:
      $title1NCLB.val("No value found")
      $entryGrade.addClass("noValue");
  }
}