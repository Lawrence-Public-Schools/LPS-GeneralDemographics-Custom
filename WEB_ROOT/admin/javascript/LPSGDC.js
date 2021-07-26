/*
  -Insert custom fields & elements from hidden div into Demographics page
*/
function addLPSGDFields() {
  var $trHomePhone =  $j( "form input#fieldHomePhone" ).parent().parent();
  var $trRaceCode = $j( "form td:contains('MA Race Code')" ).parent();
  var $trGradYear = $j( "form input#fieldGradYear" ).parent().parent();
  var $trStuNum = $j( "form input#fieldStuNum" ).parent().parent();
  var $trMomHomePhone = $j( "form input#fieldMotherHomePhone" ).parent().parent();
  var raceCodeViewBtn = '<td><button onclick="location.href=' 
    + "'https://pstest.lawrence.k12.ma.us/admin/students/state/USA_MA/stateMA-SIMS.html?frn=001113601'" 
    + '" class="editButton" type="button">View</button></td>';

    /*================NOTES:======================================================
   -Tables are built bottom-to-top
   -Sections of entirely custom fields are inserted after MA Race Code, just need
      them in the table and don't think original placement matters. Race code 
      defaults to bottom so this should avoid conflicts.
   -Contacts Table is wrapped in a <div>, copied from Contacts page minus 
      certain features.
  ============================================================================*/
  /* 'Student' Fields */
  $trHomePhone.after( $j("div#LPS-GDCustomhiddentable tr#trStudent_LPSEmail") );
  $trHomePhone.after( $j("div#LPS-GDCustomhiddentable tr#trStudent_PersonalEmail") );
  $trHomePhone.after( $j("div#LPS-GDCustomhiddentable tr#trStudent_Mobile") );
  
  /* 'Contacts' Table */
  $trHomePhone.after( $j("div#LPS-GDCustomhiddentable div#demoContactsTable") );
  
  /* 'Ethnicity/Race' Fields */
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trRace_Military") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trRace_BirthCity") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable div#stateIncludeWrapper") );
  $trRaceCode.append( raceCodeViewBtn );
  /*
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trRace_IncludeSASID") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trRace_IncludeSIMS") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trRace_ExcludeState") );  
  */
  
  /* 'Adminstrative' Fields */
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trOffice_504Plan") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trOffice_SPEDCode") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trOffice_FLEPDate") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trOffice_ELCode") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trOffice_SchoolCode") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trOffice_EntryGrade") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trOffice_EntryDate") );
  
  /* 'Graduation' Fields */
  $trGradYear.after( $j("div#LPS-GDCustomhiddentable tr#trGrad_CoreCompletion") );
  $trGradYear.after( $j("div#LPS-GDCustomhiddentable tr#trGrad_Plan") );
  $trGradYear.after( $j("div#LPS-GDCustomhiddentable tr#trGrad_Cohort") );
  $trGradYear.after( $j("div#LPS-GDCustomhiddentable tr#trGrad_Date") );
  
  /* 'Legal' fields */
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trLegal_FullName") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trLegal_Gender") );
  
  /* 'Other' Fields */
  $j( "form input#fieldPrevStuId" ).parent().parent().after( $j("div#LPS-GDCustomhiddentable tr#trselectGradeLvl") );
  $trStuNum.after( $j("div#LPS-GDCustomhiddentable tr#trOther_TeamFlag") );
  $trStuNum.after( $j("div#LPS-GDCustomhiddentable tr#trOther_OriginCountry") );
  $trStuNum.after( $j("div#LPS-GDCustomhiddentable tr#trOther_BirthState") );
  $trStuNum.after( $j("div#LPS-GDCustomhiddentable tr#trOther_TransferFrom") );
  $trStuNum.after( $j("div#LPS-GDCustomhiddentable tr#trOther_EnrollmentStatus") );
  $trStuNum.after( $j("div#LPS-GDCustomhiddentable tr#trOther_IsImmigrant") );
  $trStuNum.after( $j("div#LPS-GDCustomhiddentable tr#trOther_SASID") );
  $trStuNum.after( $j("div#LPS-GDCustomhiddentable tr#trOther_ELStatus") );
  $trStuNum.after( $j("div#LPS-GDCustomhiddentable tr#trOther_IsEL") );
  $trStuNum.after( $j("div#LPS-GDCustomhiddentable tr#trOther_FirstYearEL") );
  $trStuNum.after( $j("div#LPS-GDCustomhiddentable tr#trOther_NCLB") );
  
  /* Navigation Tabs */
  var $navTabs = $j("div#LPS-GDCustomhiddentable div#demoNavTabs");
  $j("div#content-main form").before($navTabs).appendTo($navTabs);
  
  /* Navbar for collapsed view */
  var $navBar = $j("div#LPS-GDCustomhiddentable nav#demoNavBar");
  $navTabs.before($navBar);
  $navTabs.before( $j("div#LPS-GDCustomhiddentable div#navToggleBox") );
  
  /* Style Options Section */
  var $styleOptions = $j("div#LPS-GDCustomhiddentable div#demoStyleOptions");
  $navTabs.before($styleOptions);
  
  /* Comment Box */
  $j("form>div.box-round:first-child").after( $j("#demoComments") );

  $j( "div#LPS-GDCustomhiddentable" ).remove();
}

