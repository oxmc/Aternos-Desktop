window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed, Removing ads...');
    /* Remove ads */
    setTimeout(async function () {
      /* Functions */
      function removefile(filename, filetype){
        var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
        var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
        var allsuspects=document.getElementsByTagName(targetelement)
        for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
          if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
          allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
          console.log(`Removed: ${filename}`);
        }
      }
      function removeElementsByClass(className){
        const elements = document.getElementsByClassName(className);
        while(elements.length > 0){
          elements[0].parentNode.removeChild(elements[0]);
        }
      }
      /*  Main loop */
      for (i = 0; i < 10; i++) {
        removefile("analytics.js", "js");
        removefile("rml.min.js", "js");
        removefile("adngin.js", "js");
        removefile("AVmanager.js", "js");
        removeElementsByClass("ad");
        removeElementsByClass("header-ad-link");
        removeElementsByClass("AV5f75b4e084a6c408775b9937");
        removeElementsByClass("side-bar");
        removeElementsByClass("snigel-adhesive");
        removeElementsByClass("server-tutorials");
        if (document.getElementById('adngin-Leaderboard_Adhesion-0-adhesive')) {
          document.getElementById('adngin-Leaderboard_Adhesion-0-adhesive').remove();
        }
        if (document.getElementById('aniBox')) {
          document.getElementById('aniBox').remove();
        }
      }
      var script = document.getElementsByTagName("script");
      for(var i = 0, max = script.length; i < max; i++)  {
        let b = script[i]
        if (i == 5) {
          b.remove();
        }
      }
      var ad2 = document.getElementsByTagName("aside");
      for(var i = 0, max = ad2.length; i < max; i++)  {
        ad2[0].parentNode.removeChild(ad2[0]);
      }
    }, 1000)
});
