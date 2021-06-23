function AddGDfields(){
  var $trHomePhone =  $j( "input#fieldHomePhone" ).parent().parent();
  var $trRaceCode = $j( "td:contains('MA Race Code')" ).parent();
  var $trGradYear = $j( "input#fieldGradYear" ).parent().parent();
  var $trStuNum = $j( "input#fieldStuNum" ).parent().parent();
  var $trMomHomePhone = $j( "input#fieldMotherHomePhone" ).parent().parent();
  /* Tables are built bottom-to-top */
  /* Insert Custom 'Student' Fields */
  $trHomePhone.after( $j("tr#trfieldStudent_LPSemail") );
  $trHomePhone.after( $j("tr#trfieldStudent_Personalemail") );
  $trHomePhone.after( $j("tr#trfieldStudent_Mobile") );
  
  /* Insert Custom 'Contacts' Fields */
  $trMomHomePhone.after( $j("tr#trfieldParents_old") );
  $trMomHomePhone.after( $j("tr#trfieldGuardians_old") );
  $trMomHomePhone.after( $j("tr#trfieldEmergencyContacts") );
  $trMomHomePhone.after( $j("tr#trfieldContacts") );
  
  /* Insert Custom 'Ethnicity/Race' Fields */
  $trRaceCode.after( $j("tr#trselectMilitary") );
  $trRaceCode.after( $j("tr#trfieldBirthCity") );
  $trRaceCode.after( $j("tr#trcheckboxIncludeSASID") );
  $trRaceCode.after( $j("tr#trcheckboxIncludeSIMS") );
  $trRaceCode.after( $j("tr#trcheckboxExcludeState") );
  
  /*
    Insert Custom 'Adminstrative' Fields
    NOTES:
      -Tossing rows in after RaceCode, just need them in the table and don't think original placement matters too much 
      -Date fields not showing up
  */
  $trRaceCode.after( $j("tr#trselect504") );
  $trRaceCode.after( $j("tr#trfieldSPEDCode") );
  $trRaceCode.after( $j("tr#trfieldFLEPDate") );
  $trRaceCode.after( $j("tr#trfieldELCode") );
  $trRaceCode.after( $j("tr#trfieldSchoolCode") );
  $trRaceCode.after( $j("tr#trselectEntryGrade") );
  $trRaceCode.after( $j("tr#trfieldEntryDate") );
  
  /* Insert Custom 'Graduation' Fields */
  $trGradYear.after( $j("tr#trselectGradCoreCompletion") );
  $trGradYear.after( $j("tr#trselectGradPlan") );
  $trGradYear.after( $j("tr#trfieldCohort") );
  $trGradYear.after( $j("tr#trfieldGradDate") );
  
  /* TODO:Insert Custom 'Legal' fields */
  
  
  /* 
    Insert Custom 'Other' Fields
    NOTES: 
      -Putting 'other-lps' items after 'other-builtIn' items 
  */
  $j( "input#fieldPrevStuId" ).parent().parent().after( $j("tr#trselectGradeLvl") );
  $trStuNum.after( $j("tr#trselectTeamFlag") );
  $trStuNum.after( $j("tr#trselectOriginCountry") );
  $trStuNum.after( $j("tr#trselectBirthState") );
  $trStuNum.after( $j("tr#trfieldTransferFrom") );
  $trStuNum.after( $j("tr#trselectEnrollmentStatus") );
  $trStuNum.after( $j("tr#trcheckboxIsImmigrant") );
  $trStuNum.after( $j("tr#trfieldSASID") );
  $trStuNum.after( $j("tr#trselectELStatus") );
  $trStuNum.after( $j("tr#trcheckboxIsEL") );
  $trStuNum.after( $j("tr#trselectFirstYearEL") );
  
  /* Nav anchors + Expand/Collapse all */
  var stu_header = document.getElementById("student_detail_header");
  var navbar = document.getElementById("demo-navbar");
  stu_header.insertAdjacentElement("afterend", navbar);

  $j( "div#LPS-GDCustomhiddentable" ).remove();
}
    
