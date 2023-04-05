export default function getCardImage(cardID:number, cardGame:string) {

    if (cardGame == 'Happy Little Dinosaurs') {
        switch(cardID) {
            case 1:
                return require('../assets/happy_little_dinosaurs/a_day_at_the_beach.png');;
            case 2:
                return require('../assets/happy_little_dinosaurs/armed_and_dangerous.png');;
            case 3:
                return require('../assets/happy_little_dinosaurs/baddest_hair_day.png');
            case 4:
                return require('../assets/happy_little_dinosaurs/bright_idea.png');
            case 5:
                return require('../assets/happy_little_dinosaurs/casual_afternoon_stroll.png');
            case 6:
                return require('../assets/happy_little_dinosaurs/downpour.png');
            case 7:
                return require('../assets/happy_little_dinosaurs/emergency_ex_it.png');
            case 8:
                return require('../assets/happy_little_dinosaurs/feeling_squirrely.png');
            case 9:
                return require('../assets/happy_little_dinosaurs/fired_up.png');
            case 10:
                return require('../assets/happy_little_dinosaurs/ghosted.png');
            case 11:
                return require('../assets/happy_little_dinosaurs/leaf_me_alone.png');  
            case 12:
                return require('../assets/happy_little_dinosaurs/left_behind_again.png');  
            case 13:
                return require('../assets/happy_little_dinosaurs/lil_cannibal.png');  
            case 14:
                return require('../assets/happy_little_dinosaurs/love_hurts.png');  
            case 15:
                return require('../assets/happy_little_dinosaurs/meteor.png');  
            case 16:
                return require('../assets/happy_little_dinosaurs/ooh_burn.png');  
            case 17:
                return require('../assets/happy_little_dinosaurs/outer_circle.png');  
            case 18:
                return require('../assets/happy_little_dinosaurs/shark_with_legs.png');  
            case 19:
                return require('../assets/happy_little_dinosaurs/spa_day.png');  
            case 20:
                return require('../assets/happy_little_dinosaurs/stomped.png');
            case 21:
                return require('../assets/happy_little_dinosaurs/the_future_is_bleak.png');  
            case 22:
                return require('../assets/happy_little_dinosaurs/the_sad_truth.png');  
            case 23:
                return require('../assets/happy_little_dinosaurs/this_feels_personal.png');  
            case 24:
                return require('../assets/happy_little_dinosaurs/trapped.png');  
            case 25:
                return require('../assets/happy_little_dinosaurs/uncommon_cold.png');  
            case 26:
                return require('../assets/happy_little_dinosaurs/bonehead.png');  
            case 27:
                return require('../assets/happy_little_dinosaurs/bow_and_dino.png');
            case 28:
                return require('../assets/happy_little_dinosaurs/cool_stick.png');  
            case 29:
                return require('../assets/happy_little_dinosaurs/delicious_smoothie.png');  
            case 30:
                return require('../assets/happy_little_dinosaurs/dino_grabber.png');
            case 31:
                return require('../assets/happy_little_dinosaurs/fire_spray.png');
            case 32:
                return require('../assets/happy_little_dinosaurs/flaming_chainsaw.png');
            case 33:
                return require('../assets/happy_little_dinosaurs/grappling_snake.png');
            case 34:
                return require('../assets/happy_little_dinosaurs/grave_maker.png');
            case 35:
                return require('../assets/happy_little_dinosaurs/handy_pan.png');
            case 36:
                return require('../assets/happy_little_dinosaurs/run_home_bat.png');
            case 37:
                return require('../assets/happy_little_dinosaurs/hungry_plant.png');
            case 38:
                return require('../assets/happy_little_dinosaurs/iced_ptea.png');
            case 39:
                return require('../assets/happy_little_dinosaurs/meteor_cannon.png');
            case 40:
                return require('../assets/happy_little_dinosaurs/mouth_trap.png');
            case 41:
                return require('../assets/happy_little_dinosaurs/pet_rock.png');
            case 42:
                return require('../assets/happy_little_dinosaurs/special_star_fruit.png');
            case 43:
                return require('../assets/happy_little_dinosaurs/sting_stabber.png');
            case 44:
                return require('../assets/happy_little_dinosaurs/treenoculars.png');
            case 45:
                return require('../assets/happy_little_dinosaurs/disaster_insurance.png');
            case 46:
                return require('../assets/happy_little_dinosaurs/disaster_redirect.png');
            case 47:
                return require('../assets/happy_little_dinosaurs/score_booster.png');
            case 48:
                return require('../assets/happy_little_dinosaurs/score_inversion.png');
            case 49:
                return require('../assets/happy_little_dinosaurs/score_sapper.png');
        }
    } else if (cardGame == 'Here To Slay') {
        switch(cardID) {
            case 1:
                return require('../assets/here_to_slay/the_fist_of_reason.png');;
            case 2:
                return require('../assets/here_to_slay/the_charismatic_song.png');;
            case 3:
                return require('../assets/here_to_slay/the_protecting_horn.png');
            case 4:
                return require('../assets/here_to_slay/the_divine_arrow.png');
            case 5:
                return require('../assets/here_to_slay/the_shadow_claw.png');
            case 6:
                return require('../assets/here_to_slay/the_cloaked_sage.png');
            case 7:
                return require('../assets/here_to_slay/abyss_queen.png');
            case 8:
                return require('../assets/here_to_slay/artic_aries.png');
            case 9:
                return require('../assets/here_to_slay/anuran_cauldron.png');
            case 10:
                return require('../assets/here_to_slay/bloodwing.png');
            case 11:
                return require('../assets/here_to_slay/corrupted_sabretooth.png');
            case 12:
                return require('../assets/here_to_slay/crowned_serpent.png');
            case 13:
                return require('../assets/here_to_slay/dracos.png');
            case 14:
                return require('../assets/here_to_slay/dark_dragon_king.png');
            case 15:
                return require('../assets/here_to_slay/malamammoth.png');
            case 16:
                return require('../assets/here_to_slay/mega_slime.png');
            case 17:
                return require('../assets/here_to_slay/orthus.png');
            case 18:
                return require('../assets/here_to_slay/rex_major.png');
            case 19:
                return require('../assets/here_to_slay/terratuga.png');
            case 20:
                return require('../assets/here_to_slay/titan_wyvern.png');
            case 21:
                return require('../assets/here_to_slay/warworn_owlbear.png');
            case 22:
                return require('../assets/here_to_slay/bad_axe.png');
            case 23:
                return require('../assets/here_to_slay/bear_claw.png');
            case 24:
                return require('../assets/here_to_slay/beary_wise.png');
            case 25:
                return require('../assets/here_to_slay/fury_knuckle.png');
            case 26:
                return require('../assets/here_to_slay/heavy_bear.png');
            case 27:
                return require('../assets/here_to_slay/pan_chucks.png');
            case 28:
                return require('../assets/here_to_slay/qi_bear.png');
            case 29:
                return require('../assets/here_to_slay/tough_teddy.png');
            // case 30:
            //     return require('../assets/here_to_slay');
            // case 31:
            //     return require('../assets/here_to_slay');
            // case 32:
            //     return require('../assets/here_to_slay');
            // case 33:
            //     return require('../assets/here_to_slay');
            // case 34:
            //     return require('../assets/here_to_slay');
            // case 35:
            //     return require('../assets/here_to_slay');
            // case 36:
            //     return require('../assets/here_to_slay');
            // case 37:
            //     return require('../assets/here_to_slay');
            // case 38:
            //     return require('../assets/here_to_slay');
            // case 39:
            //     return require('../assets/here_to_slay');
            // case 40:
            //     return require('../assets/here_to_slay');
            // case 41:
            //     return require('../assets/here_to_slay');
            // case 42:
            //     return require('../assets/here_to_slay');
            // case 43:
            //     return require('../assets/here_to_slay');
            // case 44:
            //     return require('../assets/here_to_slay');
            // case 45:
            //     return require('../assets/here_to_slay');
            // case 46:
            //     return require('../assets/here_to_slay');
            // case 47:
            //     return require('../assets/here_to_slay');
            // case 48:
            //     return require('../assets/here_to_slay');
            // case 49:
            //     return require('../assets/here_to_slay');
            // case 50:
            //     return require('../assets/here_to_slay');
            // case 51:
            //     return require('../assets/here_to_slay');
            // case 52:
            //     return require('../assets/here_to_slay');
            // case 53:
            //     return require('../assets/here_to_slay');
            // case 54:
            //     return require('../assets/here_to_slay');
            // case 55:
            //     return require('../assets/here_to_slay');
            // case 56:
            //     return require('../assets/here_to_slay');
            // case 57:
            //     return require('../assets/here_to_slay');
            // case 58:
            //     return require('../assets/here_to_slay');
            // case 59:
            //     return require('../assets/here_to_slay');
            // case 60:
            //     return require('../assets/here_to_slay');
            // case 61:
            //     return require('../assets/here_to_slay');
            // case 62:
            //     return require('../assets/here_to_slay');
            // case 63:
            //     return require('../assets/here_to_slay');
            // case 64:
            //     return require('../assets/here_to_slay');
            // case 65:
            //     return require('../assets/here_to_slay');
            // case 66:
            //     return require('../assets/here_to_slay');
            // case 67:
            //     return require('../assets/here_to_slay');
            // case 68:
            //     return require('../assets/here_to_slay');
            // case 69:
            //     return require('../assets/here_to_slay');
            // case 70:
            //     return require('../assets/here_to_slay');
            // case 71:
            //     return require('../assets/here_to_slay');
            // case 72:
            //     return require('../assets/here_to_slay');
            // case 73:
            //     return require('../assets/here_to_slay');
            // case 74:
            //     return require('../assets/here_to_slay');
            // case 75:
            //     return require('../assets/here_to_slay');
            // case 76:
            //     return require('../assets/here_to_slay');
            // case 77:
            //     return require('../assets/here_to_slay');
            // case 78:
            //     return require('../assets/here_to_slay');
            // case 79:
            //     return require('../assets/here_to_slay');
            // case 80:
            //     return require('../assets/here_to_slay');
            // case 81:
            //     return require('../assets/here_to_slay');
            // case 82:
            //     return require('../assets/here_to_slay');
            // case 83:
            //     return require('../assets/here_to_slay');
            // case 84:
            //     return require('../assets/here_to_slay');
            // case 85:
            //     return require('../assets/here_to_slay');
            // case 86:
            //     return require('../assets/here_to_slay');
            // case 87:
            //     return require('../assets/here_to_slay');
            // case 88:
            //     return require('../assets/here_to_slay');
            // case 89:
            //     return require('../assets/here_to_slay');
            // case 90:
            //     return require('../assets/here_to_slay');
            // case 91:
            //     return require('../assets/here_to_slay');
            // case 92:
            //     return require('../assets/here_to_slay');
            // case 93:
            //     return require('../assets/here_to_slay');
            // case 94:
            //     return require('../assets/here_to_slay');
            // case 95:
            //     return require('../assets/here_to_slay');
            
            }
            
    }
}