console.log('wired up!')
console.log($);

var forEach = function(arr, cb){
   for(var i = 0 ; i < arr.length; i+=1){
      cb(arr[i], i, arr)
   }
}

   var congressContainer = document.querySelector('.congress-peeps')

   var putDataOnPage = function(returnedData){
      console.log(returnedData)


   forEach(returnedData.results , function(congressObj){
       //console.log(congressObj.first_name+ " " + congressObj.last_name, congressObj.title + "--" + congressObj.party + "-" + congressObj.state_name, congressObj.oc_email, congressObj.website)
       var tossUp =     '<div class="col-sm-4 col-md-4">'
       tossUp +=       '<div class="thumbnail green">'
       tossUp +=         '<div class="caption">'
       tossUp +=           '<h3>' + congressObj.first_name+ " " + congressObj.last_name + '</h3>'
       tossUp +=           '<p>' + congressObj.title + "--" + congressObj.party + "-" + congressObj.state_name + '</p>'
       tossUp +=           '<ul>'
       tossUp +=              '<li>' + congressObj.oc_email + '</li>'
       tossUp +=              '<li>' + congressObj.fec_ids + '</li>'
       tossUp +=              '<li>' + congressObj.twitter_id + '</li>'
       tossUp +=           '</ul>'
       tossUp +=           '<p>'  + "Term End Date " + congressObj.term_end +'</p>'
       tossUp +=         '</div>'
       tossUp +=       '</div>'
       tossUp +=     '</div>'

     congressContainer.innerHTML += tossUp


   })
   }

$.getJSON('http://congress.api.sunlightfoundation.com/legislators?apikey=0156daaa29b04cfeb56537b9329ba35d').then(putDataOnPage)