/*
  -Add LPS classes to PowerSchool default fields
  -Wrap related fields into sections and rebuild table using sections
  -Add sub-section headers
*/
function LPSGDRestyle() {
  /* Student Information
  -----------------Name--------------- */
  $j( "form input#lastName" ).parent().parent().addClass( "row-student student-name" ); /* DOE###: First = 003, Middle = 004, Last = 005*/
  /* ----------Home_Address----------- */
  $j( "form td:contains('Home Address')" ).not("td:contains('Mailing Address')").parent().addClass( "row-student student-address" );
  /*st, apt*/
  $j( "form input#pstreet" ).parent().parent().addClass( "row-student student-address" );
  $j( "form input#papt" ).parent().parent().addClass( "row-student student-address" );
  /*city, state, zip*/
  $j( "form input#pcity" ).parent().parent().addClass( "row-student student-address" ); /* DOE014 */
  $j( "form select#pstate" ).parent().parent().addClass( "row-student student-address" );
  $j( "form input#pzip" ).parent().parent().addClass( "row-student student-address" ); /* DOE051 */
  /*utility*/
  $j( "form input#pgeocode" ).parent().parent().addClass( "row-student student-address" );
  $j( "form span#validatePrimaryAddress" ).parent().parent().addClass( "row-student student-address" );
  /* ---------Mailing_Address--------- */
  $j( "form td:contains('Mailing Address -')" ).parent().addClass( "row-student student-mail" ).removeClass("student-address"); /* Gets class cause it has "Home address" in the field */
  $j( "form td:contains('~[text:psx.html.admin_students.generaldemographics.mailing_address_]')" ).parent().addClass( "row-student student-mail" );
  /*mail(st, apt)*/
  $j( "form input#mstreet" ).parent().parent().addClass( "row-student student-mail" );
  $j( "form input#mapt" ).parent().parent().addClass( "row-student student-mail" );
  /*mail(city, mstate, zip)*/
  $j( "form input#mcity" ).parent().parent().addClass( "row-student student-mail" );
  $j( "form select#mstate" ).parent().parent().addClass( "row-student student-mail" );
  $j( "form input#mzip" ).parent().parent().addClass( "row-student student-mail" );
  /*mail(utility)*/
  $j( "form input#mgeocode" ).parent().parent().addClass( "row-student student-mail" );
  $j( "form span#validateMailingAddress" ).parent().parent().addClass( "row-student student-mail" );
  /* -----------Phone/Email----------- */
  $j( "form input#fieldHomePhone" ).parent().parent().addClass( "row-student student-contactInfo" );
  
  /* Guardian/Contacts Information 
  -------------------------------- */
  $j( "form td#father" ).parent().addClass("row-contacts contacts-parentsOld contacts-fatherOld");
  $j( "form input#fieldFatherDayPhone" ).parent().parent().addClass("row-contacts contacts-parentsOld contacts-fatherOld");
  $j( "form input#fieldFatherHomePhone" ).parent().parent().addClass("row-contacts contacts-parentsOld contacts-fatherOld");
  $j( "form input#fieldFatherEmployer" ).parent().parent().addClass("row-contacts contacts-parentsOld contacts-fatherOld");
  $j( "form td#mother" ).parent().addClass("row-contacts contacts-parentsOld contacts-motherOld");
  $j( "form input#fieldMotherDayPhone" ).parent().parent().addClass("row-contacts contacts-parentsOld contacts-motherOld");
  $j( "form input#fieldMotherHomePhone" ).parent().parent().addClass("row-contacts contacts-parentsOld contacts-motherOld");
  $j( "form input#fieldMotherEmployer" ).parent().parent().addClass("row-contacts contacts-parentsOld contacts-motherOld");
  
  /* Ethnicity/Race/Other State Fields
  -----------Ethnicity_&_Race--------- */
  $j( "form td:contains('Federal Ethnicity and Race')" ).parent().addClass( "row-ethRace ethrace-select" );  /* Federal Ethnicity and Race */
  $j( "form td:contains('Massachusetts State Information')" ).parent().addClass( "row-ethRace ethrace-select" );  /* Massachusetts State Information */
  $j( "form input#radioFedEthYes" ).parent().parent().parent().parent().addClass( "row-ethRace ethrace-select" );  /* DOE010 (Hispanic/Latino) */
  $j( "form input#race_A" ).parent().parent().parent().parent().addClass( "row-ethRace ethrace-select" ); /* DOE010 (Race) */
  $j( "form td:contains('MA Race Code')" ).parent().addClass( "row-ethRace ethrace-select" ); /* DOE010 Race code */
  
  /* 
    LPS Office Information
      - Fields are initialized w/ proper classes 
  */

  /* LPS Graduation
  --------Info----- */
  $j( "form input#fieldGradYear" ).parent().parent().addClass( "row-grad" );
  
  /* Legal Information
  ------Name/Gender------ */
  /* LEGAL FIELDS USING BUILT-IN | Not working (fields are made after page is loaded?) */
  $j("form input#legalLastName").parent().parent().addClass( "row-legal" );
  $j("form select#legalGenderSelect").parent().parent().addClass( "row-legal" );  /* DOE009*/
  
  /* Other-Unused(Builtin)
  -----------Info--------- */
  $j( "form input#fieldArea" ).parent().parent().addClass( "row-other other-builtIn" );
  $j( "form input#fieldGuardianship" ).parent().parent().addClass( "row-other other-builtIn" );
  $j( "form input#fieldSSN" ).parent().parent().addClass( "row-other other-builtIn" );
  $j( "form input#fieldStuNum" ).parent().parent().addClass( "row-other other-builtIn" );  /* DOE001 */
  $j( "form input#fieldPrevStuId" ).parent().parent().addClass( "row-other other-builtIn" );
  $j( "form td:contains('Grade Level')" ).parent().addClass( "row-other other-builtIn" );  /* DOE016 */
  $j( "form input#fieldGuardianEmail" ).parent().parent().addClass( "row-other other-builtIn" );
  $j( "form select#primaryethnicity" ).parent().parent().addClass( "row-other other-builtIn" );
   
  /*============'EVERYTHING ELSE' Catcher============*/
  $VarEverythingElse = $j("form > div.box-round > table.linkDescList > tbody > tr");
  $VarEverythingElse = ($VarEverythingElse).not("form tr.row-student");
  $VarEverythingElse = ($VarEverythingElse).not("form tr.row-contacts");
  $VarEverythingElse = ($VarEverythingElse).not("form tr.row-ethRace");
  $VarEverythingElse = ($VarEverythingElse).not("form tr.row-office");
  $VarEverythingElse = ($VarEverythingElse).not("form tr.row-grad");
  $VarEverythingElse = ($VarEverythingElse).not("form tr.row-legal");
  $VarEverythingElse = ($VarEverythingElse).not("form tr.row-other");
  $VarEverythingElse.addClass( "row-everythingElse" );
  
  /* Wrap Student Section */
  $j("form tr.row-student").wrapAll('<div id="StudentSection" class=""><div class="row"></div></div>'); /* Starts at top */
  /* Wrap Subsections */
  $j("form tr.student-contactInfo:first").before('<tr class="headerrow row-student student-contactInfo"><td colspan="2" class="bold" width="100%">Phone & Email</td></tr>');
  $j("form tr.student-name:first").before('<tr class="headerrow row-student student-name"><td colspan="2" class="bold" width="100%">Name</td></tr>'); /* Currently using static px width, should adjust to be responsive */
  
  /* Wrap 'Everything Else' (fields exist but don't have a section) */
  $VarEverythingElse.wrapAll('<div id="EverythingElseSection" class=""><div class="row"></div></div>'); /* Stack under Student Section */
  $j("form div#EverythingElseSection").insertAfter( $j("form div#StudentSection") );
  /*
    NOTES:
    -Adding a header with fixed width so other rows will fill in table space
    -Probably a lazy way format the page, should change later to be more dynamic
  */
  $j("form .row-everythingElse").children("td:nth-child(2)").attr("width", "75%");
  $VarEverythingElse.first().before('<tr class="headerrow row-everythingElse"><td colspan="2" class="bold" width="100%">Information</td></tr>');
  
  /* Wrap Other Section */
  $j("form tr.row-other").wrapAll('<div id="OtherSection" class=""><div class="row"></div></div>');
  $j("form div#OtherSection").insertAfter( $j("form div#StudentSection") );
  /* Wrap Subsections */
  $j("form tr.row-other:first").before('<tr class="headerrow row-other"><td colspan="2" class="bold" width="100%">Information</td></tr>');
  
  /* Wrap Legal Section */
  $j("form tr.row-legal").wrapAll('<div id="LegalSection" class=""><div class="row"></div></div>');
  $j("form div#LegalSection").insertAfter( $j("form div#StudentSection") );
  /* Wrap Subsections */
  $j("form tr.row-legal:first").before('<tr class="headerrow row-legal"><td colspan="2" class="bold" width="100%">Information</td></tr>');
  
  /* Wrap Grad Section */
  $j("form tr.row-grad").wrapAll('<div id="GradSection" class=""><div class="row"></div></div>');
  $j("form div#GradSection").insertAfter( $j("form div#StudentSection") );
  /* Wrap Subsections */
  $j("form tr.row-grad:first").before('<tr class="headerrow row-grad"><td colspan="2" class="bold" width="100%">Information</td></tr>');
  
  /* Wrap Office Section*/
  $j("form tr.row-office").wrapAll('<div id="OfficeSection" class=""><div class="row"></div></div>');
  $j("form div#OfficeSection").insertAfter( $j("form div#StudentSection") );
  /* Wrap Subsections */
  $j("form tr.office-general:first").before('<tr class="headerrow row-office office-general"><td colspan="2" class="bold" width="100%">District Information</td></tr>');
  $j("form tr.office-el:first").before('<tr class="headerrow row-office office-el"><td colspan="2" class="bold" width="100%">EL Information</td></tr>');
  $j("form tr.office-sped:first").before('<tr class="headerrow row-office office-sped"><td colspan="2" class="bold" width="100%">SPED Information</td></tr>');
  
  /* Wrap Race Section */
  $j("form div#stateIncludeWrapper").wrapAll('<tr class="row-ethRace ethrace-other"><td colspan="2"></td></tr>');
  $j("form tr.row-ethRace").wrapAll('<div id="EthRaceSection" class=""><div class="row"></div></div>');
  $j("form div#EthRaceSection").insertAfter( $j("form div#StudentSection") );
  /* Wrap Subsections */
  $j("form tr.ethrace-select:first").before('<tr class="headerrow row-ethRace ethrace-select"><td colspan="2" class="bold" width="100%">Ethnicity & Race</td></tr>');
  $j("form tr.ethrace-other:first").before('<tr class="headerrow row-ethRace ethrace-other"><td colspan="2" class="bold" width="100%">Other State General</td></tr>');
  
  /* Wrap Contacts Section */
  $j("form div#demoContactsTable").wrapAll('<tr class="row-contacts contacts-table"><td colspan="2"></td></tr>');
  $j("form tr.row-contacts").wrapAll('<div id="ContactsSection" class=""><div class="row"></div></div>');
  $j("form div#ContactsSection").insertAfter( $j("form div#StudentSection") );
  /* Wrap Subsections */
  $j("form tr.contacts-parentsOld:first").before('<tr class="headerrow row-contacts contacts-parentsOld"> <td colspan="2" class="bold" width="100%">Parents - Old (will be phased out)</td> </tr>');
  $j("form tr.contacts-fatherOld:first").before('<tr class="headerrow row-contacts contacts-parentsOld contacts-fatherOld"> <td colspan="2" class="bold" style="background-color:#7ba4b7">Father - Old</td> </tr>');
  $j("form tr.contacts-motherOld:first").before('<tr class="headerrow row-contacts contacts-parentsOld contacts-motherOld"> <td colspan="2" class="bold" style="background-color:#7ba4b7">Mother - Old</td> </tr>');
  
  /* Insert showAll Section (Empty, used for anchor) ~Might just link to StudentSection instead~ */
  //$j('<div id="ShowAll"></div>').insertBefore( $j("form div#StudentSection") );
}

