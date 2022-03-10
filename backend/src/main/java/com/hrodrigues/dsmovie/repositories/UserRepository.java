package com.hrodrigues.dsmovie.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.hrodrigues.dsmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	@Query
	Optional<User> findByEmail(String email);
	
}
