------ejs---------
set up:
npm init
npm i express
npm i ejs

------about ejs--------
Use ejs instead of html
ejs stands for Embedded jS templates for both server and client side
basic syntax: 
<% 'Scriptlet' tag, for control-flow, no output
<%= Outputs the value into the template (HTML escaped)
<%- Outputs the unescaped value into the template

example
<% if (message) { %>
  <h2><%= message.name %></h2>
<% } %>

------resources-------
https://getbootstrap.com/
https://expressjs.com/
https://ejs.co/
https://nodejs.org/en/