/* 
  Hide all sections except selected, reverts to tabnav form
    - Arg(s)  : Any valid JQuery selector
        Default = "div#StudentSection"
    - Returns : NULL
*/
function toggleDisplayNav() {
  /* JQuery's .css("top", "--px") wouldn't work and this did so I'm using this */
  var navBar = document.getElementById("demoNavBar"); 
  var navToggle = document.getElementById("navToggleBox");
  if(navBar.style.top === "-100px") {
    navBar.style.top = "0px";
    navToggle.style.transition = "top 0.2s ease 0.1s";
    navToggle.style.top = "50px";
    $j("a#toggleNavBar").text("\uD83E\uDC45"); // Up Arrow
  } else {
    navBar.style.top= "-100px";
    navToggle.style.transition = "top 0.15s ease 0s";
    navToggle.style.top = "0px";
    $j("a#toggleNavBar").text("\uD83E\uDC47"); // Down Arrow
  }
}

function hideCollapsed() {
  $j(".collapseHeader").remove();
  $j("#demoNavBar").css("top", "-100px"); // If Im going this way I can probably just dynamically add/remove it instead.
  $j("div#navToggleBox").css( {"transition":"top 0.3s ease 0s","top":"-50px"} );
  $j("#demoNavBar").off();
  $j("#toggleNavBar").off();
  $j('form div[id$="Section"]').removeClass("hide").css("display", "none");
  $j("div#demoNavTabs > ul").prop("hidden", false);
}

