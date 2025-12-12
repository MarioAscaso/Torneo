package com.ccc.tournament.dashboard.gamescrud.updategame.application;

import com.daw.competitionGames.gamescrud.updategame.domain.service.UpdateGameService;
import org.springframework.stereotype.Service;

@Service
public class UpdateGameApp {
    private final UpdateGameService service;

    public UpdateGameApp(UpdateGameService service) {this.service = service;}

    public void execute(Long id, UpdateGameRequest request) {service.execute(id, request);}
}