// import { Divider, IconButton, List, ListItem } from "material-ui";
// import React from "react";
//
// export default function SideDrawer() {
//   return (
//       <div>
//         <Drawer
//             className={classes.drawer}
//             variant="persistent"
//             anchor="right"
//             open={open}
//             classes={{
//               paper: classes.drawerPaper,
//             }}>
//           <div className={classes.drawerHeader}>
//             <IconButton onClick={handleDrawerClose}>
//               {theme.direction === "rtl" ? (
//                   <ChevronLeftIcon />
//               ) : (
//                   <ChevronRightIcon />
//               )}
//             </IconButton>
//           </div>
//           <Divider />
//           <List>
//             {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//                 <ListItem button key={text}>
//                   <ListItemIcon>
//                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItem>
//             ))}
//           </List>
//           <Divider />
//           <List>
//             {["All mail", "Trash", "Spam"].map((text, index) => (
//                 <ListItem button key={text}>
//                   <ListItemIcon>
//                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItem>
//             ))}
//           </List>
//         </Drawer>
//       </div>
//   );
// }