/* So this seems to create a copy of the whole page and place it below everything else for some reason, could be a result of bubbling on events? */
/* Adds toggle-collapse headers to sections & activates navbar functions */
function showCollapsed() {
  $j("form div#StudentSection").before('<h2 class="toggle expanded collapseHeader" title="Click here to expand or collapse">Student Information</h2>');
  $j("form div#EverythingElseSection").before('<h2 class="toggle expanded collapseHeader" title="Click here to expand or collapse">Everything Else</h2>');
  $j("form div#OtherSection").before('<h2 class="toggle expanded collapseHeader" title="Click here to expand or collapse">Other</h2>');
  $j("form div#LegalSection").before('<h2 class="toggle expanded collapseHeader" title="Click here to expand or collapse">Legal Information</h2>');
  $j("form div#GradSection").before('<h2 class="toggle expanded collapseHeader" title="Click here to expand or collapse">Graduation Information</h2>');
  $j("form div#OfficeSection").before('<h2 class="toggle expanded collapseHeader" title="Click here to expand or collapse">Administrative Information</h2>');
  $j("form div#EthRaceSection").before('<h2 class="toggle expanded collapseHeader" title="Click here to expand or collapse">Ethnicity/Race Information</h2>');
  $j("form div#ContactsSection").before('<h2 class="toggle expanded collapseHeader" title="Click here to expand or collapse">Contacts</h2>');
  $j("form div").css("display", "block");
  $j("div#demoNavTabs > ul").prop("hidden", true);
  toggleDisplayNav();  
   
  /* Load page with all sections collapsed */
  $j('form > div.box-round > table.linkDescList > tbody > h2').each(function() {
    hideCollapseClasses($j(this));
    hideCollapseText($j(this));
    hideCollapseTarget($j(this));
  });

  /* Add Navbar Event Listeners */
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
      $j('html, body').animate( { scrollTop: $sectionAnchor.offset().top },
        600, function () { window.location.hash = $sectionAnchor.attr('id'); }
      );
    }
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
  /* Toggle NavBar On/Off */
  $j("#toggleNavBar").on('click', function(event) {
    event.preventDefault();
    toggleDisplayNav();
  });
  
  /* Navbar - Slide Down/Up - DEPRECATED: Navbar visibility now tied to "Show All"
  window.onscroll = function navScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $j("nav#demoNavBar").css("top", "0");
    } else {
      $j("nav#demoNavBar").css("top", "-100px");
    }
  };
  */
}

