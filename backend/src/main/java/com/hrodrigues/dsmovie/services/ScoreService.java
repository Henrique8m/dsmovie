package com.hrodrigues.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hrodrigues.dsmovie.dto.MovieDTO;
import com.hrodrigues.dsmovie.dto.ScoreDTO;
import com.hrodrigues.dsmovie.entities.Movie;
import com.hrodrigues.dsmovie.entities.Score;
import com.hrodrigues.dsmovie.entities.User;
import com.hrodrigues.dsmovie.repositories.MovieRepository;
import com.hrodrigues.dsmovie.repositories.ScoreRepository;
import com.hrodrigues.dsmovie.repositories.UserRepository;


@Service
public class ScoreService {
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ScoreRepository scoreRepository;

	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {
		User user = userRepository.findByEmail(dto.getEmail());
		
		if(user == null) {
			user = userRepository.saveAndFlush(new User());
			user.setEmail(dto.getEmail());
			
		}
				
		Movie movie = movieRepository.findById(dto.getMovieId()).get();
		Score score = new Score(movie, user, dto.getScore());
		score = scoreRepository.saveAndFlush(score);
		
		double sum = 0.0;
		for (Score x : movie.getScores()) {
			sum = sum + x.getValue();
		}
		
		double avg = sum / movie.getScores().size();
		movie.setScore(avg);
		movie.setCount(movie.getScores().size());
		
		return new MovieDTO(movieRepository.save(movie));
		
	}
	
}
