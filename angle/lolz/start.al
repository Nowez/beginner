%1

# - at the end = run command
# , at the end = test the command
# . at the end = continue the command

[head-r = "type(=40%)"(if: "type" ==< 40%)"
  text/add = "Hello"(color:gray,size:42,font:comic-sans)-

  pic/bg = "C:\applz"(color:standard).
  .bg = (script/movement(x,y,z(.))).
  .movement = (movement2/time)
  ]
