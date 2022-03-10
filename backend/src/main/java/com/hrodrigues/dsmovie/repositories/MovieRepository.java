package com.hrodrigues.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hrodrigues.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
