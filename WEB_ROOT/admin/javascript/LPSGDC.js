function AddGDfields(){
  var $trHomePhone =  $j( "form input#fieldHomePhone" ).parent().parent();
  var $trRaceCode = $j( "form td:contains('MA Race Code')" ).parent();
  var $trGradYear = $j( "form input#fieldGradYear" ).parent().parent();
  var $trStuNum = $j( "form input#fieldStuNum" ).parent().parent();
  var $trMomHomePhone = $j( "form input#fieldMotherHomePhone" ).parent().parent();
  /* Tables are built bottom-to-top */
  /* Insert Custom 'Student' Fields */
  $trHomePhone.after( $j("div#LPS-GDCustomhiddentable tr#trfieldStudent_LPSemail") );
  $trHomePhone.after( $j("div#LPS-GDCustomhiddentable tr#trfieldStudent_Personalemail") );
  $trHomePhone.after( $j("div#LPS-GDCustomhiddentable tr#trfieldStudent_Mobile") );
  
  /* Insert Custom 'Contacts' Fields */
  $trMomHomePhone.after( $j("div#LPS-GDCustomhiddentable tr#trfieldParents_old") );
  $trMomHomePhone.after( $j("div#LPS-GDCustomhiddentable tr#trfieldGuardians_old") );
  $trMomHomePhone.after( $j("div#LPS-GDCustomhiddentable tr#trfieldEmergencyContacts") );
  $trMomHomePhone.after( $j("div#LPS-GDCustomhiddentable tr#trfieldContacts") );
  
  /* Insert Custom 'Ethnicity/Race' Fields */
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trselectMilitary") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trfieldBirthCity") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trcheckboxIncludeSASID") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trcheckboxIncludeSIMS") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trcheckboxExcludeState") );
  
  /*
    Insert Custom 'Adminstrative' Fields
    NOTES:
      -Tossing rows in after RaceCode, just need them in the table and don't think original placement matters too much 
      -Date fields not showing up
  */
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trselect504") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trfieldSPEDCode") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trfieldFLEPDate") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trfieldELCode") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trfieldSchoolCode") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trselectEntryGrade") );
  $trRaceCode.after( $j("div#LPS-GDCustomhiddentable tr#trfieldEntryDate") );
  
  /* Insert Custom 'Graduation' Fields */
  $trGradYear.after( $j("div#LPS-GDCustomhiddentable tr#trselectGradCoreCompletion") );
  $trGradYear.after( $j("div#LPS-GDCustomhiddentable tr#trselectGradPlan") );
  $trGradYear.after( $j("div#LPS-GDCustomhiddentable tr#trfieldCohort") );
  $trGradYear.after( $j("div#LPS-GDCustomhiddentable tr#trfieldGradDate") );
  
  /* TODO:Insert Custom 'Legal' fields */
  
  
  /* 
    Insert Custom 'Other' Fields
    NOTES: 
      -Putting 'other-lps' items after 'other-builtIn' items 
  */
  $j( "form input#fieldPrevStuId" ).parent().parent().after( $j("div#LPS-GDCustomhiddentable tr#trselectGradeLvl") );
  $trStuNum.after( $j("div#LPS-GDCustomhiddentable tr#trselectTeamFlag") );
  $trStuNum.after( $j("div#LPS-GDCustomhiddentable tr#trselectOriginCountry") );
  $trStuNum.after( $j("div#LPS-GDCustomhiddentable tr#trselectBirthState") );
  $trStuNum.after( $j("div#LPS-GDCustomhiddentable tr#trfieldTransferFrom") );
  $trStuNum.after( $j("div#LPS-GDCustomhiddentable tr#trselectEnrollmentStatus") );
  $trStuNum.after( $j("div#LPS-GDCustomhiddentable tr#trcheckboxIsImmigrant") );
  $trStuNum.after( $j("div#LPS-GDCustomhiddentable tr#trfieldSASID") );
  $trStuNum.after( $j("div#LPS-GDCustomhiddentable tr#trselectELStatus") );
  $trStuNum.after( $j("div#LPS-GDCustomhiddentable tr#trcheckboxIsEL") );
  $trStuNum.after( $j("div#LPS-GDCustomhiddentable tr#trselectFirstYearEL") );
  
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
  $j( "form input#lastName" ).parent().parent().addClass( "trsectionStudent student-name" ); /*First = 003, Middle = 004, Last = 005*/
  /* ----------Home_Address----------- */
  $j( "form td:contains('Home Address')" ).not("td:contains('Mailing Address')").parent().addClass( "trsectionStudent student-address" );
  //$j( "form td:contains('~[text:psx.html.admin_students.generaldemographics.home_address]')" ).not("td:contains('Mailing Address')").parent().addClass( "trsectionStudent student-address" );
  /*st, apt*/
  $j( "form input#pstreet" ).parent().parent().addClass( "trsectionStudent student-address" );
  $j( "form input#papt" ).parent().parent().addClass( "trsectionStudent student-address" );
  /*city, state, zip*/
  $j( "form input#pcity" ).parent().parent().addClass( "trsectionStudent student-address" ); /* DOE014 */
  $j( "form select#pstate" ).parent().parent().addClass( "trsectionStudent student-address" );
  $j( "form input#pzip" ).parent().parent().addClass( "trsectionStudent student-address" ); /* DOE051 */
  /*utility*/
  $j( "form input#pgeocode" ).parent().parent().addClass( "trsectionStudent student-address" );
  $j( "form span#validatePrimaryAddress" ).parent().parent().addClass( "trsectionStudent student-address" );
  /* ---------Mailing_Address--------- */
  $j( "form td:contains('Mailing Address -')" ).parent().addClass( "trsectionStudent student-mail" ).removeClass("student-address"); /* Gets class cause it has "Home address" in the field */
  $j( "form td:contains('~[text:psx.html.admin_students.generaldemographics.mailing_address_]')" ).parent().addClass( "trsectionStudent student-mail" );
  /*mail(st, apt)*/
  $j( "form input#mstreet" ).parent().parent().addClass( "trsectionStudent student-mail" );
  $j( "form input#mapt" ).parent().parent().addClass( "trsectionStudent student-mail" );
  /*mail(city, mstate, zip)*/
  $j( "form input#mcity" ).parent().parent().addClass( "trsectionStudent student-mail" );
  $j( "form select#mstate" ).parent().parent().addClass( "trsectionStudent student-mail" );
  $j( "form input#mzip" ).parent().parent().addClass( "trsectionStudent student-mail" );
  /*mail(utility)*/
  $j( "form input#mgeocode" ).parent().parent().addClass( "trsectionStudent student-mail" );
  $j( "form span#validateMailingAddress" ).parent().parent().addClass( "trsectionStudent student-mail" );
  /* -----------Phone/Email----------- */
  $j( "form input#fieldHomePhone" ).parent().parent().addClass( "trsectionStudent student-contactInfo" );
  $j( "form tr#trfieldStudent_Mobile" ).addClass( "trsectionStudent student-contactInfo" );
  $j( "form tr#trfieldStudent_Personalemail" ).addClass( "trsectionStudent student-contactInfo" );
  $j( "form tr#trfieldStudent_LPSemail" ).addClass( "trsectionStudent student-contactInfo" );
  
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
  $j( "form tr#trfieldParents_old" ).addClass( "trsectionContacts contacts-parents" );
  $j( "form tr#trfieldGuardians_old" ).addClass( "trsectionContacts contacts-guardians" );
  $j( "form tr#trfieldEmergencyContacts" ).addClass( "trsectionContacts contacts-emergency" );
  $j( "form tr#trfieldContacts" ).addClass( "trsectionContacts contacts-std" );
  
  /* Ethnicity/Race/Other State Fields
  -----------Ethnicity_&_Race---------DOE[008, 010, 029]
    Notes:
      -Two 'type = "hidden"' inputs above race selection box:
        ids = "hiddenFieldSaveRace", "r_none_storage"
      -Ethnicity & Race selections are nested in two <div> elements
        .parent() x2
  */
  $j( "form input#radioFedEthYes" ).parent().parent().parent().parent().addClass( "trsectionEthRace ethrace-select" );  /* DOE010 (Hispanic/Latino) */
  $j( "form input#race_A" ).parent().parent().parent().parent().addClass( "trsectionEthRace ethrace-select" ); /* DOE010 (Race) */
  $j( "form td:contains('MA Race Code')" ).parent().addClass( "trsectionEthRace ethrace-select" ); /* DOE010 Race code (could be autoCalculated from two fields above?)  */
  /* -------Other_State_General------- */
  $j( "form tr#trcheckboxExcludeState" ).addClass( "trsectionEthRace ethrace-other" );
  $j( "form tr#trcheckboxIncludeSIMS" ).addClass( "trsectionEthRace ethrace-other" );
  $j( "form tr#trcheckboxIncludeSASID" ).addClass( "trsectionEthRace ethrace-other" );
  $j( "form tr#trfieldBirthCity" ).addClass( "trsectionEthRace ethrace-other" );  /* DOE008 */
  $j( "form tr#trselectMilitary" ).addClass( "trsectionEthRace ethrace-other" );  /* DOE029 */
  
  /* LPS Office Information
  --------General_Info----- */
  $j( "form tr#trfieldEntryDate" ).addClass( "trsectionOffice office-general" );
  $j( "form tr#trselectEntryGrade" ).addClass( "trsectionOffice office-general" ); 
  $j( "form tr#trfieldSchoolCode" ).addClass( "trsectionOffice office-general" ); /* DOE015 */
  /* -------EL_Info-------- */
  $j( "form tr#trfieldELCode" ).addClass( "trsectionOffice office-el" ); /* DOE027 or 24? maybe 41? */
  $j( "form tr#trfieldFLEPDate" ).addClass( "trsectionOffice office-el" );
  /* ------SPED_Info------- */
  $j( "form tr#trfieldSPEDCode" ).addClass( "trsectionOffice office-sped" ); /* DOE032, 34, 36, 38, or 40? */
  $j( "form tr#trselect504" ).addClass( "trsectionOffice office-sped" ); /* DOE039 */
  
  /* LPS Graduation
  --------Info----- */
  $j( "form input#fieldGradYear" ).parent().parent().addClass( "trsectionGrad" );
  $j( "form tr#trselectGradCoreCompletion" ).addClass( "trsectionGrad" ); /* DOE037 */
  $j( "form tr#trselectGradPlan" ).addClass( "trsectionGrad" ); /* DOE033 */
  $j( "form tr#trfieldCohort" ).addClass( "trsectionGrad" );
  $j( "form tr#trfieldGradDate" ).addClass( "trsectionGrad" );
  
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
  $j( "form input#fieldArea" ).parent().parent().addClass( "trsectionOther other-builtIn" );
  $j( "form input#fieldGuardianship" ).parent().parent().addClass( "trsectionOther other-builtIn" );
  $j( "form input#fieldSSN" ).parent().parent().addClass( "trsectionOther other-builtIn" );
  $j( "form input#fieldStuNum" ).parent().parent().addClass( "trsectionOther other-builtIn" );  /* DOE001 */
  $j( "form input#fieldPrevStuId" ).parent().parent().addClass( "trsectionOther other-builtIn" );
  $j( "form tr#trselectGradeLvl" ).addClass( "trsectionOther other-builtIn" );  /* DOE016 */
  $j( "form input#fieldGuardianEmail" ).parent().parent().addClass( "trsectionOther other-builtIn" );
  $j( "form select#primaryethnicity" ).parent().parent().addClass( "trsectionOther other-builtIn" );
  
  /* Other-Unused(LPS)
  ---------Info------- */
  /* $j( "form tr#trselectNCLB" ).addClass( "trsectionOther other-lps" ); */
  $j( "form tr#trselectFirstYearEL" ).addClass( "trsectionOther other-lps" );  /* DOE021 */
  $j( "form tr#trcheckboxIsEL" ).addClass( "trsectionOther other-lps" );  /* DOE025 */
  $j( "form tr#trselectELStatus" ).addClass( "trsectionOther other-lps" );  /* DOE026 */
  $j( "form tr#trfieldSASID" ).addClass( "trsectionOther other-lps" );  /* DOE002 */
  $j( "form tr#trcheckboxIsImmigrant" ).addClass( "trsectionOther other-lps" );  /* DOE022 */
  $j( "form tr#trselectEnrollmentStatus" ).addClass( "trsectionOther other-lps" );  /* DOE012 */
  $j( "form tr#trfieldTransferFrom" ).addClass( "trsectionOther other-lps" );  
  $j( "form tr#trselectBirthState" ).addClass( "trsectionOther other-lps" );  
  $j( "form tr#trselectOriginCountry" ).addClass( "trsectionOther other-lps" );  /* DOE023 */
  $j( "form tr#trselectTeamFlag" ).addClass( "trsectionOther other-lps" );
  
  /*
    TODO: Fields Needed
      -NCLB/Title I School Choice (Row 1)
  */
   
  /*============'EVERYTHING ELSE' Catcher============*/
  $VarEverythingElse = $j("form > div.box-round > table.linkDescList > tbody > tr");
  $VarEverythingElse = ($VarEverythingElse).not("form tr.trsectionStudent");
  $VarEverythingElse = ($VarEverythingElse).not("form tr.trsectionContacts");
  $VarEverythingElse = ($VarEverythingElse).not("form tr.trsectionEthRace");
  $VarEverythingElse = ($VarEverythingElse).not("form tr.trsectionOffice");
  $VarEverythingElse = ($VarEverythingElse).not("form tr.trsectionGrad");
  $VarEverythingElse = ($VarEverythingElse).not("form tr.trsectionLegal");
  $VarEverythingElse = ($VarEverythingElse).not("form tr.trsectionOther");
  $VarEverythingElse.addClass( "trsectionEverythingElse" );
  
  /* Wrap Student Section */
  $j("form tr.trsectionStudent").wrapAll('<div id="StudentSection" class=""><div class="row"></div></div>'); /* Starts at top */
  $j("form div#StudentSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Student Information</h2>');
  /* Wrap Subsections */
  $j("form tr.student-contactInfo:first").before('<tr class="headerrow trsectionStudent student-contactInfo"><td colspan="2" class="bold">Phone & Email</td></tr>');
  $j("form tr.student-name:first").before('<tr class="headerrow trsectionStudent student-name"><td colspan="2" class="bold">Name</td></tr>');
  
  
  /* Backup headers
  $j("form tr.student-name").wrapAll('<div id="student-name" class=""><div class="row"></div></div>');
  $j("form div#student-name").before('<h2 class="toggle expanded" title="Click here to expand or collapse" style="">Name</h2>');
  $j("form tr.student-address").wrapAll('<div id="student-address" class=""><div class="row"></div></div>');
  $j("form div#student-address").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Home Address</h2>');
  $j("form tr.student-mail").wrapAll('<div id="student-mail" class=""><div class="row"></div></div>');
  $j("form div#student-mail").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Mailing Address</h2>');
  $j("form tr.student-contactInfo").wrapAll('<div id="student-contactInfo" class=""><div class="row"></div></div>');
  $j("form div#student-contactInfo").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Phone & Email</h2>');
  */
  /* 
    Home address row still shows up twice at bottom, don't know how they work.
      Possible Solution: Remove 'student-address' class from headerrows and select $j( "form td.student-address:contains('Home Address')" )
  */
  
  /* Wrap 'Everything Else' (fields that exist but haven't been given a proper section) */
  $VarEverythingElse.wrapAll('<div id="EverythingElseSection" class=""><div class="row"></div></div>'); /* Build bottom-to-top */
  $j("div#EverythingElseSection").insertAfter( $j("form div#StudentSection") );
  $j("div#EverythingElseSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Everything Else</h2>');
  /* Wrap Subsections */
  
  
  /* Wrap Other Section */
  $j("form tr.trsectionOther").wrapAll('<div id="OtherSection" class=""><div class="row"></div></div>');
  $j("div#OtherSection").insertAfter( $j("form div#StudentSection") );
  $j("div#OtherSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Other</h2>');
  /* Wrap Subsections */
  $j("tr.trsectionOther:first").before('<tr class="headerrow trsectionOther"><td colspan="2" class="bold">Information</td></tr>');
  
  /* Wrap Legal Section */
  $j("form tr.trsectionLegal").wrapAll('<div id="LegalSection" class=""><div class="row"></div></div>');
  $j("div#LegalSection").insertAfter( $j("form div#StudentSection") );
  $j("div#LegalSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Legal Information</h2>');
  /* Wrap Subsections */
  
  /* Wrap Grad Section */
  $j("form tr.trsectionGrad").wrapAll('<div id="GradSection" class=""><div class="row"></div></div>');
  $j("div#GradSection").insertAfter( $j("form div#StudentSection") );
  $j("div#GradSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Graduation Information</h2>');
  /* Wrap Subsections */
  $j("tr.trsectionGrad:first").before('<tr class="headerrow trsectionGrad"><td colspan="2" class="bold">Information</td></tr>');
  
  /* Wrap Office Section*/
  $j("form tr.trsectionOffice").wrapAll('<div id="OfficeSection" class=""><div class="row"></div></div>');
  $j("form div#OfficeSection").insertAfter( $j("form div#StudentSection") );
  $j("form div#OfficeSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Administrative Information</h2>');
  /* Wrap Subsections */
  $j("form tr.office-general:first").before('<tr class="headerrow trsectionOffice office-general"><td colspan="2" class="bold">District Information</td></tr>');
  $j("form tr.office-el:first").before('<tr class="headerrow trsectionOffice office-el"><td colspan="2" class="bold">EL Information</td></tr>');
  $j("form tr.office-sped:first").before('<tr class="headerrow trsectionOffice office-sped"><td colspan="2" class="bold">SPED Information</td></tr>');
  
  /* Wrap Race Section */
  $j("form tr.trsectionEthRace").wrapAll('<div id="EthRaceSection" class=""><div class="row"></div></div>');
  $j("form div#EthRaceSection").insertAfter( $j("form div#StudentSection") );
  $j("form div#EthRaceSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Ethnicity/Race Information</h2>');
  /* Wrap Subsections */
  $j("form tr.ethrace-select:first").before('<tr class="headerrow trsectionEthRace ethrace-select"><td colspan="2" class="bold">Ethnicity & Race</td></tr>');
  $j("form tr.ethrace-other:first").before('<tr class="headerrow trsectionEthRace ethrace-other"><td colspan="2" class="bold">Other State General</td></tr>');
  
  /* Wrap Contacts Section */
  $j("form tr.trsectionContacts").wrapAll('<div id="ContactsSection" class=""><div class="row"></div></div>');
  $j("form div#ContactsSection").insertAfter( $j("form div#StudentSection") );
  $j("form div#ContactsSection").before('<h2 class="toggle expanded" title="Click here to expand or collapse">Contacts</h2>');
  /* Wrap Subsections */
  $j("form tr.contacts-std:first").before( '<tr class="headerrow trsectionContacts contacts-std"> <td></td> <td class="bold">Contact 1</td> <td class="bold">Contact 2</td> </tr>');
  $j("form tr.contacts-emergency:first").before('<tr class="headerrow trsectionContacts contacts-emergency"> <td></td> <td class="bold">E-Contact 1</td> <td class="bold">E-Contact 2</td> </tr>');
  $j("form tr.contacts-guardians:first").before('<tr class="headerrow trsectionContacts contacts-guardians"> <td></td> <td class="bold">Guardian 1</td> <td class="bold">Guardian 2</td> </tr>');
  $j("form tr.contacts-parents:first").before('<tr class="headerrow trsectionContacts contacts-parents"> <td></td> <td class="bold">Father</td> <td class="bold">Mother</td> </tr>');
  
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