/* 
  -Run LPS customization functions
  -Initialize event listeners
  -Could be replaced by surrounding code in single block
*/
$j(document).ready(function() {
  /* Add LPS customizations to GD page then restyle page with the new elements */
  addLPSGDFields();
  LPSGDRestyle();
  
  /* ----------------Event Listeners---------------- */
  var $viewSelect = $j("select#demoViewStyles");
  var curSection = location.hash.replace("#/","#"); // Cut out '/' because it causes issues
  
  /* View Style Selection */
  $viewSelect.on("change", function(event) {
    switch( $viewSelect.val() ) {
      case 'Tab':
        hideCollapsed();
        if( /#.*Section/.test(location.href) ) {
          $j('div#demoNavTabs a[href="'+ curSection +'"]').click();
        } else {
          $j('div#demoNavTabs a[href="#StudentSection"]').click();
        }
        break;
      case 'Collapse':
        showCollapsed();
        break;
      default:
        hideCollapsed();
        break;
    }
  });
  
  /* 
  ---------Update Sections so they get 'ui-tabs' classes-----------
  -Section <div>s don't receive PS 'ui-tabs' classes until clicked, 
    simulate a click on each tab when page loads then go back to
    default tab ('#StudentSection')
  */
  $j("a.sectTab").click();
  $j('a.sectTab[href="#StudentSection"]').click();
  
  /* Start in Collapsed View */
  showCollapsed();
  
  /* Remove whitespace from field values, lets DOM know when they are empty for CSS */
  $j( "input" ).val(function( index, value ) { return value.trim(); });
  
  /* Translate DOE Codes - 'fieldName_DOE###' (Moved to seperate function for readability) */
  decodeDemoVals();

  /* Comment codes */
  var InstValues= {};
      InstValues[' ']='';
      InstValues['REG']='Registration';
      InstValues['COA']='Change of Address';
      InstValues['PCU']='Program Code Updates';
      InstValues['HOME']='Homeless';
      InstValues['TF']='TransferFrom-Original';
      InstValues['WD']='Withdrawal';
      InstValues['GC']='Grade Change';
      InstValues['RE']='Re-Engaged';
      InstValues['Other']='Other';
});



