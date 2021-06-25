function AddGDfields(){
  var $trHomePhone =  $j( "form input#fieldHomePhone" ).parent().parent();
  var $trRaceCode = $j( "form td:contains('MA Race Code')" ).parent();
  var $trGradYear = $j( "form input#fieldGradYear" ).parent().parent();
  var $trStuNum = $j( "form input#fieldStuNum" ).parent().parent();
  var $trMomHomePhone = $j( "form input#fieldMotherHomePhone" ).parent().parent();
  /* Tables are built bottom-to-top */
  /* Insert Custom 'Student' Fields */
  $trHomePhone.after( $j("div#LPS-GDCustomhiddentable tr#trStudent_LPSEmail") );
  $trHomePhone.after( $j("div#LPS-GDCustomhiddentable tr#trStudent_PersonalEmail") );
  $trHomePhone.after( $j("div#LPS-GDCustomhiddentable tr#trStudent_Mobile") );
  
  /* Insert Custom 'Contacts' Fields */
  $trMomHomePhone.after( $j("div#LPS-GDCustomhiddentable tr#trContacts_Parents_old") );
  $trMomHomePhone.after( $j("div#LPS-GDCustomhiddentable tr#trContacts_Guardians_old") );
  $trMomHomePhone.after( $j("div#LPS-GDCustomhiddentable tr#trContacts_EmergencyContacts") );
  $trMomHomePhone.after( $j("div#LPS-GDCustomhiddentable tr#trContacts_OtherContacts") );
  
  /* Insert Custom 'Ethnicity/Race' Fields */
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trRace_Military") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trRace_BirthCity") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trRace_IncludeSASID") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trRace_IncludeSIMS") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trRace_ExcludeState") );
  
  /*
    Insert Custom 'Adminstrative' Fields
    NOTES:
      -Tossing rows in after RaceCode, just need them in the table and don't think original placement matters too much 
      -Date fields not showing up
  */
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trOffice_504Plan") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trOffice_SPEDCode") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trOffice_FLEPDate") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trOffice_ELCode") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trOffice_SchoolCode") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trOffice_EntryGrade") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trOffice_EntryDate") );
  
  /* Insert Custom 'Graduation' Fields */
  $trGradYear.after( $j("div#LPS-GDCustomhiddentable tr#trGrad_CoreCompletion") );
  $trGradYear.after( $j("div#LPS-GDCustomhiddentable tr#trGrad_Plan") );
  $trGradYear.after( $j("div#LPS-GDCustomhiddentable tr#trGrad_Cohort") );
  $trGradYear.after( $j("div#LPS-GDCustomhiddentable tr#trGrad_Date") );
  
  /* TODO:Insert Custom 'Legal' fields */
  
  
  /* 
    Insert Custom 'Other' Fields
    NOTES: 
      -Putting 'other-lps' items after 'other-builtIn' items 
  */
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
  
  /* Nav anchors + Expand/Collapse all */
  var stu_header = $j("div#content-main p#student_detail_header");
  var navbar = $j("div#LPS-GDCustomhiddentable nav#demo-navbar");
  stu_header.after(navbar);

  $j( "div#LPS-GDCustomhiddentable" ).remove();
}
    
