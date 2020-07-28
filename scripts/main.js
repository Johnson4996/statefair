import {TicketBooth} from "./TicketBooth.js"
import {RideTicketHolders} from "./rides/RideTicketHolders.js"
import { FoodTicketHolders } from "./food/FoodTicketHolders.js"
import { GameTicketHolders } from "./games/GameTicketHolders.js"
import { SideshowTicketHolders } from "./sideshows/SideshowTicketHolder.js"
import { FullPackageTicketHolders } from "./fullpackage/FullPackageTicketHolders.js"

// Import and invoke the ticket booth component function
TicketBooth()   
RideTicketHolders()
FoodTicketHolders()
GameTicketHolders()
SideshowTicketHolders()
FullPackageTicketHolders()