package com.hrodrigues.dsmovie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrodrigues.dsmovie.dto.MovieDTO;
import com.hrodrigues.dsmovie.dto.ScoreDTO;
import com.hrodrigues.dsmovie.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {
	
	@Autowired
	private ScoreService service;
	
	
	@PutMapping
	public ResponseEntity<MovieDTO> saveScore(@RequestBody ScoreDTO dto){
		MovieDTO movieDto = service.saveScore(dto);
		
		return ResponseEntity.accepted().body(movieDto);
	}


}
