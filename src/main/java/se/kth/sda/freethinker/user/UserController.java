package se.kth.sda.freethinker.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import se.kth.sda.freethinker.auth.AuthService;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    AuthService authService;

    @Autowired
    UserService userService;

    @PutMapping("")
    public User create(@RequestBody User newUser) {
        return userService.update(newUser);
    }

    @GetMapping("/loggedInUser")
    public User getLoggedInUser() {
        //return authService.getLoggedInUserEmail();
        return userService.findUserByEmail(authService.getLoggedInUserEmail());

    }

}