/* 
  ~ Moved down here because scrolling through it was annoying ~
  -Decode DOE fields + fields w/ ambiguous values
*/
function decodeDemoVals() {
  var $enrollmentStatus_012 = $j("form input#fieldEnrollmentStatus");
  var $firstYearEL_021 = $j("form input#fieldFirstYearEL");
  var $immigrantStatus_022 = $j("form input#fieldImmigrantStatus");
  var $isEL_025 = $j("form input#fieldIsEL");
  var $ELStatus_026 = $j("form input#fieldELStatus");
  var $militaryStat_029 = $j("form input#fieldMilitaryStatus");
  var $gradPlan_033 = $j("form input#fieldGradPlan");
  var $coreCompletion_037 = $j("form input#fieldCoreCompletion");
  var $504Plan_039 = $j("form input#field504Plan");
  
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
  var $excludeState = $j( "form input#fieldExcludeState" );
  var $includeSIMS = $j( "form input#fieldIncludeSIMS" );
  var $includeSASID = $j( "form input#fieldIncludeSASID" );
  var $entryGrade = $j( "form input#fieldEntryGrade" );
  var $title1NCLB = $j( "form input#fieldNCLB" ); 
  
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
/*
 NOTES:
  + Every main section should have a Go to Top/Bottom
	+ Name the Menu Item LPS Demographics
*/