function LPSGDRestyle() {

  /*              
    Student Information
  -----------------Name--------------- */
  $j( "input#lastName" ).parent().parent().addClass( "trsectionStudent student-name" ); /*First = 003, Middle = 004, Last = 005*/
  /* ----------Home_Address----------- */
  $j( "td:contains('Home Address')" ).not("td:contains('Mailing Address')").parent().addClass( "trsectionStudent student-address" );
  //$j( "td:contains('~[text:psx.html.admin_students.generaldemographics.home_address]')" ).not("td:contains('Mailing Address')").parent().addClass( "trsectionStudent student-address" );
  /*st, apt*/
  $j( "input#pstreet" ).parent().parent().addClass( "trsectionStudent student-address" );
  $j( "input#papt" ).parent().parent().addClass( "trsectionStudent student-address" );
  /*city, state, zip*/
  $j( "input#pcity" ).parent().parent().addClass( "trsectionStudent student-address" ); /* DOE014 */
  $j( "select#pstate" ).parent().parent().addClass( "trsectionStudent student-address" );
  $j( "input#pzip" ).parent().parent().addClass( "trsectionStudent student-address" ); /* DOE051 */
  /*utility*/
  $j( "input#pgeocode" ).parent().parent().addClass( "trsectionStudent student-address" );
  $j( "span#validatePrimaryAddress" ).parent().parent().addClass( "trsectionStudent student-address" );
  /* ---------Mailing_Address--------- */
  $j( "td:contains('Mailing Address -')" ).parent().addClass( "trsectionStudent student-mail" ).removeClass("student-address"); /* Gets class cause it has "Home address" in the field */
  $j( "td:contains('~[text:psx.html.admin_students.generaldemographics.mailing_address_]')" ).parent().addClass( "trsectionStudent student-mail" );
  /*mail(st, apt)*/
  $j( "input#mstreet" ).parent().parent().addClass( "trsectionStudent student-mail" );
  $j( "input#mapt" ).parent().parent().addClass( "trsectionStudent student-mail" );
  /*mail(city, mstate, zip)*/
  $j( "input#mcity" ).parent().parent().addClass( "trsectionStudent student-mail" );
  $j( "select#mstate" ).parent().parent().addClass( "trsectionStudent student-mail" );
  $j( "input#mzip" ).parent().parent().addClass( "trsectionStudent student-mail" );
  /*mail(utility)*/
  $j( "input#mgeocode" ).parent().parent().addClass( "trsectionStudent student-mail" );
  $j( "span#validateMailingAddress" ).parent().parent().addClass( "trsectionStudent student-mail" );
  /* -----------Phone/Email----------- */
  $j( "input#fieldHomePhone" ).parent().parent().addClass( "trsectionStudent student-contactInfo" );
  $j( "tr#trfieldStudent_Mobile" ).addClass( "trsectionStudent student-contactInfo" );
  $j( "tr#trfieldStudent_Personalemail" ).addClass( "trsectionStudent student-contactInfo" );
  $j( "tr#trfieldStudent_LPSemail" ).addClass( "trsectionStudent student-contactInfo" );
  
  /* Guardian/Contacts Information 
  -------------------------------- */
  /*$( "input #" ).parent().parent().addClass( "trsectionContacts" )
  /*
    TODO: Fields Needed
      -Contacts
      -Emergency Contacts
      -Original Guardian 1 (old)
      -Original Guardian 2 (old)
      -Original Demo Father (old)
      -Original Demo Mother (old)
  */
  $j( "tr#trfieldParents_old" ).addClass( "trsectionContacts contacts-parents" );
  $j( "tr#trfieldGuardians_old" ).addClass( "trsectionContacts contacts-guardians" );
  $j( "tr#trfieldEmergencyContacts" ).addClass( "trsectionContacts contacts-emergency" );
  $j( "tr#trfieldContacts" ).addClass( "trsectionContacts contacts-std" );
  
  /* Ethnicity/Race/Other State Fields
  -----------Ethnicity_&_Race---------DOE[008, 010, 029]
    Notes:
      -Two 'type = "hidden"' inputs above race selection box:
        ids = "hiddenFieldSaveRace", "r_none_storage"
      -Ethnicity & Race selections are nested in two <div> elements
        .parent() x2
  */
  $j( "input#radioFedEthYes" ).parent().parent().parent().parent().addClass( "trsectionEthRace ethrace-select" );  /* DOE010 (Hispanic/Latino) */
  $j( "input#race_A" ).parent().parent().parent().parent().addClass( "trsectionEthRace ethrace-select" ); /* DOE010 (Race) */
  $j( "td:contains('MA Race Code')" ).parent().addClass( "trsectionEthRace ethrace-select" ); /* DOE010 Race code (could be autoCalculated from two fields above?)  */
  /* -------Other_State_General------- */
  $j( "tr#trcheckboxExcludeState" ).addClass( "trsectionEthRace ethrace-other" );
  $j( "tr#trcheckboxIncludeSIMS" ).addClass( "trsectionEthRace ethrace-other" );
  $j( "tr#trcheckboxIncludeSASID" ).addClass( "trsectionEthRace ethrace-other" );
  $j( "tr#trfieldBirthCity" ).addClass( "trsectionEthRace ethrace-other" );  /* DOE008 */
  $j( "tr#trselectMilitary" ).addClass( "trsectionEthRace ethrace-other" );  /* DOE029 */
  
  /* LPS Office Information
  --------General_Info----- */
  $j( "tr#trfieldEntryDate" ).addClass( "trsectionOffice office-general" );
  $j( "tr#trselectEntryGrade" ).addClass( "trsectionOffice office-general" ); 
  $j( "tr#trfieldSchoolCode" ).addClass( "trsectionOffice office-general" ); /* DOE015 */
  /* -------EL_Info-------- */
  $j( "tr#trfieldELCode" ).addClass( "trsectionOffice office-el" ); /* DOE027 or 24? maybe 41? */
  $j( "tr#trfieldFLEPDate" ).addClass( "trsectionOffice office-el" );
  /* ------SPED_Info------- */
  $j( "tr#trfieldSPEDCode" ).addClass( "trsectionOffice office-sped" ); /* DOE032, 34, 36, 38, or 40? */
  $j( "tr#trselect504" ).addClass( "trsectionOffice office-sped" ); /* DOE039 */
  
  /* LPS Graduation
  --------Info----- */
  $j( "input#fieldGradYear" ).parent().parent().addClass( "trsectionGrad" );
  $j( "tr#trselectGradCoreCompletion" ).addClass( "trsectionGrad" ); /* DOE037 */
  $j( "tr#trselectGradPlan" ).addClass( "trsectionGrad" ); /* DOE033 */
  $j( "tr#trfieldCohort" ).addClass( "trsectionGrad" );
  $j( "tr#trfieldGradDate" ).addClass( "trsectionGrad" );
  
  /* Legal Information
  ------Name/Gender------ */
  /*legal name*/
  $j("input#legalLastName").parent().parent().addClass( "trsectionLegal" );
  $j("input#legalFirstName").parent().parent().addClass( "trsectionLegal" );
  $j("input#legalMiddleName").parent().parent().addClass( "trsectionLegal" );
  $j("input#legalSuffixTextInput").parent().parent().addClass( "trsectionLegal" );
  /*legal gender*/
  $j("select#legalGenderSelect").parent().parent().addClass( "trsectionLegal" );  /* DOE009*/
  
  /* Other-Unused(Builtin)
  -----------Info--------- */
  $j( "input#fieldArea" ).parent().parent().addClass( "trsectionOther other-builtIn" );
  $j( "input#fieldGuardianship" ).parent().parent().addClass( "trsectionOther other-builtIn" );
  $j( "input#fieldSSN" ).parent().parent().addClass( "trsectionOther other-builtIn" );
  $j( "input#fieldStuNum" ).parent().parent().addClass( "trsectionOther other-builtIn" );  /* DOE001 */
  $j( "input#fieldPrevStuId" ).parent().parent().addClass( "trsectionOther other-builtIn" );
  $j( "tr#trselectGradeLvl" ).addClass( "trsectionOther other-builtIn" );  /* DOE016 */
  $j( "input#fieldGuardianEmail" ).parent().parent().addClass( "trsectionOther other-builtIn" );
  $j( "select#primaryethnicity" ).parent().parent().addClass( "trsectionOther other-builtIn" );
  
  /* Other-Unused(LPS)
  ---------Info------- */
  /* $j( "tr#trselectNCLB" ).addClass( "trsectionOther other-lps" ); */
  $j( "tr#trselectFirstYearEL" ).addClass( "trsectionOther other-lps" );  /* DOE021 */
  $j( "tr#trcheckboxIsEL" ).addClass( "trsectionOther other-lps" );  /* DOE025 */
  $j( "tr#trselectELStatus" ).addClass( "trsectionOther other-lps" );  /* DOE026 */
  $j( "tr#trfieldSASID" ).addClass( "trsectionOther other-lps" );  /* DOE002 */
  $j( "tr#trcheckboxIsImmigrant" ).addClass( "trsectionOther other-lps" );  /* DOE022 */
  $j( "tr#trselectEnrollmentStatus" ).addClass( "trsectionOther other-lps" );  /* DOE012 */
  $j( "tr#trfieldTransferFrom" ).addClass( "trsectionOther other-lps" );  
  $j( "tr#trselectBirthState" ).addClass( "trsectionOther other-lps" );  
  $j( "tr#trselectOriginCountry" ).addClass( "trsectionOther other-lps" );  /* DOE023 */
  $j( "tr#trselectTeamFlag" ).addClass( "trsectionOther other-lps" );
  
  /*
    TODO: Fields Needed
      -NCLB/Title I School Choice (Row 1)
  */
   
  /*============'EVERYTHING ELSE' Catcher============*/
  $VarEverythingElse = $j("form > div.box-round > table.linkDescList > tbody > tr");
  $VarEverythingElse = ($VarEverythingElse).not("tr.trsectionStudent");
  $VarEverythingElse = ($VarEverythingElse).not("tr.trsectionContacts");
  $VarEverythingElse = ($VarEverythingElse).not("tr.trsectionEthRace");
  $VarEverythingElse = ($VarEverythingElse).not("tr.trsectionOffice");
  $VarEverythingElse = ($VarEverythingElse).not("tr.trsectionGrad");
  $VarEverythingElse = ($VarEverythingElse).not("tr.trsectionLegal");
  $VarEverythingElse = ($VarEverythingElse).not("tr.trsectionOther");
  $VarEverythingElse.addClass( "trsectionEverythingElse" );
  
  /* Wrap Student Section */
  $j("tr.trsectionStudent").wrapAll('<div id="StudentSection" class=""><div class="row"></div></div>'); /* Starts at top */
  $j("div#StudentSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Student Information</h2>');
  /* Wrap Subsections */
  $j("tr.student-contactInfo:first").before('<tr class="headerrow trsectionStudent student-contactInfo"><td colspan="2" class="bold">Phone & Email</td></tr>');
  $j("tr.student-name:first").before('<tr class="headerrow trsectionStudent student-name"><td colspan="2" class="bold">Name</td></tr>');
  
  
  /* Backup headers
  $j("tr.student-name").wrapAll('<div id="student-name" class=""><div class="row"></div></div>');
  $j("div#student-name").before('<h2 class="toggle expanded" title="Click here to expand or collapse" style="">Name</h2>');
  $j("tr.student-address").wrapAll('<div id="student-address" class=""><div class="row"></div></div>');
  $j("div#student-address").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Home Address</h2>');
  $j("tr.student-mail").wrapAll('<div id="student-mail" class=""><div class="row"></div></div>');
  $j("div#student-mail").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Mailing Address</h2>');
  $j("tr.student-contactInfo").wrapAll('<div id="student-contactInfo" class=""><div class="row"></div></div>');
  $j("div#student-contactInfo").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Phone & Email</h2>');
  */
  /* 
    Home address row still shows up twice at bottom, don't know how they work.
      Possible Solution: Remove 'student-address' class from headerrows and select $j( "td.student-address:contains('Home Address')" )
  */
  
  /* Wrap 'Everything Else' (fields that exist but haven't been given a proper section) */
  $VarEverythingElse.wrapAll('<div id="EverythingElseSection" class=""><div class="row"></div></div>'); /* Build bottom-to-top */
  $j("div#EverythingElseSection").insertAfter( $j("div#StudentSection") );
  $j("div#EverythingElseSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Everything Else</h2>');
  /* Wrap Subsections */
  
  
  /* Wrap Other Section */
  $j("tr.trsectionOther").wrapAll('<div id="OtherSection" class=""><div class="row"></div></div>');
  $j("div#OtherSection").insertAfter( $j("div#StudentSection") );
  $j("div#OtherSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Other</h2>');
  /* Wrap Subsections */
  $j("tr.trsectionOther:first").before('<tr class="headerrow trsectionOther"><td colspan="2" class="bold">Information</td></tr>');
  
  /* Wrap Legal Section */
  $j("tr.trsectionLegal").wrapAll('<div id="LegalSection" class=""><div class="row"></div></div>');
  $j("div#LegalSection").insertAfter( $j("div#StudentSection") );
  $j("div#LegalSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Legal Information</h2>');
  /* Wrap Subsections */
  
  /* Wrap Grad Section */
  $j("tr.trsectionGrad").wrapAll('<div id="GradSection" class=""><div class="row"></div></div>');
  $j("div#GradSection").insertAfter( $j("div#StudentSection") );
  $j("div#GradSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Graduation Information</h2>');
  /* Wrap Subsections */
  $j("tr.trsectionGrad:first").before('<tr class="headerrow trsectionGrad"><td colspan="2" class="bold">Information</td></tr>');
  
  /* Wrap Office Section*/
  $j("tr.trsectionOffice").wrapAll('<div id="OfficeSection" class=""><div class="row"></div></div>');
  $j("div#OfficeSection").insertAfter( $j("div#StudentSection") );
  $j("div#OfficeSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Administrative Information</h2>');
  /* Wrap Subsections */
  $j("tr.office-general:first").before('<tr class="headerrow trsectionOffice office-general"><td colspan="2" class="bold">District Information</td></tr>');
  $j("tr.office-el:first").before('<tr class="headerrow trsectionOffice office-el"><td colspan="2" class="bold">EL Information</td></tr>');
  $j("tr.office-sped:first").before('<tr class="headerrow trsectionOffice office-sped"><td colspan="2" class="bold">SPED Information</td></tr>');
  
  /* Wrap Race Section */
  $j("tr.trsectionEthRace").wrapAll('<div id="EthRaceSection" class=""><div class="row"></div></div>');
  $j("div#EthRaceSection").insertAfter( $j("div#StudentSection") );
  $j("div#EthRaceSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Ethnicity/Race Information</h2>');
  /* Wrap Subsections */
  $j("tr.ethrace-select:first").before('<tr class="headerrow trsectionEthRace ethrace-select"><td colspan="2" class="bold">Ethnicity & Race</td></tr>');
  $j("tr.ethrace-other:first").before('<tr class="headerrow trsectionEthRace ethrace-other"><td colspan="2" class="bold">Other State General</td></tr>');
  
  /* Wrap Contacts Section */
  $j("tr.trsectionContacts").wrapAll('<div id="ContactsSection" class=""><div class="row"></div></div>');
  $j("div#ContactsSection").insertAfter( $j("div#StudentSection") );
  $j("div#ContactsSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Contacts</h2>');
  /* Wrap Subsections */
  $j("tr.contacts-std:first").before( '<tr class="headerrow trsectionContacts contacts-std"> <td></td> <td class="bold">Contact 1</td> <td class="bold">Contact 2</td> </tr>');
  $j("tr.contacts-emergency:first").before('<tr class="headerrow trsectionContacts contacts-emergency"> <td></td> <td class="bold">E-Contact 1</td> <td class="bold">E-Contact 2</td> </tr>');
  $j("tr.contacts-guardians:first").before('<tr class="headerrow trsectionContacts contacts-guardians"> <td></td> <td class="bold">Guardian 1</td> <td class="bold">Guardian 2</td> </tr>');
  $j("tr.contacts-parents:first").before('<tr class="headerrow trsectionContacts contacts-parents"> <td></td> <td class="bold">Father</td> <td class="bold">Mother</td> </tr>');
  
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
