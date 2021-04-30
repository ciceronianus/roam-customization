- #42SmartBlock Embed - universal 
    - <%SET:HTMLcode,<%INPUT:HTML code%>%> <%NOBLOCKOUTPUT%> 
    - <%SET:iFrameWidth,<%INPUT:Width (number only) %>%> <%NOBLOCKOUTPUT%> 
    - <%SET:iFrameHeight,<%INPUT:Height (number only) %>%> <%NOBLOCKOUTPUT%> 
    - <%JAVASCRIPT:  
roam42.smartBlocks.activeWorkflow.vars["HTMLcode"] = roam42.smartBlocks.activeWorkflow.vars["HTMLcode"].replace(/"/g, "'");
roam42.smartBlocks.activeWorkflow.vars["HTMLcode"] = "<div>" + roam42.smartBlocks.activeWorkflow.vars["HTMLcode"] + "</div>"
%><%NOBLOCKOUTPUT%>
    - :hiccup[:iframe {:srcdoc "<%GET:HTMLcode%>", :width "<%GET:iFrameWidth%>", :height "<%GET:iFrameHeight%>"}] 
