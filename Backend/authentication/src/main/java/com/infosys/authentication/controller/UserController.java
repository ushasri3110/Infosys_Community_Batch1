package com.infosys.authentication.controller;

import com.infosys.authentication.dto.LoginDto;
import com.infosys.authentication.exception.LoginException;
import com.infosys.authentication.exception.SignupException;
import com.infosys.authentication.model.User;
import com.infosys.authentication.response.AuthResponse;
import com.infosys.authentication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/auth/signup")
    public AuthResponse signUp(@RequestBody User user) throws SignupException {
        return userService.signUp(user);
    }

    @PostMapping("auth/login")
    public AuthResponse login(@RequestBody LoginDto loginDto) throws LoginException {
        return userService.login(loginDto);
    }
}
