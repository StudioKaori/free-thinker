package se.kth.sda.freethinker.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import se.kth.sda.freethinker.auth.AuthService;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    AuthService authService;

    @Autowired
    UserService userService;

    @GetMapping("/loggedInUser")
    public User getLoggedInUser() {
        //return authService.getLoggedInUserEmail();
        return userService.findUserByEmail(authService.getLoggedInUserEmail());

    }

}