function LPSGDRestyle() {

  /*              
    Student Information
  -----------------Name--------------- */
  $j( "form input#lastName" ).parent().parent().addClass( "row-student student-name" ); /*First = 003, Middle = 004, Last = 005*/
  /* ----------Home_Address----------- */
  $j( "form td:contains('Home Address')" ).not("td:contains('Mailing Address')").parent().addClass( "row-student student-address" );
  //$j( "form td:contains('~[text:psx.html.admin_students.generaldemographics.home_address]')" ).not("td:contains('Mailing Address')").parent().addClass( "row-student student-address" );
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
  $j( "form tr#trStudent_Mobile" ).addClass( "row-student student-contactInfo" );
  $j( "form tr#trStudent_PersonalEmail" ).addClass( "row-student student-contactInfo" );
  $j( "form tr#trStudent_LPSEmail" ).addClass( "row-student student-contactInfo" );
  
  /* Guardian/Contacts Information 
  -------------------------------- */
  /*$( "input #" ).parent().parent().addClass( "row-contacts" )
  /*
    TODO: Fields Needed
      -Contacts
      -Emergency Contacts
      -Original Guardian 1 (old)
      -Original Guardian 2 (old)
      -Original Demo Father (old)
      -Original Demo Mother (old)
  */
  $j( "form tr#trContacts_Parents_old" ).addClass( "row-contacts contacts-parents" );
  $j( "form tr#trContacts_Guardians_old" ).addClass( "row-contacts contacts-guardians" );
  $j( "form tr#trContacts_EmergencyContacts" ).addClass( "row-contacts contacts-emergency" );
  $j( "form tr#trContacts_OtherContacts" ).addClass( "row-contacts contacts-std" );
  
  /* Ethnicity/Race/Other State Fields
  -----------Ethnicity_&_Race---------DOE[008, 010, 029]
    Notes:
      -Two 'type = "hidden"' inputs above race selection box:
        ids = "hiddenFieldSaveRace", "r_none_storage"
      -Ethnicity & Race selections are nested in two <div> elements
        .parent() x2
  */
  $j( "form td:contains('Federal Ethnicity and Race')" ).parent().addClass( "row-ethRace ethrace-select" );  /* Federal Ethnicity and Race */
  $j( "form td:contains('Massachusetts State Information')" ).parent().addClass( "row-ethRace ethrace-select" );  /* Massachusetts State Information */
  $j( "form input#radioFedEthYes" ).parent().parent().parent().parent().addClass( "row-ethRace ethrace-select" );  /* DOE010 (Hispanic/Latino) */
  $j( "form input#race_A" ).parent().parent().parent().parent().addClass( "row-ethRace ethrace-select" ); /* DOE010 (Race) */
  $j( "form td:contains('MA Race Code')" ).parent().addClass( "row-ethRace ethrace-select" ); /* DOE010 Race code (could be autoCalculated from two fields above?)  */
  /* -------Other_State_General------- */
  $j( "form tr#trRace_ExcludeState" ).addClass( "row-ethRace ethrace-other" );
  $j( "form tr#trRace_IncludeSIMS" ).addClass( "row-ethRace ethrace-other" );
  $j( "form tr#trRace_IncludeSASID" ).addClass( "row-ethRace ethrace-other" );
  $j( "form tr#trRace_BirthCity" ).addClass( "row-ethRace ethrace-other" );  /* DOE008 */
  $j( "form tr#trRace_Military" ).addClass( "row-ethRace ethrace-other" );  /* DOE029 */
  
  /* LPS Office Information
  --------General_Info----- */
  $j( "form tr#trOffice_EntryDate" ).addClass( "row-office office-general" );
  $j( "form tr#trOffice_EntryGrade" ).addClass( "row-office office-general" ); 
  $j( "form tr#trOffice_SchoolCode" ).addClass( "row-office office-general" ); /* DOE015 */
  /* -------EL_Info-------- */
  $j( "form tr#trOffice_ELCode" ).addClass( "row-office office-el" ); /* DOE027 or 24? maybe 41? */
  $j( "form tr#trOffice_FLEPDate" ).addClass( "row-office office-el" );
  /* ------SPED_Info------- */
  $j( "form tr#trOffice_SPEDCode" ).addClass( "row-office office-sped" ); /* DOE032, 34, 36, 38, or 40? */
  $j( "form tr#trOffice_504Plan" ).addClass( "row-office office-sped" ); /* DOE039 */
  
  /* LPS Graduation
  --------Info----- */
  $j( "form input#Grad_Year" ).parent().parent().addClass( "row-grad" );
  $j( "form tr#trGrad_CoreCompletion" ).addClass( "row-grad" ); /* DOE037 */
  $j( "form tr#trGrad_Plan" ).addClass( "row-grad" ); /* DOE033 */
  $j( "form tr#trGrad_Cohort" ).addClass( "row-grad" );
  $j( "form tr#trGrad_Date" ).addClass( "row-grad" );
  
  /* Legal Information
  ------Name/Gender------ */
  /*legal name*/
  $j("input#legalLastName").parent().parent().addClass( "row-legal" );
  $j("input#legalFirstName").parent().parent().addClass( "row-legal" );
  $j("input#legalMiddleName").parent().parent().addClass( "row-legal" );
  $j("input#legalSuffixTextInput").parent().parent().addClass( "row-legal" );
  /*legal gender*/
  $j("select#legalGenderSelect").parent().parent().addClass( "row-legal" );  /* DOE009*/
  
  /* Other-Unused(Builtin)
  -----------Info--------- */
  $j( "form input#fieldArea" ).parent().parent().addClass( "row-other other-builtIn" );
  $j( "form input#fieldGuardianship" ).parent().parent().addClass( "row-other other-builtIn" );
  $j( "form input#fieldSSN" ).parent().parent().addClass( "row-other other-builtIn" );
  $j( "form input#fieldStuNum" ).parent().parent().addClass( "row-other other-builtIn" );  /* DOE001 */
  $j( "form input#fieldPrevStuId" ).parent().parent().addClass( "row-other other-builtIn" );
  $j( "form tr#trOther_GradeLvl" ).addClass( "row-other other-builtIn" );  /* DOE016 */
  $j( "form input#fieldGuardianEmail" ).parent().parent().addClass( "row-other other-builtIn" );
  $j( "form select#primaryethnicity" ).parent().parent().addClass( "row-other other-builtIn" );
  
  /* Other-Unused(LPS)
  ---------Info------- */
  /* $j( "form tr#trselectNCLB" ).addClass( "row-other other-lps" ); */
  $j( "form tr#trOther_FirstYearEL" ).addClass( "row-other other-lps" );  /* DOE021 */
  $j( "form tr#trOther_IsEL" ).addClass( "row-other other-lps" );  /* DOE025 */
  $j( "form tr#trOther_ELStatus" ).addClass( "row-other other-lps" );  /* DOE026 */
  $j( "form tr#trOther_SASID" ).addClass( "row-other other-lps" );  /* DOE002 */
  $j( "form tr#trOther_IsImmigrant" ).addClass( "row-other other-lps" );  /* DOE022 */
  $j( "form tr#trOther_EnrollmentStatus" ).addClass( "row-other other-lps" );  /* DOE012 */
  $j( "form tr#trOther_TransferFrom" ).addClass( "row-other other-lps" );  
  $j( "form tr#trOther_BirthState" ).addClass( "row-other other-lps" );  
  $j( "form tr#trOther_OriginCountry" ).addClass( "row-other other-lps" );  /* DOE023 */
  $j( "form tr#trOther_TeamFlag" ).addClass( "row-other other-lps" );
  
  /*
    TODO: Fields Needed
      -NCLB/Title I School Choice (Row 1)
  */
   
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
  $j("form tr.row-student").wrapAll('<div id="StudentSection" class="" width="100%"><div class="row" width="100%"></div></div>'); /* Starts at top */
  $j("form div#StudentSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Student Information</h2>');
  /* Wrap Subsections */
  $j("form tr.student-contactInfo:first").before('<tr class="headerrow row-student student-contactInfo" width="100%"><td colspan="2" class="bold" width="1920px">Phone & Email</td></tr>');
  $j("form tr.student-name:first").before('<tr class="headerrow row-student student-name" width="100%"><td colspan="2" class="bold" width="1920px">Name</td></tr>'); /* Currently using static px width, should adjust to be responsive */
  
  /* Wrap 'Everything Else' (fields exist but don't have a section) */
  $VarEverythingElse.wrapAll('<div id="EverythingElseSection" class=""><div class="row"></div></div>'); /* Stack under Student Section */
  $j("div#EverythingElseSection").insertAfter( $j("form div#StudentSection") );
  $j("div#EverythingElseSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Everything Else</h2>');
  
  /* Wrap Other Section */
  $j("form tr.row-other").wrapAll('<div id="OtherSection" class=""><div class="row"></div></div>');
  $j("div#OtherSection").insertAfter( $j("form div#StudentSection") );
  $j("div#OtherSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Other</h2>');
  /* Wrap Subsections */
  $j("tr.row-other:first").before('<tr class="headerrow row-other"><td colspan="2" class="bold" width="1920px">Information</td></tr>');
  
  /* Wrap Legal Section */
  $j("form tr.row-legal").wrapAll('<div id="LegalSection" class=""><div class="row"></div></div>');
  $j("div#LegalSection").insertAfter( $j("form div#StudentSection") );
  $j("div#LegalSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Legal Information</h2>');
  /* Wrap Subsections */
  
  /* Wrap Grad Section */
  $j("form tr.row-grad").wrapAll('<div id="GradSection" class=""><div class="row"></div></div>');
  $j("div#GradSection").insertAfter( $j("form div#StudentSection") );
  $j("div#GradSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Graduation Information</h2>');
  /* Wrap Subsections */
  $j("tr.row-grad:first").before('<tr class="headerrow row-grad"><td colspan="2" class="bold" width="1920px">Information</td></tr>');
  
  /* Wrap Office Section*/
  $j("form tr.row-office").wrapAll('<div id="OfficeSection" class=""><div class="row"></div></div>');
  $j("form div#OfficeSection").insertAfter( $j("form div#StudentSection") );
  $j("form div#OfficeSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Administrative Information</h2>');
  /* Wrap Subsections */
  $j("form tr.office-general:first").before('<tr class="headerrow row-office office-general"><td colspan="2" class="bold" width="1920px">District Information</td></tr>');
  $j("form tr.office-el:first").before('<tr class="headerrow row-office office-el"><td colspan="2" class="bold" width="1920px">EL Information</td></tr>');
  $j("form tr.office-sped:first").before('<tr class="headerrow row-office office-sped"><td colspan="2" class="bold" width="1920px">SPED Information</td></tr>');
  
  /* Wrap Race Section */
  $j("form tr.row-ethRace").wrapAll('<div id="EthRaceSection" class=""><div class="row"></div></div>');
  $j("form div#EthRaceSection").insertAfter( $j("form div#StudentSection") );
  $j("form div#EthRaceSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Ethnicity/Race Information</h2>');
  /* Wrap Subsections */
  $j("form tr.ethrace-select:first").before('<tr class="headerrow row-ethRace ethrace-select"><td colspan="2" class="bold" width="1920px">Ethnicity & Race</td></tr>');
  $j("form tr.ethrace-other:first").before('<tr class="headerrow row-ethRace ethrace-other"><td colspan="2" class="bold" width="1920px">Other State General</td></tr>');
  
  /* Wrap Contacts Section */
  $j("form tr.row-contacts").wrapAll('<div id="ContactsSection" class=""><div class="row"></div></div>');
  $j("form div#ContactsSection").insertAfter( $j("form div#StudentSection") );
  $j("form div#ContactsSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Contacts</h2>');
  /* Wrap Subsections */
  $j("form tr.contacts-std:first").before( '<tr class="headerrow row-contacts contacts-std"> <td></td> <td class="bold">Contact 1</td> <td class="bold">Contact 2</td> </tr>');
  $j("form tr.contacts-emergency:first").before('<tr class="headerrow row-contacts contacts-emergency"> <td></td> <td class="bold">E-Contact 1</td> <td class="bold">E-Contact 2</td> </tr>');
  $j("form tr.contacts-guardians:first").before('<tr class="headerrow row-contacts contacts-guardians"> <td></td> <td class="bold">Guardian 1</td> <td class="bold">Guardian 2</td> </tr>');
  $j("form tr.contacts-parents:first").before('<tr class="headerrow row-contacts contacts-parents"> <td></td> <td class="bold">Father</td> <td class="bold">Mother</td> </tr>');
  
  /* Navbar - Section Links */
  $j(".sectLink").on('click', function(event) {
    /* Check for hash(anchor link) value NOTE: this.hash returns part of URL beginning with '#' aka the id of the linked element */
    if (this.hash !== "") {
      event.preventDefault();
      var sectionAnchor = this.hash;
      
      if ( $j(sectionAnchor).hasClass("hide") ) {
        $j(sectionAnchor).prev().toggleClass("collapsed expanded");
        $j(sectionAnchor).toggleClass("hide");
      }
      if ( $j(sectionAnchor).length < 1 ) {
        alert("Error: Section " + sectionAnchor + " does not exist");
        return false;
      }
      
      /* Animate smooth scroll + add hash (#) to URL when done (default click behavior) */
      $j('html, body').animate( { scrollTop: $j(sectionAnchor).offset().top },
        800, function () { window.location.hash = sectionAnchor; }
      );
    }
  });
  /* Navbar - Expand All */
  $j("#expandAll").on('click', function(event) {
    $j(".sectLink").each( function(index, elmnt) {
      var $section = $j(elmnt.hash);
      $section.removeClass("hide");
      $section.prev().removeClass("collapsed").addClass("expanded");
    });
  });
  /* Navbar - Collapse All */
  $j("#collapseAll").on('click', function(event) {
    $j(".sectLink").each( function(index, elmnt) {
      var $section = $j(elmnt.hash);
      $section.addClass("hide");
      $section.prev().removeClass("expanded").addClass("collapsed");
    });
  });
  /* Navbar - Slide Down/Up */
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("demo-navbar").style.top = "0";
    } else {
      document.getElementById("demo-navbar").style.top = "-100px";
    }
  };
  
  /* Translate DOE Codes ('fieldName_DOE###') */
  var $enrollmentStatus_012 = $j("form input#fieldEnrollmentStatus");
  var $firstYearEL_021 = $j("form input#fieldFirstYearEL");
  var $ELStatus_026 = $j("form input#fieldELStatus");
  var $militaryStat_029 = $j("form input#fieldMilitaryStatus");
  var $gradPlan_033 = $j("form input#fieldGradPlan");
  var $coreCompletion_037 = $j("form input#fieldCoreCompletion");
  var $504Plan_039 = $j("form input#field504Plan");
  
  switch($enrollmentStatus_012.val()) {
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
      break;
  }  
  switch($firstYearEL_021.val()) {
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
      break;
  }
  switch($ELStatus_026.val()) {
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
      break;
  }
  switch($militaryStat_029.val()) {
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
      break;
  }
  switch($gradPlan_033.val()) {
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
      break;
  }
  switch($coreCompletion_037.val()) {
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
      break;
  }
  switch($504Plan_039.val()) {
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
      break;
  }
  
  /* Start page with all sections collapsed */
  $j('form > div.box-round > table.linkDescList > tbody > h2').each(function() {
    hideCollapseClasses($j(this));
    hideCollapseText($j(this));
    hideCollapseTarget($j(this));
  } );

}

$j(document).ready(AddGDfields);
$j(document).ready(LPSGDRestyle);

/*
 NOTES:
  + Every main section should have a Go to Top/Bottom
	+ Name the Menu Item LPS Demographics
*/
