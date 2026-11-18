
function toggleMenu(){var n=document.getElementById('mainNav'); n.classList.toggle('open');}
function copyText(t,msg){ if(navigator.clipboard){ navigator.clipboard.writeText(t).then(()=>alert(msg||'Copied')); } else { prompt('Copy:',t);} }
function filterProducts(cat, btn){
  document.querySelectorAll('.filter-bar button').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  document.querySelectorAll('[data-cat]').forEach(el=>{
    if(cat==='all' || el.getAttribute('data-cat')===cat) el.style.display='';
    else el.style.display='none';
  });
}
function sendEnquiry(e){
  e.preventDefault();
  var f=document.getElementById('enquiryForm');
  var d=new FormData(f);
  var get=k=> (d.get(k)||'').toString().trim();
  var subject='New Enquiry — '+(get('product')||'General')+' — '+(get('company')||get('name')||'');
  var body='Hello Heliovedha Chemicals,\n\nI would like to enquire about:\n\nProduct Name: '+get('product')+'\nCAS No.: '+get('cas')+'\nCategory: '+get('category')+'\nSpecification / Grade: '+get('spec')+'\nQuantity: '+get('quantity')+' '+get('unit')+'\nPackaging Required: '+get('packaging')+'\nDelivery Location / Warehouse City: '+get('delivery')+'\n\nYour Name: '+get('name')+'\nCompany: '+get('company')+'\nEmail: '+get('email')+'\nPhone: '+get('phone')+'\n\nMessage:\n'+get('message')+'\n\nSent from heliovedha.com';
  var mailto='mailto:sales@heliovedha.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  document.getElementById('formSuccess').style.display='block';
  window.location.href=mailto;
  return false;
}
// Pre-fill category from URL ?category=...
(function(){
  var params=new URLSearchParams(window.location.search);
  var cat=params.get('category');
  if(cat){
    var sel=document.getElementById('category');
    if(sel) sel.value=cat;
    var prod=document.getElementById('product');
    if(prod && !prod.value) prod.value=cat;
  }
})();
