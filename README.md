Place holder directive which is compatible with all browsers above ie 8 .
Written on angular js 1.2 also supported by angular js 1.5


Place holder directive on input tags , be it password or text , add attribute ngc-place-holder="<<flag to be used for the span which should be hidden this is the id of the span>>"

For example 
&lt;input ngc-place-holder=&quot;placeHolder&quot; type=&quot;text&quot; name=&quot;userEmail&quot; ng-model=&quot;loginObject.username&quot; class=&quot;text&quot; placeholder=&quot;Email&quot; ng-pattern=&quot;/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/&quot; required /&gt;
          &lt;span ng-show=&quot;placeHolder&quot;&gt;Enter Email&lt;/span&gt;
          
When you click on input a class hidden will be added on span and as you focus out class will be removed . 
Also a nullcheck attribute can be used , if value of input is set to null dynamically.

In case of issues please feel free to post comments or mail at gaurav_deal@rediffmail.com


